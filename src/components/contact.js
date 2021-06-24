import { AppBar, Paper } from '@material-ui/core';
import { TextField, Button } from '@material-ui/core';

const Contact = () => {
    return ( 
        <div className="Contact" style={{marginInline: "auto"}}>
      
            <AppBar position="static" style={{padding:"5px"}}>
                Kontakt
            </AppBar>
            <Paper>
                <form>
                    <TextField required type="email" label="Email" variant="outlined" style={{marginTop: "15px", width: "80%"}} /><br/>
                    <TextField required type="text" label="Temat" variant="outlined" style={{marginTop: "15px", width: "80%"}} /><br/>
                    <TextField required type="text" label="Treść" variant="outlined" multiline rows="20" style={{marginTop: "15px", width: "80%"}} /><br/>
                    <Button type="submit" variant="contained" color="primary" style={{marginTop: "15px", marginBottom: "15px"}}>Wyślij</Button>
                </form>
            </Paper>

        </div>
     );
}
 
export default Contact;