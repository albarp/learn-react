import { useState } from "react";
import type { ChangeEvent } from "react";

export default function UserForm() {
  const [user, setUser] = useState({
    FirstName: "Barbara",
    LastName: "Hepworth",
    Email: "bhepworth@sculpture.com",
  });

  function handleFormChange(e: ChangeEvent<HTMLInputElement>) {
    setUser({
        ...user,
        [e.target.name]: [e.target.value]
    })
  }

  return (
    <>
      <label>First Name</label>
      <input name='FirstName' type="text" value={user.FirstName} onChange={handleFormChange}/>
      <label>Last Name</label>
      <input name='LastName' type="text" value={user.LastName} onChange={handleFormChange}/>
      <label>e-mail</label>
      <input name='Email' type="text" value={user.Email} onChange={handleFormChange}/>
      <p>
        {user.FirstName}{' '}
        {user.LastName}{' '}
        {user.Email}{' '}
      </p>
    </>
  );
}
