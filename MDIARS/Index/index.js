const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const deleteButton = document.getElementById('deleteButton');
const container = document.querySelector('.container');

searchButton.addEventListener('click', performSearch);
searchInput.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    performSearch();
  }
});

function performSearch() {
  const query = searchInput.value.toLowerCase();
  const cssItems = container.getElementsByClassName('css');

  for (let i = 0; i < cssItems.length; i++) {
    const item = cssItems[i];
    const title = item.getElementsByTagName('h3')[0].textContent.toLowerCase();

    if (title.includes(query)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  }
}

deleteButton.addEventListener('click', function () {
  searchInput.value = '';
}
)

let y=0;
const button = document.getElementById('btn');
const upft = document.getElementById('upft');
  
    if (localStorage.getItem('username')===localStorage.getItem('hideButton')) {//1:upft
      y+=1;
      button.style.display = 'none';
    }

    if(y<0){
      upft.style.display = 'none';//0:btn
    }

const Logout = document.getElementById("Logout");
Logout.addEventListener("click", ()=>{//Logout: 1-(1)=0
  y==0;
}
)

const rememberMeCheckbox = document.getElementById('remember-me');

// Check if there is stored data in localStorage
if (localStorage.getItem('rememberMe') === 'true') {
  // Set the checkbox state to checked
  rememberMeCheckbox.checked = true;

  // If the checkbox was checked, fill in the login form fields
  if (localStorage.getItem('username')) {
    // Replace these lines with your code to fill in the login form fields
    document.getElementById('username').value = localStorage.getItem('username');
    document.getElementById('password').value = localStorage.getItem('password');
  }
}

// Add an event listener to the checkbox
rememberMeCheckbox.addEventListener('change', function(event) {
  // Store the checkbox state and form data in localStorage
  localStorage.setItem('rememberMe', event.target.checked);

  // Replace these lines with your code to retrieve the form data
  localStorage.setItem('username', document.getElementById('username').value);
  localStorage.setItem('password', document.getElementById('password').value);
});