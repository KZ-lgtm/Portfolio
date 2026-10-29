/* EN / 繁體中文 switch. English lives in the markup; each page passes its Chinese strings to initI18n.
   Elements carry data-i18n="key" (innerHTML) or data-i18n-alt="key" (img alt). Choice: #zh / #en on load,
   then the saved choice, then the browser language. */
(function () {
  var KEY = 'portfolio-lang';
  function saved() {
    if (/^#(zh|en)$/.test(location.hash)) return location.hash.slice(1);
    try { return localStorage.getItem(KEY) || ''; } catch (e) { return ''; }
  }
  window.initI18n = function (zh) {
    var els = document.querySelectorAll('[data-i18n]');
    var alts = document.querySelectorAll('[data-i18n-alt]');
    var en = { _title: document.title };
    els.forEach(function (el) { en[el.dataset.i18n] = el.innerHTML; });
    alts.forEach(function (el) { en['alt:' + el.dataset.i18nAlt] = el.alt; });

    function apply(lang) {
      var d = lang === 'zh' ? zh : en;
      var pick = function (k) { return d[k] != null ? d[k] : en[k]; };
      els.forEach(function (el) { el.innerHTML = pick(el.dataset.i18n); });
      alts.forEach(function (el) { el.alt = pick('alt:' + el.dataset.i18nAlt); });
      document.title = pick('_title');
      document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';
      document.querySelectorAll('[data-set-lang]').forEach(function (b) {
        b.setAttribute('aria-pressed', String(b.dataset.setLang === lang));
      });
      window.currentLang = lang;
      try { localStorage.setItem(KEY, lang); } catch (e) {}
    }
    document.querySelectorAll('[data-set-lang]').forEach(function (b) {
      b.addEventListener('click', function () { apply(b.dataset.setLang); });
    });
    apply(saved() || ((navigator.language || '').toLowerCase().indexOf('zh') === 0 ? 'zh' : 'en'));
  };
})();
