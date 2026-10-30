// Storage may be blocked, especially when opening index.html directly.
const themeButton = document.querySelector('.theme-toggle');
let savedTheme;
try {
  savedTheme = localStorage.getItem('portfolio-theme');
} catch {
  savedTheme = null;
}
const systemDark = window.matchMedia('(prefers-color-scheme: dark)');

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeButton.setAttribute('aria-pressed', String(theme === 'dark'));
}

setTheme(savedTheme === 'light' || savedTheme === 'dark'
  ? savedTheme
  : (systemDark.matches ? 'dark' : 'light'));
themeButton.hidden = false;
themeButton.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(theme);
  try {
    localStorage.setItem('portfolio-theme', theme);
  } catch {
    // The toggle still works for this page when storage is unavailable.
  }
});

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const mobileScreen = window.matchMedia('(max-width: 680px)');

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.hidden = mobileScreen.matches;
}

function updateNavigation() {
  menuButton.hidden = !mobileScreen.matches;
  closeMenu();
}

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.hidden = isOpen;
});
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a') && mobileScreen.matches) {
    // Return focus to a visible control before collapsing the navigation.
    menuButton.focus();
    closeMenu();
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mobileScreen.matches && !navigation.hidden) {
    menuButton.focus();
    closeMenu();
  }
});
mobileScreen.addEventListener('change', updateNavigation);
updateNavigation();

