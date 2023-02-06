
import React, { useState, useEffect } from 'react'


const styles = {
  container: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: '60px',
    background: '#333',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  }
}
export default function Footer() {
        
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
  }, []);


  return (
    <div style={styles.container} > 
      Copyright ©  {new Date().getFullYear()}  IPCA Software Solutions Private Limited {time}
    </div>
  );
}

