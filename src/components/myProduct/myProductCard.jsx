import React, { useContext }  from 'react';
import { Card, Button } from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';
import { removeOneMyProduct } from '../../api/api';
import UpdateProduct from '../Product/UpdateProduct';
import { BsCartPlus } from "react-icons/bs";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { Context } from '../../context/context';
import '../Home/Home.css';


function MyProductCard({ product }) {
    const states = useContext(Context);
    const { token,getItemDetails } = states;

    const navigate = useNavigate();
    return (
        // <Card id='Card' style={{background:'whitesmoke'}}>
        //     <Card.Img
        //         variant="top"
        //         src={item.item.image} style={{height:'11rem',width:'97%'}}/>
        //     <Card.Body>
        //         <Card.Title>{item.item.title}</Card.Title>
        //         <Card.Text>
        //             {item.item.description}
        //         </Card.Text>
        //         <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly/>
        //     </Card.Body>
        //     <Card.Footer>
        //         <Card.Title>Price</Card.Title>
        //         <Button variant="warning"onClick={() => { navigate('/updateproduct')}}>Update</Button> <Button variant="danger" onClick={() => {removeOneMyProduct(item.item.id,token) }}>Delete</Button>
        //     </Card.Footer>
        // </Card>

        <ul>
            <li className="booking-card" style={{ backgroundImage: `url(${product.image})`, marginTop: '8rem' }}>
                <div className="book-container">
                    <div className="content">
                        <button className="btn" onClick={() => {
                            getItemDetails(product.id)
                            navigate('/viewdetails')
                        }}>View Details</button>
                    </div>
                </div>
                <div className="informations-container">
                    <h2 className="title">{product.title}</h2>
                    <p className="sub-title"><Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /></p>
                    <p className="price"><svg className="icon" style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M7,8A2,2 0 0,1 5,10V14A2,2 0 0,1 7,16H17A2,2 0 0,1 19,14V10A2,2 0 0,1 17,8H7Z" />
                    </svg>{product.price} $</p>
                    <div className="more-information">
                        <div style={{ justifyContent: 'space-around' }} className="info-and-date-container">
                            <div><UpdateProduct product={product}/></div> 
                            <Button variant="danger" onClick={() => { removeOneMyProduct(product.id, token) }}>Delete</Button>
                        </div>
                        <p className="disclaimer">{product.description}</p>
                    </div>
                </div>
            </li>
        </ul>
    );
}

export default MyProductCard;