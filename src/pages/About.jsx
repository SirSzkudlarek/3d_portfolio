import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { skills, experiences } from '../constants';
import CTA from '../components/CTA';
import VerticalLine from '../components/VerticalLine';

const About = () => {
  return (
    <section className="w-full relative">
      <div className="max-container">
        <h1 className="head-text">
          Cześć! Mam na imię <span className="neon-gradient_text font-semibold drop-shadow">Damian</span>
        </h1>

        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Jestem Front-End developerem, który specjalizuje się w tworzeniu stron internetowych przy użyciu frameworku
            React. Skupiam się na poznawaniu nowych technologii, aby stale rozwijać swoje umiejętności.
          </p>
        </div>

        <div className="py-10 flex flex-col">
          <h3 className="subhead-text text-center sm:text-left">Moje umiejętności</h3>

          <div className="mt-16 flex flex-wrap justify-center sm:jus gap-12">
            {skills.map((skill) => (
              <div className="block-container w-20 h-20">
                <div className="btn-back rounded-xl" />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="py-16">
          <h3 className="subhead-text">Dotychczasowe doświadczenie</h3>
          <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p>
              Pracowałem przy paru projektach, które pozwoliły mi zdobyć doświadczenie w pracy zespołowej, a także
              nauczyć się nowych technologii.
            </p>
          </div>

          <div className="mt-12 flex">
            <VerticalTimeline>
              {experiences.map((experience) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                  iconStyle={{ background: experience.iconBg }}
                  contentStyle={{
                    borderBottom: '8px',
                    borderStyle: 'solid',
                    borderBottomColor: experience.iconBg,
                    boxShadow: 'none',
                  }}
                >
                  <div>
                    <h3 className="text-black text-xl font-poppins font-semibold">{experience.title}</h3>
                    <p className="text-black-500 font-medium font-base" style={{ margin: 0 }}>
                      {experience.company_name}
                    </p>
                  </div>
                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                      <li key={`experience-point-${index}`} className="text-black-500/50 font-normal pl-1 text-sm">
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>

        <hr className="border-neon_blue-300" />

        <CTA />
      </div>
      <VerticalLine position_x={'left-[10%]'} />
      <VerticalLine position_x={'right-[10%]'} />
    </section>
  );
};

export default About;
