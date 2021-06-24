import { AppBar, Paper } from '@material-ui/core';
import { TextField, Button } from '@material-ui/core';


const Login = () => {

    return ( 
        <div className="Login" style={{width: "300px", marginInline: "auto"}}>
      
            <AppBar position="static" style={{padding:"5px"}}>
                Logowanie
            </AppBar>
            <Paper>
                <form>
                    <TextField required type="email" label="Email" variant="outlined" style={{marginTop: "15px"}} />
                    <TextField required type="password" label="Hasło" variant="outlined" style={{marginTop: "15px"}} /><br/>
                    <Button type="submit" variant="contained" color="primary" style={{marginTop: "15px", marginBottom: "15px"}}>Zaloguj</Button>
                </form>
            </Paper>

        </div>
     );
}
 
export default Login;