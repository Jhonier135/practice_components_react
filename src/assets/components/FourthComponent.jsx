
export const FourthComponent = () => {

  const handleClicked = (e, name) => {
    alert("Haz hecho clic en el botón " + name);
  }

  return (
    <div>
      <h1>FourthComponent</h1>
      <div>
      <button className="btn btn-danger" onClick={ () => {
        alert("Hola soy un evento click")
      }}>Haz clic
      </button>
      </div>
      <div>
      <button className="btn btn-success" onClick={e => handleClicked(e, "Jhonier")}>
        Aquí tambien haz click 
      </button>
      </div>
    </div>
  )
}
