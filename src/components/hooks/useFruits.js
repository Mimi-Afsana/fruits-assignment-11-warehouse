import React, { useEffect, useState } from "react";

const useFruits = () => {
  const [fruitss, setFruitss] = useState([]);
  useEffect(() => {
    fetch("https://mysterious-wildwood-76982.herokuapp.com/fruit")
      .then((res) => res.json())
      .then((data) => setFruitss(data));
  }, [fruitss]);
  return [fruitss, setFruitss];
};

export default useFruits;
