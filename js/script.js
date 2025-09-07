// Open popup
document.querySelectorAll(".popup-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    let popupId = btn.getAttribute("data-popup");
    document.getElementById(popupId).style.display = "block";
  });
});

// Close popup
document.querySelectorAll(".close").forEach(closeBtn => {
  closeBtn.addEventListener("click", () => {
    closeBtn.closest(".popup").style.display = "none";
  });
});

// Close popup when clicking outside
window.addEventListener("click", (event) => {
  document.querySelectorAll(".popup").forEach(popup => {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
});


(function(){
  const btn = document.getElementById('theme-btn');
  if (!btn) return; // safety

  const storageKey = 'site-theme'; // 'dark' or 'light'

  // Apply theme function
  function applyTheme(name) {
    if (name === 'dark') {
      document.body.classList.add('dark');
      btn.setAttribute('aria-pressed', 'true');
    } else {
      document.body.classList.remove('dark');
      btn.setAttribute('aria-pressed', 'false');
    }
  }

  // Initialize: prefer saved, else system preference
  const saved = localStorage.getItem(storageKey);
  if (saved === 'dark' || saved === 'light') {
    applyTheme(saved);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('dark');
  } else {
    applyTheme('light');
  }

  // Toggle on click
  btn.addEventListener('click', function () {
    const isDark = document.body.classList.toggle('dark');
    btn.setAttribute('aria-pressed', String(isDark));
    localStorage.setItem(storageKey, isDark ? 'dark' : 'light');
  });
})();
