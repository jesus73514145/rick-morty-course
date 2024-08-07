// puse rfc y sale y elegi el rfcredux 

export default function Characters(props) {
  const { characters } = props;

  console.log(characters);
  return (
    <div className="characters">
        <h1>Personajes</h1>
        <span className="back-home">Volver a la home</span>

        <div className="container-characters">
            {characters.map((character, index) => (
                // return implicito
                <div className="character-container" key={index}>
                    <div>
                      <img src={character.image} alt={character.name}></img>
                    </div>

                    <div>
                      <h3>{character.name}</h3>
                      <h6>
                        {character.status === "Alive" ? (
                          <>
                            <span className="alive"/>
                            Alive
                          </>
                        ) : (
                          <>
                            <span className="dead"/>
                            Dead
                          </>
                        )}

                      </h6>
                      <p >
                        <span className="text-grey">Episodios:</span> 
                        <span>{character.episode.length}</span>
                      </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}
