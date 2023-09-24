import {React , useState } from 'react'
import { Drawer } from '@mui/material';
import SidebarContents from './SidebarContents';
import ComposeMail from './ComposeMail';
////////////////////////////////////////////////////

///////////////////////////MAIN FUNCTION STARTS/////////////////////////////////
const Sidebar = ( { toggleSidebar }) => {

  const [ composeBtn, setComposeBtn ] = useState(false);

////////////////////////////////JSX PART STARTS//////////////////////////////////////////
  return (
    <>
        <Drawer 
        anchor='left'
        hideBackdrop={true}
        open={toggleSidebar}
        ModalProps={{keepMounted:'true'}}
        variant='persistent'
        sx={{
          '& .MuiDrawer-paper':{
             padding:'0px 10px 0px 0px',
                height:'calc(100vh-64px)',
                width:250,
                marginTop:'64px',
                background:'#F6F8FC',
                borderRight:'none',
           }
        }}
        >
          {/* Sidebar contents, inbox,sent,drafts */}
        <SidebarContents setComposeBtn={setComposeBtn}/>
        </Drawer>

        {/* Compose Mail Compnent which is located at Sidebar */}
        <ComposeMail setComposeBtn={setComposeBtn} composeBtn={composeBtn}/>
  
    </>
  )
}

export default Sidebar