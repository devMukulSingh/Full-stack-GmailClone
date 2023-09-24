import { Box,styled, Button ,List ,ListItem} from '@mui/material'
import {React } from 'react';
import { useParams, NavLink } from "react-router-dom";
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { SIDEBAR_DATA } from '../config/sidebar.config';
import { routes } from '../routes/routes';
///////////////////////////////////////////////////////////////////////////

const ComposeBtn = styled(Button)({
    backgroundColor:'#C2E7FF',
    color:'black',
    borderRadius:'1rem',
    padding:'1rem',
    textTransform:'none',
    margin:'0.5rem',
    minWidth:100,
    width:140,
    letterSpacing:0.5,

    ' & > svg':{
        marginRight:'10px'
    },
    '&:hover':{
        backgroundColor:'#C2E7FF',
        boxShadow: '1px 1px 26px -14px rgba(0,0,0,0.75)',
    }
})

const ListItemStyled = styled(ListItem)({
    display:'flex',
    borderTopRightRadius: '50px',
    borderBottomRightRadius: '50px',
    '&:hover':{
        background:'#ECEFF1',
        cursor:'pointer',
    },
    '& > svg': {
        marginRight:15
    }
})

///////////////////////////////////////MAIN FUNCTIONS STARTS/////////////////////////////////////////////////////

const SidebarContents = ( {setComposeBtn} ) => {
    const{ type } = useParams();

    const handleComposeBtn = () => {
        setComposeBtn(true);
    }

///////////////////////////////////////////////////JSX PART STARTS/////////////////////////////////////////////////////////////////////////////////////    

  return (
    <>
    <Box>
        <ComposeBtn onClick={ () => handleComposeBtn()}>
            <CreateOutlinedIcon/>
            Compose
        </ComposeBtn>
        <List>
            {
                SIDEBAR_DATA.map( (options,index) => {
                    return(
                        <>
                            <NavLink to={ `${routes.emails.path}/${options.name}` } style={ {textDecoration:'none', color:'inherit'} }>
                                <ListItemStyled key={index}  style={ type ===options.name.toLowerCase() ? {
                                    background:'#D3E3FD'
                                } :{ }}>
                                    <options.icon fontSize='small'/> {options.title}
                                </ListItemStyled>
                            </NavLink>
                        </>
                    )
                })
            }
        </List>
    </Box>


    <Box>

    </Box>
    </>
  )
}

export default SidebarContents