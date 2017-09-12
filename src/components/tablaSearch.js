import React from 'react'
import Reflux from 'reflux';
import ReactMixin from 'react-mixin'

import Buscador from './Buscador.js'
import Resultados from './Resultados.js'
import Crear from './Create.js'

import UserStore from '../stores/userStore';
import UserActions from '../actions/userActions'

@ReactMixin.decorate(Reflux.connect(UserStore, 'users'))

export default class Tabla extends React.Component {

  constructor() {
    super()
    this.state = {
      users: null,
      busqueda: null,
      activate: false
    }
  }
  componentDidMount() {
    UserActions.fetchUsers()

  }
  buscador(ev) {
    let busqueda = ev.target.value
    this.state.busqueda = busqueda
    UserActions.findUser(busqueda)
  }
  crear() {
    this.state.activate = true
    UserActions.createUser(this.state.busqueda)
  }

  creado() {
    this.state.activate = false
    this.state.users = null
    setTimeout(() => {
      UserActions.findUser(this.state.busqueda)
    }, 500);

  }

  render() {
    if (!this.state.activate) {
      return (
        <div>
          <Buscador onChange={this.buscador.bind(this)}></Buscador>
          <Resultados onClick={this.crear.bind(this)} resultados={this.state.users} buscado={this.state.busqueda}></Resultados>
        </div>
      )
    } else {
      return (<Crear nuevo={this.state.busqueda} emitido={this.creado.bind(this)}/>)
    }
  }
}
