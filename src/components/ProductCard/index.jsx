import React from 'react'
import PropTypes from 'prop-types'
import { Header, Card, Image, Button } from 'semantic-ui-react'

const ProductCardComponent = ({productDetail}) => {
  return (
    <Card>
      <Image src={productDetail.imageUrl} wrapped ui={false} />
      {productDetail.quantityAvailable ? (
        <Button color='teal' size='mini'>Add to Cart</Button>
      ):(
        <Button disabled size='mini'>Sold Out</Button>
      )}

      <Card.Content>
        <Card.Header>
          <Header as='h6'>{productDetail.name}</Header>
        </Card.Header>
      </Card.Content>
      <Card.Content extra>
        <div style={{textAlign: 'center'}}>
          { productDetail.retailPrice !== 0 && (
            <span id="retail-price" style={{textDecoration: 'line-through'}}>
              {productDetail.retailPrice}
            </span>
          )}
        </div>
        <div style={{textAlign: 'center'}}>
          <span style={{fontSize: 18}} id="sales-price">{productDetail.salePrice}</span>
        </div>
      </Card.Content>
    </Card>
  )
}

ProductCardComponent.propTypes = {
  data: PropTypes.object
}

export default ProductCardComponent
