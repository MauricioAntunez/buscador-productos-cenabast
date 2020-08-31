import React, {
  useState,
  useEffect,
  Fragment,
  Lazy,
  Suspense
} from 'react';

import logo from './logo.svg';
import './App.css';

const App = () => {
  const [datos, setDatos] = useState(false),
        [primeracarga, setPrimeracarga] = useState(true),
        [resultadobusqueda, setResultadobusqueda] = useState([]),
        [filtroresultado, setFiltroresultado] = useState({
          tipoProducto:null,
          tipoCanasta:null,
          tipoBases:null,
          inicioAbasteimiento:null
        }),
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
        switch (primeracarga) {
            case true:
                consultarTSV('./data/Listado.tsv')
                setPrimeracarga(false)
                break;
                

            case false:
                console.log(datos)
                break;
        
            default:
                break;
        }
        
    },[datos,filtroresultado])

    

  return (
    <div className="App">
      <Suspense>
        <Resultado data={data} />
      </Suspense>
    </div>
  );
}

export default App;
