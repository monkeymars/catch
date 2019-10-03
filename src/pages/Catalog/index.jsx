import React from 'react'
import ListHeading from './components/ListHeading'
import { Grid } from 'semantic-ui-react'

const CatalogPageIndex = () => {
  return (
    <>
      <Grid container>
        <Grid.Column>
          <ListHeading/>
        </Grid.Column>
      </Grid>
    </>
  )
}

export default CatalogPageIndex