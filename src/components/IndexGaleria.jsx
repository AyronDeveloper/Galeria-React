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
    <>
      <div className='titulo'>Album de Foto con React</div>
      <div className='contenedor-agregar'>
        <Link to={"/agregar"} className='boton agregar'>Nueva Imagen</Link>
      </div>
      {invocarImagenes.imagenes==""?
      <div className='separacion'>
        <div className='titulo'>No tienes imagenes</div>
        <div className='titulo'><BsImages/></div>
      </div>
      :
      <div className='contenedor-general'>
        {invocarImagenes.imagenes.map(imagen=>(
          <div className='contenedor-info' key={imagen.id}>
            <div className='contenedorDoble'>
              <img className='img' src={imagen.imagen} alt="" />
              <button className='btn-delete' onClick={()=>handleClickEliminar(imagen.id)}><MdDelete/></button>
            </div>
            <div className='descrip'>{imagen.descripcion}</div>
          </div>
        ))}
      </div>
      }
      <Logos/>
    </>
  )
}

export default IndexGaleria
