import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addElement, removeElement } from "./store/store";
import { RootState, AppDispatch } from "./store/store";

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const elements = useSelector((state: RootState) => state.elements.elements);
  const [isRemoving, setIsRemoving] = useState<boolean>(false);

  const handleAdd = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    dispatch(addElement(randomColor));
  };

  const handleRemove = () => {
    setIsRemoving(true);
    setTimeout(() => {
      dispatch(removeElement());
      setIsRemoving(false);
    }, 500);
  };

  return (
    <div className="app">
      <div className="controls">
        <button onClick={handleAdd}>Добавить</button>
        <button
          onClick={handleRemove}
          disabled={isRemoving || elements.length === 0}
        >
          Удалить
        </button>
      </div>
      <div className="list">
        {elements.map((color, index) => (
          <div
            key={index}
            className={`list-item ${isRemoving && index === elements.length - 1 ? "removing" : "adding"}`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
