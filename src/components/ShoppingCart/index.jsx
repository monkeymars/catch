import React from 'react'
import { Header, Grid, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import currencyFormatter from 'currency-formatter'

const ShoppingCartComponent = ({cart}) => {
  console.log(cart)
  return (
    <>
      <Grid container>
        <Grid.Column width={16}>
          <Header as='h3' disabled>Shopping Cart</Header>
        </Grid.Column>
      </Grid>
      <Grid container>
        {cart.listProduct.map(product => (
          <Grid container key={product.id}>
            <Grid.Column width={3}>
              {`${product.qty}x`}
            </Grid.Column>
            <Grid.Column width={9}>
              {product.name}
              <div className="btn-group__cart-actions m_t_sm">
                <span><Icon name="plus circle"/></span>
                <span><Icon name="minus circle"/></span>
                <span><Icon name="remove circle"/></span>
              </div>
            </Grid.Column>
            <Grid.Column width={4}>
              {currencyFormatter.format(product.salePrice, { code: 'USD' })}
            </Grid.Column>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addQty: () => {
      console.log('addQty')
    },
    removeQty: () => {
      console.log('addQty')
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartComponent)