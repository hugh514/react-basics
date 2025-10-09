import { useState, useEffect } from "react";
import "./ControleGastos.css";

const ControleGastos = () => {
  const [cadastroButn, setCadastroBtn] = useState("Cadastrar");
  const localGastos = JSON.parse(localStorage.getItem("listGastos")) || [];
  const [listGastos, setGastos] = useState(localGastos);
  const [inputNome, setNome] = useState("");
  const [inputValor, setValor] = useState();
  const [totalDespesas, setTotal] = useState(0);
  const [itemEditando, setItem] = useState(null);

  const cadastrarGasto = (e) => {
    e.preventDefault();
    if (itemEditando) {
      const editarGasto = listGastos.map((gasto) =>
        gasto.id === itemEditando.id
          ? { ...gasto, nome: inputNome, valor: inputValor }
          : gasto
      );
      setGastos(editarGasto);
      setItem(null);
      setCadastroBtn("Cadastrar");
      setNome("");
      setValor("");
    } else if (inputNome.trim() !== "" && inputValor.trim() !== "") {
      const newGasto = {
        id: Date.now(),
        nome: inputNome,
        valor: inputValor,
      };
      setGastos((prevGasto) => [...prevGasto, newGasto]);
      setNome("");
      setValor("");
    } else {
      alert("Preencha todos os campos!");
    }
  };
  useEffect(() => {
    localStorage.setItem("listGastos", JSON.stringify(listGastos));
    const soma = listGastos.reduce(
      (acumulador, gasto) => (acumulador += parseFloat(gasto.valor)),
      0
    );
    setTotal(soma);
  }, [listGastos]);

  const editarGasto = (id) => {
    const gastoEncontrado = listGastos.find((gasto) => gasto.id === id);
    setNome(gastoEncontrado.nome);
    setValor(gastoEncontrado.valor);
    setItem(gastoEncontrado);
    setCadastroBtn("Editar");
  };
  const excluirGasto = (id) => {
    setGastos(listGastos.filter((gasto) => gasto.id !== id));
  };
  return (
    <div className="app-container">
      <h1 className="title">Controle de Gastos</h1>

      <form onSubmit={cadastrarGasto} className="form">
        <input
          type="text"
          placeholder="Nome do gasto"
          className="input"
          value={inputNome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor do gasto"
          className="input"
          value={inputValor}
          onChange={(e) => setValor(e.target.value)}
        />
        <button type="submit" className="button submit">
          {cadastroButn}
        </button>
      </form>

      {listGastos.length === 0 && <p className="empty">Nada Cadastrado.</p>}

      <ul className="list-gastos">
        {listGastos.map((gasto) => (
          <li className="item-gastos" key={gasto.id}>
            <span>
              Nome
              <small>{gasto.nome}</small>
            </span>
            <span>
              Valor
              <small>R${gasto.valor},00</small>{" "}
            </span>
            <span className="crud-buttons">
              <button
                className="button edit"
                onClick={() => editarGasto(gasto.id)}
              >
                Editar
              </button>
              <button
                className="button delete"
                onClick={() => excluirGasto(gasto.id)}
              >
                Excluir
              </button>
            </span>
          </li>
        ))}
      </ul>
      <div className="bloco-total">
        <span className="total">
          Total das Despesas: R${totalDespesas.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default ControleGastos;
