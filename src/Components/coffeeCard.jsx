import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, categorie, details, photo } =
    coffee;

  console.log(coffee);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(_id);
        fetch(`https://coffee-store-server-two-henna.vercel.app/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl mb-10 p-4">
      <figure>
        <img className="w-64" src={photo} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Details: {details}</p>
        <p>Quantity: {quantity}</p>
        <p>Supplier: {supplier}</p>
        <p>Taste: {taste}</p>
        <p>Categorie: {categorie}</p>
        <div className="card-actions gap-6">
          <button className="btn btn-primary">View</button>
          <Link to={`/updateCoffee/${_id}`}>
            <button className="btn btn-primary">Edit</button>
          </Link>
          <button onClick={() => handleDelete(_id)} className="btn btn-primary">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

CoffeeCard.propTypes = {
  coffee: PropTypes.object,
  coffees: PropTypes.object,
  setCoffees: PropTypes.func,
  name: PropTypes.string,
  quantity: PropTypes.string,
  supplier: PropTypes.string,
  taste: PropTypes.string,
  categorie: PropTypes.string,
  details: PropTypes.string,
  photo: PropTypes.string,
};

export default CoffeeCard;
