import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import productServices from '../../services/productServices';
import Card from '../Cards/Card';


const ProductDetails = (params) => {

    const id = (params.match.params.id)

    const [productData, setProducData] = useState();
    const [isPending, setIsPending] = useState(true);


    useEffect(() => {
        productServices.getOne("", id)
            .then(data => {
                setProducData({ ...data });
                setIsPending(false)
                console.log("productData :::" + JSON.stringify(productData));
            })
    }, [id, productData])


    const handleDeleteProduct = () => {
        productServices.deleteOne("", productData.objectId)
            .then(res => {
                console.log(res);
                params.history.push('/');
            })
    }

    return (
        <div className="ProductDetails">
            {isPending && <div>Loading...</div>}


            { productData &&
                <>
                    <Card {...productData} />
                    <button onClick={handleDeleteProduct}>Delete</button>
                    <Link to={`/edit/${productData.objectId}`}>Edit</Link>
                </>}
        </div>
    );

};

export default ProductDetails