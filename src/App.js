import './App.css';
import Estructura from './componentes/Estructura';

function App() {
  
  return (
    <div className="App">
      <Estructura alumnos = {[
            { nombre: 'Pedro',  apellido: 'Lopez',      edad: 23,   direccion: "Monte grande", email: 'nombre@email.com', celular: 111111 ,  foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/12_avatar-256.png'},
            { nombre: 'Pedro',  apellido: 'Lopez',      edad: 23,   direccion: "Monte grande", email: 'nombre@email.com', celular: 111111 ,  foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/12_avatar-256.png'},
            { nombre: 'Pedro',  apellido: 'Lopez',      edad: 23,   direccion: "Monte grande", email: 'nombre@email.com', celular: 111111 ,  foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/12_avatar-256.png'},
            { nombre: 'Pedro',  apellido: 'Lopez',      edad: 23,   direccion: "Monte grande", email: 'nombre@email.com', celular: 111111 ,  foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/12_avatar-256.png'},
        ]}/>
    </div>
  );
}

export default App;
