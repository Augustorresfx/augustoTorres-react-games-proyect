import Item from "./Item";
import { Grid } from "@mui/material";
import { ProductsContainer } from './styledComponents';

const ItemList = ({ items }) => {
    return (
        <ProductsContainer style={{backgroundColor:"#fff4d8"}}>
        {
            items.length > 0
            ? items.map(item => <Item key={item.id} id={item.id} title={item.name} price={item.cost} image={item.image[0]} stock={item.stock} />)
            : <p>Cargando...</p>
        }
        </ProductsContainer>
    );
}

export default ItemList;