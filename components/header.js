import React from "react";
import { styled, Typography, AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@mui/material";
import { Menu } from "@mui/icons-material";

const HeaderBox = styled(Box)(({ theme }) => ({
  backgroundSize: "cover",
  backgroundPosition: "center",
  margin: "auto",
  backgroundImage: "url('assets/img1.png')",
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
  width:"100%",
  minHeight:"100px",
  marginTop: "75px",
  backgroundColor: "#FFF",
  overflow: "hidden"
}));

const But2 = styled(Button)(({ theme }) => ({
  color: "#A09369",
  width: "240px",
  height: "72px",
  [theme.breakpoints.down("sm")]: {
    width: "50vh",
  }
}));

const Text1 = styled(Typography)(({ theme }) => ({
  marginTop: "16px",
  color: "#FFF",
  [theme.breakpoints.down("sm")]: {
    width: "80%",
  },
}));
function Header() {
  return (
    <>
    {/* Header Desktop*/}
    <HeaderBox sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Grid paddingTop={32} paddingBottom={32} height="100%" container spacing={0} direction="column" alignItems="center" justifyContent="center">
        <Grid item>
          <But2 variant="contained">
            <Typography fontWeight="700">
              CONNEXION
            </Typography>
          </But2> 
        </Grid>
        <Grid item>
          <Text1 fontWeight="500" variant="h6">
            Vous pouvez vous connecter via votre Wallet ou par Email.
          </Text1>
        </Grid>
      </Grid>
    </HeaderBox>
    </>
  )
}

export default Header;
