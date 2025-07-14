import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="relative">
              <img
                src="/profile-picture.jpeg"
                alt="Bhavya Shrivastava"
                className="w-80 h-80 mx-auto rounded-full shadow-lg object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Bhavya Shrivastava
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              PhD Candidate in Economics
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Trinity College Dublin
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mb-8">
            I'm a PhD candidate in Economics at Trinity College Dublin, supervised by <a href="https://www.michaelking.ie/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Prof. Michael King</a>. My research—Essays in Development Economics—focuses on tackling real-world challenges in international development. <br/><br/> My interests lie in financial inclusion, gender equality and empowerment, and innovation in financial inclusion. I've worked on high-impact projects with the World Bank and contributed to EU-commissioned evaluation reports. <br/><br/>I bring 4+ years of hands-on expertise in field research and program evaluation. I obtained an MA in International Development from the University of Warwick and a BA (Hons.) from Lady Shri Ram College in New Delhi. <br/><br/>On a personal note, I'm married to <a href="https://kunaltolani.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">this tech nerd</a> who keeps me updated on the latest in AI and software development.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <a
                href="mailto:shrivasb@tcd.ie"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Contact Me
              </a>
              <a
                href="/Shrivastava May 2025.pdf"
                target="_blank"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition duration-300"
              >
                Download CV
              </a>
            </div>
            
            {/* Social Media Links */}
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/bhavya-shrivastava"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin-in text-lg"></i>
              </a>
              <a
                href="https://twitter.com/bhavyashr07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300"
                title="Twitter"
              >
                <i className="fab fa-twitter text-lg"></i>
              </a>
              <a
                href="https://bsky.app/profile/bshr7.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 border-2 border-sky-500 text-sky-500 rounded-full hover:bg-sky-500 hover:text-white transition duration-300"
                title="Bluesky"
              >
                <svg width="22" height="19" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 511.999 452.266"><path fill="#0085FF" fill-rule="nonzero" d="M110.985 30.442c58.695 44.217 121.837 133.856 145.013 181.961 23.176-48.105 86.322-137.744 145.016-181.961 42.361-31.897 110.985-56.584 110.985 21.96 0 15.681-8.962 131.776-14.223 150.628-18.272 65.516-84.873 82.228-144.112 72.116 103.55 17.68 129.889 76.238 73 134.8-108.04 111.223-155.288-27.905-167.385-63.554-3.489-10.262-2.991-10.498-6.561 0-12.098 35.649-59.342 174.777-167.382 63.554-56.89-58.562-30.551-117.12 72.999-134.8-59.239 10.112-125.84-6.6-144.112-72.116C8.962 184.178 0 68.083 0 52.402c0-78.544 68.633-53.857 110.985-21.96z"/></svg>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Research Interests */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Research Interests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 border border-blue-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                Development Economics
              </h3>
              <p className="text-blue-800">
                Microfinance, financial inclusion, and entrepreneurship in developing countries
              </p>
            </div>
            <div className="bg-green-50 border border-green-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-900 mb-3">
                Gender & Economics
              </h3>
              <p className="text-green-800">
                Women's economic empowerment, female entrepreneurship, and gender gaps in finance
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-3">
                Impact Evaluation
              </h3>
              <p className="text-purple-800">
                Randomized controlled trials, field experiments, and quantitative research methods
              </p>
            </div>
          </div>
        </motion.div>

        {/* Conference Talks */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Recent Conference Presentations
          </h2>
          <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-blue-600 underline">
                  <a href='https://www.iea.ie/2024/11/12/new-irish-economic-association-conference-2025/' target='_blank'>
                Inaugural Irish Public Economic Workshop (IPEW) 2025
                </a>
                </h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Upcoming
                </span>
              </div>
              <p className="text-gray-600 mb-2">Central Bank of Ireland</p>
              <p className="text-gray-700">
              Assessing long term impact of tax individualization on secondary earners' labour market outcomes and bargaining power
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-blue-600 underline">
                  <a href='https://csae.web.ox.ac.uk/sitefiles/csaeconf2025programme-at-a-glance-final.pdf' target='_blank'>
                  Centre for the Study of African Economies Conference 2025
                  </a>
                </h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Completed
                </span>
              </div>
              <p className="text-gray-600 mb-2">University of Oxford, UK</p>
              <p className="text-gray-700">
                Presenting research findings on impact of innovative products on female micro-entrepreneurs in India
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-blue-600 underline">
                  <a href='https://www.iea.ie/app/uploads/2024/04/IEA2024-Conference-Programme.pdf' target='_blank'>Irish Economic Association 2025</a>
                </h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Completed
                </span>
              </div>
              <p className="text-gray-600 mb-2">Queen's University, UK</p>
              <p className="text-gray-700">
                Winner of ISWE Award for Best Paper presented by a Female Economist
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-blue-600 underline">
                  <a href='http://ashoka.edu.in/event/brewesa-conference/' target='_blank'>
                  BREW-ESA 2024
                  </a>
                </h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Completed
                </span>
              </div>
              <p className="text-gray-600 mb-2">Ashoka University, India</p>
              <p className="text-gray-700">
                Presented findings on microfinance and women's empowerment
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-blue-600 underline">
                  <a href='https://www.canva.com/design/DAGNRn6tiFs/zDsj63lZyFXE2JdmY3a0iQ/view?utm_content=DAGNRn6tiFs&utm_campaign=designshare&utm_medium=link&utm_source=editor#1' target='_blank'>
                  Advances in Field Experiment 2024
                  </a>
                </h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Completed
                </span>
              </div>
              <p className="text-gray-600 mb-2">London School of Economics, UK</p>
              <p className="text-gray-700">
                Discussed innovative methodologies in field experimental design
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero; 