import React, { useState } from 'react';
import { Grid, Box, ListItemText, ListItemButton, ListItem, Typography, List, Drawer, Button } from '@mui/material';

export default function Navbar() {
  const [num, setNum] = useState(0)
  const navClick = (index: any) => {
    setNum(index)
  }
  return (
    <Drawer
      variant="permanent"
    >
      <Box sx={{ overflow: 'auto', }}>
        <Grid sx={{ display: "flex", justifyContent: "center", padding: "20px 0 30px 0" }}>
          <Typography sx={{
            fontFamily: 'Lato',
            fontStyle: "italic",
            fontWeight: 800,
            fontSize: "35.4809px",
            lineHeight: "43px"
          }}>LODGN</Typography>
        </Grid>
        <Grid sx={{ display: "flex", justifyContent: "space-between", flexDirection: "column", height: "80vh" }}>
          <Grid>
            <List
              sx={{
                color: '#494949',
                fontSize: "20px",
                padding: '0 10px'
              }}>
              {['Current requests', 'Ongoing stays', 'Previous stays', 'Reports'].map((text, index) => (
                <ListItem key={text} disablePadding sx={{
                  borderBottom: '1px solid #D9D9D9'
                }}>
                  <ListItemButton onClick={() => navClick(index)}>
                    <ListItemText sx={{ color: index === num ? "#72AA83" : "#000" }} primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid sx={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
            <Grid>
              <Button variant="contained" sx={{
                textTransform: 'capitalize', background: "#44A16F", '&:hover': {
                  background: "#44A16F"
                }
              }}>Log - Out</Button>
              <Typography variant="body2" mt={2} color="text.secondary">
                Help-Desk:
              </Typography>
              <Typography variant="body2" color="text.secondary">786-874 9988</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Drawer>
  );
}