import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import productServices from '../../services/productServices';
// import Card from '../Cards/Card';
import './ProductDetails.css'

const ProductDetails = (params) => {

    const id = (params.match.params.id)

    const [productData, setProducData] = useState();
    const [isPending, setIsPending] = useState(true);
    const [isOwner, setIsOwner] = useState(false)

    useEffect(() => {
        productServices.getOne("", id)
            .then(data => {
                setProducData({ ...data });
                setIsPending(false)
                if(localStorage.objectId === data.ownerId){
                    setIsOwner(true);
                }
                console.log(data);
            })
    }, [id])


    const handleDeleteProduct = () => {
        productServices.deleteOne(localStorage.token, productData.objectId)
            .then(res => {
                console.log(res);
                params.history.push('/');
            })
    }

    return (
        <div className="ProductDetails">
            {isPending && <div>Loading...</div>}

            {productData &&
                <>
                    <div className='details img'>
                        <img src={productData.imgUrl} alt={productData.name} />
                    </div>
                    <div className="details data">
                        <h1>{productData.name}</h1>
                        <p className="price">${productData.price}</p>
                        <p>{productData.description}</p>

                        {isOwner &&
                            <>
                                <button onClick={handleDeleteProduct}>Delete</button>
                                <Link to={`/edit/${productData.objectId}`}>Edit</Link>
                            </>
                        }

                        {!isOwner && localStorage.username && <p>Seller contacts: {productData.contacts}</p>}
                        {!localStorage.username && <p><Link to="/login">Login</Link> to see seller contacts!</p>}
                    </div>
                </>
            }
        </div>

    );

};

export default ProductDetails