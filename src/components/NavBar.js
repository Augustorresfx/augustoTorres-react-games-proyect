import { AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { Image, Wrapper, Logo, MenuItem, Left, Center, Right } from './styledComponents';


const NavBar = () => {
    return (
        <AppBar position="relative" style={{backgroundColor:"black"}}>
            <Wrapper>
                <Left>
                    <Link to='/' style={{textDecoration: "none", color: "white"}}><Logo><Image src="/logo192.png" style={{position: "relative", top:"10px", maxHeight: "50px", marginRight: "10px"}}></Image>React-Games</Logo></Link>
                </Left>
                <Center>
                    <Link to='/category/1' style={{textDecoration: "none", color: "white"}}><MenuItem>Estrategia</MenuItem></Link>
                    <Link to='/category/2' style={{textDecoration: "none", color: "white"}}><MenuItem>Disparos</MenuItem></Link>
                    <Link to='/category/3' style={{textDecoration: "none", color: "white"}}><MenuItem>Mundo Abierto</MenuItem></Link>                    
                </Center>
                <Right>
                    <MenuItem><Link to="/cart" style={{textDecoration: "none", color: "white"}}>Carrito<CartWidget /></Link></MenuItem>
                </Right>
            </Wrapper>
        </AppBar>
    );
}

export default NavBar;