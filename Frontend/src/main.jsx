
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./App.css"
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './StoreContext/StoreContext.jsx'
createRoot(document.getElementById('root')).render(
   <BrowserRouter>
      <StoreContextProvider>
         <App />
      </StoreContextProvider>
   </BrowserRouter>

)
