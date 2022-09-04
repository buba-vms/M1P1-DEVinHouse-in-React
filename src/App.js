import Home from './pages/Home';
import AppProvider from './contexts/appcontext';
function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}

export default App;
