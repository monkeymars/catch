import React from 'react'
import { Header, Grid, Icon } from 'semantic-ui-react'

const ShoppingCartComponent = () => {
  return (
    <>
      <Grid container>
        <Grid.Column width={16}>
          <Header as='h3' disabled>Shopping Cart</Header>
        </Grid.Column>
        <Grid.Column width={3}>
          [1]
        </Grid.Column>
        <Grid.Column width={9}>
          [Product Name]
          <div style={{marginTop: 8}}>
            <span style={{marginLeft: 8}}><Icon name="plus circle"/></span>
            <span style={{marginLeft: 8}}><Icon name="minus circle"/></span>
            <span style={{marginLeft: 8}}><Icon name="remove circle"/></span>
          </div>
        </Grid.Column>
        <Grid.Column width={4}>
          [price]
        </Grid.Column>
      </Grid>
    </>
  )
}

export default ShoppingCartComponent