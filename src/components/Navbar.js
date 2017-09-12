import React from 'react'
import {Link} from 'react-router'

export default class Navbar extends React.Component {
    constructor() {
        super()

    }
    checkActive(menu){
      if(menu == this.props.estado){
        return 'active'
      }

    }
    render() {
        return (
          <div className="col-md-2 ">
            <ul className="nav nav-pills nav-stacked">
              <li role="presentation" className= 'active' ><Link to="/" > Buscar </Link> </li>

            </ul>
          </div>
        )
    }
}
