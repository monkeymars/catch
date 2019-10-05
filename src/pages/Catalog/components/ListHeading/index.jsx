import React from 'react';
import PropTypes from 'prop-types'
import { Header } from 'semantic-ui-react'

const ListHeadingComponent = ({metaData}) => {
  return (
    <Header as='h3' disabled>Showing results for {metaData.query}
      <Header.Subheader>
        <div>Page {metaData.page} of {metaData.pages}</div>
        <div>Showing 36 of {metaData.total}</div>
      </Header.Subheader>
    </Header>
  )
}

ListHeadingComponent.propTypes = {
  data: PropTypes.object
}

export default ListHeadingComponent