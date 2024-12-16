import React, { useEffect, useState, useMemo } from 'react';
import { User } from '../Types/Type';
import "../style.css";

const UserDetail: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/users/1')
      .then((res) => res.json())
      .then((data) => setUser(data))
      .then(json=>console.log(json))
  }, []);  

  const userDetails = useMemo(() => {
    if (!user) return null;

    return (
      <div className="space-y-4">
        <p><strong className="font-semibold">ID:</strong> {user.id}</p>
        <p><strong className="font-semibold">Email:</strong> {user.email}</p>
        <p><strong className="font-semibold">Username:</strong> {user.username}</p>
        <p><strong className="font-semibold">Password:</strong> {user.password}</p>
        <p><strong className="font-semibold">Name:</strong> {user.name.firstname} {user.name.lastname}</p>
        <p><strong className="font-semibold">Address:</strong> {`${user.address.number} ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}</p>
        <p><strong className="font-semibold">Geo Location:</strong> Lat: {user.address.geolocation.lat}, Long: {user.address.geolocation.long}</p>
        <p><strong className="font-semibold">Phone:</strong> {user.phone}</p>
      </div>
    );
  }, [user]);

  return (
    <div className="py-20 px-10 flex justify-center items-center ">
      <div className="shadow-lg p-8 w-full bg-warm rounded-lg max-w-xl mx-4">
        <h1 className="text-2xl text-center font-bold mb-6">User Details</h1>
        {user ? (
          userDetails
        ) : (
          <p className="text-center">Loading user details...</p>
        )}
      </div>
    </div>
  );
};

export default UserDetail;
