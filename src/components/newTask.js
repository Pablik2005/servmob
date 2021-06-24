import { AppBar, Grid, Paper } from '@material-ui/core';
import { TextField, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DelIcon from '@material-ui/icons/DeleteForever';
import { useState } from 'react';

const NewTask = () => {

    const [imgs, setImgs] = useState([]);
    const [imgCounter, setImgCounter] = useState([]);

    const test = () =>{
        console.log(imgCounter);
        console.log(imgs);
    }

    const delIMG = (index) => {
        console.log("sas");
    }

    const selectIMG = () =>{
        let input = document.getElementById("inputIMG");
        input.setAttribute("accept", ".bmp, .gif, .ico, .cur, .jpg, .jpeg, .jfif, .pjpeg, .pjp");
        input.addEventListener("change", addIMG(input), false);
        input.click();        
    }

    const addIMG = (input) =>{

        var reader = new FileReader();
        reader.addEventListener("load", function(){
            console.log("l")
            setImgs([...imgs, reader.result]);
          }, false);

        if(input.files[0])
            reader.readAsDataURL(input.files[0]);
    }

    return ( 
        <div className="NewTask">

            <AppBar position="static" style={{padding:"5px"}}>
                Nowe Zlecenie jako "Gość" <br />
                Zaloguj się lub utwórz konto aby mieć stały dostęp do zlecenia
            </AppBar>
            <Paper style={{padding:"10px"}}>
                <TextField required type="email" label="Email" variant="outlined" style={{marginTop: "10px", marginRight: "10px"}} />
                <TextField required type="tel" label="Telefon" variant="outlined" style={{marginTop: "10px", marginRight: "10px"}} />  
                <TextField required type="text" label="Imię" variant="outlined" style={{marginTop: "10px", marginRight: "10px"}} />
                <TextField required type="text" label="Nazwisko" variant="outlined" style={{marginTop: "10px", marginRight: "10px"}} />    
            </Paper>

            <AppBar position="static" style={{padding:"5px", marginTop: "10px"}}>
                Szczegóły 
            </AppBar>
            <Paper style={{padding:"10px"}}>
                <TextField required type="text" label="Nazwa / Model Urządzenia" variant="outlined" style={{marginTop: "10px", width:"80%"}} />
                <TextField required type="text" label="Opis" variant="outlined" multiline rows="10" style={{marginTop: "10px", width:"80%"}} />
  
                
                <Grid
                container
                style={{width:"80%", marginInline:"auto"}}
                
                >
                    {
                        imgs.map((x, index)=>
                            <div  key={index} style={{marginRight:"10px",marginTop:"10px", border: "1px solid", boShadow: "1px 1px #888888"}}>
                                <img src={x}  width="100px" height="100px"/>
                                <DelIcon  />
                            </div> 
                        )
                    }
                    <Paper style={{ width:"100px", height:"100px",marginTop:"10px" }} onClick={selectIMG} >
                        <AddIcon style={{ width:"100px", height:"100px" }} />
                    </Paper>

                
                </Grid>
            </Paper>
            <Button onClick={test}> TEst </Button>
            <input id="inputIMG" type="file" style={{display: "none"}}/>
        </div>
     );
}
 
export default NewTask;