/* eslint-disable no-unused-vars */
import React from 'react'
import Layout from './pages/Layout'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App