tl=gsap.timeline({defaults:{duration: 0.6, ease: "expo.inOut"}})
    tl.to('.ht_2',{left:'0'})
    .to('.ht_3',{left:'0'},0)
    .to('.ht_4',{left:'0'},0); 
tl.pause();    

(function () {

    const link = document.querySelectorAll('.hoverthis');
    const cursor = document.querySelector('.cursor');

    const animateit = function (e) {
          const info=document.querySelector('.c-info');  
          const next=document.querySelector('.c-next');  

          const span = this.querySelector('.hoverthis span');
          const { offsetX: x, offsetY: y } = e,
          { offsetWidth: width, offsetHeight: height } = this,

          move = 15,
          xMove = x / width * (move * 2) - move,
          yMove = y / height * (move * 2) - move;
        
          span.style.transform = `translate(${xMove}px, ${yMove}px)`;

          cursorHoveredOn=e.target.getAttribute("data-option");

        if(cursorHoveredOn=='selected'){
            cursor.classList.add('selected');
        } 
        else if(cursorHoveredOn=='info'){
            gsap.to(cursor,{height:'160', width:'160',duration:.4 })
            tl.play();
            // cursor.classList.add('info')
            info.style.display='block';

        }
        else if(cursorHoveredOn=='next'){
            
            next.style.display='block';
            gsap.to(cursor,{height:'160', width:'160',duration:.4 })
        }

        if (e.type === 'mouseleave') {
            span.style.transform = '';
            cursor.classList.remove('selected');
            cursor.classList.remove('info');
            cursor.classList.remove('next');
            gsap.to(cursor,{height:'20', width:'20',duration:.4 })
            info.style.display='none';
            next.style.display='none';
            tl.reverse();

        }
    };

    const editCursor = e => {
          const { clientX: x, clientY: y } = e;
          cursor.style.left = x + 'px';
          cursor.style.top = y + 'px';
     
    };

    link.forEach(b => b.addEventListener('mousemove', animateit));
    link.forEach(b => b.addEventListener('mouseleave', animateit));
    window.addEventListener('mousemove', editCursor);

})();