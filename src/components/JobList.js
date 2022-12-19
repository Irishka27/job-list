import axios from 'axios';
import { useState, useEffect } from 'react';
import iconBook from './Bookmark.jpg';
import iconLocation from './Location.jpg';
import Job from './Job/Job';

export default function JobList() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu'
      )
      .then(data => {
        setJobs(data.data);
        console.log(data.data);
      });
  }, []);

  return (
    <div>
      {jobs.map(job => {
        const dateAdv = job.updatedAt;
        const date1 = Date.now();
        const date2 = Date.parse(dateAdv);
        const date3 = (date1 - date2) / 31536000000;
        const date = Math.round(date3);
        return (
          <Job
            job={job}
            date={date}
            iconLocation={iconLocation}
            iconBook={iconBook}
          />
        );
      })}
    </div>
  );
}
