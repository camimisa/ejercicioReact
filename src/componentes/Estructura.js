import React from 'react'

import './Estructura.css'

export default class Estructura extends React.Component {

    constructor(props) {
        super(props)

        console.log('Estructura -> constructor')
    }

    state = {
        mostrar: true
    }

    render() {
        let {alumnos} = this.props
        let valores = []
        let propiedades = Object.keys(alumnos[0])

        return (
            <div className="Estructura">
                <div className="jumbotron">
                    <h3>Componente</h3>
                    {/* ------------------------------ */}
                    <h5>Array de objetos en una tabla</h5>

                    <div className="table-responsive">
                        <table className="table table-dark">
                            <thead>
                                <tr>
                                    {
                                        propiedades.map((propiedad, indice) =>
                                            <th key={indice}>{propiedad}</th>
                                        )
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    alumnos.map( (alumno, indice) => 
                                        (<tr key={indice}>
                                         {
                                            Object.values(alumno).map((valor,indice) => 
                                            <th key={indice}>
                                                <td>
                                                {valor.includes('https')? 
                                                <img src={valor} width="50" alt='Imagen' />
                                                : {valor}}</td>
                                            </th>
                                            )
                                         }
                                        </tr>)
                                        
                                    )
                                }
                            </tbody>

                        </table>
                    </div>

                </div>
            </div>

        )
    }
}