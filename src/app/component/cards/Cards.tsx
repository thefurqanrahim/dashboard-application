import React from 'react';
import { Grid, Typography, Button, CardContent, Card, Badge } from '@mui/material';

// Local Component
import { cardObj } from './CardObj';

export default function Cards() {
  return (
    <>
      {
        cardObj.map((item, ind) => {
          return (
            <Badge key={ind} badgeContent={item.badge} sx={item.badgeStyle}>
              <Card sx={{ maxWidth: 345, background: "#F5F4F4" }}>
                <Grid sx={{ textAlign: "center", padding: "20px 0" }}>
                  <Typography sx={{
                    fontFamily: 'Lato',
                    fontStyle: "italic",
                    fontWeight: 800,
                    fontSize: "35.4809px",
                    lineHeight: "43px",
                    color: "#44A16F"
                  }}>{item.img}</Typography>
                  <Typography sx={{ color: "#44A16F" }} variant="body2">{item.heading}</Typography>
                </Grid>
                <CardContent sx={{ border: '3px solid #ddd' }}>
                  <Typography gutterBottom component="div" variant="body2" color="text.secondary">
                    {item.info}
                  </Typography>
                  <Grid sx={{ display: 'flex', alignItems: "center", justifyContent: 'space-between' }}>
                    <Grid>
                      <Typography variant="body2" color="text.secondary">
                        {item.singleRent}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.doubleRent}
                      </Typography>
                    </Grid>
                    <Button variant="contained" sx={{
                      textTransform: 'capitalize', background: "#44A16F", '&:hover': {
                        background: "#44A16F"
                      }
                    }}>{item.btn}</Button>
                  </Grid>
                </CardContent>
              </Card>
            </Badge>
          )
        })
      }
    </>
  );
}