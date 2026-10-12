/* Lunita Tucumana — interacciones del sitio */
(function () {
  'use strict';

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
      toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
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
      button.disabled = true;
      button.textContent = 'Enviando…';
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
          if (!r.ok || String(r.json.success) === 'false') throw new Error('envío fallido');
          form.reset();
          status.className = 'form-status ok';
          status.textContent = '¡Gracias! Recibimos tu propuesta y te respondemos dentro de un día hábil.';
        })
        .catch(function () {
          status.className = 'form-status error';
          status.textContent = 'No pudimos enviar el mensaje. Escribinos a info@lunitatucumana.com, por favor.';
        })
        .finally(function () {
          button.disabled = false;
          button.textContent = 'Enviar propuesta';
        });
    });
  }
})();
