import Grid from '@material-ui/core/Grid';

import logoImg from '../res/logo.png';
import bgImg from '../res/bg.jpg';


const Logo = () => {
    return ( 
        <div className="Logo" style={{height: "200px", backgroundImage: 'url('+ bgImg +')',paddingTop: "5px", paddingBottom:"5px"}}>
            

            <Grid container spacing={2} alignItems="center">
                <Grid item xs={5}>
                    <img src={logoImg} alt="logo" height="200px" ></img>
                </Grid>
                <Grid item xs={7}  style={{fontFamily: "Algerian", fontSize:"40px", color: "white"}}>
                    SERVMOB
                    <p style={{fontFamily: "Times New Roman", fontSize:"20px"}}>Servis mobilny z wyceną naprawy Online</p>
                </Grid>
            </Grid>

                    
                        
        

        </div>
     );
}
 
export default Logo;