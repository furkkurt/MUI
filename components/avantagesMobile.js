import React from "react";
import { styled, Typography, AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@mui/material";
import { Menu } from "@mui/icons-material";

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

const But2 = styled(Button)(({ theme }) => ({
  color: "#A09369",
  width: "240px",
  height: "72px",
  [theme.breakpoints.down("sm")]: {
    width: "50vh",
  }
}));
function AvantagesMobile() {
  return(
    <>
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
    </>
  )
}

export default AvantagesMobile
