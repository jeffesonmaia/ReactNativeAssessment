import React from 'react'

import { Container } from './styles'

const ScrollContainer = ({ children, refreshControl }) => (
  <Container
    refreshControl={refreshControl}
  >
    {children}
  </Container>
)

export default ScrollContainer
