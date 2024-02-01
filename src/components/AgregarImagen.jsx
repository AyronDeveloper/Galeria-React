import React, { useState } from 'react'
import { useContextImagenes } from '../context/ContextImagenes'
import { Link, useNavigate } from 'react-router-dom'
import {MdOutlineAddPhotoAlternate} from "react-icons/md"
import {VscAdd} from "react-icons/vsc"
import { IoAlertCircleOutline } from "react-icons/io5"
import Logos from './Logos'
import sinimg from '../img/sinimg.jpg'

const AgregarImagen = () => {
  const invocarImagenes=useContextImagenes()

  const [imagen, setImagen]=useState("")
  const [imagenError, setImagenError]=useState("")
  const [descripcion, setDescripcion]=useState("")
  const navigate=useNavigate()

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
    if(imagen!=""){
      setImagenError("")
      const nuevaImagen={
        id:crypto.randomUUID(),
        imagen: imagen,
        descripcion: descripcion
      }
  
      invocarImagenes.createImagen(nuevaImagen)
      navigate("/")
    }else{
      setImagenError("Elije una imagen")
    }
  }

  return (
    <main>
      <Logos/>
      <div>
        <div className='app__title'>Agrega una nueva imagen</div>
      </div>
      <div className='container__form'>
        <form onSubmit={handleSubmit} className='form__image_add'>
            <div className='form__input'>
              <label className='form__label_img' htmlFor="foto"><MdOutlineAddPhotoAlternate className='label__icon'/> <span>Imagen</span></label>
              <input className='form__input_img' type="file" id='foto' onChange={handleChangeFile} accept='image/*'/>
            </div>
            <div className='container__prev_img'>{!!imagen ? <img className='img__prev' loading='lazy' src={imagen}/>:<img className='img__prev' loading='lazy' src={sinimg} alt='img_prev'/>}</div>
            {imagenError!=""?<div className='error'><IoAlertCircleOutline className='error__ico'/> <span className='error__text'>{imagenError}</span></div>:""}
            <div className='form__input'>
              <label className="form__label" htmlFor="descripcion">Descripcion (opcional)</label>
              <textarea className='form__textarea' id="descripcion" onChange={handleChange} placeholder='Que nos quiere decir tu imagen' value={descripcion}></textarea>
            </div>
            <div className='container__btn_add'>
              <button className='btn__add'>
                <span className='btn__text'>Agregar Album</span> 
                <span className='btn__ico'><VscAdd/></span>
              </button>
            </div>
        </form>
        <div className="container__back">
          <Link to={"/"} className='btn__back'>Atras</Link>
        </div>
      </div>
    </main>
  )
}

export default AgregarImagen
