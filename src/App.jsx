import './assets/style.css' 
import MainForm from './pages/MainForm/MainForm.jsx';
import { Title, Label, Logo } from './components/component.jsx';

function App() {
  return (
    <div style={{ backgroundColor: '#e0e0e0', minHeight: '100vh' }}>
      {/* Render the MainForm component here */}
      <Title />
      <Label />
      <Logo />
      <MainForm />
    </div>
  );
}

export default App