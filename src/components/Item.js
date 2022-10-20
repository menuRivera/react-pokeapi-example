export default function Item({ pokemon, handleClose }) {
    return (
        <div id="modal">
            <img src={pokemon.sprites.front_default} />
            <h2>{pokemon.name}</h2>
            <button onClick={handleClose}>close</button>
        </div>
    )
}