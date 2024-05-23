import { useLoaderData } from "react-router-dom";


const UpdateACoffee = () => {
    const coffees =useLoaderData();
    console.log(coffees);
    return (
        <div>
            <h2>updated Coffee : {coffees.length}</h2>
        </div>
    );
};

export default UpdateACoffee;