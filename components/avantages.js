import {React, useEffect } from "react";
import { styled, Typography, AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@mui/material";
import { Menu } from "@mui/icons-material";
if (typeof window !== "undefined") {
  window.addEventListener('resize', function(event) {
    var offsetHeight = document.getElementById("largestAvantage").offsetHeight;
    document.getElementById("avantage1").style.height = offsetHeight+'px';
    document.getElementById("avantage2").style.height = offsetHeight+'px';
    document.getElementById("avantage3").style.height = offsetHeight+'px';
  }, true);
}
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
  margin: "auto",
  marginLeft: "32px",
  width: "100%"
}));

const AvantagesImg = styled(Box)(({ theme }) => ({
  height: "100%",
  minWidth: "100px",
  position: "absolute",
}));

const But3 = styled(Button)(({ theme }) => ({
  color: "#A09369",
  width: "100%",
  height: "60px",
}));

function Avantages() {
  return(
    <>
    <Box container alignItems="center" sx={{ display: { xs: 'none', sm: 'block' } }} align="center">
      <Grid container marginTop={4} direction="row" color="#A09369">
        <Grid item md={7} sm={7} margin="auto">
          <Grid container position="relative" direction="row" color="#A09369">
            <Grid item md={9} sm={8}>
              <Avantages1 id="avantage1">
                <Grid container direction="column" alignItems="center" justifyContent="center" color="#A09369">
                  <Grid item marginTop={4}>
                    <Typography variant="h4" color="#FFF" fontFamily="ITC Berkeley Oldstyle Std" fontWeight="500">
                      Fast Pass
                    </Typography>
                  </Grid>
                  <Grid item marginTop={4} marginBottom={4}>
                    <Typography color="#FFF" fontWeight="700" width="80%" align="center" margin="auto" fontSize="20px">
                      Seuls les membres de cette communaut?? auront la possibilit?? de r??server dans nos ??tablissements.
                    </Typography>
                  </Grid>
                </Grid>
              </Avantages1>
            </Grid>
            <Grid item xs={0}>
              <AvantagesImg>
                <img height="100%" width="auto" src="assets/avantages1.png" alt=""/>  
              </AvantagesImg>
            </Grid>
          </Grid>
        </Grid>   
        <Grid item sm={3}sx={{ display: { sm: 'block', md: 'none' } }}>
        </Grid>
        <Grid item md={2} sm={2} margin="auto">
          <But3 variant="contained">
            <Typography fontWeight="700" fontSize="20px">
              DETAILS
            </Typography>
          </But3> 
        </Grid>   
      </Grid>
    </Box>

    <Box container sx={{ display: { xs: 'none', sm: 'block' } }} align="center">
      <Grid container marginTop={4} direction="row" color="#A09369">
        <Grid item xs={3} margin="auto">
          <But3 variant="contained">
            <Typography fontWeight="700" fontSize="20px">
              DETAILS
            </Typography>
          </But3> 
        </Grid>   
        <Grid item xs={7}>
          <Grid container position="relative" direction="row" color="#A09369">
            <Grid item xs={8}>
              <Avantages2 id="avantage2">
                <Grid container direction="column" alignItems="center" justifyContent="center" color="#A09369">
                  <Grid item marginTop={4}>
                    <Typography variant="h4" color="#FFF" fontFamily="ITC Berkeley Oldstyle Std" fontWeight="500">
                      Mangiare Gratis
                    </Typography>
                  </Grid>
                  <Grid item marginTop={4} marginBottom={4}>
                    <Typography color="#FFF" fontWeight="700" width="80%" align="center" margin="auto" fontSize="20px">
                      Vous pourrez profiter ?? vie d???un plat par jour offert par la maison.
                    </Typography>
                  </Grid>
                </Grid>
              </Avantages2>
            </Grid>
            <Grid item xs={0}>
              <AvantagesImg>
                <img width="auto" height="100%" src="assets/avantages2.png" alt=""/>  
              </AvantagesImg>
            </Grid>
          </Grid>
        </Grid>   
        <Grid item xs={1}>
        </Grid>
      </Grid>
    </Box>

    <Box container alignItems="center" sx={{ display: { xs: 'none', sm: 'block' } }} align="center">
      <Grid container marginTop={4} direction="row" color="#A09369">
        <Grid item md={7} sm={7} margin="auto">
          <Grid container position="relative" direction="row" color="#A09369">
            <Grid item md={9} sm={8}>
              <Avantages3 id="avantage3">
                <Grid container direction="column" alignItems="center" justifyContent="center" color="#A09369">
                  <Grid item marginTop={4}>
                    <Typography variant="h4" color="#FFF" fontFamily="ITC Berkeley Oldstyle Std" fontWeight="500">
                      Events Priv??s
                    </Typography>
                  </Grid>
                  <Grid item marginTop={4} marginBottom={4}>
                    <Typography color="#FFF" fontWeight="700" width="80%" align="center" margin="auto" fontSize="20px">
                      Un acc??s privil??gi?? aux ??v??nements priv??s organis??s par Le Vesuvio.
                    </Typography>
                  </Grid>
                </Grid>
              </Avantages3>
            </Grid>
            <Grid item xs={0}>
              <AvantagesImg>
                <img height="100%" width="auto" src="assets/avantages3.png" alt=""/>  
              </AvantagesImg>
            </Grid>
          </Grid>
        </Grid>   
        <Grid item sm={3}sx={{ display: { sm: 'block', md: 'none' } }}>
        </Grid>
        <Grid item md={2} sm={2} margin="auto">
          <But3 variant="contained">
            <Typography fontWeight="700" fontSize="20px">
              DETAILS
            </Typography>
          </But3> 
        </Grid>   
      </Grid>
    </Box>

    <Box container sx={{ display: { xs: 'none', sm: 'block' } }} align="center">
      <Grid container marginTop={4} direction="row" color="#A09369">
        <Grid item xs={3} margin="auto">
          <But3 variant="contained">
            <Typography fontWeight="700" fontSize="20px">
              DETAILS
            </Typography>
          </But3> 
        </Grid>   
        <Grid item xs={7}>
          <Grid container position="relative" direction="row" color="#A09369">
            <Grid item xs={8}>
              <Avantages4 id="largestAvantage">
                <Grid container direction="column" alignItems="center" justifyContent="center" color="#A09369">
                  <Grid item marginTop={4}>
                    <Typography variant="h4" color="#FFF" fontFamily="ITC Berkeley Oldstyle Std" fontWeight="500">
                      Inviations
                    </Typography>
                  </Grid>
                  <Grid item marginTop={4} marginBottom={4}>
                    <Typography color="#FFF" fontWeight="700" width="80%" align="center" margin="auto" fontSize="20px">
                      Inviter des amis ?? se joindre ?? eux pour des d??ners dans des salles priv??es, ou pour des soir??es sur la terrasse avec vue sur la mer. 
                    </Typography>
                  </Grid>
                </Grid>
              </Avantages4>
            </Grid>
            <Grid item xs={0}>
              <AvantagesImg>
                <img width="auto" height="100%" src="assets/avantages4.png" alt=""/>  
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
