import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import DeleteOutlineOutlined from '@mui/icons-material/DeleteOutlineOutlined';
import MailIcon from '@mui/icons-material/Mail';


export const SIDEBAR_DATA = [
    {
        name:'inbox',
        title:'Inbox',
        icon: ImageOutlinedIcon
    },
    {
        name:'starred',
        title:'Starred',
        icon: StarOutlineOutlinedIcon
    },
    {
        name:'sent',
        title:'Sent',
        icon: SendOutlinedIcon
    },

    {
        name:'draft',
        title:'Draft',
        icon: InsertDriveFileOutlinedIcon
    },
    {
        name:'bin',
        title:'Bin',
        icon: DeleteOutlineOutlined,
    },
    {
        name:'all mail',
        title:'All Mail',
        icon: MailIcon,
    }


]