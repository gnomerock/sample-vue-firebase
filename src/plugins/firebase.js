import Vue from 'vue'
import Vuefire from 'vuefire'
import firebase from 'firebase'
import 'firebase/firestore'

Vue.use(Vuefire)

export default {
  install(Vue) {
    let config = {
      apiKey: "AIzaSyB68_JgJju8MqCsODfOiE18-2b-HrDY1nY",
      authDomain: "gnome-game-hub.firebaseapp.com",
      databaseURL: "https://gnome-game-hub.firebaseio.com",
      projectId: "gnome-game-hub",
      storageBucket: "gnome-game-hub.appspot.com",
      messagingSenderId: "970375210739"
    }
    
    firebase.initializeApp(config);
    let firestore = firebase.firestore()
    let settings = {timestampsInSnapshots: true}
    firestore.settings(settings)
    Vue.prototype.$firebase = firebase
    Vue.prototype.$db = firestore
  }
}
