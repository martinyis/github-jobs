import { useEffect } from 'react';
import { useState } from 'react';
import { jobs } from '../../data/jobs-list.js';
const JobType = (props) => {
  const { getOption } = props;
  const [city, setCity] = useState('');
  const [partTime, setPartTime] = useState(false);
  const [options, setOptions] = useState([]);
  useEffect(() => {
    setOptions([city, partTime ? 'both' : 'Full-time']);
  }, [city, partTime]);
  let cities = [];
  jobs.forEach((job) => {
    cities.push(job.place);
  });
  const uniqueCities = [...new Set(cities)];
  return (
    <div className="jobType">
      <div className="jobType__location">
        <h2 className="jobType__title">LOCATION</h2>
        <select
          onChange={(e) => {
            setCity(e.target.value);
          }}
          className="jobType__select"
        >
          <option value="All">All</option>
          {uniqueCities.map((city, index) => {
            return (
              <option key={index} value={city}>
                {city}
              </option>
            );
          })}
        </select>
      </div>
      <div className="jobType__enrollment">
        <h2 className="jobType__title">Enrollment Status</h2>
        <form
          onChange={(e) => {
            partTime ? setPartTime(false) : setPartTime(true);
          }}
          className="jobType__form"
          action=""
        >
          <div className="jobType__enrollment-option">
            <label htmlFor="part-time">Part-time</label>
            <input
              type="checkbox"
              id="part-time"
              name="option"
              value="part-time"
            />
          </div>
          {/* <div className="jobType__enrollment-option">
            <label htmlFor="full-time">Full-time</label>
            <input
              type="checkbox"
              id="full-time"
              name="option"
              value="full-time"
            ></input>
          </div> */}
        </form>
      </div>
      <div className="jobType__button">
        <button
          onClick={() => {
            getOption(options);
          }}
          className="jobType__btn"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default JobType;
