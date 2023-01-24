import React from "react";
import { styled, Typography, AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@mui/material";
import { Menu } from "@mui/icons-material";
import Navbar from "../components/navbar.js";
import Avantages from "../components/avantages.js";
import AvantagesMobile from "../components/avantagesMobile.js";
import Header from "../components/header.js";
import Footer from "../components/footer.js";

const FloatingLogo = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "100px",
  left: "50%",
  transform: "translate(-50%, -50%)",
  msTransform: "translate(-50%, -50%)",
  height: 214,
  width: 214,
  [theme.breakpoints.down("sm")]: {
    width: 176,
    height: 176
  }
}));

const FloatingLogo2 = styled(Box)(({ theme }) => ({
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width: "80%",
}));

const Header_2 = styled(Box)(({ theme }) => ({
  backgroundImage: "url('assets/img2.png')",
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  width:"100%",
  minHeight:"100px",
  marginTop: "75px",
  backgroundColor: "#FFF",
  height: "100vh",
  overflow: "hidden",
}));

const But2 = styled(Button)(({ theme }) => ({
  color: "#A09369",
  width: "240px",
  height: "72px",
  [theme.breakpoints.down("sm")]: {
    width: "50vh",
  }
}));

const But3 = styled(Button)(({ theme }) => ({
  color: "#A09369",
  width: "240px",
  height: "60px"
}));

const But4 = styled(Button)(({ theme }) => ({
  color: "#FFF",
  height: "72px",
  width: "240px",
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

const Section1 = styled(Box)(({ theme }) => ({
  minHeight: "200px",
  width: "100%",
  overflow: "hidden",
}));

const Image2 = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
  backgroundImage: "url('assets/bg1.png')",
  backgroundSize: "100% 100%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  margin: "auto",
}));

const Section1_2 = styled(Box)(({ theme }) => ({
  minHeight: "200px",
  width: "100%",
  overflow: "hidden",
}));

const Section3 = styled(Box)(({ theme }) => ({
  minHeight: "200px",
  width: "100%",
  backgroundImage: "url('assets/bg1_2.png')",
  backgroundSize: "100% 100%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  margin: "auto",
  marginTop: "32px",
}));

const Section3_2 = styled(Box)(({ theme }) => ({
  marginLeft: "auto",
  marginRight: "auto",
  width: "80%",
}));

const Section4_2 = styled(Box)(({ theme }) => ({
  minHeight: "200px",
  width: "100%",
  backgroundImage: "url('assets/bg2.png')",
  backgroundSize: "100% 100%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  margin: "auto",
  marginTop: "32px",
}));

const Section5 = styled(Box)(({ theme }) => ({
  marginLeft: "auto",
  marginRight: "auto",
  width: "100%",
  align: "center"
}));

const Img3 = styled(Box)(({ theme }) => ({
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width: "50%",
  marginBottom: "48px",
}));

const Sun = styled(Box)(({ theme }) => ({
  display: "block",
  marginleft: "auto",
  marginright: "auto",
  width: "100%",
}));

const Sun2 = styled(Box)(({ theme }) => ({
  display: "block",
  marginleft: "auto",
  marginright: "auto",
  width: "100%",
  marginTop: "-160px",
  [theme.breakpoints.down("lg")]: {
    marginTop: "-120px"
  },
  [theme.breakpoints.down("md")]: {
    marginTop: "-80px"
  },
}));

const Home = () => {
  return (
      <>
      <CssBaseline />
      <Navbar />
      <main>
        <FloatingLogo>
          <img height="100%" width="100%" src="assets/logo2.png" alt=""/>
        </FloatingLogo>
 
        <Header />

        {/*Section 1 Desktop*/}
        <Section1 sx={{ display: { xs: 'none', sm: 'block' } }} position="relative" marginTop={4}>
          <Image2>
            <Grid container direction="column" alignItems="center" justifyContent="center" color="#A09369">
              <Grid item marginTop={4}>
                <Typography variant="h3" fontFamily="Heaters" fontWeight="400">
                  COLLECTION
                  <img height="36px" src="assets/nft2.png" alt=""/>
                </Typography>
              </Grid>
              <Grid item marginTop={4}>
                <Typography width="80%" align="center" margin="auto" color="#282828">
                  Toujours en quête d’innovation et d’évolution, nous sommes l’un des premiers restaurants à lancer sa propre collection de NFT.
                </Typography>{"\n\n"}
                <Box display="inline-block">{" "}
                </Box>
                <Box width="80%" align="center" margin="auto" color="#282828">
                  Afin d’offrir une expérience exclusif pour ses clients les plus prestigieux, Le Vesuvio a imaginé une collection 
                  de NFT basé sous signe emblématique :  
                  <Box fontWeight="700" color="#000" display="inline">
                    {" "} Le soleil.
                  </Box>
                </Box>
              </Grid>
              <Grid item marginTop={4} marginBottom={4}>
                <But3 variant="contained">
                  <Typography fontWeight="700" variant="h6">
                    MINT
                  </Typography>
                </But3> 
              </Grid>
            </Grid>
          </Image2>
        </Section1>
        
        {/*Section 2 Desktop*/}
        <Box position="relative" zIndex="9999" sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Sun2>
            <img height="100%" width="100%" src="assets/sun2.png" alt=""/>
          </Sun2>
        </Box>

        {/*Section 3 and 4 Desktop*/}
        <Section3 elevation="20"  sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Grid container direction="row" color="#A09369">
            <Grid item xs={5} marginLeft={4} marginTop={8} marginBottom={4}>
              <img width="50%" src="assets/img3.png"/>
              <img width="50%" src="assets/img4.png"/>
              <Box marginTop={4} fontWeight="700" color="#000" fontSize="22px">
                Plus qu’un restaurant, le Vesuvio est un lieu incontournable situé sur la célèbre Croisette à Cannes caractérisé par deux salles liant festivité et convivialité. 
              </Box>
              <Box display="inline-block"></Box>
              <Box fontWeight="700" color="#000" fontSize="22px">
                Le Vesuvio propose une ambiance traditionnelle et convivial, tandis que le café vous permettra de prolonger vos soirées dans une ambiance lounge et festive. Concept intemporel il réunit depuis 1969, toutes générations venues des 4 coins du monde.
              </Box>
            </Grid>
            <Grid item xs={6} marginBottom={4} align="center">
              <Typography marginTop="64px" fontFamily="ITC Berkeley Oldstyle Std" fontWeight="700" variant="h3" color="#9E946E">
                GROUPE PRIVE
                <img width="70%" src="assets/logo2.png" alt=""/>
              </Typography>
              <Box width="80%" align="center" margin="auto" color="#000" fontSize="large">
                Le Vesuvio est réputé pour son ambiance chic et son service impeccable. Mais pour certains privilégiés, il vous offre une expérience encore plus exclusive :
                <Box fontWeight="700" color="#000" display="inline" fontSize="large">
                  {" "} l'accès à un groupe privé ultra sélectif composé de seulement 42 membres. 
                </Box>
              </Box>
              <Box display="inline-block"></Box>
              <Box width="80%" align="center" margin="auto" color="#000" fontSize="large">
                Ce groupe est matérialisé par des NFTs (non-fungible tokens) uniques, qui donnent à leurs détenteurs la possibilité de manger tous les jours au restaurant gratuitement.
              </Box>
            </Grid>
          </Grid>
        </Section3>
 
        {/* Section 5 Desktop */}
        <Section5 sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Typography align="center" marginTop="64px" fontFamily="ITC Berkeley Oldstyle Std" fontWeight="700" variant="h3" color="#9E946E">
            AVANTAGES
          </Typography>
        </Section5>

        <Avantages />

        {/* Header Mobile*/}
        <Header_2 sx={{ display: { xs: 'block', sm: 'none' } }}>
          <Grid height="100%" container spacing={0} direction="column" alignItems="center" justifyContent="center">
            <Grid item>
              <But2 variant="contained">
                <Typography fontWeight="700" variant="h6">
                  CONNEXION
                </Typography>
              </But2> 
            </Grid>
            <Grid item>
              <Text1 fontWeight="500" width="100%" align="center" variant="h6">
                Vous pouvez vous connecter via votre Wallet ou par Email.
              </Text1>
            </Grid>
          </Grid>
        </Header_2>
       
        {/*Section 1 Mobile*/}
        <Section1_2 elevation="20"  sx={{ display: { xs: 'block', sm: 'none' } }}>
          <Image2>
            <Grid container direction="column" alignItems="center" justifyContent="center" color="#A09369">
              <Grid item marginTop={4}>
                <Typography variant="h3" fontFamily="Heaters" fontWeight="400">
                  <img height="36px" src="assets/nft2.png" alt=""/>{" "}
                  COLLECTION
                </Typography>
              </Grid>
              <Grid item marginTop={4}>
                <Typography width="80%" align="center" margin="auto" color="#282828">
                  Toujours en quête d’innovation et d’évolution, nous sommes l’un des premiers restaurants à lancer sa propre collection de NFT.
                </Typography>{"\n\n"}
                <Box display="inline-block">{" "}
                </Box>
                <Box width="80%" align="center" margin="auto" color="#282828">
                  Afin d’offrir une expérience exclusif pour ses clients les plus prestigieux, Le Vesuvio a imaginé une collection 
                  de NFT basé sous signe emblématique :  
                  <Box fontWeight="700" color="#000" display="inline">
                    {" "} Le soleil.
                  </Box>
                </Box>
              </Grid>
              <Grid item marginTop={4} marginBottom={4}>
                <But3 variant="contained">
                  <Typography fontWeight="700" variant="h6">
                    ACCEDER AU MINT
                  </Typography>
                </But3> 
              </Grid>
            </Grid>
          </Image2>
        </Section1_2>
        
        {/* Section 2 Mobile */}
        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
          <Sun>
            <img width="100%" height="100%" src="assets/sun.png" alt=""/>
          </Sun>
        </Box>
        
        {/* Section 3 Mobile */}
        <Section3_2 sx={{ display: { xs: 'block', sm: 'none' } }}>
          <Img3>
            <img width="100%" height="100%" src="assets/img3.png" alt=""/>
          </Img3>
          <Typography fontSize="large" fontWeight="700">
            Plus qu’un restaurant, le Vesuvio est un lieu incontournable situé sur la célèbre Croisette à Cannes caractérisé par deux salles liant festivité et convivialité. 
          </Typography>
          <Box display="inline-block"></Box>
          <Typography fontSize="large" fontWeight="700">
            Le Vesuvio propose une ambiance traditionnelle et convivial, tandis que le café vous permettra de prolonger vos soirées dans une ambiance lounge et festive. Concept intemporel il réunit depuis 1969, toutes générations venues des 4 coins du monde.
          </Typography>
        </Section3_2>

        {/* Section 4 Mobile */}
        <Section4_2 sx={{ display: { xs: 'block', sm: 'none' } }}>
          <Grid container direction="column" alignItems="center" justifyContent="center" color="#A09369">
            <Grid item marginTop={4}>
              <Typography marginTop="64px" fontFamily="ITC Berkeley Oldstyle Std" fontWeight="700" variant="h3" color="#9E946E">
                GROUPE PRIVE
              </Typography>
            </Grid>
            <Grid item position="relative" marginTop={4}>
              <FloatingLogo2>
                <img width="100%" height="100%" src="assets/logo2.png" alt=""/>
              </FloatingLogo2>
            </Grid>
            <Grid item marginBottom={4}>
              <Box width="80%" align="center" margin="auto" color="#FFF">
                Le Vesuvio est réputé pour son ambiance chic et son service impeccable. Mais pour certains privilégiés, il vous offre une expérience encore plus exclusive :
                <Box fontWeight="700" color="#FFF" display="inline">
                  {" "} l'accès à un groupe privé ultra sélectif composé de seulement 42 membres. 
                </Box>
              </Box>
              <Box width="80%" align="center" margin="auto" color="#FFF">
                Ce groupe est matérialisé par des NFTs (non-fungible tokens) uniques, qui donnent à leurs détenteurs la possibilité de manger tous les jours au restaurant gratuitement.
              </Box>
            </Grid>
          </Grid>
        </Section4_2>
        
        {/* Section 5 Mobile */}
        <Section5 sx={{ display: { xs: 'block', sm: 'none' } }}>
          <Typography align="center" marginTop="64px" fontFamily="ITC Berkeley Oldstyle Std" fontWeight="700" variant="h3" color="#9E946E">
            AVANTAGES
          </Typography>
        </Section5>

        <AvantagesMobile />

        {/* Section 10 Desktop and Mobile */}
        <Box>
          <Grid container direction="column" alignItems="center" justifyContent="center">
            <Grid item marginTop={4}>
              <Typography width="80%" align="center" margin="auto" fontSize="large" fontWeight="700" sx={{ fontSize: { xs: '24px', sm: '16px' } }}>
                Il est possible de vous connecter via votre Wallet ou votre email ainsi que de procéder à l’achat par carte bancaire. 
              </Typography>
            </Grid>
            <Grid item marginTop={4}>
              <But2 variant="contained">
                <Typography fontWeight="700" variant="h6" fontSize="24px" sx={{ display: { xs: 'block', sm: 'none' } }}>
                  SE CONNECTER
                </Typography>
                  <Typography fontWeight="700" variant="h6" fontSize="24px" sx={{ display: { xs: 'none', sm: 'block' } }}>
                  CONNEXION
                </Typography>
              </But2> 
            </Grid>
            <Grid item marginTop={4} marginBottom={4}>
              <But4 color="success" variant="contained">
                <Typography fontWeight="700" variant="h6" fontSize="24px" sx={{ display: { xs: 'block', sm: 'none' } }}>
                  ACCEDER AU MINT
                </Typography>
                <Typography fontWeight="700" variant="h6" fontSize="24px" sx={{ display: { xs: 'none', sm: 'block' } }}>
                  MINT
                </Typography>
              </But4> 
            </Grid>
          </Grid>
        </Box>
        <Footer />
      </main>
    </>
  );
}

export default Home;
