import React, { useContext, useEffect } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import { removeOneFromWishList, moveFromWishlistToCart } from "../../api/api";
import { Context } from '../../context/context';

export default function Wishlist() {

    const states = useContext(Context);
    const { token, productsInWishlist, itemsInWishlist, wislistItems } = states
    useEffect(() => {
        wislistItems()
        window.scrollTo(0, 0)
    }, [])
    return (
        <section className="h-100" style={{ backgroundColor: "#eee", margin: '100px 13rem', paddingBottom: '18rem' }}>
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol md="10" style={{ marginRight:'9rem'}}>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
                                WishList
                            </MDBTypography>
                        </div>
                        {productsInWishlist ? 
                            productsInWishlist.map((item,idx) => {
                                return (
                                    <MDBCard className="rounded-3 mb-4" key={idx}>
                                <MDBCardBody className="p-4">
                                    <MDBRow className="justify-content-between align-items-center">
                                        <MDBCol md="2" lg="2" xl="2">
                                            <MDBCardImage className="rounded-3" fluid
                                                        src={`${item.image}`}
                                                alt="Loading ..." 
                                                />
                                        </MDBCol>
                                        <MDBCol md="3" lg="3" xl="3">
                                                    <p className="lead fw-normal mb-2">{item.title}</p>
                                            <p>
                                                {/* <span className="text-muted">Size: </span>M{" "} */}
                                                        <span className="text-muted">Color: </span>{item.color}
                                            </p>
                                        </MDBCol>
                                        <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                                            <MDBTypography tag="h5" className="mb-0">
                                                        {`${item.price}$`}
                                            </MDBTypography>
                                        </MDBCol>

                                        <MDBCol md="1" lg="1" xl="1" className="text-end">
                                            <a href="#!" className="text-danger" >
                                            <MDBIcon onClick={() => { moveFromWishlistToCart(item.id,token) }} fas icon="cart-plus text-danger" size="lg" />
                                            </a>
                                        </MDBCol>
                                        <MDBCol md="1" lg="1" xl="1" className="text-end">
                                            <a href="#!" className="text-danger" >
                                                        <MDBIcon onClick={() => { removeOneFromWishList(itemsInWishlist[idx].id,token) }} fas icon="trash text-danger" size="lg" />
                                            </a>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>
                                )
                            })
                        : null}
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}