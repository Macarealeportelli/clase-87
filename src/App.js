import './App.css';
import Tarjeta from './components/Tarjeta';

const App=(props)=> {

  console.log(props)
  return (
   <div>
     <Tarjeta nombre="sillon" precio="$ 50.000"/>
     <Tarjeta nombre="silla"  precio="$ 5.600"/>
     <Tarjeta nombre="mesa"  precio="$ 18.000"/>
     <Tarjeta nombre="banqueta"  precio="$ 3.400"/>
     <Tarjeta nombre="mesa ratona"  precio="$ 6.500"/>
   </div>
  );
}

export default App;
