import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Main from "./pages/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

// import 나의 메인 페이지 Component 불러오기

/// Component들이 모이는 App.js

function App() {
  return (
    <Router>
      <Header />
      <Route path="/">
        <Main />
      </Route>
      <Footer />
    </Router>
  );
}

export default App;
