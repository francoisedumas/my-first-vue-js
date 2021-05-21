import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);
export const bus = new Vue();

// Directive 
Vue.directive('theme', {
  bind(el, binding){
    if(binding.value == 'wide'){
      el.style.maxWidth = "1200px";
    } else if (binding.value == 'narrow'){
      el.style.maxWidth = "500px";
    }
    if (binding.arg == 'column'){
      el.style.background = '#ddd';
      el.style.padding = "20px";
    }
  }
});

// Filters
Vue.filter('snippet', function(value){
  return value.slice(0,100) + "...";
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
