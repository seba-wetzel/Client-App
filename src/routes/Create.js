import React from 'react'
import Crear from '../components/createUser'
export default class crear extends React.Component {
    constructor() {
        super()

    }
    crear(ev){
      ev.preventDefault()
      let userNew = ev.target
      console.log(userNew)


    }

    render() {
        return (
          <div className="col-md-10">
            <Crear onClick={this.crear.bind(this)} nuevo= {this.state.nue} />
          </div>
        )
    }
}
