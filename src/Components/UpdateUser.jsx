import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateUser = () => {
  const user = useLoaderData();
  const { _id, email, name, bio } = user;

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const bio = form.bio.value;
    const updatedUser = {
      name,
      bio,
    };

    //send data to the server
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
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
      <h2 className="mb-6">Update coffee : {email}</h2>
      <form onSubmit={handleUpdateUser}>
        <div className=" md:flex gap-6">
          <div className="w-full">
            <label>Name</label>
            <input
              className="grow input input-bordered flex items-center gap-2 w-full"
              type="text"
              name="name"
              defaultValue={name}
              placeholder="Enter your name"
            />
          </div>
          <div className="w-full">
            <label>Write your bio</label>
            <input
              className="grow input input-bordered flex items-center gap-2 w-full"
              type="text"
              name="bio"
              defaultValue={bio}
              placeholder="write your bio"
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

export default UpdateUser;
