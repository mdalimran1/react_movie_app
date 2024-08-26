
import { Box, Typography } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
const Error = () => {
  return (
    <Box sx={{backgroundColor:'#10141F',width:'100%',height:'100vh',display:'flex',alignItems:'center',justifyContent:'center' }}>
    
    <img src="/pnf.jpg" alt="error-img" style={{ width:'450px',height:'400px',objectFit:'cover' }}/>

    </Box>
  );
};

export default Error;
