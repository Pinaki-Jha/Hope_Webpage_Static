import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ReadHope from "./pages/ReadHope";
import Page404 from "./pages/Page404";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Comic/Hope/Read" element={<ReadHope/>}/>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
