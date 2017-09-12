import React from 'react'
import ResultadosBox from './resultadoBox'
export default class Resultados extends React.Component {
  constructor() {
    super()

  }

  render() {
    let filas = []
    var {resultados, buscado, stop} = this.props
    if (resultados != null && (resultados.length >= 1)) {
      resultados.map(function(users){
      filas.push(<ResultadosBox usuarios={users} key={users._id} />)
    })
    return (
      <div  className="box" >
        <ul>{filas} </ul>
      </div>
    )
    } else {
      return (
        <div className='box'>
          <p> Todavia no existe el usuario {buscado}. Desea crearlo? <button id="crear" onClick={this.props.onClick} > SI </button>  </p>
        </div>
      )
    }
  }
}
