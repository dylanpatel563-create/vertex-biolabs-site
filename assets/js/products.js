/* ===========================================================
   VERTEX BIOLABS — product detail page
   Renders product.html?id=<id> from the catalog below:
   labeled vial photo · compound info · quantity · bundle-and-save
   (2=5%, 3+=7.5%) · certificate of analysis · clinical insights (cited)
   · storage & stability · RUO disclaimer
   =========================================================== */
(function () {
  'use strict';

  var STD_STABILITY = 'Supplied as a lyophilized (freeze-dried) powder. Sealed vials are stable at room temperature during shipping and for several weeks; for long-term storage keep at −20 °C, where the peptide remains stable for roughly 18–24 months. After reconstitution with bacteriostatic water, store refrigerated at 2–8 °C and use within 3–4 weeks. Protect from light and avoid repeated freeze–thaw cycles.';

  /* ---------- Catalog ---------- */
  var P = {
    'glp3-retatrutide-10mg': {
      name: 'GLP-3 Retatrutide', cat: 'Metabolic', size: '10 mg', origPrice: 69.99, price: 55.99, tag: 'Bestseller',
      desc: 'A single-molecule triple-receptor agonist studied in metabolic-pathway and weight-regulation research.',
      about: 'Retatrutide — often referred to as a "GLP-3" — is a single-molecule unimolecular triple agonist that simultaneously activates the GLP-1, GIP, and glucagon receptors. GLP-1 and GIP signaling stimulate glucose-dependent insulin secretion and suppress appetite via hypothalamic POMC/CART pathways, while glucagon-receptor activation raises energy expenditure and accelerates lipid oxidation — addressing both energy intake and metabolic output. It is regarded as a pharmacological step beyond mono-agonists (semaglutide) and dual-agonists (tirzepatide).',
      insights: [
        'Phase 3 <b>TRIUMPH-1</b> trial: weekly 12 mg produced a <b>24.2% average body-weight reduction</b> over 80 weeks (vs 1.6% placebo); 100% of the high-dose cohort fell below a BMI of 30.',
        'Phase 3 <b>TRANSCEND-T2D-1</b>: the 12 mg dose lowered HbA1c by <b>2.1%</b>, bringing 72–82% of patients to normoglycemia (&lt;5.7%).',
        'Triple agonism (GLP-1 / GIP / glucagon) is documented as a major advance over semaglutide (mono) and tirzepatide (dual) agonists.'
      ],
      stability: STD_STABILITY,
      coa: { type: 'single', purity: '99.711%', dash: '338.31', sample: 'Retatrutide · 10 mg', content: '11.02 mg', batch: 'RT10/202602' }
    },
    'ghk-cu-50mg': {
      name: 'GHK-Cu', cat: 'Skin & Anti-Aging', size: '50 mg', origPrice: 34.99, price: 27.99, tag: 'Bestseller',
      desc: 'A copper-binding tripeptide studied in skin, collagen, and anti-aging research.',
      about: 'GHK-Cu is a naturally occurring copper-binding tripeptide (Glycyl-L-Histidyl-L-Lysine) found in human plasma, saliva, and urine. As a "matrikine," it is released during tissue injury and coordinates repair — acting as a chemoattractant for macrophages and endothelial cells, delivering non-toxic copper to metalloenzymes such as lysyl oxidase and superoxide dismutase, and shifting the cellular transcriptome toward a regenerative state by stimulating collagen, elastin, and glycosaminoglycan synthesis.',
      insights: [
        'Gene profiling using <b>Broad Institute</b> databases shows GHK-Cu modulates roughly <b>4,000 human genes</b> back toward a healthier, regenerative state.',
        'At nanomolar concentrations it suppressed metastatic-pathway genes (APP, LMNA, YWHAB) in aggressive colorectal-cancer signature studies.',
        'Placebo-controlled, split-face dermatology trials: GHK-Cu creams stimulated collagen, reduced fine lines and wrinkles, and improved skin density and elasticity.'
      ],
      stability: STD_STABILITY,
      coa: { type: 'single', purity: '99.954%', dash: '339.14', sample: 'GHK-Cu · 50 mg', content: '50.61 mg', batch: 'CU50/202509' }
    },
    'wolverine-10mg': {
      name: 'Wolverine', cat: 'Recovery · Blend', size: '10 mg', origPrice: 74.99, price: 59.99, tag: 'Bestseller',
      desc: 'BPC-157 + TB-500 combined for recovery-focused research protocols.',
      about: 'The Wolverine stack pairs BPC-157 (Body Protection Compound-157) with TB-500 (a synthetic Thymosin β4 analog). BPC-157 acts locally to accelerate neovascularization via the FAK/AKT/eNOS → VEGF cascade and drives fibroblast proliferation and organized type-I collagen deposition. TB-500 works systemically by regulating monomeric G-actin to coordinate cell migration, mobilize progenitor cells, and limit fibrotic scarring — producing dual-layered, localized-plus-systemic tissue repair.',
      insights: [
        'BPC-157 accelerates angiogenesis through the <b>FAK/AKT/eNOS → VEGF</b> pathway; TB-500 regulates G-actin to coordinate systemic cell migration.',
        '2024 human pilot study: intra-articular BPC-157 produced long-term relief in <b>7 of 12</b> patients with chronic, non-responsive knee pain.',
        'Thymosin β4 (TB-500) accelerated corneal repair in Phase II trials (<b>RGN-259</b> protocol); a 2025 IV study confirmed BPC-157 was well-tolerated in healthy adults.'
      ],
      stability: STD_STABILITY,
      coa: { type: 'blend', comps: [{ n: 'BPC-157', p: '99.818%', w: '96.4%' }, { n: 'TB-500', p: '99.730%', w: '94.6%' }], sample: 'BPC-157 5 mg + TB-500 5 mg', content: '5.48 mg + 5.14 mg', batch: 'BB10/2025-04' }
    },
    'semax-30mg': {
      name: 'Semax', cat: 'Cognitive', size: '5 mg', origPrice: 29.99, price: 23.99, tag: '',
      desc: 'A peptide studied in cognition, focus, and neuro research models.',
      about: 'Semax is a synthetic heptapeptide (Met-Glu-His-Phe-Pro-Gly-Pro) that conjugates an ACTH(4–7) fragment to the tripeptide Pro-Gly-Pro, giving it metabolic stability without ACTH\'s hormonal activity. It crosses the blood-brain barrier and upregulates BDNF and its TrkB receptor in the hippocampus, modulates dopamine and serotonin turnover, and alters the ischemic brain transcriptome — downregulating pro-inflammatory JNK signaling while raising survival factor pCREB.',
      insights: [
        'Upregulates <b>BDNF and the TrkB receptor</b> in the hippocampus — central to neurogenesis, synaptic plasticity, and memory.',
        'In pMCAO stroke models, genome-wide profiling showed Semax altered 96 genes at 3 h and 68 at 24 h, promoting neovascularization and balancing neuroinflammation.',
        'In <b>APPswe/PS1dE9</b> Alzheimer\'s mice, intranasal Semax improved spatial learning and significantly <b>reduced amyloid-β plaques</b>; it is approved in Russia/Ukraine for ischemic stroke.'
      ],
      stability: STD_STABILITY,
      coa: { type: 'single', purity: '99.892%', dash: '338.93', sample: 'Semax · 5 mg lot', content: '5.70 mg', batch: 'XA5/202509' }
    },
    'melanotan2-10mg': {
      name: 'Melanotan 2', cat: 'Skin & Anti-Aging', size: '10 mg', origPrice: 44.99, price: 35.99, tag: 'Bestseller',
      desc: 'A melanocortin analog studied in melanogenesis and skin-pigmentation research.',
      about: 'Melanotan II is a synthetic cyclic-lactam heptapeptide analog of α-melanocyte-stimulating hormone (α-MSH) and a non-selective agonist of the melanocortin receptors MC1, MC3, and MC4. MC1R engagement on dermal melanocytes stimulates UV-independent melanogenesis, while central MC3R/MC4R activation in the hypothalamus modulates energy balance, appetite, and sexual-function pathways.',
      insights: [
        'Non-selective melanocortin (MC1 / MC3 / MC4) agonist; MC1R binding drives <b>UV-independent skin pigmentation</b>.',
        'Double-blind, placebo-controlled crossover trials led by <b>H. Wessells</b>: 0.025 mg/kg produced erections in <b>8 of 10</b> men, with 38 min of tip rigidity vs 3 min for placebo.',
        'Follow-up study (organic ED risk factors, n=20): robust response in <b>17 participants</b>; subjective sexual desire rose in 68% of active sessions.'
      ],
      stability: STD_STABILITY,
      coa: { type: 'single', purity: '99.555%', dash: '337.79', sample: 'Melanotan 2 · 10 mg', content: '10.42 mg', batch: 'ML10/2025-05' }
    },
    'cjc-ipamorelin-10mg': {
      name: 'CJC/Ipamorelin', cat: 'Growth · Blend', size: '10 mg', origPrice: 79.99, price: 63.99, tag: 'Bestseller',
      desc: 'A GHRH + secretagogue research blend studied in growth-hormone signaling models.',
      about: 'This dual growth-hormone-secretagogue blend pairs CJC-1295 — a 29-amino-acid GHRH analog whose DAC modification extends its half-life to ~5.8–8.1 days and raises GH amplitude — with Ipamorelin, a highly selective GHS-R1a (ghrelin-receptor) agonist that raises GH pulse frequency through the Gαq–phospholipase C cascade. Together they drive hepatic IGF-1 production within physiological limits, without elevating cortisol, prolactin, or ACTH.',
      insights: [
        'In a randomized, double-blind ascending-dose trial, a single 30–60 µg/kg dose of CJC-1295 produced a sustained <b>2–10× rise in plasma GH</b> for ≥6 days and 1.5–3× IGF-1 for 9–11 days.',
        'Ipamorelin is highly selective — unlike GHRP-2/6 it does <b>not</b> raise cortisol, prolactin, or ACTH.',
        'A Phase II trial (n=117, post-operative ileus) confirmed Ipamorelin was well-tolerated, with a numerical trend toward faster bowel-function recovery.'
      ],
      stability: STD_STABILITY,
      coa: { type: 'blend', comps: [{ n: 'CJC-1295', p: '99.653%', w: '93.1%' }, { n: 'Ipamorelin', p: '99.760%', w: '95.2%' }], sample: 'CJC-1295 (no DAC) 5 mg + Ipamorelin 5 mg', content: '5.85 mg + 4.96 mg', batch: 'CP10/202602' }
    },
    'tesamorelin-10mg': {
      name: 'Tesamorelin', cat: 'Growth', size: '10 mg', origPrice: 74.99, price: 59.99, tag: 'New',
      desc: 'A stabilized GHRH analog studied in growth-hormone, IGF-1, and visceral-fat research.',
      about: 'Tesamorelin is a synthetic analog of growth-hormone-releasing hormone (GHRH) — a 44-amino-acid peptide modified with a trans-3-hexenoic acid group on the N-terminus that resists DPP-4 degradation and extends its half-life. It binds pituitary GHRH receptors to stimulate endogenous, pulsatile growth-hormone secretion, which in turn raises hepatic IGF-1 while preserving the body\'s natural feedback regulation rather than introducing exogenous GH. It has been studied most extensively for its effect on visceral adipose tissue.',
      insights: [
        'Approved by the FDA (as <b>Egrifta</b>) for HIV-associated lipodystrophy; pivotal trials showed roughly a <b>15–18% reduction in visceral adipose tissue</b> over 26 weeks.',
        'Stimulates <b>endogenous, pulsatile GH release</b> via pituitary GHRH receptors, raising IGF-1 while preserving normal hypothalamic–pituitary feedback.',
        'A randomized trial in people with NAFLD/NASH reported <b>reduced liver fat</b>, and separate work has explored tesamorelin\'s effects on cognition in older adults.'
      ],
      stability: STD_STABILITY,
      coa: { type: 'single', purity: '99.252%', dash: '336.76', sample: 'Tesamorelin · 10 mg', content: '10.99 mg', batch: 'TSM10/202602' }
    },
    'glow-60mg': {
      name: 'GLOW', cat: 'Skin & Anti-Aging · Blend', size: '70 mg', origPrice: 94.99, price: 75.99, tag: 'Bestseller',
      desc: 'GHK-Cu, TB-500 & BPC-157 blend for skin and recovery research.',
      about: 'GLOW is a tri-peptide dermal-regeneration blend of GHK-Cu, BPC-157, and TB-500. GHK-Cu upregulates dermal wound-healing genes and stimulates collagen and elastin synthesis; BPC-157 restores microvascular blood flow via the FAK/AKT/eNOS pathway and organizes collagen-fibril deposition; and TB-500 regulates G-actin to drive cell migration and minimize rigid scar tissue — supporting both aesthetic and musculoskeletal recovery.',
      insights: [
        'GHK-Cu, in placebo-controlled clinical trials, significantly increased skin thickness, density, and elasticity while reducing coarse and fine wrinkles.',
        'BPC-157 upregulates local <b>VEGF</b>-mediated neovascularization through the FAK/AKT/eNOS pathway, organizing collagen deposition at the repair site.',
        'In rodent full-thickness wound models, TB-500 (Thymosin β4) increased re-epithelialization and enhanced collagen deposition and neovascularization.'
      ],
      stability: STD_STABILITY,
      coa: { type: 'blend', comps: [{ n: 'GHK-Cu', p: '99.954%', w: '99.1%' }, { n: 'BPC-157', p: '99.818%', w: '96.4%' }, { n: 'TB-500', p: '99.730%', w: '94.6%' }], sample: 'GHK-Cu + BPC-157 + TB-500', content: '56.84 mg + 12.67 mg + 11.87 mg', batch: 'BBG70/202602' }
    },
    'mots-c-10mg': {
      name: 'MOTS-C', cat: 'Longevity', size: '10 mg', origPrice: 49.99, price: 39.99, tag: '',
      desc: 'A mitochondrial-derived peptide studied in metabolic-longevity research.',
      about: 'MOTS-c (Mitochondrial Open Reading Frame of the 12S rRNA Type-C) is a 16-amino-acid mitochondrial-derived peptide that acts as both an endocrine signal and a nuclear transcriptional regulator. Under metabolic stress it translocates to the nucleus in an AMPK-dependent manner, binds antioxidant-response-element transcription factors, and — in skeletal muscle — activates AMPK/Akt signaling to upregulate GLUT4 and promote insulin-dependent glucose clearance.',
      insights: [
        'Activates <b>AMPK/Akt</b> signaling and upregulates <b>GLUT4</b>, promoting insulin-dependent glucose clearance into skeletal muscle.',
        'High-intensity exercise raises skeletal-muscle MOTS-c <b>11.9-fold</b>; endogenous levels fall ~29% from young adulthood to old age.',
        'In aged mice, systemic MOTS-c reversed age-related insulin resistance and prevented diet-induced weight gain without hepatotoxicity.'
      ],
      stability: STD_STABILITY,
      coa: { type: 'single', purity: '99.753%', dash: '338.46', sample: 'MOTS-c · 10 mg', content: '10.35 mg', batch: 'MS10/2025-05' }
    },
    'nad-500mg': {
      name: 'NAD+', cat: 'Longevity', size: '500 mg', origPrice: 59.99, price: 47.99, tag: 'Bestseller',
      desc: 'A coenzyme central to cellular-energy and longevity research.',
      about: 'NAD+ (Nicotinamide Adenine Dinucleotide) is a classical coenzyme for redox reactions across glycolysis, the TCA cycle, and oxidative phosphorylation, and an obligate cosubstrate for sirtuins (SIRT1–7), PARPs, and CD38. Sirtuins use NAD+ to deacetylate histones and transcription factors regulating stress resistance, DNA repair, and circadian rhythm; tissue NAD+ declines with age as NAMPT falls and PARP1/CD38 activity rises.',
      insights: [
        'Obligate cosubstrate for <b>sirtuins (SIRT1–7)</b>, PARPs (DNA repair), and CD38 — central to mitochondrial and genomic maintenance.',
        'Pilot clinical trial <b>NCT06534944</b> (NR in peripheral artery disease) improved endothelial and cerebrovascular function and cognitive testing.',
        'Preclinically, restoring NAD+ reactivated SIRT1/SIRT3, reversed age-related mitochondrial decay, and protected against cardiac ischemic damage.'
      ],
      stability: 'Supplied as a lyophilized powder. NAD+ is sensitive to heat and moisture — keep sealed vials refrigerated or frozen (−20 °C) for long-term storage. After reconstitution with bacteriostatic water, refrigerate at 2–8 °C and use within 5–7 days. Protect from light and avoid freeze–thaw cycles.',
      coa: { type: 'content', sample: 'NAD+ · 500 mg', content: '635.97 mg', batch: 'NJ500/202509' }
    },
    'igf1-lr3-1mg': {
      name: 'IGF-1 LR3', cat: 'Growth', size: '1 mg', origPrice: 54.99, price: 43.99, tag: 'New',
      desc: 'A long-acting IGF-1 analog studied in growth-factor signaling, satellite cell activation, and muscle-fiber research.',
      about: 'IGF-1 LR3 (Insulin-like Growth Factor-1 Long Arg3) is a synthetic 83-amino-acid analog of human IGF-1 bearing an arginine substitution at position 3 and a 13-amino-acid N-terminal extension. These modifications reduce binding affinity for IGF binding proteins (IGFBPs) by more than 270-fold compared to native IGF-1, extending the functional half-life from roughly 12–15 minutes to approximately 20–30 hours. It binds the IGF-1 receptor (IGF-1R) with high affinity and activates the PI3K → Akt → mTOR cascade that governs ribosome biogenesis, protein synthesis, satellite cell activation, and anti-apoptotic signaling in skeletal muscle and other tissues.',
      insights: [
        'IGFBP-resistant design extends half-life to <b>~20–30 hours</b> and confers roughly <b>3× the in-vitro potency</b> of native IGF-1 through sustained IGF-1R / PI3K / Akt / mTOR activation.',
        'In rodent skeletal-muscle models, IGF-1 LR3 promoted satellite cell proliferation and <b>myofiber hyperplasia</b> — an increase in muscle fiber number rather than hypertrophy alone.',
        'Recombinant native IGF-1 (mecasermin, <b>Increlex</b>) is FDA-approved for primary IGF-1 deficiency, confirming IGF-1R pathway validity; LR3 is the standard tool compound for in-vitro IGF-1R signaling and cell-proliferation assays.'
      ],
      stability: STD_STABILITY,
      coa: { type: 'single', purity: '99.521%', dash: '337.67', sample: 'IGF-1 LR3 · 1 mg', content: '1.07 mg', batch: 'LR3/202602' }
    },
    'bac-water-10ml': {
      name: 'Bacteriostatic Water', cat: 'Reconstitution', size: '10 ml', origPrice: 12.49, price: 9.99, tag: 'Essential',
      desc: 'Sterile diluent with 0.9% benzyl alcohol for reconstituting lyophilized research peptides.',
      about: 'Bacteriostatic water is sterile water containing approximately 0.9% benzyl alcohol as a bacteriostatic preservative. The preservative inhibits microbial growth, allowing a sealed vial to be punctured multiple times over an in-use period (typically up to 28 days) without compromising sterility. In peptide research it is the standard diluent for reconstituting lyophilized (freeze-dried) compounds into a workable solution for laboratory handling and measurement.',
      insights: [
        'Contains <b>~0.9% benzyl alcohol</b> as a bacteriostatic preservative, supporting multiple punctures over a typical 28-day in-use window.',
        'The standard diluent for reconstituting <b>lyophilized (freeze-dried) peptides</b> into solution for laboratory handling.',
        'Independently assayed at <b>9.54 mg/ml benzyl alcohol</b> by Janoshik Analytical (batch BA10/202602).'
      ],
      stability: 'Store sealed vials at room temperature, away from direct light. Once the stopper is punctured, the ~0.9% benzyl alcohol preservative keeps the vial bacteriostatic for multi-dose use, typically up to 28 days — discard after the in-use period. Do not freeze.',
      coa: { type: 'content', sample: 'Bacteriostatic Water · 10 ml', content: '9.54 mg/ml benzyl alcohol', batch: 'BA10/202602' }
    }
  };

  /* ---------- CoA block ---------- */
  function row(k, v) { return '<div class="coa-row"><span>' + k + '</span><b>' + v + '</b></div>'; }
  function coaBlock(c) {
    var rows = '';
    if (c.type === 'single') {
      rows = '<div class="coa-ring"><svg viewBox="0 0 120 120" aria-hidden="true">' +
        '<defs><linearGradient id="pdpg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#22d3ee"/><stop offset="1" stop-color="#2563eb"/></linearGradient></defs>' +
        '<circle cx="60" cy="60" r="54" fill="none" stroke="#e6eaf1" stroke-width="11"/>' +
        '<circle cx="60" cy="60" r="54" fill="none" stroke="url(#pdpg)" stroke-width="11" stroke-linecap="round" stroke-dasharray="' + c.dash + ' 339.3" transform="rotate(-90 60 60)"/>' +
        '<text x="60" y="60" text-anchor="middle" class="coa-pct-num">' + c.purity + '</text>' +
        '<text x="60" y="75" text-anchor="middle" class="coa-pct-cap">HPLC PURITY</text></svg></div>' +
        '<div class="coa-data">' + row('Sample tested', c.sample) + row('Measured content', c.content) +
          row('Batch / Lot', c.batch) + row('Test method', 'HPLC + Mass Spec') + '</div>';
    } else if (c.type === 'blend') {
      var bars = c.comps.map(function (k) {
        return '<div class="comp-row"><span class="comp-name">' + k.n + '</span><div class="comp-track"><i style="width:' + k.w + '"></i></div><b>' + k.p + '</b></div>';
      }).join('');
      rows = '<div class="coa-comp"><p class="coa-comp-title">Per-compound purity</p>' + bars +
        '<p class="coa-scale">Bar scale 95–100% · standalone HPLC purity of each component</p></div>' +
        '<div class="coa-data">' + row('Sample tested', c.sample) + row('Measured content', c.content) +
          row('Batch / Lot', c.batch) + row('Test method', 'HPLC + Mass Spec') + '</div>';
    } else {
      rows = '<div class="coa-ring content-ring"><div class="content-check">✓</div><span class="coa-ring-cap">Content assayed</span></div>' +
        '<div class="coa-data">' + row('Sample tested', c.sample) + row('Measured content', c.content) +
          row('Batch / Lot', c.batch) + row('Test method', 'HPLC (quantitative)') + '</div>';
    }
    return '<div class="pdp-coa-wrap"' + (c.type === 'blend' ? ' style="grid-template-columns:1fr 1fr"' : '') + '>' + rows + '</div>';
  }

  function tItem(label) {
    return '<span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7"/></svg>' + label + '</span>';
  }

  /* ---------- Render ---------- */
  var root = document.getElementById('product-root');
  if (!root) return;
  var id = new URLSearchParams(location.search).get('id');
  var p = id && P[id];

  if (!p) {
    root.innerHTML = '<section class="page-hero"><div class="container"><span class="eyebrow">Not found</span>' +
      '<h1>That compound isn\'t here</h1><p>We couldn\'t find that product. Browse the full catalog instead.</p>' +
      '<div style="margin-top:18px"><a href="products.html" class="btn btn-primary">View all compounds</a></div></div></section>';
    return;
  }

  document.title = p.name + ' — Vertex Biolabs';
  var img = 'assets/img/vials/' + id + '.png';
  var tag = p.tag ? '<span class="product-tag">' + p.tag + '</span>' : '';
  var insights = (p.insights || []).map(function (b) { return '<li>' + b + '</li>'; }).join('');

  root.innerHTML =
    '<section class="pdp"><div class="container">' +
      '<nav class="breadcrumb"><a href="index.html">Home</a><span class="sep">/</span><a href="products.html">Products</a><span class="sep">/</span>' + p.name + '</nav>' +
      '<div class="pdp-top">' +
        '<div class="pdp-media is-photo">' + tag + '<span class="discount-badge">20% OFF</span>' +
          '<img src="' + img + '" alt="' + p.name + ' research peptide vial — Vertex Biolabs, 99% purity, research use only" /></div>' +
        '<div class="pdp-info">' +
          '<p class="product-cat">' + p.cat + '</p>' +
          '<h1>' + p.name + ' <span class="pdp-size">' + p.size + '</span></h1>' +
          '<p class="pdp-desc">' + p.desc + '</p>' +
          '<div class="pdp-badges"><span class="pdp-chip">✓ 99%+ HPLC purity</span><span class="pdp-chip">📄 CoA included</span><span class="pdp-chip ruo">Research use only</span></div>' +
          '<div class="bundle-callout" id="bundle"><div class="b-ico">%</div><div><b>Bundle &amp; save</b> <span>— buy <b>2 vials</b> and get <b>5% off</b>, or <b>3+ vials</b> for <b>7.5% off</b>, applied automatically.</span></div></div>' +
          '<div class="qty-row"><span class="qty-label">Quantity</span>' +
            '<div class="qty-stepper"><button type="button" data-q="-1" aria-label="Decrease">−</button>' +
            '<input id="qty" type="number" value="1" min="1" aria-label="Quantity"/>' +
            '<button type="button" data-q="1" aria-label="Increase">+</button></div>' +
            '<span class="qty-label" style="font-weight:500;color:var(--muted)">vials</span></div>' +
          '<div class="pdp-total">' +
            '<span class="pdp-msrp" id="pdp-msrp">$' + p.origPrice.toFixed(2) + '</span>' +
            '<span class="now" id="pdp-total">$' + p.price.toFixed(2) + '</span>' +
            '<span class="was" id="pdp-was" style="display:none"></span>' +
            '<span class="save" id="pdp-save" style="display:none">Save 5%</span>' +
            '<span class="unit" id="pdp-unit"></span></div>' +
          '<button class="btn btn-primary btn-block" id="pdp-add">Add to cart</button>' +
          '<div class="pdp-perks">' +
            '<div class="pdp-perk">🚚 Ships within 24hrs</div>' +
            '<div class="pdp-perk coa-perk-item">' +
              '<img src="assets/img/coa-seal.svg" class="coa-seal-icon" alt="Certificate of Analysis seal" />' +
              '<div class="coa-perk-text"><strong>Product COA on every lot</strong><a href="research.html" class="coa-perk-link">View test reports →</a></div>' +
            '</div>' +
          '</div>' +
          '<div class="pdp-trust">' + tItem('Free U.S. shipping over $60') + tItem('Third-party CoA on every lot') + '</div>' +
        '</div>' +
      '</div>' +

      '<div class="pdp-sections">' +
        '<div class="pdp-block"><h2><span class="b-emoji">🔬</span> Certificate of analysis</h2>' +
          '<p style="color:var(--muted);margin-bottom:18px">Independent HPLC &amp; mass-spec analysis (Janoshik Analytical). The lot-specific CoA for your vial ships with your order.</p>' +
          coaBlock(p.coa) +
          '<button type="button" class="coa-view-btn" id="pdp-coa-view" style="width:auto;margin-top:20px;padding:11px 22px;">View full COA →</button></div>' +
        '<div class="pdp-block"><h2><span class="b-emoji">❄️</span> Storage &amp; stability</h2><p>' + p.stability + '</p></div>' +
        '<div class="pdp-block pdp-disclaimer"><h2><span class="b-emoji">⚠️</span> Important — research use only</h2>' +
          '<p>This product is sold strictly for in-vitro laboratory and research use. It is <b>not intended for human or veterinary consumption</b>, and is not a drug, supplement, or food. It is not approved by the FDA for the diagnosis, treatment, cure, or prevention of any disease. By purchasing, you confirm you are a qualified researcher and will handle this material in accordance with all applicable laws.</p>' +
          '<div class="pill"><b>Not for human use</b><b>Not for veterinary use</b><b>Not for food use</b></div></div>' +
      '</div>' +
    '</div></section>';

  /* ---------- Quantity + bundle pricing ---------- */
  var qty = document.getElementById('qty');
  var totalEl = document.getElementById('pdp-total');
  var wasEl = document.getElementById('pdp-was');
  var saveEl = document.getElementById('pdp-save');
  var unitEl = document.getElementById('pdp-unit');
  var bundleEl = document.getElementById('bundle');

  function effUnit(q) {
    if (q >= 3) return p.price * 0.925;
    if (q === 2) return p.price * 0.95;
    return p.price;
  }

  function recalc() {
    var q = parseInt(qty.value, 10);
    if (!q || q < 1) q = 1;
    qty.value = q;
    var unit = effUnit(q);
    totalEl.textContent = '$' + (unit * q).toFixed(2);
    if (q >= 2) {
      var savePct = q >= 3 ? '7.5%' : '5%';
      wasEl.textContent = '$' + (p.price * q).toFixed(2); wasEl.style.display = '';
      saveEl.textContent = 'Save ' + savePct; saveEl.style.display = ''; bundleEl.classList.add('active');
    } else {
      wasEl.style.display = 'none'; saveEl.style.display = 'none'; bundleEl.classList.remove('active');
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
    var bundleSuffix = q >= 3 ? ' (bundle ×' + q + ', 7.5% off)' : q === 2 ? ' (bundle ×' + q + ', 5% off)' : '';
    var label = p.name + ' — ' + p.size + bundleSuffix + ' (Research Use Only)';
    if (window.VBXCart) { window.VBXCart.add(id, label, unit, q); window.VBXCart.open(); }
  });

  /* ---------- View COA lightbox ---------- */
  (function () {
    var lb = document.createElement('div');
    lb.className = 'coa-lightbox';
    lb.innerHTML = '<button class="coa-lightbox-close" type="button" aria-label="Close">×</button><div class="coa-lightbox-inner"><img alt="Certificate of Analysis" /></div>';
    document.body.appendChild(lb);
    var limg = lb.querySelector('img');
    function close() { lb.classList.remove('open'); document.body.style.overflow = ''; }
    lb.addEventListener('click', function (e) {
      if (e.target === lb || e.target.classList.contains('coa-lightbox-close')) close();
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
    var btn = document.getElementById('pdp-coa-view');
    if (btn) btn.addEventListener('click', function () {
      limg.src = 'assets/coa/' + id + '.png';
      limg.alt = p.name + ' — Certificate of Analysis';
      lb.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  })();
})();
