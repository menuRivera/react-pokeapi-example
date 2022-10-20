import List from "./components/List.js"
import { useState } from 'react'

export default function App() {
  const url = 'https://pokeapi.co/api/v2/pokemon'

  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(50)
  const [results, setResults] = useState([])

  function submitForm(e) {
    e.preventDefault()

    fetch(`${url}?offset=${offset}&limit=${limit}`)
      .then(res => res.json())
      .then(data => {
        setResults(data.results)
      })
  }

  return (
    <div className="App">
      <h1>PokéAPI implementation by Manuel Rivera</h1>

      <form onSubmit={submitForm}>
        <div className="inputs">
          <label>
            Limit:
            <input type="number" value={limit} onChange={(e) => setLimit(e.target.value)} />
          </label>

          <label>
            Initial Offset:
            <input type="number" value={offset} onChange={(e) => setOffset(e.target.value)} />
          </label>
        </div>

        <button className="btn-query">Fetch</button>
      </form>

      <List results={results} />
    </div>
  );
}
