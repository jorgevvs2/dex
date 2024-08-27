import { Pokedex } from "../components/Pokedex";
import Head  from "next/head";

export default function Home() {
  return (
    <div>
        <Head>
          <title>Jorgevvs Dex</title>
        </Head>
        <Pokedex/>
    </div>
  )
}
