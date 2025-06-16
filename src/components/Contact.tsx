import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch for research collaborations, academic discussions, or opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="material-icons text-blue-600">email</i>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <a href="mailto:shrivasb@tcd.ie" className="text-blue-600 hover:text-blue-700">
                    shrivasb@tcd.ie
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="material-icons text-blue-600">phone</i>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <a href="tel:+353-899463310" className="text-blue-600 hover:text-blue-700">
                    +353-899463310
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="material-icons text-blue-600">location_on</i>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Location</p>
                  <p className="text-gray-600">Dublin, Ireland</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="material-icons text-blue-600">school</i>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Institution</p>
                  <p className="text-gray-600">
                    Department of Economics<br />
                    Trinity College Dublin
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="material-icons text-blue-600">person</i>
                </div>
                <div>
                  <p className="font-medium text-gray-900">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/bhavya-shrivastava/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    bhavya-shrivastava
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Research Collaboration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Research Collaboration</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-6">
                I'm always interested in collaborating on research projects related to:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Development Economics & Microfinance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Gender Economics & Women's Empowerment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Field Experiments & Impact Evaluation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Financial Inclusion & Credit Access</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Data Quality & Survey Methodology</span>
                </li>
              </ul>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800 font-medium mb-2">Current Research Focus</p>
                <p className="text-blue-700 text-sm">
                I'm currently working on projects examining demand-side constraints in loan access for female entrepreneurs in Nigeria, evaluating innovative credit products for micro-entrepreneurs in India, and studying the impact of tax individualization on secondary earners in Ireland.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* References */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">References</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  <a href="https://www.michaelking.ie/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Prof. Michael King</a>
                </h3>
              <p className="text-blue-600 mb-1">Director</p>
              <p className="text-gray-600 text-sm mb-3">
                Trinity Impact Evaluation Unit (TIME)<br />
                Department of Economics<br />
                Trinity College, University of Dublin
              </p>
              <a 
                href="mailto:Michael.King@tcd.ie" 
                className="text-blue-600 hover:text-blue-700 text-sm"
              >
                Michael.King@tcd.ie
              </a>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Prof. Nicola Fontana</h3>
              <p className="text-blue-600 mb-1">Assistant Professor</p>
              <p className="text-gray-600 text-sm mb-3">
                Department of Economics<br />
                Trinity College, University of Dublin
              </p>
              <a 
                href="mailto:nicola.fontana@tcd.ie" 
                className="text-blue-600 hover:text-blue-700 text-sm"
              >
                nicola.fontana@tcd.ie
              </a>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Dr. Fabrizio Valenti</h3>
              <p className="text-blue-600 mb-1">Senior Consultant</p>
              <p className="text-gray-600 text-sm mb-3">
                KSAR Consulting Group<br />
                Ottawa, Canada
              </p>
              <a 
                href="mailto:fabrizio.valenti@ksar.co" 
                className="text-blue-600 hover:text-blue-700 text-sm"
              >
                fabrizio.valenti@ksar.co
              </a>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Let's Collaborate</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new research opportunities, potential collaborations, 
              or sharing insights about development economics and impact evaluation.
            </p>
            <a
              href="mailto:shrivasb@tcd.ie?subject=Research Collaboration Inquiry"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300"
            >
              Send a Message
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 