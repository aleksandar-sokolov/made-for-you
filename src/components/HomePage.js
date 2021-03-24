import { useEffect, useState } from "react";
import offersServices from '../services/offersServices';
import Card from '../components/cards/Card'


const HomePage = () => {

    const [offers, setOffers] = useState();

    useEffect(() => {
        offersServices.getAll()
            .then(data => {
                console.log(data);
                setOffers(data)
            })
    }, [])

    return (

        <div className="home-page">



            <h1>Made For You</h1>
            <h2>Search, sell or buy</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, eveniet libero, vel porro odit laboriosam nemo soluta nostrum maxime at sit voluptatem quae explicabo. Et ipsa ipsam voluptas, ipsum obcaecati at facere numquam sequi sunt possimus! Voluptatem explicabo quidem esse reprehenderit eos hic dicta sunt aliquid vel? Cumque, pariatur autem!</p>

            {offers?.map(x => {
                return (
                    <Card {...x} />
                );
            })}

        </div>
    );
}

export default HomePage

