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
import { CheckUserExist, CheckUserExistBim, CheckUserExistBim2, CheckUserExistMan, CheckUserExistMan2, CheckUserExistStruk, CheckUserExistStruk2 } from './helper/helper';
import Struktur from './pages/terstruktur/Struktur';
import QuizStruk from './pages/terstruktur/QuizStruk';
import ResultStruk from './pages/terstruktur/ResultStruk';
import Bimbing from './pages/terbimbing/Bimbing';
import QuizBim from './pages/terbimbing/QuizBim';
import ResultBim from './pages/terbimbing/ResultBim';
import Mandiri from './pages/mandiri/Mandiri';
import QuizMan from './pages/mandiri/QuizMan';
import ResultMan from './pages/mandiri/ResultMan';
import Struktur2 from './pages/terstruktur2/Struktur2';
import ResultStruk2 from './pages/terstruktur2/ResultStruk2';
import QuizStruk2 from './pages/terstruktur2/QuizStruk2';
import Bimbing2 from './pages/terbimbing2/Bimbing2';
import QuizBim2 from './pages/terbimbing2/QuizBim2';
import ResultBim2 from './pages/terbimbing2/ResultBim2';
import Mandiri2 from './pages/mandiri2/Mandiri2';
import QuizMan2 from './pages/mandiri2/QuizMan2';
import ResultMan2 from './pages/mandiri2/ResultMan2';
import GabMateri from './gabpages/GabMateri';
import GabStruktur from './gabpages/GabStruktur';
import GabBimbing from './gabpages/GabBimbing';
import GabMandiri from './gabpages/GabMandiri';

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
          <Route path="/lat-terstruktur" element={<Struktur />} />
          <Route path="/quiz-lat-terstruktur" element={<CheckUserExistStruk><QuizStruk /></CheckUserExistStruk>} />
          <Route path="/hasil-lat-terstruktur" element={<CheckUserExistStruk><ResultStruk /></CheckUserExistStruk>} />
          <Route path="/lat-terbimbing" element={<Bimbing />} />
          <Route path="/quiz-lat-terbimbing" element={<CheckUserExistBim><QuizBim/></CheckUserExistBim>} />
          <Route path="/hasil-lat-terbimbing" element={<CheckUserExistBim><ResultBim /></CheckUserExistBim>} />
          <Route path="/lat-mandiri" element={<Mandiri />} />
          <Route path="/quiz-lat-mandiri" element={<CheckUserExistMan><QuizMan/></CheckUserExistMan>} />
          <Route path="/hasil-lat-mandiri" element={<CheckUserExistMan><ResultMan /></CheckUserExistMan>} />

          /** Terstruktur 2 */
          <Route path="/lat-struktur" element={<Struktur2 />} />
          <Route path="/quiz-lat-struktur" element={<CheckUserExistStruk2><QuizStruk2/></CheckUserExistStruk2>} />
          <Route path="/hasil-lat-struktur" element={<CheckUserExistStruk2><ResultStruk2 /></CheckUserExistStruk2>} />
          /** ============= */

          /** Terbimbing 2 */
          <Route path="/lat-bimbing" element={<Bimbing2 />} />
          <Route path="/quiz-lat-bimbing" element={<CheckUserExistBim2><QuizBim2/></CheckUserExistBim2>} />
          <Route path="/hasil-lat-bimbing" element={<CheckUserExistBim2><ResultBim2 /></CheckUserExistBim2>} />
          /** ============ */

          /** Mandiri 2 */
          <Route path="/latihan-mandiri" element={<Mandiri2 />} />
          <Route path="/quiz-latihan-mandiri" element={<CheckUserExistMan2><QuizMan2/></CheckUserExistMan2>} />
          <Route path="/hasil-latihan-mandiri" element={<CheckUserExistMan2><ResultMan2 /></CheckUserExistMan2>} />
          /** ========= */

          /** Gabungan */
          <Route path="/materii" element={<CheckUserExist><GabMateri /></CheckUserExist>}/>
          <Route path="/latihan-struktur" element={<CheckUserExist><GabStruktur /></CheckUserExist>}/>
          <Route path="/latihan-terbimbing" element={<CheckUserExist><GabBimbing /></CheckUserExist>}/>
          <Route path="/latihan-mandirii" element={<CheckUserExist><GabMandiri/></CheckUserExist>}/>
          /** ======== */
          <Route></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
