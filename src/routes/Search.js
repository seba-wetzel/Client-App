import React from 'react'

import Tabla from '../components/tablaSearch.js'

export default class buscador extends React.Component {
  constructor() {
    super()

  }

  render() {
    return (
     <div className="col-md-10">
      <Tabla ></Tabla>
    </div>

    )
  }
}
