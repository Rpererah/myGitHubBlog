import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { CardDetails } from './pages/CardDetails'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card-details" element={<CardDetails />} />
      </Routes>
    </BrowserRouter>
  )
}
