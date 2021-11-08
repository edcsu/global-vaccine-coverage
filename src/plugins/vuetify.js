import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import VirusComponent from '../Icons/VirusComponent'
import '@mdi/font/css/materialdesignicons.css'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi',
        values: {
          virus: {
            component: VirusComponent
          },
        }
      },
      theme: {
        themes: {
          dark: {
            primary: colors.grey.darken4
          }
        }
      }
});
