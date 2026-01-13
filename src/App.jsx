import { useEffect, useState } from "react";
import FighterJet from "./FighterJet";
import Helicopter from "./Helicopter";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaDiscord } from "react-icons/fa";

import "./style.css";

export default function App() {
  const [jetActive, setJetActive] = useState(false);
  const [heliActive, setHeliActive] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const h = window.innerHeight;

      setJetActive(y > h * 0.6);
      setHeliActive(y > h * 1.6);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="hero">
        {/* XR SVG BACKGROUND (SUBTLE, ABOVE VIDEO) */}
       
        {/* VIDEO */}
        <video
          className="hero-video"
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* CONTENT */}
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Hi, I’m <span>Raj Agrahari</span>
            </h1>
            <h3>Unity & XR Developer</h3>

            <p>
              I build immersive AR/VR simulations, serious games and interactive
              training systems with real-world impact.
            </p>

            <div className="actions">
              <button>View Tech</button>
              <button className="outline">Hire Me</button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="about-section">
        <h2>About Me</h2>
        <p>
          XR-focused developer specializing in Unity-based simulations, AR/VR
          training systems, and real-time 3D applications for defense,
          education, and industrial use-cases.
        </p>
      </section>

      {/* ================= FIGHTER JET ================= */}
      <section className="split">
        <div className="split-left">
          <FighterJet active={jetActive} />
        </div>

        <div className="split-right">
          <h2>Fighter Jet Simulation</h2>
          <p>
            High-fidelity real-time jet visualization using Three.js and GLTF
            models with neon wireframe aesthetics, optimized for XR pipelines.
          </p>
        </div>
      </section>

      {/* ================= HELICOPTER ================= */}
      <section className="split reverse">
        <div className="split-left">
          <h2>Helicopter Systems</h2>
          <p>
            Rotary-wing visualization built for XR-based training simulations,
            procedural maintenance walkthroughs, and real-time interaction.
          </p>
        </div>

        <div className="split-right">
          <Helicopter active={heliActive} />
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="skills-section">
        <h2 className="skills-title">Core Skills</h2>

        <div className="skills-grid">
          {[
            "Unity 3D",
            "AR / VR / MR",
            "Three.js",
            "XR Simulations",
            "C#",
            "WebGL",
            "Blender",
            "Web3",
          ].map((skill) => (
            <div key={skill} className="skill-btn">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="projects-section">
        <h2>Selected Projects</h2>

        <div className="projects-grid">
          <div className="project-card">
            <h3>VR Aircraft Maintenance Simulator</h3>
            <p>
              Interactive VR training system with task assessment, hardware
              interaction, and real-time feedback.
            </p>
            <span>Unity · VR · Training</span>
          </div>

          <div className="project-card">
            <h3>XR Training Assessment</h3>
            <p>
              Performance tracking system measuring accuracy, time, and errors
              in XR environments.
            </p>
            <span>Unity · XR · Analytics</span>
          </div>

          <div className="project-card">
            <h3>Web3 Unity Integration</h3>
            <p>
              Wallet connect, NFT ownership, and token-based progression inside
              Unity WebGL.
            </p>
            <span>Unity · Web3 · WebGL</span>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact-section">
        <h2>Let’s Build Something Immersive</h2>
        <p>Open for freelance, contracts and XR collaborations.</p>

        <div className="contact-actions">
          <a href="mailto:yourmail@gmail.com" className="icon-btn email">
            <HiOutlineMail className="icon" />
            <span>Email Me</span>
          </a>

          <a
            href="https://www.linkedin.com/in/raj-agrahari-72450621b/"
            target="_blank"
            rel="noreferrer"
            className="icon-btn linkedin"
          >
            <FaLinkedinIn className="icon" />
            <span>LinkedIn</span>
          </a>
         <a
  href="https://discord.gg/cheMEzxA"
  target="_blank"
  rel="noreferrer"
  className="icon-btn discord"
>
  <FaDiscord className="icon" />
  <span>Discord</span>
</a>


        </div>
      </section>
    </>
  );
}
