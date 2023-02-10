import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";

type Props = {
  name: string;
  username: string;
  email: string;
  //   adress: {
  //     street: string;
  //     suite: string;
  //     city: string;
  //     zipcode: string;
  //     geo: {};
  //   };
  phone: string;
  website: string;
};

const UserDetails: NextPage<Props> = ({
  name,
  username,
  email,
  phone,
  website,
  // adress,
}) => {
  console.log("===========", name, email);
  return (
    <>
      <nav className="homeNav bg-info">
        <div className="logo h3 fw-bold">Details de l'utilisateur </div>
        <div>
          <Link href="/" className="addUser btn btn-lg btn-outline-dark">
            retour
          </Link>
        </div>
      </nav>
      <div
        className="container"
        style={{
          width: "35rem",
          marginTop: "5rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className="card"
          style={{
            width: "35rem",
          }}
        >
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <label style={{ fontWeight: "bold" }}>First Name</label>
              <p>{name}</p>
            </li>
            <li className="list-group-item">
              <label style={{ fontWeight: "bold" }}>Username</label>
              <p>{username}</p>
            </li>
            <li className="list-group-item">
              <label style={{ fontWeight: "bold" }}>Email </label>
              <p>{email}</p>
            </li>
            <li className="list-group-item">
              <label style={{ fontWeight: "bold" }}>Phone </label>
              <p>{phone}</p>
            </li>
            <li className="list-group-item">
              <label style={{ fontWeight: "bold" }}>Website </label>
              <p>{website}</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserDetails;

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const user: Props = await response.json();
  console.log("===========", id);
  return {
    props: {
      name: user?.name,
      username: user?.username,
      email: user?.email,
      phone: user?.phone,
      website: user?.website,
      //   adress: user?.adress,
    },
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
