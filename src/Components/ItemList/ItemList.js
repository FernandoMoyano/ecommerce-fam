
import './ItemList.css'
import { memo } from 'react'
import Item from '../Item/Item'

const ItemList = ({products}) => {
    return (
        <ul className='ListGroup'>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </ul>
    )
}

export default memo(ItemList)