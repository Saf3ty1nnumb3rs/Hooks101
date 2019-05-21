import React, { useState, useEffect } from 'react';
import Counter from './components/Counter';
import LightBulb from './components/LightBulb';
import Register from './components/Register';

const  App = () => {
  const initialLocationState = {
    latitude: null,
    longitude: null,
    speed: null,
  };

  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [status, setStatus] = useState(navigator.onLine);
  const [{ latitude, longitude, speed }, setLocation] = useState(initialLocationState);
  const [appVersion, setVersion] = useState(true);
  
  let mounted = true;

  useEffect(() => {
    // SUBSCRIBE
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    navigator.geolocation.getCurrentPosition(handleGeolocation);
    const watchId = navigator.geolocation.watchPosition(handleGeolocation);

    return () => {
      // This is performed during unmount and before each new render
      // UNSUBSCRIBE
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      navigator.geolocation.clearWatch(watchId);
      mounted = false;
    }
  }, []);
  const handleOnline = () => { setStatus(true) };
  const handleOffline = () => { setStatus(false) };

  const handleGeolocation = event => {
    if (mounted) {
      setLocation({
        latitude: event.coords.latitude,
        longitude: event.coords.longitude,
        speed: event.coords.speed,
      });
    }
  };

  const handleMouseMove = event => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY,
    })
  };

  const toggleApp = () => {
    setVersion(prevVersion => !prevVersion);
  };

  return (
    <div className="App">
      <div
        style={{
          display: 'block',
          marginBottom: '20px',
        }}
      >
        <button onClick={() => toggleApp()}>Switch View</button>
      </div>
      {appVersion && 
        <>
          <Counter />
          <LightBulb />
          <br />
          <h2>Mouse Position</h2>
          {JSON.stringify(mousePosition, null, 2)}
          <br />
          <div>
            <h2>Network Status</h2>
            <p>You are <strong>{status ? 'online' : 'offline'}</strong></p>
          </div>
          <br />
          <h2>Geolocation</h2>
          {(!latitude || !longitude) &&
            <p>Loading...</p>
          }
          {latitude && longitude &&
            <>
              <p>Latitude is {latitude}</p>
              <p>Longitude is {longitude}</p>
            </>
          }
          <p>Your speed is {speed ? speed : 0}</p>
        </>
      }
      {!appVersion &&
        <Register />
      }
      
    </div>
  );
}

export default App;
