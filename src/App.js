import './App.css';
import Login from './auth/Login';
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import Register from './auth/Register';
import Dashboard from './pages/Dashboard';
import Pretest from './pages/pretest/Pretest';
import Materi from './pages/materi/Materi';
import Materi2 from './pages/materi/Materi2';
import Materi3 from './pages/materi/Materi3';
import Quiz from './pages/pretest/Quiz'
import Result from './pages/pretest/Result';
import { CheckUserExist } from './helper/helper';
import Struktur from './pages/terstruktur/Struktur';
import QuizStruk from './pages/terstruktur/QuizStruk';
import ResultStruk from './pages/terstruktur/ResultStruk';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/pretest" element={<Pretest />} />
          <Route path="/materi" element={<Materi />} />
          <Route path="/materi2" element={<Materi2 />} />
          <Route path="/materi3" element={<Materi3 />} />
          <Route path="/quiz-pretest" element={<CheckUserExist><Quiz/></CheckUserExist>}/>
          <Route path="/hasil-pretest" element={<CheckUserExist><Result/></CheckUserExist>}/>
          <Route path="/posttest1" element={<Struktur />} />
          <Route path="/quiz-posttest1" element={<QuizStruk />} />
          <Route path="/hasil-posttest1" element={<ResultStruk />} />
          <Route></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
