import{BrowserRouter,Routes,Route}from "react-router-dom"
import Home from "./pages/Home/inndex.jsx"; 
import Posts from "./pages/Posts/innndex.jsx"; 
import SinglePost from "./pages/SinglePost/singlepost.jsx"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/Posts"element={<Posts/>}/>
      <Route path="/Posts/:id"element={<SinglePost/>}/>
    </Routes>
    </BrowserRouter>
  );
}
export default App;
