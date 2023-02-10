import Image from "next/image";
import Head from "next/head";

import Link from "next/link";
import type { GetServerSideProps } from "next";

import "bootstrap/dist/css/bootstrap.min.css";

// enum GENDER {
//   M,
//   F,
// }
// interface  UserInfo{
//   id:number,
//   firstname:string,
//   lastName:string,
//   username:string,
//   gender:GENDER,
//   status:boolean

// }
interface IndexPageProps {
  users: {
    id: string;
    name: string;
    username: string;
    email: string;
    adress: {};
    phone: string;
    website: string;
    company: string;
  }[];
}
export default function Home({ users }: IndexPageProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link
          href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          rel="stylesheet"
        /> */}

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <nav className="homeNav bg-info">
          <div className="logo h3 fw-bold">Interface d'administration</div>
          <div>
            <Link
              href="register/register"
              className="addUser btn btn-lg btn-outline-dark"
            >
              +Add User
            </Link>
          </div>
        </nav>

        <div className="container-fluid">
          <table className="table usersTable  ">
            <thead className="table-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Username</th>
                <th scope="col">First name</th>
                <th scope="col">Last name</th>
                <th scope="col">Gender</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(({ id, name, username, email }) => (
                <tr key={id}>
                  <th scope="row">{id}</th>
                  <td>{username}</td>
                  <td>{name}</td>
                  <td>{username}</td>
                  <td>M</td>
                  <td>true</td>
                  <td>
                    <div
                      className="btn-group btn-group-sm actions"
                      role="group"
                      aria-label="Basic outlined example"
                    >
                      <button type="button" className="btn btn-outline-primary">
                        edit
                      </button>
                      {/* <button type="button" > */}
                      <Link href={`/${id}`} className="btn btn-outline-primary">
                        details
                      </Link>
                      {/* </button> */}
                      <button type="button" className="btn btn-outline-primary">
                        delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  console.log(users);
  // Data fetching

  return {
    props: {
      users,
    },
  };
};
