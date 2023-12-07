import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home'
import Genre from './genre'
import Search from './search'
import Main from './main'

const Pages = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/genre' and element={<Genre />} />
        <Route path='/:name' and element={<Main />} />
        <Route path='/genre/:name' and element={<Search />} />
    </Routes>
  )
}

export default Pages
