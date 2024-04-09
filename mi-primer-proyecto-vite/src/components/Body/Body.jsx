import './Body.css';

function Body({nombre}){
    return(
        <>
            <div class="p-3 mb-2 text-white shadow rounded" id="inicio">
                <p class="display-1"> Bienvenido {nombre} </p    >

            </div>        
        </>
    )
}

export default Body