import { Link } from 'react-router-dom';
import { projects } from '../constants';
import { arrow } from '../assets/icons';
import CTA from '../components/CTA';
import VerticalLine from '../components/VerticalLine';

const Projects = () => {
  return (
    <section className="w-full relative">
      <div className="max-container">
        <h1 className="head-text">
          Moje <span className="neon-gradient_text font-semibold drop-shadow">Projekty</span>
        </h1>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Poniżej znajdziesz projekt komercyjny wykonany podczas stażu w firmie Yuush oraz kilka z moich własnych
            projektów. Każdy z nich jest inny i pokazuje moje umiejętności w różnych technologiach.
          </p>
        </div>

        <div className="flex flex-wrap my-20 gap-16">
          {projects.map((project) => (
            <div className="lg:w-[400px] w-full" key={project.name}>
              <div className="block-container w-12 h-12">
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img src={project.iconUrl} alt="Project Icon" className="w-1/2 h-1/2 object-contain" />
                </div>
              </div>
              <div className="mt-5 flex flex-col">
                <h4 className="text-2xl font-poppins font-semibold">{project.name}</h4>
                <p className="mt-2 text-slate-800 font-medium">{project.tech}</p>
                <p className="mt-2 text-slate-500">{project.description}</p>
                <div className="mt-5 flex items-center gap-2 font-poppins">
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600"
                  >
                    Zobacz projekt
                  </Link>
                  <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr className="border-slate-200" />

        <CTA />
      </div>

      <VerticalLine position_x={'left-[10%]'} />
      <VerticalLine position_x={'right-[10%]'} />
    </section>
  );
};

export default Projects;
