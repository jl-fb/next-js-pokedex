import Layout from "../components/Layout";
import Link from "next/link";
import paddedIndexImage from "../utils/paddedIndexImage";

export default function Home({ pokemon }) {
  return (
    <div>
      <Layout title="NextJS Pokedex">
        <h1 className="text-4xl mb-8 text-center">NextJS Pokedex</h1>
        <ul>
          {pokemon.map((pokeman, index) => (
            <li key={index}>
              <Link href={`/pokemon?id=${index + 1}`}>
                <a className="border border-gray p-4 my-2 capitalize flex items-center text-lg bg-gray-200 ">
                  <img
                    className="w-20 h-20 mr-3 "
                    src={pokeman.image}
                    alt={pokeman.name}
                  />
                  <span className="mr-2 font-bold">{index + 1}.</span>
                  {pokeman.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    </div>
  );
}

// Indicating to Next this is a static page

export async function getStaticProps(context) {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
    const { results } = await res.json();
    const pokemon = results.map((result, index) => {
      const image = paddedIndexImage(`${index + 1}`);
      return {
        ...result,
        image,
      };
    });
    return {
      props: { pokemon },
    };
  } catch (error) {
    console.log(error);
  }
}
