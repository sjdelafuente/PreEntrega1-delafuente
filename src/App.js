import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HeaderNavbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {

  return (

    <BrowserRouter>
      <HeaderNavbar/>
      <Routes>
        <Route path="/" element={ <ItemListContainer /> }/>
        <Route path="/products/:categoryId" element={ <ItemListContainer /> }/>
        <Route path="/detail/:productId" element={ <ItemDetailContainer />} />
        <Route path="*" element={ <Navigate to={"/"}/> }/>
      </Routes>
    </BrowserRouter>
  
  )

}

export default App;
