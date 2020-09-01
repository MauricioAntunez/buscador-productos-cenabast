import React, {Fragment} from 'react';
import {ActionButton,
    Button,
    ButtonGroup,
    Content,
    Flex,
    Footer,
    Dialog,
    DialogTrigger,
    Divider,
    Heading,
    Header,
    Text} from '@adobe/react-spectrum';
const Resultado = props => {
    const resultadobusqueda = props.resultadobusqueda

    return (
        <Fragment>
            {
            resultadobusqueda.length > 0 ?
                resultadobusqueda.map(producto => {
                    const precioDot = parseInt(producto.precioMaximoVentaPublico).toLocaleString('es-CL')
                    return (
                        <DialogTrigger key={producto.nombreComercial.toString()+producto.nombreProveedor.toString()+producto.precioMaximoVentaPublico.toString()}>
                            <ActionButton width="100%" maxWidth="800px">{producto.nombreComercial}</ActionButton>
                            {(close) => (
                            <Dialog>
                                <Heading>
                                    <Flex alignItems="center" gap="size-100">
                                        <Text>{producto.nombreComercial}</Text>
                                    </Flex>
                                </Heading>
                                <Header>
                                    {producto.tipoProducto}
                                </Header>
                                <Divider />
                                <Content>
                                    <h3>Precio máximo de venta al público: <strong>${precioDot}</strong></h3>
                                    <p>Nombre Proveedor: {producto.nombreProveedor}</p>
                                </Content>
                                <ButtonGroup>
                                    <Button variant="cta" onPress={close} autoFocus>
                                        Cerrar
                                    </Button>
                                </ButtonGroup>
                            </Dialog>
                            )}
                        </DialogTrigger>
                    )
                })
            :
                null
            }
        </Fragment>
    );
}
 
export default Resultado;