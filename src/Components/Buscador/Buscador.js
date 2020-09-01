
import React, { Fragment } from 'react';
import {
    Link,
    Flex,
    SearchField,
    Text
} from '@adobe/react-spectrum'

const Buscador = props => {
    return (
        <Fragment>
            <h1>Buscador productos CENABAST</h1>
            <Flex direction="row" gap="size-100" alignItems="end" justifyContent="center" width="100%" wrap="wrap">
                <Text maxWidth="800px" width="100%">
                    <p>Este buscador tiene el proposito de lograr una mejor <Link><a href="https://www.interaction-design.org/literature/topics/ux-design" rel="noopener noreferrer" target="_blank">Experiencia de Usuario</a></Link> al buscar de productos disponibles en farmacias adheridas a <Link><a href="https://www.cenabast.cl/" rel="noopener noreferrer" target="_blank">CENABAST</a></Link>.</p>
                    <p>Puedes ingresar buscar por nombre (o parte del nombre), código de producto, o por términos presentes en la descripción del producto.</p>
                </Text>
                <SearchField
                    label="Ingresa el nombre de un producto para realizar la búsqueda"
                    placeholder="Ingresa el producto que deseas buscar"
                    onChange={props.setTxtbusqueda}
                    width="100%"
                    maxWidth="800px"
                    id="buscadorproductos"
                    inputMode="search"
                    type="search"
                    autoFocus="true"
                    size=""
                />
            </Flex>
        </Fragment>
    );
}
 
export default Buscador;