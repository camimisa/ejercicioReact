import './App.css';
import Tabla from './componentes/Tabla';

function App() {
  
  return (
    <div className="App">
      <Tabla alumnos = {[
            { nombre: 'Pedro',  apellido: 'Lopez', edad: 21,   direccion: "Monte grande", email: 'lopez@email.com', celular: 111111 ,  foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/12_avatar-256.png'},
            { nombre: 'Camila',  apellido: 'Garcia', edad: 20,   direccion: "Capital Federal", email: 'garcia@email.com', celular: 22222222 ,  foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-512.png'},
            { nombre: 'Carlos',  apellido: 'Perez', edad: 55,   direccion: "Lomas de zamora", email: 'perez@email.com', celular: 333333333 ,  foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/12_avatar-256.png'},
            { nombre: 'Jose',  apellido: 'Alvarez', edad: 40,   direccion: "Ezeiza", email: 'alvarez@email.com', celular: 4444444 ,  foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png'},
        ]}/>
    </div>
  );
}

export default App;
