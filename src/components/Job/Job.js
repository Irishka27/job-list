import s from './Job.module.css';

export default function Job({ job, iconLocation, iconBook, date, detailed }) {


  return (
    <div className={s.wrapper} key={job.id}>
      <div className={s.photo}>
        <img className={s.photos} src={job.pictures[2]} alt="photo" />
      </div>
      <div className={s.content}>
        <a className={s.link} onClick={detailed}>
          <h3 className={s.title}>{job.title}</h3>
        </a>
        <p className={s.department}>
          Department name <span className={s.dot}></span>
          {job.name}
        </p>
        <div className={s.address}>
          <img className={s.icon} src={iconLocation} alt="icon-location" />
          <p>{job.address}</p>
        </div>
      </div>
      <div className={s.date}>
        <img src={iconBook} className={s.book} alt="icon-book" />
        <p>Posted {date} years ago</p>
      </div>
    </div>
  );
}
