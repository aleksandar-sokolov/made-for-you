import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import productServices from '../../services/productServices';
import Card from '../Cards/Card';
import './ProductDetails.css'

const ProductDetails = (params) => {

    const id = (params.match.params.id)

    const [productData, setProducData] = useState();
    const [isPending, setIsPending] = useState(true);


    useEffect(() => {
        productServices.getOne("", id)
            .then(data => {
                setProducData({ ...data });
                setIsPending(false)
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
            {/* { productData &&
                <>
                    <Card {...productData} />
                    <button onClick={handleDeleteProduct}>Delete</button>
                    <Link to={`/edit/${productData.objectId}`}>Edit</Link>
                </>} */}

            {productData &&
                <>
                    <div className='details img'>
                        <img src={productData.imgUrl} alt={productData.name} />
                    </div>
                    <div className="details data">
                        <h1>{productData.name}</h1>
                        <p className="price">${productData.price}</p>
                        <p>{productData.description}</p>
                        <button onClick={handleDeleteProduct}>Delete</button>
                        <Link to={`/edit/${productData.objectId}`}>Edit</Link>
                    </div>
                </>
            }
        </div>

    );

};

export default ProductDetails