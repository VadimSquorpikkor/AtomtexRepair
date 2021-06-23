const theme_switcher = document.getElementById('theme_switcher');
theme_switcher.addEventListener('click', function () {
    toggleTheme();
});

loadTheme();

// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark'){
        setTheme('theme-blue');
        theme_switcher.src="theme_switcher.png";
    } /*else if (localStorage.getItem('theme') === 'theme-light') {
        setTheme('theme-blue');
        theme_switcher.src="theme_switcher.png";
    }*/ else {
        setTheme('theme-dark');
        theme_switcher.src="theme_switcher_light.png";
    }
}// Immediately invoked function to set the theme on initial load
function loadTheme() {
    if (localStorage.getItem('theme') === 'theme-blue') {
        setTheme('theme-blue');
        theme_switcher.src = "theme_switcher.png";
    } /*else if (localStorage.getItem('theme') === 'theme-light') {
        setTheme('theme-light');
    }*/ else {
        setTheme('theme-dark');
        theme_switcher.src = "theme_switcher_light.png";
    }
}
