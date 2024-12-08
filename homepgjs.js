window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("header").style.fontSize = "15px";    
      document.getElementById("logao").style.width = "50px";
      document.getElementById("logao").style.height = "50px"; 
      document.getElementById("button1").style.fontSize = "15px";
      document.getElementById("button2").style.fontSize = "15px";
      
    } else {
      document.getElementById("header").style.fontSize = "25px";
      document.getElementById("logao").style.width = "50px";
      document.getElementById("logao").style.height = "50px";
      document.getElementById("button1").style.fontSize = "25px";
      document.getElementById("button2").style.fontSize = "25px";
    }
  }
  
  window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.container');
    
    elements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('visible');
        }
    });
  });
  
  const formContainer = document.querySelector('.main');
  
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              
              formContainer.classList.add('fixed-bottom');
          } else {
  
              formContainer.classList.remove('fixed-bottom');
          }
      });
  }, {
      threshold: 0.1
  });
  
  observer.observe(formContainer);

var menuBtn = document.querySelector('.menu-btn');
var nav = document.querySelector('nav');
var lineOne = document.querySelector('nav .menu-btn .line--1');
var lineTwo = document.querySelector('nav .menu-btn .line--2');
var lineThree = document.querySelector('nav .menu-btn .line--3');
var link = document.querySelector('nav .nav-links');
menuBtn.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    lineOne.classList.toggle('line-cross');
    lineTwo.classList.toggle('line-fade-out');
    lineThree.classList.toggle('line-cross');
    link.classList.toggle('fade-in');
})

function toggleChat() {
  const chatWindow = document.querySelector('.chat-window');
  chatWindow.classList.toggle('active');
}

