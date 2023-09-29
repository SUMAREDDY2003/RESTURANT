import React from 'react';
import Layout from '../components/Layout/Layout';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
const Contact = () => {
  return (
    <Layout>
      {/* <h1>Contact page</h1> */}
      <Box sx={{my:10,ml:10,"& h4":{fontWeight:"bold",mb:2}}}>
        <Typography variant='h4s'>
          Contact My Restaurant
        </Typography>
        <p>
        The map provides the exact location of the office, the "Meet Us" section includes a phone number and email for general inquiries, and the "Pitch Us" section includes a template that helps businesses submit their ideas directly to the company for consideration.
        </p>
      </Box>
      <Box sx={{m:3,width:"600px" , ml:10, "@media (max-width:600px)":{ width:"300px"}}}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                  <TableCell sx={{bgcolor:"black", color:"white",}} align='center' >Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                    <SupportAgentIcon  sx={{ color:'red', pt:1}}/> 6301941332(tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                 <TableCell>
                     <EmailIcon sx={{ color: "skyblue" ,pt:1}}/>lavanurusaisuma2003@gmail.com
                  </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                    <CallIcon  sx={{ color:'green', pt:1}}/> 6301941332
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
         </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
