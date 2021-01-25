import Vue from 'vue'
import VueSwal from 'common/VueSwal'
import setupSentry from '@lib/sentry'
import { BootstrapVue } from 'bootstrap-vue'

setupSentry(Vue)
Vue.use(VueSwal)
Vue.use(BootstrapVue)

import UserPreferencesPage from './UserPreferencesPage.vue'

new Vue({
  components: { UserPreferencesPage }
}).$mount('#user-preferences-mount')
