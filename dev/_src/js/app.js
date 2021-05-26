
Vue.component( 'settings', {

    props: {
        fb: {
            type: Number,
            require: true,
        },
        ratio: {
            type: Number,
            require: true,
        },
        styles: {
            type: Object,
            require: true,
        },
        
    },

    data() {
        return {
            fb_local_settings: this.fb,
            ratio_local_settings: this.ratio,
            styles_local_settings: this.styles

        }
    },

    template: `
        <div class="mv_12 settings ">

            <div class="  row">

                <div class="settings__item-outer mv_12 ds_2">
                    <div class="settings__item">
                        <div class="settings__item-field">
                            <label class="settings__item-label">Input normal Label</label>
                            <input type="text" class="field-text" 
                                v-model.number="fb_local_settings" 
                                v-on:keyup="changeFB">
                                <!--p>Prop fb =  {{ fb }} </p-->
                            <!--p>Var fb_local_settings = {{ fb_local_settings }} </p-->
                        </div>
                    </div>

                </div>

                <div class="settings__item-outer mv_12 ds_2">
                    <div class="settings__item">
                        <div class="settings__item-field">
                            <label class="settings__item-label">Ratio</label>
                            <input type="text" class="field-text"  
                                v-model.number="ratio_local_settings" 
                                v-on:keyup="changeRatio">
                        </div>
                    </div>

                </div>

            </div>

            <div class="_settings row">

                <div class="settings__item-outer mv_12 ds_2">
                    <div class="settings__item">
                        <div class="settings__item-field">
                            <label class="settings__item-label">Font-family</label>
                            <select name="" class="select" v-model="styles.fontFamily">>
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
                            <input type="text" class="field-text" 
                                v-model="styles.color"
                                v-on:keyup="changeStyles">
                        </div>
                    </div>

                </div>

                <div class="settings__item-outer mv_12 ds_2">
                    <div class="settings__item-field">
                        <label class="settings__item-label">Font-weight</label>
                        <select name="" class="select" v-model="styles.fontWeight">
                            <option value="400" _disabled="">400</option>
                            <option value="300">300</option>
                            <option value="500">500</option>
                            <option value="600">600</option>
                            <option value="700">700</option>
                        </select>
                    </div>

                </div>



            </div>



        </div>
    `,

    methods: {

        changeFB() {
            
            this.$emit('change-settings', this.fb_local_settings, this.ratio_local_settings, this.styles_local_settings);
        },

        changeRatio() {
            
            this.$emit('change-settings', this.fb_local_settings, this.ratio_local_settings, this.styles_local_settings);
        },
        
        changeStyles() {
            
            this.$emit('change-settings', this.fb_local_settings, this.ratio_local_settings, this.styles_local_settings);
        },         

    }

} )




Vue.component( 'scale', {

    props: {
        fb: {
            type: Number,
            require: true,
        },
        ratio: {
            type: Number,
            require: true,
        },
        styles: {
            type: Object,
            require: true,
        },        
        font_size_names: {
            type: Array,
            require: true,
        }        
    },


    data() {
        return {
            // fonts: [],
            // font_size_names_local_settings : this.font_size_names
            // fonts: this.setFonts()
            // fonts: [],
            // font_size_names_local_settings : this.font_size_names
        }

        // _v-model="font['name']"
        // __v-model="font_size_names_local_settings['name']"
        // ___v-model="font_size_names_local_settings['name']"
    },

    template: `
        <div class="scale" __style="display:none;">

            <div class="scale__item" v-for="(font, index) in fonts ">
                <div class="scale__item-name-outer">
                    <div class="scale__item-name">
                        <input class="field-text" type="text" 
                            __v-model="font_size_names_local_settings[index]"
                            v-model="font_size_names[index]"
                            >
                    </div>
                </div>
                <div class="scale__item-value-outer">
                    <div class="scale__item-value"> {{ font['font_size'] }} </div>
                </div>
                <div class="scale__item-line-height-outer">
                    <div class="scale__item-line-height"
                        v-bind:style="{ fontSize: font['font_size'] + 'px' }"
                    ></div>
                </div>
                <div class="scale__item-text-outer"
                    v-bind:style="{ fontSize: font['font_size'] + 'px' }" 
                >
                    <div class="text" _v-bind:style="{ fontSize: font['font_size'] }" 
                        v-bind:style="styles" 
                    >
                        Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной ...
                    </div>
                </div>

            </div>


            <div class="scale__item" >
                <div class="scale__item-name-outer">
                    <div class="scale__item-name">

                        <div class="product__quantity-field">    
                            <!--button class="product__quantity-button product__quantity-button--minus"><i class="themify themify-minus"></i></button-->
                            <!--input type="number" class="field-text product__quantity-value" id="product__quantity" value="1"-->
                            <!--button class="product__quantity-button product__quantity-button--plus"
                                v-on:click="addScaleItem"
                            ><i class="themify themify-plus"></i></button-->

                            <button class="product__quantity-button product__quantity-button--plus" v-on:click="addScaleItem">
                                <!--i class="themify themify-plus"></i-->
                                +
                            </button>
                        </div>

                    </div>
                </div>
                <div class="scale__item-value-outer">
                    <div class="scale__item-value">Add </div>
                </div>


            </div>   
         

        </div>
    `,

    // beforeUpdate: {
    //     alertUs() {
    //         alert('поймали beforeUpdate У компонента');
    //     }
    // },

    computed: {

        fonts() {

            let fontsArr = [];

            // Вычислить шкалу шрифтов

            // 0-й элемент 'base'
            fontsArr.push( {} );
            fontsArr[0]['name'] = this.font_size_names[0];
            fontsArr[0]['font_size'] = this.fb;
            fontsArr[0]['id'] = 12345 + 0;

            // все последующие
            for (let i = 1; i < this.font_size_names.length; i++) {

                // Добавить name
                fontsArr.push( {} );
                fontsArr[i]['name'] = this.font_size_names[i];

                // Добавить font_size 
                fontsArr[i]['font_size'] = this.ratio * fontsArr[i-1]['font_size'];
                fontsArr[i]['font_size'] = fontsArr[i]['font_size'].toFixed(4);
                fontsArr[i]['id'] = 12345 + i;                
            } 

            return fontsArr;
        }

        
        
    },

    // created() {
    //     this.setFonts()
    //     alert('поймали created У компонента');
    // },

    // Хаха - этот хук ловит Не когда изменяются д-е входные,
    // а когда изменяются д-е внутри этого к-та.
    // -- Надо такой хук повесить в компоненте settings и передавать событие ?
    // beforeUpdate() {
    //     this.setFonts()
    //     // alert('поймали beforeUpdate У компонента');
    // },
    // Входит в бесконечный цикл)
    // updated() {
    //     this.setFonts()
    //     // alert('поймали updated У компонента');
    // },    

    methods: {
        addScaleItem() {
            // this.font_size_names.push( {} );
            this.font_size_names.push( "Enter font name" );

        },


        setFonts() {
            let fontsArr = [];

            // Вычислить шкалу шрифтов

            // 0-й элемент 'base'
            fontsArr.push( {} );
            fontsArr[0]['name'] = this.font_size_names[0];
            fontsArr[0]['font_size'] = this.fb;
            fontsArr[0]['id'] = 12345 + 0;

            // все последующие
            for (let i = 1; i < this.font_size_names.length; i++) {

                // Добавить name
                fontsArr.push( {} );
                fontsArr[i]['name'] = this.font_size_names[i];

                // Добавить font_size 
                fontsArr[i]['font_size'] = this.ratio * fontsArr[i-1]['font_size'];
                fontsArr[i]['font_size'] = fontsArr[i]['font_size'].toFixed(4);
                fontsArr[i]['id'] = 12345 + i;                
            } 

            // return fontsArr;
            this.fonts = fontsArr
        }
    }

} )




let app = new Vue ( { 

    el: '#app',

    data: {
        fb: 16,
        ratio: 1.14,
        font_names: [
            'base',
            'h6',
            'h5',
            'h4',
            'h3',
            'h2',
            'h1',
        ],

        styles: {
            color: '#353437',
            fontWeight: 400,
            fontFamily: 'Roboto',
        }
    },

    methods: {

        updateSettings(fb_new, ration_new, styles_new) {
            this.fb = fb_new;
            this.ratio = ration_new;
            this.styles = styles_new;
        }
    }



} )
/* <option value="Roboto" _disabled="">Roboto</option>
<option value="Open Sans">Open Sans</option>
<option value="Noto Sans JP">Noto Sans JP</option>
<option value="Lato">Lato</option>
<option value="Montserrat">Montserrat</option> */



