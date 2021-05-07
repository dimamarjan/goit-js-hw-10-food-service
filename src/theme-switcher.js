const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themePage = document.querySelector('body');
const checkBoxSwitcher = document.querySelector('#theme-switch-toggle');

const positionSwitch = localStorage.getItem('theme');

switch (positionSwitch) {
  case null:
    themePage.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', 'false');
    break;
  case 'true':
    themePage.classList = Theme.DARK;
    checkBoxSwitcher.checked = true;
}

checkBoxSwitcher.addEventListener('change', switchTheme);

function switchTheme(event) {
  if (event.target.checked) {
    themePage.classList = Theme.DARK;
  } else {
    themePage.classList = Theme.LIGHT;
  }
  localStorage.setItem('theme', event.target.checked);
  checkBoxSwitcher.removeEventListener;
}
