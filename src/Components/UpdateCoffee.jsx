import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, categorie, details, photo } =
    coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const categorie = form.categorie.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      categorie,
      details,
      photo,
    };

    //send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Successfully data updated",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className=" mx-6 bg-[#F4F3F0]">
      <h2 className="mb-6">Update coffee : {name}</h2>
      <form onSubmit={handleUpdateCoffee}>
        <div className=" md:flex gap-6">
          <div className="w-full">
            <label>Name</label>
            <input
              className="grow input input-bordered flex items-center gap-2 w-full"
              type="text"
              name="name"
              defaultValue={name}
              placeholder="Enter coffee name"
            />
          </div>
          <div className="w-full">
            <label>Available Quantity</label>
            <input
              className="grow input input-bordered flex items-center gap-2 w-full"
              type="text"
              name="quantity"
              defaultValue={quantity}
              placeholder="Enter available quantity"
            />
          </div>
        </div>
        <div className=" md:flex gap-6">
          <div className="w-full">
            <label>Supplier</label>
            <input
              className="grow input input-bordered flex items-center gap-2 w-full"
              type="text"
              name="supplier"
              defaultValue={supplier}
              placeholder="Enter coffee supplier"
            />
          </div>
          <div className="w-full">
            <label>Taste</label>
            <input
              className="grow input input-bordered flex items-center gap-2 w-full"
              type="text"
              name="taste"
              defaultValue={taste}
              placeholder="Enter the coffee taste"
            />
          </div>
        </div>
        <div className=" md:flex gap-6">
          <div className="w-full">
            <label>Categorie</label>
            <input
              className="grow input input-bordered flex items-center gap-2 w-full"
              type="text"
              name="categorie"
              defaultValue={categorie}
              placeholder="Enter coffee categorie"
            />
          </div>
          <div className="w-full">
            <label>Details</label>
            <input
              className="grow input input-bordered flex items-center gap-2 w-full"
              type="text"
              name="details"
              defaultValue={details}
              placeholder="Enter coffee details"
            />
          </div>
        </div>
        <div className=" md:flex gap-6">
          <div className="w-full">
            <label>Photo URL</label>
            <input
              className="grow input input-bordered flex items-center gap-2 w-full"
              type="text"
              name="photo"
              defaultValue={photo}
              placeholder="Enter Photo URL"
            />
          </div>
        </div>
        <div className=" md:flex gap-6">
          <input
            type="submit"
            value="Update Coffee"
            className="btn w-full text-center mt-6 bg-[#D2B48C] border-[#331A15] border-2"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
