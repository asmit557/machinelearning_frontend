import { createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import { useMemo } from "react"
import { themeSettings } from "./theme"
import { BrowserRouter, Routes,Route} from "react-router-dom";
import {Box} from "@mui/material";
import Navbar from "./scenes/navbar";
import Prediction from "./scenes/predictions/Prediction"
import Dashboard from "./scenes/dashboard/Dashboard";
function App() {
  console.log("hello");
  const theme = useMemo(()=>createTheme(themeSettings),[]);

  return (
    <div className='app'>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
           <Navbar/>
           <Routes>
               <Route path="/" element ={<Dashboard/>}/>
               <Route path="/predictions"
                element={<Prediction/>}/>
            </Routes> 
        </Box>
        </ThemeProvider>
      </BrowserRouter>
      
    </div> 
  )
}

export default App
