import React from "react";
import "../styles/pages_styles/About.css";

const About = () => {
  return (
    <div>
      <h1>Hey There!</h1>
      <p>Meet the team...</p>
      <div className="main-about">
        <div class="card">
          <div class="card-border-top"></div>
          <div class="img">
            <img
              src="https://sheida-nabavi.uconn.edu/wp-content/uploads/sites/2657/2019/01/shapeimage_2-e1594238177194.png"
              alt="Nabavi"
            />
          </div>
          <span> Sheida Nabavi</span>
          <p class="job">
            {" "}
            <b>Principal Investigator</b>
            <br></br>
            <br></br>
            Dr. Nabavi is an Associate Professor in department of Computer
            Science and Engineering at the University of Connecticut (UConn),
            joining Fall 2015. Her research interest is on developing novel
            computational methods for analyzing genomic data and biomedical
            images by employing advanced statistical machine learning and
            signal/image processing techniques.
          </p>
          <button>
            <a href="https://sheida-nabavi.uconn.edu/"> Click </a>
          </button>
        </div>
        <div class="card">
          <div class="card-border-top"></div>
          <div class="img">
            <img
              src="https://sheida-nabavi.uconn.edu/wp-content/uploads/sites/2657/2023/03/Image-from-iOS-1-copy-300x400.jpg"
              alt="Samson"
            />
          </div>
          <span> Samson Weiner</span>
          <p class="job">
            {" "}
            <b>PhD Candidate</b>
            <br></br>
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum. Donec in efficitur leo. Integer nec
            consequat orci. Quisque egestas egestas felis quis facilisis.
            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor
            eget felis porttitor volutpat. Vivamus magna justo, lacinia eget
            consectetur sed, convallis at tellus. Donec sollicitudin molestie
            malesuada. Sed porttitor lectus nibh
          </p>
          <button>
            <a href="https://www.linkedin.com/in/samson-weiner-092862264/">
              {" "}
              Click{" "}
            </a>
          </button>
        </div>
        <div class="card">
          <div class="card-border-top"></div>
          <div class="img">
            <img src="./images/profile_pictures/hari_pic.png" alt="Nabavi" />
          </div>
          <span> Hari Patchigolla</span>
          <p class="job">
            {" "}
            <b>Undergraduate Student</b>
            <br></br>
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum. Donec in efficitur leo. Integer nec
            consequat orci. Quisque egestas egestas felis quis facilisis.
            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor
            eget felis porttitor volutpat. Vivamus magna justo, lacinia eget
            consectetur sed, convallis at tellus. Donec sollicitudin molestie
            malesuada. Sed porttitor lectus nibh
          </p>
          <button>
            <a href="https://www.linkedin.com/in/hari-patchigolla/">Click</a>
          </button>
        </div>
        <div class="card">
          <div class="card-border-top"></div>
          <div class="img">
            <img
              src="https://sheida-nabavi.uconn.edu/wp-content/uploads/sites/2657/2022/08/Lana2-349x400.png"
              alt="Nabavi"
            />
          </div>
          <span> Lana Kareem</span>
          <p class="job">
            {" "}
            <b>Undergraduate Student</b>
            <br></br>
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum. Donec in efficitur leo. Integer nec
            consequat orci. Quisque egestas egestas felis quis facilisis.
            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor
            eget felis porttitor volutpat. Vivamus magna justo, lacinia eget
            consectetur sed, convallis at tellus. Donec sollicitudin molestie
            malesuada. Sed porttitor lectus nibh
          </p>
          <button>
            {" "}
            <a href="https://www.linkedin.com/in/lana-kareem/">Click</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
