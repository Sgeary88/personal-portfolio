let tabLinks = document.getElementsByClassName('tab-links');
let tabContents = document.getElementsByClassName('tab-contents');
let sideMenu = document.getElementById('side-menu');

function openTab(tabName) {
    for(tablink of tabLinks) {
        tablink.classList.remove('active-link');
    }
    for(tabcontent of tabContents) {
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabName).classList.add('active-tab');
}

function openMenu() {
    sideMenu.style.right = '0';
}

function closeMenu() {
    sideMenu.style.right = '-200px';
}