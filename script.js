const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const navigation = document.getElementById('navbar')
const logo = document.getElementById('logo')

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 39) {
    document.getElementById("navbar").style.height = "50px";
    document.getElementById("logo").style.fontSize = "20px";
  } else {
    document.getElementById("navbar").style.height = "80px";
    document.getElementById("logo").style.fontSize = "30px";
  }
}

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

