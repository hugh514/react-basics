import { useState } from "react";

const UseStateComponents = () => {
  const [count, setCount] = useState(0);
  const adicionar = () => {
    setCount(count + 1);
    console.log(count);
  };

  const [user, setUser] = useState({
    nome: "Hugo",
    idade: 18,
    hobbies: ["Jogar", "Programação"],
  });

  const adicionarIdade = () => {
    setUser((prevUser) => ({
      ...prevUser,
      idade: prevUser.idade + 1,
    }));
  };
  return (
    <div>
      <h1>Contador</h1>
      <p>Foi clicado {count} vezes.</p>
      <button onClick={adicionar}>Adicionar</button>

      <p>
        Bem Vindo {user.nome} você tem {user.idade}?
      </p>
      <button onClick={adicionarIdade}>Adicionar idade.</button>
    </div>
  );
};

export default UseStateComponents;
