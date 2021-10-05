const Pokecard = ({id, name, type, base_experience}) => {
    return (
        <div class="card">
            <h4 class="name">{name}</h4>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="poke-icon" />
            <div class="container">
                <p>Type: {type}</p>
                <p>EXP: {base_experience}</p>
            </div>
        </div>
    )
};

export default Pokecard;