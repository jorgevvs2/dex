/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { Decoration } from '../Decoration';
import { Details } from '../Details';
import { Display } from '../Display';
import { Type } from '../Type';
import styles from './styles.module.scss'


export function Pokedex(){
    const ability = { name: "overgrow"};
    const [input, setInput] = useState('');
    const [poke, setPoke] = useState({
        id: 1,
        name: "Bulbasaur",
        weight: 69,
        abilities: [ability],
        stats: [{base_stat: 45}, {base_stat: 49}, {base_stat: 49}],
        types: []
    })
    
    async function searchPokemon(pokemon: string) {
        const dexSearch = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const dexPokemon = await dexSearch.json();
        setPoke(dexPokemon)
    }

    return(
        <div className={styles.pokedex}>
            <div className={styles.left}>
                <div className={styles.button}>
                <span className={styles.bluebutton}></span>
                </div>
                <Display pokemon={poke} />
                <Details pokemon={poke} />

                <span className={styles.id}>{poke.id}</span>

                <div className={styles.blueDeco}> <div></div> </div>
                <div className={styles.redDeco}></div>

                <div className={styles.control}>
                    <button className={`${styles.navButton} ${styles.blank}`}></button>

                    <button className={styles.navButton}>
                        <span className={styles.upTriangle} onClick={() => searchPokemon((poke.id + 10).toString())}></span>
                    </button>

                    <button className={`${styles.navButton} ${styles.blank}`}></button>

                    <button className={styles.navButton}> 
                        <span className={styles.leftTriangle} onClick={() => searchPokemon((poke.id - 1).toString())}></span>
                    </button>

                    <button className={styles.navButton}>
                        <span className={styles.centerCircle}>
                            <div className={styles.circle}></div>
                        </span>
                    </button>

                    <button className={styles.navButton}>
                        <span className={styles.rightTriangle} onClick={()=> searchPokemon((poke.id + 1).toString())}></span>
                    </button>

                    <button className={`${styles.navButton} ${styles.blank}`}></button>

                    <button className={styles.navButton}> 
                        <span className={styles.downTriangle} onClick={() => searchPokemon((poke.id - 10).toString())}></span>
                    </button>

                    <button className={`${styles.navButton} ${styles.blank}`}></button>
                </div>
            </div>

            <div className={styles.middle}></div>

            <div className={styles.right}>
                <input type="text" placeholder="Name or ID (1 to 898)" onChange={e => setInput(e.target.value)}/>
                <button onClick={() => searchPokemon(input.toLowerCase())}>Search</button>

                <Decoration />

                <Type pokemon={poke}/>
            </div>
        </div>
    );
}