import './styles/cssreset.styl'
import './styles/index.styl'
import './styles/style.styl'
import Vue from 'vue'
import App from './app.vue'

var root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  render (h) {
    return h(App)
  }
}
).$mount(root)
