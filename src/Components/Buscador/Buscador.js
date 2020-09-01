
import React, { Fragment } from 'react';
import {SearchField} from '@adobe/react-spectrum'

const Buscador = props => {
    console.log(props)
    return (
        <Fragment>
            <SearchField
                label="Buscar producto"
                placeholder="Ingresa nombre de producto, componente activo o código cenabast"
                onSubmit={props.setTxtbusqueda}
                width="100%" 
                maxWidth="800px" 
            />
        </Fragment>
    );
}
 
export default Buscador;