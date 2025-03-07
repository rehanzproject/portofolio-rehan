
const workExperience = [
  {
    title: "Website Quality Control",
    company: "CV. Indosoft",
    duration: "February 2024 – Present",
    responsibilities: [
      "Conducted thorough testing of web applications to identify bugs, usability issues, and performance bottlenecks, ensuring a 99% defect-free release rate.",
      "Implemented automated testing scripts using tools like Selenium and Cypress, reducing manual testing time by 40%.",
      "Collaborated with development teams to prioritize and resolve critical issues, improving overall product quality and user satisfaction.",
      "Performed cross-browser and cross-device compatibility testing, ensuring seamless user experiences across all platforms.",
      "Documented and reported detailed test cases and results, providing actionable insights for continuous improvement."
    ]
  },
  {
    title: "Freelance Web Developer",
    company: "Projects co id",
    duration: "February 2024 – October 2024",
    responsibilities: [
      "Created and launched over 5 web applications using React.js, Vue.js, Node.js, Express.js, PHP, and Laravel, achieving a 95% client satisfaction rate and consistently meeting project deadlines.",
      "Integrated third-party APIs and enhanced functionality, boosting application usability by 30%.",
      "Optimized application performance, reducing load times by 25%, which increased engagement and lowered bounce rates.",
      "Coordinated a team of 3 developers to successfully deliver high-priority projects on schedule, earning client recognition for exceptional leadership."
    ]
  },
  {
    title: "Internship Full-stack Developer",
    company: "Institut ASIA Malang",
    duration: "August 2023 – February 2024",
    responsibilities: [
      "Developed and deployed web and mobile applications using React.js and React Native, increasing project delivery efficiency by 35%.",
      "Engineered RESTful APIs using .NET Framework and optimized MySQL database queries, enhancing data processing reliability by 40%.",
      "Diagnosed and resolved system bugs, reducing error reports by 20% and improving system stability.",
      "Accelerated user engagement by 25% through front-end performance enhancements, such as faster load times and improved resource management."
    ]
  }
];

function WorkExperienceCard() {
  return (
    <>
      <div className="rounded-md pb-[80px]">
        {workExperience.map((job) => (
          <div
            key={job.company}
            className="hover:bg-zinc-400/5 py-4 md:px-2"
          >
            <div className="flex justify-between md:justify-normal">
              <h1 className="border-l px-4 text-lg text-white font-bold md:text-xl">
                {job.title}
              </h1>
              <span className="text-slate-300 text-sm pt-1">
                {job.duration}
              </span>
            </div>
            <p className="italic text-base text-gray-300">
              {job.company}
            </p>
            <ul className="list-disc pl-6 text-sm text-gray-200">
              {job.responsibilities.map((task, index) => (
                <li key={index} className="text-gray-200">
                  {task}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default WorkExperienceCard;
