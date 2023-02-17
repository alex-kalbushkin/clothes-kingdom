import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import Navigation from './routes/navigation';
import Shop from './routes/shop';
import Authentication from './routes/authentication';
import Checkout from './routes/checkout';
import { useUserActions } from './store/user';
import {
  createUserDocFromAuth,
  onAuthStateChangedObserver,
} from './utils/firebase';

function App() {
  const { setCurrentUser } = useUserActions();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedObserver(async (user) => {
      if (user) {
        await createUserDocFromAuth(user);
      }

      setCurrentUser(user);
    });

    return unsubscribe;
  }, [setCurrentUser]);

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
