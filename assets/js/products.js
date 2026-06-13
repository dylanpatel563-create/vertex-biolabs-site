/* ===========================================================
   VERTEX BIOLABS — product detail page
   Renders product.html?id=<id> from the catalog below:
   compound info · quantity · bundle-and-save (3+ = 10%) ·
   certificate of analysis · storage & stability · RUO disclaimer
   =========================================================== */
(function () {
  'use strict';

  /* ---------- Vial graphic helper ---------- */
  function vial(color, lines) {
    var texts = lines.map(function (l) {
      return '<text x="60" y="' + l.y + '" text-anchor="middle" font-family="Inter, sans-serif" font-weight="700" font-size="' + l.s + '" fill="' + (l.f || '#ffffff') + '">' + l.t + '</text>';
    }).join('');
    return '<svg class="vial" viewBox="0 0 120 160" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<rect x="48" y="6" width="24" height="9" rx="2" fill="#aebfdb"/>' +
      '<rect x="45" y="13" width="30" height="10" rx="2" fill="#cdd8ea"/>' +
      '<rect x="50" y="21" width="20" height="6" fill="#e2e8f1"/>' +
      '<rect x="42" y="26" width="36" height="124" rx="9" fill="#f7f9fc" stroke="#dfe6f2" stroke-width="1.5"/>' +
      '<rect x="42" y="60" width="36" height="54" fill="' + color + '"/>' + texts + '</svg>';
  }

  var STD_STABILITY = 'Supplied as a lyophilized (freeze-dried) powder. Sealed vials are stable at room temperature during shipping and for several weeks; for long-term storage keep at −20 °C, where the peptide remains stable for roughly 18–24 months. After reconstitution with bacteriostatic water, store refrigerated at 2–8 °C and use within 3–4 weeks. Protect from light and avoid repeated freeze–thaw cycles.';

  /* ---------- Catalog ---------- */
  var P = {
    'glp3-retatrutide-10mg': {
      name: 'GLP-3 Retatrutide', cat: 'Metabolic', size: '10 mg', price: 69.99, tag: 'New',
      vial: vial('#3b82f6', [{ t: 'GLP-3', s: 6, y: 82 }, { t: 'RETATRUTIDE', s: 5, y: 93, f: '#cdd8ea' }, { t: '10 MG', s: 6, y: 104, f: '#cdd8ea' }]),
      desc: 'A single-molecule triple-receptor agonist studied in metabolic-pathway and weight-regulation research.',
      about: 'Retatrutide — often referred to as a "GLP-3" — is a single-molecule triple agonist that targets the GLP-1, GIP, and glucagon receptors simultaneously. In research models it is studied for its effects on appetite signaling, glucose handling, and body-weight regulation, making it one of the most closely watched metabolic peptides in current literature.',
      stability: STD_STABILITY,
      coa: { type: 'single', purity: '99.711%', dash: '338.31', sample: 'Retatrutide · 10 mg', content: '11.02 mg', batch: 'RT10/202602' }
    },
    'ghk-cu-50mg': {
      name: 'GHK-Cu', cat: 'Skin & Anti-Aging', size: '50 mg', price: 59.99, tag: 'Bestseller',
      vial: vial('#1e40af', [{ t: 'GHK-CU', s: 7, y: 84 }, { t: '50 MG', s: 6, y: 98, f: '#cdd8ea' }]),
      desc: 'A copper-binding tripeptide studied in skin, collagen, and anti-aging research.',
      about: 'GHK-Cu is a naturally occurring copper-binding tripeptide (glycyl-L-histidyl-L-lysine). Research explores its role in collagen and elastin synthesis, skin remodeling, wound repair, and antioxidant signaling — which is why it appears so frequently in skin and anti-aging studies.',
      stability: STD_STABILITY,
      coa: { type: 'single', purity: '99.954%', dash: '339.14', sample: 'GHK-Cu · 50 mg', content: '50.61 mg', batch: 'CU50/202509' }
    },
    'wolverine-10mg': {
      name: 'Wolverine', cat: 'Recovery · Blend', size: '10 mg', price: 99.99, tag: 'Bestseller',
      vial: vial('#0f1216', [{ t: 'WOLVERINE', s: 6, y: 84 }, { t: '10 MG', s: 6, y: 98, f: '#cdd8ea' }]),
      desc: 'BPC-157 + TB-500 combined for recovery-focused research protocols.',
      about: 'The Wolverine blend pairs BPC-157 and TB-500, two of the most-studied repair peptides. Together they are investigated in tissue-repair, tendon and ligament, angiogenesis, and recovery research models — combined into a single vial for convenience in study protocols.',
      stability: STD_STABILITY,
      coa: { type: 'blend', comps: [{ n: 'BPC-157', p: '99.818%', w: '96.4%' }, { n: 'TB-500', p: '99.730%', w: '94.6%' }], sample: 'BPC-157 5 mg + TB-500 5 mg', content: '5.48 mg + 5.14 mg', batch: 'BB10/2025-04' }
    },
    'semax-30mg': {
      name: 'Semax', cat: 'Cognitive', size: '30 mg', price: 49.99, tag: '',
      vial: vial('#2563eb', [{ t: 'SEMAX', s: 7, y: 84 }, { t: '30 MG', s: 6, y: 98, f: '#cdd8ea' }]),
      desc: 'A peptide studied in cognition, focus, and neuro research models.',
      about: 'Semax is a synthetic peptide derived from a fragment of ACTH (4–10). It is studied for effects on cognition, focus, memory, and neuroprotection, with particular research interest in BDNF expression and the brain’s response to stress and fatigue.',
      stability: STD_STABILITY,
      coa: { type: 'single', purity: '99.892%', dash: '338.93', sample: 'Semax · 5 mg lot', content: '5.70 mg', batch: 'XA5/202509' }
    },
    'melanotan2-10mg': {
      name: 'Melanotan 2', cat: 'Skin & Anti-Aging', size: '10 mg', price: 49.99, tag: 'New',
      vial: vial('#4c3080', [{ t: 'MELANOTAN', s: 5.5, y: 82 }, { t: '2', s: 7, y: 93, f: '#e0d0ff' }, { t: '10 MG', s: 6, y: 104, f: '#cdd8ea' }]),
      desc: 'A melanocortin analog studied in melanogenesis and skin-pigmentation research.',
      about: 'Melanotan 2 (MT-2) is a synthetic analog of α-MSH that acts on the melanocortin receptors. Research focuses on melanogenesis (pigmentation) and related melanocortin-pathway signaling in laboratory models.',
      stability: STD_STABILITY,
      coa: { type: 'single', purity: '99.555%', dash: '337.79', sample: 'Melanotan 2 · 10 mg', content: '10.42 mg', batch: 'ML10/2025-05' }
    },
    'cjc-ipamorelin-10mg': {
      name: 'CJC/Ipamorelin', cat: 'Growth · Blend', size: '10 mg', price: 74.99, tag: 'Bestseller',
      vial: vial('#1d4ed8', [{ t: 'CJC /', s: 6, y: 82 }, { t: 'IPAMORELIN', s: 5, y: 93, f: '#cce0ff' }, { t: '10 MG', s: 6, y: 104, f: '#cdd8ea' }]),
      desc: 'A GHRH + secretagogue research blend studied in growth-hormone signaling models.',
      about: 'This blend combines CJC-1295 (a GHRH analog) with Ipamorelin (a selective ghrelin / GH-secretagogue receptor agonist). Studied together, they are used to investigate pulsatile growth-hormone release and downstream signaling in research models.',
      stability: STD_STABILITY,
      coa: { type: 'blend', comps: [{ n: 'CJC-1295', p: '99.653%', w: '93.1%' }, { n: 'Ipamorelin', p: '99.760%', w: '95.2%' }], sample: 'CJC-1295 (no DAC) 5 mg + Ipamorelin 5 mg', content: '5.85 mg + 4.96 mg', batch: 'CP10/202602' }
    },
    'klow-70mg': {
      name: 'KLOW', cat: 'Recovery · Blend', size: '70 mg', price: 129.99, tag: '',
      vial: vial('#0f1216', [{ t: 'KLOW', s: 7, y: 84 }, { t: '70 MG', s: 6, y: 98, f: '#cdd8ea' }]),
      desc: 'GHK-Cu, TB-500, BPC-157 & KPV multi-peptide research blend.',
      about: 'KLOW is a four-peptide blend of GHK-Cu, TB-500, BPC-157, and KPV. It is studied as a combined approach to tissue repair, inflammation modulation, and skin research — bringing several well-characterized peptides into a single research vial.',
      stability: STD_STABILITY,
      coa: { type: 'blend', comps: [{ n: 'GHK-Cu', p: '99.954%', w: '99.1%' }, { n: 'KPV', p: '99.858%', w: '97.2%' }, { n: 'BPC-157', p: '99.818%', w: '96.4%' }, { n: 'TB-500', p: '99.730%', w: '94.6%' }], sample: 'GHK-Cu / TB-500 / BPC-157 / KPV', content: 'Component lots: CU50 · BT10 · BC10 · KPV10', batch: 'Multi-component blend' }
    },
    'glow-60mg': {
      name: 'GLOW', cat: 'Skin & Anti-Aging · Blend', size: '60 mg', price: 109.99, tag: 'New',
      vial: vial('#0f1216', [{ t: 'GLOW', s: 7, y: 84 }, { t: '60 MG', s: 6, y: 98, f: '#cdd8ea' }]),
      desc: 'GHK-Cu, TB-500 & BPC-157 blend for skin and recovery research.',
      about: 'GLOW combines GHK-Cu, TB-500, and BPC-157 — a trio studied for skin, collagen, and recovery research. The blend is designed for protocols exploring aesthetic and repair-related endpoints together in one vial.',
      stability: STD_STABILITY,
      coa: { type: 'blend', comps: [{ n: 'GHK-Cu', p: '99.954%', w: '99.1%' }, { n: 'BPC-157', p: '99.818%', w: '96.4%' }, { n: 'TB-500', p: '99.730%', w: '94.6%' }], sample: 'GHK-Cu + BPC-157 + TB-500', content: '56.84 mg + 12.67 mg + 11.87 mg', batch: 'BBG70/202602' }
    },
    'mots-c-10mg': {
      name: 'MOTS-C', cat: 'Longevity', size: '10 mg', price: 39.99, tag: '',
      vial: vial('#1e3a8a', [{ t: 'MOTS-C', s: 7, y: 84 }, { t: '10 MG', s: 6, y: 98, f: '#cdd8ea' }]),
      desc: 'A mitochondrial-derived peptide studied in metabolic-longevity research.',
      about: 'MOTS-c is a mitochondrial-derived peptide encoded within mitochondrial DNA. Research investigates its role in metabolic regulation, insulin sensitivity, exercise physiology, and cellular aging.',
      stability: STD_STABILITY,
      coa: { type: 'single', purity: '99.753%', dash: '338.46', sample: 'MOTS-c · 10 mg', content: '10.35 mg', batch: 'MS10/2025-05' }
    },
    'nad-500mg': {
      name: 'NAD+', cat: 'Longevity', size: '500 mg', price: 79.99, tag: 'Bestseller',
      vial: vial('#2563eb', [{ t: 'NAD+', s: 8, y: 84 }, { t: '500 MG', s: 6, y: 98, f: '#cdd8ea' }]),
      desc: 'A coenzyme central to cellular-energy and longevity research.',
      about: 'NAD+ (nicotinamide adenine dinucleotide) is a coenzyme found in every living cell and central to energy metabolism and DNA-repair pathways. It is widely studied in cellular-energy, mitochondrial, and longevity research.',
      stability: 'Supplied as a lyophilized powder. NAD+ is sensitive to heat and moisture — keep sealed vials refrigerated or frozen (−20 °C) for long-term storage. After reconstitution with bacteriostatic water, refrigerate at 2–8 °C and use within 5–7 days. Protect from light and avoid freeze–thaw cycles.',
      coa: { type: 'content', sample: 'NAD+ · 500 mg', content: '635.97 mg', batch: 'NJ500/202509' }
    }
  };

  /* ---------- CoA block ---------- */
  function coaBlock(c) {
    var rows = '';
    if (c.type === 'single') {
      rows = '<div class="coa-ring"><svg viewBox="0 0 120 120" aria-hidden="true">' +
        '<defs><linearGradient id="pdpg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#22d3ee"/><stop offset="1" stop-color="#2563eb"/></linearGradient></defs>' +
        '<circle cx="60" cy="60" r="54" fill="none" stroke="#e6eaf1" stroke-width="11"/>' +
        '<circle cx="60" cy="60" r="54" fill="none" stroke="url(#pdpg)" stroke-width="11" stroke-linecap="round" stroke-dasharray="' + c.dash + ' 339.3" transform="rotate(-90 60 60)"/>' +
        '<text x="60" y="60" text-anchor="middle" class="coa-pct-num">' + c.purity + '</text>' +
        '<text x="60" y="75" text-anchor="middle" class="coa-pct-cap">HPLC PURITY</text></svg></div>' +
        '<div class="coa-data">' +
          row('Sample tested', c.sample) + row('Measured content', c.content) +
          row('Batch / Lot', c.batch) + row('Test method', 'HPLC + Mass Spec') + '</div>';
    } else if (c.type === 'blend') {
      var bars = c.comps.map(function (k) {
        return '<div class="comp-row"><span class="comp-name">' + k.n + '</span><div class="comp-track"><i style="width:' + k.w + '"></i></div><b>' + k.p + '</b></div>';
      }).join('');
      rows = '<div class="coa-comp"><p class="coa-comp-title">Per-compound purity</p>' + bars +
        '<p class="coa-scale">Bar scale 95–100% · standalone HPLC purity of each component</p></div>' +
        '<div class="coa-data">' + row('Sample tested', c.sample) + row('Measured content', c.content) +
          row('Batch / Lot', c.batch) + row('Test method', 'HPLC + Mass Spec') + '</div>';
    } else { // content
      rows = '<div class="coa-ring content-ring"><div class="content-check">✓</div><span class="coa-ring-cap">Content assayed</span></div>' +
        '<div class="coa-data">' + row('Sample tested', c.sample) + row('Measured content', c.content) +
          row('Batch / Lot', c.batch) + row('Test method', 'HPLC (quantitative)') + '</div>';
    }
    return '<div class="pdp-coa-wrap"' + (c.type === 'blend' ? ' style="grid-template-columns:1fr 1fr"' : '') + '>' + rows + '</div>';
  }
  function row(k, v) { return '<div class="coa-row"><span>' + k + '</span><b>' + v + '</b></div>'; }

  /* ---------- Render ---------- */
  var root = document.getElementById('product-root');
  if (!root) return;
  var id = new URLSearchParams(location.search).get('id');
  var p = id && P[id];

  if (!p) {
    root.innerHTML = '<section class="page-hero"><div class="container"><span class="eyebrow">Not found</span>' +
      '<h1>That compound isn’t here</h1><p>We couldn’t find that product. Browse the full catalog instead.</p>' +
      '<div style="margin-top:18px"><a href="products.html" class="btn btn-primary">View all compounds</a></div></div></section>';
    return;
  }

  document.title = p.name + ' — Vertex Biolabs';
  var tag = p.tag ? '<span class="product-tag">' + p.tag + '</span>' : '';

  root.innerHTML =
    '<section class="pdp"><div class="container">' +
      '<nav class="breadcrumb"><a href="index.html">Home</a><span class="sep">/</span><a href="products.html">Products</a><span class="sep">/</span>' + p.name + '</nav>' +
      '<div class="pdp-top">' +
        '<div class="pdp-media">' + tag + '<span class="purity-badge">99%+</span>' + p.vial + '</div>' +
        '<div class="pdp-info">' +
          '<p class="product-cat">' + p.cat + '</p>' +
          '<h1>' + p.name + ' <span class="pdp-size">' + p.size + '</span></h1>' +
          '<p class="pdp-desc">' + p.desc + '*</p>' +
          '<div class="pdp-badges"><span class="pdp-chip">✓ 99%+ HPLC purity</span><span class="pdp-chip">📄 CoA included</span><span class="pdp-chip ruo">Research use only</span></div>' +
          '<div class="bundle-callout" id="bundle"><div class="b-ico">%</div><div><b>Bundle &amp; save</b> <span>— buy <b>3+ vials</b> and get <b>10% off</b>, applied automatically.</span></div></div>' +
          '<div class="qty-row"><span class="qty-label">Quantity</span>' +
            '<div class="qty-stepper"><button type="button" data-q="-1" aria-label="Decrease">−</button>' +
            '<input id="qty" type="number" value="1" min="1" aria-label="Quantity"/>' +
            '<button type="button" data-q="1" aria-label="Increase">+</button></div>' +
            '<span class="qty-label" style="font-weight:500;color:var(--muted)">vials</span></div>' +
          '<div class="pdp-total"><span class="now" id="pdp-total">$' + p.price.toFixed(2) + '</span>' +
            '<span class="was" id="pdp-was" style="display:none"></span>' +
            '<span class="save" id="pdp-save" style="display:none">Save 10%</span>' +
            '<span class="unit" id="pdp-unit"></span></div>' +
          '<button class="btn btn-primary btn-block" id="pdp-add">Add to cart</button>' +
          '<div class="pdp-trust">' +
            tIcon('M5 13l4 4L19 7') + 'Ships within 24h' + tEnd() +
            tIcon('M5 13l4 4L19 7') + 'Free U.S. shipping over $60' + tEnd() +
            tIcon('M5 13l4 4L19 7') + 'Third-party CoA on every lot' + tEnd() +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div class="pdp-sections">' +
        '<div class="pdp-block"><h2><span class="b-emoji">🧬</span> About ' + p.name + '</h2><p>' + p.about + '</p>' +
          '<p class="muted" style="font-size:0.85rem;color:var(--muted)">General research summary only — not a medical claim, dosing guidance, or therapeutic recommendation.</p></div>' +
        '<div class="pdp-block"><h2><span class="b-emoji">🔬</span> Certificate of analysis</h2>' +
          '<p style="color:var(--muted);margin-bottom:18px">Independent HPLC &amp; mass-spec analysis (Janoshik Analytical). The lot-specific CoA for your vial ships with your order.</p>' +
          coaBlock(p.coa) + '</div>' +
        '<div class="pdp-block"><h2><span class="b-emoji">❄️</span> Storage &amp; stability</h2><p>' + p.stability + '</p></div>' +
        '<div class="pdp-block pdp-disclaimer"><h2><span class="b-emoji">⚠️</span> Important — research use only</h2>' +
          '<p>This product is sold strictly for in-vitro laboratory and research use. It is <b>not intended for human or veterinary consumption</b>, and is not a drug, supplement, or food. It is not approved by the FDA for the diagnosis, treatment, cure, or prevention of any disease. By purchasing, you confirm you are a qualified researcher and will handle this material in accordance with all applicable laws.</p>' +
          '<div class="pill"><b>Not for human use</b><b>Not for veterinary use</b><b>Not for food use</b></div></div>' +
      '</div>' +
    '</div></section>';

  function tIcon(d) { return '<span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="' + d + '"/></svg>'; }
  function tEnd() { return '</span>'; }

  /* ---------- Quantity + bundle pricing ---------- */
  var qty = document.getElementById('qty');
  var totalEl = document.getElementById('pdp-total');
  var wasEl = document.getElementById('pdp-was');
  var saveEl = document.getElementById('pdp-save');
  var unitEl = document.getElementById('pdp-unit');
  var bundleEl = document.getElementById('bundle');

  function effUnit(q) { return q >= 3 ? p.price * 0.9 : p.price; }

  function recalc() {
    var q = parseInt(qty.value, 10);
    if (!q || q < 1) q = 1;
    qty.value = q;
    var bundle = q >= 3;
    var unit = effUnit(q);
    var total = unit * q;
    totalEl.textContent = '$' + total.toFixed(2);
    if (bundle) {
      wasEl.textContent = '$' + (p.price * q).toFixed(2); wasEl.style.display = '';
      saveEl.style.display = '';
      bundleEl.classList.add('active');
    } else {
      wasEl.style.display = 'none'; saveEl.style.display = 'none';
      bundleEl.classList.remove('active');
    }
    unitEl.textContent = q > 1 ? ('$' + unit.toFixed(2) + ' / vial') : '';
  }

  document.querySelectorAll('.qty-stepper [data-q]').forEach(function (b) {
    b.addEventListener('click', function () {
      qty.value = Math.max(1, (parseInt(qty.value, 10) || 1) + parseInt(b.getAttribute('data-q'), 10));
      recalc();
    });
  });
  qty.addEventListener('input', recalc);
  recalc();

  document.getElementById('pdp-add').addEventListener('click', function () {
    var q = Math.max(1, parseInt(qty.value, 10) || 1);
    var unit = effUnit(q);
    var label = p.name + ' — ' + p.size + (q >= 3 ? ' (bundle ×' + q + ', 10% off)' : '') + ' (Research Use Only)';
    if (window.VBXCart) { window.VBXCart.add(id, label, unit, q); window.VBXCart.open(); }
  });
})();
