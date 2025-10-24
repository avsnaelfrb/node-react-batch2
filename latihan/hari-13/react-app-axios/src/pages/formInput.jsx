import { useState, useEffect } from "react";
import axios from "axios";
import "../style/formInput.css";

export default function FormInput({ editingMovie, onUpdate, onCancelEdit }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [categoryId, setCategoryId] = useState("");

  useEffect(() => {
    if (editingMovie) {
      setTitle(editingMovie.title);
      setYear(editingMovie.year.toString());
      setCategoryId(editingMovie.categoryId.toString());
    } else {
      setTitle("");
      setYear("");
      setCategoryId("");
    }
  }, [editingMovie]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const movieData = {
      title,
      year: parseInt(year),
      categoryId: parseInt(categoryId),
    };

    if (editingMovie) {
      // Update existing movie
      onUpdate({ ...movieData, id: editingMovie.id });
    } else {
      // Create new movie
      axios
        .post("http://localhost:3000/api/movies", movieData)
        .then((response) => {
          console.log("Movie added:", response.data);
          // Reset form
          setTitle("");
          setYear("");
          setCategoryId("");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Movie title.."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <label htmlFor="year">Year</label>
      <input
        type="number"
        id="year"
        name="year"
        placeholder="Release year.."
        value={year}
        onChange={(e) => setYear(e.target.value)}
        required
      />

      <label htmlFor="categoryId">Category</label>
      <select
        id="categoryId"
        name="categoryId"
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value)}
        required
      >
        <option value="">Select category</option>
        <option value="1">Action</option>
        <option value="2">Comedy</option>
        <option value="3">Drama</option>
      </select>

      <input type="submit" value={editingMovie ? "update" : "Submit"} />
      {editingMovie && (
        <button type="button" onClick={onCancelEdit}>
          Cancel
        </button>
      )}
    </form>
  );
}
