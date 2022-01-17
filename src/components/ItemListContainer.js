import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { firestoreFetch } from '../utils/firestoreFetch';
import { Grid } from '@mui/material';

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    //componentDidUpdate
    useEffect(() => {
        firestoreFetch(idCategory)
            .then(result => setDatos(result))
            .catch(err => console.log(err));
    }, [idCategory]);

    //componentWillUnmount
    useEffect(() => {
        return (() => {
            setDatos([]);
        })
    }, []);

    return (
            <Grid container>
                <Grid item columns={2} xs={12} sm={6} md={4} lg={4}>
            <ItemList style={{backgroundColor:"#fff4d8"}} items={datos}  />
            </Grid>
            </Grid>
    );
}

export default ItemListContainer;