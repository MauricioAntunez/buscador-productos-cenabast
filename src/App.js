import React, {
  useState,
  useEffect,
  Fragment,
  lazy,
  Suspense
} from 'react';
import {Provider, defaultTheme, View, Flex} from '@adobe/react-spectrum';
import Buscador from './Components/Buscador/Buscador';


const Resultado = lazy(() => import('./Components/Resultado/Resultado'));

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
          console.error(e)
        }
      },
      wait = ms => new Promise(resolve => setTimeout(resolve, ms))

      useEffect(() => {
        console.log("useEffect",datos,filtrobusqueda)
        switch (primeracarga) {
            case true:
                consultarTSV('./data/Listado.tsv')
                setPrimeracarga(false)
                break;                

            case false:
              console.log(false,datos,txtbusqueda,filtrobusqueda)
              let listResultado = []
              if (txtbusqueda.trim().length > 0) {
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
                    console.error(e)
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
  <Provider theme={defaultTheme}>
    <Flex direction="column" gap="size-100" alignItems="center">
        <Buscador setTxtbusqueda={setTxtbusqueda}/>
        <h3>{
        txtbusqueda.trim().length === 0 ? 'Ingresa el nombre de un producto para realizar la búsqueda':
        nroresultados === 0 ? 'No se encontraron productos':
        `Hemos encontrado ${nroresultados} ${nroresultados === 0 ? 'producto' : 'productos'}`
        }</h3>
      <Suspense fallback="<p>Cargando...</p>">
        <Resultado resultadobusqueda={resultadobusqueda}/>
      </Suspense>
    </Flex>
  </Provider>
  );
}

export default App;
