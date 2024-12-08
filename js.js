window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("header").style.fontSize = "15px";
      document.getElementById("button1").style.fontSize = "15px";
      document.getElementById("button2").style.fontSize = "15px";
      
    } else {
      document.getElementById("header", "button").style.fontSize = "25px";
      document.getElementById("button1").style.fontSize = "25px";
      document.getElementById("button2").style.fontSize = "25px";
    }
  }

  let bg = document.getElementById('bg')
  let image_row = document.getElementById('image_row')
  let bok = document.getElementById('bok')
  let ccl = document.getElementById('ccl')
  

  window.addEventListener('scroll', function(){
    var value = window.scrollY;

    bg.style.top = -value * 5 + 'px';
    image_row.style.right = value * 15 + 'px';
    bok.style.left = -value * 17 + 'px';
    ccl.style.left = -value * 15 + 'px';
   
  })

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function onScroll() {
    const line = document.getElementById("line");
    if (isElementInViewport(line)) {
      line.classList.add("line-extended");
      
      window.removeEventListener("scroll", onScroll);
    }
  }
  function onScroll() {
    const line = document.getElementById("line");
    const line2 = document.getElementById("line2");
    const text1 = document.getElementById("text1");
    const text2 = document.getElementById("text2");
    const se = document.getElementById("se");
    const para = document.getElementById("para");
    const text3 = document.getElementById("text3");
    const line3 = document.getElementById("line3");
    const line4 = document.getElementById("line4");
    const line5 = document.getElementById("line5");
    const line6 = document.getElementById("line6");
    const text4 = document.getElementById("text4");
    const text7 = document.getElementById("text7")
    const text5 = document.getElementById("text5")
    const text6 = document.getElementById("text6")
    const text8 = document.getElementById("text8")
    const text9 = document.getElementById("text9")
    const text10 = document.getElementById("text10")
    const text11 = document.getElementById("text11")
    const texts = document.getElementById("texts")
    const main = document.getElementById("main")
    let lineInView = false;
    let text1InView = false;
    let text2InView = false;
    let seInView = false;
    let paraInView = false;
    let text3InView = false;
    let line3InView = false
    let line4InView = false
    let line5InView = false
    let text4InView = false
    let line6InView = false
    let textsInView = false
    let text5InView = false
    let text6InView = false
    let text7InView = false
    let text8InView = false
    let text9InView = false
    let text10InView = false
    let text11InView = false
    let mainInView = false

  if (isElementInViewport(line)) {
      line.classList.add("line-extended");
      lineInView = true;
  }

  if (isElementInViewport(text4)) {
    text4.classList.add("text4-appear");
    text4InView = true;
  }
  
  if (isElementInViewport(line5)) {
    line5.classList.add("line5-extended");
    line5InView = true;
  }

  if (isElementInViewport(line6)) {
    line6.classList.add("line6-extended");
    line6InView = true;
  }

  if (isElementInViewport(line4)) {
    line4.classList.add("line4-extended");
    line4InView = true;
  }

  if (isElementInViewport(line3)) {
    line3.classList.add("line3-extended");
    line3InView = true;
  }

  if (isElementInViewport(line2)) {
      line2.classList.add("line2-extended");
      lineInView = true;
  }
  
 
    if (isElementInViewport(text1)) {
      text1.classList.add("text-appear");
      text1InView = true;

  }

  if (isElementInViewport(text2)) {
      text2.classList.add("text2-appear");
      text2InView = true;
  }

  if (isElementInViewport(se)) {
    se.classList.add("se-appear");
    seInView = true;
  }

  if (isElementInViewport(para)) {
    para.classList.add("para-appear");
    paraInView = true;
  }

  if (isElementInViewport(text3)) {
    text3.classList.add("text3-appear");
    text3InView = true;
  }

  if (isElementInViewport(text5)) {
    text5.classList.add("text5-appear");
    text5InView = true;
  }

  if (isElementInViewport(text6)) {
    text6.classList.add("text6-appear");
    text6InView = true;
  }

  if (isElementInViewport(text7)) {
    text7.classList.add("text7-appear");
    text7InView = true;
  }
  if (isElementInViewport(text8)) {
    text8.classList.add("text8-appear");
    text8InView = true;
  }
  if (isElementInViewport(text9)) {
    text9.classList.add("text9-appear");
    text9InView = true;
  }
  if (isElementInViewport(text10)) {
    text10.classList.add("text10-appear");
    text10InView = true;
  }
  if (isElementInViewport(text11)) {
    text11.classList.add("text11-appear");
    text11InView = true;
  }
  if (isElementInViewport(texts)) {
    texts.classList.add("texts-appear");
    textsInView = true;
  }
  
  if (line5InView && line4InView && line3InView && lineInView && text1InView && text2InView && seInView && 
      paraInView && text3InView && text4InView && 
      text5InView && text6InView && text7InView  && 
      text8InView  && text9InView  && text10InView  && text11InView && textsInView) {
      window.removeEventListener("scroll", onScroll);
    }
  }
  
window.addEventListener("scroll", onScroll);

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
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

const chatMessages = document.getElementById('chatMessages');
        const chatInput = document.getElementById('chatInput');


        function sendMessage() {
            const messageText = chatInput.value.trim();
            if (messageText !== "") {

                addMessage(messageText, 'user');


                setTimeout(() => {
                    addMessage('Hello! How can I assist you?', 'bot');
                }, 1000);
                

                chatInput.value = "";
            }
        }


        function addMessage(text, sender) {
            const message = document.createElement('div');
            message.classList.add('message', sender);
            message.textContent = text;
            chatMessages.appendChild(message);

            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });