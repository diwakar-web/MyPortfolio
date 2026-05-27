import './MarqueeTape.css';

const MarqueeTape = ({ reverse = false }) => {
  const text = "• WEB DESIGN • UI/UX • DEVELOPMENT • LOGO DESIGN ";
  const repeatedText = text.repeat(5);

  return (
    <div className="marquee-cross-container">
      {/* Back Tape */}
      <div className={`marquee-container back-tape`}>
        <div className="marquee-tape">
          <div className="marquee-content">
            <span>{repeatedText}</span>
            <span>{repeatedText}</span>
          </div>
        </div>
      </div>
      
      {/* Front Tape */}
      <div className={`marquee-container front-tape reverse`}>
        <div className="marquee-tape">
          <div className="marquee-content">
            <span>{repeatedText}</span>
            <span>{repeatedText}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeTape;
