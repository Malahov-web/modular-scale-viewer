

console.log('App is Running!');


// const _app = new Vue({
//     el: '#app',

//     // This is class obj propertys  ( Example access: app.ratio )
//     data: {
//         ratio: 1.14,
//         font_base: 16,
//         font_size_names: [

//             'base',
//             'h6',
//             'h5',
//             'h4',
//             'h3',
//             'h2',
//             'h1'
//         ],

//         fonts: [
//             {
//                 "name": "base",
//                 "font_size": "16"
//             },
//             {
//                 "name": "h6",
//                 "font_size": "18"
//             },
//             {
//                 "name": "h5",
//                 "font_size": "20"
//             },
//             {
//                 "name": "h4",
//                 "font_size": "23"
//             },
//             {
//                 "name": "h3",
//                 "font_size": "27"
//             },
//             {
//                 "name": "h2",
//                 "font_size": "30"
//             },
//             {
//                 "name": "h1",
//                 "font_size": "35",
//             }
//         ],

//         // ? This is class obj methods  ( Example access:  )
//         computed: {




            
//             // fontsItemFontSize() {

                
//             //     // return

//             //     for (let index = 0; index < fonts.length; index++) {
//             //         // const element = fonts[index];

//             //         fonts[index]['font_size'] = 

                    
//             //     }
//             // }
//         }

//         // This is methods
//         methods: {
//             fontsItemFontSize: function () {
//                 // this.message = this.message.split('').reverse().join('')

//                 for (let index = 0; index < fonts.length; index++) {
//                     // const element = fonts[index];

//                     fonts[index]['font_size'] = index * pasreInt(fonts[0]['font_size'])
                    
//                 }                

//             }
//         }



//         // fonts: [
//         //     "16" : {
//         //         "name": "h1",
//         //         "font_size": "16"
//         //     },
//         //     "18" : {
//         //         "name": "h1",
//         //         "font_size": "18"
//         //     },
//         //     "20" : {
//         //         "name": "h1",
//         //         "font_size": "20"
//         //     },
//         //     "23" : {
//         //         "name": "h1",
//         //         "font_size": "23"
//         //     },
//         //     "27" : {
//         //         "name": "h1",
//         //         "font_size": "27"
//         //     },
//         //     "30" : {
//         //         "name": "h1",
//         //         "font_size": "30"
//         //     },
//         //     "35" : {
//         //         "name": "h1",
//         //         "font_size": "35",
//         //     }
//         // ]
     


//     }
// });

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

        fonts: [],
    },

    created () {


        // Проверить тест

        for (let index = 0; index < this.font_size_names.length; index++) {
            // const element = array[index];
            // alert(); 
            
            console.log(' ' + this.font_size_names[index] );
            
        }


        this.setDefaultModualarScale();
        // this.setModualarScale();

        // // Вычислить шкалу шрифтов

        // // 0-й элемент 'base'
        // this.fonts.push( {} );
        // this.fonts[0]['name'] = this.font_size_names[0];
        // this.fonts[0]['font_size'] = this.font_base;

        // // все последующие
        // for (let i = 1; i < this.font_size_names.length; i++) {

        //     // Добавить name
        //     this.fonts.push( {} );
        //     this.fonts[i]['name'] = this.font_size_names[i];

        //     // Добавить font_size 
        //     this.fonts[i]['font_size'] = this.ratio * this.fonts[i-1]['font_size'];
        //     this.fonts[i]['font_size'] = this.fonts[i]['font_size'].toFixed(4);
        // }

    },

    // methods 
    methods: {

        setDefaultModualarScale: function () {
            // Вычислить шкалу шрифтов

            // 0-й элемент 'base'
            this.fonts.push( {} );
            this.fonts[0]['name'] = this.font_size_names[0];
            this.fonts[0]['font_size'] = this.font_base;

            // все последующие
            for (let i = 1; i < this.font_size_names.length; i++) {

                // Добавить name
                this.fonts.push( {} );
                this.fonts[i]['name'] = this.font_size_names[i];

                // Добавить font_size 
                this.fonts[i]['font_size'] = this.ratio * this.fonts[i-1]['font_size'];
                this.fonts[i]['font_size'] = this.fonts[i]['font_size'].toFixed(4);
            }   
        },

        setModualarScale: function () {
            // this.message = this.message.split('').reverse().join('')
// alert();

            // Вычислить шкалу шрифтов

            // 0-й элемент 'base'
            // this.fonts.push( {} );
            this.fonts[0]['name'] = this.font_size_names[0];
            this.fonts[0]['font_size'] = this.font_base;

            // все последующие
            for (let i = 1; i < this.font_size_names.length; i++) {

                // Добавить name
                // this.fonts.push( {} );
                this.fonts[i]['name'] = this.font_size_names[i];

                // Добавить font_size 
                this.fonts[i]['font_size'] = this.ratio * this.fonts[i-1]['font_size'];
                this.fonts[i]['font_size'] = this.fonts[i]['font_size'].toFixed(4);

                // debugger;
            }            
            
        }
    }    

});


// В чем проблема?
/* 

В обработчике события - директива v-on change - 
срабатывает не так как ожидалось.

Рендер происходит,
после СЛЕДУЮЩЕГО изменения значения,

Вероятно надо поставить на уход?

*/




//         fonts: [
//             {
//                 "name": "base",
//                 "font_size": "16"
//             },
//             {
//                 "name": "h6",
//                 "font_size": "18"
//             },
//             {
//                 "name": "h5",
//                 "font_size": "20"
//             },
//             {
//                 "name": "h4",
//                 "font_size": "23"
//             },
//             {
//                 "name": "h3",
//                 "font_size": "27"
//             },
//             {
//                 "name": "h2",
//                 "font_size": "30"
//             },
//             {
//                 "name": "h1",
//                 "font_size": "35",
//             }
//         ],