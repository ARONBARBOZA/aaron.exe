(function () {
  'use strict';

  /* ---------- image fallback (fully external — no inline handlers) ----------
     Some hosts set a Content-Security-Policy that blocks inline
     onload="..."/onerror="..." attributes, which silently breaks image
     fallbacks if that logic lives in the HTML. So instead we find every
     photo on the page and attach load/error listeners here in script.js.
     Images start invisible (see visibility:hidden in css/style.css) so a
     missing file never flashes the browser's native broken-image icon —
     they're revealed once confirmed loaded, or replaced with a labeled
     placeholder if they fail. */
  function setUpImage(img) {
    function reveal() { img.classList.add('is-loaded'); }
    function missing() {
      var container = img.closest('.hero-photo-frame') || img.closest('.polaroid-inner');
      if (container) container.classList.add('img-missing');
    }
    // If the browser already resolved this image (e.g. it was cached)
    // before we attached listeners, `load`/`error` won't fire again —
    // so check img.complete first and handle it immediately.
    if (img.complete) {
      if (img.naturalWidth > 0) reveal(); else missing();
    } else {
      img.addEventListener('load', reveal);
      img.addEventListener('error', missing);
    }
  }

  Array.prototype.slice
    .call(document.querySelectorAll('.hero-photo-frame img, .polaroid-inner img'))
    .forEach(setUpImage);

  /* ---------- theme toggle (in-memory; persists for the session) ---------- */
  var root = document.documentElement;
  var toggle = document.getElementById('themeToggle');
  var sun = document.getElementById('iconSun');
  var moon = document.getElementById('iconMoon');
  // There are two portrait instances in the DOM (the full-size desktop
  // photo and the compact mobile avatar beside the heading), so grab all
  // matching frames rather than just the first.
  var heroLights = Array.prototype.slice.call(document.querySelectorAll('.hero-photo-frame.hero-photo-light'));
  var heroDarks = Array.prototype.slice.call(document.querySelectorAll('.hero-photo-frame.hero-photo-dark'));
  var currentTheme = 'dark';

  function applyTheme(theme) {
    currentTheme = theme;
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      sun.classList.remove('active');
      moon.classList.add('active');
    } else {
      root.removeAttribute('data-theme');
      sun.classList.add('active');
      moon.classList.remove('active');
    }
    // Crossfade the hero portrait(s): pictures/hero-light.jpg in light mode,
    // pictures/hero-dark.jpg in dark mode.
    heroLights.forEach(function (el) { el.classList.toggle('is-active', theme !== 'dark'); });
    heroDarks.forEach(function (el) { el.classList.toggle('is-active', theme === 'dark'); });
  }
  applyTheme(currentTheme);

  toggle.addEventListener('click', function () {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });

  /* ---------- tab navigation ---------- */
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.nav-tab'));
  var panels = Array.prototype.slice.call(document.querySelectorAll('.tab-panel'));

  function activateTab(name) {
    tabs.forEach(function (t) {
      var isMatch = t.getAttribute('data-tab') === name;
      t.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    });
    panels.forEach(function (p) {
      p.classList.toggle('is-active', p.id === 'panel-' + name);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  tabs.forEach(function (t) {
    t.addEventListener('click', function () {
      activateTab(t.getAttribute('data-tab'));
    });
  });

  document.getElementById('logoHome').addEventListener('click', function () {
    activateTab('work');
  });

  /* Keyboard support: left/right arrows move between tabs */
  document.querySelector('nav[role="tablist"]').addEventListener('keydown', function (e) {
    var idx = tabs.findIndex(function (t) { return t.getAttribute('aria-selected') === 'true'; });
    if (e.key === 'ArrowRight') { idx = (idx + 1) % tabs.length; tabs[idx].focus(); activateTab(tabs[idx].getAttribute('data-tab')); }
    if (e.key === 'ArrowLeft') { idx = (idx - 1 + tabs.length) % tabs.length; tabs[idx].focus(); activateTab(tabs[idx].getAttribute('data-tab')); }
  });

  /* ---------- interactive bucket list (owner-only editing, no visible UI) ---------- */
  // There's no lock icon or button — editing is invisible to regular
  // visitors. The owner unlocks it by opening the page with a secret key
  // in the URL, e.g.:
  //   index.html?edit=aaron2026
  // Change OWNER_KEY below to your own secret. Bookmark the URL with your
  // key on your own device for quick access — anyone without that exact
  // link just sees a normal, read-only checklist.
  var OWNER_KEY = 'aaron2026';

  var bucketListEl = document.getElementById('bucketList');
  var bucketItems = Array.prototype.slice.call(document.querySelectorAll('.bucket-item'));
  var doneCountEl = document.getElementById('bucketDoneCount');
  var totalCountEl = document.getElementById('bucketTotalCount');
  var fillEl = document.getElementById('bucketProgressFill');
  var isEditing = false;

  function checkOwnerAccess() {
    try {
      var params = new URLSearchParams(window.location.search);
      if (params.get('edit') === OWNER_KEY) {
        isEditing = true;
        bucketListEl.classList.add('editing');
      }
    } catch (e) {
      /* URLSearchParams unsupported — fails safe as read-only */
    }
  }

  function updateBucketProgress() {
    var total = bucketItems.length;
    var done = bucketItems.filter(function (i) { return i.classList.contains('done'); }).length;
    totalCountEl.textContent = total;
    doneCountEl.textContent = done;
    fillEl.style.width = (total ? (done / total) * 100 : 0) + '%';
  }

  bucketItems.forEach(function (item) {
    item.addEventListener('click', function () {
      if (!isEditing) return; // read-only unless the owner key was in the URL
      item.classList.toggle('done');
      updateBucketProgress();
    });
  });

  checkOwnerAccess();
  updateBucketProgress();
})();
