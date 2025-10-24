export default function Todolist() {
  const thingsToDo = [
    "Belajar GIT & CLI",
    "Belajar HTML & CSS",
    "Belajar Javascript",
    "Belajar ReactJS Dasar",
    "Belajar ReactJS Advance",
  ];

  return (
    <>
      {/* <!-- Daftar Tugas --> */}
      <form>
        <ul className="todo-list">
          {/* <!-- Item 1 --> */}
          <li className="todo-item">
            {/* Checkbox ini akan dicentang secara default, mirip dengan gambar */}
            <input type="checkbox" id="git-cli" />
            <label htmlFor="git-cli">{thingsToDo[0]}</label>
          </li>

          {/* <!-- Item 2 --> */}
          <li className="todo-item">
            <input type="checkbox" id="html-css" />
            <label htmlFor="html-css">Belajar HTML & CSS</label>
          </li>

          {/* <!-- Item 3 --> */}
          <li className="todo-item">
            <input type="checkbox" id="javascript" />
            <label htmlFor="javascript">Belajar Javascript</label>
          </li>

          {/* <!-- Item 4 (Centang secara default sesuai gambar) --> */}
          <li className="todo-item">
            <input type="checkbox" id="react-dasar" defaultChecked />
            <label htmlFor="react-dasar">Belajar ReactJS Dasar</label>
          </li>

          {/* <!-- Item 5 --> */}
          <li className="todo-item">
            <input type="checkbox" id="react-advance" />
            <label htmlFor="react-advance">Belajar ReactJS Advance</label>
          </li>
        </ul>

        {/* <!-- Tombol SEND --> */}
        <button type="submit" className="send-button">
          SEND
        </button>
      </form>
    </>
  );
}
