import React, {useContext,useEffect} from 'react';
import MyProductCard from './myProductCard';
import {Container, Row} from 'react-bootstrap';
import { Context } from '../../context/context';
// import './product.css'

function MyProducts() {

    const states = useContext(Context);
    const {myItems,allPostedProducts} = states;
    
    useEffect(() => {
        allPostedProducts();
window.scrollTo(0, 0)
}, [])
    return (
        <>
            <h1 style={{
                marginTop: "5rem",
                // paddingBottom: '20rem'
            }}>My Product</h1>
            <Container fluid='sm' style={{
                marginLeftt: '2rem'
            }}>
                <Row xs="4">
                    {myItems
                        ? myItems.map((item, idx) => {
                            return (<MyProductCard product={item} key={idx}/>)
                        })
                        : 
                        // < h2 style={{margin: '-10rem 0 0 31rem'}} > No Items Yet</h2>
                        null
                        }
                </Row>
            </Container>
        </>
    )
};

export default MyProducts