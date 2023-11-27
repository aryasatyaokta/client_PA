import React, { useRef, useEffect, useState} from 'react'
import Sidebar from '../../auth/Sidebar'
import Welcome from '../../images/melek.png'
import { useNavigate } from 'react-router-dom'
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
import audioJa from '../../audio/audio_ja.mp3'
import audioYa from '../../audio/audio_ya.mp3'
import audioNya from '../../audio/audio_nya.mp3'
import audioMa from '../../audio/audio_ma.mp3'
import audioGa from '../../audio/audio_ga.mp3'
import audioBa from '../../audio/audio_ba.mp3'
import audioTha from '../../audio/audio_tha.mp3'
import audioNga from '../../audio/audio_nga.mp3'

import audioDashboard from '../../audio/audio_dashboard.mp3'

import { Link} from 'react-router-dom';

export default function Materi() {

   const audioRef = useRef(new Audio(audioAksaraJawa));
   const navigate = useNavigate();
   
   const [showModal, setShowModal] = useState(false);
   const [showModalNa, setShowModalNa] = useState(false);
   const [showModalCa, setShowModalCa] = useState(false);
   const [showModalRa, setShowModalRa] = useState(false);
   const [showModalKa, setShowModalKa] = useState(false);
   const [showModalDa, setShowModalDa] = useState(false);
   const [showModalTa, setShowModalTa] = useState(false);
   const [showModalSa, setShowModalSa] = useState(false);
   const [showModalWa, setShowModalWa] = useState(false);
   const [showModalLa, setShowModalLa] = useState(false);
   const [showModalPa, setShowModalPa] = useState(false);
   const [showModalDha, setShowModalDha] = useState(false);
   const [showModalJa, setShowModalJa] = useState(false);
   const [showModalYa, setShowModalYa] = useState(false);
   const [showModalNya, setShowModalNya] = useState(false);
   const [showModalMa, setShowModalMa] = useState(false);
   const [showModalGa, setShowModalGa] = useState(false);
   const [showModalBa, setShowModalBa] = useState(false);
   const [showModalTha, setShowModalTha] = useState(false);
   const [showModalNga, setShowModalNga] = useState(false);

   const audioRefHa = useRef(new Audio(audioHa));
   const audioRefNa = useRef(new Audio(audioNa));
   const audioRefCa = useRef(new Audio(audioCa));
   const audioRefRa = useRef(new Audio(audioRa));
   const audioRefKa = useRef(new Audio(audioKa));
   const audioRefDa = useRef(new Audio(audioDa));
   const audioRefTa = useRef(new Audio(audioTa));
   const audioRefSa = useRef(new Audio(audioSa));
   const audioRefWa = useRef(new Audio(audioWa));
   const audioRefLa = useRef(new Audio(audioLa));
   const audioRefPa = useRef(new Audio(audioPa));
   const audioRefDha = useRef(new Audio(audioDha));
   const audioRefJa = useRef(new Audio(audioJa));
   const audioRefYa = useRef(new Audio(audioYa));
   const audioRefNya = useRef(new Audio(audioNya));
   const audioRefMa = useRef(new Audio(audioMa));
   const audioRefGa = useRef(new Audio(audioGa));
   const audioRefBa = useRef(new Audio(audioBa));
   const audioRefTha = useRef(new Audio(audioTha));
   const audioRefNga = useRef(new Audio(audioNga));

   const audioRefDashboard = useRef(new Audio(audioDashboard));

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
  const playAudioHa = () => {
    audioRefHa.current.play();
    setShowModal(true);
  }
  const playAudioNa = () => {
    audioRefNa.current.play();
    setShowModalNa(true);
  }
  const playAudioCa = () => {
    audioRefCa.current.play();
    setShowModalCa(true);
  }
  const playAudioRa = () => {
    audioRefRa.current.play();
    setShowModalRa(true);
  }
  const playAudioKa = () => {
    audioRefKa.current.play();
    setShowModalKa(true);
  }
  const playAudioDa = () => {
    audioRefDa.current.play();
    setShowModalDa(true);
  }
  const playAudioTa = () => {
    audioRefTa.current.play();
    setShowModalTa(true);
  }
  const playAudioSa = () => {
    audioRefSa.current.play();
    setShowModalSa(true);
  }
  const playAudioWa = () => {
    audioRefWa.current.play();
    setShowModalWa(true);
  }
  const playAudioLa = () => {
    audioRefLa.current.play();
    setShowModalLa(true);
  }
  const playAudioPa = () => {
    audioRefPa.current.play();
    setShowModalPa(true);
  }
  const playAudioDha = () => {
    audioRefDha.current.play();
    setShowModalDha(true);
  }
  const playAudioJa = () => {
    audioRefJa.current.play();
    setShowModalJa(true);
  }
  const playAudioYa = () => {
    audioRefYa.current.play();
    setShowModalYa(true);
  }
  const playAudioNya = () => {
    audioRefNya.current.play();
    setShowModalNya(true);
  }
  const playAudioMa = () => {
    audioRefMa.current.play();
    setShowModalMa(true);
  }
  const playAudioGa = () => {
    audioRefGa.current.play();
    setShowModalGa(true);
  }
  const playAudioBa = () => {
    audioRefBa.current.play();
    setShowModalBa(true);
  }
  const playAudioTha = () => {
    audioRefTha.current.play();
    setShowModalTha(true);
  }
  const playAudioNga = () => {
    audioRefNga.current.play();
    setShowModalNga(true);
  }

  /** Gabung Aksara */
  const playAudioDashboard = () => {
    audioRefDashboard.current.play();
  };
  /** ============= */


  /** Modal */
  const closeModal = () => {
    setShowModal(false);
  };
  const closeModalNa = () => {
    setShowModalNa(false);
  };
  const closeModalCa = () => {
    setShowModalCa(false);
  };
  const closeModalRa = () => {
    setShowModalRa(false);
  };
  const closeModalKa = () => {
    setShowModalKa(false);
  };
  const closeModalDa = () => {
    setShowModalDa(false);
  };
  const closeModalTa = () => {
    setShowModalTa(false);
  };
  const closeModalSa = () => {
    setShowModalSa(false);
  };
  const closeModalWa = () => {
    setShowModalWa(false);
  };
  const closeModalLa = () => {
    setShowModalLa(false);
  };
  const closeModalPa = () => {
    setShowModalPa(false);
  };
  const closeModalDha = () => {
    setShowModalDha(false);
  };
  const closeModalJa = () => {
    setShowModalJa(false);
  };
  const closeModalYa = () => {
    setShowModalYa(false);
  };
  const closeModalNya = () => {
    setShowModalNya(false);
  };
  const closeModalMa = () => {
    setShowModalMa(false);
  };
  const closeModalGa = () => {
    setShowModalGa(false);
  };
  const closeModalBa = () => {
    setShowModalBa(false);
  };
  const closeModalTha = () => {
    setShowModalTha(false);
  };
  const closeModalNga = () => {
    setShowModalNga(false);
  };
  /** ====== */

  return (
    <div>
     <Sidebar/>
     <div className="p-4 sm:ml-64">
        <div className="p-4  mt-14">
          <p className='text-xl font-semibold font-[Poppins]'>Materi Aksara Jawa Kelas 5</p>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="col-span-2 justify-center items-center rounded-lg dark:bg-gray-800 font-[Poppins]">
              <p className='text-lg font-bold mx-2 p-2 text-[#9A3B3B]'>Aksara Jawa Carakan</p>
              <div class="text-center mx-2 p-2 grid grid-cols-5 gap-4 overflow-y-auto" style={{ maxHeight: '400px' }}>
                <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer' onClick={playAudioHa}>
                  <div className='text-white text-3xl p-2'>
                    <p>ꦲ</p>
                    <p className='mt-6'>ha</p>
                  </div>
                </div>
                <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer' onClick={playAudioNa}>
                  <div className='text-white text-3xl p-2'>
                    <p>ꦤ</p>
                    <p className='mt-6'>na</p>
                  </div>
                </div>
                <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer' onClick={playAudioCa}>
                  <div className='text-white text-3xl p-2'>
                    <p>ꦕ</p>
                    <p className='mt-6'>ca</p>
                  </div>
                </div>
                <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer'onClick={playAudioRa}>
                  <div className='text-white text-3xl p-2'>
                    <p>ꦫ</p>
                    <p className='mt-6'>ra</p>
                  </div>
                </div>
                <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer'onClick={playAudioKa}>
                  <div className='text-white text-3xl p-2'>
                    <p>ꦏ</p>
                    <p className='mt-6'>ka</p>
                  </div>
                </div>
                <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer' onClick={playAudioDa}>
                  <div className='text-white text-3xl p-2'>
                    <p>ꦢ</p>
                    <p className='mt-6'>da</p>
                  </div>
                </div>
                <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer' onClick={playAudioTa}>
                  <div className='text-white text-3xl p-2'>
                    <p>ꦠ</p>
                    <p className='mt-6'>ta</p>
                  </div>
                </div>
                <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer' onClick={playAudioSa}>
                  <div className='text-white text-3xl p-2'>
                    <p>ꦱ</p>
                    <p className='mt-6'>sa</p>
                  </div>
                </div>
                <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer' onClick={playAudioWa}>
                  <div className='text-white text-3xl p-2'>
                    <p>ꦮ</p>
                    <p className='mt-6'>wa</p>
                  </div>
                </div> 
                <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer' onClick={playAudioLa}>
                  <div className='text-white text-3xl p-2'>
                    <p>ꦭ</p>
                    <p className='mt-6'>la</p>
                  </div>
                </div>
                <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer' onClick={playAudioPa}>
                  <div className='text-white text-3xl p-2'>
                    <p>ꦥ</p>
                    <p className='mt-6'>pa</p>
                  </div>
                </div>
                <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer' onClick={playAudioDha}>
                  <div className='text-white text-3xl p-2'>
                    <p>ꦝ</p>
                    <p className='mt-6'>dha</p>
                  </div>
                </div>
                <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer' onClick={playAudioJa}>
                  <div className='text-white text-3xl p-2'>
                    <p>ꦗ</p>
                    <p className='mt-6'>ja</p>
                  </div>
                </div>
                <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer' onClick={playAudioYa}>
                  <div className='text-white text-3xl p-2'>
                    <p>ꦪ</p>
                    <p className='mt-6'>ya</p>
                  </div>
                </div>
                <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer' onClick={playAudioNya}>
                  <div className='text-white text-3xl p-2'>
                    <p>ꦚ</p>
                    <p className='mt-6'>nya</p>
                  </div>
                </div>
                <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer' onClick={playAudioMa}>
                  <div className='text-white text-3xl p-2'>
                    <p>ꦩ</p>
                    <p className='mt-6'>ma</p>
                  </div>
                </div>
                <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer' onClick={playAudioGa}>
                  <div className='text-white text-3xl p-2'>
                    <p>ꦒ</p>
                    <p className='mt-6'>ga</p>
                  </div>
                </div>
                <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer' onClick={playAudioBa}>
                  <div className='text-white text-3xl p-2'>
                    <p>ꦧ</p>
                    <p className='mt-6'>ba</p>
                  </div>
                </div>
                <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer' onClick={playAudioTha}>
                  <div className='text-white text-3xl p-2'>
                    <p>ꦛ</p>
                    <p className='mt-6'>tha</p>
                  </div>
                </div>
                <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer' onClick={playAudioNga}>
                  <div className='text-white text-3xl p-2'>
                    <p>ꦔ</p>
                    <p className='mt-6'>nga</p>
                  </div>
                </div>
              </div>
              <div className='my-7 bg-[#9A3B3B] justify-center flex-col flex rounded-lg w-full h-20'>
                <div className=' flex mx-3'>
                  <div className='text-white'>
                  <div className=''>
                    <p className='text-xl'> saya = ꦱ ꦪ</p>
                    <p className='text-xl'> hanya = ꦲ ꦚ</p>
                  </div>
                  </div>
                  <div className='flex-col flex justify-center ml-auto'>
                    <button className='bg-white rounded-lg px-4 py-2 text-[#9A3B3B] t' onClick={playAudioDashboard}>Panggil Joko</button>
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-start justify-start mt-10 mx-4'>
                <Link to='/materii' className='bg-[#433A30] px-16 py-2 text-white rounded-lg'>Selanjutnya</Link>
              </div>
            </div>
            <div className="col-span-1 flex flex-col items-center justify-center mb-44">
              <div className="border-yellow-700 border-2 rounded-xl drop-shadow-xl w-80 flex items-center justify-center">
                <img className="w-52" alt="" src={Welcome} />
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
     {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
          <div className="z-50 bg-white w-60 h-80 rounded-lg">
            <div className='flex flex-col items-end mt-2 mr-3'>
              <svg className="cursor-pointer w-4 h-4 text-gray-800 dark:text-white" onClick={closeModal} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </div>
            <div className='flex flex-col items-center mt-5 text-center'>
              <p className="text-xl font-bold mb-4">Aksara na</p>
              <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer'>
                <div className='text-white text-3xl p-2'>
                  <p className='text-6xl'>ꦲ</p>
                  <p className='mt-6'>ha</p>
                </div>
              </div>
              <button className='bg-[#9A3B3B] px-4 py-2 mt-8 text-white rounded-lg'>Panggil Joko</button>
            </div>
          </div>
        </div>
      )}
      {showModalNa && (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
          <div className="z-50 bg-white w-60 h-80 rounded-lg">
            <div className='flex flex-col items-end mt-2 mr-3'>
              <svg className="cursor-pointer w-4 h-4 text-gray-800 dark:text-white" onClick={closeModalNa} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </div>
            <div className='flex flex-col items-center mt-5 text-center'>
              <p className="text-xl font-bold mb-4">Aksara na</p>
              <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer'>
                <div className='text-white text-3xl p-2'>
                  <p className='text-6xl'>ꦤ</p>
                  <p className='mt-6'>na</p>
                </div>
              </div>
              <button className='bg-[#9A3B3B] px-4 py-2 mt-8 text-white rounded-lg'>Panggil Joko</button>
            </div>
          </div>
        </div>
      )}
      {showModalCa && (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
          <div className="z-50 bg-white w-60 h-80 rounded-lg">
            <div className='flex flex-col items-end mt-2 mr-3'>
              <svg className="cursor-pointer w-4 h-4 text-gray-800 dark:text-white" onClick={closeModalCa} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </div>
            <div className='flex flex-col items-center mt-5 text-center'>
              <p className="text-xl font-bold mb-4">Aksara ca</p>
              <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer'>
                <div className='text-white text-3xl p-2'>
                  <p className='text-6xl'>ꦕ</p>
                  <p className='mt-6'>ca</p>
                </div>
              </div>
              <button className='bg-[#9A3B3B] px-4 py-2 mt-8 text-white rounded-lg'>Panggil Joko</button>
            </div>
          </div>
        </div>
      )}
      {showModalRa && (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
          <div className="z-50 bg-white w-60 h-80 rounded-lg">
            <div className='flex flex-col items-end mt-2 mr-3'>
              <svg className="cursor-pointer w-4 h-4 text-gray-800 dark:text-white" onClick={closeModalRa} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </div>
            <div className='flex flex-col items-center mt-5 text-center'>
              <p className="text-xl font-bold mb-4">Aksara ra</p>
              <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer'>
                <div className='text-white text-3xl p-2'>
                  <p className='text-6xl'>ꦫ</p>
                  <p className='mt-6'>ra</p>
                </div>
              </div>
              <button className='bg-[#9A3B3B] px-4 py-2 mt-8 text-white rounded-lg'>Panggil Joko</button>
            </div>
          </div>
        </div>
      )}
      {showModalKa && (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
          <div className="z-50 bg-white w-60 h-80 rounded-lg">
            <div className='flex flex-col items-end mt-2 mr-3'>
              <svg className="cursor-pointer w-4 h-4 text-gray-800 dark:text-white" onClick={closeModalKa} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </div>
            <div className='flex flex-col items-center mt-5 text-center'>
              <p className="text-xl font-bold mb-4">Aksara ka</p>
              <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer'>
                <div className='text-white text-3xl p-2'>
                  <p className='text-6xl'>ꦏ</p>
                  <p className='mt-6'>ka</p>
                </div>
              </div>
              <button className='bg-[#9A3B3B] px-4 py-2 mt-8 text-white rounded-lg'>Panggil Joko</button>
            </div>
          </div>
        </div>
      )}
      {showModalDa && (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
          <div className="z-50 bg-white w-60 h-80 rounded-lg">
            <div className='flex flex-col items-end mt-2 mr-3'>
              <svg className="cursor-pointer w-4 h-4 text-gray-800 dark:text-white" onClick={closeModalDa} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </div>
            <div className='flex flex-col items-center mt-5 text-center'>
              <p className="text-xl font-bold mb-4">Aksara da</p>
              <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer'>
                <div className='text-white text-3xl p-2'>
                  <p className='text-6xl'>ꦢ</p>
                  <p className='mt-6'>da</p>
                </div>
              </div>
              <button className='bg-[#9A3B3B] px-4 py-2 mt-8 text-white rounded-lg'>Panggil Joko</button>
            </div>
          </div>
        </div>
      )}
      {showModalTa && (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
          <div className="z-50 bg-white w-60 h-80 rounded-lg">
            <div className='flex flex-col items-end mt-2 mr-3'>
              <svg className="cursor-pointer w-4 h-4 text-gray-800 dark:text-white" onClick={closeModalTa} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </div>
            <div className='flex flex-col items-center mt-5 text-center'>
              <p className="text-xl font-bold mb-4">Aksara ta</p>
              <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer'>
                <div className='text-white text-3xl p-2'>
                  <p className='text-6xl'>ꦠ</p>
                  <p className='mt-6'>ta</p>
                </div>
              </div>
              <button className='bg-[#9A3B3B] px-4 py-2 mt-8 text-white rounded-lg'>Panggil Joko</button>
            </div>
          </div>
        </div>
      )}
      {showModalSa && (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
          <div className="z-50 bg-white w-60 h-80 rounded-lg">
            <div className='flex flex-col items-end mt-2 mr-3'>
              <svg className="cursor-pointer w-4 h-4 text-gray-800 dark:text-white" onClick={closeModalSa} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </div>
            <div className='flex flex-col items-center mt-5 text-center'>
              <p className="text-xl font-bold mb-4">Aksara sa</p>
              <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer'>
                <div className='text-white text-3xl p-2'>
                  <p className='text-6xl'>ꦱ</p>
                  <p className='mt-6'>sa</p>
                </div>
              </div>
              <button className='bg-[#9A3B3B] px-4 py-2 mt-8 text-white rounded-lg'>Panggil Joko</button>
            </div>
          </div>
        </div>
      )}
      {showModalWa && (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
          <div className="z-50 bg-white w-60 h-80 rounded-lg">
            <div className='flex flex-col items-end mt-2 mr-3'>
              <svg className="cursor-pointer w-4 h-4 text-gray-800 dark:text-white" onClick={closeModalWa} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </div>
            <div className='flex flex-col items-center mt-5 text-center'>
              <p className="text-xl font-bold mb-4">Aksara wa</p>
              <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer'>
                <div className='text-white text-3xl p-2'>
                  <p className='text-6xl'>ꦮ</p>
                  <p className='mt-6'>wa</p>
                </div>
              </div>
              <button className='bg-[#9A3B3B] px-4 py-2 mt-8 text-white rounded-lg'>Panggil Joko</button>
            </div>
          </div>
        </div>
      )}
      {showModalLa && (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
          <div className="z-50 bg-white w-60 h-80 rounded-lg">
            <div className='flex flex-col items-end mt-2 mr-3'>
              <svg className="cursor-pointer w-4 h-4 text-gray-800 dark:text-white" onClick={closeModalLa} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </div>
            <div className='flex flex-col items-center mt-5 text-center'>
              <p className="text-xl font-bold mb-4">Aksara la</p>
              <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer'>
                <div className='text-white text-3xl p-2'>
                  <p className='text-6xl'>ꦭ</p>
                  <p className='mt-6'>la</p>
                </div>
              </div>
              <button className='bg-[#9A3B3B] px-4 py-2 mt-8 text-white rounded-lg'>Panggil Joko</button>
            </div>
          </div>
        </div>
      )}
      {showModalPa && (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
          <div className="z-50 bg-white w-60 h-80 rounded-lg">
            <div className='flex flex-col items-end mt-2 mr-3'>
              <svg className="cursor-pointer w-4 h-4 text-gray-800 dark:text-white" onClick={closeModalPa} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </div>
            <div className='flex flex-col items-center mt-5 text-center'>
              <p className="text-xl font-bold mb-4">Aksara pa</p>
              <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer'>
                <div className='text-white text-3xl p-2'>
                  <p className='text-6xl'>ꦥ</p>
                  <p className='mt-6'>pa</p>
                </div>
              </div>
              <button className='bg-[#9A3B3B] px-4 py-2 mt-8 text-white rounded-lg'>Panggil Joko</button>
            </div>
          </div>
        </div>
      )}
      {showModalDha && (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
          <div className="z-50 bg-white w-60 h-80 rounded-lg">
            <div className='flex flex-col items-end mt-2 mr-3'>
              <svg className="cursor-pointer w-4 h-4 text-gray-800 dark:text-white" onClick={closeModalDha} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </div>
            <div className='flex flex-col items-center mt-5 text-center'>
              <p className="text-xl font-bold mb-4">Aksara dha</p>
              <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer'>
                <div className='text-white text-3xl p-2'>
                  <p className='text-6xl'>ꦝ</p>
                  <p className='mt-6'>dha</p>
                </div>
              </div>
              <button className='bg-[#9A3B3B] px-4 py-2 mt-8 text-white rounded-lg'>Panggil Joko</button>
            </div>
          </div>
        </div>
      )}
      {showModalJa && (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
          <div className="z-50 bg-white w-60 h-80 rounded-lg">
            <div className='flex flex-col items-end mt-2 mr-3'>
              <svg className="cursor-pointer w-4 h-4 text-gray-800 dark:text-white" onClick={closeModalJa} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </div>
            <div className='flex flex-col items-center mt-5 text-center'>
              <p className="text-xl font-bold mb-4">Aksara ja</p>
              <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer'>
                <div className='text-white text-3xl p-2'>
                  <p className='text-6xl'>ꦗ</p>
                  <p className='mt-6'>ja</p>
                </div>
              </div>
              <button className='bg-[#9A3B3B] px-4 py-2 mt-8 text-white rounded-lg'>Panggil Joko</button>
            </div>
          </div>
        </div>
      )}
      {showModalYa && (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
          <div className="z-50 bg-white w-60 h-80 rounded-lg">
            <div className='flex flex-col items-end mt-2 mr-3'>
              <svg className="cursor-pointer w-4 h-4 text-gray-800 dark:text-white" onClick={closeModalYa} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </div>
            <div className='flex flex-col items-center mt-5 text-center'>
              <p className="text-xl font-bold mb-4">Aksara ya</p>
              <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer'>
                <div className='text-white text-3xl p-2'>
                  <p className='text-6xl'>ꦪ</p>
                  <p className='mt-6'>ya</p>
                </div>
              </div>
              <button className='bg-[#9A3B3B] px-4 py-2 mt-8 text-white rounded-lg'>Panggil Joko</button>
            </div>
          </div>
        </div>
      )}
      {showModalNya && (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
          <div className="z-50 bg-white w-60 h-80 rounded-lg">
            <div className='flex flex-col items-end mt-2 mr-3'>
              <svg className="cursor-pointer w-4 h-4 text-gray-800 dark:text-white" onClick={closeModalNya} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </div>
            <div className='flex flex-col items-center mt-5 text-center'>
              <p className="text-xl font-bold mb-4">Aksara nya</p>
              <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer'>
                <div className='text-white text-3xl p-2'>
                  <p className='text-6xl'>ꦚ</p>
                  <p className='mt-6'>nya</p>
                </div>
              </div>
              <button className='bg-[#9A3B3B] px-4 py-2 mt-8 text-white rounded-lg'>Panggil Joko</button>
            </div>
          </div>
        </div>
      )}
      {showModalMa && (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
          <div className="z-50 bg-white w-60 h-80 rounded-lg">
            <div className='flex flex-col items-end mt-2 mr-3'>
              <svg className="cursor-pointer w-4 h-4 text-gray-800 dark:text-white" onClick={closeModalMa} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </div>
            <div className='flex flex-col items-center mt-5 text-center'>
              <p className="text-xl font-bold mb-4">Aksara ma</p>
              <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer'>
                <div className='text-white text-3xl p-2'>
                  <p className='text-6xl'>ꦩ</p>
                  <p className='mt-6'>ma</p>
                </div>
              </div>
              <button className='bg-[#9A3B3B] px-4 py-2 mt-8 text-white rounded-lg'>Panggil Joko</button>
            </div>
          </div>
        </div>
      )}
      {showModalGa && (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
          <div className="z-50 bg-white w-60 h-80 rounded-lg">
            <div className='flex flex-col items-end mt-2 mr-3'>
              <svg className="cursor-pointer w-4 h-4 text-gray-800 dark:text-white" onClick={closeModalGa} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </div>
            <div className='flex flex-col items-center mt-5 text-center'>
              <p className="text-xl font-bold mb-4">Aksara ga</p>
              <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer'>
                <div className='text-white text-3xl p-2'>
                  <p className='text-6xl'>ꦒ</p>
                  <p className='mt-6'>ga</p>
                </div>
              </div>
              <button className='bg-[#9A3B3B] px-4 py-2 mt-8 text-white rounded-lg'>Panggil Joko</button>
            </div>
          </div>
        </div>
      )}
      {showModalBa && (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
          <div className="z-50 bg-white w-60 h-80 rounded-lg">
            <div className='flex flex-col items-end mt-2 mr-3'>
              <svg className="cursor-pointer w-4 h-4 text-gray-800 dark:text-white" onClick={closeModalBa} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </div>
            <div className='flex flex-col items-center mt-5 text-center'>
              <p className="text-xl font-bold mb-4">Aksara ba</p>
              <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer'>
                <div className='text-white text-3xl p-2'>
                  <p className='text-6xl'>ꦧ</p>
                  <p className='mt-6'>ba</p>
                </div>
              </div>
              <button className='bg-[#9A3B3B] px-4 py-2 mt-8 text-white rounded-lg'>Panggil Joko</button>
            </div>
          </div>
        </div>
      )}
      {showModalTha && (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
          <div className="z-50 bg-white w-60 h-80 rounded-lg">
            <div className='flex flex-col items-end mt-2 mr-3'>
              <svg className="cursor-pointer w-4 h-4 text-gray-800 dark:text-white" onClick={closeModalTha} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </div>
            <div className='flex flex-col items-center mt-5 text-center'>
              <p className="text-xl font-bold mb-4">Aksara tha</p>
              <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer'>
                <div className='text-white text-3xl p-2'>
                  <p className='text-6xl'>ꦛ</p>
                  <p className='mt-6'>tha</p>
                </div>
              </div>
              <button className='bg-[#9A3B3B] px-4 py-2 mt-8 text-white rounded-lg'>Panggil Joko</button>
            </div>
          </div>
        </div>
      )}
      {showModalNga && (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
          <div className="z-50 bg-white w-60 h-80 rounded-lg">
            <div className='flex flex-col items-end mt-2 mr-3'>
              <svg className="cursor-pointer w-4 h-4 text-gray-800 dark:text-white" onClick={closeModalNga} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </div>
            <div className='flex flex-col items-center mt-5 text-center'>
              <p className="text-xl font-bold mb-4">Aksara nga</p>
              <div className='bg-[#9A3B3B] rounded-xl w-24 cursor-pointer'>
                <div className='text-white text-3xl p-2'>
                  <p className='text-6xl'>ꦔ</p>
                  <p className='mt-6'>nga</p>
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
