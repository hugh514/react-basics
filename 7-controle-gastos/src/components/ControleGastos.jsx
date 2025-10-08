import { useState, useEffect } from "react";
import "./ControleGastos.css";

const ControleGastos = () => {
  const localGastos = JSON.parse(localStorage.getItem("listGastos")) || [];
  const [listGastos, setGastos] = useState(localGastos);
  const [inputNome, setNome] = useState("");
  const [inputValor, setValor] = useState();
  const [totalDespesas, setTotal] = useState(0);

  const cadastrarGasto = (e) => {
    e.preventDefault();

    if (inputNome.trim() !== "" && inputValor.trim() !== "") {
      const newGasto = {
        id: Date.now(),
        nome: inputNome,
        valor: inputValor,
      };
      setGastos((prevGasto) => [...prevGasto, newGasto]);
      setNome("");
      setValor("");
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
        <button type="submit" className="button-submit">
          Cadastrar
        </button>
      </form>

      {listGastos.length === 0 && <p className="empty">Nada Cadastrado.</p>}

      <ul className="list-gastos">
        {listGastos.map((gasto) => (
          <li className="item-gastos" key={gasto.id}>
            <span>
              Nome
              <br />
              <small>{gasto.nome}</small>
            </span>
            <span>
              Valor
              <br />
              <small>R${gasto.valor},00</small>{" "}
            </span>
          </li>
        ))}
      </ul>
      <div className="bloco-total">
        <span className="total">Total das Despesas: R${totalDespesas},00.</span>
      </div>
    </div>
  );
};

export default ControleGastos;
