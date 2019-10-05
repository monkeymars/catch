import React from 'react'
import { Header, Grid, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import currencyFormatter from 'currency-formatter'
import { addQty, removeQty, removeItem } from '../../redux/actions/cart.action'

const ShoppingCartComponent = ({
  cart,
  handleAddQty,
  handleRemoveQty,
  handleRemoveItem
}) => {
  const getTotal = () => {
    let total = 0
    cart.listProduct.forEach(product => {
      console.log(product)
      total = total + (product.salePrice * product.qty)
    });
    return total
  }
  return (
    <>
      <Grid container>
        <Grid.Column width={16}>
          <Header as='h3' disabled>Shopping Cart</Header>
        </Grid.Column>
      </Grid>
      <Grid container>
        {!cart.listProduct.length && (
          <Header as='h6'>You have no items in your cart.</Header>
        )}
        {cart.listProduct.map(product => (
          <Grid container key={product.id}>
            <Grid.Column width={3}>
              {`${product.qty}x`}
            </Grid.Column>
            <Grid.Column width={9}>
              {product.name}
              <div className="btn-group__cart-actions m_t_sm">
                <span>
                  <Icon onClick={()=>{
                    handleAddQty(product)
                  }} name="plus circle"/>
                </span>
                <span>
                  <Icon onClick={()=>{
                    if (product.qty > 1) {
                      handleRemoveQty(product)
                    } else {
                      handleRemoveItem(product)
                    }
                  }} name="minus circle"/>
                </span>
                <span>
                  <Icon onClick={()=>{
                    handleRemoveItem(product)
                  }} name="remove circle"/>
                </span>
              </div>
            </Grid.Column>
            <Grid.Column width={4}>
              {currencyFormatter.format(product.salePrice, { code: 'USD' })}
            </Grid.Column>
          </Grid>
        ))}
      </Grid>
      {cart.listProduct.length >= 1 && (
        <Grid container>
          <Grid.Column width={8}>
            <strong>Total</strong>
          </Grid.Column>
          <Grid.Column style={{textAlign: 'right'}} width={8}>
            <strong>{currencyFormatter.format(getTotal(), { code: 'USD' })}</strong>
          </Grid.Column>
        </Grid>
      )}
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
    handleAddQty: (product) => {
      dispatch(addQty(product))
    },
    handleRemoveQty: (product) => {
      dispatch(removeQty(product))
    },
    handleRemoveItem: (product) => {
      dispatch(removeItem(product))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartComponent)