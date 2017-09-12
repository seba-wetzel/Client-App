import React from 'react'

export default class Editar extends React.Component {
    constructor() {
        super()

    }

    render() {
        return (
          <div >
            <div className="box">
          <h1> <i className="fa fa-address-card-o" aria-hidden="true"> Libreta de Clientes </i> </h1>
          <div className="box">
            <label htmlFor="telefono">Telefono del Cliente</label>
            <div className="input-group box">
              <span className="input-group-addon" id="basic-addon1"> <i className="fa fa-phone" aria-hidden="true"></i> </span>
              <input type="number" pattern="[0-9]" className="form-control no-spin" id="telefono" aria-describedby="basic-addon1"/>
            </div>
            <span></span>
            <span></span>
            <label htmlFor="nombre">Nombre del Cliente</label>
            <div className="input-group box">
              <span className="input-group-addon" id="basic-addon1"> <i className="fa fa-user" aria-hidden="true"></i> </span>
              <input type="text"  className="form-control no-spin" id="nombre" aria-describedby="basic-addon1"/>
            </div>

            <span></span>
            <span></span>

            <label htmlFor="direccion">Direccion del Cliente</label>
            <div className="input-group box">
              <span className="input-group-addon" id="basic-addon1"> <i className="fa fa-globe" aria-hidden="true"></i> </span>
              <input type="text"  className="form-control no-spin" id="direccion" aria-describedby="basic-addon1"/>
            </div>

            <span></span>
            <span></span>

            <label htmlFor="info">Informacion adicional del Cliente</label>
            <div className="input-group box">
              <span className="input-group-addon" id="basic-addon1"> <i className="fa fa-info" aria-hidden="true"></i> </span>
              <textarea type="text"  className="form-control no-spin" id="info" aria-describedby="basic-addon1"/>
            </div>
            <span></span>
            <span></span>
          </div>
          </div>
          <input type="hidden" id="_id" value="{this.props.user._id}"/>
          <div className=" box  btn-group btn-group-lg-justified" >
            <div className="btn-group" role="group">
            <button type="button" className="btn btn-primary"> Guardar</button>
          </div>
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-danger" > Borrar </button>
          </div>
          </div>

        </div>
        )
    }
}
