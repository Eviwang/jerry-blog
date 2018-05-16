import Vue from 'vue'
import './styles/cssreset.css'
import './styles/index.styl'
import App from './app.vue'

var root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  render (h) {
    return h(App)
  }
}
).$mount(root)
