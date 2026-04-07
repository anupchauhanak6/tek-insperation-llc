import { useLocation } from 'react-router-dom';
import './App.css'
import { useEffect } from 'react';
import AppRoutes from './routes/AppRoutes';
import Header from './componetns/Header';
import Footer from './componetns/Footer';

/* Scroll to top on route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [pathname]);
  return null;
}

function App() {

  return (
    <div>
      <ScrollToTop />
      <Header />
      <main className="">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  )
}

export default App
