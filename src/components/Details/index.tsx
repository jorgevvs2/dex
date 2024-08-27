import styles from './styles.module.scss'

interface pokemonProps{
    pokemon: pokemon;
}
interface pokemon{
    weight: number
    stats: Array<any>
    abilities: Array<any>
}

export function Details(props : pokemonProps){

    return(
        <div className={styles.details}>
            <p>{`Weight: ${props.pokemon.weight/10} kg`}</p>
            <p>{`Ability: ${props.pokemon.abilities[0].ability ? (props.pokemon.abilities[0].ability.name.charAt(0).toUpperCase() + props.pokemon.abilities[0].ability.name.slice(1)) : 'Overgrow'}`}</p>
            <p>{`Hp: ${props.pokemon.stats[0].base_stat}`}</p>
            <p>{`Attack: ${props.pokemon.stats[1].base_stat}`}</p>
            <p>{`Defense: ${props.pokemon.stats[2].base_stat}`}</p>
        </div>
    );
}