import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addCart } from '../../redux/actions/cart.action'
import { Header, Card, Image, Button } from 'semantic-ui-react'
import currencyFormatter from 'currency-formatter'

const ProductCardComponent = ({productDetail, addProduct}) => {
  return (
    <Card className="product-card">
      {/* Product Image */}
      <Image src={productDetail.imageUrl} wrapped ui={false} />

      {/* Add to Cart */}
      {productDetail.quantityAvailable ? (
        <Button className="add-to-cart" onClick={() => addProduct(productDetail)}
          color='teal' size='mini'>
          Add to Cart
        </Button>
      ):(
        <Button className="sold-out" color="grey" size='mini'>Sold Out</Button>
      )}

      {/* Product Name */}
      <Card.Content>
        <Card.Header>
          <Header as='h6'>{productDetail.name}</Header>
        </Card.Header>
      </Card.Content>

      {/* Price */}
      <Card.Content extra>
        <div style={{textAlign: 'center'}}>
          { productDetail.retailPrice !== 0 && (
            <span id="retail-price" style={{textDecoration: 'line-through'}}>
              {currencyFormatter.format(productDetail.retailPrice, { code: 'USD' })}
            </span>
          )}
        </div>
        <div style={{textAlign: 'center'}}>
          <span style={{fontSize: 18}} id="sales-price">
            {currencyFormatter.format(productDetail.salePrice, { code: 'USD' })}
          </span>
        </div>
      </Card.Content>
    </Card>
  )
}

const mapStateToProps = state => {
  return { cart: state.cart }
}

const mapDispatchToProps = dispatch => {
  return {
    addProduct: product => {
      product.qty = 1
      dispatch(addCart(product))
    }
  }
}

ProductCardComponent.propTypes = {
  data: PropTypes.object
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCardComponent)
