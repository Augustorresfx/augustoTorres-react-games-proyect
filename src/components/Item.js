import { DescriptionOutlined, InfoOutlined, LocalOfferOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { ProductContainer, Circle, Image, Info, Icon } from './styledComponents';

const Item = ({ id, title, stock, price, image }) => {
    return (
        <ProductContainer>
            <Circle />
            <Image src={image} />
            <Info>
                <Icon>
                    <LocalOfferOutlined style={{fontFamily:"poppins", fontWeight:"500", textDecoration: "none", color: "black"}}/><strong>$ {price}</strong>
                </Icon>
                <Icon>
                    <DescriptionOutlined style={{fontFamily:"poppins", fontWeight:"500", textDecoration: "none", color: "black"}}/>{stock} Unidades
                </Icon>
                <Icon style={{cursor: "pointer"}}>
                    <Link to={`/item/${id}`} style={{fontFamily:"poppins", fontWeight:"500", textDecoration: "none", color: "black"}}><InfoOutlined />Ver detalles</Link>
                </Icon>
            </Info>
        </ProductContainer>
    );
}

export default Item;