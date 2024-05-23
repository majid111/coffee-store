import { useLoaderData } from "react-router-dom";

const User = () => {
  const user = useLoaderData();
  return (
    <div>
      <h2>{user.name} Details</h2>
      <p>Email: {user.email}</p>
      <p> {user.bio}</p>
    </div>
  );
};

export default User;
