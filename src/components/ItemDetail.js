import { Button } from '@material-ui/core';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Title, Desc, Price } from './styledComponents';
import { CartContext } from './CartContext';
import { Grid } from '@mui/material';

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
        setItemCount(qty);
        test.addToCart(item, qty);
    }

    return (
        <>
        {
            item && item.image
            ? 
            <DetailContainer>
                <WrapperDetail>
                    <Grid container>
                    <Grid item xs={12} sm ={8} md={6} lg={4} xl={4}>
                    <ImgContainer>
                        <ImageDetail src={item.image[0]} />
                    </ImgContainer>
                    </Grid>
                    <InfoContainer>
                        <Title style={{fontFamily:"poppins", fontWeight:"500", textDecoration: "none", color: "black"}}>{item.name}</Title>
                        <Desc style={{fontFamily:"poppins", fontWeight:"500", textDecoration: "none", color: "black"}}>{item.description}</Desc>
                        <Price style={{fontFamily:"poppins", fontWeight:"500", textDecoration: "none", color: "black"}}>$ {item.cost}</Price>
                        <Desc style={{fontFamily:"poppins", fontWeight:"500", textDecoration: "none", color: "black"}}>{item.stock} unidades en stock</Desc>
                    </InfoContainer>
                    {
                        itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        : <Link to='/cart' style={{textDecoration: "none"}}><Button variant="contained" color="secondary">CheckOut</Button></Link>
                    }
                    </Grid>
                </WrapperDetail>
            </DetailContainer>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;