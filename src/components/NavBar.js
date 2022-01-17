import { AppBar, Grid, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useState } from "react";
import CartWidget from "./CartWidget";
import { Menu, } from "@mui/icons-material";
import { Hidden, IconButton } from "@mui/material";
import { Wrapper, Logo, MenuItem, Left, Center, Right } from './styledComponents';
import { SwipeableDrawer } from "@mui/material";
import { Divider } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";
import { List, ListItem } from "@mui/material";

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    logoLg: {
        display: "none",
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    logoSm: {
        display: "block",
        width: "50%",
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    categories: {
        display: "flex",
        [theme.breakpoints.down("sm")]: {
            
        },
    },
    menuButton: {
        color: "black",
        [theme.breakpoints.up("sm")]: {
            display: (props) => props.open ? "flex" : "none",
        },

    },
}));

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles({ open });
    return (
        <Grid container>
            <AppBar className={classes.toolbar} position="relative" style={{backgroundColor:"#b3f3f3"}}>
                <Wrapper>
                    <Grid item xs={3} sm={6}>
                    <Left>
                        <Link to='/' style={{fontFamily:"poppins", textDecoration: "none", color: "black"}}><Logo className={classes.logoLg}>Acapulco store</Logo><Logo className={classes.logoSm}>Acapulco</Logo></Link>
                    </Left>
                    </Grid>
                    <Hidden mdDown>
                    <Grid item xs={3} sm={6}>
                    <Center className={classes.categories}>
                        <Link to='/category/fsSI8KNPGGdOMgHSXik5' style={{fontFamily:"poppins", fontWeight:"600", textDecoration: "none", color: "black"}}><MenuItem>Sillas y sillones</MenuItem></Link>
                        <Link to='/category/qe7S2gHjWzi5qzpzt5UY' style={{fontFamily:"poppins", fontWeight:"600", textDecoration: "none", color: "black"}}><MenuItem>Mesas</MenuItem></Link>
                        <Link to='/category/Uzm28A93pQuIoI9GBaEz' style={{fontFamily:"poppins", fontWeight:"600", textDecoration: "none", color: "black"}}><MenuItem>Espejos</MenuItem></Link>                    
                    </Center> 
                    </Grid>
                    <Grid item xs={3} sm={6}>
                    <Right>
                        <MenuItem style={{fontFamily:"poppins", fontWeight:"bold", textDecoration: "none", color: "black"}}>REGISTER</MenuItem>
                        <MenuItem style={{fontFamily:"poppins", fontWeight:"bold", textDecoration: "none", color: "black"}}>SIGN IN</MenuItem>
                        <MenuItem><Link to='/cart' style={{textDecoration: "none", color: "black"}}><CartWidget /></Link></MenuItem>
                    </Right>
                    </Grid>
                    </Hidden>
                    <Hidden mdUp>
                    <Right>
                    <MenuItem><Link to='/cart' style={{textDecoration: "none", color: "black"}}><CartWidget /></Link></MenuItem>
                    </Right>
                    </Hidden>
                    <Hidden mdUp>
                    <IconButton>
                    <Menu className={classes.menuButton} onClick={() => setOpen(true)}>
                    </Menu>
                    </IconButton>
                    </Hidden>
                </Wrapper>
                <SwipeableDrawer anchor="right" open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)} >
                    <div>
                    <IconButton>
                        <ChevronRight onClick={() => setOpen(false)}/>
                    </IconButton>
                    </div>
                    <Divider/>
                    <List>
                        <ListItem>
                        <Link to='/category/fsSI8KNPGGdOMgHSXik5' style={{fontFamily:"poppins", fontWeight:"600", textDecoration: "none", color: "black"}}><MenuItem>Sillas y sillones</MenuItem></Link>
                        </ListItem>
                        <ListItem>
                        <Link to='/category/qe7S2gHjWzi5qzpzt5UY' style={{fontFamily:"poppins", fontWeight:"600", textDecoration: "none", color: "black"}}><MenuItem>Mesas</MenuItem></Link>
                        </ListItem>
                        <ListItem>
                        <Link to='/category/Uzm28A93pQuIoI9GBaEz' style={{fontFamily:"poppins", fontWeight:"600", textDecoration: "none", color: "black"}}><MenuItem>Espejos</MenuItem></Link>                    
                        </ListItem>
                        <ListItem>
                        <MenuItem style={{fontFamily:"poppins", fontWeight:"bold", textDecoration: "none", color: "black"}}>REGISTER</MenuItem>
                        </ListItem>
                        <ListItem>
                        <MenuItem style={{fontFamily:"poppins", fontWeight:"bold", textDecoration: "none", color: "black"}}>SIGN IN</MenuItem>
                        </ListItem>
                    </List>
                </SwipeableDrawer>
            </AppBar>
        </Grid>
    );
}

export default NavBar;