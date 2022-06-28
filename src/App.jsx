import { Routes, Route } from "solid-app-router"

import { Header } from "./components"
import { Home, Post } from "./pages"

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:slug" element={<Post />} />
    </Routes>  
    </>
  );
}

export default App;
