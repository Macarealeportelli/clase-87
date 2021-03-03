import "./Tarjeta.css"


const Tarjeta = (props)=>{

    console.log(props)

    return(
        <article>
            <h2>Hola Soy un/a {props.nombre}</h2>
            <h4>{props.precio}</h4>
        </article>
    )
}

export default Tarjeta;