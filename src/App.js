import React from 'react'
import Navbar from './component/navbar'
import Pages from './component/pages'
import { BrowserRouter } from 'react-router-dom'
import Main from './component/main'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Pages />
      {/* <Main /> */}
    </BrowserRouter>
  )
}

export default App
