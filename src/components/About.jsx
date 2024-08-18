import React from "react";

function About() {
  return (
    <div
      id="about"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-full mt-12 md:mt-24 space-y-6">
          <h2 className="text-3xl font-bold">About Me</h2>

          {/* Personal Experience */}
          <section className="mb-6">
            <h3 className="text-2xl font-semibold">Personal Experience</h3>
            <p className="text-sm md:text-md text-justify">
              As a beginner in the tech industry, I've been involved in various
              projects, gaining hands-on experience in coding and development.
              My journey includes working on individual and collaborative
              projects, each contributing to my growth as a developer
            </p>
          </section>

          {/* Education */}
          <section className="mb-6">
            <h3 className="text-2xl font-semibold">Education</h3>
            <p className="text-sm md:text-md text-justify">
              I am currently pursuing a Bachelor’s degree in Computer Science
              and Information Technology (CSIT). Throughout my academic journey,
              I have gained a strong foundation in computer science principles,
              programming languages, and software development methodologies.
            </p>
          </section>

          {/* Skills */}
          <section className="mb-6">
            <h3 className="text-2xl font-semibold">Skills</h3>
            <ul className="list-disc list-inside text-sm md:text-md text-justify">
              <li>Knowledgeable in JavaScript ,React js ,Tailwind CSS</li>
              <li>Experienced with Node.js and Express</li>
              <li>Proficient in HTML, CSS </li>
              <li>Familiar with database management (MySQL)</li>
              <li>Basic understanding of ethical hacking principles</li>
            </ul>
          </section>

          {/* Aim */}
          <section>
            <h3 className="text-2xl font-semibold">Aim</h3>
            <p className="text-sm md:text-md text-justify">
              My aim is to continuously improve my skills and contribute to
              innovative projects in the tech industry.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
