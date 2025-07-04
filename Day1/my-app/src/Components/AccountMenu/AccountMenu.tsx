import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import type { Subscription } from 'rxjs';
import { UserService } from '../../Services/UserService';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';


export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [username,setUsername] = React.useState<string|null>("null");
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const {user,logout} = useAuth();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  React.useEffect(()=>{
    const sub:Subscription = UserService.user$.subscribe(setUsername)
    setUsername(user)

    return ()=>sub.unsubscribe();
  },[user])
  const handleNavigate=()=>{
    navigate('first')
  }
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Typography sx={{ minWidth: 100 }}>
          <Link to="./login">Login</Link>
        </Typography>
        <Typography sx={{ minWidth: 100 }}>
          <Link to="/menu/products">Products</Link>
        </Typography>
        <Typography sx={{ minWidth: 100 }}>
          <Link to="first">First</Link>
        </Typography>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile -{username}
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account 
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
         
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
          
          </ListItemIcon>
          <span onClick={handleNavigate}>Settings</span>
        </MenuItem>
        <MenuItem onClick={logout}>
         
          Logout
        </MenuItem>
      </Menu>
      <Outlet/>
    </React.Fragment>
  );
}