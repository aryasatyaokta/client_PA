import React, { useRef, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../../auth/Sidebar'
import Welcome from '../../images/melek.png'
import { Link} from 'react-router-dom';
import audioAksaraJawa from '../../audio/audio_aksara_jawa.mp3'
import audioHa from '../../audio/audio_ha.mp3'
import audioNa from '../../audio/audio_na.mp3'
import audioCa from '../../audio/audio_ca.mp3'
import audioRa from '../../audio/audio_ra.mp3'
import audioKa from '../../audio/audio_ka.mp3'
import audioDa from '../../audio/audio_da.mp3'
import audioTa from '../../audio/audio_ta.mp3'
import audioSa from '../../audio/audio_sa.mp3'
import audioWa from '../../audio/audio_wa.mp3'
import audioLa from '../../audio/audio_la.mp3'
import audioPa from '../../audio/audio_pa.mp3'
import audioDha from '../../audio/audio_dha.mp3'

export default function Materi3() {

  const audioRef = useRef(new Audio(audioAksaraJawa));
  const navigate = useNavigate();

  const audioRefWulu = useRef(new Audio(audioHa));
  const audioRefSuku = useRef(new Audio(audioNa));
  const audioRefTaling = useRef(new Audio(audioCa));
  const audioRefTarung = useRef(new Audio(audioRa));
  const audioRefPepet = useRef(new Audio(audioKa));
  const audioRefCecak = useRef(new Audio(audioDa));
  const audioRefLayar = useRef(new Audio(audioTa));
  const audioRefWignyan = useRef(new Audio(audioSa));
  const audioRefPangkon = useRef(new Audio(audioWa));
  const audioRefKeret = useRef(new Audio(audioLa));
  const audioRefPengkal = useRef(new Audio(audioPa));
  const audioRefCakra = useRef(new Audio(audioDha));

  const [showModalWulu, setShowModalWulu] = useState(false);
  const [showModalSuku, setShowModalSuku] = useState(false);
  const [showModalTaling, setShowModalTaling] = useState(false);
  const [showModalTarung, setShowModalTarung] = useState(false);
  const [showModalPepet, setShowModalPepet] = useState(false);
  const [showModalCecak, setShowModalCecak] = useState(false);
  const [showModalLayar, setShowModalLayar] = useState(false);
  const [showModalWignyan, setShowModalWignyan] = useState(false);
  const [showModalPangkon, setShowModalPangkon] = useState(false);
  const [showModalKeret, setShowModalKeret] = useState(false);
  const [showModalPengkal, setShowModalPengkal] = useState(false);
  const [showModalCakra, setShowModalCakra] = useState(false);
  

  useEffect(() => {
    const token = localStorage.getItem('TOKEN');

    const playAudio = () => {
      audioRef.current.play();
      localStorage.setItem('AUDIO_PLAYED', 'true');
    };

    if (!token) {
      navigate('/login');
    } else {
      // Check if audio has already been played
      const audioPlayed = localStorage.getItem('AUDIO_PLAYED');

      if (!audioPlayed) {
        // If not played, play audio after a delay
        const delay = 1000; // 1 second delay
        setTimeout(playAudio, delay);
      }
    }

    // Stop audio when component is unmounted or navigated away
    return () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    };
  }, [navigate]);
  
  const playAudioAgain = () => {
    audioRef.current.play();
  };

  const playAudioWulu = () => {
    audioRefWulu.current.play();
    setShowModalWulu(true);
  }
  const playAudioSuku = () => {
    audioRefSuku.current.play();
    setShowModalSuku(true);
  }
  const playAudioTaling = () => {
    audioRefTaling.current.play();
    setShowModalTaling(true);
  }
  const playAudioTarung = () => {
    audioRefTarung.current.play();
    setShowModalTarung(true);
  }
  const playAudioPepet = () => {
    audioRefPepet.current.play();
    setShowModalPepet(true);
  }
  const playAudioCecak = () => {
    audioRefCecak.current.play();
    setShowModalCecak(true);
  }
  const playAudioLayar = () => {
    audioRefLayar.current.play();
    setShowModalLayar(true);
  }
  const playAudioWignyan = () => {
    audioRefWignyan.current.play();
    setShowModalWignyan(true);
  }
  const playAudioPangkon = () => {
    audioRefPangkon.current.play();
    setShowModalPangkon(true);
  }
  const playAudioKeret = () => {
    audioRefKeret.current.play();
    setShowModalKeret(true);
  }
  const playAudioPengkal = () => {
    audioRefPengkal.current.play();
    setShowModalPengkal(true);
  }
  const playAudioCakra = () => {
    audioRefCakra.current.play();
    setShowModalCakra(true);
  }

  /** Modal */
  const closeModalWulu = () => {
    setShowModalWulu(false);
  };
  const closeModalSuku = () => {
    setShowModalSuku(false);
  };
  const closeModalTaling = () => {
    setShowModalTaling(false);
  };
  const closeModalTarung = () => {
    setShowModalTarung(false);
  };
  const closeModalPepet = () => {
    setShowModalPepet(false);
  };
  const closeModalCecak = () => {
    setShowModalCecak(false);
  };
  const closeModalLayar = () => {
    setShowModalLayar(false);
  };
  const closeModalWignyan = () => {
    setShowModalWignyan(false);
  };
  const closeModalPangkon = () => {
    setShowModalPangkon(false);
  };
  const closeModalKeret = () => {
    setShowModalKeret(false);
  };
  const closeModalPengkal = () => {
    setShowModalPengkal(false);
  };
  const closeModalCakra = () => {
    setShowModalCakra(false);
  };
  /** ======== */
   

  return (
    <div>
     <Sidebar/>
     <div className="p-4 sm:ml-64">
        <div className="p-4  mt-14">
          <p className='text-xl font-semibold font-[Poppins]'>Materi Aksara Jawa Kelas 5</p>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="col-span-2 justify-center items-center rounded-lg dark:bg-gray-800">
              <p className='text-lg font-bold mx-2 p-2 text-[#9A3B3B]'>Sandhangan</p>
              <div class="text-center mx-2 p-2 grid grid-cols-4 gap-4 overflow-y-auto">
                <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer' onClick={playAudioWulu}>
                  <div className='text-white text-3xl p-2'>
                    <p className='text-xl'>wulu</p>
                    <p className='mt-4'>ꦶ</p>
                    <p className='text-xl mt-6'>i</p>
                  </div>
                </div>
                <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer' onClick={playAudioSuku}>
                  <div className='text-white text-3xl p-2'>
                    <p className='text-xl'>suku</p>
                    <p className='mt-4'>ꦸ</p>
                    <p className='text-xl mt-6'>u</p>
                  </div>
                </div>
                <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer' onClick={playAudioTaling}>
                  <div className='text-white text-3xl p-2'>
                    <p className='text-xl'>taling</p>
                    <p className='mt-4'>ꦺ</p>
                    <p className='text-xl mt-6'>é</p>
                  </div>
                </div>
                <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer' onClick={playAudioTarung}>
                  <div className='text-white text-3xl p-2'>
                    <p className='text-base'>taling - tarung</p>
                    <p className='mt'>ꦺꦴ</p>
                    <p className='text-xl mt-6'>o</p>
                  </div>
                </div>
                <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer' onClick={playAudioPepet}>
                  <div className='text-white text-3xl p-2'>
                    <p className='text-xl'>pepet</p>
                    <p className='mt-5'>ꦼ</p>
                    <p className='text-xl mt-6'>e</p>
                  </div>
                </div>
                <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer' onClick={playAudioCecak}>
                  <div className='text-white text-3xl p-2'>
                    <p className='text-xl'>cecak</p>
                    <p className='mt-4'>ꦁ</p>
                    <p className='text-xl mt-4'>ng</p>
                  </div>
                </div>
                <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer' onClick={playAudioLayar}>
                  <div className='text-white text-3xl p-2'>
                    <p className='text-xl'>layar</p>
                    <p className='mt-4'>ꦂ</p>
                    <p className='text-xl mt-4'>r</p>
                  </div>
                </div>
                <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer' onClick={playAudioWignyan}>
                  <div className='text-white text-3xl p-2'>
                    <p className='text-xl'>wignyan</p>
                    <p className='mt-3'>ꦃ</p>
                    <p className='text-xl mt-6'>h</p>
                  </div>
                </div>
                <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer' onClick={playAudioPangkon}>
                  <div className='text-white text-3xl p-2'>
                    <p className='text-xl'>pangkon</p>
                    <p className='mt-3'>꧀</p>
                    <p className='text-xl mt-6'>pemati</p>
                  </div>
                </div>
                <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer' onClick={playAudioKeret}>
                  <div className='text-white text-3xl p-2'>
                    <p className='text-xl'>keret</p>
                    <p className='mt-3'>ꦽ</p>
                    <p className='text-xl mt-6'>kre</p>
                  </div>
                </div> 
                <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer' onClick={playAudioPengkal}>
                  <div className='text-white text-3xl p-2'>
                    <p className='text-xl'>pengkal</p>
                    <p className='mt-2'>ꦾ</p>
                    <p className='text-xl mt-6'>kya</p>
                  </div>
                </div>
                <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer' onClick={playAudioCakra}>
                  <div className='text-white text-3xl p-2'>
                    <p className='text-xl'>cakra</p>
                    <p className='mt-2'>ꦿ</p>
                    <p className='text-xl mt-6'>ra</p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-start justify-start mt-10 mx-4'>
                <Link to='/latihan-struktur' className='bg-[#433A30] px-16 py-2 text-white rounded-lg'>Selanjutnya</Link>
              </div>
            </div>
            <div className='col-span-1 flex flex-col items-center justify-center mb-72'>
              <div className="border-yellow-700 border-2 rounded-xl drop-shadow-xl w-80 flex items-center justify-center">
                <img className='w-52 self-start' alt='' src={Welcome}/>
              </div>
              <div className="mt-4">
                  <button
                    onClick={playAudioAgain}
                    className="bg-[#9A3B3B] px-4 py-2 text-white rounded-lg"
                  >
                    Panggil Joko
                  </button>
              </div>
            </div>
            
          </div>
        </div>
     </div>
     {showModalWulu && (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
          <div className="z-50 bg-white w-60 h-80 rounded-lg">
            <div className='flex flex-col items-end mt-2 mr-3'>
              <svg className="cursor-pointer w-4 h-4 text-gray-800 dark:text-white" onClick={closeModalWulu} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </div>
            <div className='flex flex-col items-center mt-5 text-center'>
              <p className="text-xl font-bold mb-4">Sandhangan Wulu</p>
              <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer'>
                <div className='text-white text-3xl p-2'>
                  <p className='text-4xl mt-2'>ꦶ</p>
                  <p className='mt-6'>i</p>
                </div>
              </div>
              <button className='bg-[#9A3B3B] px-4 py-2 mt-8 text-white rounded-lg'>Panggil Joko</button>
            </div>
          </div>
        </div>
      )}
      {showModalSuku && (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
          <div className="z-50 bg-white w-60 h-80 rounded-lg">
            <div className='flex flex-col items-end mt-2 mr-3'>
              <svg className="cursor-pointer w-4 h-4 text-gray-800 dark:text-white" onClick={closeModalSuku} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </div>
            <div className='flex flex-col items-center mt-5 text-center'>
              <p className="text-xl font-bold mb-4">Sandhangan Suku</p>
              <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer'>
                <div className='text-white text-3xl p-2'>
                  <p className='text-4xl'>ꦸ</p>
                  <p className='mt-7'>u</p>
                </div>
              </div>
              <button className='bg-[#9A3B3B] px-4 py-2 mt-8 text-white rounded-lg'>Panggil Joko</button>
            </div>
          </div>
        </div>
      )}
      {showModalTaling && (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
          <div className="z-50 bg-white w-60 h-80 rounded-lg">
            <div className='flex flex-col items-end mt-2 mr-3'>
              <svg className="cursor-pointer w-4 h-4 text-gray-800 dark:text-white" onClick={closeModalTaling} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </div>
            <div className='flex flex-col items-center mt-5 text-center'>
              <p className="text-xl font-bold mb-4">Sandhangan Taling</p>
              <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer'>
                <div className='text-white text-3xl p-2'>
                  <p className='text-4xl'>ꦺ</p>
                  <p className='mt-9'>é</p>
                </div>
              </div>
              <button className='bg-[#9A3B3B] px-4 py-2 mt-8 text-white rounded-lg'>Panggil Joko</button>
            </div>
          </div>
        </div>
      )}
      {showModalTarung && (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
          <div className="z-50 bg-white w-60 h-80 rounded-lg">
            <div className='flex flex-col items-end mt-2 mr-3'>
              <svg className="cursor-pointer w-4 h-4 text-gray-800 dark:text-white" onClick={closeModalTarung} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </div>
            <div className='flex flex-col items-center mt-5 text-center'>
              <p className="text-xl font-bold mb-4">Sandhangan Taling Tarung</p>
              <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer'>
                <div className='text-white text-3xl p-2'>
                  <p className='text-4xl'>ꦺꦴ</p>
                  <p className='mt-9'>o</p>
                </div>
              </div>
              <button className='bg-[#9A3B3B] px-4 py-2 mt-8 text-white rounded-lg'>Panggil Joko</button>
            </div>
          </div>
        </div>
      )}
      {showModalPepet && (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
          <div className="z-50 bg-white w-60 h-80 rounded-lg">
            <div className='flex flex-col items-end mt-2 mr-3'>
              <svg className="cursor-pointer w-4 h-4 text-gray-800 dark:text-white" onClick={closeModalPepet} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </div>
            <div className='flex flex-col items-center mt-5 text-center'>
              <p className="text-xl font-bold mb-4">Sandhangan Pepet</p>
              <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer'>
                <div className='text-white text-3xl p-2'>
                  <p className='text-4xl mt-2'>ꦼ</p>
                  <p className='mt-6'>e</p>
                </div>
              </div>
              <button className='bg-[#9A3B3B] px-4 py-2 mt-8 text-white rounded-lg'>Panggil Joko</button>
            </div>
          </div>
        </div>
      )}
      {showModalCecak && (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
          <div className="z-50 bg-white w-60 h-80 rounded-lg">
            <div className='flex flex-col items-end mt-2 mr-3'>
              <svg className="cursor-pointer w-4 h-4 text-gray-800 dark:text-white" onClick={closeModalCecak} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </div>
            <div className='flex flex-col items-center mt-5 text-center'>
              <p className="text-xl font-bold mb-4">Sandhangan Cecak</p>
              <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer'>
                <div className='text-white text-3xl p-2'>
                  <p className='text-4xl'>ꦁ</p>
                  <p className='mt-6'>ng</p>
                </div>
              </div>
              <button className='bg-[#9A3B3B] px-4 py-2 mt-8 text-white rounded-lg'>Panggil Joko</button>
            </div>
          </div>
        </div>
      )}
      {showModalLayar && (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
          <div className="z-50 bg-white w-60 h-80 rounded-lg">
            <div className='flex flex-col items-end mt-2 mr-3'>
              <svg className="cursor-pointer w-4 h-4 text-gray-800 dark:text-white" onClick={closeModalLayar} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </div>
            <div className='flex flex-col items-center mt-5 text-center'>
              <p className="text-xl font-bold mb-4">Sandhangan Layar</p>
              <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer'>
                <div className='text-white text-3xl p-2'>
                  <p className='text-4xl mt-2'>ꦂ</p>
                  <p className='mt-6'>r</p>
                </div>
              </div>
              <button className='bg-[#9A3B3B] px-4 py-2 mt-8 text-white rounded-lg'>Panggil Joko</button>
            </div>
          </div>
        </div>
      )}
      {showModalWignyan && (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
          <div className="z-50 bg-white w-60 h-80 rounded-lg">
            <div className='flex flex-col items-end mt-2 mr-3'>
              <svg className="cursor-pointer w-4 h-4 text-gray-800 dark:text-white" onClick={closeModalWignyan} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </div>
            <div className='flex flex-col items-center mt-5 text-center'>
              <p className="text-xl font-bold mb-4">Sandhangan Wulu</p>
              <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer'>
                <div className='text-white text-3xl p-2'>
                  <p className='text-4xl'>ꦃ</p>
                  <p className='mt-6'>h</p>
                </div>
              </div>
              <button className='bg-[#9A3B3B] px-4 py-2 mt-8 text-white rounded-lg'>Panggil Joko</button>
            </div>
          </div>
        </div>
      )}
      {showModalPangkon && (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
          <div className="z-50 bg-white w-60 h-80 rounded-lg">
            <div className='flex flex-col items-end mt-2 mr-3'>
              <svg className="cursor-pointer w-4 h-4 text-gray-800 dark:text-white" onClick={closeModalPangkon} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </div>
            <div className='flex flex-col items-center mt-5 text-center'>
              <p className="text-xl font-bold mb-4">Sandhangan Pangkon</p>
              <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer'>
                <div className='text-white p-2'>
                  <p className='text-4xl'>꧀</p>
                  <p className='mt-8 text-xl'>pemati</p>
                </div>
              </div>
              <button className='bg-[#9A3B3B] px-4 py-2 mt-8 text-white rounded-lg'>Panggil Joko</button>
            </div>
          </div>
        </div>
      )}
      {showModalKeret && (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
          <div className="z-50 bg-white w-60 h-80 rounded-lg">
            <div className='flex flex-col items-end mt-2 mr-3'>
              <svg className="cursor-pointer w-4 h-4 text-gray-800 dark:text-white" onClick={closeModalKeret} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </div>
            <div className='flex flex-col items-center mt-5 text-center'>
              <p className="text-xl font-bold mb-4">Sandhangan Keret</p>
              <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer'>
                <div className='text-white text-3xl p-2'>
                  <p className='text-4xl'>ꦽ</p>
                  <p className='mt-8'>re</p>
                </div>
              </div>
              <button className='bg-[#9A3B3B] px-4 py-2 mt-8 text-white rounded-lg'>Panggil Joko</button>
            </div>
          </div>
        </div>
      )}
      {showModalPengkal && (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
          <div className="z-50 bg-white w-60 h-80 rounded-lg">
            <div className='flex flex-col items-end mt-2 mr-3'>
              <svg className="cursor-pointer w-4 h-4 text-gray-800 dark:text-white" onClick={closeModalPengkal} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </div>
            <div className='flex flex-col items-center mt-5 text-center'>
              <p className="text-xl font-bold mb-4">Sandhangan Pengkal</p>
              <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer'>
                <div className='text-white text-3xl p-2'>
                  <p className='text-4xl'>ꦾ</p>
                  <p className='mt-9'>ya</p>
                </div>
              </div>
              <button className='bg-[#9A3B3B] px-4 py-2 mt-8 text-white rounded-lg'>Panggil Joko</button>
            </div>
          </div>
        </div>
      )}
      {showModalCakra && (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
          <div className="z-50 bg-white w-60 h-80 rounded-lg">
            <div className='flex flex-col items-end mt-2 mr-3'>
              <svg className="cursor-pointer w-4 h-4 text-gray-800 dark:text-white" onClick={closeModalCakra} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </div>
            <div className='flex flex-col items-center mt-5 text-center'>
              <p className="text-xl font-bold mb-4">Sandhangan Cakra</p>
              <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer'>
                <div className='text-white text-3xl p-2'>
                  <p className='text-4xl'>ꦿ</p>
                  <p className='mt-6'>ra</p>
                </div>
              </div>
              <button className='bg-[#9A3B3B] px-4 py-2 mt-8 text-white rounded-lg'>Panggil Joko</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
