import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNavbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div >
      <HeaderNavbar/>
      <ItemListContainer greeting="Nuestros Productos"/>
    </div>
  );
}

export default App;
