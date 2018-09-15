import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
  	fb.initializeApp({
    apiKey: 'AIzaSyB6Kc-JFtn3eVelfnCB7gE5umB4c7lr1JA',
    authDomain: 'ttr-logic.firebaseapp.com',
    databaseURL: 'https://ttr-logic.firebaseio.com',
    projectId: 'ttr-logic',
    storageBucket: 'ttr-logic.appspot.com',
    messagingSenderId: '1043747398535'
  	})

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  }
})
