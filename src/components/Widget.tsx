import { Card } from '@mui/material';
import React from 'react';

type WidgetProps = {
  icon: React.ReactNode;
  title: string;
  value: number;
};
const Widget = (props: WidgetProps) => {
  const { icon, title, value } = props;

  return (
    <Card
      className='widget'
      sx={{ backgroundColor: '#243325', color: '#fff', borderRadius: '10px' }}
    >
      <div className='d-flex p-2'>
        {icon}
        <div className='flex-grow-1' style={{ marginLeft: '1rem' }}>
          <div className='title'>{title}</div>
          <div className='value'>{value}</div>
        </div>
      </div>
    </Card>
  );
};

export default Widget;
