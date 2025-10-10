import {useState} from "react";

const BuscarFetch = () => {
  const [usuario, setUsuario] = useState(null);

  const buscar = () => {
    fetch("https://api.github.com/users/octocat")
      .then((res) => res.json())
      .then((data) => setUsuario(data));
  };

  return (
    <div>
      <button onClick={buscar}>Buscar Usuário</button>
      {usuario && (
        <div>
          <h2>{usuario.login}</h2>
          <img src={usuario.avatar_url} width={100} alt="Avatar" />
        </div>
      )}
    </div>
  );
};

export default BuscarFetch;
