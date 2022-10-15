import React, { useContext, useEffect } from "react";
import HomeCard from "./HomeCard";
import SlideShow from "./SlideShow";
import {Container, Row} from "react-bootstrap";
import "./Home.css";
import {Context} from '../../context/context';

function Home() {

    const states = useContext(Context);
    const { products, user, loadItems } = states;
    // const { itemDetails } = states;

    useEffect(() => {
        loadItems();
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <SlideShow />
            <br/>
            <h1
                style={{
                fontFamily: 'inherit',
                color: 'darkblue',
                fontSize: '100 px',
                marginTop: '55 px',
            }}>Featured Products</h1>
            <Container
                fluid='sm'
                style={{
                margin: '13px 3rem 13px 5rem'
            }}
            >
                <Row xs="4">

                    {products
                        ? products.map((product, idx) => {
                            return (<HomeCard product={product} key={idx}/>)
                        })
                        : null}
                </Row>

            </Container>

        </>
    );
}

export default Home;
