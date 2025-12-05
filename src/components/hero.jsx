// Home.jsx  →  Faqat HERO qismini quyidagicha almashtiring

import React, { useState, useEffect } from "react";

// Agar haqiqiy rasm bo‘lsa shu yerda import qiling
// import heroBg from "./hero-bg.jpg";   // binoning orqa fon rasmi
// import portrait from "./portrait.jpg"; // odamning rasmi

export default function Hero() {
  // 2 daqiqalik (120 sekund) jonli taymer
  const [seconds, setSeconds] = useState(120);

  useEffect(() => {
    if (seconds <= 0) return;
    const timer = setInterval(() => {
      setSeconds(s => s - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [seconds]);

  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  return (
    <div className="landing">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800;900&display=swap');

        * { box-sizing: border-box; margin:0; padding:0; }
        .landing { 
          min-height: 100vh; 
          background: white; 
          font-family: 'Poppins', sans-serif; 
          padding: 20px 16px 40px;
          display:flex;
          flex-direction:column;
          align-items:center;
          max-width: 100%;
          max-width: 480px;
          margin: 0 auto;
        }

        /* YANGI HERO – 100% rasmga o‘xshash */
        .hero-new {
          width: 100%;
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.25);
          margin-bottom: 30px;
        }

        .hero-bg {
          width: 100%;
          height: 520px;
          object-fit: cover;
          display: block;
        }

        /* Agar haqiqiy rasm bo‘lmasa – placeholder gradient + bino */
        .hero-placeholder {
          width: 100%;
          height: 520px;
          background: linear-gradient(180deg, #e8f5e9 0%, #ffffff 70%);
          position: relative;
        }

        .portrait {
          position: absolute;
          top: 90px;
          left: 50%;
          transform: translateX(-50%);
          width: 260px;
          height: 340px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0,0,0,0.4);
          border: 6px solid white;
        }

        .portrait img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-text {
          position: absolute;
          top: 20px;
          left: 0;
          right: 0;
          text-align: center;
          color: #000;
          padding: 0 20px;
          font-weight: 900;
          text-transform: uppercase;
          line-height: 1.15;
          letter-spacing: 0.8px;
        }

        .hero-text h1 {
          font-size: 22px;
          margin-bottom: 8px;
          text-shadow: 0 2px 10px rgba(0,0,0,0.15);
        }

        .green {
          color: #0f9d4a;
          font-size: 24px;
        }

        .btn-large {
          position: absolute;
          bottom: 70px; /* taymer joyi uchun */
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(180deg, #0e6b3a, #0f9d4a);
          color: white;
          padding: 18px 32px;
          border-radius: 22px;
          font-size: 17px;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 15px 40px rgba(15,157,74,0.5);
          text-decoration: none;
          white-space: nowrap;
        }

        /* Taymer – tugma ostida */
        .timer {
          position: absolute;
          bottom: 16px;
          left: 50%;
          transform: translateX(-50%);
          background: white;
          color: #000;
          font-size: 48px;
          font-weight: 900;
          padding: 8px 28px;
          border-radius: 50px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .timer-circle {
          width: 48px;
          height: 48px;
          background: #0f9d4a;
          border-radius: 50%;
          display: grid;
          place-items: center;
          color: white;
          font-size: 24px;
        }

        .timer-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #0f9d4a;
        }
      `}</style>

      {/* === YANGI HERO === */}
      <section className="hero-new">
        {/* Agar haqiqiy rasm bo‘lsa shunday qiling */}
        {/* <img src={heroBg} alt="background" className="hero-bg" /> */}

        {/* Hozircha placeholder + bino */}
        <div className="hero-placeholder">
          {/* Portret – haqiqiy rasmni qo‘ying */}
          <div className="portrait">
            {/* <img src={portrait} alt="portret" /> */}
            {/* Placeholder o‘rniga shu SVG qoldirdim */}
            <svg viewBox="0 0 0 260 340" fill="none">
              <rect width="260" height="340" rx="20" fill="#f8f8f8"/>
              <ellipse cx="130" cy="290" rx="90" ry="30" fill="#ddd"/>
              <rect x="50 y="100" width="160" height="200" rx="12" fill="url(#suitGrad)"/>
              <defs>
                <linearGradient id="suitGrad">
                  <stop offset="0%" stopColor="#fffff0"/>
                  <stop offset="100%" stopColor="#f0f0f0"/>
                </linearGradient>
              </defs>
              <circle cx="130" cy="80" r="58" fill="#fad3b8"/>
              <rect x="120" y="130" width="20" height="60" rx="6" fill="#0e6b3a"/>
            </svg>
          </div>

          {/* Matn */}
          <div className="hero-text">
            <h1>BUXORO SHAHRI MARKAZIDAN BOSH</h1>
            <div className="green">TO‘LOVSIZ OYIGA 3.5 MLNDAN TO‘LAB</div>
            <h1>TA’MIRLANGAN XONADON OLING</h1>
          </div>

          {/* Tugma */}
          <a href="https://t.me/your_channel_link" className="btn-large">
            <svg width="26" viewBox="0 0 24 24" fill="white">
              <path d="M2 21l21-9L2 3v7l15 2-15 2z"/>
            </svg>
            TAQDIMOT KANALIGA QO‘SHILISH
          </a>

          {/* 2 daqiqalik jonli taymer */}
          <div className="timer">
            <div className="timer-circle">O</div>
            <span>{mins}:{secs}</span>
            <img src="/avatar.jpg" alt="avatar" className="timer-avatar" 
                 onError={e => e.target.style.display='none'} />
          </div>
        </div>
      </section>

      {/* Qolgan qismlar (gift, steps, bottom button) avvalgidek qoldirilaveradi */}
      {/* ... */}
    </div>
  );
}