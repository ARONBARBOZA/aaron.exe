(function () {
  var root = document.documentElement;
  var toggle = document.getElementById('themeToggle');
  var sun = document.getElementById('iconSun');
  var moon = document.getElementById('iconMoon');

  function applyTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      sun.style.display = 'block';
      moon.style.display = 'none';
    } else {
      root.removeAttribute('data-theme');
      sun.style.display = 'none';
      moon.style.display = 'block';
    }
  }

  var stored = localStorage.getItem('theme');
  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  var initial = stored || (prefersDark ? 'dark' : 'light');
  applyTheme(initial);

  toggle.addEventListener('click', function () {
    var current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    var next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('theme', next);
  });
})();
