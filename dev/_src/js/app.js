

console.log('App is Running!');


const app = new Vue({
    el: '#app',

    // This is class obj propertys  ( Example access: app.ratio )
    data: {
        ratio: 1.14,
        font_base: 16,
        font_size_names: [

            'base',
            'h6',
            'h5',
            'h4',
            'h3',
            'h2',
            'h1'
        ],

        fonts: [
            {
                "name": "base",
                "font_size": "16"
            },
            {
                "name": "h6",
                "font_size": "18"
            },
            {
                "name": "h5",
                "font_size": "20"
            },
            {
                "name": "h4",
                "font_size": "23"
            },
            {
                "name": "h3",
                "font_size": "27"
            },
            {
                "name": "h2",
                "font_size": "30"
            },
            {
                "name": "h1",
                "font_size": "35",
            }
        ],

        // ? This is class obj methods  ( Example access:  )
        computed: {
            // fontsItemFontSize() {

                
            //     // return

            //     for (let index = 0; index < fonts.length; index++) {
            //         // const element = fonts[index];

            //         fonts[index]['font_size'] = 

                    
            //     }
            // }
        }

        // This is methods
        methods: {
            fontsItemFontSize: function () {
                // this.message = this.message.split('').reverse().join('')

                for (let index = 0; index < fonts.length; index++) {
                    // const element = fonts[index];

                    fonts[index]['font_size'] = index * pasreInt(fonts[0]['font_size'])
                    
                }                

            }
        }



        // fonts: [
        //     "16" : {
        //         "name": "h1",
        //         "font_size": "16"
        //     },
        //     "18" : {
        //         "name": "h1",
        //         "font_size": "18"
        //     },
        //     "20" : {
        //         "name": "h1",
        //         "font_size": "20"
        //     },
        //     "23" : {
        //         "name": "h1",
        //         "font_size": "23"
        //     },
        //     "27" : {
        //         "name": "h1",
        //         "font_size": "27"
        //     },
        //     "30" : {
        //         "name": "h1",
        //         "font_size": "30"
        //     },
        //     "35" : {
        //         "name": "h1",
        //         "font_size": "35",
        //     }
        // ]
     


    }
});

// let ratio = 1.14;
// let font_base = 16;
// let font_size_names = [

//     'base',
//     'h6',
//     'h5',
//     'h4',
//     'h3',
//     'h2',
//     'h1'
// ];

// debugger;