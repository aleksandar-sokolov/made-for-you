import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ErrorContext } from "../../contexts/ErrorContext";
import productServices from '../../services/productServices';
import Card from '../Cards/Card'
import './HomePage.css'


const HomePage = () => {

    const { displayError } = useContext(ErrorContext);

    const [offers, setOffers] = useState();
    const [isPending, setIsPending] = useState(true)

    useEffect(() => {
        productServices.getAll()
            .then(data => {
                if (data.hasOwnProperty("errorData")) throw new Error(data.message);
                setOffers(data);
                setIsPending(false);
            })
            .catch(err => {
                displayError(err.message);
                setIsPending(false);
            })
    }, [])

    return (

        <div className="HomePage">



            <h1>Made 4 You</h1>
            <h2>Search, sell or buy handmade products</h2>
            <p>Made 4 You is a platform where you can find the perfect handmade gift or add products you make.After registration you can see the contacts of the sellers or add products that other people can see. </p>

            {isPending && <p>Loading...</p>}
            {!offers && !isPending && <p>No offers available . <Link to="/product/add">Add first ?</Link> </p>}
            {offers?.map(x => {
                return (
                    <Card key={x.objectId} {...x} />
                );
            })}

        </div>
    );
}

export default HomePage

