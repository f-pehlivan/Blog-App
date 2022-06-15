import './App.css';
import AppRouter from './router/AppRouter';
import AuthContextProvider from './context/AuthContextProvider';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>

      <AppRouter/>

      </AuthContextProvider>
    </div>
  );
}

export default App;
