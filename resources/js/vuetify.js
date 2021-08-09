import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

Vue.use(Vuetify)

const opts = {
    icons: {
        iconfont: 'fa',
    }
}

export default new Vuetify(opts)