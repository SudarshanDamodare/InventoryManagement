import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { Product } from '../redux/inventoryReducer';
import { useDispatch } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';

type EditModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  product: Product;
};

const EditModal = (props: EditModalProps) => {
  const dispatch = useDispatch();
  const { open, setOpen, product } = props;

  const handleClose = () => setOpen(false);
  const [form, setForm] = useState(product);

  const handleChange = (key: string, value: string) =>
    setForm({ ...form, [key]: value });

  const handleSubmit = () => {
    dispatch({ type: 'UPDATE_PRODUCT', payload: form });
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          backgroundColor: '#243325',
          color: 'white',
          borderRadius: '10px',
        },
      }}
    >
      <DialogTitle>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'start',
          }}
        >
          <div>
            <div style={{ fontSize: '2rem' }}>Edit Product</div>
            <div>{product.name}</div>
          </div>
          <IconButton onClick={handleClose} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              margin='dense'
              label='Category'
              name='category'
              value={form.category}
              onChange={e => handleChange('category', e.target.value)}
              fullWidth
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{ style: { color: 'white' } }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin='dense'
              label='Price'
              name='price'
              value={form.price}
              onChange={e => handleChange('price', e.target.value)}
              fullWidth
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{ style: { color: 'white' } }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin='dense'
              label='Quantity'
              name='quantity'
              value={form.quantity}
              onChange={e => handleChange('quantity', e.target.value)}
              fullWidth
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{ style: { color: 'white' } }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin='dense'
              label='Value'
              name='value'
              value={form.value}
              onChange={e => handleChange('value', e.target.value)}
              fullWidth
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{ style: { color: 'white' } }}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='primary'>
          Cancel
        </Button>
        <Button onClick={handleSubmit} color='primary'>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditModal;
