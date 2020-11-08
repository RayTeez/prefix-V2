
function pageTransition(){

    var tl =gsap.timeline();

    tl.to('ul.transition li',{duration:.5, scaleY:1,transformOrigin:'buttom left', stagger: .2})
    tl.to('ul.transition li',{duration:.5, scaleY:0,transformOrigin:'top left', stagger: .1, delay:.1})

};

function contentAnimation(){


        var tl = gsap.timeline();
        var rule = CSSRulePlugin.getRule(".about-hero .about_content-hero div .blinds::after"); //get the rule
      
      
        tl.from('.anim1', {  duration:1, y:50,stagger:0.})
          .to(rule,{cssRule:{scaleY:0},duration:1})
          .to(rule, {duration: 2, cssRule: {scaleY:0}},'=-2');
           
};

const toTop= ()=>{

    var body = document.body; // For Safari
    var html = document.documentElement; // Chrome, Firefox, IE and Opera places the overflow at the html level, unless else is specified. Therefore, we use the documentElement property for these browsers

    body.scrollTop = 0;
    html.scrollTop = 0;
}

function delay(n){
    n=n|| 2000;
    return new Promise(done =>{
        setTimeout(()=>{
            done();   
        },n);
    });
};

barba.init({
    sync:true,

    transitions:[{

        async leave(data){
            const done = this.async();

            pageTransition();
            console.log("waaiiit!!!");
            await delay(1500);
            toTop();
            console.log("doneee!!!🥳");
            
            done();

        },

        async enter(data){
            contentAnimation();
        },

        async once(data){
            contentAnimation();
        }
    }]
});

