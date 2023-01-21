import React from "react";
import { Typography, AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@mui/material";
import { Menu } from "@mui/icons-material";
import useStyles from "./styles";
import { Nunito } from '@next/font/google';

const nunito = Nunito({
  weight: "600",
  subsets: ["latin"]
});

const Home = () => {
  const classes = useStyles();
  
  return (
      <>
      <CssBaseline />
      <AppBar className={classes.appbar} position="relative" elevation={0}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography className={classes.leVesuvio} position="absolute" top="64px" fontFamily="ITC Berkeley Oldstyle Std" fontWeight="700" variant="h4" color="black">
              le Vesuvio
            </Typography>
            <Box className={classes.nftBox} position="absolute" left="148px" top="78px">
              <img className={classes.nft} width="48px" src="assets/nft.png" alt=""/>
            </Box>
          </Box>
          <Box color="black">
            <Typography className={classes.hamburger} position="absolute" top="88px" width="96px">
              <Menu />
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <main className={classes.main}>
        <Box position="relative">
          <img className={classes.floatingLogo} src="assets/logo2.png" alt=""/>
        </Box>

        {/* Header Desktop*/}
        <Box className={classes.header} sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Grid paddingTop={32} paddingBottom={32} height="100%" container spacing={0} direction="column" alignItems="center" justifyContent="center">
            <Grid item>
              <Button className={classes.but2} variant="contained">
                <Typography fontWeight="700">
                  CONNEXION
                </Typography>
              </Button> 
            </Grid>
            <Grid item>
              <Typography className={classes.text1} fontWeight="500" variant="h6">
                Vous pouvez vous connecter via votre Wallet ou par Email.
              </Typography>
            </Grid>
          </Grid>
        </Box>


        {/*Section 1 Desktop*/}
        <Box className={classes.section1} elevation="20"  sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Box className={classes.image2}>
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
                <Button className={classes.but3} variant="contained">
                  <Typography fontWeight="700" variant="h6">
                    MINT
                  </Typography>
                </Button> 
              </Grid>
            </Grid>
          </Box>
        </Box>
        
        {/*Section 2 Desktop*/}
        <Box className={classes.section2} elevation="20"  sx={{ display: { xs: 'none', sm: 'block' } }}>
          <img className={classes.sun2} src="assets/sun2.png" alt=""/>
        </Box>

        {/*Section 3 and 4 Desktop*/}
        <Box className={classes.section3} elevation="20"  sx={{ display: { xs: 'none', sm: 'block' } }}>
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
        </Box>
 
        {/* Section 5 Desktop */}
        <Box className={classes.section5} sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Typography align="center" marginTop="64px" fontFamily="ITC Berkeley Oldstyle Std" fontWeight="700" variant="h3" color="#9E946E">
            AVANTAGES
          </Typography>
        </Box>
       
        {/*Section 6 Desktop*/}
        <Box container alignItems="center" sx={{ display: { xs: 'none', sm: 'block' } }} align="center">
          <Grid container marginTop={4} direction="row" color="#A09369">
            <Grid item xs={7} margin="auto">
              <Grid container position="relative" direction="row" color="#A09369">
                <Grid item xs={9}>
                  <Box className={classes.avantages1}>
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
                  </Box>
                </Grid>
                <Grid item xs={0}>
                  <img className={classes.avantagesImg} src="assets/avantages1.png" alt=""/>
                </Grid>
              </Grid>
            </Grid>   
            <Grid item xs={2} margin="auto">
              <Button className={classes.but3} variant="contained">
                <Typography fontWeight="700" variant="h6">
                  DETAILS
                </Typography>
              </Button> 
            </Grid>   
          </Grid>
        </Box>

        {/*Section 7 Desktop*/}
        <Box elevation="20"  sx={{ display: { xs: 'none', sm: 'block' } }} align="center">
          <Grid container marginTop={4} direction="row" color="#A09369">
            <Grid item xs={3} margin="auto">
              <Button className={classes.but3} variant="contained">
                <Typography fontWeight="700" variant="h6">
                  DETAILS
                </Typography>
              </Button> 
            </Grid>   
            <Grid item xs={9}>
              <Grid container position="relative" direction="row" color="#A09369">
                <Grid item xs={8}>
                  <Box className={classes.avantages2}>
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
                  </Box>
                </Grid>
                <Grid item xs={0}>
                  <img className={classes.avantagesImg} src="assets/avantages2.png" alt=""/>
                </Grid>
              </Grid>
            </Grid>   
          </Grid>
        </Box>

        {/*Section 8 Desktop*/}
        <Box elevation="20"  sx={{ display: { xs: 'none', sm: 'block' } }} align="center">
          <Grid container marginTop={4} direction="row" color="#A09369">
            <Grid item xs={7} margin="auto">
              <Grid container position="relative" direction="row" color="#A09369">
                <Grid item xs={9}>
                  <Box className={classes.avantages3}>
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
                  </Box>
                </Grid>
                <Grid item xs={0}>
                  <img className={classes.avantagesImg} src="assets/avantages3.png" alt=""/>
                </Grid>
              </Grid>
            </Grid>   
            <Grid item xs={2} margin="auto">
              <Button className={classes.but3} variant="contained">
                <Typography fontWeight="700" variant="h6">
                  DETAILS
                </Typography>
              </Button> 
            </Grid>   
          </Grid>
        </Box>

        {/*Section 9 Desktop*/}
        <Box elevation="20"  sx={{ display: { xs: 'none', sm: 'block' } }} align="center">
          <Grid container marginTop={4} direction="row" color="#A09369">
            <Grid item xs={3} margin="auto">
              <Button className={classes.but3} variant="contained">
                <Typography fontWeight="700" variant="h6">
                  DETAILS
                </Typography>
              </Button> 
            </Grid>   
            <Grid item xs={9}>
              <Grid container position="relative" direction="row" color="#A09369">
                <Grid item xs={8}>
                  <Box className={classes.avantages4}>
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
                  </Box>
                </Grid>
                <Grid item xs={0}>
                  <img className={classes.avantagesImg} src="assets/avantages4.png" alt=""/>
                </Grid>
              </Grid>
            </Grid>   
          </Grid>
        </Box>

        {/* Header Mobile*/}
        <Box className={classes.header_2} sx={{ display: { xs: 'block', sm: 'none' } }}>
          <Grid height="100%" container spacing={0} direction="column" alignItems="center" justifyContent="center">
            <Grid item>
              <Button className={classes.but2} variant="contained">
                <Typography fontWeight="700" variant="h6">
                  CONNEXION
                </Typography>
              </Button> 
            </Grid>
            <Grid item>
              <Typography className={classes.text1} fontWeight="500" width="100%" align="center" variant="h6">
                Vous pouvez vous connecter via votre Wallet ou par Email.
              </Typography>
            </Grid>
          </Grid>
        </Box>
       
        {/*Section 1 Mobile*/}
        <Box className={classes.section1_2} elevation="20"  sx={{ display: { xs: 'block', sm: 'none' } }}>
          <Box className={classes.image2}>
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
                <Button className={classes.but3} variant="contained">
                  <Typography fontWeight="700" variant="h6">
                    ACCEDER AU MINT
                  </Typography>
                </Button> 
              </Grid>
            </Grid>
          </Box>
        </Box>
        
        {/* Section 2 Mobile */}
        <Box className={classes.section2_2} sx={{ display: { xs: 'block', sm: 'none' } }}>
          <img className={classes.sun} src="assets/sun.png" alt=""/>
        </Box>
        
        {/* Section 3 Mobile */}
        <Box className={classes.section3_2} sx={{ display: { xs: 'block', sm: 'none' } }}>
          <img className={classes.img3} src="assets/img3.png" alt=""/>
          <Typography fontSize="large" fontWeight="700">
            Plus qu’un restaurant, le Vesuvio est un lieu incontournable situé sur la célèbre Croisette à Cannes caractérisé par deux salles liant festivité et convivialité. 
          </Typography>
          <Box display="inline-block"></Box>
          <Typography fontSize="large" fontWeight="700">
            Le Vesuvio propose une ambiance traditionnelle et convivial, tandis que le café vous permettra de prolonger vos soirées dans une ambiance lounge et festive. Concept intemporel il réunit depuis 1969, toutes générations venues des 4 coins du monde.
          </Typography>
        </Box>

        {/* Section 4 Mobile */}
        <Box className={classes.section4_2} sx={{ display: { xs: 'block', sm: 'none' } }}>
          <Grid container direction="column" alignItems="center" justifyContent="center" color="#A09369">
            <Grid item marginTop={4}>
              <Typography marginTop="64px" fontFamily="ITC Berkeley Oldstyle Std" fontWeight="700" variant="h3" color="#9E946E">
                GROUPE PRIVE
              </Typography>
            </Grid>
            <Grid item position="relative" marginTop={4}>
              <img className={classes.floatingLogo2} src="assets/logo2.png" alt=""/>
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
        </Box>
        
        {/* Section 5 Mobile */}
        <Box className={classes.section5} sx={{ display: { xs: 'block', sm: 'none' } }}>
          <Typography align="center" marginTop="64px" fontFamily="ITC Berkeley Oldstyle Std" fontWeight="700" variant="h3" color="#9E946E">
            AVANTAGES
          </Typography>
        </Box>

        {/* Section 6 Mobile */}
        <Box className={classes.avantages1_2} sx={{ display: { xs: 'block', sm: 'none' } }}>
          <Box className={classes.avantagesBox_2}>
            <img className={classes.avantagesImg_2} src="assets/avantages1.png" alt=""/>  
          </Box>
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
              <Button className={classes.but2} variant="contained">
                <Typography fontWeight="700" variant="h6" fontSize="24px">
                  PLUS DE DETAILS
                </Typography>
              </Button> 
            </Grid>
          </Grid>
        </Box>

        {/* Section 7 Mobile */}
        <Box className={classes.avantages2_2} sx={{ display: { xs: 'block', sm: 'none' } }}>
          <Box className={classes.avantagesBox_2}>
            <img className={classes.avantagesImg_2} src="assets/avantages2.png" alt=""/>  
          </Box>
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
              <Button className={classes.but2} variant="contained">
                <Typography fontWeight="700" variant="h6" fontSize="24px">
                  PLUS DE DETAILS
                </Typography>
              </Button> 
            </Grid>
          </Grid>
        </Box>

        {/* Section 8 Mobile */}
        <Box className={classes.avantages3_2} sx={{ display: { xs: 'block', sm: 'none' } }}>
          <Box className={classes.avantagesBox_2}>
            <img className={classes.avantagesImg_2} src="assets/avantages3.png" alt=""/>  
          </Box>
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
              <Button className={classes.but2} variant="contained">
                <Typography fontWeight="700" variant="h6" fontSize="24px">
                  PLUS DE DETAILS
                </Typography>
              </Button> 
            </Grid>
          </Grid>
        </Box>

        {/* Section 9 Mobile */}
        <Box className={classes.avantages4_2} sx={{ display: { xs: 'block', sm: 'none' } }}>
          <Box className={classes.avantagesBox_2}>
            <img className={classes.avantagesImg_2} src="assets/avantages4.png" alt=""/>  
          </Box>
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
              <Button className={classes.but2} variant="contained">
                <Typography fontWeight="700" variant="h6" fontSize="24px">
                  PLUS DE DETAILS
                </Typography>
              </Button> 
            </Grid>
          </Grid>
        </Box>

        {/* Section 10 Desktop and Mobile */}
        <Box>
          <Grid container direction="column" alignItems="center" justifyContent="center">
            <Grid item marginTop={4}>
              <Typography width="80%" align="center" margin="auto" fontSize="large" fontWeight="700" sx={{ fontSize: { xs: '24px', sm: '16px' } }}>
                Il est possible de vous connecter via votre Wallet ou votre email ainsi que de procéder à l’achat par carte bancaire. 
              </Typography>
            </Grid>
            <Grid item marginTop={4}>
              <Button className={classes.but2} variant="contained">
                <Typography fontWeight="700" variant="h6" fontSize="24px" sx={{ display: { xs: 'block', sm: 'none' } }}>
                  SE CONNECTER
                </Typography>
                  <Typography fontWeight="700" variant="h6" fontSize="24px" sx={{ display: { xs: 'none', sm: 'block' } }}>
                  CONNEXION
                </Typography>
              </Button> 
            </Grid>
            <Grid item marginTop={4} marginBottom={4}>
              <Button className={classes.but4} color="success" variant="contained">
                <Typography fontWeight="700" variant="h6" fontSize="24px" sx={{ display: { xs: 'block', sm: 'none' } }}>
                  ACCEDER AU MINT
                </Typography>
                <Typography fontWeight="700" variant="h6" fontSize="24px" sx={{ display: { xs: 'none', sm: 'block' } }}>
                  MINT
                </Typography>
              </Button> 
            </Grid>
          </Grid>
        </Box>

        {/* Footer Desktop */}
        <footer className={classes.footer}>
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
        </footer>
      </main>
    </>
  );
}

export default Home;