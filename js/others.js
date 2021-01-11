
const projects=[
    
    [ //Branding 
        {
            projectName:'Ceres',
            projectCatergory:'Branding',
            images:['img/otherprojects/img1-1.jpg','img/otherprojects/img1-2.jpg','img/otherprojects/img1-3.jpg','img/otherprojects/img1-4.jpg','img/otherprojects/img1-5.jpg']
        },
        {
            projectName:'Kiwi',
            projectCatergory:'Branding',
            images:['img/otherprojects/img2-1.jpg','img/otherprojects/img2-2.jpg','img/otherprojects/img2-3.jpg','img/otherprojects/img2-4.jpg','img/otherprojects/img2-5.jpg']
        },
        {
            projectName:'Bolobedu',
            projectCatergory:'Branding',
            images:['img/otherprojects/img3.jpg','img2','img3']
        },
        {
            projectName:'Slices',
            projectCatergory:'Branding',
            images:['img/otherprojects/img4.jpg','img2','img3']
        },
        {
            projectName:'Vision Africa',
            projectCatergory:'Branding',
            images:['img/otherprojects/img5.jpg','img2','img3']
        },
        {
            projectName:'pRefix-re',
            projectCatergory:'Branding',
            images:['img/otherprojects/img6.jpg','img2','img3']
        }
    ],[ //Logo Design
        {
            projectName:'Phomolong Market',
            projectCatergory:'Logo Design',
            images:['img1','img2','img3']
        },
        {
            projectName:'Golden...',
            projectCatergory:'Branding',
            images:['img1','img2','img3']
        },
        {
            projectName:'Ali Cotchet',
            projectCatergory:'Branding',
            images:['img1','img2','img3']
        },
        {
            projectName:'Consco',
            projectCatergory:'Branding',
            images:['img1','img2','img3']
        }
    ],[ //3D Designs
        {
            projectName:'Jeep',
            projectCatergory:'3D Design',
            images:['img1','img2','img3']
        },
        {
            projectName:'27 Vision Trailer',
            projectCatergory:'Branding',
            images:['img1','img2','img3']
        },
        {
            projectName:'Cyber Mosotho',
            projectCatergory:'Branding',
            images:['img1','img2','img3']
        },
        {
            projectName:'Phomolong Market',
            projectCatergory:'Branding',
            images:['img1','img2','img3']
        }
    ],
    
];

const projectOne = document.querySelector('.project-one');
const projectTwo = document.querySelector('.project-two');
const projecThree = document.querySelector('.project-three');

let getProject = null;




// projectOne.addEventListener('click', showProject(this));

function showProject(e){
    let newlink = function(){
        var projNumber=  e.getAttribute('id'); //<<<--------what
        var queryString = "?para1=" + projNumber;
        window.location.href = 'OtherProject.html' + queryString;
        return  'OtherProject.html'+ queryString;
    }


 
    let getproject = newlink().split("=");

    console.log(getproject[1]);
     
    let putProject=projects[getproject[1]][0].projectName
    
    
    console.log(putProject);
    
}

if(window.location.pathname=='/OtherProject.html'){
    let getproject =window.location.search.split("=");
    let putProject=projects[getproject[1]][1].projectName;
    console.log(getproject[1]);
    console.log(putProject);

    const heading =document.querySelector('.t-heading');
    heading.textContent=projects[getproject[1]][0].projectCatergory;

const pressedImg =document.querySelector('.t-project');  





let test=()=>{
    console.log('im hereeee')

    for ( i = 0; i < projects[getproject[1]].length; i++) {

        let firstData = projects[getproject[1]][i]

        pressedImg.innerHTML+= 
        
        `<li class="box${i+1} proj" id="${i}"  onclick="showProjectCont(this.id)">
        <div>
        <button class="project_name">
            <div class="button-wrapper">
                    <span>${i+1}</span>
                        <p class="project-name">${firstData.projectName}</p>
            </div>
        </button>
        <img src=${firstData.images[0]} alt="image goes here">
        </div>
        </li>
        
        ` ;
        
    }

}

test()

const lightbox = document.querySelector('.lightbox');
const projectInBox = document.querySelector('.project-image');
let lbIsOn=false;
let scrollPosition = 0;




    function showOverlay() {
        scrollPosition = window.pageYOffset;
        const mainEl = document.querySelector('.t-project_cont');
        mainEl.style.top = -scrollPosition + 'px';
        document.body.classList.add('show-overlay');
    }

    function removeOverlay() {
            document.body.classList.remove('show-overlay');
        window.scrollTo(0, scrollPosition);
        const mainEl = document.querySelector('.t-project_cont');
        mainEl.style.top = 0;
    }

    function removeChildren(){
        projectInBox.innerHTML='';
    }



    function showProjectCont(clicked_id){
        
    

        // const listProjects = document.querySelectorAll('.proj');
        
        const lb_projectName = document.querySelector('.lb-p_name h1');
        const lb_CatergoryName = document.querySelector('.lb-p_catergory-name h2');
        

        let getProjectNum = clicked_id;

        console.log(getProjectNum);


            for (let j = 0; j < projects[getproject[1]][getProjectNum].images.length; j++) {

                console.log(projects[getproject[1]][getProjectNum].images[j]);

                let imageData = projects[getproject[1]][getProjectNum].images

                projectInBox.innerHTML+=

                `<figure class="image">
                    <img src=${imageData[j]} alt="project-image">
                </figure>`

            };
            
            lb_projectName.textContent= projects[getproject[1]][getProjectNum].projectName;
            lb_CatergoryName.textContent= projects[getproject[1]][getProjectNum].projectCatergory;
        
        lightbox.style.display="block";
        lbIsOn=true;
        showOverlay();


    }


    const close=document.querySelector('.close-button > img');

    close.addEventListener('click',e=>{

        var phase = e.eventPhase;
        showOverlay();

        if(lbIsOn==true){
            lightbox.style.display="none";
            lbIsOn=false;
            removeOverlay();
            removeChildren();

        }
        else{
            document.location.pathname= "/index.html"
           
            
            
    };
        console.log('close');
        console.log(phase);

    });

    window.addEventListener('click',event=>{
        
        if (event.target === lightbox.children[0]) {
        lightbox.style.display = "none";
        removeOverlay();
        removeChildren();
    

        }
    });

}

