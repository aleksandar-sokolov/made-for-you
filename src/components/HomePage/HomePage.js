import { useEffect, useState } from "react";
import productServices from '../../services/productServices';
import Card from '../Cards/Card'
import './HomePage.css'


const HomePage = () => {

    const [offers, setOffers] = useState();

    useEffect(() => {
        productServices.getAll()
            .then(data => {
                console.log(data);
                setOffers(data)
            })
    }, [])

    return (

        <div className="HomePage">



            <h1>Made 4 You</h1>
            <h2>Search, sell or buy handmade products</h2>
            <p>Made 4 You is a platform where you can find the perfect handmade gift or add products you make.After registration you can see the contacts of the sellers or add products that other people can see. </p>

            {offers?.map(x => {
                return (
                    <Card key={x.objectId} {...x} />
                );
            })}

        </div>
    );
}

export default HomePage

