import React, {
  useState,
  useEffect
} from 'react';
import {Provider, defaultTheme, Text, Link, Flex} from '@adobe/react-spectrum';
import Buscador from './Components/Buscador/Buscador';
import Resultado from './Components/Resultado/Resultado'
import './App.scss'

const App = () => {
  const [datos, setDatos] = useState(false),
        [primeracarga, setPrimeracarga] = useState(true),
        [resultadobusqueda, setResultadobusqueda] = useState([]),
        [txtbusqueda, setTxtbusqueda] = useState(""),
        [filtrobusqueda, setFiltrobusqueda] = useState({
          tipoProducto:null,
          tipoCanasta:null,
          tipoBases:null,
          inicioAbasteimiento:null
        }),
        [nroresultados, setNroresultados] = useState(0),
      consultarCSV = async (urlCsv) => {
        const tsvdata = await fetch(urlCsv),
          info = await tsvdata.text().catch(error => {
            console.error(error)
          })
        let listProductos = []

        try {
          let infotsvList = info.split("\n")
              for (let index = 1; index < infotsvList.length; index++) {
                const element = infotsvList[index].split(";");
                listProductos.push({
                  nombreComercial:element[0],
                  nombreProveedor:element[1],
                  precioMaximoVentaPublico:element[3],
                  tipoProducto:element[4],
                  documentoCompras:element[5],
                  zcen:element[6],
                  zgen:element[7]
                })
          }
          setDatos(listProductos)
        } catch (e) {
          /* console.error(e) */
        }
      }

      useEffect(() => {
        switch (primeracarga) {
            case true:
                consultarCSV('./data/ListadoFarmacias_data.csv')
                setPrimeracarga(false)
                break;                

            case false:
              let listResultado = []
              if (txtbusqueda.trim().length > 4) {
                datos.forEach(producto => {
                  try {
                    if(
                      producto.nombreComercial.includes(txtbusqueda.toUpperCase()) 
                      || producto.nombreProveedor.includes(txtbusqueda.toUpperCase())
                      || producto.precioMaximoVentaPublico.includes(txtbusqueda.toUpperCase())
                      || producto.tipoProducto.includes(txtbusqueda.toUpperCase())
                      )
                      {
                        listResultado.push(producto)
                      }
                  } catch (e) {
                    /* console.error(e) */
                  }
                }); 
              }
              setNroresultados(listResultado.length)
              setResultadobusqueda(listResultado)
              break;
        
            default:
                break;
        }
        
    },[datos,filtrobusqueda,txtbusqueda,primeracarga])

    const providerStyle = {
      padding: '0 2rem'
    };

  return (
  <Provider theme={defaultTheme} minHeight="100vh"  colorScheme="dark" >
      <Flex direction="column" alignItems="center" marginX="size-200" gap="size-100" maxWidth="800px" marginX="auto">
          <Buscador setTxtbusqueda={setTxtbusqueda}/>
          <p>{
          txtbusqueda.trim().length === 0 ? null:
          nroresultados === 0 ? 'No se encontraron productos':
          `Hemos encontrado ${nroresultados} ${nroresultados === 1 ? 'producto' : 'productos'}. `
          }
          </p>
          {nroresultados > 0 ? <strong>Para ver la descripción completa haz click sobre el nombre del producto</strong> : null}
        
          <Resultado resultadobusqueda={resultadobusqueda}/>
        
        <Text width="100%" marginTop="2rem">
          <p>El documento con datos fue descargado desde la página <Link><a href="https://www.cenabast.cl/lista-de-medicamentos-ley-cenabast/" rel="noopener noreferrer" target="_blank">Lista de Medicamentos ley Cenabast</a></Link> el día 18 de Abril de 2021, donde esta disponible de forma pública.  Para descargar la fuente de datos actualizada por favor dirigete a <Link><a href="https://www.cenabast.cl/lista-de-medicamentos-ley-cenabast/" rel="noopener noreferrer" target="_blank">Lista de Medicamentos – Ley Cenabast</a></Link>. La información contenida en el proyecto es solo referencial y utilizada para mostrar una mejor forma de buscar los productos.</p>
          <p>El proyecto se ha realizado con fines educativos, para poner en practica conocimientos de <Link><a href="https://www.interaction-design.org/literature/topics/ux-design" rel="noopener noreferrer" target="_blank">UX</a></Link>, <Link><a href="https://es.reactjs.org/" rel="noopener noreferrer" target="_blank">Programación(React)</a></Link> y probar <Link><a href="https://react-spectrum.adobe.com/" rel="noopener noreferrer" target="_blank">React Spectrum</a></Link>. El autor no tiene ninguna relación con <Link><a href="https://www.cenabast.cl/" rel="noopener noreferrer" target="_blank">CENABAST</a></Link> o el Gobierno de Chile.</p>
          <p>Buscador diseñado y desarrollado por <Link><a href="https://antunez.design" rel="noopener noreferrer" target="_blank">Mauricio Antúnez</a></Link>.</p>
        </Text>
      </Flex> 
  </Provider>
  );
}

export default App;
