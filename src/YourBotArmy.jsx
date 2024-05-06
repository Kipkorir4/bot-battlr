import React, { useState, useEffect } from 'react';
import BotCard from './BotCard';

function YourBotArmy() {
  const [army, setArmy] = useState([]);

  useEffect(() => {
    // fetch ();
  }, []);

  return (
    <div className="your-bot-army">
      {army.map(bot => (
        <BotCard bot={bot} key={bot.id} />
      ))}
    </div>
  );
}

export default YourBotArmy;
