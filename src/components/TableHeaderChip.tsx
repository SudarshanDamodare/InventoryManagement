import React from 'react'

type TableHeaderChipProps = {
  title: string
}
const TableHeaderChip = (props: TableHeaderChipProps) => {
  const { title } = props;
  return (
    <div className='chip'>{title}</div>
  )
}

export default TableHeaderChip