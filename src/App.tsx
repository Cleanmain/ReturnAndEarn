import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import {
  Circularity,
  Customers,
  Demo,
  Development,
  Home,
  Ikea,
  Problem,
  References,
  Solution,
  SustainabilityGoals,
  Team,
} from './pages/Pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/problem" element={<Problem />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/ikea" element={<Ikea />} />
          <Route path="/sustainability-goals" element={<SustainabilityGoals />} />
          <Route path="/circularity" element={<Circularity />} />
          <Route path="/development" element={<Development />} />
          <Route path="/team" element={<Team />} />
          <Route path="/references" element={<References />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
