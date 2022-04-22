
import './App.css';
// import { useState, createContext } from 'react'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './Context/CartContext'
import { NotificationProvider } from './notification/notification'

const App = () => {
    return (
        <div className="App">
            <NotificationProvider>
                <CartContextProvider>          
                    <BrowserRouter>
                        <NavBar />
                        <Routes>
                            <Route path='/' element={<ItemListContainer greeting={'Hola Coder'}/>}/>
                            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Hola Coder'}/>} />
                            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
                            <Route path='/cart' element={<Cart />} />
                        </Routes>
                    </BrowserRouter>
                </CartContextProvider>
            </NotificationProvider>
        </div>
    );
}

//React.createElement('Avatar', { className: "Avatar" }, [])

export default App;