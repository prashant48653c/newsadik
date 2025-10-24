// components/CircleText.js

const CircleText = ({ text, radius = 0 }) => {
  const characters = text.split('');
  const angleStep = 360 / characters.length;

  return (
    <div>
      
      {characters.map((char, index) => {
        const angle = index * angleStep;
        const x = radius + radius * Math.cos((angle - 0) * (Math.PI / 180));
        const y = radius + radius * Math.sin((angle - 0) * (Math.PI / 180));

        return (
          <span
            key={index}
            style={{
              position: 'absolute',
              transform: `translate(0%, 0%) rotate(${angle}deg)`,
              transformOrigin: `${radius}px ${radius}px`,
              left: `${x}px`,
              top: `${y}px`,
            }}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
};

export default CircleText;
