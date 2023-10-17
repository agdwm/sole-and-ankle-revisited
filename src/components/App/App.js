import React from 'react'
import styled, { ThemeProvider } from 'styled-components/macro'

import { THEME as theme } from '../../constants'

import Header from '../Header'
import ShoeIndex from '../ShoeIndex'

const App = () => {
  const [sortId, setSortId] = React.useState('newest')

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </ThemeProvider>
  )
}

const Main = styled.main`
  padding: 64px 32px;

  @media ${props => props.theme.QUERIES.tabletAndSmaller} {
    padding: 48px 32px;
  }

  @media ${props => props.theme.QUERIES.phoneAndSmaller} {
    padding: 48px 16px;
  }
`

export default App
