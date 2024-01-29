import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query';

import store from './store/store'

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
      
         <App />
      </Provider>
      </QueryClientProvider>
    </BrowserRouter>
  
      </React.StrictMode> 
);
