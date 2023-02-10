import React, { useState } from "react";

const WelcomeMessage = () => {
  const [showMessage, setShowMessage] = useState(true);

  setTimeout(() => {
    setShowMessage(false);
  }, 10);

  return (
    showMessage && (
      <div>
        <h1>Welcome!</h1>
      </div>
    )
  );
};

export default WelcomeMessage;
