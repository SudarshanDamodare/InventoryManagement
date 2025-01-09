import { Button, Switch } from '@mui/material';
import { ChangeEvent } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { StoreType } from '../redux/store';

const Header = () => {
  const role = useSelector((state: StoreType) => state.inventory.role);
  const dispatch = useDispatch();

  const handleToggle = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'TOGGLE_ROLE' });
  }

  const handleLogout = () => {
    // Add logout logic here
    console.log('Logout');
  };
  return (
    <div className='header'>
      <div>
        <span>admin</span>
        <Switch
          checked={role === 'user'}
          onChange={handleToggle}
          color='default'
          sx={{
            '& .MuiSwitch-track': {
              backgroundColor: role === 'user' ? '#4caf50' : '#d3d3d3',
            },
          }}
        />
        <span>user</span>
      </div>
      <Button color='inherit' onClick={handleLogout}>
        <LogoutIcon />
      </Button>
    </div>
  );
};

export default Header;
