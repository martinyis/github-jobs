import Apply from './Apply';
import { GiEarthAmerica } from 'react-icons/gi';
import { BiTimeFive } from 'react-icons/bi';
const Result = (props) => {
  const { companyName, jobTitle, option, place, posted, goBack } = props;
  return (
    <div className="result">
      <div className="result__container">
        <h1>Github Jobs</h1>
        <div className="result__overview">
          <Apply goBack={goBack} />
          <div className="overview">
            <div className="overview__name">
              <p className="overview__title">{jobTitle}</p>
              <div className="overview__enrollment">{option}</div>
            </div>
            <div className="overview__time">
              <BiTimeFive className="overview__icon" />
              <p className="overview__time-date">{posted} days ago</p>
            </div>
            <div className="overview__company">
              <div className="overview__picture">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg"
                  alt=""
                />
              </div>
              <div className="overview__company-info">
                <p className="overview__company-name">{companyName}</p>
                <div className="overview__place">
                  <GiEarthAmerica className="overview__company-icon" />
                  <p className="overview__place-name">{place}</p>
                </div>
              </div>
            </div>
            <p className="overview__about">
              Humanizing Digital Experiences® Kasisto’s Digital Experience
              Platform, KAI, is designed for financial institutions to deliver
              the industry’s most amazing Conversational AI powered intelligent
              virtual assistants to their customers. KAI is open and extensible,
              and also fluent in the language of banking and finance. From
              simple retail transactions to the complex demands of corporate
              banks and wealth management, financial institutions can deliver
              meaningful digital interactions with KAI that help build their
              digital brand. Financial institutions around the world use KAI,
              including DBS Bank, J.P. Morgan, Mastercard, Standard Chartered,
              TD Bank, and Manulife Bank among others. They chose KAI for its
              proven track record to drive business results while improving
              customer experiences. The platform is used by millions of
              consumers around the world, all the time, across multiple
              channels, in different languages, and is optimized for
              performance, scalability, security, and compliance. This position
              We are looking for a Full-Stack, client side software engineer to
              help build and integrate responsive chat interfaces, analytics
              dashboards and reporting tools. What you’ll be doing Working
              closely with clients and internal engineering, product and design
              teams to gather requirements Building and integrating front-end
              applications with CSS, HTML, Javascript, jQuery, Vue.js, Webpack,
              Handlebars.js, LESS, Backbone, Python, Django and Java Working to
              improve user experience and functionality for tools Writing
              testable code utilizing common front-end unit and BDD testing
              frameworks What you need for this position 3+ years in client-side
              web development with CSS, HTML, Javascript and jQuery Proven,
              full-stack front-end experience using Python and Django Other
              Modern Web Framework(s) experience is a plus (React, Vue, Angular,
              Ember) Experience working collaboratively to build scalable,
              modular, production software in an Agile environment Experience
              using RESTful json services Node.js and API development
              familiarity is plus D3.js is a plus What we offer: Competitive
              compensation package Ground floor opportunity within rapidly
              growing tech startup Great collaborative team environment Full
              Benefits Fun perks Location - NYC, Flatiron District We welcome
              your cover letter with a description of your previous complete
              experience and your resume. Applicants must be authorized to work
              in the US as we are unable to sponsor. Kasisto is an equal
              opportunity employer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
