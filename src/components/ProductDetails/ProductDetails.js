import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import productServices from '../../services/productServices';
// import Card from '../Cards/Card';
import './ProductDetails.css'

const ProductDetails = (params) => {

    const id = (params.match.params.id)

    const [productData, setProducData] = useState();
    const [isPending, setIsPending] = useState(true);
    const [isOwner, setIsOwner] = useState(false)

    const { username, userId, userToken } = useContext(AuthContext);


    useEffect(() => {
        productServices.getOne(userToken, id)
            .then(data => {
                setProducData({ ...data });
                setIsPending(false)
                if (userId === data.ownerId) {
                    setIsOwner(true);
                }
            })
    }, [id])


    const handleDeleteProduct = () => {
        productServices.deleteOne(userToken, productData.objectId)
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

                        {!isOwner && username && <p>Seller contacts: {productData.contacts}</p>}
                        {!username && <p><Link to="/login">Login</Link> to see seller contacts!</p>}
                    </div>
                </>
            }
        </div>

    );

};

export default ProductDetails