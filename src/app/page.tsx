'use client'; // Use to run third party library
import { Box, Grid } from "@mui/material"

// Local Component
import Navbar from "../app/component/navbar/Navbar"
import Main from "../Main"

// icon
import { IoIosChatbubbles } from "react-icons/io";

export default function Home() {


  return (
    <>
      <Box sx={{ background: '#D9D9D9', position: "relative", height: "auto", minHeight: "100vh"}}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Grid>
              <Navbar />
            </Grid>
          </Grid>
          <Grid item xs={9}>
            <Main />
          </Grid>
          <Grid item xs={1} sx={{ display: "flex", alignItems: 'end', position: 'relative' }}>
            <Grid onClick={() => alert("Chat is not active")} sx={{ background: "#69AC80", position: "fixed", bottom: '10px', height: "80px", width: "80px", borderRadius: "50%", cursor: "pointer", display: "flex", justifyContent: 'center', alignItems: 'center' }}>
              <IoIosChatbubbles style={{ color: "#fff", fontSize: '60px' }} />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
