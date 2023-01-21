import { makeStyles } from "@mui/styles";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: "#FFF",
    width: "100%",
    height: "100vh",
  },
  appbar: {
    [theme.breakpoints.down("sm")]: {
      height: "0px",
    }
  },
  leVesuvio: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
      top: "48px",
    }
  },
  nft: {
    [theme.breakpoints.down("sm")]: {
      width: "32px",
    }
  },
  nftBox: {
    [theme.breakpoints.down("sm")]: {
      left: "88px",
      top: "52px"
    },
  },
  floatingLogo: {
    position: "absolute",
    top: "-40px",
    left: "50%",
    transform: "translate(-50%, -50%)",
    msTransform: "translate(-50%, -50%)",
    height: "214px",
    [theme.breakpoints.down("sm")]: {
      width: "156px",
      height: "156px",
      top: "0px"
    }
  },
  hamburger: {
    transform: "scale(2)",
    color: "#9E946E",
    [theme.breakpoints.down("sm")]: {
      top: "48px"
    }
  },
  but2: {
    color: "#A09369",
    width: "240px",
    height: "72px",
    [theme.breakpoints.down("sm")]: {
      width: "50vh",
    }
  },
  but3: {
    color: "#A09369",
    width: "240px",
    height: "60px"
  },
  but4: {
    color: "#FFF",
    height: "72px",
    width: "240px",
    [theme.breakpoints.down("sm")]: {
      width: "50vh",
    }
  },
  text1: {
    marginTop: "16px",
    color: "#FFF",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    }
  },
  header: {
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
    overflow: "hidden",
  },
  header_2: {
    backgroundImage: "url('assets/img2.png')",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    width:"100%",
    minHeight:"100px",
    marginTop: "75px",
    backgroundColor: "#FFF",
    height: "100vh",
    overflow: "hidden",
  },
  section1_2: {
    minHeight: "200px",
    width: "100%",
    overflow: "hidden",
  },
  image2: {
    height: "100%",
    width: "100%",
    backgroundImage: "url('assets/bg1.png')",
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    margin: "auto",
  },
  sun: {
    display: "block",
    marginleft: "auto",
    marginright: "auto",
    width: "100%",
  },
  img3: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
    marginBottom: "48px",
  },
  sun2: {
    display: "block",
    marginleft: "auto",
    marginright: "auto",
    width: "100%",
    marginTop: "-120px"
  },
  section3: {
    minHeight: "200px",
    width: "100%",
    backgroundImage: "url('assets/bg1_2.png')",
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    margin: "auto",
    marginTop: "32px",
  },
  section3_2: {
   marginLeft: "auto",
   marginRight: "auto",
   width: "80%",
  },
  section4_2: {
    minHeight: "200px",
    width: "100%",
    backgroundImage: "url('assets/bg2.png')",
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    margin: "auto",
    marginTop: "32px",
  },
  floatingLogo2: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "80%",
  },
  section5: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    align: "center"
  },
  avantages1: {
    backgroundImage: "url('assets/bg7.png')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    minHeight: "172px",
    width: "110%",
    margin: "auto"
  },
  avantages2: {
    backgroundImage: "url('assets/bg8.png')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    minHeight: "172px",
    marginLeft: "32px",
    width: "100%"
  },
  avantages3: {
    backgroundImage: "url('assets/bg9.png')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    minHeight: "172px",
    width: "110%",
    margin: "auto"
  },
  avantages4: {
    backgroundImage: "url('assets/bg10.png')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    minHeight: "172px",
    margin: "auto",
    marginLeft: "32px",
    width: "100%"
  },
  avantages1_2: {
    minHeight: "100px",
    width: "100%",
    backgroundSize: "100% 100%",
    backgroundImage: "url('assets/bg3.png')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    margin: "auto",
    marginTop: "176px",  
    position: "relative"
  },
  avantages2_2: {
    minHeight: "100px",
    width: "100%",
    backgroundSize: "100% 100%",
    backgroundImage: "url('assets/bg4.png')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    margin: "auto",
    marginTop: "176px",  
    position: "relative"
  },
  avantages3_2: {
    minHeight: "100px",
    width: "100%",
    backgroundSize: "100% 100%",
    backgroundImage: "url('assets/bg5.png')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    margin: "auto",
    marginTop: "176px",  
    position: "relative"
  },
  avantages4_2: {
    minHeight: "100px",
    width: "100%",
    backgroundSize: "100% 100%",
    backgroundImage: "url('assets/bg6.png')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    margin: "auto",
    marginTop: "176px",  
    position: "relative"
  },
  avantagesImg: {
    height: "100%",
    position: "absolute",
  },
  avantagesImg_2: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "70%",
    align: "center",
  },
  avantagesBox_2: {
    width: "100%",
    position: "absolute",
    top: "-128px",
  },
  avantagesHeader_2: {
    color: "#FFF",
  },
  footer: {
    width: "100%",
    height: "256px",
    backgroundColor: "#282828"
  }
}));

export default useStyles;
