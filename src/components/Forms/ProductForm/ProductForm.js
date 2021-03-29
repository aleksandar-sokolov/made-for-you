import productServices from '../../../services/productServices'

import '../Form.css'

const ProductForm = ({ history }) => {

    const onProductSubmitHandler = function (e) {
        e.preventDefault();
        const producData = {
            name: e.target.name.value,
            price: e.target.price.value,
            imgUrl: e.target.imgUrl.value,
            description: e.target.description.value,
        }

        console.log(producData);
        productServices.add(producData, 'testkey')
            .then(res => {
                console.log(res);
                history.push('/');
            })
    };

    return (
        <div className="ProductForm">
            <h1>Card Form</h1>

            <form onSubmit={onProductSubmitHandler}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />

                <label htmlFor="price">Price</label>
                <input type="number" id="price" name="price" />

                <label htmlFor="imgUrl">image URL</label>
                <input type="text" id="imgUrl" name="imgUrl" />

                <label htmlFor="description">Description</label>
                <input type="text" id="description" name="description" />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ProductForm;