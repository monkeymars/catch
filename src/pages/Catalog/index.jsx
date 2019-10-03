import React from 'react'
import ProductCard from '../../components/Productard'
import ListHeading from './components/ListHeading'
import { Grid } from 'semantic-ui-react'

const CatalogPageIndex = () => {
  return (
    <>
      <Grid container>
        <Grid.Column width={12}>
          <ListHeading/>
        </Grid.Column>
        <Grid.Column width={12}>
          <ProductCard/>
        </Grid.Column>
      </Grid>
    </>
  )
}

export default CatalogPageIndex