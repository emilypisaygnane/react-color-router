import './App.css';
import Layout from './Layout.jsx';
import { 
  Routes,
  Navigate,
  BrowserRouter as Router,
  useParams,
  Route
} from 'react-router-dom';

function RGB() {
  const { r, g, b } = useParams();

  return (
    <div className="fill" style={{ background: `rgb(${r}, ${g}, ${b})` }}>
      <p>{`rgb(${r}, ${g}, ${b})`}</p>
    </div>
  );
}

function App() {
  return <>

    <Router>
      <Layout />
      <Routes>
        <Route path="/" element={<Navigate to="/rgb/255/255/255" />} />
        <Route path="/rgb/:r/:g/:b" element={<RGB />} />
        <Route path="*" element={ <h1>Oopsies! We don;t have what you;re looking for!</h1> } />
      </Routes>
    </Router>
  </>;
}

export default App;
