import React from 'react'
import { Link } from 'react-router-dom'
import { useContextImagenes } from '../context/ContextImagenes'
import Logos from './Logos'
import {MdDelete} from "react-icons/md"
import {BsImages} from "react-icons/bs"

const IndexGaleria = () => {

  const invocarImagenes=useContextImagenes()

  const handleClickEliminar=(id)=>{
    invocarImagenes.deleteImagen(id)
  }

  return (
    <main>
      <Logos/>
      <div className='app__title'>Album de Foto con React</div>
      <div className='container__add'>
        <Link to={"/agregar"} className='add__link'>Nueva Imagen</Link>
      </div>
      {invocarImagenes.imagenes==""?
      <div className='container__notimg'>
        <span className='notimg__text'>No tienes imagenes</span>
        <span className='notimg__text'><BsImages/></span>
      </div>
      :
      <div className='container__general'>
        {invocarImagenes.imagenes.map(imagen=>(
          <div className='container__image' key={imagen.id}>
            <img className='image__img' src={imagen.imagen} alt="img" />
            <div className='image__info'>
              <button className='image__delete' onClick={()=>handleClickEliminar(imagen.id)}><MdDelete className='delete__ico'/></button>
              <div className='image__description'>{imagen.descripcion}</div>
            </div>
          </div>
        ))}
      </div>
      }
    </main>
  )
}

export default IndexGaleria
