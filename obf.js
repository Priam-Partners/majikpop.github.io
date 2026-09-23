/* Coordonnées encodées : invisibles pour les robots qui lisent le code source sans exécuter JavaScript */
(function () {
  var K = { mail: 'bW9jLm9jZG5hbWFpcnBAdG9zc2VwLmY=', tel: 'ODg0NDUyMjE2MzMr' };
  function g(k) { return atob(K[k]).split('').reverse().join(''); }
  function fmt(t) { return t.replace(/^\+33(\d)(\d{2})(\d{2})(\d{2})(\d{2})$/, '+33 $1 $2 $3 $4 $5'); }
  window.priamContact = g;
  function run() {
    document.querySelectorAll('[data-c]').forEach(function (a) {
      var k = a.getAttribute('data-c'), v = g(k), s = a.getAttribute('data-subject');
      a.href = k === 'mail' ? 'mailto:' + v + (s ? '?subject=' + encodeURIComponent(s) : '') : 'tel:' + v;
    });
    document.querySelectorAll('[data-c-text]').forEach(function (e) {
      var k = e.getAttribute('data-c-text'), v = g(k);
      e.textContent = k === 'tel' ? fmt(v) : v;
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();
