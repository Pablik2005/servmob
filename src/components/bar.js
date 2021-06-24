import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    menuItem: {
      textTransform: "none",
      marginInline: "5px"
    }
  }))

const Bar = () => {
    const classes = useStyles();

    const items = [
      {name: "O Nas", url: "/"},
      {name: "Nowe Zlecenie", url: "/NewTask"},
      {name: "Opieka Informatyczna", url: "/ITCare"},
      {name: "Kontakt", url: "/Contact"}
    ];

    const end = {name: "Logowanie / Rejestracja", url: "/logReg"};


    
    const [barWidth, setBarWidth] = useState(window.innerWidth);
    
    React.useEffect(() => {
      function handleResize() {
        //console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
        setBarWidth(window.innerWidth);
      }
  
      window.addEventListener('resize', handleResize)
    });


    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const mobailMenu = () => {
      return(
        <Grid container direction="row" justify="center" alignItems="flex-start" style={{width:"100%", overflowX: 'auto'}}>
          <Button variant="contained" color="primary" onClick={handleClick}> <MenuIcon/> </Button> 
          <Menu
            anchorEl={anchorEl}
            keepMountedn
            open={Boolean(anchorEl)}
            onClose={handleClose}
            
          >
            {
              items.map((x, index)=>
                <Link keu={index} to={x.url}><MenuItem><Button variant="contained" color="primary" className={classes.menuItem} onClick={handleClose}> {x.name} </Button></MenuItem></Link>
              )
            }

          </Menu>
          <Link to={end.url}><Button variant="contained" color="primary" className={classes.menuItem}> {end.name } </Button></Link>
        </Grid>

      );
    }

    const desktopMenu = () => {
      return(
        <Grid container direction="row" justify="center" alignItems="flex-start" style={{width:"100%", overflowX: 'auto'}}>
          {
            items.map((x, index)=>
              <Link key={index} to={x.url}><Button variant="contained" color="primary" className={classes.menuItem}> {x.name} </Button></Link>
            )
          }
          <Link to={end.url}><Button variant="contained" color="primary" className={classes.menuItem}> {end.name} </Button></Link>
        </Grid>
      );
    }

    return ( 
        <AppBar position="sticky" spacing={3}>
        { barWidth > 700 ? desktopMenu() : mobailMenu() }
        </AppBar>
     );
}
 
export default Bar;