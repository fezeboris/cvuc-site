import { GetStaticPaths, GetStaticProps, NextPage } from "next";

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
  return <div> UserDetails</div>;
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
