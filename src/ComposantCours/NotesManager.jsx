import "react";
import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes for validation

const NotesManager = ({ initialNotes = [] }) => {
  const [notes, setNotes] = useState(initialNotes);
  const [newNote, setNewNote] = useState("");

  const addNote = (e) => {
    e.preventDefault();
    const noteValue = parseFloat(newNote);
    if (!isNaN(noteValue) && noteValue >= 0 && noteValue <= 20) {
      setNotes([...notes, noteValue]);
      setNewNote("");
    } else {
      alert("Veuillez entrer une note entre 0 et 20.");
    }
  };

  const removeNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const calculateAverage = () => {
    if (notes.length === 0) return 0;
    return (notes.reduce((acc, note) => acc + note, 0) / notes.length).toFixed(2);
  };

  return (
    <div>
      <h2>Gestionnaire de Notes</h2>
      <form onSubmit={addNote}>
        <input
          type="number"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Ajouter une note (0-20)"
          min="0"
          max="20"
        />
        <button type="submit">Ajouter</button>
      </form>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note} <button onClick={() => removeNote(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <h3>Moyenne des notes : {calculateAverage()}</h3>
    </div>
  );
};

// PropTypes validation for initialNotes prop
NotesManager.propTypes = {
  initialNotes: PropTypes.arrayOf(PropTypes.number), // Expecting an array of numbers
};

export default NotesManager;
