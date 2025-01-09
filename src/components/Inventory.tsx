import { Typography } from '@mui/material'
import React from 'react'
import Header from './Header'
import Widgets from './Widgets'
import ListComponent from './ListComponent'

const Inventory = () => {
  return (
    <div className='inventory-container'>
      <Header />
      <Typography variant='h4'>Inventory Stats</Typography>
      <Widgets />
      <ListComponent />
    </div>
  )
}

export default Inventory