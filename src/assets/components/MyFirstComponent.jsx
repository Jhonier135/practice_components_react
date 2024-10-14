
export const MyFirstComponent = () => {

  const name = "Jhonier";

  const github_profile = "https://github.com/Jhonier135";

const student = {
  name: "Jhonier",
  last_name:  "Mendez",
  mobile: "300000000",
  linkedin_profile: "https://www.linkedin.com/in/jhonier-mendez-leon-b00aa8255/"  
};

return (
    <>
    <div>MyFirstComponent</div>
    <div className="container
    bg-success mt-4">
      <h1>Temas de React</h1>
      <ul>
        <li>Componentes</li>
        <li>Eventos</li>
        <li>Estados Hooks</li>
        <li>Props</li>
      </ul>
    </div>
    <div className="container
    bg-danger py-3">
      <h1>Datos del Docente</h1>
      <p>Nombre: <strong>{ name } </strong></p>
      <p>GitHub: { github_profile } </p>
    </div>
    <div className="container
    bg-warning py-3">
      <h1>Datos del Estudiante</h1>
      <p>Nombre: <strong>{ student.name } </strong></p>
      <p>Apellido: <strong>{ student.last_name } </strong></p>
      <p>Movil: { student.mobile } </p>
      <p><strong>Linkedin:</strong> <a href={ student.linkedin_profile }>{ student.linkedin_profile }</a></p>
    </div>
    <div className="container mt-2 pt-2">
      <h1>Objeto Completo</h1>
      <pre>{JSON.stringify(student)} </pre>
    </div>
    </>
  )
}
