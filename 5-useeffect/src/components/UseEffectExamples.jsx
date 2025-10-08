import { useState, useEffect, useEffectEvent } from "react";

const UseEffectExamples = () => {
  const [count, useCount] = useState(0);

  //useEffect sem dependencias
  useEffect(() => {
    console.log("UEF1");
  });

  //useEffect vazio
  useEffect(() => {
    console.log("UEF2"), [];
  });

  //useEffect com dependencias
  useEffect(() => {
    console.log("UEF3"), [count];
  });

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => useCount(count + 1)}>Adicinonar numero</button>
    </div>
  );
};

export default UseEffectExamples;
