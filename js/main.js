/* Lunita Tucumana — interacciones del sitio */
(function () {
  'use strict';

  /* =========================================================
     IDIOMA: el HTML está en inglés (idioma por defecto).
     Acá están los textos en español. Para editar un texto en
     español, buscá su clave (la misma que el atributo
     data-i18n del HTML) y cambiá el texto.
     ========================================================= */
  var ES = {
    skip: 'Saltar al contenido',
    brandAria: 'Lunita Tucumana, inicio',
    navAria: 'Principal',
    navAbout: 'Nosotros',
    navBrands: 'Para marcas',
    navProcess: 'Cómo trabajamos',
    navFaq: 'Preguntas',
    navCta: 'Trabajemos juntos',

    heroEyebrow: 'Reventa autorizada en Amazon',
    heroTitle: 'Cuidamos tu marca como si fuera <span>nuestra.</span>',
    heroLead: 'Somos una empresa registrada en Florida especializada en revender productos de marca en Amazon, respetando su precio, sus publicaciones y su imagen. Trato directo, documentación en regla y compromiso de largo plazo.',
    heroCta1: 'Proponer una alianza',
    heroCta2: 'Ver nuestra documentación',

    credTitle: 'Credenciales de la empresa',
    credName: 'Razón social',
    credReg: 'Registro',
    credRegVal: 'Florida LLC · N° L25000005577',
    credStatus: 'Estado',
    credStatusVal: 'Activa desde enero de 2025',
    credResale: 'Certificado de reventa',
    credResaleVal: 'Vigente · se envía a pedido',
    credEinVal: 'Disponible en formulario W-9',
    credHq: 'Sede',
    credHqVal: 'Miami, Florida, EE. UU.',
    credNote: 'Podés verificar nuestro registro en <a href="https://search.sunbiz.org/Inquiry/CorporationSearch/ByDocumentNumber" target="_blank" rel="noopener">Sunbiz.org</a> con el N° L25000005577. Enviamos copia de toda la documentación dentro de las 24 h hábiles de tu solicitud.',

    trustAria: 'Garantías',
    trust1: '<strong>Empresa registrada</strong> en el Estado de Florida',
    trust2: '<strong>Certificado de reventa</strong> vigente',
    trust3: '<strong>Respeto de MAP</strong> y políticas de marca',
    trust4: '<strong>Atención en</strong> español e inglés',

    photoAlt: 'Florencia Galindo y Agustín Galvez, fundadores de Lunita Tucumana',
    photoBadge: 'Desde 2025 · Miami, FL',
    aboutEyebrow: 'Quiénes somos',
    aboutTitle: 'Somos los fundadores, y atendemos cada marca en persona.',
    aboutP1: 'Lunita Tucumana es una empresa con sede en Miami dedicada a la distribución y reventa de productos de marca. Trabajamos con marcas que buscan un socio serio, ordenado y presente, que cuide su producto tanto como ellas.',
    aboutP2: 'No somos un intermediario anónimo: cuando trabajás con nosotros, hablás directamente con quienes toman las decisiones, responden rápido y rinden cuentas.',
    cofounderF: 'Cofundadora',
    cofounderM: 'Cofundador',

    commitEyebrow: 'Nuestro compromiso con las marcas',
    commitTitle: 'Lo que podés esperar de nosotros, por escrito.',
    c1Title: 'Respeto de precios',
    c1Text: 'Cumplimos tu política de precio mínimo anunciado (MAP). Nunca rematamos tu producto ni competimos contra tus distribuidores.',
    c2Title: 'Protección de tu imagen',
    c2Text: 'En Amazon vendemos sobre tus publicaciones oficiales: no creamos listings duplicados, no modificamos tu contenido y respetamos tu Brand Registry.',
    c3Title: 'Producto original, bien tratado',
    c3Text: 'Compramos directo a la marca o a su distribuidor oficial. Almacenamos y entregamos en empaque original, sin alteraciones.',
    c4Title: 'Pagos claros y puntuales',
    c4Text: 'Trabajamos con pago anticipado o con los términos que acordemos. Facturación ordenada y comunicación directa.',

    procEyebrow: 'Cómo trabajamos',
    procTitle: 'Abrir una cuenta con nosotros es simple.',
    s1Title: 'Conversación inicial',
    s1Text: 'Nos contás sobre tu marca y te contamos dónde y cómo la venderíamos.',
    s2Title: 'Documentación',
    s2Text: 'Enviamos W-9, certificado de reventa y completamos tu formulario de alta.',
    s3Title: 'Primer pedido',
    s3Text: 'Acordamos volumen, condiciones de pago y logística de entrega en Miami.',
    s4Title: 'Seguimiento',
    s4Text: 'Te compartimos cómo se mueve tu producto y planificamos juntos la reposición.',

    docsEyebrow: 'Documentación disponible',
    docsTitle: 'Todo lo que tu equipo de cuentas necesita para darnos de alta.',
    d1: 'Artículos de organización de la LLC (Florida)',
    d2: 'Certificado de reventa (Florida Annual Resale Certificate)',
    d3: 'Formulario W-9 con EIN',
    d4: 'Referencias comerciales y bancarias, si se requieren',
    d5: 'Formulario de alta de cliente o solicitud de crédito de tu empresa',
    whereEyebrow: 'Dónde vendemos',
    amzMain: 'Nuestro canal principal',
    a1: 'Solo listamos tu marca con tu autorización expresa',
    a2: 'Precio siempre alineado con tu MAP',
    a3: 'Sin listings duplicados ni cambios a tu contenido',
    a4: 'Atención al cliente y reseñas cuidadas como propias',

    faqEyebrow: 'Preguntas de proveedores',
    faqTitle: 'Lo que suelen preguntarnos.',
    q1: '¿Son una empresa legalmente constituida en EE. UU.?',
    r1: 'Sí. Lunita Tucumana es una LLC registrada en el Estado de Florida, con EIN federal y certificado de reventa vigente. Te enviamos los comprobantes cuando los pidas.',
    q2: '¿Respetan nuestra política de precios?',
    r2: 'Siempre. Firmamos tu acuerdo de MAP o de distribución y lo aplicamos en todos nuestros canales.',
    q3: '¿Cómo cuidan nuestra marca en Amazon?',
    r3: 'Vendemos sobre tus publicaciones oficiales, respetamos tu MAP y tu Brand Registry, y no listamos nada sin tu autorización. Si preferís limitar productos o regiones, lo acordamos por escrito antes del primer pedido.',
    q4: '¿Cómo manejan los pagos?',
    r4: 'Podemos comenzar con pago anticipado y, a medida que crece la relación, evaluar términos de crédito según tus políticas.',

    contactEyebrow: 'Contacto',
    contactTitle: 'Contanos sobre tu marca. Te respondemos en un día hábil.',
    phone: '<a href="tel:+17862965105">+1 (786) 296-5105</a> · también por <a href="https://wa.me/17862965105" target="_blank" rel="noopener">WhatsApp</a>',
    hours: 'Lunes a viernes, 9 a 18 h (hora del Este)',
    fName: 'Nombre',
    fNamePh: 'Tu nombre',
    fCompany: 'Empresa / marca',
    fCompanyPh: 'Nombre de la marca',
    fEmail: 'Email corporativo',
    fEmailPh: 'nombre@empresa.com',
    fMsg: '¿Qué productos querés distribuir?',
    fMsgPh: 'Contanos sobre la línea, volúmenes y políticas de reventa',
    fSend: 'Enviar propuesta'
  };

  // Textos generados por JavaScript, en los dos idiomas
  var UI = {
    en: {
      title: 'Lunita Tucumana LLC — Authorized Amazon reseller for brands · Miami, FL',
      switchAria: 'Ver el sitio en español',
      menuOpen: 'Open menu', menuClose: 'Close menu',
      sending: 'Sending…',
      ok: 'Thank you! We received your proposal and will reply within one business day.',
      error: 'We couldn’t send your message. Please email us at info@lunitatucumana.com.'
    },
    es: {
      title: 'Lunita Tucumana LLC — Reventa autorizada de marcas en Amazon · Miami, FL',
      switchAria: 'View the site in English',
      menuOpen: 'Abrir menú', menuClose: 'Cerrar menú',
      sending: 'Enviando…',
      ok: '¡Gracias! Recibimos tu propuesta y te respondemos dentro de un día hábil.',
      error: 'No pudimos enviar el mensaje. Escribinos a info@lunitatucumana.com, por favor.'
    }
  };

  var root = document.documentElement;
  var current = 'en';
  var EN = {}; // se completa leyendo el HTML original

  // Guarda los textos en inglés que ya están en el HTML
  function rememberEnglish() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) { EN[el.dataset.i18n] = el.innerHTML; });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) { EN[el.dataset.i18nPh] = el.getAttribute('placeholder'); });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) { EN[el.dataset.i18nAria] = el.getAttribute('aria-label'); });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) { EN[el.dataset.i18nAlt] = el.getAttribute('alt'); });
  }

  function setLanguage(lang) {
    current = lang === 'es' ? 'es' : 'en';
    var dict = current === 'es' ? ES : EN;
    var pick = function (key) { return dict[key] != null ? dict[key] : EN[key]; };

    document.querySelectorAll('[data-i18n]').forEach(function (el) { el.innerHTML = pick(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) { el.setAttribute('placeholder', pick(el.dataset.i18nPh)); });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) { el.setAttribute('aria-label', pick(el.dataset.i18nAria)); });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) { el.setAttribute('alt', pick(el.dataset.i18nAlt)); });

    root.lang = current;
    document.title = UI[current].title;

    var sw = document.querySelector('.lang-switch');
    if (sw) {
      sw.setAttribute('aria-label', UI[current].switchAria);
      sw.setAttribute('lang', current === 'es' ? 'en' : 'es');
      sw.querySelectorAll('.lang-opt').forEach(function (opt) {
        opt.classList.toggle('is-active', opt.dataset.lang === current);
      });
    }
    var langField = document.querySelector('input[name="language"]');
    if (langField) langField.value = current === 'es' ? 'Español' : 'English';

    var toggle = document.querySelector('.nav-toggle');
    if (toggle) toggle.setAttribute('aria-label', toggle.getAttribute('aria-expanded') === 'true' ? UI[current].menuClose : UI[current].menuOpen);

    try { localStorage.setItem('lt-lang', current); } catch (e) {}
    root.classList.remove('lang-pending');
  }

  rememberEnglish();
  var saved = 'en';
  try { saved = localStorage.getItem('lt-lang') || 'en'; } catch (e) {}
  var param = (location.search.match(/[?&]lang=(en|es)/) || [])[1];
  setLanguage(param || saved);

  var switchBtn = document.querySelector('.lang-switch');
  if (switchBtn) {
    switchBtn.addEventListener('click', function () { setLanguage(current === 'es' ? 'en' : 'es'); });
  }

  // Año del footer
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Menú móvil
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    var setOpen = function (open) {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? UI[current].menuClose : UI[current].menuOpen);
    };
    toggle.addEventListener('click', function () {
      setOpen(!nav.classList.contains('is-open'));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setOpen(false);
    });
  }

  // Envío del formulario sin salir de la página (FormSubmit, compatible con GitHub Pages).
  // Si JavaScript falla, el formulario igual se envía y redirige a /gracias.html.
  var form = document.querySelector('form[name="contacto"]');
  if (form && window.fetch) {
    var status = form.querySelector('.form-status');
    var button = form.querySelector('button[type="submit"]');
    var endpoint = form.getAttribute('action').replace('formsubmit.co/', 'formsubmit.co/ajax/');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var label = button.innerHTML;
      button.disabled = true;
      button.textContent = UI[current].sending;
      status.className = 'form-status';
      status.textContent = '';

      var data = {};
      new FormData(form).forEach(function (value, key) { data[key] = value; });

      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      })
        .then(function (res) { return res.json().then(function (json) { return { ok: res.ok, json: json }; }); })
        .then(function (r) {
          if (!r.ok || String(r.json.success) === 'false') throw new Error('send failed');
          form.reset();
          setLanguage(current); // restaura el campo oculto de idioma
          status.className = 'form-status ok';
          status.textContent = UI[current].ok;
        })
        .catch(function () {
          status.className = 'form-status error';
          status.textContent = UI[current].error;
        })
        .finally(function () {
          button.disabled = false;
          button.innerHTML = label;
        });
    });
  }
})();
