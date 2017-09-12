import React from 'react'
import Editar from '../components/editUser'

export default class editor extends React.Component {
    constructor() {
        super()

    }

    render() {
        return (
          <div className="col-md-10">
            <Editar />
          </div>
        )
    }
}
