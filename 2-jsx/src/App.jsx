import "./App.css";

function App() {
  const listUsers= [

    {id: 1, nome: "Hugo"},
    {id: 2, nome: "João"},
    {id: 3, nome: "Mario"},
    {id: 4, nome: "Yuri"},
    
  ];

  const estaLogado = true;
  const cargo = "admin";

  const primeiroNome = "Hugo";
  const user = {
    primeiroNome: "Hugo",
    segundoNome: "Santos",
  };

  function gritarNome(nome) {
    return `OLÁ ${nome}!!`;
  }
  return (
    <>
      <h1>JSX</h1>
      <p>O Conteúdo que o usuário irá ver.</p>

      <p>Seu primeiro nome é {primeiroNome}?</p>

      <p>Confirme para mim {user.primeiroNome + " " + user.segundoNome}!</p>

      {/*Usando Função no JSX*/}
      <p>{gritarNome(primeiroNome)}</p>
      <p>{gritarNome("Amanda")}</p>

      {/*Usando Expressão Ternária*/}
      {estaLogado ? (
        <div>
          <p>Está Logado</p>
        </div>
      ) : (
        <p>Não está Logado</p>
      )}

      {/* Usando Expressão condicional */}

      {cargo === "admin" && "Você é um Administrador"}

      {/* Usando Expressões de mapeamento */}

      <div>
        <ul>
          {listUsers.map((user) =>
            <li key={user.id}>ID: {user.id} e Nome: {user.nome}</li>
          )}
        </ul>
      </div>
    </>
  );
}

export default App;
