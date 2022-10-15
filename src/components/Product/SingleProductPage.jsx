import React, { useContext, useState, useEffect } from "react";
import Rating from '@mui/material/Rating';
import { Button } from 'react-bootstrap'
import { Context } from '../../context/context';
import { useNavigate, useParams } from 'react-router-dom';
import { BsCartPlus } from "react-icons/bs";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { addToFavourite, addToCart } from '../../api/api';
import { isAuthenticated } from '../../auth'
import { addComment, getAllComments, getOneProducts } from '../../api/api'
import Comment from './Comment';

export default function SingleProductPage() {

    const states = useContext(Context);
    const { token } = states;
    const [isFav, setIsFav] = useState(false)
    const [comment, setComment] = useState('');
    const [allComments, setAllComments] = useState([]);
    const [itemDetails, setItemDetails] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const getItemDetails = async (itemId) => {
        let details = await getOneProducts(itemId);
        setItemDetails(details)
    };
    const comments = async () => {
        let results = await getAllComments(id, token);
        setAllComments(results)
    }

    const handleAddComment = async () => {
        await addComment(itemDetails.id, comment, token)
        comments();
    }
    useEffect(() => {
        getItemDetails(id);
        comments();
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '7rem 10rem 1rem 10rem',
            }}>
                <img
                    className="d-block w-50 h-1"
                    src={itemDetails.image}
                    alt="First slide" />
                <div style={{
                    margin: '0 5rem',
                    maxHeight: '27rem'
                }}>
                    <br />
                    <h2 style={{
                        color: 'gold'
                    }}>{itemDetails.title}
                    </h2>

                    <p style={{
                        margin: '2rem 0'
                    }}>

                        {itemDetails.description}
                    </p>
                    <h5
                        className='price'
                        style={{
                            margin: '1rem 0'
                        }}>Price : {itemDetails.price}</h5>
                    <h6
                        className='price'
                        style={{
                            margin: '1rem 0'
                        }}>Color : {itemDetails.color}</h6>
                    <h6
                        className='price'
                        style={{
                            margin: '1rem 0'
                        }}>Quantity : {itemDetails.quantity}</h6>

                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                    <div style={{
                        margin: '1rem 0'
                    }}>
                        {isFav ?
                            < MdOutlineFavorite className="icons" onClick={() => {
                                setIsFav(false)
                            }} />
                            :
                            < MdOutlineFavoriteBorder className="icons" onClick={() => {
                                isAuthenticated() ?
                                    addToFavourite(itemDetails.id, token)
                                    :
                                    navigate('/signin')
                            }} />
                        }

                        <BsCartPlus className="icons" onClick={() => {
                            isAuthenticated() ?
                                addToCart(itemDetails.id, token)
                                :
                                navigate('/signin')
                        }} />
                        <br />
                        <br />
                        {/* <Button
                            variant="outline-dark"
                            style={{
                            margin: ' 0 1rem '
                            }} onClick={() => {
                            navigate('/')
                        }}>Back To Home</Button> */}
                    </div>
                </div>
            </div>
                    <Comment handleAddComment={handleAddComment} allComments={allComments} setComment={setComment} />
        </>
    )
}