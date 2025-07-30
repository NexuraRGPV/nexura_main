import React from 'react';
import { useState} from 'react';
import './our-project.css';
import teamlane from './web/teamlane.png';
import badboys from './web/badboys.png';
import Badboys from './web/Badboys.mp4';
import Foodbook from './web/Foodbook.mp4';
import foodbook from './web/foodbook.png';
import WeatherApp from './web/WeatherApp.mp4'; 
import weatherApp from './web/weatherApp.png';
import Animation from './UI/Animation.png';
import animation from './UI/animation.mp4';
import Animation2 from './UI/Animation2.png';
import animation2 from './UI/animation2.mp4';
import juicyCan from './UI/juicyCan.mp4';
import movieWebsite from './UI/movieWebsite.mp4';
import harryPotter from './UI/harryPotter.png';
import HarryPotter from './UI/HarryPotter.mp4';
import juicyImg from './UI/juicyImg.png';
import movieImg from './UI/movieImg.png';
import car from './3D/car.png';
import Car from './3D/Car.mp4';
import interior from './3D/interior.png';
import Interior from './3D/Interior.mp4';
import jeep from './3D/jeep.png';
import Jeep from './3D/Jeep.mp4';
import ram from './3D/ram.png';
import Ram from './3D/Ram.mp4';
import sony from './3D/sony.png';
import Sony from './3D/Sony.mp4';
import todo from './web/todo.png';
import Todo from './web/Todo.mp4';
import AerodynamicTest from './Parametric/AerodynamicTest.png';
import CrankShaft from './Parametric/CrankShaft.png';
import Deformation from './Parametric/Deformation.png';
import StressAnalysis from './Parametric/StressAnalysis.png';
 

const projectData = {
  "UI/UX Design": [
    {
      title: "Animation Gif",
      image: Animation,
      video: animation,
    },
    {
      title: "Juicy Can Flip",
      video: juicyCan,
      image: juicyImg,
      
    },
    {
      title: "Movie Website",
      video: movieWebsite,
      image: movieImg,
      
    },
    {
      title: "Harry Potter Animation",
      image: harryPotter,
      video: HarryPotter,
    },
    {
      title: "Animation 2",
      image: Animation2,
      video: animation2,
    }
  ],
  "Web Development": [
    {
      title: "Teamlane",
      link: "https://teamlane.vercel.app/home",
      image: teamlane,
    },
    {
      title: "Foodbook",
      video: Foodbook,
      image: foodbook,
    },
    {
      title: "Weather App",
      video: WeatherApp,
      image: weatherApp,
    },
    {
      title: "Todo App",
      video: Todo,
      image: todo,
    },
    {
      title: "Badboys",
      video: Badboys,
      image: badboys,
    },
    
  ],
  "3D Modelling & Animation": [
    {
      title: "Sony WF-1000XM3",
      image: sony,
      video: Sony,
    },
    {
      title: "BMW Model",
      image: car,
      video: Car,
    },
    {
      title: "Interior Design",
      image: interior,
      video: Interior,
    },
    {
      title: "Brabus GV12-900",
      image: jeep,
      video: Jeep,
    },
    {
      title: "Bhagwan Ram Model",
      image: ram,
      video: Ram,
    },
  ],
  "Parametric and Simulation": [
    {
      title: "Aerodynamic Test",
      image: AerodynamicTest,
    },
    {
      title: "4 Cylinder Crank Shaft",
      image: CrankShaft,
    },
    {
      title: "Total Deformation of Truss Member",
      image: Deformation,
    },
    {
      title: "Sress Analysis of Audi Car Bumper",
      image: StressAnalysis,
    },
  ],
};

function Projects() {
  const [activeTab, setActiveTab] = useState("UI/UX Design");
  const [videoUrl, setVideoUrl] = useState(null);

  const handleViewDetails = (project) => {
    if (project.video) {
      setVideoUrl(project.video);
    } else if (project.link) {
      window.open(project.link, "_blank");
    }
  };

  return (
    <div className="container">
      <h1 className="title">Our Projects</h1>
      <div className="tabs">
        {Object.keys(projectData).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {projectData[activeTab].map((project, idx) => (
          <div className="project-card" key={idx}>
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            ) : (
              <div className="image-placeholder">Image Placeholder</div>
            )}
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <button onClick={() => handleViewDetails(project)}>
              View Details
            </button>
          </div>
        ))}
      </div>

      {videoUrl && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setVideoUrl(null)}>
              &times;
            </span>
            {videoUrl.includes("youtube") ? (
              <iframe
                src={videoUrl}
                title="Project Video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            ) : (
              <video controls autoPlay>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
