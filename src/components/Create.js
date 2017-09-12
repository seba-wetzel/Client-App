import React from 'react'

import UserActions from '../actions/userActions'

import CrearFormulario from '../components/createUser'
export default class Crear extends React.Component {
  constructor() {
    super()

  }
  crear(ev) {
    ev.preventDefault()
    let formulario = event
    let newuser = {
      phone: formulario.path[0].ownerDocument.all.telefono.value,
      name: formulario.path[0].ownerDocument.all.nombre.value,
      dir: formulario.path[0].ownerDocument.all.direccion.value,
      cel: formulario.path[0].ownerDocument.all.cel.value,
      info: formulario.path[0].ownerDocument.all.info.value
    }
    UserActions.saveUser(newuser)
  }

  render() {
    return (
      <div className="col-md-10">
        <CrearFormulario onClick={this.crear.bind(this)} nuevo={this.props.nuevo} emitido={this.props.emitido}/>
      </div>
    )
  }
}
