import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductById } from '../../services/firebase/firestore'
import ItemDetail from '../itemDetail/itemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = ({addToCart, cart}) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        setLoading(true)

        getProductById(productId).then(prod => {
            setProduct(prod)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
        
    }, [productId])
    

    if(loading) {
        return <h1>Cargando...</h1>
    }

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} addToCart={addToCart} cart={cart}/>
        </div>
    )
}

export default ItemDetailContainer