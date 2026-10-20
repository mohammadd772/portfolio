/* ============================================================
   EDIT THIS FILE ONLY.  Keep the "quotes", commas and { } [ ].
   Any field you leave "" or delete is simply hidden on the site.
   Image paths: assets/projects/photo.jpg  (no spaces, exact capitalisation).
   JPG, JPEG, PNG and WebP all work.
   ============================================================ */
window.SITE = {
  name: "Mohammad Moustafa",
  title: "Mechatronics, Automation & Robotics Engineer",
  statement: "Bringing together mechanical design, electronics, control and software to solve practical engineering challenges.",
  studying: "Master ARMAC · Université Marie et Louis Pasteur",
  location: "Besançon, France",
  availability: "Open to internships, alternance and engineering opportunities",
  photo: "assets/images/profile.jpeg",        // "" hides the photo (initials are shown if the file is missing)
  email: "mohammadmoustafa300@gmail.com",
  phone: "+33602758825",
  linkedin: "https://www.linkedin.com/in/mohammad--moustafa-",
  github: "",                                  // fill in later, then set showGithub to true
  showGithub: false,                           // GitHub icon in Contact and footer is hidden for now (project GitHub links still work)

  sectionOrder: ["about","skills","experience","projects","education","volunteering","languages","documents","contact"],
  sectionTitles: {about:"About",skills:"Technical Skills",experience:"Experience",projects:"Selected Projects",education:"Education",volunteering:"Leadership & Volunteering",languages:"Languages",documents:"CV & Documents",contact:"Contact"},

  about: [
    "I am a proactive mechatronics engineer who has actively pursued hands-on engineering experience alongside academic study. From industrial maintenance and automation internships to teaching robotics, I have sought opportunities to understand real systems, not only study their theory.",
    "Currently pursuing the ARMAC master's degree in Besançon, I enjoy combining control, programming, mechanical design and experimentation. I learn independently, adapt to new environments, and value clear communication and teamwork when solving technical problems."
  ],

  // Skills: names only, grouped by category. Add or remove names freely.
  skills: [
    {category:"Industrial Automation & Control",items:["Siemens PLC / TIA Portal","Ladder Logic","HMI / WinCC Flexible","Variable Frequency Drives","Control Systems"]},
    {category:"Embedded Systems & Robotics",items:["Arduino","Raspberry Pi","ESP32","Sensors & Actuators","ROS 2","FPGA"]},
    {category:"Programming & Computer Vision",items:["Python","C++","OpenCV","Object Detection","MATLAB / Simulink","LabVIEW"]},
    {category:"Mechanical Design & Simulation",items:["SolidWorks","AutoCAD","FluidSIM",]},
    {category:"Electrical Engineering",items:["EPLAN","AutoCAD Electrical","Proteus", "TinkerCAD", "Fritzing","Electrical Schematics"]},
    {category:"Productivity",items:["Microsoft Office Suite","Technical Documentation"]}
  ],

  // Experience. type groups entries. Add photos: images:[{src:"assets/projects/site1.jpg", alt:"Control room"}]
  experience: [
    {type:"Internship",org:"Ciment de Sibline S.A.L",role:"Industrial Automation & Control Intern", place:"Sibline, Lebanon",date:"July 2026",text:"Explored the operation of large-scale cement production systems alongside control-room and maintenance teams, with exposure to industrial instrumentation, PLC/HMI systems, field wiring and electrical schematics.",highlights:["Industrial process, control, and instrumentation exposure","Electrical control schematics and field connections"],technologies:["PLC","HMI","Instrumentation"], images:[{src:"assets/projects/Sebline/s1.jpeg"}, {src:"assets/projects/Sebline/s2.jpeg"}, {src:"assets/projects/Sebline/s3.jpeg"}, {src:"assets/projects/Sebline/s4.jpeg"}, {src:"assets/projects/Sebline/s5.jpeg"}, {src:"assets/projects/Sebline/s7.jpeg"}, {src:"assets/projects/Sebline/s8.jpeg"}, {src:"assets/projects/Sebline/s9.jpeg"}, {src:"assets/projects/Sebline/s10.jpeg"}, ],link:""},
    {type:"Professional",org:"AL-JANA (NGO)",role:"Robotics & Computer Vision Trainer",place:"Lebanon",date:"Jan 2025 – Aug 2026",text:"Prepared and delivered hands-on robotics training for university-level students. Guided Arduino and Raspberry Pi projects, including Pi Camera applications and OpenCV-based object detection, while developing students' problem-solving skills.",highlights:["Prepared lessons, exercises and technical learning resources","Led workshops and supervised student projects"],technologies:["Arduino","Raspberry Pi","ESP32","Python","OpenCV", "Fritzing", "TinkerCad"],images:[{src:"assets/projects/ALJANA/t1.jpeg"}, {src:"assets/projects/ALJANA/t2.jpeg"}, {src:"assets/projects/ALJANA/t3.jpeg"},{src:"assets/projects/ALJANA/t4.jpeg"}, {src:"assets/projects/ALJANA/t5.jpeg"}, {src:"assets/projects/ALJANA/t6.jpeg"}, {src:"assets/projects/ALJANA/t7.jpeg"}, {src:"assets/projects/ALJANA/t8.jpeg"}, {src:"assets/projects/ALJANA/t9.jpeg"}, {src:"assets/projects/ALJANA/t10.jpeg"}, {src:"assets/projects/ALJANA/t11.jpeg"}, {src:"assets/projects/ALJANA/t12.jpeg"}, {src:"assets/projects/ALJANA/t16.jpeg"}, {src:"assets/projects/ALJANA/t13.jpeg"}, {src:"assets/projects/ALJANA/t14.jpeg"}, {src:"assets/projects/ALJANA/t15.jpeg"},  {src:"assets/projects/ALJANA/t19.png"}, {src:"assets/projects/ALJANA/t20.png"},  {src:"assets/projects/ALJANA/t17.jpeg"}, {src:"assets/projects/ALJANA/t18.jpeg"}, {src:"assets/projects/ALJANA/t21.jpg"}, {src:"assets/projects/ALJANA/t22.jpg"},],},
    {type:"Internship",org:"Matrix EA Academy",role:"Automation & Control Engineering Intern",place:"Khaldeh, Lebanon",date:"Apr – Jun 2026",text:"Reverse-engineering of industrial automation systems involving PLCs, HMIs, drives, sensors, hydraulics and pneumatics. Preparation of mechanical, hydraulic, electric, control, and pneumatic technical documentation using EPLAN, Fluid Sim, Solidworks, WinccFlexible, and TIA Portal. ",technologies:["TIA Portal", "WinccFlexible","EPLAN","FluidSIM","SolidWorks"],images:[{src:"assets/projects/Matrix/m10.jpeg"}, {src:"assets/projects/Matrix/m1.jpeg"}, {src:"assets/projects/Matrix/m2.jpeg"}, {src:"assets/projects/Matrix/m5.jpeg"}, {src:"assets/projects/Matrix/m12.jpeg"}, {src:"assets/projects/Matrix/m4.jpeg"}, {src:"assets/projects/Matrix/m6.jpeg"}, {src:"assets/projects/Matrix/m7.jpeg"}, {src:"assets/projects/Matrix/m8.jpeg"}, {src:"assets/projects/Matrix/m9.jpeg"},{src:"assets/projects/Matrix/m11.jpeg"},{src:"assets/projects/Matrix/m3.jpeg"}, ]},
    {type:"Internship",org:"UNRWA–KFW",role:"Assistant Engineering Intern",place:"Beirut, Lebanon",date:"Jul – Sep 2024",text:"Participated in maintenance activities involving generators, vehicles and solar installations, with hands-on exposure to photovoltaic systems.",images:[]},
    {type:"Technical",org:"SuperPlast",role:"Industrial Maintenance Technician",place:"Jadra, Lebanon",date:"2022 – 2024",text:"Supported maintenance operations on plastic injection-molding production lines, including mold changes and fault diagnosis.",images:[{src:"assets/projects/Superplast/s1.jpeg"}, {src:"assets/projects/Superplast/s0.jpeg"}, {src:"assets/projects/Superplast/s2.jpeg"}, {src:"assets/projects/Superplast/s3.jpeg"}, {src:"assets/projects/Superplast/s4.jpeg"}, {src:"assets/projects/Superplast/s5.jpeg"}, {src:"assets/projects/Superplast/s6.jpeg"}, {src:"assets/projects/Superplast/s7.jpeg"}, {src:"assets/projects/Superplast/s8.jpeg"}, {src:"assets/projects/Superplast/s9.jpeg"}, {src:"assets/projects/Superplast/s10.jpeg"}, {src:"assets/projects/Superplast/s11.jpeg"}, {src:"assets/projects/Superplast/s12.jpeg"}, {src:"assets/projects/Superplast/s13.jpeg"}, {src:"assets/projects/Superplast/s14.jpeg"}, {src:"assets/projects/Superplast/s15.jpeg"}, {src:"assets/projects/Superplast/s17.jpeg"},]}
  ],

  // Projects: write ONLY what you have. Empty or missing fields never appear.
  // Optional fields: image, gallery, youtube, github, report, role, problem, objective, design,
  // implementation, control, result, learned.
  // youtube: any normal link, youtu.be link or Shorts link.
  projects: [
    {title:"Self-Balancing Electric Unicycle",year:"2026",category:"Control & Mechatronics",summary:"A self-balancing unicycle prototype concept combining inertial sensing, a brushless motor and PID feedback control.",technologies:["PID Control","IMU","BLDC","Mechatronic Design"],role:"Graduation project: mechatronic system design and control development.",objective:"Investigate a compact balancing system by sensing orientation and applying corrective motor action.",design:"Integrating an inertial measurement unit with feedback control and motor actuation.",result:"Designed and developed a non-rideable experimental prototype to investigate the balancing principle.",image:"assets/images/unicycle cover img.jpeg",gallery:[{src:"assets/projects/UNICYCLE/1.jpeg"}, {src:"assets/projects/UNICYCLE/2.jpeg"},{src:"assets/projects/UNICYCLE/3.jpeg"}, {src:"assets/projects/UNICYCLE/4.jpeg"}, {src:"assets/projects/UNICYCLE/5.jpeg"}, {src:"assets/projects/UNICYCLE/6.jpeg"},],youtube:"https://youtube.com/shorts/uLfKuMlZaww",github:"",report:""},
    {title:"Industrial Chemical Mixing Control",year:"2026",category:"Industrial Automation",summary:"A PLC-based automation project for an industrial chemical mixing sequence.",technologies:["Siemens S7-1200","TIA Portal","Ladder Logic","HMI"],role:"PLC ladder logic development.",objective:"Simulate and supervise an automated mixing sequence using industrial inputs and outputs.",design:"Programmed Siemens PLC ladder logic, data blocks, timers, counters, etc...", image: "assets/images/plc cover img.png", gallery:[{src:"assets/projects/PLC/b2.png"}, {src:"assets/projects/PLC/b3.png"}, {src:"assets/projects/PLC/b4.png"}, {src:"assets/projects/PLC/b5.png"}, {src:"assets/projects/PLC/b6.jpg"}, {src:"assets/projects/PLC/b7.jpg"},], youtube: "https://youtu.be/KN4mc20YedU"},
    {title:"Remote Controlled Quadcopter",year:"2026",category:"Embedded Systems",summary:"Designed and Created a quadcopter and its remote control using Arduino controller, IMU sensor, and Transceiver module.",technologies:["3D Printing","Wireless Communication","PID Control","Programming",],role:"PLC ladder logic development.", image: "assets/images/drone cover img.jpeg", gallery:[{src:"assets/projects/drone/d1.jpeg"}, {src:"assets/projects/drone/d2.jpeg"}, {src:"assets/projects/drone/d3.jpeg"},], youtube: ""},
    {title:"Building Management System",year:"2026",category:"Building Management System",summary:" Building Management System (BMS) design for a luxury private villa.Designed riser diagrams for HVAC, Electrical, Fire alarm and protection, Lighting, CCTV, Water supply ad drainage, Mechanical and Electrical control rooms ",technologies:["ModBus","BACnet/IP","Schneider SmartX AS-P","Smart Control", "Safety Integration", "Energy Efficiency" ,], role:"Draw all riser diagrams based on the present architectural drawings, Choice of controllers, expansion Modules, wires, creation of specifications sheet " , image: "assets/images/bms cover img.jpg", gallery:[{src:"assets/projects/bms/07.jpeg"}, {src:"assets/projects/bms/1.jpg"}, {src:"assets/projects/bms/2.jpg"}, {src:"assets/projects/bms/3.jpg"}, {src:"assets/projects/bms/4.jpg"}, {src:"assets/projects/bms/5.jpg"}, {src:"assets/projects/bms/6.jpg"}], youtube: ""},
    {title:"Smart Home Architecture with ROS 2",year:"2025",category:"Robotics & Software",summary:"ROS 2 software architecture for coordinated smart-home devices and autonomous control functions.",technologies:["ROS 2","Python","Distributed Systems"],role:"Software architecture and ROS 2 node development.", image:"assets/images/ros cover img.png", gallery:[{src:"assets/projects/ros/r00.png"}, {src:"assets/projects/ros/r0.png"}, {src:"assets/projects/ros/r1.png"}, {src:"assets/projects/ros/r2.png"}, {src:"assets/projects/ros/r3.png"}, {src:"assets/projects/ros/r4.png"},], youtube:"https://www.youtube.com/watch?v=VnLHIIOWu-Y", },
   // {title:"Automated Coffee Making Machine",year:"2025",category:"Robotics & Software",summary:"ROS 2 software architecture for coordinated smart-home devices and autonomous control functions.",technologies:["ROS 2","Python","Distributed Systems"],role:"Software architecture and ROS 2 node development.", image:"assets/images/ros cover img.png", gallery:[{src:"assets/projects/ros/r00.png"}, {src:"assets/projects/ros/r0.png"}, {src:"assets/projects/ros/r1.png"}, {src:"assets/projects/ros/r2.png"}, {src:"assets/projects/ros/r3.png"}, {src:"assets/projects/ros/r4.png"},], youtube:"https://www.youtube.com/watch?v=VnLHIIOWu-Y", },
    {title:"Smart Greenhouse Environmental Control System",year:"2024",category:"Microcontrollers",summary:"This project is a cost-effective, automated smart greenhouse system using dual UART-communicating Arduino boards to monitor environmental sensors and control ventilation, shading, and irrigation actuators.",technologies:["ARDUINO IDE","Proteus","Serial communication","Instrumentation"],role:"Choice of components, design, program, and simulation", image:"assets/images/proteus cover img.jpg", youtube:"https://youtu.be/TeprFdEOQRY?is=v8kkQcpeGwIb8jly"}
   // {title:"Fire Fighting Robot",year:"2023",category:"Robotics & Software",summary:"ROS 2 software architecture for coordinated smart-home devices and autonomous control functions.",technologies:["ROS 2","Python","Distributed Systems"],role:"Software architecture and ROS 2 node development.", image:"assets/images/ros cover img.png", gallery:[{src:"assets/projects/ros/r00.png"}, {src:"assets/projects/ros/r0.png"}, {src:"assets/projects/ros/r1.png"}, {src:"assets/projects/ros/r2.png"}, {src:"assets/projects/ros/r3.png"}, {src:"assets/projects/ros/r4.png"},], youtube:"https://www.youtube.com/watch?v=VnLHIIOWu-Y", },

  ],

  education: [
    {degree:"Master ARMAC",field:"Automation, Robotics, Mechatronics and Control",school:"Université Marie et Louis Pasteur",place:"Besançon, France",date:"2026 – 2028",current:true,areas:["Robotics","Control","Computer Vision","Mechatronics"]},
    {degree:"Bachelor of Engineering in Mechatronics Engineering",field:"ABET-accredited programme",school:"Rafik Hariri University",place:"Lebanon",date:"2022 – 2026",areas:["Automation","Robotics","Embedded Systems","Mechanical Design"]}
  ],

  volunteering: [
    {org:"AL-JANA (NGO)",role:"Event Coordinator & Workshop Facilitator",date:"2022 – 2025",text:"Prepared learning materials and supported workshop planning, logistics, reporting and participant coordination.",skills:["Leadership","Teaching","Communication","Teamwork"],images:[],link:""}
  ],

  languages: [{name:"Arabic",level:"Native"},{name:"English",level:"C1"},{name:"French",level:"B1 · Studying toward B2"}],

  // Documents open in a new tab (preview) and have a separate download icon.
  // Add certificates by copying a line, e.g. {label:"Certificate X",file:"assets/documents/cert-x.pdf",kind:"Certificate",language:"English"}
  documents: [
    {label:"English CV",file:"assets/documents/CV-Mohammad Moustafa- English.pdf",kind:"CV",language:"English"},
    {label:"CV en français",file:"assets/documents/CV-Mohammad Moustafa- Francais.pdf",kind:"CV",language:"Français"},
    {label:"English Cover Letter",file:"assets/documents/Cover letter- Mohammad Moustafa- English.pdf",kind:"Cover letter",language:"English"},
    {label:"Lettre de motivation",file:"assets/documents/Lettre Motivation- Mohammad Moustafa- Francais.pdf",kind:"Lettre",language:"Français"}
  ],

  // Optional extra sections: add the id to sectionOrder, then define it here.
  custom: {
    // certifications:{title:"Certifications",items:[{title:"Name",meta:"Issuer, Year",text:"Details",link:"https://..."}]}
  }
};
