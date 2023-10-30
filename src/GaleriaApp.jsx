import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IndexGaleria from './components/IndexGaleria'
import AgregarImagen from './components/AgregarImagen'
import ContextImagenes from './context/ContextImagenes'
import "./style/app.css"

const GaleriaApp = () => {
  return (
    <ContextImagenes>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<IndexGaleria/>}/>
              <Route path='/agregar' element={<AgregarImagen/>}/>
          </Routes>
      </BrowserRouter>
    </ContextImagenes>
  )
}

export default GaleriaApp