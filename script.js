/* Smooth scrolling */
function scrollToIntro() {
  document.querySelector('#intro').scrollIntoView({ 
    behavior: 'smooth' 
  });
}

function scrollToAbout() {
  document.querySelector('#about').scrollIntoView({ 
    behavior: 'smooth' 
  });
}

function scrollToDo() {
  document.querySelector('#do').scrollIntoView({ 
    behavior: 'smooth' 
  });
}

function scrollToPortfolio() {
  document.querySelector('#portfolio').scrollIntoView({ 
    behavior: 'smooth' 
  });
}

function scrollToContact() {
  document.querySelector('#contact').scrollIntoView({ 
    behavior: 'smooth' 
  });
}

/* Sidebar Nav Animation */
var isInViewport = function(element) {
  var bounding = element.getBoundingClientRect();
  //console.log(bounding.top + " " + bounding.bottom + " " + (window.innerHeight * 1.5));
  return (
    Math.round(bounding.top) <= 0 &&
    bounding.bottom > 0
  );
}

var stylingOnViewport = function(tag, id) {
  if (isInViewport(tag)) {
      //console.log("SUCCESS?");
      var styleElem = document.head.appendChild(document.createElement("style"));
      styleElem.innerHTML = "#sidebar ul > li > #" + id + "Tab:before {width: 0;}";
    } else {
      var styleElem = document.head.appendChild(document.createElement("style"));
      styleElem.innerHTML = "#sidebar ul > li > #" + id + "Tab:before {width: 154px;}";
    }
}

var animateSidebarNav = function() {
  var intro = document.querySelector('#intro');
  var about = document.querySelector('#about');
  var do_ = document.querySelector('#do');
  var portfolio = document.querySelector('#portfolio');
  var contact = document.querySelector('#contact');
  stylingOnViewport(intro, 'intro');
  stylingOnViewport(about, 'about');
  stylingOnViewport(do_, 'do');
  stylingOnViewport(portfolio, 'portfolio');
  stylingOnViewport(contact, 'contact');
}

window.onload = function() {
  animateSidebarNav();
  window.addEventListener('scroll', function(event) {
    animateSidebarNav();
  })
}

/* Join Button Prompt */
var createJoinPromptCSS = function() {
  var styleOpened = document.head.appendChild(document.createElement("style"));
  styleOpened.innerHTML = "#joinPrompt { height: 300px; position: absolute; width: 300px;}";
  var styleClosed = document.head.appendChild(document.createElement("style"));
  styleClosed.innerHTML = "#joinPrompt {}"
}

var joinPrompt = function() {

}