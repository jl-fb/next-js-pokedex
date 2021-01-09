import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import paddedIndexImage from "../utils/paddedIndexImage";

export default function pokemon({ pokeman }) {
  return (
    <div>
      <Layout title={pokeman.name}>
        <h1 className="text4xl mb-2 text-center capitalize">{pokeman.name}</h1>
        <img className="mx-auto" src={pokeman.image} alt={pokeman.name} />
        <p>
          <span className="font-bold mr-2">Weight:</span>
          {pokeman.weight}
        </p>
        <p>
          <span className="font-bold mr-2">Height:</span>
          {pokeman.height}
        </p>
        <h2 className="text-2xl mt-6 mb-2">Types</h2>
        <div className="container">
          {pokeman.types.map((type, index) => (
            <p className="capitalize" key={index}>
              {type.type.name}
            </p>
          ))}
          <p className="mt-10 mb-5 text-center">
            <Link href="/">
              <a className="text-2xl text-gray-700 border border-gray-400 rounded-md px-2 py-1">
                Home
              </a>
            </Link>
          </p>
        </div>
      </Layout>
    </div>
  );
}
export async function getServerSideProps({ query }) {
  const id = query.id;
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokeman = await res.json();
    const image = paddedIndexImage(id);
    pokeman.image = image;
    return {
      props: { pokeman },
    };
  } catch (error) {
    console.log(error);
  }
}
