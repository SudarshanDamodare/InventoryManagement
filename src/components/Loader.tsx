import { Backdrop, CircularProgress } from '@mui/material';

type LoaderProps = {
  isLoading: boolean;
}; 
const Loader = (props: LoaderProps) => {
  return (
    <Backdrop
      sx={theme => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
      open={props.isLoading}
    >
      <CircularProgress color='inherit' />
    </Backdrop>
  );
};

export default Loader;
