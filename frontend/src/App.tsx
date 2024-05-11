import { BrowserRouter } from 'react-router-dom'

import { Header } from './components/Header'
import { Options } from './components/Options'
import { GlobalStyles } from './styles/global'
import { Router } from './Router'


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Options />
        <Router />
        <GlobalStyles />
      </BrowserRouter>
    </>
  )
}

export default App
