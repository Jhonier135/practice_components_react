
export const SecondComponent = () => {

    const books = [
        "Harry Potter y la piedra filosofal",
        "Harry Potter y la cámara secreta",
        "Harry Potter y el prisionero de Azkaban",
        "Harry Potter y el cáliz de fuego",
        "Harry Potter y la orden de Fénix",
        "Harry Potter y el misterio del Príncipe",
        "Harry Potter y las Reliquias de la Muerte",
    ];

  return (
    <>
        <h1>SecondComponent</h1>
        <div>
          <ul>
            {
              books.map((book, index) => {
                return <li key={ index }> { book } </li>
              })
            }
          </ul>
        </div>
    </>

  )
}
