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

//---------- Contact Submission Script--------------//
  const scriptURL = 'https://script.google.com/macros/s/AKfycbw49mYJ9bZc6DqPk_Un7p1n9gFPwWplceZVMAoFgSKiNtQjzhqll7ABID4xDVR2AWAI-Q/exec';
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
