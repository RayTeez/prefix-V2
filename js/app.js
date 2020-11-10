var app =new Vue({
    el: '#app',
    data:{
        projects:[
            { //project01
                title: 'Bolobedu',
                year: '2019',
                tools: ["photoshop","illustrator"],
                projectImages: ['img/bolo/bli-logo-28.png','img/bolo/print.png','img/bolo/web.png','img/bolo/menu.png'],
                
            },
            { //project02
                title: 'Xperience Xperia',
                year: '2020',
                tools: ["photoshop","illustrator","xd"],
                projectImages: ['img/sony/sony-look_and_feeling.png','img/sony/sony-wireframe.png','img/sony/sony-web.png'],
                
            },
            {
                title: 'Cure',
                year: '2019',
                tools: ["photoshop","illustrator","xd"],
                projectImages: ['img/cure/cure-web.png'],
                
            },
            {
                title: 'OpenApp',
                year: '2019',
                tools: ["photoshop","illustrator","xd"],
                projectImages: ['img/bolo/bli-logo-28.png','img/bolo/print.png','img/bolo/web.png','img/bolo/menu.png'],
                
            },
        ],
    }    
})