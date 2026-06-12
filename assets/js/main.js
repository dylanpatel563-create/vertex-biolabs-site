/* ===========================================================
   VERTEX BIOLABS — site interactions
   Mobile nav · auto year · newsletter · contact (mailto) · cart
   =========================================================== */
(function () {
  'use strict';

  /* ---------- Mobile nav toggle ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () { links.classList.toggle('open'); });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') links.classList.remove('open');
    });
  }

  /* ---------- Auto year in footer ---------- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- Header shadow on scroll ---------- */
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 8); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Scroll reveal ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length && 'IntersectionObserver' in window) {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); ro.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { ro.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- Animated stat counters ---------- */
  var counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    var fmt = function (n, dec) {
      var s = dec ? n.toFixed(dec) : Math.round(n).toString();
      var parts = s.split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return parts.join('.');
    };
    var run = function (el) {
      var target = parseFloat(el.getAttribute('data-count'));
      var dec = parseInt(el.getAttribute('data-decimals') || '0', 10);
      var suffix = el.getAttribute('data-suffix') || '';
      var prefix = el.getAttribute('data-prefix') || '';
      var dur = 1500, start = performance.now();
      var tick = function (now) {
        var p = Math.min(1, (now - start) / dur);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = prefix + fmt(target * eased, dec) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    if ('IntersectionObserver' in window) {
      var co = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { run(e.target); co.unobserve(e.target); } });
      }, { threshold: 0.4 });
      counters.forEach(function (el) { co.observe(el); });
    } else {
      counters.forEach(run);
    }
  }

  /* ---------- Newsletter (front-end capture) ----------
     To actually collect addresses, POST to your email provider
     (Mailchimp/ConvertKit/Buttondown) — see the Launch Guide. */
  var nl = document.querySelector('.newsletter-form');
  if (nl) {
    nl.addEventListener('submit', function (e) {
      e.preventDefault();
      nl.innerHTML = '<p style="margin:0;font-weight:600;color:#fff;">Thanks! You’re on the list — watch your inbox.</p>';
    });
  }

  /* ---------- Contact form ----------
     No backend needed: composes a pre-filled email to the brand
     inbox via the visitor's mail app. Swap for Formspree to collect
     submissions server-side (see Launch Guide). */
  var cf = document.querySelector('#contact-form');
  if (cf) {
    cf.addEventListener('submit', function (e) {
      e.preventDefault();
      var val = function (id) { var el = cf.querySelector('#' + id); return el ? el.value : ''; };
      var subject = encodeURIComponent('[Vertex Biolabs] ' + (val('topic') || 'Website enquiry'));
      var body = encodeURIComponent(
        'Name: ' + val('name') + '\n' +
        'Email: ' + val('email') + '\n\n' +
        val('message')
      );
      var status = cf.querySelector('#contact-status');
      if (status) status.textContent = 'Opening your email app to send this message…';
      window.location.href = 'mailto:hello@vertexbiolabs.com?subject=' + subject + '&body=' + body;
    });
  }

  /* ---------- Research-use-only gate ----------
     Mirrors the AminoClub store entry: confirm age + researcher status
     before the catalog is usable. Remembered in localStorage. */
  var gate = document.querySelector('#ruo-gate');
  if (gate) {
    var GKEY = 'vbx_ruo_ok';
    if (localStorage.getItem(GKEY) === '1') {
      gate.setAttribute('hidden', '');
    } else {
      document.body.style.overflow = 'hidden';
      var chk = gate.querySelector('#ruo-confirm');
      var enter = gate.querySelector('[data-ruo-enter]');
      var exit = gate.querySelector('[data-ruo-exit]');
      if (chk && enter) {
        enter.disabled = true;
        chk.addEventListener('change', function () { enter.disabled = !chk.checked; });
        enter.addEventListener('click', function () {
          if (!chk.checked) return;
          localStorage.setItem(GKEY, '1');
          gate.setAttribute('hidden', '');
          document.body.style.overflow = '';
        });
      }
      if (exit) exit.addEventListener('click', function () { window.location.href = 'index.html'; });
    }
  }

  /* ---------- Category filters (products page) ---------- */
  var pills = document.querySelectorAll('.cat-pill');
  if (pills.length) {
    var cards = document.querySelectorAll('.product-grid .product-card');
    pills.forEach(function (pill) {
      pill.addEventListener('click', function () {
        pills.forEach(function (p) { p.classList.remove('active'); });
        pill.classList.add('active');
        var f = pill.getAttribute('data-filter');
        cards.forEach(function (card) {
          var show = (f === 'all') || (card.getAttribute('data-category') === f);
          card.classList.toggle('is-hidden', !show);
        });
      });
    });
  }

  /* ---------- Self-contained cart (localStorage) ----------
     Works with no account, API key, or server. Replace with a
     hosted checkout (Snipcart/Shopify/Stripe) when you go live. */
  var KEY = 'vbx_cart';
  var FREE_SHIP = 60;

  function read() { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; } }
  function save(c) { localStorage.setItem(KEY, JSON.stringify(c)); }
  function money(n) { return '$' + n.toFixed(2); }
  function count() { return read().reduce(function (s, i) { return s + i.qty; }, 0); }
  function subtotal() { return read().reduce(function (s, i) { return s + i.price * i.qty; }, 0); }

  // Build drawer markup once and append to <body>
  var holder = document.createElement('div');
  holder.innerHTML =
    '<div class="cart-overlay" data-cart-overlay></div>' +
    '<aside class="cart-drawer" aria-label="Shopping cart" aria-hidden="true">' +
      '<div class="cart-head"><h3>Your cart</h3>' +
        '<button class="cart-close" data-cart-close aria-label="Close cart">×</button></div>' +
      '<div class="cart-ship" data-cart-ship></div>' +
      '<div class="cart-items" data-cart-items></div>' +
      '<div class="cart-foot">' +
        '<div class="cart-subtotal"><span>Subtotal</span><strong data-cart-subtotal>$0.00</strong></div>' +
        '<button class="btn btn-primary btn-block" data-cart-checkout>Checkout</button>' +
        '<p class="cart-note" data-cart-note></p>' +
      '</div>' +
    '</aside>';
  while (holder.firstChild) document.body.appendChild(holder.firstChild);

  var drawer = document.querySelector('.cart-drawer');
  var overlay = document.querySelector('[data-cart-overlay]');

  function openCart() { drawer.classList.add('open'); overlay.classList.add('open'); drawer.setAttribute('aria-hidden', 'false'); }
  function closeCart() { drawer.classList.remove('open'); overlay.classList.remove('open'); drawer.setAttribute('aria-hidden', 'true'); }

  function updateCount() {
    var n = count();
    document.querySelectorAll('.js-cart-count').forEach(function (el) { el.textContent = n; });
  }

  function render() {
    var items = read();
    var box = drawer.querySelector('[data-cart-items]');
    var ship = drawer.querySelector('[data-cart-ship]');
    var sub = subtotal();

    box.innerHTML = items.length ? items.map(function (i) {
      return '<div class="cart-item">' +
        '<div class="cart-item-main"><span class="cart-item-name">' + i.name + '</span>' +
        '<span class="cart-item-price">' + money(i.price * i.qty) + '</span></div>' +
        '<div class="cart-qty">' +
          '<button data-dec="' + i.id + '" aria-label="Decrease quantity">−</button>' +
          '<span>' + i.qty + '</span>' +
          '<button data-inc="' + i.id + '" aria-label="Increase quantity">+</button>' +
          '<button class="cart-remove" data-rm="' + i.id + '">Remove</button>' +
        '</div></div>';
    }).join('') : '<p class="cart-empty">Your cart is empty.</p>';

    if (sub >= FREE_SHIP) {
      ship.innerHTML = '<div class="ship-msg done">🎉 You’ve unlocked free shipping!</div>' +
        '<div class="ship-bar"><span style="width:100%"></span></div>';
    } else if (sub > 0) {
      var pct = Math.min(100, (sub / FREE_SHIP) * 100);
      ship.innerHTML = '<div class="ship-msg">You’re ' + money(FREE_SHIP - sub) + ' away from free shipping.</div>' +
        '<div class="ship-bar"><span style="width:' + pct + '%"></span></div>';
    } else {
      ship.innerHTML = '';
    }

    drawer.querySelector('[data-cart-subtotal]').textContent = money(sub);
    drawer.querySelector('[data-cart-note]').textContent = '';
    updateCount();
  }

  function addItem(id, name, price) {
    var c = read();
    var hit = c.filter(function (i) { return i.id === id; })[0];
    if (hit) hit.qty += 1; else c.push({ id: id, name: name, price: price, qty: 1 });
    save(c); render();
  }
  function changeQty(id, delta) {
    var c = read();
    c.forEach(function (i) { if (i.id === id) i.qty += delta; });
    c = c.filter(function (i) { return i.qty > 0; });
    save(c); render();
  }
  function removeItem(id) {
    save(read().filter(function (i) { return i.id !== id; }));
    render();
  }

  // Open cart from any header button
  document.querySelectorAll('.js-cart-open').forEach(function (b) { b.addEventListener('click', openCart); });
  overlay.addEventListener('click', closeCart);
  drawer.querySelector('[data-cart-close]').addEventListener('click', closeCart);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeCart(); });

  // Add-to-cart buttons
  document.querySelectorAll('.js-add').forEach(function (btn) {
    btn.addEventListener('click', function () {
      addItem(btn.getAttribute('data-id'), btn.getAttribute('data-name'), parseFloat(btn.getAttribute('data-price')));
      openCart();
    });
  });

  // Quantity / remove (event delegation)
  drawer.addEventListener('click', function (e) {
    var t = e.target;
    if (t.hasAttribute('data-inc')) changeQty(t.getAttribute('data-inc'), 1);
    else if (t.hasAttribute('data-dec')) changeQty(t.getAttribute('data-dec'), -1);
    else if (t.hasAttribute('data-rm')) removeItem(t.getAttribute('data-rm'));
  });

  // Checkout (demo — no payment backend yet)
  drawer.querySelector('[data-cart-checkout]').addEventListener('click', function () {
    var note = drawer.querySelector('[data-cart-note]');
    if (!read().length) { note.textContent = 'Your cart is empty.'; return; }
    note.textContent = 'This is a demo store — checkout isn’t live yet. Connect a payment provider to start taking orders.';
  });

  render();
})();
