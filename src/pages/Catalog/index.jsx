import React from 'react'
import ProductCard from '../../components/Productard'
import ListHeading from './components/ListHeading'
import ShoppingCartComponent from '../../components/ShoppingCart'
import { Grid } from 'semantic-ui-react'

const CatalogPageIndex = () => {
  return (
    <Grid container>
        {/* Heading */}
        <Grid.Column width={16}>
          <ListHeading/>
        </Grid.Column>

        {/* Catalog List */}
        <Grid.Column width={12}>
          <Grid container>
            <Grid.Column width={4}>
              <ProductCard/>
            </Grid.Column>
          </Grid>
        </Grid.Column>

        {/* Sidebar */}
        <Grid.Column width={4}>
          <ShoppingCartComponent/>
        </Grid.Column>
      </Grid>
  )
}

export default CatalogPageIndex