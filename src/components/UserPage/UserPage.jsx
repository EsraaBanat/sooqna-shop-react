import React, { useEffect } from 'react';
import MyProductLogo from '../../Assests/my-products-removebg-preview (1).png';
import { useNavigate } from 'react-router-dom';
import CreateItem from '../Product/CreateProductForm';
import '../myProduct/product.css'


export default function UserPage() {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div>
                <img src={MyProductLogo} onClick={() => { navigate('/myproducts'); }} className='profile' />
                <CreateItem />
            </div>
        </>
    )
}


