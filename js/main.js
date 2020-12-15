//--->> to top --



const toTop= ()=>{

  var body = document.body; // For Safari
  var html = document.documentElement; // Chrome, Firefox, IE and Opera places the overflow at the html level, unless else is specified. Therefore, we use the documentElement property for these browsers

  body.scrollTop = 0;
  html.scrollTop = 0;
}

// ---->> scroll down --

// .........bruhhhh.........................


// ---->> page enter --

function pageTransition(){


  var tl =gsap.timeline();

  tl.set('ul.transition li',{duration:.5, scaleY:1,transformOrigin:'buttom left', stagger: .2})
  tl.to('ul.transition li',{duration:.5, scaleY:0,transformOrigin:'top left', stagger: .1, delay:.1})

};

// ---->> home intro --

function contentAnimation(){
 
  var tl = gsap.timeline();
  var rule = CSSRulePlugin.getRule(".about-hero .about_content-hero div .blinds::after"); //get the rule

  const nav = document.querySelector('nav');

  tl
    .from('.anim1', {  duration:1, y:50,stagger:0.})
    .to(rule,{cssRule:{scaleY:0},duration:1})
    .to(rule, {duration: 2, cssRule: {scaleY:0}},'=-2')
    .to(nav,{duration:0.3, y:0})
    .set('.scroll-wheel',{autoAlpha:0},0)
    .from('.scroll-wheel',{autoAlpha:0,duration:1 })
     
};


// --->> project stuff -- 


gsap.registerPlugin(ScrollTrigger);
const strap=document.querySelector(".strap");
let passed = false; 


let x =gsap.to(strap,{
  scrollTrigger:{
    trigger: strap,
    toggleActions:'restart restart play',
    markers:false,
    end:"bottom 87%",
    scrub:2.5,
    onEnter:() => {
      console.log('true')

      document.querySelectorAll(".strap p")
      .forEach(para => {
        para.textContent='View Next'
      });
      
    },
    onLeave:() => {
      document.querySelectorAll(".strap p")
      .forEach(para => {
        para.textContent='View Next'
      });
    },
    
    onEnterBack:() =>{
      document.querySelectorAll(".strap p")
      .forEach(para => {
        para.textContent='Or Not...'
      });
      

    },
    onLeaveBack:() =>{
      document.querySelectorAll(".strap p")
      .forEach(para => {
        para.textContent='Hol Up'
      })

    },
  
  },
  x:-400,
  duration:3,
  ease: "slow(0.7, 0.7, false)"


});

function scrollHero(){

const heroImg = document.querySelector('.hero-image');
const heroTitle = document.querySelectorAll('.hero-title');

let tll =gsap.timeline({
  scrollTrigger:{
    trigger: heroImg, 
    toggleActions:'restart restart play',
    markers:false,
    start: "top 40%",
    scrub:0.5,


    onEnter:() => {
      console.log('true')

      document.querySelectorAll(".strap p")
      .forEach(para => {
        para.textContent='View Next'
      });
    }
  }
});

tll.to(heroImg,{
  duration:5,
  height:"50px"
});


  tll.to(heroTitle[0],{
    duration:5,
    x:-1000
  },'-=5');


  tll.to(heroTitle[1],{
    duration:5,
    x:1000
  },'-=5');


let tl = gsap.timeline({delay: 1.5});
    
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

if(window.document.title=='Cure'||window.document.title=='Sony'||window.document.title=='Bolobedu'||window.document.title=='Open App'){
  viewNext.addEventListener('mouseover',f );
  viewNext.addEventListener('mouseout',j );

  function j() {
    
    viewNextProject.forEach(para => {
    para.textContent='View Next'
  })}

  function f() {
    const nextData = document.querySelector("body");

    viewNextTitle= document.querySelector('.strap').parentElement.href.split("/")[3].split(".")[0]
    
    viewNextProject.forEach(para => {

    para.textContent= nextData.getAttribute("data-name");
  })}
}



function showText(){
  var tl = gsap.timeline();

  tl.from('.hero-image',1,{height:0, duration:0.7, ease:'power1.out', onComplete: () => scrollHero()}),
  tl.to('.hero-title.top', {xPercent:0,duration:0.7, ease:'power2.out'}),
  tl.to('.hero-title.bottom', {xPercent:0,duration:0.7, ease:'power2.out'},'-=0.5'),
  tl.from('.side-arrow', {autoAlpha:0, yPercent:-10,duration:1.5, ease: Elastic.easeOut.config(1, 0.3)},'-=0.5')
  

}

if (window.innerHeight >= 960) {
  showText();
  console.log("it can move on scroll");
}
else{
  
  console.log("it cannot move on scroll bruh");
}


function heroImage(){
  var tl = gsap.timeline();

  tl.to('.hero-image',{ duration:5, height:"50px" })
}


window.onload = () => { 

toTop();
 
if (window.document.title == '🙃Thomas Mosito'){    // ------<< fix
  pageTransition(); 
  setTimeout(function () {
  contentAnimation()},2000)
 };
}



//---- Hover Img -----

const hoverImg =document.querySelector(".movewithmouse");
const hoverCont =document.querySelector(".anim1 h2");

if(window.document.title=='🙃Thomas Mosito'){  // ------<< fix

  hoverCont.addEventListener("mousemove", function(e){
    if (window.innerWidth > 960) {
      floatingImg(e);
      
    }
    e.stopPropagation();
  });


hoverCont.addEventListener("mouseleave",function(e){
reposition(e);
console.log(hoverImg.style.transform);
})

function showCoords(event) {
  var x = event.clientX;
  var y = event.clientY;

  // hoverImg.style.top=(y-500)+'px';
  hoverImg.style.transform="translate(" +(x-1200)+"px, "+(y-550)+"px)";
  console.log("innnn");
}

hoverCont.addEventListener('click', function(e){
  window.location.href="about.html";
})
}

function floatingImg(e){

  var xCoor = e.clientX;
  var yCoor = e.clientY;

  gsap.to(hoverImg, {x: xCoor-hoverCont.clientWidth, y:yCoor-hoverCont.clientHeight});
  console.log("innnn");

}

function reposition() {
  var reposition = document.getElementById("reposition");

  gsap.to(hoverImg, { x: reposition.offsetLeft, y:reposition.offsetTop-hoverCont.clientHeight});
  // hoverImg.style.transform="translate3D(" +reposition.offsetLeft+"px, "+reposition.offsetTop+"px)"
  
}

const cursor=document.getElementsByClassName("cursor");

gsap.to(cursor, {x: window.clientX, y: window.clientY});




// screens

function quaries(){
  if (screen.width < 960) {
    console.log('Less than 960');
  }
  else {
    console.log('More than 960');
  }
}

// ----->>skewing

const section = document.querySelector(".skewable");
let currentPixel = window.pageYOffset

//looper keeps running and keeps track of where the new pixel is
const looper = function () {
  const newPixel = window.pageYOffset;
  const diff = newPixel - currentPixel
  const speed = diff * 0.15;
  
  section.style.transform = "skewY(" + speed + "deg)"
  
  
  currentPixel = newPixel;
  
  requestAnimationFrame(looper)
}

  looper();



//------->> wheel spin

const wheel =document.querySelector('.scroll-wheel img');

gsap.to(wheel,


  {rotation: 360,
  duration: 10,
  ease: "none",
  repeat:-1

});

//------->> arrow flip

const toTopButton =document.querySelector(".side-arrow");
const viewedContent =document.querySelector('.project-info');

gsap.to(".side-arrow",
{
  scrollTrigger:{
    trigger: ".hero-image",
    toggleActions:" play none reverse reverse",
    start: " top center",
    end: "90% center",
    onEnter:()=>{
      if(window.document.title=='Cure'||window.document.title=='Sony'||window.document.title=='Bolobedu'||window.document.title=='Open App'){
      toTopButton.addEventListener('click', backToTop);
      }
    },
  },
  rotation: 180,
  ease: "back.out(1.7)",
  duration: 1,

});

// press to top 

const logo = document.querySelector('.logo');

// logo.addEventListener('click',backToTop);

function backToTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -80);
    setTimeout(backToTop, 0);
  }
}

function ToContent() {

    window.scrollTo(0, viewedContent.offsetTop);
    setTimeout(ToContent, 0);
  }


