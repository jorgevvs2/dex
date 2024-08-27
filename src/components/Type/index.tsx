
import styles from './styles.module.scss'

interface pokemonTypes{
    pokemon: pokemon
}

interface pokemon{
    types: Array<any>
}

export function Type(props: pokemonTypes){
    const types = [<span key='0' className={styles.grass}>Grass</span>, <span  key='1' className={styles.poison}>Poison</span>]

    
    function newTypes(){
        let array = []
        for(let i = 0; i < props.pokemon.types.length; i++){
            const typeName = props.pokemon.types[i].type.name
            const classNames = typeName
            array.push(
                <span key={i} className={classNames}>{typeName.charAt(0).toUpperCase() + typeName.slice(1)}</span>
            )
        }
        return array
    }

    function createTypes(){
        let array = props.pokemon.types[0] ? newTypes() : types
        return array
    }

    return(
        <div className={styles.typediv}>
            <div className={styles.typesContainer}>
                <h1>Type:</h1> <br/>

                {createTypes()}
            </div>
        

        </div>
    );
}