import '../../static/home/SensorDisplay.css'

const SensorDisplay = () => {


    return (
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
                        <div className='pollute-thing'>
                            <div className='icon'>
                                <img></img>
                                <h2>NO3</h2>
                            </div>
                            <h1>20.0µg/m³</h1>
                        </div>
                        <div className='pollute-thing'>
                            <div className='icon'>
                                <img></img>
                                <h2>O3</h2>
                            </div>
                            <h1>20.0µg/m³</h1>
                        </div>
                        <div className='pollute-thing'>
                            <div className='icon'>
                                <img></img>
                                <h2>CO</h2>
                            </div>
                            <h1>20.0mg/m³</h1>
                        </div>
                        <div className='pollute-thing'>
                            <div className='icon'>
                                <img></img>
                                <h2>PM2.5</h2>
                            </div>
                            <h1>20.0µg/m³</h1>
                        </div>
                        <div className='pollute-thing'>
                            <div className='icon'>
                                <img></img>
                                <h2>PM10</h2>
                            </div>
                            <h1>20.0µg/m³</h1>
                        </div>
                    </div>
                </div>
                <div className='temp-hum'>
                    <div className='temp'>
                            <div className='icon'>
                                <img></img>
                                <h2>Temperature</h2>
                            </div>
                            <h1>26.5°C</h1>
                    </div>
                    <div className='hum'>
                            <div className='icon'>
                                <img></img>
                                <h2>Humidity</h2>
                            </div>
                            <h1>89%</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SensorDisplay;