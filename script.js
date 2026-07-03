/* Zera Henna — handcrafted build + EN/AR i18n */
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ─── Arabic dictionary (keys map to [data-i18n]) ─── */
const AR = {
  'lang.toggle': 'EN',
  'offer': 'خصم ١٠٪ على حجوزات أبريل – يوليو — اذكري الموقع عند التواصل',
  'brand.name': 'زيرا', 'brand.em': ' حِنّا', 'brand.sub': 'بريشة سهدى',
  'nav.services': 'الخدمات', 'nav.bridal': 'العرائس', 'nav.work': 'الأعمال',
  'nav.about': 'عن سهدى', 'nav.faq': 'الأسئلة', 'nav.cta': 'احجزي عبر واتساب',

  'hero.kicker': 'الشارقة، الإمارات — خدمة منزلية في جميع الإمارات السبع',
  'hero.h1a': 'أغمق', 'hero.h1b': 'حِنّة', 'hero.h1c': 'في المجلس.',
  'hero.lead': 'حِنّاء العرائس والنكاح والحفلات بريشة سهدى — عجينة عضوية تُخلط يدويًا وتُرسم عند باب منزلكِ. أكثر من ٤٥٠ تصميمًا منذ نوفمبر ٢٠٢٠.',
  'hero.book': 'احجزي عبر واتساب', 'hero.see': 'شاهدي الأعمال',
  'hero.offerNote': 'خصم ١٠٪ هذا الشهر',
  'hero.proof': '‏٢٢٫٧ ألف متابع على ‎@zera.henna‎ · لون غامق مضمون · عجينة عضوية',
  'hero.polaroid': 'طازجة من المخروط — الشارقة',

  'ticker': 'عرائس ✿ نكاح ✿ خطوبة ✿ حفلات ✿ العيد ✿ مخاريط عضوية ✿ خدمة منزلية في الإمارات السبع ✿ ',

  'svc.kicker': 'ما تقدّمه سهدى', 'svc.h2': 'الخدمات والأسعار بصراحة',
  'svc.t1': 'حِنّاء العروس', 'svc.d1': 'اليدان والقدمان بالكامل، تصميم يناسب فستانكِ. الحدث الأهم.',
  'svc.t2': 'النكاح والخطوبة', 'svc.d2': 'أنيقة وأخف من حِنّة العروس — تظهر رائعة في الصور.',
  'svc.t3': 'حِنّاء الحفلات', 'svc.d3': 'تصاميم موسمية لكل يد. تنتهي قبل وصول الضيوف.',
  'svc.t4': 'حِنّاء العيد', 'svc.d4': 'تصاميم سريعة للمناسبات — احجزي مبكرًا، أسبوع العيد يمتلئ أولًا.',
  'svc.t5': 'المجموعات والمناسبات', 'svc.d5': 'حِنّاء لضيوفكِ — أعراس، استقبال مواليد، وشركات.',
  'svc.t6': 'مخاريط ZH العضوية', 'svc.d6': 'ملفوفة يدويًا في الاستوديو، وتُوصَّل في كل الإمارات.',
  'svc.p1': '<small>من</small> ٣٥٠ د.إ', 'svc.p2': '<small>من</small> ٢٥٠ د.إ',
  'svc.p3': '<small>من</small> ١٠٠ د.إ', 'svc.p4': '<small>من</small> ٥٠ د.إ',
  'svc.p5': 'عرض خاص', 'svc.p6': '<small>من</small> ٢٥ د.إ',
  'svc.g1': 'احجزي ←', 'svc.g5': 'استفسري ←', 'svc.g6': 'اطلبي ←',
  'svc.fine': '* أسعار توضيحية — تؤكّد سهدى العرض النهائي عبر واتساب قبل أي التزام.',

  'bridal.kicker': 'الحدث الأهم', 'bridal.h2': 'جلسة العروس',
  'bridal.lead': 'عروس واحدة، فنانة واحدة، جلسة واحدة دون عجلة. تطابق سهدى التصميم مع فستانكِ ومجوهراتكِ، وتخلط العجينة طازجة، وتبقى حتى تنتهي كل إصبع.',
  'bridal.i1': 'استشارة تصميم عبر واتساب — أرسلي فستانكِ، تصلكِ الرسومات',
  'bridal.i2': 'عجينة عضوية تُخلط في الليلة السابقة لجلستكِ',
  'bridal.i3': 'اليدان والقدمان كاملتين، جلسة منزلية ٣–٥ ساعات',
  'bridal.i4': 'تعليمات العناية ليصل اللون إلى أغمق درجاته في اليوم الثاني',
  'bridal.s1': 'تصميم منشور', 'bridal.s2': 'متابع', 'bridal.s3': 'أول حجز', 'bridal.s3v': 'نوفمبر ٢٠',
  'bridal.cta': 'احجزي موعد العروس', 'bridal.polaroid': 'حِنّاء نكاح لـ حمنة',

  'work.kicker': 'أحدث الأعمال', 'work.h2': 'طازجة من المخروط',
  'work.note': 'كل صورة تنقلكِ إلى المنشور الحقيقي<br>على ‎@zera.henna‎ — دون تصنّع',
  'work.c1': 'نكاح — الكفّان كاملين ↗', 'work.c2': 'عروس — ظهر اليد ↗',
  'work.c3': 'زهور الخطوبة ↗', 'work.c4': 'نقشة الدانتيل ↗', 'work.more': '‏٤٥٠+ أكثر',

  'about.kicker': 'الفنانة', 'about.h2': 'خلف المخروط',
  'about.p1': 'زيرا حِنّا هي <em>سهدى</em> — فنانة من الشارقة أخذت أول حجز لها في نوفمبر ٢٠٢٠ ولم تترك المخروط منذ ذلك الحين. بعد ٤٥٠ تصميمًا منشورًا، صار لكومة طلباتها جلسة تصوير خاصة.',
  'about.p2': 'تخلط عجينتها العضوية بنفسها — دون أصباغ كيميائية، ولهذا تكتب <em>«لون غامق مضمون»</em> بخط يدها. العرائس يحصلن عليها عند باب المنزل في أي مكان بالإمارات؛ والبقية يصلهم مخاريط ZH الملفوفة يدويًا.',
  'about.sig': '— سهدى', 'about.cta': 'اطلبي المخاريط عبر واتساب',
  'about.cap1': 'سهدى، مع طلبات يوم واحد', 'about.cap2': 'مخاريط ZH، ملفوفة وموسومة',

  'steps.kicker': 'الحجز يستغرق ٣٠ ثانية تقريبًا', 'steps.h2': 'كيف تتم العملية',
  'steps.t1': 'راسلينا على واتساب', 'steps.d1': 'اضغطي أي زر في الصفحة — رسالتكِ مكتوبة مسبقًا.',
  'steps.t2': 'اختاري التصميم والموعد', 'steps.d2': 'أرسلي صورة فستانكِ — ترد سهدى بتصاميم تناسبه وموعد.',
  'steps.t3': 'تأتي إليكِ', 'steps.d3': 'خدمة منزلية في الإمارات السبع. استرخي؛ المخروط يقوم بالعمل.',

  'faq.kicker': 'يُسأل كل أسبوع', 'faq.h2': 'إجابات سريعة',
  'faq.q1': 'كم يصبح اللون غامقًا؟',
  'faq.a1': 'غامق جدًا. هذا وعد البيت — العجينة العضوية تعطي أغمق لون بعد ٢٤–٤٨ ساعة من الجلسة، وتدوم أسبوعًا إلى أسبوعين مع عناية بسيطة (ترسلها سهدى عبر واتساب).',
  'faq.q2': 'هل تأتين إلى إمارتي؟',
  'faq.a2': 'نعم — المقر في الشارقة، وخدمة منزلية في الإمارات السبع. تُحتسب المواصلات مع الحجز فلا مفاجآت في اليوم.',
  'faq.q3': 'متى يجب أن تحجز العروس؟',
  'faq.a3': 'أسبوعان إلى أربعة أسابيع مسبقًا مريح. أسابيع العيد وموسم الأعراس تُحجز أولًا — إن كان موعدكِ ثابتًا، راسلينا اليوم واحجزيه.',
  'faq.q4': 'هل أطلب مخاريط دون موعد؟',
  'faq.a4': 'بالتأكيد. مخاريط ZH العضوية ملفوفة يدويًا في الاستوديو وتُوصَّل في أي مكان بالإمارات — نفس العجينة التي تستخدمها سهدى للعرائس.',

  'book.kicker': 'لا نماذج في الفراغ', 'book.h2': 'ثبّتي موعدكِ',
  'book.lead': 'يفتح هذا واتساب وبياناتكِ مُعبّأة — لا شيء يُرسَل حتى تضغطي <em>أنتِ</em> إرسال، وتصلين مباشرة إلى محادثة سهدى.',
  'chip.bridal': 'عروس', 'chip.nikkah': 'نكاح', 'chip.party': 'حفلة',
  'chip.eid': 'عيد', 'chip.group': 'مجموعة', 'chip.cones': 'مخاريط',
  'book.name': 'اسمكِ', 'book.date': 'التاريخ المفضّل', 'book.where': 'أين أنتِ؟',
  'book.notes': 'أي شيء آخر', 'book.optional': 'اختياري',
  'em.sharjah': 'الشارقة', 'em.dubai': 'دبي', 'em.ajman': 'عجمان', 'em.abudhabi': 'أبوظبي',
  'em.rak': 'رأس الخيمة', 'em.fujairah': 'الفجيرة', 'em.uaq': 'أم القيوين',
  'book.send': 'أرسليها إلى سهدى عبر واتساب',
  'book.direct': 'أو راسليها مباشرة:', 'book.phone': '٠٥٦ ٨٥٨ ٩٩٦٠',

  'foot.tag': 'الشارقة، الإمارات · نرسم منذ نوفمبر ٢٠٢٠',
  'foot.ig': 'إنستغرام ↗', 'foot.wa': 'واتساب ↗', 'foot.soon': 'تيك توك وسناب شات — قريبًا',
  'foot.demo': 'نسخة توضيحية أُنشئت لـ زيرا حِنّا — الأسعار المعروضة تقديرية بانتظار الموافقة.',
  'float': 'احجزي حِنّاء', 'bar': 'احجزي عبر واتساب · ٠٥٦ ٨٥٨ ٩٩٦٠'
};

/* cache the original English HTML of every translatable node */
const EN = new Map();
document.querySelectorAll('[data-i18n]').forEach(el => EN.set(el, el.innerHTML));

const toArabicDigits = s => String(s).replace(/[0-9]/g, d => '٠١٢٣٤٥٦٧٨٩'[d]).replace(/\./g, '٫');
const WA = '971568589960';

let lang = (() => { try { return localStorage.getItem('zh-lang') === 'ar' ? 'ar' : 'en'; } catch (_) { return 'en'; } })();

function applyLang(l) {
  lang = l;
  const ar = l === 'ar';
  document.documentElement.lang = l;
  document.documentElement.dir = ar ? 'rtl' : 'ltr';
  try { localStorage.setItem('zh-lang', l); } catch (_) {}

  // swap text
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (ar) { if (AR[key] != null) el.innerHTML = AR[key]; }
    else { el.innerHTML = EN.get(el); }
  });

  // placeholders
  document.querySelectorAll('[data-ph-ar]').forEach(el => {
    if (!el.dataset.phEn) el.dataset.phEn = el.getAttribute('placeholder') || '';
    el.setAttribute('placeholder', ar ? el.dataset.phAr : el.dataset.phEn);
  });

  // primary WhatsApp CTAs → Arabic prefilled message
  document.querySelectorAll('.wa-primary').forEach(a => {
    if (!a.dataset.enHref) a.dataset.enHref = a.getAttribute('href');
    a.setAttribute('href', ar
      ? `https://wa.me/${WA}?text=${encodeURIComponent(a.dataset.arMsg)}`
      : a.dataset.enHref);
  });

  // re-render any counters already finished + running ones respect lang
  document.querySelectorAll('[data-count]').forEach(el => {
    if (el.dataset.done) {
      const v = parseFloat(el.dataset.count).toFixed(parseInt(el.dataset.decimal || '0', 10));
      el.textContent = ar ? toArabicDigits(v) : v;
    }
  });

  document.documentElement.style.setProperty('--dir-sign', ar ? '-1' : '1');
}

/* ─── language toggle ─── */
document.getElementById('langBtn').addEventListener('click', () => {
  applyLang(lang === 'ar' ? 'en' : 'ar');
});

/* mobile menu */
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
}));

/* measure hand-drawn SVG paths so they can draw themselves on */
document.querySelectorAll('.draw path').forEach(p => {
  const len = Math.ceil(p.getTotalLength());
  p.style.setProperty('--len', len);
});

/* reveals + draw-on + counters */
if (!reduced) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      e.target.querySelectorAll('[data-count]').forEach(runCounter);
      io.unobserve(e.target);
    });
  }, { threshold: 0.18, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.rv, .draw').forEach(el => io.observe(el));
} else {
  document.querySelectorAll('.rv, .draw').forEach(el => el.classList.add('in'));
  document.querySelectorAll('[data-count]').forEach(el => {
    el.dataset.done = '1';
    const v = el.dataset.count;
    el.textContent = lang === 'ar' ? toArabicDigits(v) : v;
  });
}

function runCounter(el) {
  if (el.dataset.done) return;
  el.dataset.done = '1';
  const target = parseFloat(el.dataset.count);
  const decimals = parseInt(el.dataset.decimal || '0', 10);
  const dur = 1400, t0 = performance.now();
  (function tick(t) {
    const p = Math.min((t - t0) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    const v = (target * eased).toFixed(decimals);
    el.textContent = lang === 'ar' ? toArabicDigits(v) : v;
    if (p < 1) requestAnimationFrame(tick);
  })(t0);
}

/* booking form → composes a WhatsApp message in the active language */
const form = document.getElementById('bookingForm');
let service = 'Bridal Henna', serviceAr = 'حِنّاء عروس';

document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    service = chip.dataset.service;
    serviceAr = chip.dataset.serviceAr;
  });
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const name = form.name.value.trim();
  const date = form.date.value;
  const emirate = form.emirate.value;
  const notes = form.notes.value.trim();

  let ok = true;
  [form.name, form.date].forEach(inp => {
    const bad = !inp.value.trim();
    inp.closest('.field').classList.toggle('invalid', bad);
    if (bad) ok = false;
  });
  if (!ok) return;

  const ar = lang === 'ar';
  let niceDate = date;
  try {
    niceDate = new Date(date + 'T12:00:00').toLocaleDateString(ar ? 'ar-AE' : 'en-GB', {
      weekday: 'short', day: 'numeric', month: 'long', year: 'numeric'
    });
  } catch (_) {}

  let lines;
  if (ar) {
    const emAr = { 'Sharjah': 'الشارقة', 'Dubai': 'دبي', 'Ajman': 'عجمان', 'Abu Dhabi': 'أبوظبي', 'Ras Al Khaimah': 'رأس الخيمة', 'Fujairah': 'الفجيرة', 'Umm Al Quwain': 'أم القيوين' }[emirate] || emirate;
    lines = [
      `مرحبًا سهدى! أودّ حجز *${serviceAr}* ✨`,
      `• الاسم: ${name}`,
      `• التاريخ: ${niceDate}`,
      `• الموقع: ${emAr}`
    ];
    if (notes) lines.push(`• ملاحظات: ${notes}`);
    lines.push(`(مُرسَلة من موقع زيرا حِنّا)`);
  } else {
    lines = [
      `Hi Sahdha! I'd like to book *${service}* ✨`,
      `• Name: ${name}`,
      `• Date: ${niceDate}`,
      `• Location: ${emirate}`
    ];
    if (notes) lines.push(`• Notes: ${notes}`);
    lines.push(`(sent from the Zera Henna website)`);
  }

  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
});

form.querySelectorAll('input').forEach(inp =>
  inp.addEventListener('input', () => inp.closest('.field').classList.remove('invalid'))
);

/* apply saved language on load */
applyLang(lang);
