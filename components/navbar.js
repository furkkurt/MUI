import React from "react";
import { Paper, styled, Typography, AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { Squash as Hamburger } from 'hamburger-react';
import { useState, useEffect } from 'react';

const Header = styled(Box)(({ theme }) => ({
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

const HamburgerBox = styled(Box)(({ theme }) => ({
  position:"absolute",
  right:"32px",
  top:"72px",
  width:"72px",
  transform: "scale(2)",
  color: "#9E946E",
  [theme.breakpoints.down("sm")]: {
    top: "48px",
    width:"54px",
  }
}));

const NftBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: "148px",
  top: "78px",
  width:"48px",
  minHeight:"4px",
  [theme.breakpoints.down("sm")]: {
    left: "88px",
    top: "52px",
    width: "32px",
  },
}));

const LeVesuvio = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 64,
  fontFamily: "ITC Berkeley Oldstyle Std",
  fontWeight: 700,
  color: "black",
  fontSize: 34,
  [theme.breakpoints.down("sm")]: {
    fontSize: 20,
    top: 48,
  }
}));

const MenuItem = styled(Typography)(({ theme }) => ({
  "&:hover": {
    color: "#9E946E"
  }
}));

const MenuBox = styled(Box)(({ theme }) => ({
  backgroundColor:"#FFF",
  position:"absolute",
  top:"125px",
  zIndex:"9999",
  width:"322px",
  right:"65px",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    right: "0px",
    top: "155px",
  }
}));
function showMenu() {
  console.log(document.getElementById("menu"));
  document.getElementById("menu").setAttribute("display", "none");
}
function Navbar() {
  const [show, setShow] = useState(true);
  return(
    <>
    <appbar position="relative" elevation={0} height="200px">
      <Toolbar position="relative">
        <Box sx={{ flexGrow: 1 }}>
          <LeVesuvio>
            le Vesuvio
          </LeVesuvio>
          <NftBox>
            <img width="100%" height="100%" src="assets/nft.png" alt=""/>
          </NftBox>
        </Box>
        <Box color="black">
          <HamburgerBox onClick={()=>show?setShow(false):setShow(true)}>
            <Hamburger />
          </HamburgerBox>
        </Box>
      </Toolbar>
    </appbar>

    {/* Menu */}
      {!show && <MenuBox>
      <Paper elevation={2}>
        <Grid container direction="column" align="center">
          <Grid item marginTop={4}>
            <Button>
              <MenuItem color="#000" fontFamily="ITC Berkeley Oldstyle Std" fontWeight="900" fontSize="24px">
                ACCUEIL
              </MenuItem>
            </Button>
          </Grid>
          <Grid item marginTop={4}>
            <Button>
              <MenuItem color="#000" fontFamily="ITC Berkeley Oldstyle Std" fontWeight="900" fontSize="24px">
                MINT
              </MenuItem>
            </Button>
          </Grid>
          <Grid item marginTop={4}>
            <Button>
              <MenuItem color="#000" fontFamily="ITC Berkeley Oldstyle Std" fontWeight="900" fontSize="24px">
                PROFIL
              </MenuItem>
            </Button>
          </Grid>
          <Grid item marginTop={4}>
            <Button>
              <MenuItem color="#000" fontFamily="ITC Berkeley Oldstyle Std" fontWeight="900" fontSize="24px">
                JEUX
              </MenuItem>
            </Button>
          </Grid>
          <Grid item marginTop={4}>
            <Button>
              <MenuItem color="#000" fontFamily="ITC Berkeley Oldstyle Std" fontWeight="900" fontSize="24px">
                A PROPOS
              </MenuItem>
            </Button>
          </Grid>
          <Grid item marginTop={4}>
            <Button>
              <MenuItem color="#000" fontFamily="ITC Berkeley Oldstyle Std" fontWeight="900" fontSize="24px">
                NEWS
              </MenuItem>
            </Button>
          </Grid>
          <Grid item marginTop={4} marginBottom={4}>
            <Button>
              <MenuItem color="#000" fontFamily="ITC Berkeley Oldstyle Std" fontWeight="900" fontSize="24px">
                FAQ
              </MenuItem>
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </MenuBox>}
    </>
  )
}

export default Navbar;
