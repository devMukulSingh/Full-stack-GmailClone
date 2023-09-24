import { Suspense, useState } from 'react';
import Header from '../components/Header';
import Sidebar from "../components/Sidebar";
import { Box} from '@mui/material';
import { Outlet } from 'react-router-dom';
import SuspenseLoader from '../components/Commons/SuspenseLoader';
/////////////////////////////////////////////

////////////////////////JSX PART///////////////////////////////
const Main = () => {
  const[ toggleSidebar , setToggleSidebar ] = useState(true);
  return (
    <>  
    <Box>
        <Header setToggleSidebar={setToggleSidebar}/>
        <Sidebar toggleSidebar = {toggleSidebar} />
        <Suspense fallback= {< SuspenseLoader/>}>
          <Outlet context = {{ toggleSidebar }}/>
        </Suspense>
    </Box>
    </>
  )
}

export default Main