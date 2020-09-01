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
      consultarTSV = async (urlCsv) => {
        const tsvdata = await fetch(urlCsv),
          info = await tsvdata.text().catch(error => {
            console.error(error)
          })
        let listProductos = []

        try {
          let infotsvList = info.split("\n")

          //Código producto Descripción del producto	Descripción completa del producto	Tipo de producto	Tipo de canasta	Fecha inicio abastecimiento	Tipo de Bases
          for (let index = 1; index < infotsvList.length; index++) {
            const element = infotsvList[index].split("\t");
            listProductos.push({
              codigo:element[0],
              descCorta:element[1],
              descLarga:element[2],
              tipoProducto:element[3],
              tipoCanasta:element[4],
              inicioAbastecimiento:element[5],
              tipoBases:element[6]
            })
          }
          setDatos(listProductos)
        } catch (e) {
          /* console.error(e) */
        }
      },
      wait = ms => new Promise(resolve => setTimeout(resolve, ms))

      useEffect(() => {
        switch (primeracarga) {
            case true:
                consultarTSV('./data/Listado.tsv')
                setPrimeracarga(false)
                break;                

            case false:
              let listResultado = []
              if (txtbusqueda.trim().length > 4) {
                datos.forEach(producto => {
                  try {
                    if(
                      producto.descCorta.includes(txtbusqueda.toUpperCase()) 
                      || producto.descLarga.includes(txtbusqueda.toUpperCase())
                      || producto.codigo.includes(txtbusqueda.toUpperCase())
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
        
    },[datos,filtrobusqueda,txtbusqueda])

  

  return (
  <Provider theme={defaultTheme} minHeight="100vh" >
      <Flex direction="column" gap="size-100" alignItems="center" marginX="1rem">
          <Buscador setTxtbusqueda={setTxtbusqueda}/>
          <p>{
          txtbusqueda.trim().length === 0 ? null:
          nroresultados === 0 ? 'No se encontraron productos':
          `Hemos encontrado ${nroresultados} ${nroresultados === 1 ? 'producto' : 'productos'}. `
          }
          </p>
          {nroresultados > 0 ? <strong>Para ver la descripción completa haz click sobre el nombre del producto</strong> : null}
        
          <Resultado resultadobusqueda={resultadobusqueda}/>
        
        <Text maxWidth="800px" width="100%" marginTop="2rem">
          <p>El documento con datos fue descargado desde la página <Link><a href="https://www.cenabast.cl/documentos/canasta-de-productos-cenabast/" rel="noopener noreferrer" target="_blank">Canasta de Productos</a></Link> el día 29 de Agosto de 2020, donde esta disponible de forma pública.  Para descargar la fuente de datos actualizada por favor dirigete a <Link><a href="https://www.cenabast.cl/documentos/canasta-de-productos-cenabast/" rel="noopener noreferrer" target="_blank">Canasta de Productos de CENABAST</a></Link>.</p>
          <p>El proyecto se ha realizado con fines educativos, para poner en practica conocimientos de <Link><a href="https://www.interaction-design.org/literature/topics/ux-design" rel="noopener noreferrer" target="_blank">UX</a></Link>, <Link><a href="https://es.reactjs.org/" rel="noopener noreferrer" target="_blank">Programación(React)</a></Link> y probar <Link><a href="https://react-spectrum.adobe.com/" rel="noopener noreferrer" target="_blank">React Spectrum</a></Link>. El autor no tiene ninguna relación con <Link><a href="https://www.cenabast.cl/" rel="noopener noreferrer" target="_blank">CENABAST</a></Link> o el Gobierno de Chile.</p>
          <p>Buscador diseñado y desarrollado por <Link><a href="https://antunez.design" rel="noopener noreferrer" target="_blank">Mauricio Antúnez</a></Link>.</p>
        </Text>
      </Flex> 
  </Provider>
  );
}

export default App;
