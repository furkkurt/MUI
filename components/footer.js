import React from "react";
import { styled, Typography, AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@mui/material";
import { Menu } from "@mui/icons-material";

const FooterBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "256px",
  backgroundColor: "#282828"
}));

function Footer() {
  return(
    <>
    {/* Footer Desktop */}
    <FooterBox>
      <Grid container direction="row" alignItems="center" justifyContent="center">
        <Grid item marginTop={4} xs={8} marginLeft={1} order={{ sm: 1, xs: 2}}>
          <Typography color="#FFF" fontWeight="500" fontSize="large">
            LE VESUVIO
          </Typography>
          <Typography marginTop={4} color="#FFF" fontWeight="500" fontSize="large">
            MENTIONS LEGALES
          </Typography>
          <Typography marginTop={4} color="#FFF" fontWeight="500" fontSize="large">
            A PROPOS
          </Typography>
        </Grid>
        <Grid item xs={4} sm={3} md={2} container justifyContent="space-between" spacing={0} marginTop={{ sm: 0, xs: 4 }} order={{ sm: 2, xs: 1}}>
          <img width="36px" height="36px" src="assets/dc.png" alt=""/>
          <img width="36px" height="36px" src="assets/twitter.png" alt=""/>
          <img width="32px" height="32px" src="assets/ship.png" alt=""/>
          <img width="32px" height="32px" src="assets/ig.png" alt=""/>
        </Grid>
      </Grid>
      <Grid container direction="row" alignItems="center" justifyContent="center" backgroundColor="#282828">
        <Grid item marginBottom={4}>
          <Box align="center" marginTop={4} width="100%">
            <Typography fontFamily="ITC Berkeley Oldstyle Std" fontWeight="700" variant="h4" color="#FFF">
              le Vesuvio X
            </Typography>
          </Box>
        </Grid>
        <Grid item marginTop={3} marginBottom={4}>
          <Box>
            <img height="50px" src="assets/akashic.png" alt=""/>
          </Box>
        </Grid>
      </Grid>
    </FooterBox>
    </>
  )
}

export default Footer;
