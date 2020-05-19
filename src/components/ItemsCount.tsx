import React from 'react'
import Text from 'components/Text'

const ItemsCount = ({ items, size }) => {
    return (
        <Text>
            Showing {size} of {items.length} results
        </Text>
    )
}

export default ItemsCount
