// Home.jsx
import React, { useState, useEffect } from "react";
import logo from "/logo.svg";
import banner from "/banner.svg";
import brand from "/brand.png";
import button from "/button.svg";
import PromotionalCard from "./components/PromotionCard";
import TextCard from "./components/TextCard";

export default function Home() {
  const [seconds, setSeconds] = useState(120);

  useEffect(() => {
    if (seconds <= 0) return;
    const timer = setInterval(() => setSeconds(s => s - 1), 1000);
    return () => clearInterval(timer);
  }, [seconds]);

  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  return (
    <div className="landing">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800;900&family=Bebas+Neue&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }
        html, body, #root { height: 100%; background: white; }

        .landing {
          min-height: 100vh;
          font-family: 'Poppins', sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 0 40px;
          background: white;
        }

        /* Top Bar */
        .topbar {
          width: 100%;
          background: #0c2a1a;
          padding: 14px 16px;
          border-radius: 0 0 24px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .topbar img { height: 38px; object-fit: contain; }
        .topbar img:last-child { filter: brightness(0) invert(1); }

        /* Hero */
        .hero {
          width: 100%;
          padding: 20px 16px 45px;
          text-align: center;
          position: relative;
        }

        .hero h1 {
          font-family: "Bebas Neue", sans-serif;
          font-size: 32.8px;
          line-height: 1.15;
          text-transform: uppercase;
          color: #3a3434;
          margin-bottom: 20px;
        }

        .accent {
          color: #098e3c;
        }

        /* Rasm + mask + tugma */
        .hero-wrapper {
          position: relative;
          width: 100%;
          max-width: 420px;
          margin: 0 auto;
        }

        .hero-man {
          width: 98%;
          display: block;
          border-radius: 24px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.35);

          /* Pastdan shaffoflik – tugma chiroyli chiqishi uchun */
          mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
        }

        .floating-btn {
          position: absolute;
          left: 50%;
          bottom: -14%;
          transform: translateX(-50%);
          z-index: 10;
          width: 88%;
          max-width: 400px;
        }

        .floating-btn img {
          width: 100%;
          display: block;
        }

        /* Taymer */
        .timer {
          font-size: 68px;
          font-weight: 900;
          color: #000;
          text-align: center;
          text-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        /* Sovg‘a */
        .gift-img {
          width: 92%;
          max-width: 400px;
          margin: 0 auto 30px;
          display: block;
          border-radius: 20px;
          user-select: none;
        }

        /* 3 ta kartochka – bo‘sh joy yo‘q! */
        .cards {
          width: 92%;
          max-width: 400px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px; /* faqat chiroyli kichik bo‘shliq */
        }

        .cards img {
          width: 100%;
          border-radius: 20px;
          display: block;
        }

        /* Pastdagi tugma */
        .bottom-btn {
          width: 88%;
          max-width: 400px;
          margin: 40px auto 20px;
          display: block;
        }

        .bottom-btn img {
          width: 100%;
          filter: drop-shadow(0 15px 30px rgba(0,0,0,0.3));
        }

        /* Responsive */
        @media (min-width: 480px) {
          .landing {
            max-width: 420px;
            margin: 0 auto;
            border-radius: 28px;
            overflow: hidden;
            box-shadow: 0 0 50px rgba(0,0,0,0.3);
          }
          .hero h1 { font-size: 28px; }
          .accent { font-size: 31px; }
          .timer { font-size: 76px; }
        }
      `}</style>

      {/* Top Bar */}
      <header className="topbar">
        <img src={logo} alt="logo" />
        <img src={banner} alt="banner" width={180} />
        <img src={brand} alt="brand" width={75} />
      </header>

      {/* Hero */}
      <section className="hero">
        <h1 className="hero-title">
          <span className="line">BUXORO SHAHRI MARKAZIDAN BOSH</span>
          <span className="line">
            TO‘LOVSIZ <span className="accent">OYIGA 3.5 MLNDAN TO‘LAB</span>
          </span>
          <span className="line">TA’MIRLANGAN XONADON OLING</span>
        </h1>
        <style jsx>{`
                  .hero-title {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    font-family: "Bebas Neue", sans-serif;
                    color: #3a3434;
                    font-weight: 700;
                    line-height: 1.15;
                  }
                  .hero-title .line {
                    white-space: nowrap;
                    overflow-wrap: normal;
                    word-break: keep-all;
                    font-size: 27.8px;
                    margin-bottom: 0;
                  }

                  @media (max-width: 340px) {
                    .hero-title .line {
                      font-size: 22px;
                    }
                    .topbar img[alt="banner"] {
                      width: 110px !important;
                    }
                  }
                  @media (max-width: 280px) {
                    .hero-title .line {
                      font-size: 18px;
                    }
                  }
                `}</style>

        <div className="hero-wrapper">
          <img className="hero-man" src="/img.png" alt="taqdimotchi" />
          <a href="https://t.me/namozgohcity_aksiya" className="floating-btn">
            <img src={button} alt="Qo‘shilish" />
          </a>
        </div>
      </section>

      {/* Taymer */}
      <div className="timer">{mins}:{secs}</div>

      {/* Sovg‘a */}
      <PromotionalCard />

      {/* 3 ta kartochka */}
      <h3 style={{ position: "relative", transform: "translateY(-15px)" }}>
        TAQDIMOTDA QATNASHIB SIZ:
      </h3>

      <TextCard index={1} description={<>
        <b>Boshlang‘ich to‘lovsiz</b>, foiz va rasmiy ish joyisiz 65 oyga <b>bo‘lib to‘lashga xonadon</b> harid qilishingiz</>} />
      <TextCard index={2} description={"Istagingizga ko'ra tayyor ta'mirlangan yoki karobka holatida xonadonlarni tanlashingiz"} />
      <TextCard index={3} description={<>
        <b>Loyiha afzalliklari, oylik to'lovlari,
          planirovkalari haqida</b> ma'lumot olishingiz va
        "KATTA YANGI YIL" aksiyasida qatnashib
        <b>katta chegirmalarda</b> xonadon harid qilish
        imkoniga ega bo'lishingiz mumkin</>} />

      {/* Pastdagi tugma */}
      <a href="https://t.me/namozgohcity_aksiya" className="bottom-btn">
        <img src={button} alt="Qo‘shilish" />
      </a>
    </div>
  );
}