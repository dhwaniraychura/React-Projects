import React, { useState, useEffect } from "react";
import design from '../assets/Image/Counter/Design_Title.png';

function CounterSection() {
  const [time, setTime] = useState({
    hours: 10,
    minutes: 0,
    seconds: 10
  });

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prev => {
                let { hours, minutes, seconds } = prev;

                if (hours === 0 && minutes === 0 && seconds === 0) {
                    clearInterval(timer);
                    return prev;
                }

                if (seconds > 0) {
                    return { ...prev, seconds: seconds - 1 };
                } else if (minutes > 0) {
                    return { hours, minutes: minutes - 1, seconds: 59 };
                } else if (hours > 0) {
                    return { hours: hours - 1, minutes: 59, seconds: 59 };
                }

                return prev;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

  return (
    <div className="Counter_section d-flex justify-content-center align-items-center flex-column">
      <h3 className="display-5">COMING OUT IN</h3>
      <img src={design} alt="design" className="mt-3"/>
          <h2 className="timer-wrapper mt-4">
              <div className="time-block mx-5">
                  <span className="time-value ">
                      {time.hours.toString().padStart(2, "0")}
                  </span>
                  <span className="time-label fs-4 mt-3">Hours</span>
              </div>

              <div className="time-block mx-5">
                  <span className="time-value ">
                      {time.minutes.toString().padStart(2, "0")}
                  </span>
                  <span className="time-label fs-4 mt-3">Minutes</span>
              </div>

              <div className="time-block mx-5">
                  <span className="time-value">
                      {time.seconds.toString().padStart(2, "0")}
                  </span>
                  <span className="time-label fs-4 mt-3">Seconds</span>
              </div>
          </h2>

    </div>
  );
}

export default CounterSection;
