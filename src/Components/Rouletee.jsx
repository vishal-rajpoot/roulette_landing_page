import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import wheel from "../assets/wheel.jpg";
import "../App.css";

const Roulette = () => {
  const [spins, setSpins] = useState(0);
  const [courtesy, setCourtesy] = useState("YOUR COURTESY IS: ");
  const [isSpinning, setIsSpinning] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    const audioFile = new Audio("/sound/ruleta.mp3");
    setAudio(audioFile);
  }, []);

  const handleSpin = () => {
    if (spins < 1 && !isSpinning) {
      setIsSpinning(true);
      const rand = Math.random() * 7200;
      calculate(rand);
      setSpins(spins + 1);
      if (audio) {
        audio.loop = true;
        audio.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      } else {
        console.error("Audio not loaded correctly");
      }
    }
  };

  const displayPrize = (prize) => {
    setCourtesy(`YOUR COURTESY IS: ${prize}`);
  };

  const calculate = (rand) => {
    const value = (rand % 360) / 360;
    const ruleta = document.getElementById("ruleta");
    ruleta.style.transition = "transform 10s ease-out";
    ruleta.style.transform = `rotate(${rand}deg)`;

    // Add ball animation
    const ball = document.querySelector(".ball");
    const ballFinalAngle = (rand + 1440) % 360; // Ensure the ball completes at least 4 full spins
    ball.style.transition = `transform 10s ease-out`;
    ball.style.animation = `ballSpin 10s ease-out forwards`;

    setTimeout(() => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }

      let prize = "NO PRIZE";
      switch (true) {
        case value > 0 && value <= 0.125:
          prize = "2 stars";
          break;
        case value > 0.125 && value <= 0.25:
          prize = "5 Pieces";
          break;
        case value > 0.25 && value <= 0.375:
          prize = "2 Hearts";
          break;
        case value > 0.375 && value <= 0.5:
          prize = "2 Nigiri";
          break;
        case value > 0.5 && value <= 0.625:
          prize = "Handroll Mini";
          break;
        case value > 0.625 && value <= 0.75:
          prize = "NO COURTESIES THIS TIME";
          break;
        case value > 0.75 && value <= 0.875:
          prize = "A 2L Coca Cola";
          break;
        case value > 0.875 && value <= 1:
          prize = "2 Enjoy";
          break;
      }

      displayPrize(prize);
      setIsSpinning(false);

      // Stop ball animation
      ball.style.animation = "ballStop 0s forwards";

      // Fire SweetAlert when the wheel rotation stops
      Swal.fire({
        html: `
          <div style="text-align: center; 
                background: rgba(255, 255, 255, 0.1); 
                border-radius: 10px; 
                backdrop-filter: blur(10px); 
                padding: 20px; 
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                <p style="color: #0d76ad;">Cheers !</p>
                <h2 style="color: #fff;">In the spotlight of Victory</h2>
                <h3 style="color: #0d76ad;">Ensure your initial deposit of upto ₹1,05,000</h3>
          </div>
        `,
        background: "rgba(0, 0, 0)",
        confirmButtonColor: "#0d76ad",
        confirmButtonText: "GET MY PRIZES",
        allowOutsideClick: false,
      }).then((result) => {
        if (result.isConfirmed) {
          setSpins(0);
          setCourtesy("YOUR COURTESY IS: ");
          window.location.href = "https://winexch.com";
        }
      });
    }, 10000);
  };

  return (
    <div
      className="relative"
      style={{ width: "400px", height: "400px", margin: "auto" }}
    >
      <div id="ruleta" style={{ position: "relative" }}>
        <img
          src={wheel}
          alt="wheel"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <button onClick={handleSpin} className="btn">
        Play Now
      </button>
      <div className="outer-cont">
        <div className="ball"></div>
      </div>
    </div>
  );
};

export default Roulette;
