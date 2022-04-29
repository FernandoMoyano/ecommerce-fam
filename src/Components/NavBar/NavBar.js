import './NavBar.css'
import { useContext, useState, useEffect } from 'react'
import CartWidget from '../CartWidget/Cartwidget'
import { Link, NavLink } from 'react-router-dom'
import CartContext from '../../Context/CartContext'
import { getCategories } from '../../services/firebase/firestore' 
import { orderCategories } from './helpers'

const NavBar = () => {
    const [categories, setCategories] = useState([])

    const { getQuantity } = useContext(CartContext)

    useEffect(() => {
        getCategories().then(categories => {
            orderCategories(categories)
            setCategories(categories)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <nav className="NavBar" >
          <Link to='/'>
              <h3 className='titulo'>TODO-TECH</h3>
          </Link>
          <div className="Categories">
             

              <Link to='/category/monitores' className='Option'>monitores</Link>
              <Link to='/category/placas de video' className='Option'>placas de video</Link>
              <Link to='/category/butacas' className='Option'>butacas</Link>


          </div>
          <div>
            { getQuantity() > 0 && <CartWidget /> }
          </div>
        </nav>
    )
}

export default NavBar