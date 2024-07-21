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
import TestSwiper from './pages/TestSwipper';
import SignupPage from './pages/SignupPage';







function App() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="wrapper">
      <Header />
      <main>
        <Routes>
          <Route  path='/' element={
            <>
              <Home />
              <PageTitle title='Trang Chủ IPUN' />
            </>
          } />

          <Route path='/products' element={
            <>
              <Products />
              <PageTitle title='Sản Phẩm ' />
            </>
          }
          />
          {/* ROUTE PRODUCT BY CATEGORY_ID */}
          <Route  path='/products/:categoryId' element={
            <>
              <Products />
              <PageTitle title='Sản Phẩm' />
            </>
          }
          />


          <Route path='/product/:slug' element={
            <>
            <ProductDetail />
            <PageTitle title='name' />

            </>
            } />
          <Route path='/test' element={<TestSwiper />} />
          <Route path='/sign-in' element={<Signin />} />
          <Route path='/sign-up' element={<SignupPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
