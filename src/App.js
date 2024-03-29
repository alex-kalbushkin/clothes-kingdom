import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import Navigation from './routes/navigation';
import Shop from './routes/shop';
import Authentication from './routes/authentication';
import Checkout from './routes/checkout';
import { useUserActions } from './store/user';

function App() {
  const { checkUserSession } = useUserActions();

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
