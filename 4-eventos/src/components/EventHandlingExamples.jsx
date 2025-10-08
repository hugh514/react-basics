import { useState } from "react";

function EventHandlingExamples() {
  const handleClick = () => {
    alert("Olá Clique Aqui 2");
  };

  const [nome, setNome] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Enviado ${nome}`);
  };

  const handleGreet = (name) => {
    alert(`Olá ${name}`);
  };
  return (
    <div>
      <button onClick={() => alert("Olá Clique Aqui")}>Clique aqui</button>
      <button onClick={handleClick}>Clique aqui 2</button>
      <br />
      <button onClick={() => handleGreet("Hugo")}>Olá Hugo</button>
      <button onClick={() => handleGreet("Sara")}>Olá Sara</button>
      <br />
      <form action="submit">
        <input
          type="text"
          placeholder="Digite Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input type="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default EventHandlingExamples;
