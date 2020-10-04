import Vue from 'vue'
import App from './App.vue'
import AutocompleteVue from 'autocomplete-vue';

Vue.component('autocomplete-vue', AutocompleteVue);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
