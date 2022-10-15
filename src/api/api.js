import axios from 'axios';

// let url = 'http://localhost:3000'
let url = 'https://agents-shop.herokuapp.com'

/*-----------------------------------------------PRODUCT-------------------------------------------- */

export const getAllProducts = async () => {
    const result = await axios.get(`${url}/product`, {});
    return result.data;
}

export const getAllProductPostedByUser = async (userId,token) => {
    const result = await axios.get(`${url}/product/user/${userId}`, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    });
    return result.data;
}

export const getOneProducts = async (itemId) => {
    const result = await axios.get(`${url}/product/${itemId}`, {});
    return result.data;
}

export const createItem = async (token, data) => {
    const result = await axios.post(`${url}/product`, data, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    });
    return result
}

export const updateProduct = async (id,data,token) => {
    const result = await axios.put(`${url}/product/${id}`,data, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
    });
    return result.data;
}

export const getProductsById = async (productsIds) => {
    const products = await Promise.all(productsIds.map(async (itemId) => {
        let result = await axios.get(`${url}/product/${itemId}`, {});
        return result.data;
    }));
    return products;
}

        export const removeOneMyProduct = async(id, token) => {
                return fetch(`${url}/product/${id}`, {
                    method: 'DELETE',
                    headers: {
                        Accept: 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                }).then(response => {
                    return response.json();
                }).catch(err => {
                })
            };

/*-----------------------------------------------WISHLIST-------------------------------------------- */

export const getAllWishlist= async (token) => {
    const result = await axios.get(`${url}/wishlist`, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
    return result.data;
};

export const addToFavourite = (itemId, token) => {
    return fetch(`${url}/addtowishlist/${itemId}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`
        },
        
    })
    .then((response) => {
            response.json()
        })
        .then((result) => {
            console.log('Success:', result);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};


export const removeOneFromWishList = async(id, token) => {
        return fetch(`${url}/wishlist/${id}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            return response.json();
        }).catch(err => {
        })
    };
        

    export const moveFromWishlistToCart = async (itemId, token) => {
    return fetch(`${url}/productfromwishlisttocart/${itemId}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`
        },

    })
        .then((response) => response.json())
        .then((result) => {
            console.log('Success:', result);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

/*-----------------------------------------------CART-------------------------------------------- */

export const getAllCart = async (token) => {
    const result = await axios.get(`${url}/cart`, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
    return result.data;
};

export const addToCart = async (itemId, token) => {
    return fetch(`${url}/addtocart/${itemId}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
        .then((response) => response.json())
        .then((result) => {
            console.log('Success:', result);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
    
export const removeOneFromCart = async(id, token) => {
    return fetch(`${url}/cart/${id}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    }).then(response => {

        return response.json();
    }).catch(err => {
        console.log('ERROR',err);
    })
};
    
     export const removeAllCart = async(token) => {
            return fetch(`${url}/cart`, {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {
                return response.json();
            }).catch(err => {
                console.log('Error',err);
            })
    };
    

/*-----------------------------------------------Admin-------------------------------------------- */
export const getAllUser= async (token) => {
    const result = await axios.get(`${url}/admin/users`, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    })

    return result.data;
};

export const removeUserById = async(id, token) => {
        return fetch(`${url}/admin/deleteuser/${id}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            
            return response.json();
        }).catch(err => {
         
        })
    };

    export const removeProductByAdmin = async(id, token) => {
        return fetch(`${url}/admin/deleteproduct/${id}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            return response.json();
        }).catch(err => {
        })
    };

/*-----------------------------------------------Comment------------------------------------------- */
    export const getAllComments = async (productId,token) => {
      const result = await axios.get(`${url}/comment/${productId}`, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
      });
    return result.data;
    }

    export const addComment = async (productId, data,token) => {
    const result = await axios.post(`${url}/comment/${productId}`, {comment:data}, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    });
        return result.data;
}