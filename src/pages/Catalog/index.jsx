import React from 'react'
import ProductCard from '../../components/Productard'
import ListHeading from './components/ListHeading'
import { Grid } from 'semantic-ui-react'

const CatalogPageIndex = () => {
  return (
    <>
      <Grid container>
        {/* Heading */}
        <Grid.Column width={16}>
          <ListHeading/>
        </Grid.Column>

        {/* Catalog List */}
        <Grid.Column width={12}>
          <ProductCard/>
        </Grid.Column>

        {/* Sidebar */}
        <Grid.Column width={4}>
          Sidebar
        </Grid.Column>
      </Grid>
    </>
  )
}

export default CatalogPageIndex