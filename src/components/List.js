import { useEffect, useState } from "react";
import Item from "./Item";

export default function List(props) {

    const [results, setResults] = useState([])
    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        setResults(props.results)
    }, [props])

    function deleteItem(index) {
        let resultsCopy = [...results]
        resultsCopy.splice(index, 1)

        setResults(resultsCopy)
    }

    function openItem(item) {
        fetch(item.url)
            .then(res => res.json())
            .then(pokemon => {
                setPokemon(pokemon)
            })
    }

    function closeItem() {
        setPokemon(null)
    }

    return (
        <>
            <ul>
                {results.map((item, index) => (
                    <li className="list-item" key={item.name} onClick={() => openItem(item)}>
                        <span>{item.name}</span>
                        <button className="btn-delete" onClick={(e) => { e.stopPropagation(); deleteItem(index) }}>Delete</button>
                    </li>
                ))}
            </ul>

            {pokemon && <Item handleClose={closeItem} pokemon={pokemon} />}
        </>
    )
}