
Vue.component( 'settings', {

    props: {
        fb: {
            type: Number,
            require: true,
        },
        ratio: {
            type: Number,
            require: true,
        }
    },

    data() {
        return {
            fb_local_settings: this.fb,
            ratio_local_settings: this.ratio,
        }
    },

    template: `
        <div class="mv_12 settings ">

            <div class="  row">

                <div class="settings__item-outer mv_12 ds_2">
                    <div class="settings__item">
                        <div class="settings__item-field">
                            <label class="settings__item-label">Input normal Label</label>
                            <input type="text" class="field-text" v-model.number="fb_local_settings" v-on:keyup="changeFB">
                            <p>Prop fb =  {{ fb }} </p>
                            <p>Var fb_local_settings = {{ fb_local_settings }} </p>
                        </div>
                    </div>

                </div>

                <div class="settings__item-outer mv_12 ds_2">
                    <div class="settings__item">
                        <div class="settings__item-field">
                            <label class="settings__item-label">Ratio</label>
                            <input type="text" class="field-text"  v-model.number="ratio_local_settings" v-on:keyup="changeRatio">
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

        changeFB() {
            
            this.$emit('change-settings', this.fb_local_settings, this.ratio_local_settings);
        },

        changeRatio() {
            
            this.$emit('change-settings', this.fb_local_settings, this.ratio_local_settings);
        }        

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
        }
    },


    data() {
        return {

        }
    },

    template: `
        <div class="scale">
            <div class="scale__item">
                <div class="scale__item-name-outer">
                    <div class="scale__item-name">
                        <input class="field-text" type="text" value='h1'>
                    </div>
                </div>
                <div class="scale__item-value-outer">
                    <div class="scale__item-value"> {{ fb }} </div>
                </div>
                <div class="scale__item-line-height-outer">
                    <div class="scale__item-line-height"></div>
                </div>
                <div class="scale__item-text-outer">
                    <div class="text">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной ...</div>
                </div>

            </div>
        </div>
    `

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
        ]
    },

    methods: {

        updateSettings(fb_new, ration_new) {
            this.fb = fb_new;
            this.ratio = ration_new;
        }
    }



} )




