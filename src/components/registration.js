import { AppBar, Paper } from '@material-ui/core';
import { TextField, Button } from '@material-ui/core';

const Registration = () => {
    return ( 
        <div className="Registration" style={{width: "300px", marginInline: "auto", marginTop: "20px"}}>
      
            <AppBar position="static" style={{padding:"5px"}}>
                Rejestracja
            </AppBar>
            <Paper>
                <form>
                    <TextField required type="email" label="Email" variant="outlined" style={{marginTop: "15px"}} />
                    <TextField required type="password" label="Hasło" variant="outlined" style={{marginTop: "15px"}} /><br/>
                    <TextField required type="password" label="Powtórz Hasło" variant="outlined" style={{marginTop: "15px"}} /><br/>
                    <TextField required type="text" label="Imię" variant="outlined" style={{marginTop: "15px"}} /><br/>
                    <TextField required type="text" label="Nazwisko" variant="outlined" style={{marginTop: "15px"}} /><br/>
                    <TextField required type="tel" label="Telefon" placeholder="123456789" variant="outlined" style={{marginTop: "15px"}} /><br/>
                    <Button type="submit" variant="contained" color="primary" style={{marginTop: "15px", marginBottom: "15px"}}>Zarejestruj</Button>
                </form>
            </Paper>

        </div>
     );

}
 
export default Registration;