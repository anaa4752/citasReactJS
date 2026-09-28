import { useState } from 'react'
import Formulario from './components/Formulario'
import './css/main.css'

function App() {
  const[initialState,setState]=useState("Hola Mundo");
  const[modalVisible,setmodalVisible]=useState(false);
  return (
    <main className="container">
      <h1 className='title'>
        Administrador de Citas <span className='titleBold'>Veterinario</span></h1> 
      
      <button
        className='btn-nueva-cita'
        onClick={()=> setmodalVisible(true)}
      >
      <span className='btn-nueva-cita-texto'>Nueva Cita</span>
      </button>
      {modalVisible && (//la variable se inicializa en false al momento de mandarlo a llamar lo que es aqui en esta condicion ya se valida para que se muestre
        <div className='model-Overlay' role='dialog' aria-modal="true">
        <div className='modal-Content'>
          <Formulario 
          modalVisible={modalVisible}
          setModalVisible={setmodalVisible}
          />
        </div>
      </div>
      )}
      
    </main>
  )
}

export default App
