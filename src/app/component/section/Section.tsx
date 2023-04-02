import React from 'react'
import { Box, Grid, Typography } from '@mui/material'

// TypeScript
type user = {
    childComponent: React.ReactNode,
    data: any[]
};

const Section = ({ childComponent, data }: user) => {
    const peraStyle = {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "16.92px",
        lineHeight: "20px",
        letterSpacing: "-0.05em"
    }
    const heading = {
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "29.39px",
        lineHeight: "35px",
        letterSpacing: "-0.01em",
        color: "#48AF78"
    }

    return (
        <Box sx={{ padding: "20px 10px" }}>
            <Grid sx={{ display: 'flex', flexWrap: "wrap", margin: "0 20px" }}>
                <Grid mr={5}>
                    <Typography sx={heading}>St Judes Hospital</Typography>
                    <Typography sx={peraStyle} variant="body2" color="text.secondary">Sarasota,FL. 33178</Typography>
                </Grid>
                <Grid mr={5} sx={{ display: 'flex', position: 'relative' }}>
                    <Grid>
                        <Typography sx={heading}>10</Typography>
                        <Typography sx={peraStyle} variant="body2" color="text.secondary">october</Typography>
                    </Grid>
                    <Grid sx={heading}> - </Grid>
                    <Grid ml={3}>
                        <Typography sx={heading}>17</Typography>
                        <Typography sx={peraStyle} variant="body2" color="text.secondary">December</Typography>
                    </Grid>
                    <Grid sx={{ position: "absolute", left: '-20px', border: '1px solid #ddd', height: "55px", width: '2px' }}></Grid>
                </Grid>
                <Grid mr={5} sx={{ position: 'relative' }}>
                    <Typography sx={heading}>20 Rooms</Typography>
                    <Typography sx={peraStyle} variant="body2" color="text.secondary">10 Singles, 10 doubles</Typography>
                    <Grid sx={{ position: "absolute", left: '-20px', top: "0", border: '1px solid #ddd', height: "55px", width: '2px' }}></Grid>
                </Grid>
            </Grid>
            <Grid mt={3} sx={{ display: "flex", justifyContent: "space-between", borderStartStartRadius: "80px 80px", }}>
                {
                    data.map((e, ind) => {
                        return (
                            <Grid key={ind} sx={{ background: e.bgColor, padding: "10px 20px", width: e.width, border: "1px solid #ddd", borderTopLeftRadius: e.radius, borderBottomLeftRadius: e.radius, borderTopRightRadius: e.rightRadius, borderBottomRightRadius: e.rightRadius }}>
                                <Typography key={ind} variant="body2" color="text.secondary" sx={{ color: e.color, textAlign: e.align }}>
                                    {e.progress}
                                </Typography>
                            </Grid>
                        )
                    })
                }
            </Grid>
            <Grid sx={{ display: 'flex', justifyContent: "space-between", flexWrap: "wrap" }}  >
                {childComponent}
            </Grid>
        </Box>
    )
}

export default Section