import React from "react";
import { styled, Typography, AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@mui/material";
import { Menu } from "@mui/icons-material";

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

const AvantagesImg = styled(Box)(({ theme }) => ({
  height: "100%",
  minWidth: "150px",
  position: "absolute",
}));

const But3 = styled(Button)(({ theme }) => ({
  color: "#A09369",
  width: "240px",
  height: "60px"
}));
function Avantages() {
  return(
    <>
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

    <Box container elevation="20"  sx={{ display: { xs: 'none', sm: 'block' } }} align="center">
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
    </>
  )
}

export default Avantages