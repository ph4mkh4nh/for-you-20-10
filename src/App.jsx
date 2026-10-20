
import { useState } from "react";
import "./App.css";


const wishes = [
  "Chúc chị bé 20/10 vui vẻ nhaaa 💓 Hy vọng hôm nay chị sẽ có thật nhiều niềm vui, nhận được nhiều điều dễ thương và có một ngày thật nhẹ nhàng. Chị cứ vui vẻ thật nhiều nha, iu 😽.",

  "Em mong những điều chị đang cố gắng sẽ dần có kết quả thật tốt, những dự định của chị đều thuận lợi và chị sẽ luôn có thời gian làm những điều mình thích. Nếu có ngày nào mệt mỏi thì chị cũng nhớ nghỉ ngơi một chút nha, không cần lúc nào cũng phải cố gắng hết sức đâu.",

  "Mong chị bé sẽ luôn gặp được những người chân thành, được yêu thương theo cách chị xứng đáng và có thật nhiều ngày mà chị cảm thấy mọi chuyện đều thật tốt đẹp. Em không biết chúc gì hơn nữa, chỉ mong chị lúc nào cũng vui vẻ, bình an và luôn là chính mình nha. 20/10 vui vẻ nha chị bé 💖",
];


function FloatingParticles() {
  return (
    <div className="particle-field" aria-hidden="true">
      {Array.from({ length: 22 }, (_, i) => (
        <span
          key={i}
          className={`particle particle-${i % 4}`}
          style={{
            "--x": `${(i * 43 + 7) % 100}%`,
            "--y": `${(i * 29 + 11) % 100}%`,
            "--delay": `${(i % 8) * -1.3}s`,
            "--duration": `${8 + (i % 6) * 2}s`,
            "--drift": `${i % 2 === 0 ? 1 : -1}${15 + (i % 4) * 8}px`,
          }}
        />
      ))}
    </div>
  );
}

function HeartButton({ onClick }) {
  return (
    <button
      className="heart-button"
      type="button"
      onClick={onClick}
      aria-label="Chạm vào trái tim để mở lá thư"
    >
      <span className="heart-orbit heart-orbit-one" />
      <span className="heart-orbit heart-orbit-two" />
      <span className="heart-aura" />

      <svg
        className="hero-heart"
        viewBox="0 0 120 110"
        role="img"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="heartGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffe4f0" />
            <stop offset="48%" stopColor="#f5a9cf" />
            <stop offset="100%" stopColor="#bd5b9b" />
          </linearGradient>
          <linearGradient id="heartShine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity=".85" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          className="heart-shape"
          d="M60 101 C51 91 10 63 10 34 C10 15 24 5 40 5 C49 5 56 10 60 19 C65 10 72 5 82 5 C98 5 110 17 110 34 C110 63 69 91 60 101Z"
          fill="url(#heartGradient)"
        />
        <path
          d="M24 31 C25 18 37 14 46 21"
          fill="none"
          stroke="url(#heartShine)"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>

      <span className="heart-sparkle sparkle-one">✦</span>
      <span className="heart-sparkle sparkle-two">✧</span>
      <span className="heart-sparkle sparkle-three">✦</span>
    </button>
  );
}

function IntroScene({ onOpen }) {
  return (
    <section className="intro-scene">
      <p className="eyebrow intro-eyebrow">
        OCTOBER 20 <span>·</span> A LITTLE SOMETHING FOR YOU
      </p>

      <h1 className="hero-title">
        Gửi Khánh Như,
        <br />
        <span>một điều nhỏ bé💞.</span>
      </h1>

      <p className="hero-description">
        Có một điều em muốn gửi bé 🙆.
        <br />
        👉💟
      </p>

      <HeartButton onClick={onOpen} />

      <p className="heart-hint">
        <span className="hint-dot" />
        Chạm nhẹ để mở món quà nhỏ
      </p>

      <p className="intro-caption">
        MADE WITH CARE, JUST FOR YOU
      </p>
    </section>
  );
}



function LetterScene({ onFinish, onReplay }) {
  return (
    <section className="letter-scene">
      <p className="eyebrow scene-eyebrow">
        A LETTER FROM THE HEART
      </p>

      <div className="letter-opening-stage">
        <div className="opening-envelope" aria-hidden="true">
          <div className="envelope-back" />
          <div className="envelope-flap" />
          <div className="envelope-front" />
          <span className="envelope-heart">♡</span>
        </div>

        <article className="letter-card letter-opening-card">
          <div className="letter-inner">
            <span className="letter-flower" aria-hidden="true">✿</span>

            <p className="letter-label">A WISH FOR YOU</p>

            <h2>
              Chúc mừng
              <br />
              <span>ngày 20/10, Hin🎀.</span>
            </h2>

            <div className="letter-divider" aria-hidden="true">
              <span />
              <span>♡</span>
              <span />
            </div>

            <div className="wish-content">
              {wishes.map((wish, index) => (
                <p
                  className="wish-paragraph"
                  key={index}
                  style={{ "--line": index }}
                >
                  {wish}
                </p>
              ))}
            </div>

            <p className="letter-closing">
              Cứ luôn là KN theo cách chị thích nhé.
            </p>

            <div className="letter-signature">
              <span>Một lời chúc nhỏ,</span>
              <strong>Từ một người luôn nghiện chị 😻</strong>
            </div>

            <span className="letter-bottom-flower" aria-hidden="true">
              ✿
            </span>
          </div>
        </article>
      </div>

      <button className="primary-button" type="button" onClick={onFinish}>
        <span>Và còn một điều nhỏ nữa</span>
        <span aria-hidden="true">→</span>
      </button>

      <button className="quiet-button" type="button" onClick={onReplay}>
        Đọc lại từ đầu
      </button>
    </section>
  );
}



function BloomScene({ onReplay }) {
  return (
    <section className="bloom-scene">
      <div className="bloom-halo" aria-hidden="true" />

      <div className="bloom-flower" aria-hidden="true">
        {Array.from({ length: 8 }, (_, i) => (
          <span
            className="bloom-petal"
            key={i}
            style={{ "--petal-index": i }}
          />
        ))}
        <span className="bloom-center" />
        <span className="bloom-stem" />
        <span className="bloom-leaf bloom-leaf-left" />
        <span className="bloom-leaf bloom-leaf-right" />
      </div>

      <p className="eyebrow final-eyebrow">A LITTLE WISH FOR YOU</p>

      <h2 className="final-title">
        Mong chị luôn
        <br />
        <span>rực rỡ theo cách riêng.</span>
      </h2>

      <p className="final-message">
        Không cần ngày nào cũng thật đặc biệt.
        <br />
        Chỉ mong bé luôn tìm thấy điều đáng yêu
        <br className="desktop-break" />
        trong những ngày bình thường nhất.
      </p>

      <span className="final-heart" aria-hidden="true">💗💖💓💝</span>
      <p className="final-signature">Hy vọng sau này được gọi chị là "Em Bé của em 💌" .</p>

      <button className="primary-button replay-button" onClick={onReplay} type="button">
        <span>Trở về từ đầu</span>
        <span aria-hidden="true">↺</span>
      </button>
    </section>
  );
}

function App() {
  const [scene, setScene] = useState("intro");

  function openLetter() {
    setScene("opening");

    window.setTimeout(() => {
      setScene("letter");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 850);
  }

  function replay() {
    setScene("intro");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className={`page page--${scene}`}>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="ambient ambient-three" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <FloatingParticles />

      <header className="top-note">
        <span className="top-note-line" />
        <span>A LITTLE NOTE, JUST FOR YOU</span>
        <span className="top-note-line" />
      </header>

      {scene === "intro" && <IntroScene onOpen={openLetter} />}

      {scene === "opening" && (
        <section className="opening-scene" aria-live="polite">
          <div className="opening-heart" aria-hidden="true">♥</div>
          <p>Đang mở một điều dành riêng cho bé...</p>
        </section>
      )}

      {scene === "letter" && (
        <LetterScene onFinish={() => setScene("bloom")} onReplay={replay} />
      )}

      {scene === "bloom" && <BloomScene onReplay={replay} />}

      <footer className="page-footer">
        <span>20 · 10</span>
        <span className="footer-heart">♥</span>
        <span>A LITTLE MOMENT TO KEEP</span>
      </footer>
    </main>
  );
}

export default App;
