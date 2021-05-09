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
    localStorage.setItem('theme', Theme.LIGHT);
    break;
  case Theme.DARK:
    themePage.classList = Theme.DARK;
    checkBoxSwitcher.checked = true;
    break;
  case Theme.LIGHT:
    themePage.classList = Theme.LIGHT;
    checkBoxSwitcher.checked = false;
}

checkBoxSwitcher.addEventListener('change', switchTheme);

function switchTheme(event) {
  if (event.target.checked) {
    themePage.classList = Theme.DARK;
  } else {
    themePage.classList = Theme.LIGHT;
  }
  localStorage.setItem('theme', themePage.classList.value);
  checkBoxSwitcher.removeEventListener;
}
