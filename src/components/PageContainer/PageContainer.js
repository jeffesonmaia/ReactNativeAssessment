import React from 'react'

import ScrollContainer from '~/components/ScrollContainer/ScrollContainer'
import SafeArea from '~/components/SafeArea/SafeArea'
import { Container } from './styles'

const PageContainer = ({ children, refreshControl = null }) => (
  <SafeArea>
    <ScrollContainer refreshControl={refreshControl}>
      <Container>{children}</Container>
    </ScrollContainer>
  </SafeArea>
)

export default PageContainer
