import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import productServices from '../../../services/productServices';

import '../Form.css'

const ProductForm = ({ history }) => {

    const { userToken } = useContext(AuthContext);


    const onProductSubmitHandler = function (e) {
        e.preventDefault();
        const producData = {
            name: e.target.name.value,
            price: e.target.price.value,
            imgUrl: e.target.imgUrl.value,
            description: e.target.description.value,
            contacts: e.target.contacts.value,
        }

        console.log(producData);
        productServices.add(producData, userToken)
            .then(res => {
                console.log(res);
                history.push('/');
            })
    };

    return (
        <div className="ProductForm">
            <h1>Add product form</h1>

            <form onSubmit={onProductSubmitHandler}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter product name ..." />

                <label htmlFor="price">Price</label>
                <input type="number" id="price" name="price" placeholder="Enter product price ..." />

                <label htmlFor="imgUrl">image URL</label>
                <input type="text" id="imgUrl" name="imgUrl" placeholder="Enter product image URL ..." />

                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" cols="30" rows="10" placeholder = "Enter product description ..."></textarea>

                <label htmlFor="contacts">Contacts</label>
                <input type="text" id="contacts" name="contacts" placeholder="Enter your contacts ..." />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ProductForm;