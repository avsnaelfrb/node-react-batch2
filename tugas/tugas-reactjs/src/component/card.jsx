import "../style/card.css";
import mainLogo from '../assets/logo.png'
import Todolist from "./todolist";
import TimerCountdown from "./timer.jsx";

export default function MainCard() {
  return (
    <>
      <div className="card">
        {/* <!-- Header: Logo Sanbercode --> */}
        <TimerCountdown/>
        <div className="header">
          <span className="logo-placeholder">
            <img src={mainLogo} alt="test" />
          </span>
        </div>

        {/* <!-- Judul dan Subjudul --> */}
        <div className="content-header">
          <h2 className="title">THINGS TO DO</h2>
          <p className="subtitle">During bootcamp in sanbercode</p>
        </div>
        {/* <!-- Daftar Tugas --> */}
        <Todolist/>
      </div>
    </>
  );
}
