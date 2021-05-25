
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

function pageOut(){
  gsap.to('ul.transition li', { duration: .5, scaleY: 1, transformOrigin: 'bottom left', stagger: .1, delay: .2})
}

// ---->> home intro --

function contentAnimation() {

  var tl = gsap.timeline();
  const nav = document.querySelector('nav');

  tl

    
    .to(nav, { duration: 0.3, y: 0 }, '=-1')
    .from('.Hero',{alpha:0, y:60, duration: .5})

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

if (window.document.title == 'Cure' || window.document.title == 'Sony' || window.document.title == 'Bolobedu' || window.document.title == 'Open App' || window.document.title == 'Htir' || window.document.title == 'Other Projects') {
scrollHero();
}
//---->> next project hover ---

const viewNextProject = document.querySelectorAll(".strap p");
const viewNext = document.querySelector(".strap");
const upTextInStrap = document.querySelector(".s-1");

if (window.document.title == 'Cure' || window.document.title == 'Sony' || window.document.title == 'Bolobedu' ||  window.document.title == 'Htir' || window.document.title == 'Open App' || window.document.title == 'Other Projects') {
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

//  const Wordthree = document.getElementsByClassName("wordThree");
//  for (var i = 0; i < Wordthree.length; i++) {
 
//  const wordWrap = Wordthree.item(i);
//  wordWrap.innerHTML = wordWrap.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="Wordthree">$2</span>');
 
//  }
 
 
//  const Letterthree = document.getElementsByClassName("Wordthree");
//  for (var i = 0; i < Letterthree.length; i++) {
 
//     const letterWrap = Letterthree.item(i);
//     letterWrap.innerHTML = letterWrap.textContent.replace(/\S/g, "<span class='letterthree'>$&</span>");
 
//  }
 
//  let nextOther =
//  gsap.from('.letterthree',{
 
//    y: '120%', 
//    ease: "expo.out",
//    duration: 1,
//    opacity:0,
//    // rotation: 170, 
//    stagger: 0.05,
//    delay:0.02
//  }); 
 
//  nextOther.pause()
        let nextW=
        gsap.from('.wordThree',{
 
          y: '100', 
          ease: "expo.out",
          duration: 1,
          opacity:0,
          // rotation: 170, 
          stagger: 0.05,
          delay:0.02
        })

        nextW.pause();


let nextName = 1;

if (window.document.title == 'Other Projects') {
  this.addEventListener("scroll", function () {

    if (this.scrollY + this.innerHeight >= document.querySelector('body').offsetHeight - 260) {
      document.querySelector(".t-heading").textContent = otherproject[getProjectName() + nextName];

      nextW.restart()
      
      
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

    setTimeout(function () {
      wordtl.play();
    }, 1000)
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

function isMobile() {
  var check = false;
  (function(a){
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) 
      check = true;
  })(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};



window.addEventListener("resize", ()=>{

  console.log(isMobile());
  if(isMobile()== false)
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
        if (window.document.title == 'Cure' || window.document.title == 'Sony' || window.document.title == 'Bolobedu' || window.document.title == 'Htir' || window.document.title == 'Open App') {
          toTopButton.addEventListener('click', backToTop);
        }
      },
    },
    rotation: 180,
    ease: "back.out(1.7)",
    duration: 1,
  }
);

/**
 * Text fade otherProjects
 */


if (window.document.title == 'Other Projects') {
  gsap.to(".t-heading",
    {
      scrollTrigger: {
        trigger: ".box1",
        markers: false,
        toggleActions: "play reverse play reverse",
        start: "top center",
        endTrigger: ".box4",
        end: "bottom center",
        
      },
      alpha:0.2,
      ease: "power1.in",
      duration: .2,

    }
  );
}
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
  coll[i].addEventListener("click", function (event) {
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
    event.stopPropagation()
  }, false);
};

/**
 * svgs
 */
// ----------------------------

const lcCircle = document.querySelector('.lc-circle');

if (window.document.title == 'About' || window.document.title == '🙃Thomas Mosito') {

  const editCursor = e => {
    const { clientX: x, clientY: y } = e;
    // lcCircle.setAttribute('x', ((x / window.innerWidth) * 100) - 50);
    lcCircle.style.transform=`rotate(${((x / window.innerWidth) * 100) - 50}deg)`
    lcCircle.style.transformOrigin = "50% 50%";
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

const links = document.querySelectorAll('a')

links.forEach(link => {
  link.addEventListener('click', (function(e) {
    ;
    e.preventDefault();
    console.log(this.href)
    pageOut()
    setTimeout(function(url) {
        window.location = url
    }, 2000, this.href);
  })
)})

document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("load", function() {
    pageTransition()

  } );
});

/**
 * word Staggerer
 */

// Find all text with .tricks class and break each letter into a span
const Word = document.getElementsByClassName("word");
for (var i = 0; i < Word.length; i++) {

const wordWrap = Word.item(i);
wordWrap.innerHTML = wordWrap.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="Word">$2</span>');

}


const Letter = document.getElementsByClassName("Word");
for (var i = 0; i < Letter.length; i++) {

   const letterWrap = Letter.item(i);
   letterWrap.innerHTML = letterWrap.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

}


let wordtl = 

 gsap.from('.letter',{

  y: '120%', 
  ease: "expo.out",
  duration: 1,
  opacity:0,
  // rotation: 170, 
  stagger: 0.05,
  delay:0.02
}); 



wordtl.pause()


const Wordtwo = document.getElementsByClassName("wordTwo");
for (var i = 0; i < Wordtwo.length; i++) {

const wordWrap = Wordtwo.item(i);
wordWrap.innerHTML = wordWrap.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="Wordtwo">$2</span>');

}


const Lettertwo = document.getElementsByClassName("Wordtwo");
for (var i = 0; i < Lettertwo.length; i++) {

   const letterWrap = Lettertwo.item(i);
   letterWrap.innerHTML = letterWrap.textContent.replace(/\S/g, "<span class='lettertwo'>$&</span>");

}

gsap.from('.lettertwo',{

  scrollTrigger:{
    trigger: ".collapsible",
    toggleActions: "restart stop restart pause ",
    
},
  y: '120%', 
  ease: "expo.out",
  duration: 1,
  opacity:0,
  // rotation: 170, 
  stagger: 0.05,
  delay:0.02
}); 




/**
 * Dark Mode -----------
 */

 const checkbox = document.querySelector('[type="checkbox"]');
const gradBg = document.querySelector('.gradient-section')



 const bWord = document.getElementsByClassName("bword");
 const aWord = document.getElementsByClassName("aword");
 const cont = document.querySelector(".stagger");



 // var bob = document.getElementsByClassName("bword")[0].innerHTML;
 // var ann = document.getElementsByClassName("aword")[0].innerHTML;
 
 const turnToSpan =()=>{
     for (var i = 0; i < bWord.length; i++) {
 
     const wordWrap = bWord.item(i);
     wordWrap.innerHTML = wordWrap.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, `$1<span class="bWord">$2</span>` );
 
     }
 
 
     const bLetter = document.getElementsByClassName("bWord");
     for (var i = 0; i < bLetter.length; i++) {
 
     const letterWrap = bLetter.item(i);
     letterWrap.innerHTML = letterWrap.textContent.replace(/\S/g, "<span class='bletter'>$&</span>");
 
     }
 
 
     ///--------
 
 
     //const cont = document.querySelector(".dark-light_container")
     for (var i = 0; i < aWord.length; i++) {
 
     const wordWrap = aWord.item(i);
     wordWrap.innerHTML = wordWrap.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="aWord">$2</span>');
 
     }
 
 
     const aLetter = document.getElementsByClassName("aWord");
     for (var i = 0; i < aLetter.length; i++) {
 
     const letterWrap = aLetter.item(i);
     letterWrap.innerHTML = letterWrap.textContent.replace(/\S/g, "<span class='aletter'>$&</span>");
 
     }
 
 }
 
 turnToSpan();
 
 
 
 
 
 /**
 *Animation
 **/
 
 function runthis(){
 
 let bwordtl = gsap.timeline();
 
  bwordtl
    .to('.bletter',{
     y: '-140%', 
     ease: "power1.inOut.inOut",
     /* ease: "expo.out", */
     duration: 0.4,
 
     stagger: 0.05,
     delay:0.02
   })
 
 
 let awordtl = gsap.timeline();
 
  awordtl
  .to('.aletter',{
   y: '-140%', 
   ease: "power1.inOut.inOut",
   /* ease: "expo.out", */
   duration: 0.4,
 
  
   stagger: 0.05,
   delay:0.03
 }); 
 
 
 bwordtl.pause();
 awordtl.pause();
 
if ( window.document.title == '🙃Thomas Mosito') {
  
 
   cont.addEventListener("mouseover", function( event ) {
 
     bwordtl.play();
     awordtl.play();
 
 
     },false);
  
   
   
 cont.addEventListener("mouseout", function( event ) {
   bwordtl.reverse();
   awordtl.reverse();
   },false); 

  }
 
}
 runthis();
 
   
  //----========------//
  
  
  
  const toggleSwitch = document.querySelector('.container_toggle');
 
 const body = document.querySelector('body');
 /* const para = document.querySelectorAll('p'); */
 
 const currentTheme = localStorage.getItem("theme");
 
 // If the current local storage item can be found
 if (currentTheme) {
   // Set the body data-theme attribute to match the local storage item
   body.setAttribute("data-theme", currentTheme);
 
   // If the current theme is dark, check the theme toggle
   if (currentTheme === "dark") {
     checkbox.checked = true;
   }
   
   
 }
 
 // Function that will switch the theme based on the if the theme toggle is checked or not
 function switchTheme(e) {
 
     var bob;
     var ann;
 
 
     if( checkbox.checked == false){
     bob  = 'Light';
     ann  = 'Dark'
 
 
     }
 
     else if( checkbox.checked == true){
     bob =  'Dark';
     ann = 'Light'
 
         
     } 
     
     if (e.target.checked) {
       body.setAttribute("data-theme", "dark");
       
 
         
         console.log( bob)
         document.getElementsByClassName("bword")[0].innerHTML = bob;
         document.getElementsByClassName("aword")[0].innerHTML = ann;
         gradBg.style.opacity= '0'
         turnToSpan();
         runthis();
         
       // Set the user's theme preference to dark
       localStorage.setItem("theme", "dark");
     } else {
       body.setAttribute("data-theme", "light");
       
 
         console.log( bob)
         document.getElementsByClassName("bword")[0].innerHTML = bob;
         document.getElementsByClassName("aword")[0].innerHTML = ann;
         gradBg.style.opacity= '1'
         turnToSpan();
         runthis();
 
       // Set the user's theme preference to light
       localStorage.setItem("theme", "light");
     }
   }
   // Add an event listener to the theme toggle, which will switch the theme
   checkbox.addEventListener("change", switchTheme, false); 


