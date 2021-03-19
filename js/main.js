
const toTop = () => {

  var body = document.body; // For Safari
  var html = document.documentElement; // Chrome, Firefox, IE and Opera places the overflow at the html level, unless else is specified. Therefore, we use the documentElement property for these browsers

  body.scrollTop = 0;
  html.scrollTop = 0;
}

// ---->> page enter --

function pageTransition() {


  var tl = gsap.timeline();

  tl.set('ul.transition li', {scaleY: 1})
  tl.to('ul.transition li', { duration: .5, scaleY: 0, transformOrigin: 'top left', stagger: .1, delay: .7 })

};

// ---->> home intro --

function contentAnimation() {

  var tl = gsap.timeline();
  const nav = document.querySelector('nav');

  tl

    .from('.anim1', { duration: 1, y: 50, stagger: 0. })
    .to(nav, { duration: 0.3, y: 0 }, '=-1')

};

// --->> project stuff -- 


gsap.registerPlugin(ScrollTrigger);
const strap = document.querySelector(".strap");
let passed = false;


let x = gsap.to(strap, {
  scrollTrigger: {
    trigger: strap,
    toggleActions: 'restart restart play',
    markers: false,
    end: "bottom 87%",
    scrub: 2.5,
    onEnter: () => {
      document.querySelectorAll(".strap p")
        .forEach(para => {
          para.textContent = 'View Next'
        });

    },
    onLeave: () => {
      document.querySelectorAll(".strap p")
        .forEach(para => {
          para.textContent = 'View Next'
        });
    },

    onEnterBack: () => {
      document.querySelectorAll(".strap p")
        .forEach(para => {
          para.textContent = 'Or Not...'
        });


    },
    onLeaveBack: () => {
      document.querySelectorAll(".strap p")
        .forEach(para => {
          para.textContent = 'Hol Up'
        })

    },

  },
  x: -400,
  duration: 3,
  ease: "slow(0.7, 0.7, false)"
});

function scrollHero() {

  const heroImg = document.querySelector('.hero-image');
  const heroTitle = document.querySelectorAll('.hero-title');

  let tll = gsap.timeline({
    scrollTrigger: {
      trigger: heroImg,
      markers: false,
      start: "top 40%",
      scrub: 0.5,

    }
  });

  tll.to(heroImg, {
    duration: 5,
    height: "60%"
  });

  tll.to(heroTitle[0], {
    duration: 5,
    x: -1000
  }, '-=5');

  tll.to(heroTitle[1], {
    duration: 5,
    x: 1000
  }, '-=5');

  let tl = gsap.timeline({ delay: 0.5 });

  tl.to(heroImg, {
    // x: 100,
    scale: 0.9,
    ease: 'power4',
    duration: 3,
  });
}

//---->> next project hover ---

const viewNextProject = document.querySelectorAll(".strap p");
const viewNext = document.querySelector(".strap");
const upTextInStrap = document.querySelector(".s-1");

if (window.document.title == 'Cure' || window.document.title == 'Sony' || window.document.title == 'Bolobedu' || window.document.title == 'Open App' || window.document.title == 'Other Projects') {
  viewNext.addEventListener('mouseover', f);
  viewNext.addEventListener('mouseout', j);

  function j() {

    viewNextProject.forEach(para => {
      para.textContent = "view next";
    });

    upTextInStrap.style.transform = 'translateY(0%)';
  };

  function f() {
    const nextData = document.querySelector("body");

    viewNextProject.forEach(para => {
      para.textContent = nextData.getAttribute("data-name");

      if (nextData.getAttribute("data-name") == null) {
        para.textContent = "view next"
      }

    });
    upTextInStrap.style.transform = 'translateY(-50%)';
  }
}

//-------------------otherproject scoll next-----------------------

let otherproject = ['Branding', 'Logo Design', '3D Design']

let getProjectName = function () {
  return parseInt(window.location.href.split("=")[1]);
}

let nextName = 1;

if (window.document.title == 'Other Projects') {
  this.addEventListener("scroll", function () {

    if (this.scrollY + this.innerHeight >= document.querySelector('body').offsetHeight - 260) {
      document.querySelector(".t-heading").textContent = otherproject[getProjectName() + nextName];
    }
    else if (this.scrollY + this.innerHeight <= document.querySelector('body').offsetHeight - 260) {
      document.querySelector(".t-heading").textContent = otherproject[getProjectName()];
    }
  }, false);
}

window.onload = () => {

  toTop();
  pageTransition();

  setTimeout(function () {
    contentAnimation()
  }, 800)
};


// =========================================

// screens

function quaries() {
  if (screen.width < 960) {
    console.log('Less than 960');
  }
  else {
    console.log('More than 960');
  }
}

window.addEventListener("resize", ()=>{

  pageTransition();
});

//------->> arrow flip

const toTopButton = document.querySelector(".side-arrow");
const viewedContent = document.querySelector('.project-info');

gsap.to(".side-arrow",
  {
    scrollTrigger: {
      trigger: ".hero-image",
      toggleActions: " play none reverse reverse",
      start: " top center",
      end: "90% center",
      onEnter: () => {
        if (window.document.title == 'Cure' || window.document.title == 'Sony' || window.document.title == 'Bolobedu' || window.document.title == 'Open App') {
          toTopButton.addEventListener('click', backToTop);
        }
      },
    },
    rotation: 180,
    ease: "back.out(1.7)",
    duration: 1,

  });

  /**
   * press to top
   */

const logo = document.querySelector('.logo');

if (window.document.title == '🙃Thomas Mosito') {   

logo.addEventListener('click', backToTop);

  function backToTop() {
    pageTransition()
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  } 
}

function ToContent() {

  window.scrollTo(0, viewedContent.offsetTop);
  setTimeout(ToContent, 0);
}

//collapsilbe

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
};

/**
 * svgs
 */
// ----------------------------

const lcCircle = document.querySelector('.lc-circle');

if (window.document.title == 'About' || window.document.title == '🙃Thomas Mosito') {

  const editCursor = e => {
    const { clientX: x, clientY: y } = e;
    lcCircle.setAttribute('x', ((x / window.innerWidth) * 100) - 50);

  }

  window.addEventListener('mousemove', editCursor);
  gsap.to('svg', { rotation: 360, duration: 40, ease: "none", repeat: -1 })

  /**
   *contacts cont fix 
   */
  //------------------

  this.addEventListener("scroll", function () {

    if (this.scrollY + this.innerHeight >= document.querySelector('body').offsetHeight - 20) {
      document.querySelector(".contacts").style.overflow = "hidden";
    }
    else if (this.scrollY + this.innerHeight <= document.querySelector('body').offsetHeight - 20) {
      document.querySelector(".contacts").style.overflow = "visible";
    }
  }, false);
}

//************
//--------- next other project -----
//************

if (document.title == "Other Projects") {
  document.querySelector('.next-project').addEventListener('click',

  () => {
    if (window.location.href.split("=")[1] == '0') {
      window.location.href = window.location.origin + window.location.pathname + "?para1=1";
    }
    else if(window.location.href.split("=")[1] == '1') {
      window.location.href = window.location.origin + window.location.pathname + "?para1=2";
    }
    else if(window.location.href.split("=")[1] == '2') {
      window.location.href = window.location.origin + window.location.pathname + "?para1=0";
    }
  })

  document.querySelector('.op-next').addEventListener('click',

  () => {
    if (window.location.href.split("=")[1] == '0') {
      window.location.href = window.location.origin + window.location.pathname + "?para1=1";
    }
    else if(window.location.href.split("=")[1] == '1') {
      window.location.href = window.location.origin + window.location.pathname + "?para1=2";
    }
    else if(window.location.href.split("=")[1] == '2') {
      window.location.href = window.location.origin + window.location.pathname + "?para1=0";
    }
  })
};