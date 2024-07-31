import React, { useState } from "react";

const Player = ({ initialName, symbol, isActive,onChangeName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);
  const handleCLick = () => {
    setIsEditing((prev) => !prev);
    onChangeName(symbol, playerName);
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };
  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input onChange={handleChange} value={playerName} type="text" />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleCLick}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
};

export default Player;
