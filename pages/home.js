import React from "react";
import { styled, Typography, AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@mui/material";
import { Menu } from "@mui/icons-material";

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

const Hamburger = styled(Box)(({ theme }) => ({
  position:"absolute",
  top:"88px",
  width:"96px",
  transform: "scale(2)",
  color: "#9E946E",
  [theme.breakpoints.down("sm")]: {
    top: "48px"
  }
}));

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

const Avantages1 = styled(Box)(({ theme }) => ({
  backgroundImage: "url('assets/bg7.png')",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  minHeight: "172px",
  width: "110%",
  margin: "auto"
}));

const Avantages2 = styled(Box)(({ theme }) => ({
  backgroundImage: "url('assets/bg8.png')",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  minHeight: "172px",
  marginLeft: "32px",
  width: "100%"
}));

const Avantages3 = styled(Box)(({ theme }) => ({
  backgroundImage: "url('assets/bg9.png')",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  minHeight: "172px",
  width: "110%",
  margin: "auto"
}));

const Avantages4 = styled(Box)(({ theme }) => ({
  backgroundImage: "url('assets/bg10.png')",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  minHeight: "172px",
  margin: "auto",
  marginLeft: "32px",
  width: "100%"
}));

const Avantages1_2 = styled(Box)(({ theme }) => ({
  minHeight: "100px",
  width: "100%",
  backgroundSize: "100% 100%",
  backgroundImage: "url('assets/bg3.png')",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  margin: "auto",
  marginTop: "176px",  
  position: "relative"
}));

const Avantages2_2 = styled(Box)(({ theme }) => ({
    minHeight: "100px",
    width: "100%",
    backgroundSize: "100% 100%",
    backgroundImage: "url('assets/bg4.png')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    margin: "auto",
    marginTop: "176px",  
    position: "relative"
}));

const Avantages3_2 = styled(Box)(({ theme }) => ({
  minHeight: "100px",
  width: "100%",
  backgroundSize: "100% 100%",
  backgroundImage: "url('assets/bg5.png')",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  margin: "auto",
  marginTop: "176px",  
  position: "relative"
}));

const Avantages4_2 = styled(Box)(({ theme }) => ({
  minHeight: "100px",
  width: "100%",
  backgroundSize: "100% 100%",
  backgroundImage: "url('assets/bg6.png')",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  margin: "auto",
  marginTop: "176px",  
  position: "relative"
}));

const AvantagesImg = styled(Box)(({ theme }) => ({
  height: "100%",
  minWidth: "150px",
  position: "absolute",
}));

const AvantagesImg_2 = styled(Box)(({ theme }) => ({
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width: "70%",
  align: "center",
}));

const AvantagesImgBox_2 = styled(Box)(({ theme }) => ({
  width: "100%",
  position: "absolute",
  top: "-128px",
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
  marginTop: "-120px",
}));

const Footer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "256px",
  backgroundColor: "#282828"
}));

const AvantagesHeader_2 = styled(Box)(({ theme }) => ({
  marginTop: "16px",
  color: "#FFF",
  [theme.breakpoints.down("sm")]: {
    width: "80%",
  }
}));

const Home = () => {
  return (
      <>
      <CssBaseline />
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
            <Hamburger>
              <Menu />
            </Hamburger>
          </Box>
        </Toolbar>
      </appbar>

      <main>
        {/* Header Desktop*/}
        <Header sx={{ display: { xs: 'none', sm: 'block' } }}>
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
        </Header>

      <FloatingLogo>
        <img height="100%" width="100%" src="assets/logo2.png" alt=""/>
      </FloatingLogo>

        {/*Section 1 Desktop*/}
        <Section1 elevation="20"  sx={{ display: { xs: 'none', sm: 'block' } }} position="relative">
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
        <Box elevation="20" sx={{ display: { xs: 'none', sm: 'block' } }}>
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
       
        {/*Section 6 Desktop*/}
        <Box container alignItems="center" sx={{ display: { xs: 'none', sm: 'block' } }} align="center">
          <Grid container marginTop={4} direction="row" color="#A09369">
            <Grid item xs={7} margin="auto">
              <Grid container position="relative" direction="row" color="#A09369">
                <Grid item xs={9}>
                  <Avantages1>
                    <Grid container direction="column" alignItems="center" justifyContent="center" color="#A09369">
                      <Grid item marginTop={4}>
                        <Typography variant="h4" color="#FFF" fontFamily="ITC Berkeley Oldstyle Std" fontWeight="500">
                          Fast Pass
                        </Typography>
                      </Grid>
                      <Grid item marginTop={4} marginBottom={4}>
                        <Typography color="#FFF" fontWeight="700" width="80%" align="center" margin="auto" fontSize="20px">
                          Seuls les membres de cette communauté auront la possibilité de réserver dans nos établissements.
                        </Typography>
                      </Grid>
                    </Grid>
                  </Avantages1>
                </Grid>
                <Grid item xs={3}>
                  <AvantagesImg>
                    <img width="100%" height="100%" src="assets/avantages1.png" alt=""/>  
                  </AvantagesImg>
                </Grid>
              </Grid>
            </Grid>   
            <Grid item xs={2} margin="auto">
              <But3 variant="contained">
                <Typography fontWeight="700" variant="h6">
                  DETAILS
                </Typography>
              </But3> 
            </Grid>   
          </Grid>
        </Box>

        {/*Section 7 Desktop*/}
        <Box elevation="20"  sx={{ display: { xs: 'none', sm: 'block' } }} align="center">
          <Grid container marginTop={4} direction="row" color="#A09369">
            <Grid item xs={3} margin="auto">
              <But3 variant="contained">
                <Typography fontWeight="700" variant="h6">
                  DETAILS
                </Typography>
              </But3> 
            </Grid>   
            <Grid item xs={7}>
              <Grid container position="relative" direction="row" color="#A09369">
                <Grid item xs={8}>
                  <Avantages2>
                    <Grid container direction="column" alignItems="center" justifyContent="center" color="#A09369">
                      <Grid item marginTop={4}>
                        <Typography variant="h4" color="#FFF" fontFamily="ITC Berkeley Oldstyle Std" fontWeight="500">
                          Mangiare Gratis
                        </Typography>
                      </Grid>
                      <Grid item marginTop={4} marginBottom={4}>
                        <Typography color="#FFF" fontWeight="700" width="80%" align="center" margin="auto" fontSize="20px">
                          Vous pourrez profiter à vie d’un plat par jour offert par la maison.
                        </Typography>
                      </Grid>
                    </Grid>
                  </Avantages2>
                </Grid>
                <Grid item xs={0}>
                  <AvantagesImg>
                    <img width="100%" height="100%" src="assets/avantages2.png" alt=""/>  
                  </AvantagesImg>
                </Grid>
              </Grid>
            </Grid>   
            <Grid item xs={1}>
            </Grid>
          </Grid>
        </Box>

        {/*Section 8 Desktop*/}
        <Box elevation="20"  sx={{ display: { xs: 'none', sm: 'block' } }} align="center">
          <Grid container marginTop={4} direction="row" color="#A09369">
            <Grid item xs={7} margin="auto">
              <Grid container position="relative" direction="row" color="#A09369">
                <Grid item xs={9}>
                  <Avantages3>
                    <Grid container direction="column" alignItems="center" justifyContent="center" color="#A09369">
                      <Grid item marginTop={4}>
                        <Typography variant="h4" color="#FFF" fontFamily="ITC Berkeley Oldstyle Std" fontWeight="500">
                          Events Privés
                        </Typography>
                      </Grid>
                      <Grid item marginTop={4} marginBottom={4}>
                        <Typography color="#FFF" fontWeight="700" width="80%" align="center" margin="auto" fontSize="20px">
                          Un accès privilégié aux événements privés organisés par Le Vesuvio.
                        </Typography>
                      </Grid>
                    </Grid>
                  </Avantages3>
                </Grid>
                <Grid item xs={0}>
                  <AvantagesImg>
                    <img width="100%" height="100%" src="assets/avantages3.png" alt=""/>  
                  </AvantagesImg>
                </Grid>
              </Grid>
            </Grid>   
            <Grid item xs={2} margin="auto">
              <But3 variant="contained">
                <Typography fontWeight="700" variant="h6">
                  DETAILS
                </Typography>
              </But3> 
            </Grid>   
          </Grid>
        </Box>

        {/*Section 9 Desktop*/}
        <Box elevation="20"  sx={{ display: { xs: 'none', sm: 'block' } }} align="center">
          <Grid container marginTop={4} direction="row" color="#A09369">
            <Grid item xs={3} margin="auto">
              <But3 variant="contained">
                <Typography fontWeight="700" variant="h6">
                  DETAILS
                </Typography>
              </But3> 
            </Grid>   
            <Grid item xs={7}>
              <Grid container position="relative" direction="row" color="#A09369">
                <Grid item xs={8}>
                  <Avantages4>
                    <Grid container direction="column" alignItems="center" justifyContent="center" color="#A09369">
                      <Grid item marginTop={4}>
                        <Typography variant="h4" color="#FFF" fontFamily="ITC Berkeley Oldstyle Std" fontWeight="500">
                          Inviations
                        </Typography>
                      </Grid>
                      <Grid item marginTop={4} marginBottom={4}>
                        <Typography color="#FFF" fontWeight="700" width="80%" align="center" margin="auto" fontSize="20px">
                          Inviter des amis à se joindre à eux pour des dîners dans des salles privées, ou pour des soirées sur la terrasse avec vue sur la mer. 
                        </Typography>
                      </Grid>
                    </Grid>
                  </Avantages4>
                </Grid>
                <Grid item xs={0}>
                  <AvantagesImg>
                    <img width="100%" height="100%" src="assets/avantages4.png" alt=""/>  
                  </AvantagesImg>
                </Grid>
              </Grid>
            </Grid>   
            <Grid item xs={1}>
            </Grid>
          </Grid>
        </Box>

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

        {/* Section 6 Mobile */}
        <Avantages1_2 sx={{ display: { xs: 'block', sm: 'none' } }}>
          <AvantagesImgBox_2>
            <AvantagesImg_2>
              <img width="100%" height="100%" src="assets/avantages1.png" alt=""/>  
            </AvantagesImg_2>
          </AvantagesImgBox_2>
          <Grid container direction="column" alignItems="center" justifyContent="center" color="#A09369">
            <Grid item marginTop={48}>
              <Typography variant="h2" color="#FFF" fontFamily="ITC Berkeley Oldstyle Std" fontWeight="700">
                Fast Pass
              </Typography>
            </Grid>         
            <Grid item marginTop={16}>
              <Typography color="#FFF" fontWeight="700" width="80%" align="center" margin="auto" fontSize="24px">
                Seuls les membres de cette communauté auront la possibilité de réserver dans nos établissements.
              </Typography>
            </Grid>         
            <Grid item marginTop={16} marginBottom={16}>
              <But2 variant="contained">
                <Typography fontWeight="700" variant="h6" fontSize="24px">
                  PLUS DE DETAILS
                </Typography>
              </But2> 
            </Grid>
          </Grid>
        </Avantages1_2>

        {/* Section 7 Mobile */}
        <Avantages2_2 sx={{ display: { xs: 'block', sm: 'none' } }}>
          <AvantagesImgBox_2>
            <AvantagesImg_2>
              <img width="100%" height="100%" src="assets/avantages2.png" alt=""/>  
            </AvantagesImg_2>
          </AvantagesImgBox_2>
          <Grid container direction="column" alignItems="center" justifyContent="center" color="#A09369">
            <Grid item marginTop={48}>
              <Typography variant="h2" color="#FFF" fontFamily="ITC Berkeley Oldstyle Std" fontWeight="700">
                Mangiare Gratis
              </Typography>
            </Grid>         
            <Grid item marginTop={16}>
              <Typography color="#FFF" fontWeight="700" width="80%" align="center" margin="auto" fontSize="24px">
                Vous pourrez profiter à vie d’un plat par jour offert par la maison.
              </Typography>
            </Grid>         
            <Grid item marginTop={16} marginBottom={16}>
              <But2 variant="contained">
                <Typography fontWeight="700" variant="h6" fontSize="24px">
                  PLUS DE DETAILS
                </Typography>
              </But2> 
            </Grid>
          </Grid>
        </Avantages2_2>

        {/* Section 8 Mobile */}
        <Avantages3_2 sx={{ display: { xs: 'block', sm: 'none' } }}>
          <AvantagesImgBox_2>
            <AvantagesImg_2>
              <img width="100%" height="100%" src="assets/avantages3.png" alt=""/>  
            </AvantagesImg_2>
          </AvantagesImgBox_2>
          <Grid container direction="column" alignItems="center" justifyContent="center" color="#A09369">
            <Grid item marginTop={48}>
              <Typography variant="h2" color="#FFF" fontFamily="ITC Berkeley Oldstyle Std" fontWeight="700">
                Events Privés
              </Typography>
            </Grid>         
            <Grid item marginTop={16}>
              <Typography color="#FFF" fontWeight="700" width="80%" align="center" margin="auto" fontSize="24px">
                Un accès privilégié aux événements privés organisés par Le Vesuvio.
              </Typography>
            </Grid>         
            <Grid item marginTop={16} marginBottom={16}>
              <But2 variant="contained">
                <Typography fontWeight="700" variant="h6" fontSize="24px">
                  PLUS DE DETAILS
                </Typography>
              </But2> 
            </Grid>
          </Grid>
        </Avantages3_2>

        {/* Section 9 Mobile */}
        <Avantages4_2 sx={{ display: { xs: 'block', sm: 'none' } }}>
          <AvantagesImgBox_2>
            <AvantagesImg_2>
              <img width="100%" height="100%" src="assets/avantages4.png" alt=""/>  
            </AvantagesImg_2>
          </AvantagesImgBox_2>
          <Grid container direction="column" alignItems="center" justifyContent="center" color="#A09369">
            <Grid item marginTop={48}>
              <Typography variant="h2" color="#FFF" fontFamily="ITC Berkeley Oldstyle Std" fontWeight="700">
                Inviations
              </Typography>
            </Grid>         
            <Grid item marginTop={16}>
              <Typography color="#FFF" fontWeight="700" width="80%" align="center" margin="auto" fontSize="24px">
                Inviter des amis à se joindre à eux pour des dîners dans des salles privées, ou pour des soirées sur la terrasse avec vue sur la mer. 
              </Typography>
            </Grid>         
            <Grid item marginTop={16} marginBottom={16}>
              <But2 variant="contained">
                <Typography fontWeight="700" variant="h6" fontSize="24px">
                  PLUS DE DETAILS
                </Typography>
              </But2> 
            </Grid>
          </Grid>
        </Avantages4_2>

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

        {/* Footer Desktop */}
        <Footer>
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
        </Footer>
      </main>
    </>
  );
}

export default Home;
