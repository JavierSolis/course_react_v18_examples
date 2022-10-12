import type {Props} from "./props";
import {useState} from "react";

const CommentNew=(model:Props)=>{
    //estado para indicar si se mostrará la validación de descripción vacío
    const [showWarning,setShowWarning] = useState(false)

    /**
     * función para el evento submit del formulario
     * recibe parámetro del evento del formulario
     * desde él se puede obtener los datos del formulario
     * en otros ejemplos cada input se registra como estado,
     * asumo que de esta forma es menos compleja
     */
    const handleSubmit=(e)=>{
        //previene que siga el flujo normal y controlarlo
        e.preventDefault()
        //prueba de poder leer el input por nombre
        console.log(e.target.comment.value)
        const comments = e.target.comment.value
        //valida que el comentario e vacío
        if(comments.trim().length === 0){
            //alert("Debe escribir un comentario")
            //se actualiza el estado de showWarning
            setShowWarning(true)
        }
        else{
            setShowWarning(false)
            //se llama al callback para informar que se agrego un nuevo comentario
            model.onAdd(1,e.target.comment.value)
        }

        //se resetea los valores del formulario
        e.target.reset()
    }

    return (
        <form
            //se nombra el formulario en caso necesité referenciarlo,
            //esto pasa cuando se tiene más de un formulario
            name="comment_new_form"

            //captura el evento del submit
            onSubmit={handleSubmit}

            //se usa {} para poder insertar el className
            //se usa {` para poder usar el string multiline
            //para que cambie según el tamaño se usa el sm:flex
            //es para condicionar el estilo flex cuando sea más grande que sm
            className={`
            grid grid-cols-12 sm:flex bg-white mt-[15px] mx-[15px] pt-[27px] rounded-[10px] shadow 
            ${model.className}
            `}>

            {/**
             se usa region NOMBRE_REGION y endregion NOMBRE_REGION
             para agrupar con la IDE
             */}
            {/*region comentario*/}
            <div className="col-span-12 text-left mx-[15px] mb-[15px] sm:flex-1">
                {/**
                 el name servirá en el evento del submit para obtener los valores
                 */}
                <textarea
                    name="comment"
                    className="w-full px-5 py-3  border-b-gray-400 border-[1px] rounded-md h-[100px]
                 focus:outline-none"
                    placeholder="Agregar un comentario..."
                />

                <div className="col-span-12 text-left">
                    <label className={`text-justify w-full text-red-700 text-sm ${showWarning?"":"hidden"}`} >
                        No puede agregar un comentario vacío
                    </label>
                </div>
            </div>

            {/*endregion comentario*/}
            {/*region foto*/}
            <div className="col-span-6 sm:order-first mb-[15px]">
                <img
                    className="
                h-[40px]
                w-[40px]
                ml-[15px]
                rounded-full
                " src="https://cdn.pixabay.com/photo/2017/12/01/08/02/paint-2990357_640.jpg"/>
            </div>
            {/*endregion foto*/}
            {/*region boton*/}
            <div className="col-span-6 text-right pr-[15px]  mb-[15px">
                {/**
                 Se usa el estilo hover: para indicar los estilos
                 cuando el mouse este encima
                 */}
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm  px-5 py-2.5 text-center">
                    SEND
                </button>
            </div>
            {/*endregion boton*/}

        </form>
    )
}
export default CommentNew