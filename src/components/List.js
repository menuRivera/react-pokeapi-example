import { useEffect, useState } from "react";

export default function List(props) {

    const [results, setResults] = useState([])

    useEffect(() => {
        setResults(props.results)
    }, [props])

    function deleteItem(index) {
        let resultsCopy = [...results]
        resultsCopy.splice(index, 1)

        setResults(resultsCopy)
        console.log(index);
    }

    return (
        <ul>
            {results.map((item, index) => (
                <li className="list-item" key={item.name}>
                    <a href={item.url}>{item.name}</a>
                    <button className="btn-delete" onClick={() => deleteItem(index)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}