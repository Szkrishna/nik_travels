/* eslint-disable no-unused-vars */
import React from 'react'
import Home from "./pages/Home"
import Layout from './pages/Layout'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Blogs from './pages/Blog'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App