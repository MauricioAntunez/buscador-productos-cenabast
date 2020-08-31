import React, {Fragment} from 'react';
import {Button} from '@adobe/react-spectrum';
const Resultado = props => {
    const resultadobusqueda = props.resultadobusqueda

    return (
        <Fragment>
            {
            resultadobusqueda.length > 0 ?
                resultadobusqueda.map(producto => {
                    return (
                        <Button key={producto.codigo.toString()} variant="cta" onPress={e => console.log(e.target.textContent)}>
                            {producto.descCorta}
                        </Button>
                    )
                })
            :
                null
            }
        </Fragment>
    );
}
 
export default Resultado;