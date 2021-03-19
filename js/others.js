
const projects=[
    
    [ //Branding 
        {
            projectName:'Ceres',
            projectCatergory:'Branding',
            images:['img/otherprojects/branding-ceres01.webp','img/otherprojects/branding-ceres02.webp','img/otherprojects/branding-ceres03.webp','img/otherprojects/branding-ceres04.webp','img/otherprojects/branding-ceres06.webp','img/otherprojects/branding-ceres07.webp']
        },
        {
            projectName:'Bolobedu',
            projectCatergory:'Branding',
            images:['img/otherprojects/branding-bli01.webp','img/otherprojects/branding-bli01.webp','img/otherprojects/branding-bli03.webp','img/otherprojects/branding-bli04.webp','img/otherprojects/branding-bli05.webp','img/otherprojects/branding-bli06.webp','img/otherprojects/branding-bli07.webp']
        },
        {
            projectName:'Slices',
            projectCatergory:'Branding',
            images:['img/otherprojects/branding-slices01.webp','img/otherprojects/branding-slices02.webp','img/otherprojects/branding-slices03.webp','img/otherprojects/branding-slices04.webp','img/otherprojects/branding-slices05.webp']
        },
        {
            projectName:'Vision Africa',
            projectCatergory:'Branding',
            images:['img/otherprojects/branding-vision01.webp','img/otherprojects/branding-vision02.webp','img/otherprojects/branding-vision04.webp','img/otherprojects/branding-vision05.webp','img/otherprojects/branding-vision06.webp','img/otherprojects/branding-vision07.webp']
        },

    ],[ //Logo Design
        {
            projectName:'Phomolong Market',
            projectCatergory:'Logo Design',
            images:['img/otherprojects/Logos-phomolong01.webp','img/otherprojects/Logos-phomolong02.webp','img/otherprojects/Logos-phomolong03.webp','img/otherprojects/Logos-phomolong04.webp']
        },
        {
            projectName:'Kiwi',
            projectCatergory:'Logo Design',
            images:['img/otherprojects/Logos-kiwi01.webp','img/otherprojects/Logos-kiwi02.webp','img/otherprojects/Logos-kiwi03.webp','img/otherprojects/Logos-kiwi04.webp']
        },
        {
            projectName:'Rose Gold',
            projectCatergory:'Logo Design',
            images:['img/otherprojects/Logos-rosegold01.webp','img/otherprojects/Logos-rosegold02.webp','img/otherprojects/Logos-rosegold03.webp','img/otherprojects/Logos-rosegold04.webp']
        },
        {
            projectName:'Consco',
            projectCatergory:'Logo Design',
            images:['img/otherprojects/Logos-consco01.webp','img/otherprojects/Logos-consco02.webp','img/otherprojects/Logos-consco03.webp','img/otherprojects/Logos-consco04.webp']
        }
    ],[ //3D Designs
        {
            projectName:'Jeep',
            projectCatergory:'3D Design',
            images:['img/otherprojects/3d-Jeep01.webp','img/otherprojects/3d-Jeep02.webp','img/otherprojects/3d-Jeep03.webp','img/otherprojects/3d-Jeep04.webp']
        },
        {
            projectName:'27 Vision Trailer',
            projectCatergory:'3D Design',
            images:['img/otherprojects/3d-vt01.webp','img/otherprojects/3d-vt02.webp','img/otherprojects/3d-vt03.webp','img/otherprojects/3d-vt04.webp','img/otherprojects/3d-vt05.webp']
        },
        {
            projectName:'Cyber Mosotho',
            projectCatergory:'3D Design',
            images:['img/otherprojects/3d-cyberMosotho01.webp','img/otherprojects/3d-cyberMosotho02.webp','img/otherprojects/3d-cyberMosotho03.webp','img/otherprojects/3d-cyberMosotho04.webp','img/otherprojects/3d-cyberMosotho05.webp']
        },
        {
            projectName:'Phomolong Market',
            projectCatergory:'3D Design',
            images:['img/otherprojects/3d-phomolong01.webp','img/otherprojects/3d-phomolong02.webp','img/otherprojects/3d-phomolong03.webp','img/otherprojects/3d-phomolong04.webp','img/otherprojects/3d-phomolong05.webp']
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
        window.location.href = 'otherproject.html' + queryString;
        return  'otherproject.html'+ queryString;
    }


 
    let getproject = newlink().split("=");

    console.log(getproject[1]);
     
    let putProject=projects[getproject[1]][0].projectName
    
    
    console.log(putProject);
    
}

if(window.location.pathname.includes("otherproject")){
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
            <div class="case-fulls">
            
                <img src=${firstData.images[0]} alt="image goes here">

                <button class="project_btn bob">

                    <div class="button-wrapper">
                            
                        <p class="project-name">${firstData.projectName}</p>
                    </div>

                </button>

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
        // document.querySelector('.lb-project-box').scrollTop =0; //not working
        

        }
    });

}

