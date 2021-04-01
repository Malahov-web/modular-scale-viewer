

console.log('App is Running!');



Vue.component('scale', {


    template: `
                            <div class="product-details product__details mt-md">

 Scale Component Template
                            </div>
    `,    
} )
// Uncaught SyntaxError: Invalid shorthand property initializer


// Vue.component('scale', {

//     props: {
//         fontslocal : {
//             type : Array,
//             required: false            
//         }
//     },

//     data() {
//         return {
//             // fonts: [
//             //     {
//             //         "name": "base",
//             //         "font_size": "16"
//             //     },
//             //     {
//             //         "name": "h6",
//             //         "font_size": "18"
//             //     },
//             //     {
//             //         "name": "h5",
//             //         "font_size": "20"
//             //     },
//             //     {
//             //         "name": "h4",
//             //         "font_size": "23"
//             //     },
//             //     {
//             //         "name": "h3",
//             //         "font_size": "27"
//             //     },
//             //     {
//             //         "name": "h2",
//             //         "font_size": "30"
//             //     },
//             //     {
//             //         "name": "h1",
//             //         "font_size": "35",
//             //     }
//             // ]
//         }
//     },

//     template: `
//         <div class="scale__item" v-for="font in fontslocal" _v-bind:key="font.id">
            
//             <div class="scale__item-name-outer">
//                 <div class="scale__item-name">
//                     <input class="field-text" type="text" __v-bind:value="font.name" v-model="font.name">
//                 </div>
//             </div>
//             <div class="scale__item-value-outer">
//                 <div class="scale__item-value">{{ Math.round( font.font_size ) }}px</div>
//             </div>
//             <div class="scale__item-line-height-outer">
//                 <div class="scale__item-line-height"></div>
//             </div>
//             <div class="scale__item-text-outer">
//                 <div class="text">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной ...</div>
//             </div>

//         </div>    
//     `,



//     methods: {

//     }


// } );





Vue.component('settings-comp', { 

    props: {
        font_base: {
            type: Number
        },
        ratio: {
            type: Number
        }

    },

    data() {
        return {
            font_base_local: this.font_base,
            ratio_local: this.ratio,
        }
    },

    
    template: `
            <div class="mv_12 settings ">

                <div class="  row">

                    <div class="settings__item-outer mv_12 ds_2">
                        <div class="settings__item">
                            <div class="settings__item-field">
                                <label class="settings__item-label">Input normal Label</label>
    
                                <!--input type="text" class="field-text" v-model="font_base" _v-on:change="setModualarScale"-->
                                <!-- <input type="text" class="field-text" v-model="font_base" v-on:change="setModualarScale"> -->

                                <input type="text" class="field-text" v-model="font_base_local" @change="updateFontSize">                                
                                <input type="text" v-bind:value="font_base_local" >

                                
                            </div>
                        </div>
    
                    </div>

                    <div class="settings__item-outer mv_12 ds_2">
                        <div class="settings__item">
                            <div class="settings__item-field">
                                <label class="settings__item-label">Ratio</label>
                                <!-- <input type="text" class="field-text" __v-bind:value="ratio" > -->
                                <input type="text" class="field-text"  v-model="ratio_local">
                            </div>
                        </div>
    
                    </div>

                </div>
    
                <div class="_settings row">
    
                    <div class="settings__item-outer mv_12 ds_2">
                        <div class="settings__item">
                            <div class="settings__item-field">
                                <label class="settings__item-label">Font-family</label>
                                <select name="" class="select">
                                    <option value="Roboto" _disabled="">Roboto</option>
                                    <option value="Open Sans">Open Sans</option>
                                    <option value="Noto Sans JP">Noto Sans JP</option>
                                    <option value="Lato">Lato</option>
                                    <option value="Montserrat">Montserrat</option>
                                </select>
                            </div>
                        </div>
    
                    </div>
    
                    <div class="settings__item-outer mv_12 ds_2">
                        <div class="settings__item">
                            <div class="settings__item-field settings__item-field--w--double">
                                <label class="settings__item-label">Color</label>
                                <input type="text" class="field-text" value="#323231">
                            </div>
                        </div>
    
                    </div>
    
                    <div class="settings__item-outer mv_12 ds_2">
                        <div class="settings__item-field">
                            <label class="settings__item-label">Font-weight</label>
                            <select name="" class="select">
                                <option value="Roboto" _disabled="">400</option>
                                <option value="Open Sans">300</option>
                                <option value="Noto Sans JP">500</option>
                                <option value="Lato">600</option>
                                <option value="Montserrat">700</option>
                            </select>
                        </div>
    
                    </div>
    
                </div>
    
            </div>  
    `,


    methods: {

        // updateFontSize() {
        //     this.$emit('update-font-size', this.font_base);
        // }

        updateFontSize() {
            // this.$emit('update-font-size', this.font_base);


            this.$emit('update-scale', this.font_base, this.ratio);
            // console.log("this.$emit('update-scale', this.font_base, this.ratio);");
            // console.log("this.font_base: " + this.font_base + ", this.ratio: " + this.ratio);

            console.log("this.font_base: " + this.font_base_local + ", this.ratio: " + this.ratio_local);
        }        

    }


//     methods: {

//         // addOneToCart () {
//         //     // this.cart += 1;
//         //     // this.$emit('add-to-cart');           
//         //     this.$emit('add-to-cart', this.variants[this.activeVariant].variantId );     // Передадим еще и id, чтобы добавить в массив корзины      
//         // },

//         changeFontSize() {

//             this.$emit('change-font-size', this.fontSize)

//         }


 } );


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

    computed: {

        // scaleItemTemplate: function (params) {


        //     // Вычислить шкалу шрифтов

        //     // 0-й элемент 'base'
        //     // this.fonts.push( {} );
        //     this.fonts[0]['name'] = this.font_size_names[0];
        //     this.fonts[0]['font_size'] = this.font_base;
        //     this.fonts[0]['id'] = 12345 + 0;

        //     // все последующие
        //     for (let i = 1; i < this.font_size_names.length; i++) {

        //         // Добавить name
        //         // this.fonts.push( {} );
        //         this.fonts[i]['name'] = this.font_size_names[i];

        //         // Добавить font_size 
        //         this.fonts[i]['font_size'] = this.ratio * this.fonts[i-1]['font_size'];
        //         this.fonts[i]['font_size'] = this.fonts[i]['font_size'].toFixed(4);

        //         this.fonts[i]['id'] = 12345 + i;

        //         // debugger;
        //         console.log('setModualarScale() on the run, i = ' + i);
        //     }


        //     let template = '';

        //     for (let i = 0; i < this.font_size_names.length; i++) {

        //         template += `

        //             <div class="scale__item">

        //                 <div class="scale__item-name-outer">
        //                     <div class="scale__item-name">
        //                         <input class="field-text" type="text" __v-bind:value="font.name" _v-model="font.name">
        //                     </div>
        //                 </div>
        //                 <div class="scale__item-value-outer">
        //                     <div class="scale__item-value"> 
                            
        //                         ${ this.fonts[i]['font_size'] }
        //                     </div>
        //                 </div>
        //                 <div class="scale__item-line-height-outer">
        //                     <div class="scale__item-line-height"></div>
        //                 </div>
        //                 <div class="scale__item-text-outer">
        //                     <div class="text">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной ...</div>
        //                 </div>

        //             </div>
        //         `;
        //     }


        //     return template;
        // }



        scaleItemTemplate: function (params) {


            let template = '';

            for (let i = 0; i < this.font_size_names.length; i++) {

                template += `

                    <div class="scale__item">

                        <div class="scale__item-name-outer">
                            <div class="scale__item-name">
                                <input class="field-text" type="text" __v-bind:value="font.name" _v-model="font.name">
                            </div>
                        </div>
                        <div class="scale__item-value-outer">
                            <div class="scale__item-value"> 
                            
                                ${ this.fonts[i]['font_size'] }
                            </div>
                        </div>
                        <div class="scale__item-line-height-outer">
                            <div class="scale__item-line-height"></div>
                        </div>
                        <div class="scale__item-text-outer">
                            <div class="text">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной ...</div>
                        </div>

                    </div>
                `;
            }


            return template;
        }


    },



    created () {


        // Проверить тест

        for (let index = 0; index < this.font_size_names.length; index++) {
            // const element = array[index];
            // alert(); 
            
            console.log(' ' + this.font_size_names[index] );
            
        }


        this.setDefaultModualarScale();

    },

    // methods 
    methods: {

        // updateScale: function (params) {

        //     // this.message = this.message.split('').reverse().join('')
        //     // alert(); // +

        //     // Вычислить шкалу шрифтов

        //     // 0-й элемент 'base'
        //     // this.fonts.push( {} );
        //     this.fonts[0]['name'] = this.font_size_names[0];
        //     this.fonts[0]['font_size'] = this.font_base;
        //     this.fonts[0]['id'] = 12345 + 0;

        //     // все последующие
        //     for (let i = 1; i < this.font_size_names.length; i++) {

        //         // Добавить name
        //         // this.fonts.push( {} );
        //         this.fonts[i]['name'] = this.font_size_names[i];

        //         // Добавить font_size 
        //         this.fonts[i]['font_size'] = this.ratio * this.fonts[i-1]['font_size'];
        //         this.fonts[i]['font_size'] = this.fonts[i]['font_size'].toFixed(4);

        //         this.fonts[i]['id'] = 12345 + i;

        //         // debugger;
        //         console.log('setModualarScale() on the run, i = ' + i);
        //     }
            
        // },


        // v.2 Для обновления при получении изменений из к-та settimgs-comp
        // updateScale: function (font_base) {

        //     // this.message = this.message.split('').reverse().join('')
        //     // alert(); // +

        //     // Вычислить шкалу шрифтов

        //     // 0-й элемент 'base'
        //     // this.fonts.push( {} );
        //     this.fonts[0]['name'] = this.font_size_names[0];
        //     this.fonts[0]['font_size'] = font_base;
        //     this.fonts[0]['id'] = 12345 + 0;

        //     // все последующие
        //     for (let i = 1; i < this.font_size_names.length; i++) {

        //         // Добавить name
        //         // this.fonts.push( {} );
        //         this.fonts[i]['name'] = this.font_size_names[i];

        //         // Добавить font_size 
        //         this.fonts[i]['font_size'] = this.ratio * this.fonts[i-1]['font_size'];
        //         this.fonts[i]['font_size'] = this.fonts[i]['font_size'].toFixed(4);

        //         this.fonts[i]['id'] = 12345 + i;

        //         // debugger;
        //         console.log('setModualarScale() on the run, i = ' + i);
        //     }
            
        // },


        // v.3
        updateInstanceSettings(font_base, ratio) {

            // 1. Update instance data
            this.ratio = ratio;
            this.font_base = font_base;
            alert();


            // // 2. Update ..

            // // this.message = this.message.split('').reverse().join('')
            // // alert(); // +

            // // Вычислить шкалу шрифтов

            // // 0-й элемент 'base'
            // // this.fonts.push( {} );
            // this.fonts[0]['name'] = this.font_size_names[0];
            // this.fonts[0]['font_size'] = font_base;
            // this.fonts[0]['id'] = 12345 + 0;

            // // все последующие
            // for (let i = 1; i < this.font_size_names.length; i++) {

            //     // Добавить name
            //     // this.fonts.push( {} );
            //     this.fonts[i]['name'] = this.font_size_names[i];

            //     // Добавить font_size 
            //     this.fonts[i]['font_size'] = this.ratio * this.fonts[i-1]['font_size'];
            //     this.fonts[i]['font_size'] = this.fonts[i]['font_size'].toFixed(4);

            //     this.fonts[i]['id'] = 12345 + i;

            //     // debugger;
            //     console.log('setModualarScale() on the run, i = ' + i);
            // }

        },




        setDefaultModualarScale: function () {
            // Вычислить шкалу шрифтов

            // 0-й элемент 'base'
            this.fonts.push( {} );
            this.fonts[0]['name'] = this.font_size_names[0];
            this.fonts[0]['font_size'] = this.font_base;
            this.fonts[0]['id'] = 12345 + 0;            

            // все последующие
            for (let i = 1; i < this.font_size_names.length; i++) {

                // Добавить name
                this.fonts.push( {} );
                this.fonts[i]['name'] = this.font_size_names[i];

                // Добавить font_size 
                this.fonts[i]['font_size'] = this.ratio * this.fonts[i-1]['font_size'];
                this.fonts[i]['font_size'] = this.fonts[i]['font_size'].toFixed(4);


                this.fonts[i]['id'] = 12345 + i;                
            }   
        },




         /*
        setModualarScale: function () {


            // // this.message = this.message.split('').reverse().join('')
            // // alert(); // +

            // // Вычислить шкалу шрифтов

            // // 0-й элемент 'base'
            // // this.fonts.push( {} );
            // this.fonts[0]['name'] = this.font_size_names[0];
            // this.fonts[0]['font_size'] = this.font_base;
            // this.fonts[0]['id'] = 12345 + 0;

            // // все последующие
            // for (let i = 1; i < this.font_size_names.length; i++) {

            //     // Добавить name
            //     // this.fonts.push( {} );
            //     this.fonts[i]['name'] = this.font_size_names[i];

            //     // Добавить font_size 
            //     this.fonts[i]['font_size'] = this.ratio * this.fonts[i-1]['font_size'];
            //     this.fonts[i]['font_size'] = this.fonts[i]['font_size'].toFixed(4);

            //     this.fonts[i]['id'] = 12345 + i;

            //     // debugger;
            //     console.log('setModualarScale() on the run, i = ' + i);
            // }            
            
            
        }
        */

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


