import { AppBar,Box,InputBase,styled ,Toolbar} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { gmailLogo } from "../constants/constants";
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
///////////////////////////////////////////////////////////////////////////////////////////
const Navbar = styled(AppBar)({
    background:'#F6F8FC',
    boxShadow:'none',
    display:'flex',
    justifyContent:'space-between'
})

const NavLeft = styled(Box)`
    display:flex;
    align-items:center;
`
const LogoImg = styled('img')({
    marginLeft:'1rem',
})
const SearchWrapper = styled(Box)`
    display:flex;
    align-items:center;
    background-color:#EAF1FB;
    border-radius:30px;
    height:3rem;
    max-width:800px;
    min-width:300px;
    width:250vmin;
    justify-content:space-between;
    padding:0 15px;
    margin-left:11vmin;
    & > div {
        width:100%
    }
`
const HeaderIcons = styled(Box)`
    display:flex;
    justify-content:flex-end;
    width:100%;
    & > svg{
        margin-left:20px;
    }
`
///////////////////////////MAIN FUNCTION STARTS////////////////////////////////////////

const Header = ( { setToggleSidebar } ) => {
    
    //Hiding and showing the Sidebar using states on Click
    const handleToggleSidebar = () => {
        setToggleSidebar(prev => !prev);
    }

////////////////////////////////JSX PART STARTS//////////////////////////////////////////
  return (
    <div>
        <Navbar position="static"
        >
          <Toolbar>
            <NavLeft>
                <MenuIcon color='action' onClick={handleToggleSidebar}/>
                <LogoImg src={ gmailLogo } alt="logo"/>
            </NavLeft>
            <SearchWrapper> 
                <SearchIcon sx={{color:'#444746'}}/>
                    <InputBase sx={{ backgroundColor:'EAF1FB', padding:'0 10px'}} placeholder='Search Mail'/>
                <TuneIcon sx={{color:'#444746'}}/>
            </SearchWrapper>
            <HeaderIcons>
                <HelpOutlineOutlinedIcon sx={{color:'#444746'}}/>
                <SettingsOutlinedIcon sx={{color:'#444746'}}/>
                <AppsOutlinedIcon sx={{color:'#444746'}}/>
                <AccountCircleOutlinedIcon sx={{color:'#444746'}}/>
            </HeaderIcons>

          </Toolbar>
        </Navbar >
    
    </div>
  )
}

export default Header