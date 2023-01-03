import HeaderForm from './HeaderForm';
import Jobs from './Jobs';
import JobType from './JobType';
import { jobs } from '../../data/jobs-list.js';
import { useState } from 'react';
import { useEffect } from 'react';
const Search = (props) => {
  const { getInfo } = props;
  const [value, setValue] = useState('');
  const [sortOptions, setSortOption] = useState(['', '']);
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
  // const sortedJobs =
  //   sortOptions[1] === 'both'
  //     ? filteredJobs
  //     : filteredJobs.filter((job) => job.option === sortOptions[1]);
  // const finalFilter =
  //   sortOptions[0] === 'All'
  //     ? sortedJobs
  //     : sortedJobs.filter((job) => {
  //         return job.place.toLowerCase().includes(sortOptions[0].toLowerCase());
  //       });
  const finalFilter =
    sortOptions[1] === 'both' && sortOptions[0] === 'All'
      ? filteredJobs
      : sortOptions[0] === '' && sortOptions[1] === ''
      ? filteredJobs
      : filteredJobs.filter((job) =>
          sortOptions[1] === 'both'
            ? job.place.toLowerCase().includes(sortOptions[0].toLowerCase())
            : job.place.toLowerCase().includes(sortOptions[0].toLowerCase()) &&
              job.option === sortOptions[1]
        );
  return (
    <div className="search">
      <div className="search__container">
        <h1>Github Jobs</h1>
        <HeaderForm searchValue={searchValue} />
        <div className="showsearch__container">
          <JobType getOption={getSortValues} />
          <Jobs
            getInfo={getInfo}
            finalFilter={finalFilter}
            filteredJobs={filteredJobs}
            value={sortOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
