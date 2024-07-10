import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// css
import './assets/css/index.css'
import './assets/css/base.css'
import './assets/css/reponsive.css'
import './assets/css/reset.css'
import './assets/css/test.css'
// 
// Page
import Home from './pages/Home';
import Products from './pages/Products';

// component
import Header from "./components/Header"
import Footer from './components/Footer';
import PageTitle from './components/PageTitle';
import ProductDetail from './pages/ProductDetail';
import Signin from './pages/Signin';







function App() {
const {pathname} = useLocation()
useEffect(() => {
  window.scrollTo(0, 0);
}, [pathname]);

  return (
    <div className="wrapper">
      <Header />
      <main>
      <Routes>
        <Route index path='/' element={
          <>
          <Home/>
          <PageTitle title='Trang Chủ IPUN'/>
          </>
          } />
      
        <Route path='/products' element={
          <>
          <Products/>
          <PageTitle title='Sản Phẩm '/>
          </>
        }
        />
        <Route path='/products/:categoryId' element={
          <>
          <Products/>
          <PageTitle title='Sản Phẩm '/>
          </>
        }
        />
        <Route path='/product/:slug' element={<ProductDetail/>}/>
        <Route path='/sign-in' element={<Signin/>}/>
      </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
