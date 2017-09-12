import React from 'react'

export default class ResultadoBox extends React.Component {
    constructor() {
        super()

    }

    render() {
        return (
          <div className='box'>
            <div className='row'>
              <div className='col-md-8'>
                <h1>
                  {this.props.usuarios.name}
                </h1>
                <h3>
                  {this.props.usuarios.phone}
                </h3>
                <h3>
                  {this.props.usuarios.dir}
                </h3>
              </div>
              <div className='col-md-2 '>

                    <a href="#" className="thumbnail">
                      <img src="https://randomuser.me/api/portraits/lego/7.jpg" width="70" alt="..."/>
                    </a>

              </div>
            </div>
          </div>
        )
    }
}
