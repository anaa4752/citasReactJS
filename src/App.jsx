import { useState } from 'react';
import Formulario from './components/Formulario';
import './css/main.css';
import Paciente from './components/Paciente.jsx';
import './css/paciente.css';

function App() {
  const[modalVisible,setmodalVisible]=useState(false);
  const [pacientes, setPacientes] = useState([]);
  //Para pasar estados de un componente  padre a hijo los pasamos como props 
  // ex. setmodalVisible={setmodalVisible} y en el componente hijo lo recibimos como props {setmodalVisible}

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

        {pacientes.map((paciente) => (
            <Paciente //le pasamos los argumentos a traves de props;    los argumentos 
              setModalVisible={setmodalVisible}
              pacientes={pacientes}
              paciente={paciente}
              key={paciente.id} //le pasamos el id de cada paciente para que react pueda identificarlo y no se repita
            />
          ))}

        
      {modalVisible && (//la variable se inicializa en false al momento de mandarlo a llamar lo que es aqui en esta condicion ya se valida para que se muestre
        <div className='model-Overlay' role='dialog' aria-modal="true">
        <div className='modal-Content'>
          <Formulario 
          modalVisible={modalVisible}
          setModalVisible={setmodalVisible}
          pacientes={pacientes}
          setPacientes={setPacientes}

          />
        </div>
      </div>
      )}
      
    </main>
  )
}

export default App
