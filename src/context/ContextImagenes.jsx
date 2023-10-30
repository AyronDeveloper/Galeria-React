import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext({
    imagenes:[],
    createImagen:(imagen)=>{},
    deleteImagen:(id)=>{}
})

const ContextImagenes = ({children}) => {

    const[imagenes, setImagenes]=useState([])

    const createImagen=(imagen)=>{
        const temp=[...imagenes]
        temp.push(imagen)
        setImagenes(temp)
    }

    const deleteImagen=(id)=>{
        const eliminarImagen=imagenes.filter((imagen)=>imagen.id!==id)
        setImagenes(eliminarImagen)
    }


  return (
    <AppContext.Provider value={{
        imagenes,
        createImagen,
        deleteImagen
    }}>{children}</AppContext.Provider>
  )
}

export default ContextImagenes

export const useContextImagenes=()=>{
    return useContext(AppContext)
}
