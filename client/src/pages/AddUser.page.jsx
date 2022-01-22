import e from "cors";
import React from "react";
import { addUser } from "../api/users";
import PageStyled from "./pages.styled/Page.styled";
export default function AddUserPage() {
  const addUserHandler = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const values = Object.fromEntries(data.entries());
    console.log(values);
    try {
      const res = await addUser(values);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PageStyled>
      <div className="header">Add User</div>
      <form action="" onSubmit={addUserHandler}>
        <input name="credit" type="text" placeholder="Credit..." />
        <input name="cash" type="text" placeholder="Cash..." />
        <button type="submit">Add User</button>
      </form>
    </PageStyled>
  );
}
