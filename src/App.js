import AppProvider from './contexts/appcontext';
import RotaPrincipal from './components/routes/RotaPrincipal';
function App() {
  return (
    <AppProvider>
      <RotaPrincipal />
    </AppProvider>
  );
}

export default App;
