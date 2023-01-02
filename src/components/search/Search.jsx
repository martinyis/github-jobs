import HeaderForm from './HeaderForm';
import Jobs from './Jobs';
import JobType from './JobType';
import { jobs } from '../../data/jobs-list.js';
import { useState } from 'react';
import { useEffect } from 'react';
const Search = () => {
  const [value, setValue] = useState('');
  const [sortOptions, setSortOption] = useState([]);
  const searchValue = (text) => {
    setValue(text);
  };
  const getSortValues = (option) => {
    setSortOption(option);
  };
  //filter jobs
  const filteredJobs = jobs.filter((job) => {
    return job.jobTitle.toLowerCase().includes(value.toLowerCase());
  });
  const sortedJobs =
    sortOptions[1] === 'both'
      ? filteredJobs
      : filteredJobs.filter((job) => job.option === sortOptions[1]);
  const finalFilter =
    sortOptions[0] === 'All'
      ? sortedJobs
      : sortedJobs.filter((job) => {
          return job.place.toLowerCase().includes(sortOptions[0].toLowerCase());
        });
  return (
    <div className="search">
      <div className="search__container">
        <h1>Github Jobs</h1>
        <HeaderForm searchValue={searchValue} />
        <div className="showsearch__container">
          <JobType getOption={getSortValues} />
          <Jobs finalFilter={finalFilter} filteredJobs={filteredJobs} />
        </div>
      </div>
    </div>
  );
};

export default Search;
