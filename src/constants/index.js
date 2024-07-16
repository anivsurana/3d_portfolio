import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    sabf,
    uta,
    capitalone,
    fidelity,
    shopify,
    intothematrix,
    filesystem,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Software Engineer",
      icon: mobile,
    },
    {
      title: "Mobile App Developer",
      icon: backend,
    },
    {
      title: "Video Editor",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer Extern",
      company_name: "Capital One",
      icon: capitalone,
      iconBg: "#E6DEDD",
      date: "Jul 2023",
      points: [
        "Selected as 1 of 50 students in a competitive pool of 250 applicants to be a part of the HSI Immersion Program.",
        "Collaborated closely with Financial Analyst, and fellow Software Engineer externs to analyze data and build a credit card product tailored to University students.",
        "Led the technical development of a modern, user-friendly informative webpage, integrating quantitative solutions on the financial disadvantages and benefits of creating different types of credit cards.",
        "Acted as the bridge between the technical and business aspects of the project, contributing to both the data analysis and the presentation of the minimum viable credit card product to professional Capital One associates, representatives, and stakeholders.",
      ],
    },
    {
      title: "Tutor",
      company_name: "University of Texas at Arlington",
      icon: uta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Jan 2024",
      points: [
        "Conducted assessments to determine students' strengths and weaknesses, and monitored their progress throughout the course.",
        "Developed individualized learning plans for each student, based on their assessment results and learning goals.",
        "Assessed an average of 20 students per month, tracking their progress and adjusting learning plans as needed to ensure they were meeting course objectives.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Strings Attached Bungee Fitness",
      icon: sabf,
      iconBg: "#E6DEDD",
      date: "Jun 2023 - Jan 2024",
      points: [
        "Spearheaded the complete revamp of the Strings Attached Bungee Fitness website using HTML, CSS, and JavaScript, resulting in a visually appealing and modernized online presence.",
        "Collaborated with cross-functional teams to gather requirements, develop new features, and implement A/B testing strategies, resulting in a 25% increase in conversions and a 30% improvement in overall website performance.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "University of Texas at Arlington",
      icon: uta,
      iconBg: "#E6DEDD",
      date: "Feb 2024 - Present",
      points: [
        "Developing and maintaining departmental websites, enhancing user experience with HTML, CSS, and JavaScript, resulting in a 15% increase in user engagement.",
        "Analyzing and audit website performance, accessibility, and web analytics using SiteImprove to ensure all web pages function properly and comply with appropriate legal policies, guidelines, and standards, achieving a 200% improvement in accessibility compliance.",
        "Implementing responsive web design principles to ensure seamless user experiences across various devices and screen sizes.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Fidelity Investments",
      icon: fidelity,
      iconBg: "#E6DEDD",
      date: "June 2024 - Present",
      points: [
        "Redesigning an internal representative-facing application using Angular and RxJS, enhancing performance and usability, which led to a 60\% increase in productivity for representatives.",
        "Collaborated with cross-functional teams to improve application components, enhancing maintainability and scalability, resulting in a 25% reduction in future development time and facilitating quicker updates for end-users.",
        "Implemented state management solutions with RxJS, streamlining data flow and improving application responsiveness, enabling representatives to access and process client information more efficiently.",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Aniv proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Aniv does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Aniv optimized our website, our traffic increased by 50%. We can't thank him enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Into The Matrix",
      description:
        "Application designed to load 3D models to demonstrate different types of transformations thatare applied to 3D objects, including scaling, translation, and rotation. The transformations are shown in real-time based on user input.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "opengl",
          color: "green-text-gradient",
        },
        // {
        //   name: "",
        //   color: "pink-text-gradient",
        // },
      ],
      image: intothematrix,
      source_code_link: "https://github.com/anivsurana/IntoTheMatrix",
    },
    {
      name: "File System",
      description:
        "Developed an index-allocated file system with a single-level directory structure, supporting file operations,and a maximum file size of 2ˆ20 bytes. The project includes a command-line interface for seamless interaction with the file system.",
      tags: [
        {
          name: "c",
          color: "blue-text-gradient",
        },
        {
          name: "c++",
          color: "green-text-gradient",
        },
        {
          name: "makefile",
          color: "pink-text-gradient",
        },
      ],
      image: filesystem,
      source_code_link: "https://github.com/anivsurana/Filesystem",
    },
    {
      name: "Memoir Mate",
      description:
        "An Android application developed as a family and friend's travel diary. Similar to a social media application, this app allows users to post images and videos, with captions to share with friends and family. Posts' visibility are restricted to those within the same group.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "xml",
          color: "green-text-gradient",
        },
        {
          name: "androidstudio",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/anivsurana",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };