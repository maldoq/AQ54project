import '../../static/home/SensorDisplay.css';
import React, { useEffect, useState } from 'react';

const SensorDisplay = () => {
  const [latestData1, setLatestData1] = useState(null);
  const [latestData2, setLatestData2] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/latest-data1')
      .then(response => response.json())
      .then(data => setLatestData1(data))
      .catch(error => console.error('Error fetching latest data1:', error));

    fetch('http://localhost:3000/latest-data2')
      .then(response => response.json())
      .then(data => setLatestData2(data))
      .catch(error => console.error('Error fetching latest data2:', error));
  }, []);

  const formatValue = (value) => {
    return value !== null ? value.toFixed(2) : '0';
  };

  return (
    <div>
      <div className='containsense'>
        <div className='titlesense'>
          <h2>Capteur SMART188</h2>
        </div>
        <div className='bodysense'>
          <div className='pollute-address'>
            <p className='address'>
              Little city, Rue D27, Riviéra 1, Cocody, Abidjan, Côte d’Ivoire
            </p>
            <div className='pollute'>
              {latestData1 ? (
                <>
                  <div className='pollute-thing'>
                    <div className='icon'>
                      <img src='/assets/images/air-pollution.png' alt='NO2 Icon' />
                      <h2>NO2</h2>
                    </div>
                    <h1>{formatValue(latestData1.NO2)} µg/m³</h1>
                  </div>
                  <div className='pollute-thing'>
                    <div className='icon'>
                      <img src='/assets/images/ozone.png' alt='O3 Icon' />
                      <h2>O3</h2>
                    </div>
                    <h1>{formatValue(latestData1.O3)} µg/m³</h1>
                  </div>
                  <div className='pollute-thing'>
                    <div className='icon'>
                      <img src='/assets/images/pollution.png' alt='CO Icon' />
                      <h2>CO</h2>
                    </div>
                    <h1>{formatValue(latestData1.CO)} mg/m³</h1>
                  </div>
                  <div className='pollute-thing'>
                    <div className='icon'>
                      <img src='/assets/images/dust.png' alt='PM2.5 Icon' />
                      <h2>PM2.5</h2>
                    </div>
                    <h1>{formatValue(latestData1.PM2_5)} µg/m³</h1>
                  </div>
                  <div className='pollute-thing'>
                    <div className='icon'>
                      <img src='/assets/images/dust.png' alt='PM10 Icon' />
                      <h2>PM10</h2>
                    </div>
                    <h1>{formatValue(latestData1.PM10)} µg/m³</h1>
                  </div>
                </>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
          <div className='temp-hum'>
            <div className='temp'>
              <div className='icon'>
                <img src='/assets/images/thermometer.png' alt='Temperature Icon' />
                <h2>Temperature</h2>
              </div>
              <h1>{latestData1 ? formatValue(latestData1.T) : 'Loading...'}°C</h1>
            </div>
            <div className='hum'>
              <div className='icon'>
                <img src='/assets/images/weather.png' alt='Humidity Icon' />
                <h2>Humidity</h2>
              </div>
              <h1>{latestData1 ? formatValue(latestData1.RH) : 'Loading...'}%</h1>
            </div>
          </div>
        </div>
      </div>
      
      <div className='containsense'>
        <div className='titlesense'>
          <h2>Capteur SMART189</h2>
        </div>
        <div className='bodysense'>
          <div className='pollute-address'>
            <p className='address'>
              Little city, Rue D27, Riviéra 1, Cocody, Abidjan, Côte d’Ivoire
            </p>
            <div className='pollute'>
              {latestData2 ? (
                <>
                  <div className='pollute-thing'>
                    <div className='icon'>
                      <img src='/assets/images/air-pollution.png' alt='NO2 Icon' />
                      <h2>NO2</h2>
                    </div>
                    <h1>{formatValue(latestData2.NO2)} µg/m³</h1>
                  </div>
                  <div className='pollute-thing'>
                    <div className='icon'>
                      <img src='/assets/images/ozone.png' alt='O3 Icon' />
                      <h2>O3</h2>
                    </div>
                    <h1>{formatValue(latestData2.O3)} µg/m³</h1>
                  </div>
                  <div className='pollute-thing'>
                    <div className='icon'>
                      <img src='/assets/images/pollution.png' alt='CO Icon' />
                      <h2>CO</h2>
                    </div>
                    <h1>{formatValue(latestData2.CO)} mg/m³</h1>
                  </div>
                  <div className='pollute-thing'>
                    <div className='icon'>
                      <img src='/assets/images/dust.png' alt='PM2.5 Icon' />
                      <h2>PM2.5</h2>
                    </div>
                    <h1>{formatValue(latestData2.PM2_5)} µg/m³</h1>
                  </div>
                  <div className='pollute-thing'>
                    <div className='icon'>
                      <img src='/assets/images/dust.png' alt='PM10 Icon' />
                      <h2>PM10</h2>
                    </div>
                    <h1>{formatValue(latestData2.PM10)} µg/m³</h1>
                  </div>
                </>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
          <div className='temp-hum'>
            <div className='temp'>
              <div className='icon'>
                <img src='/assets/images/thermometer.png' alt='Temperature Icon' />
                <h2>Temperature</h2>
              </div>
              <h1>{latestData2 ? formatValue(latestData2.T) : 'Loading...'}°C</h1>
            </div>
            <div className='hum'>
              <div className='icon'>
                <img src='/assets/images/weather.png' alt='Humidity Icon' />
                <h2>Humidity</h2>
              </div>
              <h1>{latestData2 ? formatValue(latestData2.RH) : 'Loading...'}%</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SensorDisplay;
