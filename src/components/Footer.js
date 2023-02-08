
import React, { useState, useEffect } from 'react'



export default function Footer() {
        
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
  }, []);


  return (
    <footer>
    <div  > 
      Copyright ©  {new Date().getFullYear()}  IPCA Software Solutions Private Limited {time}
    </div>
    </footer>
  );
}

