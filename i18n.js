(function () {
  "use strict";

  window.MojoI18N = window.MojoI18N || {};
  var translations = window.MojoI18N;

  var STORAGE_KEY = "mojolauncher.lang";
  var selects = document.querySelectorAll(".lang__select");

  // added this for for language that start from right to left
  var RTL_LANGS = ["ar"];

  // that function switch the <dir> to right to left <> left to right for style.css
  function setDirection(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL_LANGS.indexOf(lang) !== -1 ? "rtl" : "ltr";
  }

  var supported = [];
  if (selects.length) {
    var options = selects[0].options;
    for (var i = 0; i < options.length; i++) supported.push(options[i].value);
  }
  if (!supported.length) supported = ["en"];

  var defaults = {};
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    defaults[el.getAttribute("data-i18n")] = el.textContent;
  });

  var srcDefaults = {};
  document.querySelectorAll("[data-i18n-src]").forEach(function (el) {
    srcDefaults[el.getAttribute("data-i18n-src")] = el.getAttribute("src");
  });

  var altDefaults = {};
  document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
    altDefaults[el.getAttribute("data-i18n-alt")] = el.getAttribute("alt");
  });

  var loading = {};
  var currentLang = supported[0];

  function t(key, fallback) {
    var dict = translations[currentLang] || {};
    if (dict[key] != null) return dict[key];
    if (defaults[key] != null) return defaults[key];
    return fallback != null ? fallback : key;
  }

  function loadLocale(lang) {
    if (translations[lang]) return Promise.resolve(translations[lang]);
    if (loading[lang]) return loading[lang];
    loading[lang] = new Promise(function (resolve, reject) {
      var script = document.createElement("script");
      script.src = "assets/locales/" + lang + ".js";
      script.onload = function () { resolve(translations[lang]); };
      script.onerror = function () {
        delete loading[lang];
        reject(new Error("Failed to load locale: " + lang));
      };
      document.head.appendChild(script);
    });
    return loading[lang];
  }

  function detectLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved && supported.indexOf(saved) !== -1) return saved;
    } catch (e) {}
    var nav = (navigator.language || "en").toLowerCase();
    for (var i = 0; i < supported.length; i++) {
      if (nav === supported[i] || nav.indexOf(supported[i] + "-") === 0) return supported[i];
    }
    return supported[0];
  }

  function apply(lang) {
    var dict = translations[lang] || {};
    currentLang = lang;
    setDirection(lang);
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var value = dict[key] != null ? dict[key] : defaults[key];
      if (value != null) el.textContent = value;
    });
    document.querySelectorAll("[data-i18n-src]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-src");
      var value = dict[key] != null ? dict[key] : srcDefaults[key];
      if (value != null) el.setAttribute("src", value);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      var value = dict[key] != null ? dict[key] : altDefaults[key];
      if (value != null) el.setAttribute("alt", value);
    });
    selects.forEach(function (sel) { sel.value = lang; });
    document.dispatchEvent(new CustomEvent("mojo:langchange", { detail: { lang: lang } }));
  }

  function setLang(lang) {
    if (supported.indexOf(lang) === -1) return;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    loadLocale(lang).then(function () { apply(lang); });
  }

  translations.t = t;
  translations.getLang = function () { return currentLang; };

  selects.forEach(function (sel) {
    sel.addEventListener("change", function () { setLang(sel.value); });
  });

  var initial = detectLang();
  // sets direction
  setDirection(initial);
  selects.forEach(function (sel) { sel.value = initial; });
  loadLocale(initial).then(function () { apply(initial); });
})();
