import React from 'react';
import { motion } from 'framer-motion';

const Research: React.FC = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Research</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My research focuses on development economics, with particular emphasis on 
            microfinance, gender equality, and field experimental methods.
          </p>
        </motion.div>

        {/* Current Research Projects */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Current Research Projects</h2>
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Long-term Effects of Ireland's Tax Individualization Reform on Women's Financial Outcomes
                </h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Ongoing
                </span>
              </div>
              <p className="text-gray-700 mb-4">
                <strong>Objective:</strong> This study examines the long-term effects of Ireland's 2000 tax individualization reform on women's labor market engagement and financial outcomes. The reform partially transitioned the taxation system from joint to individual assessment, aiming to reduce disincentives for secondary earners—primarily married women—to enter the labor force.
              </p>
              <div className="mb-4">
                <strong className="text-gray-900">Key Contributions:</strong>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>Extends previous research beyond short-term labor force participation to evaluate long-term financial outcomes including pension contributions and asset ownership</li>
                  <li>Leverages the Irish Longitudinal Study on Ageing (TILDA) for comprehensive analysis</li>
                  <li>Adopts a quasi-experimental cohort-based Difference-in-Differences (DiD) approach comparing outcomes across cohorts of married women</li>
                  <li>Analyzes impact on intra-household income distribution and women's financial agency</li>
                </ul>
              </div>
              <div className="mb-4">
                <strong className="text-gray-900">Keywords:</strong>
                <span className="text-gray-700"> Tax individualization, women's bargaining power, income disparity, household financial outcomes, labor market participation</span>
              </div>
              <p className="text-sm text-gray-600">
                <strong>Tools:</strong> STATA, R, LATEX
              </p>
              <p className="text-sm text-blue-600 font-medium mt-2">
                Draft available on request
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Bridging the Gap: Assessing Demand-Side Constraints in Loan Access for Female Entrepreneurs in Nigeria <span className="text-sm"> (with Michael King)</span>
                </h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Ongoing
                </span>
              </div>
              <p className="text-gray-700 mb-4">
                <strong>Objective:</strong> This study aims to assess the impact of targeted training sessions—focusing on 
                business skills and confidence building, on the demand for credit among female entrepreneurs. 
                It seeks to generate evidence on the financial gap among Nigerian female entrepreneurs, 
                particularly due to the low demand for business loans.
              </p>
              <div className="mb-4">
                <strong className="text-gray-900">Key Contributions:</strong>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>Co-designed the field experiment with the World Bank Gender Innovation Lab</li>
                  <li>Led the effort in generating official documents required to run the experiment in the field</li>
                  <li>Designed the questionnaires for the endline and the baseline of the study</li>
                </ul>
              </div>
              <p className="text-sm text-gray-600">
                <strong>Tools:</strong> MS Office, STATA, R, LATEX
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Financing Female Micro-Entrepreneurs: An Experiment on Flexible and Sustainable Credit Products <span className="text-sm"> (with William Jack & Michael King)</span>
                </h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Ongoing
                </span>
              </div>
              <p className="text-gray-700 mb-4">
                <strong>Objective:</strong> This study aims to evaluate the impact of innovative loan products on the 
                business performance, financial well-being, and empowerment of Indian female microentrepreneurs.
              </p>
              <div className="mb-4">
                <strong className="text-gray-900">Key Contributions:</strong>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>Led field operations for four rounds of primary data collection (12,000 observations)</li>
                  <li>Conducted extensive SurveyCTO validations to ensure data accuracy and operational efficiency</li>
                  <li>Conducted extensive data cleaning, coding, and regression analyses over months</li>
                  <li>Designed the paper's preliminary conceptual framework and authored the initial manuscript draft</li>
                </ul>
              </div>
              <p className="text-sm text-gray-600">
                <strong>Tools:</strong> MS Office, STATA, R, LATEX
              </p>
              <p className="text-sm text-blue-600 font-medium mt-2">
                Draft available on request
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Backlash against Airbnb: Evidence from London
                </h3>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  Research Assistant
                </span>
              </div>
              <p className="text-gray-700 mb-4">
                <strong>Supervisor:</strong> Prof Nicola Fontana, Trinity College Dublin
              </p>
              <div className="mb-4">
                <strong className="text-gray-900">Key Contributions:</strong>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>Led data cleaning and spatial analysis by processing large datasets in Excel</li>
                  <li>Mapped geographic coordinates using ArcGIS</li>
                  <li>Developed and implemented automated text analysis pipelines for large volumes of Airbnb reviews using Large Language Models (LLMs)</li>
                </ul>
              </div>
              <p className="text-sm text-gray-600">
                <strong>Tools:</strong> ArcGIS, Python
              </p>
            </div>
          </div>
        </motion.section>

        {/* Publications */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Publications</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-start mb-3">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Published
                </span>
                <span className="text-sm text-gray-500">September 2024</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                ExenDT 2 Deliverable 7.2 - <a className='text-blue-600 underline' href='https://extendt2.eu/wp-content/uploads/2024/10/Cycle-2_Evaluation-Report_Final.pdf' target='_blank'>Cycle 2 Evaluation Report</a>
              </h3>
              <p className="text-gray-600 mb-3">
                Girvan, C., Walsh, S., <strong>Shrivastava, B.</strong>, Greka, C., Schiza, K., Nikolaou, M-S., 
                Zhang, F., Shrestha, S., Strubbe, K. & Ornekoglu Selcuk, M. (2024)
              </p>
              <p className="text-gray-700">
                Analysed data and generated a critical report for a high-stakes project commissioned by the EU. 
                The project aims to deliver an evaluation report on the use of technology in classroom teaching.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-start mb-3">
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  Working Paper
                </span>
                <span className="text-sm text-gray-500">July 2023</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                How Good is Your Data? Challenges of Ensuring Data Quality in a Large-Scale Survey: 
                Lessons from the Tamil Nadu Household Panel Survey (TNHPS) - <a className='text-blue-600 underline' href='https://www.mids.ac.in/assets/doc/WP_243.pdf' target='_blank'>Working Paper</a>
              </h3>
              <p className="text-gray-600 mb-3">
                Ananthpur, Kripa & de Jong, Julie & Sridharan, Gargi & <strong>Shrivastava, Bhavya</strong> (2023)
              </p>
              <p className="text-gray-700">
                The working paper examines the transition from paper-based to computer-assisted interviewing 
                in the Tamil Nadu Household Panel Survey (TNHPS). It discusses challenges in ensuring data 
                quality during large-scale surveys and offers quality control guidance to minimize errors 
                and enhance data reliability.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Research Interests */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Research Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Development Economics</h3>
              <p className="text-gray-700">
                Microfinance, financial inclusion, and entrepreneurship in developing economies
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Gender & Economics</h3>
              <p className="text-gray-700">
                Women's economic empowerment, female entrepreneurship, and gender gaps in finance
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Impact Evaluation</h3>
              <p className="text-gray-700">
                Randomized controlled trials, field experiments, and quantitative research methods
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Quality & Methodology</h3>
              <p className="text-gray-700">
                Large-scale survey design, computer-assisted interviewing, and data validation techniques
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Financial Inclusion</h3>
              <p className="text-gray-700">
                Credit access, loan products design, and barriers to financial services
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Research; 