import { Route, Routes } from "react-router-dom";
import Home from './routes/Home';
import Products from './routes/Products'
import Edit from './routes/Edit'
import Layout from './components/Layout'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='product' element={<Products />} />
          <Route path='product/edit' element={<Edit />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
