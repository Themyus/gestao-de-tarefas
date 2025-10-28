function Title(props) { // FUnção criada pra armazenar o className dos h1 de TaskPage e App, que são iguais, pra não ficar repetitivo
  return (
    <h1 className="text-3xl text-white font-bold font-inter text-center">
      {props.children}
    </h1>
  );
}

export default Title;
