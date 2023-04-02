import React from 'react'
import { Grid, Typography } from "@mui/material"

// Local Components
import Cards from "./app/component/cards/Cards"
import Section from "../src/app/component/section/Section";

const Main = () => {
    const myComponent = <Cards />
    let arr = [
        {
            progress: "RECEIVED",
            bgColor: "#FDF307",
            width: "100%",
            radius: "20px"
        },
        {
            progress: "NEGOTIATING",
            width: "100%",
            align: "center"
        },
        {
            progress: "COMPLETED",
            width: "100%",
            rightRadius: "20px",
            align: "center"
        },
        {
            progress: "COMPLETED",
            bgColor: "#44A16F",
            color: "#fff",
            width: "70%",
            radius: "20px",
            rightRadius: "20px"
        }
    ]
    return (
        <>
            <Grid mt={5} mb={3}>
                <Typography sx={{ color: "#48AF78", fontFamily: "", fontStyle: "normal", fontWeight: "600", fontSize: "28.55", lineHeight: "43px", letterSpacing: "-0.02em" }}>You currently  have 3 requests</Typography>
            </Grid>
            <Grid sx={{ background: "#fff" }}>
                <Section data={arr.slice(0, 3)} childComponent="" />
            </Grid>
            <Grid sx={{ margin: "20px 0", background: "#fff", borderRadius: "30px" }}>
                <Section data={arr.slice(3, 4)} childComponent={myComponent} />
            </Grid>
        </>
    )
}

export default Main