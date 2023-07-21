import Image from "next/image";
import Link from "next/link";

import stlyes from "../styles/Card.module.css";

export default function Card({ pokemon }) {
  return (
    <div className={stlyes.card}>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        width="120"
        height="120"
        alt={pokemon.name}
      />
      <p className={stlyes.id}>#{pokemon.id}</p>
      <h3 className={stlyes.title}>{pokemon.name}</h3>
      <Link href={`/pokemons/${pokemon.id}`} legacyBehavior>
        <a className={stlyes.btn}>Detalhes</a>
      </Link>
    </div>
  );
}
