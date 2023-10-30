import React, { useState } from 'react'
import { useContextImagenes } from '../context/ContextImagenes'
import { Link, useNavigate } from 'react-router-dom'
import {MdOutlineAddPhotoAlternate} from "react-icons/md"
import {VscAdd} from "react-icons/vsc"
import Logos from './Logos'

const AgregarImagen = () => {

  const [imagen, setImagen]=useState("")
  const [descripcion, setDescripcion]=useState("")
  const navigate=useNavigate()
  const invocarImagenes=useContextImagenes()

  const handleChangeFile=(e)=>{
    const element = e.target
    const file = element.files[0]
    const reader = new FileReader()

    reader.readAsDataURL(file)

    reader.onloadend=()=>{
      setImagen(reader.result.toString())
    }
  }

  const handleChange=(e)=>{
    setDescripcion(e.target.value)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()

    const nuevaImagen={
      id:crypto.randomUUID(),
      imagen: imagen,
      descripcion: descripcion
    }

    invocarImagenes.createImagen(nuevaImagen)
    navigate("/")
  }

  return (
    <>
      <Logos/>
      <div>
        <div className='titulo'>Agrega una nueva imagen</div>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
            <div>
              <label className='labelImagen' htmlFor="foto"><MdOutlineAddPhotoAlternate/>Imagen</label>
              <input type="file" id='foto' onChange={handleChangeFile} accept='image/*'/>
            </div>
            <div className='contenedor-img-cargada'>{!!imagen ? <img className='img-cargada' loading='lazy' src={imagen}/>:""}</div>
            <div>
              <label className="titulo-descripcion"  htmlFor="descripcion">Descripcion</label>
              <textarea id="descripcion" cols="30" rows="10" onChange={handleChange} placeholder='Que nos quiere decir tu imagen'>{descripcion}</textarea>
            </div>
            <div className='cotenedoreAgregar'>
              <button className='btnAgregar'>
                <span className='span-boton'>Agregar Album</span> 
                <span className='span-svg'><VscAdd/></span>
              </button>
            </div>
        </form>
        <div className="contenedor-atras">
          <Link to={"/"} className='atras'>Atras</Link>
        </div>
      </div>
    </>
  )
}

export default AgregarImagen
