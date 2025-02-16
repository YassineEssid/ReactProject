import "react";
import { useState } from "react";
import PropTypes from "prop-types";
  
const ListManager = ({ initialItems, placeholder }) => {
  const [items, setItems] = useState(initialItems);
  const [newItem, setNewItem] = useState("");

  const addItem = (e) => {
    e.preventDefault();
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  const removeItem = (indexToRemove) => {
    setItems(items.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <h2>Liste Dynamique</h2>
      <form onSubmit={addItem}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder={placeholder}
        />
        <button type="submit">Ajouter</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {item}
            <button onClick={() => removeItem(index)} style={{ color: "red", cursor: "pointer" }}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Ajout des PropTypes pour éviter les erreurs ESLint
ListManager.propTypes = {
  initialItems: PropTypes.arrayOf(PropTypes.string),
  placeholder: PropTypes.string,
};

// Valeurs par défaut pour éviter d'avoir des props non définies
ListManager.defaultProps = {
  initialItems: [],
  placeholder: "Ajouter un élément...",
};

export default ListManager;
