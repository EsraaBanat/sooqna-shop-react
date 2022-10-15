import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import {Button} from "react-bootstrap"
import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Cart.css';
import {removeOneFromCart,removeAllCart} from "../../api/api";
import { Context } from '../../context/context';

export default function Cart() {

    const states = useContext(Context);
    const { token, items, order, setOrder, handleSubmitedOrder, cartItems } = states
    const products = states.cartProducts;
    const navigate = useNavigate();
    
    const [show,
        setShow] = useState(true)
    
    const totalPrice =products.reduce((acc, cv) => {
            return acc + parseInt(cv.price)
        }, 0)


        
        const handleChange = (prop) => (event) => {
        setOrder({
            ...order,
            [prop]: event.target.value,
        });
    };


    function handleSubmitOrder() {
        Swal.fire({
            title: 'Do you want to Submit your Order?',
            showDenyButton: true,
            // showCancelButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `No`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                handleSubmitedOrder()
                Swal.fire('Perfect', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Order calnceled', '', 'info')
            }
        })
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        cartItems();
    }, [])

    return (
        <section style={{ backgroundColor: "#eee", margin: '-1.5rem 0 1.5rem 0 ', padding: '7rem 26rem 11rem 1rem'}}>
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100"
                    style={{ margin: '0px -16rem 0rem 0' }}
                >
                    <MDBCol size="12">
                        <MDBCard className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                            <MDBCardBody className="p-0">
                                <MDBRow className="g-0">
                                    <MDBCol lg="8">
                                        <div className="p-5">
                                            <div className="d-flex justify-content-between align-items-center mb-5">
                                                <MDBTypography tag="h1" className="fw-bold mb-0 text-black" style={{ fontstyle:'italic', fontvariantcaps: 'petite-caps'}}>
                                                    Shopping Cart
                                                </MDBTypography>
                                                <i onClick={() => { 
                                                    removeAllCart(token)
                                                    setShow(false)
                                                }} className="fas fa-trash" style={{cursor: 'pointer'}} ></i>
                                            </div>

                                            <hr style={{ margin: '0 29rem' }} />
                                              
                                            {products ? products.map((item, idx) => {
                                                return show ?
                                                    <MDBRow className="mb-4 d-flex justify-content-between align-items-center" key={idx}>
                                                        <MDBCol md="2" lg="2" xl="2">
                                                            <MDBCardImage
                                                                src={item.image}
                                                                fluid className="rounded-3" alt="loading" />
                                                        </MDBCol>
                                                        <MDBCol md="3" lg="3" xl="3">
                                                            <MDBTypography tag="h6" className="text-muted">
                                                                {item.title}
                                                            </MDBTypography>
                                                        </MDBCol>
                                                        <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
                                                        </MDBCol>
                                                        <MDBCol md="3" lg="2" xl="2" className="text-end">
                                                            <MDBTypography tag="h6" className="mb-0">
                                                                {item.price} $
                                                            </MDBTypography>
                                                        </MDBCol>
                                                        <MDBCol md="1" lg="1" xl="1" className="text-end" key={idx}>
                                                            <a href="#!" className="text-muted">
                                                                <MDBIcon onClick={() => {
                                                                    removeOneFromCart(items[idx].id, token)
                                                                }} fas icon="times" />
                                                            </a>
                                                        </MDBCol>
                                                    </MDBRow> : null
                                            })

                                                : <div ></div>
                                           
                                            }

                                            <hr className="my-4" />

                                            <div className="pt-5">
                                                <MDBTypography tag="h6" className="mb-0" onClick={() => {
                                                    navigate('/');
                                                }}>
                                                    <MDBCardText tag="a" href="#!" className="text-body">
                                                        <MDBIcon fas icon="long-arrow-alt-left me-2" /> Back
                                                        to shop
                                                    </MDBCardText>
                                                </MDBTypography>
                                            </div>
                                        </div>
                                    </MDBCol>
                                    <MDBCol lg="4" className="bg-grey">
                                        <div className="p-5">
                                            <MDBTypography tag="h3" className="fw-bold mb-5 mt-2 pt-1">
                                                Summary
                                            </MDBTypography>

                                            <hr className="my-4" />

                                            <div className="d-flex justify-content-between mb-4">
                                                <MDBTypography tag="h5" className="text-uppercase">
                                                    items :
                                                </MDBTypography>
                                                <MDBTypography tag="h5">{products.length}</MDBTypography>
                                            </div>

                                            <MDBTypography tag="h5" className="text-uppercase mb-3">
                                                Payment Method
                                            </MDBTypography>

                                            <div className="mb-4 pb-2">
                                                <select className="select p-2 rounded bg-grey" style={{ width: "100%" }} onChange={handleChange('payment_method')}>
                                                    <option value="Cash On Delivery">Cash On Delivery</option>
                                                    <option value="VISA Card">VISA Card</option>
                                                </select>
                                            </div>

                                            <MDBTypography tag="h5" className="text-uppercase mb-3">
                                                another address
                                            </MDBTypography> 

                                            <div className="mb-5">
                                                <MDBInput size="lg" label="Enter Another Address" onChange={handleChange('adress')} />
                                            </div>

                                            <hr className="my-4" />

                                            <div className="d-flex justify-content-between mb-5">
                                                <MDBTypography tag="h5" className="text-uppercase">
                                                    Total price
                                                </MDBTypography>
                                                <MDBTypography tag="h5">{totalPrice} $</MDBTypography>
                                            </div>

                                             <Button variant="dark"  size="lg" onClick={() => {
                                                handleSubmitOrder()
                                            }}> 
                                                Submit Order
                                            </Button>
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}