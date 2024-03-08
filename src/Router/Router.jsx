import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"
import NotFound from "../Pages/NotFound/NotFound"
import Nav from "../components/Nav/Nav"
import Footer from "../components/Footer/Footer"
import React from 'react'

export default function Router() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}
