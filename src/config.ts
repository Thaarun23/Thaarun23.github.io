export const siteConfig = {
  name: "Thaarun Sivakumar",
  title: "Robotics engineer",
  description: "Portfolio website of Thaarun Sivakumar",
  accentColor: "#1d4ed8",
  social: {
    email: "thaarun23@gmail.com",
      linkedin: "https://www.linkedin.com/in/thaarun-sivakumar/",
      github: "https://github.com/Thaarun23",
  },
  aboutMe:
    "Hi! I am Thaarun Sivakumar an Aspiring Robotics engineer specializing in perception,decision making and machine learning and Robot AI.",
    skills: ["Java", "Python", "C / C++", "MySQL","ROS","ROS2","Git","Gazebo","Rviz","MuJoCo","FANUC ROBOGUIDE","PX4","QgroundControl"],
  projects: [
    {
      name: "Jerboa Inspired Hopping Robot",
      description:
        "Developed a physics-based simulation of a jerboa-inspired hopping robot in MuJoCo, featuring articulated leg mechanisms, dynamic control, and motion optimization.”",
          link: "https://github.com/Thaarun23/Jerboa_robot_simulation",
      skills: ["MuJoCo", "Python", "Solidworks","ESP32"],
    },
    {
        name: "Vision-Guided Drone on a Dynamic Landing platform",
      description:
        "“Designed and implemented a vision-guided autonomous landing system for a Parrot MiniDrone using MATLAB and Simulink, leveraging HSV filtering, optical flow, and PID control for dynamic target tracking and precision landing.”",
        link: "https://github.com/Thaarun23/Drone-Landing",
      skills: ["MATLAB", "Simulink"],
    },
    {
        name: "Anomaly Detection and Navigation",
      description:
        "Simulated a PX4-based autonomous rover in Gazebo with depth-camera SLAM using RTAB-Map and Nav2 in ROS 2, enabling real-time 3D mapping, path planning, and adaptive navigation through custom Python nodes.",
        link: "https://github.com/Thaarun23/RAS-SES-598-Project",
      skills: ["ROS2", "RTAB-MAP", "Nav2","OpenCV","PX4"],
    },
  ],
  experience: [
    {
      company: "",
          title: "Data Analyst Intern",
      dateRange: "Jan 2020 - Mar 2020",
      bullets: [
        "Developed a Food Classification model pipeline for tracking caloric intake",
        "Refined Workflow by and improved performance by 30% by incorporating better preproccessing techniques",
        "Built a MYSQL database to handle 200 customers",
      ],
    },
    {
      company: "Barrow Neurolgical institute",
      title: "Project Intern",
      dateRange: "Jun 2024 - May 2024",
      bullets: [
        "Designed a flexible pressure sensor using Velostat",
        "deployed a MYSQL database to handle the pressure sensor readings from an arduino",
        "Collaborated with clinic to incorporate the design to a pressure sensing ball",
      ],
    },
    
  ],
  education: [
    {
      school: "PSG College of technology",
      degree: "Bachelor of Engineering in Robotics and Automation",
      dateRange: "2017 - 2021",
      achievements: [
        "Focused on Industrial automation with PLCs and CNCs",
        "GPA:3.1",
        
      ],
    },
    {
      school: "Arizona State University",
      degree: "Master of Science in Robotics and Autonomous systems",
      dateRange: "2023-2025",
      achievements: [
        "Focused on Perception , Path planning and machine learning",
        "GPA:3.50",
        
      ],
    },
  ],
};
