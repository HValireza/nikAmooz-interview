import './App.css'
import { QueryClient,QueryClientProvider } from 'react-query';
import ReduxProvider from './redux/provider';
import HomePage from './pages/homePage';

const queryClient =new QueryClient();
function App() {


  return (
    <ReduxProvider>
      <QueryClientProvider client={queryClient}>
        <HomePage/>
      </QueryClientProvider>
    </ReduxProvider>
  )
}

export default App
