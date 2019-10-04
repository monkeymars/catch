import React from 'react';
import PropTypes from 'prop-types'
import { Header } from 'semantic-ui-react'

const ListHeadingComponent = metaData => {
  return (
    <Header as='h3' disabled>Showing results for {'"{{Query}}"'}
      <Header.Subheader>
        <div>Page 1 of 15</div>
        <div>Showing 15 of 30</div>
      </Header.Subheader>
    </Header>
  )
}

ListHeadingComponent.propTypes = {
  metaData: PropTypes.object.isRequired
}

export default ListHeadingComponent