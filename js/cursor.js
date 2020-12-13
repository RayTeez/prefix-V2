(function () {

    const link = document.querySelectorAll('.hoverthis');
    const cursor = document.querySelector('.cursor');

    const animateit = function (e) {
          const span = this.querySelector('.hoverthis a span');
          const { offsetX: x, offsetY: y } = e,
          { offsetWidth: width, offsetHeight: height } = this,

          move = 15,
          xMove = x / width * (move * 2) - move,
          yMove = y / height * (move * 2) - move;

          span.style.transform = `translate(${xMove}px, ${yMove}px)`;

          if (e.type === 'mouseleave') span.style.transform = '';
          
    };

    const editCursor = e => {
          const { clientX: x, clientY: y } = e;
          cursor.style.left = x + 'px';
          cursor.style.top = y + 'px';
    };

    const grey=()=>{
        const span = document.querySelector('.hoverthis a span');
        span.style.color='grey';
    }


    const black=()=>{
        const span = this.querySelector('.hoverthis a span');
        span.style.color='intial';
    }

    link.forEach(b => b.addEventListener('mousemove', animateit));
    link.forEach(b => b.addEventListener('mouseleave', animateit));
    window.addEventListener('mousemove', editCursor);

})();