import { useRoutes } from 'react-router-dom';
import './App.css';
import Footer from './components/common/footer/Footer';
import Header from './components/common/header/Header';
import routes from './routes';

function App() {
  const elements = useRoutes(routes);
  return (
    <div className="App">
      <Header/>
      {elements}
      
      <Footer/>
      
    </div>
  );
}

export default App;
