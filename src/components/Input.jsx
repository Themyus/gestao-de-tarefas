function Input(props) {
  // FUnção criada pra armazenar o className dos inputs, que são iguais, pra não ficar repetitivo
  return (
    <input
      className="text-neutral-100 placeholder-neutral-500 bg-neutral-800 border border-neutral-700 outline-1 rounded-lg px-4 py-2 shadow-md"
      {...props}
    />
  );
}

export default Input;
