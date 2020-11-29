// const page = document.querySelector('.slider');
// let last_pane = page.querySelectorAll('li');
// last_pane = last_pane[last_pane.length-1];
// let dummy_x = null;
// let direction;

// window.onscroll = function(){
//     let y =document.body.getBoundingClientRect().top;
//     page.scrollLeft=-y; 
// }


// page.addEventListener('click', function(){
//     // direction = -1;
//     page.style.transform = 'translate(-20%)';
// });

// page.addEventListener('transitionend', function(){

// pan();

// });

// const pan= ()=>{
          
//     page.appendChild(page.firstElementChild);


//     page.style.transition = 'none';
//     page.style.transform = 'translate(80%)';
//     setTimeout(() => {
//       page.style.transition = 'all 0.5s';
//     })
// };

// const handleMarquee=()=> {
// const marquee = document.querySelectorAll('.carousal');
// let speed = 4;
// let lastScrollPos = 0;
// let timer;
// let progress = 1;
// // const elWidth = content.offsetWidth;

// marquee.forEach(function(el) {
//     const container = el.querySelector('.slider');
//     const content = el.querySelector('.slider > *');
//     //Get total width
//     const elWidth = content.offsetWidth;
//     //Duplicate content
//     let clone = content.cloneNode(true);
//     container.appendChild(clone);
    

//     loop(elWidth);
//   });

//   function loop(a) {
//     progress = progress - speed;
//     if(progress <= a * -1) {
//       progress = 0;
//     }
//     container.style.transform = 'translateX(' + progress + 'px)';
//     container.style.transform += 'skewX(' + speed * 0.4 + 'deg)';
//     window.requestAnimationFrame(loop);
//   }

//   window.addEventListener('scroll', function() {
//     const maxScrollValue = 12;
//     const newScrollPos = window.scrollY;
//     let scrollValue = newScrollPos - lastScrollPos;
//     if(scrollValue > maxScrollValue) scrollValue = maxScrollValue;
//     else if(scrollValue < -maxScrollValue) scrollValue = -maxScrollValue;
//     speed = scrollValue;
//     clearTimeout(timer);
//     timer = setTimeout(handleSpeedClear, 10);
//   });
//   function handleSpeedClear() {
//     speed = 4;
//   }
// }

// handleMarquee()

// function handleMarquee() {
//     const marquee = document.querySelectorAll('.carousal');
//     let speed = 4;
//     let lastScrollPos = 0;
//     let timer;
//     marquee.forEach(function(el) {
//       const container = el.querySelector('.slider');
//       const content = el.querySelector('.slider > *');
//       //Get total width
//       const elWidth = content.offsetWidth+40;
//       console.log(elWidth);
//       //Duplicate content
//       let clone = content.cloneNode(true);
//       container.appendChild(clone);
//       let progress = 1;
//       function loop() {
//         progress = progress - speed;
//         if(progress <= elWidth * -1) {
//           progress = 0;
//         console.log(progress <= elWidth * -1);
           
//         }
//         container.style.transform = 'translateX(' + progress + 'px)';
//         container.style.transform += 'skewX(' + speed * 0.4 + 'deg)';
//         window.requestAnimationFrame(loop);
//       }
//       loop();
//     });
//     window.addEventListener('scroll', function() {
//       const maxScrollValue = 12;
//       const newScrollPos = window.scrollY;
//       let scrollValue = newScrollPos - lastScrollPos;
//       if(scrollValue > maxScrollValue) scrollValue = maxScrollValue;
//       else if(scrollValue < -maxScrollValue) scrollValue = -maxScrollValue;
//       speed = scrollValue;
//       clearTimeout(timer);
//       timer = setTimeout(handleSpeedClear, 8);
//     });
//     this.addEventListener('mouseenter',function() {
//         speed=0;
//         console.log("speed"+speed);

//     });
//     function handleSpeedClear() {
//       speed = 4;
//     }
//   };


//   handleMarquee();

gsap.registerPlugin(ScrollTrigger);
const strap=document.querySelector(".strap");
let passed = false; 



let x =gsap.to(strap,{
  scrollTrigger:{
    trigger: strap,
    toggleActions:'restart restart play',
    markers:true,
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

// scrollTrigger.addEventListener("scrollStart", () => console.log("scrolling started!"));

let tl = gsap.timeline({delay: 1.5});
    
tl.to(heroImg, {
    // x: 100,
    scale: 0.9,
    ease: 'power4',
    duration: 3,
    
});


function initLoad(){

  var tl = gsap.timeline();
  var rule = CSSRulePlugin.getRule(".about-hero .about_content-hero div span::after"); //get the rule


  tl.from('.anim1', { opacity:0, duration:1, y:"50px"})
    .to(rule,{cssRule:{scaleY:0},duration:1},"-=3")
    .to(rule, {duration: 2, cssRule: {scaleY:0}},"-=4");
};

function heroImage(){
  var tl = gsap.timeline();

  tl.to('.hero-image',{ duration:5, height:"50px" })
}



window.onload = () => {
  // heroImage();
  // initLoad();
  // quaries();
};

//---- Hover Img -----

const hoverImg =document.querySelector(".movewithmouse");
const hoverCont =document.querySelector(".anim1 h2");

hoverCont.addEventListener("mousemove", function(e){
  if (window.innerWidth > 960) {
    console.log('More than 960');
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
  const speed = diff * 0.35;
  
  section.style.transform = "skewY(" + speed + "deg)"
  
  
  currentPixel = newPixel;
  
  requestAnimationFrame(looper)
}

looper();

