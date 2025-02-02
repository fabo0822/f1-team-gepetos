import "../../css/style.css";

// Componente VideoSection
const VideoSection = ({ src, className }) => {
  return (
    <div className={`video-section ${className}`}>
      <video autoPlay muted loop>
        <source src={src} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  );
};

// Componente Card
const Card = () => {
  return (
    <div className="card-container">
      <div className="card">
        <img src="img/logo2.png" alt="Logo" className="logo" />
        <button className="start-button">START</button>
      </div>
    </div>
  );
};

// Componente principal App
const App = () => {
  return (
    <div>
      <div className="video-grid">
        <VideoSection src="img/Pilots2.mp4" className="video-1" />
        <VideoSection src="img/Teaser.mp4" className="video-2" />
      </div>
      <Card />
    </div>
  );
};

export default App;


  