/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss'

interface pokemonProps{
    pokemon: pokemon;
}

interface pokemon{
    id: number
    name: string
}

export function Display(props: pokemonProps){
    const img = props.pokemon.id ? props.pokemon.id : 1

    return(
        <div className={styles.pokemon}>
            <div className={styles.breakdiv}>
                <span className={styles.break}></span>
            </div>
            <div className={styles.display}> 
                <span/>
                <div/>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${img}.png`} alt="" />
            </div>

            <span className={styles.name}>{props.pokemon.name ? (props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1)) : 'Bulbasaur'}</span>
        </div>
    );
}