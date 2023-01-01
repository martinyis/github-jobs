import { BsBriefcase } from 'react-icons/bs';

const HeaderForm = () => {
  return (
    <div className="headerForm">
      <form action="" className="headerForm__search">
        <input
          placeholder="Title, companies, expertise or benefits"
          type="text"
          className="headerForm__input"
        />
        <BsBriefcase className="headerForm__icon" />
        <button className="headerForm__button">Search</button>
      </form>
    </div>
  );
};

export default HeaderForm;
