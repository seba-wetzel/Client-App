import React from 'react'

import UserStore from '../stores/userStore';
import Reflux from 'reflux';
import ReactMixin from 'react-mixin'
@ReactMixin.decorate(Reflux.connect(UserStore, 'buscado'))

export default class CrearFormulario extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div >
        <form method="post" action="http://localhost:8888/users/" id="formulario" onSubmit={this.props.onClick}>
          <div className="box">
            <h1>
              <i className="fa fa-address-card-o" aria-hidden="true">
                Libreta de Clientes
              </i>
            </h1>
            <div className="box">
              <label htmlFor="telefono">Telefono del Cliente</label>
              <div className="input-group box">
                <span className="input-group-addon" id="basic-addon1">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                </span>
                <input type="number" pattern="[0-9]" className="form-control no-spin" id="telefono" aria-describedby="basic-addon1" name="phone" defaultValue={this.props.nuevo}/>
              </div>

              <label htmlFor="nombre">Nombre del Cliente</label>
              <div className="input-group box">
                <span className="input-group-addon" id="basic-addon1">
                  <i className="fa fa-user" aria-hidden="true"></i>
                </span>
                <input type="text" className="form-control no-spin" id="nombre" aria-describedby="basic-addon1" name="name"/>
              </div>

              <label htmlFor="direccion">Direccion del Cliente</label>
              <div className="input-group box">
                <span className="input-group-addon" id="basic-addon1">
                  <i className="fa fa-globe" aria-hidden="true"></i>
                </span>
                <input type="text" className="form-control no-spin" id="direccion" aria-describedby="basic-addon1" name="dir"/>
              </div>

              <label htmlFor="cel">Celular del Cliente</label>
              <div className="input-group box">
                <span className="input-group-addon" id="basic-addon1">
                  <i className="fa fa-globe" aria-hidden="true"></i>
                </span>
                <input type="number" className="form-control no-spin" id="cel" aria-describedby="basic-addon1" name="cel"/>
              </div>

              <label htmlFor="info">Informacion adicional del Cliente</label>
              <div className="input-group box">
                <span className="input-group-addon" id="basic-addon1">
                  <i className="fa fa-info" aria-hidden="true"></i>
                </span>
                <textarea type="text" className="form-control no-spin" id="info" aria-describedby="basic-addon1"/>
              </div>
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.props.emitido}>Guardar</button>
          </div>

        </form>
      </div>
    )
  }
}
