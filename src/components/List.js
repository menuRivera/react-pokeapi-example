import { useEffect, useState } from "react";

export default function List(props) {

    const [results, setResults] = useState([])

    function deleteItem(index) {
        let resultsCopy = [...results]
        resultsCopy.splice(index, 1)

        setResults(resultsCopy)
        console.log(index);
    }

    useEffect(() => {
        setResults(props.results)
    }, [props])

    return (
        <ul>
            {results.map((item, index) => (
                <li className="list-item" key={item.name}>
                    <a href={item.url}>{item.name}</a>
                    <button className="btn-delete" onClick={() => deleteItem(index)}>Eliminar</button>
                </li>
            ))}
        </ul>
    )
}