var app =new Vue({
    el: '#app',
    data:{
        projects:[
            { //project01
                title: 'Bolobedu',
                year: '2019',
                tools: ["photoshop","illustrator"],
                projectImages: 
                    [
                        ['img/bolo/bli-logo-28.webp','img/bolo/print.webp','img/bolo/web.webp','img/bolo/menu.webp'],
                    ['img/bolo/bli-logo-28.png','img/bolo/print.png','img/bolo/web.png','img/bolo/menu.png']
                ]
                
                
            },
            { //project02
                title: 'Xperience Xperia',
                year: '2020',
                tools: ["photoshop","illustrator","xd"],
                projectImages: ['img/sony/sony-look_and_feeling.webp','img/sony/sony-wireframe.webp','img/sony/sony-web.webp'],
                
            },
            { //project03
                title: 'Cure',
                year: '2019',
                tools: ["photoshop","illustrator","xd"],
                projectImages: ['img/cure/cure-web.webp'],
                
            },
            { //project04
                title: 'OpenApp',
                year: '2019',
                tools: ["photoshop","illustrator","xd"],
                projectImages: ['img/openApp/openApp1.webp','img/openApp/openApp2.webp','img/openApp/openApp3.webp'],
                
            },
            { //project05
                title: 'Htir',
                year: '2020',
                tools: ["photoshop","illustrator","xd","webflow"],
                projectImages: ['img/htir/HTIR.webp'],
                
            },
        ],
    }    
})