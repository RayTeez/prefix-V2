
const projects=[
    
    [ //Branding 
        {
            projectName:'Ceres',
            projectCatergory:'Branding',
            images:['img1','img2','img3']
        },
        {
            projectName:'Kiwi',
            projectCatergory:'Branding',
            images:['img1','img2','img3']
        },
        {
            projectName:'Bolobedu',
            projectCatergory:'Branding',
            images:['img1','img2','img3']
        },
        {
            projectName:'Slices',
            projectCatergory:'Branding',
            images:['img1','img2','img3']
        },
        {
            projectName:'Vision Africa',
            projectCatergory:'Branding',
            images:['img1','img2','img3']
        },
        {
            projectName:'pRefix-re',
            projectCatergory:'Branding',
            images:['img1','img2','img3']
        }
    ],[ //logo Designs
        {
            projectName:'Phomolong Market',
            projectCatergory:'Logo',
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
const projecThree = document.querySelector('.project-one');
const projectFour = document.querySelector('.project-one');
const projectFive = document.querySelector('.project-one');

let getProject = null;

projectOne.addEventListener('click',)

let newlink = function(){
    var projNumber= 'test'  /*projectOne.getElementById('id').textContent*/;
    var queryString = "?para1=" + projNumber;
    return  'OtherProject.html'+ queryString;
}

//maybe have an if statment here

let getproject = newlink().split("=");

console.log(getproject[1]);


let showProject=projects[getproject[1]][1].projectName;

console.log(showProject);