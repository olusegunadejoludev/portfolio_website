import React from 'react';
import "./Techstack.css";
import { TechstackList } from '../../utilies/TechstackList.js';
import { Zoom } from 'react-awesome-reveal';

const Techstack = () => {
  return (
    <>
      <div className="section-container container-techstack" id="stack">
          <div className="techstack-title">
            <h2 className="col-12 mt-3 mb-1">Technologies Stack</h2>
          </div>
      
      <Zoom duration={1000}>
      <div className="row">
        {TechstackList.map((tech) => (
            <div className="col-md-3" key={tech._id}>
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex justify-content-center">
                    <div className="align-self-center">
                      <tech.icon className="tech-icon" />
                    </div>
                    <div className="media-body text-center">
                      <h5 className="mt-0">{tech.name}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      </Zoom>
      </div>
    </>
  );
};

export default Techstack;
