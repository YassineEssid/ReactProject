import "react";
import { useState } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types"; 

const ColorBox = ({ initialColor = "#3498db", colorOptions = ["#e74c3c", "#2ecc71", "#f1c40f", "#9b59b6"] }) => {
  const [color, setColor] = useState(initialColor);

  useEffect(() => {
    setColor(initialColor);
  }, [initialColor]);

  const changeColor = () => {
    const randomColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
    setColor(randomColor);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Changement de Couleur</h2>
      <div 
        style={{ 
          width: "150px", 
          height: "150px", 
          backgroundColor: color, 
          margin: "10px auto", 
          borderRadius: "10px", 
          transition: "0.3s ease-in-out"
        }} 
      />
      <button 
        onClick={changeColor} 
        style={{ cursor: "pointer", padding: "10px", marginTop: "10px" }}
      >
        Changer de couleur
      </button>
    </div>
  );
};

ColorBox.propTypes = {
  initialColor: PropTypes.string,
  colorOptions: PropTypes.arrayOf(PropTypes.string) 
};

export default ColorBox;
