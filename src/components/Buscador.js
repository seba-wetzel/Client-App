import React from 'react'

export default class Buscador extends React.Component {
  constructor() {
    super()

  }

  render() {
    return (
      <div>
      <div className="input-group">
        <span className="input-group-addon" id="basic-addon1"> <i className="fa fa-phone" aria-hidden="true"></i> </span>
        <input onChange={this.props.onChange} type="text" className="form-control" placeholder="Telefono del cliente" aria-describedby="basic-addon1" type="number" pattern="[0-9]"/>
      </div>
    </div>
    )
  }
}
