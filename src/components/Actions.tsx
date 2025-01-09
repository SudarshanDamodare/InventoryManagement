import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import DeleteIcon from '@mui/icons-material/Delete';
import { Product } from '../redux/inventoryReducer';
import { useDispatch, useSelector } from 'react-redux';
import { StoreType } from '../redux/store';
import { IconButton } from '@mui/material';
import EditModal from './EditModal';

type ActionsProps = {
  product: Product;
};

const disableIconColor = '#808080';
const Actions = (props: ActionsProps) => {
  const { role } = useSelector((state: StoreType) => state.inventory);
  const disabled = role === 'user';
  const { product } = props;
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const toggleProduct = (enable: boolean) => {
    dispatch({ type: 'UPDATE_PRODUCT', payload: { ...product, enable } });
  };

  return (
    <>
      <div className={`d-flex ${disabled ? 'disabled' : ''}`}>
        <IconButton>
          <EditIcon
            sx={{
              color: disabled || !product.enable ? disableIconColor : '#387C21',
            }}
            onClick={() => setOpen(true)}
          />
        </IconButton>
        <IconButton>
          {product.enable ? (
            <VisibilityIcon
              onClick={() => toggleProduct(false)}
              sx={{ color: disabled ? disableIconColor : '#BF93CE' }}
            />
          ) : (
            <VisibilityOffIcon
              onClick={() => toggleProduct(true)}
              sx={{ color: disabled ? disableIconColor : '#BF93CE' }}
            />
          )}
        </IconButton>
        <IconButton onClick={() => dispatch({ type: 'DELETE_PRODUCT', payload: product })}>
          <DeleteIcon sx={{ color: disabled ? disableIconColor : '#EA3323' }} />
        </IconButton>
      </div>
      <EditModal open={open} setOpen={setOpen} product={product} />
    </>
  );
};

export default Actions;
