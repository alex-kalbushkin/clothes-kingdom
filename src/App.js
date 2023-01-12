import { Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import Navigation from "./routes/navigation";
import Shop from "./routes/shop";
import Authentication from "./routes/authentication";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
