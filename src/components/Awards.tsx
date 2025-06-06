import React from 'react';
import { motion } from 'framer-motion';

const Awards: React.FC = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Awards & Grants</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognition for academic excellence and research contributions in development economics.
          </p>
        </motion.div>

        {/* Awards & Honors */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Awards & Honors</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">ISWE Award</h3>
                  <p className="text-lg text-blue-600">Irish Society for Women in Economics, IEA 2025</p>
                </div>
                <span className="bg-gold-100 text-gold-800 px-4 py-2 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                  €250
                </span>
              </div>
              <p className="text-gray-700">
                Joint award for Best Paper presented by a Female Economist at IEA 2025
              </p>
              <p className="text-sm text-gray-500 mt-2">May 2025</p>
            </div>
          </div>
        </motion.section>

        {/* Research Grants */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Research Grants</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">Travel Grant</h3>
                  <p className="text-lg text-blue-600">Trinity Research in Social Sciences (TRiSS), Trinity College Dublin</p>
                </div>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                  €650
                </span>
              </div>
              <p className="text-gray-700">
                Sponsored by TRiSS to present the findings of research at University of Oxford
              </p>
              <p className="text-sm text-gray-500 mt-2">February 2025</p>
            </div>
          </div>
        </motion.section>

        {/* Scholarships */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Scholarships</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">PhD Scholarship</h3>
                  <p className="text-lg text-blue-600">Department of Economics, Trinity College Dublin</p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  €88,000
                </span>
              </div>
              <p className="text-gray-700">
                Sponsored by the Department of Economics to pursue PhD in Economics
              </p>
              <p className="text-sm text-gray-500 mt-2">September 2022</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">GREAT Britain Scholarship</h3>
                  <p className="text-lg text-blue-600">Politics and International Studies, University of Warwick</p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  £12,000
                </span>
              </div>
              <p className="text-gray-700">
                Sponsored by British Council, GREAT & University of Warwick to pursue MA in International Development
              </p>
              <p className="text-sm text-gray-500 mt-2">October 2017</p>
            </div>
          </div>
        </motion.section>

        {/* Summary Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Funding Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">€89,150</div>
              <div className="text-blue-100">Total Funding Received</div>
              <div className="text-sm text-blue-200 mt-1">
                (€88,650 scholarships + €250 award + €250 travel grants)
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4</div>
              <div className="text-blue-100">Awards & Grants</div>
              <div className="text-sm text-blue-200 mt-1">Academic recognition</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3</div>
              <div className="text-blue-100">Years of PhD Funding</div>
              <div className="text-sm text-blue-200 mt-1">Ongoing support</div>
            </div>
          </div>
        </motion.div>

        {/* Additional Recognition */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Professional Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Conference Presentations</h3>
              <p className="text-gray-700">
                Presented research at multiple international conferences including Centre for the Study of African Economies, 
                Irish Economic Association, BREW-ESA, and LSE Field Experiments conferences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Research Collaboration</h3>
              <p className="text-gray-700">
                Active collaboration with World Bank Gender Innovation Lab, University of Michigan, 
                Government of Tamil Nadu, and various international development organizations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Grant Writing Success</h3>
              <p className="text-gray-700">
                Successfully drafted grant proposals worth $50,000 USD to organizations such as UNCDF 
                during tenure at LEAD at IFMR.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Fast-Track Promotion</h3>
              <p className="text-gray-700">
                Promoted to Senior Research Associate within less than two years at LEAD at IFMR—faster than 
                the typical timeline—based on exceptional performance.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Awards; 