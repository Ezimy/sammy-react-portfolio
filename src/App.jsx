import { Routes,Route } from 'react-router-dom';
import Layout from './assets/components/Layout';
import './App.scss'
import About from './assets/components/About';
import Home from './assets/components/Home';
function App(){
  return(
  <>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
    </Routes>
  </>
  )
}
export default App;