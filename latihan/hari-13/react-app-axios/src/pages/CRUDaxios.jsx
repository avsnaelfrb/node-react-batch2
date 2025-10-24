import { useEffect, useState } from "react";
import "../style/crudAxios.css";
import axios from "axios";
import FormInput from "./formInput";

export default function CRUDaxios() {
  const [data, setData] = useState();
  const [editingMovie, setEditingMovie] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:3000/api/movies")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = (movie) => {
    setEditingMovie(movie);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this movie?")) {
      axios
        .delete(`http://localhost:3000/api/movies/${id}`)
        .then(() => {
          fetchData(); // Refresh data after delete
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleUpdate = (updatedMovie) => {
    axios
      .put(`http://localhost:3000/api/movies/${id}`, updatedMovie)
      .then(() => {
        fetchData(); // Refresh data after update
        setEditingMovie(null); // Exit edit mode
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1>CRUD axios</h1>
      <FormInput
        editingMovie={editingMovie}
        onUpdate={handleUpdate}
        onCancelEdit={() => setEditingMovie(null)}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Year</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.year}</td>
                  <td>{item.categoryId}</td>
                  <td>
                    <button onClick={() => handleEdit(item)}>Edit</button>
                    <button onClick={() => handleDelete(item.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}
