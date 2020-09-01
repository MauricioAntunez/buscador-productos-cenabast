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
                    return (
                        <DialogTrigger key={producto.codigo.toString()}>
                            <ActionButton width="100%" maxWidth="800px">{producto.descCorta}</ActionButton>
                            {(close) => (
                            <Dialog>
                                <Heading>
                                    <Flex alignItems="center" gap="size-100">
                                        <Text>{producto.descCorta}</Text>
                                    </Flex>
                                </Heading>
                                <Header>
                                    Código {producto.codigo}
                                </Header>
                                <Divider />
                                <Content>
                                    <p>{producto.descLarga}</p>
                                    <p>Tipo de producto: {producto.tipoProducto}<br/>
                                    Tipo de canasta: {producto.tipoCanasta}<br/>
                                    Tipo de bases: {producto.tipoBases}<br/>
                                    Fecha inicio abastecimiento: {producto.inicioAbastecimiento}</p>
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