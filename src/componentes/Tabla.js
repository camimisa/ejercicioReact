import React from 'react'

import './Tabla.css'

export default function Tabla (props){
        let { alumnos } = props
        let propiedades = Object.keys(alumnos[0])
        return (
            <div className="Tabla">
                <div className="jumbotron">
                    <h3>Lista</h3>
                    {/* ------------------------------ */}
                    <h5>Informacion</h5>

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
                                    alumnos.map((alumno, indice) =>
                                    (<tr key={indice}>
                                        {
                                            Object.values(alumno).map((valor, indice) =>
                                                <td key={indice}>

                                                    {valor.length > 40 ?

                                                        <p><img src={valor} width="50" alt='Imagen' /></p>

                                                        : <p>{valor}</p>

                                                    }
                                                </td>
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

        );
    
}