import React, { useState, useEffect } from 'react'
import ProductCard from '../../components/Productard'
import ListHeading from './components/ListHeading'
import ShoppingCartComponent from '../../components/ShoppingCart'
import { Grid } from 'semantic-ui-react'
import MOCK_DATA from '../../services/data.json'
console.log('MOCK_DATA', MOCK_DATA)

const CatalogPageIndex = () => {
  const [catalog, setCatalog] = useState([])
  const [metaData, setMetaData] = useState({
    page: '',
    pages: '',
    query: '',
    total: ''
  })
  async function fetchListProduct() {
    try {
      setCatalog(MOCK_DATA.results)
      setMetaData({
        ...metaData,
        page: MOCK_DATA.metadata.page,
        pages: MOCK_DATA.metadata.pages,
        total: MOCK_DATA.metadata.total,
        query: MOCK_DATA.metadata.query
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=> {
    fetchListProduct()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(metaData, catalog)

  return (
    <Grid container>
        {/* Heading */}
        <Grid.Column width={16}>
          <ListHeading metaData={metaData}/>
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