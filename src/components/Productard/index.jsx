import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'semantic-ui-react'

const ProductCardComponent = data => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>Matthew</Card.Header>
        <Card.Meta>
          <span className='date'>Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <label>22 Friends</label>
      </Card.Content>
    </Card>
  )
}

ProductCardComponent.propTypes = {
  data: PropTypes.object.isRequired
}

export default ProductCardComponent
