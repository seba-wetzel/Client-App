import Reflux from 'reflux';
import UserActions from '../actions/userActions'

let UserStore = Reflux.createStore({
  init: function() {
    // we keep a track of the state on the store
    this.state= {
      users: null,
      buscado: null
    }},

  listenables: [UserActions],

  fetchUsers: function() {
    let self = this
    fetch('http://localhost:8888/users').then((response) => {
      return response.json()
    }).then((users) => {
      self.trigger(users)
    })
  },

  findUser: function(data) {
    let self = this
    let url = 'http://localhost:8888/users/' + data
    fetch(url).then((response) => {
      return response.json()
    }).then((users) => {
      self.trigger(users)
    })
  },

  createUser: function(data) {
    let self = this
    let buscado = data
    self.trigger(buscado)
  },

  saveUser: function(usuario) {
    let self = this
    let url = 'http://localhost:8888/users'
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(usuario)
    }).then(function(response) {
      console.log(response.status)
      if(response.status == '200'){
        let status = response.status
        
      }
    })
  }
})
export default UserStore
