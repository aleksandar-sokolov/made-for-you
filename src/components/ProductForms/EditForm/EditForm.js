import { useEffect, useState } from 'react';
import { ErrorContext } from '../../../contexts/ErrorContext';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import productServices from '../../../services/productServices';
import '../Form.css'

const EditForm = ({ match, history }) => {

    const id = match.params.id;

    const { userToken } = useContext(AuthContext);
    const { displayError } = useContext(ErrorContext);

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


    const onProductSubmitHandler = function (e) {
        e.preventDefault();
        const newData = {
            name: e.target.name.value,
            price: e.target.price.value,
            imgUrl: e.target.imgUrl.value,
            description: e.target.description.value,
        }

        if (Object.values(newData).some(x => x === "")){
            displayError("All fields are required!")
            return;
        }

        productServices.update(newData, userToken, id)
            .then(res => {
                if (res.hasOwnProperty("errorData")) throw new Error(res.message);
                history.push('/product/' + id);
            })
            .catch(err => displayError(err.message));
    };


    return (
        <div className="EditForm">
            <h1>Edit Form</h1>
            {isPending && <div>Loading ...</div>}
            {productData && <form onSubmit={onProductSubmitHandler}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" defaultValue={productData.name} />

                <label htmlFor="price">Price</label>
                <input type="number" id="price" name="price" defaultValue={productData.price} />

                <label htmlFor="imgUrl">image URL</label>
                <input type="text" id="imgUrl" name="imgUrl" defaultValue={productData.imgUrl} />

                <label htmlFor="description">Description</label>
                <input type="text" id="description" name="description" defaultValue={productData.description} />

                <input type="submit" value="Submit" />
            </form>}
        </div>
    );
}

export default EditForm;