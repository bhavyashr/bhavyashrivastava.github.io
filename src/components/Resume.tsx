import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Resume: React.FC = () => {
  const [showPDF, setShowPDF] = useState(false);
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <div className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resume</h1>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setShowPDF(!showPDF)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center gap-2"
            >
              <span className="material-icons">{showPDF ? 'visibility_off' : 'visibility'}</span>
              {showPDF ? 'Hide Resume' : 'View Resume'}
            </button>
            <a
              href="/Shrivastava May 2025.pdf"
              download
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition duration-300 flex items-center gap-2"
            >
              <span className="material-icons">download</span>
              Download PDF
            </a>
          </div>
        </motion.div>

        {showPDF && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4">
                <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                  <span className="material-icons">description</span>
                  Resume - Bhavya Shrivastava
                </h3>
              </div>
              <div className="relative bg-gray-50 p-4">
                <div className="flex justify-center">
                  <Document
                    file="/Shrivastava May 2025.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading={
                      <div className="flex items-center justify-center h-40 text-gray-500">
                        <div className="text-center">
                          <span className="material-icons text-4xl mb-2 animate-spin">refresh</span>
                          <p>Loading PDF...</p>
                        </div>
                      </div>
                    }
                    error={
                      <div className="flex items-center justify-center h-40 bg-gray-100 text-gray-500">
                        <div className="text-center">
                          <span className="material-icons text-4xl mb-2">description</span>
                          <p>Failed to load PDF.</p>
                          <p>Please download the PDF to view it.</p>
                        </div>
                      </div>
                    }
                  >
                    <Page
                      pageNumber={pageNumber}
                      width={Math.min(800, window.innerWidth * 0.8)}
                      className="shadow-lg"
                    />
                  </Document>
                </div>
                
                {numPages > 1 && (
                  <div className="flex items-center justify-center gap-4 mt-4">
                    <button
                      disabled={pageNumber <= 1}
                      onClick={() => setPageNumber(pageNumber - 1)}
                      className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-blue-700 transition duration-300"
                    >
                      Previous
                    </button>
                    <span className="text-gray-700 font-medium">
                      Page {pageNumber} of {numPages}
                    </span>
                    <button
                      disabled={pageNumber >= numPages}
                      onClick={() => setPageNumber(pageNumber + 1)}
                      className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-blue-700 transition duration-300"
                    >
                      Next
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Education</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">PhD in Economics</h3>
                  <p className="text-lg text-blue-600">Trinity College Dublin</p>
                </div>
                <span className="text-gray-500 text-sm">Sept 2022 – Present</span>
              </div>
              <p className="text-gray-700 mb-2">
                                  <strong>Supervisor:</strong> <a href="https://www.michaelking.ie/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Prof. Michael King</a>
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Thesis:</strong> Essays in Development Economics
              </p>
              <p className="text-gray-700">
                <strong>Thesis Committee:</strong> Prof. Carol Newman, Prof. Martina Kirchberger
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">MA International Development</h3>
                  <p className="text-lg text-blue-600">University of Warwick</p>
                </div>
                <span className="text-gray-500 text-sm">Oct 2017 – Oct 2018</span>
              </div>
              <p className="text-gray-700 mb-2">
                <strong>Thesis Advisor:</strong> Prof. Margarita Gelepithis
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Thesis:</strong> A critical analysis of Microfinance in India
              </p>
              <p className="text-gray-700">
                <strong>GPA:</strong> 3.7 (Merit)
              </p>
            </div>
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Consultant</h3>
                  <p className="text-lg text-blue-600">World Bank</p>
                  <p className="text-gray-600">Dublin, Ireland</p>
                </div>
                <span className="text-gray-500 text-sm">Oct 2023 – Present</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Co-designed with the Gender Innovation Lab (GIL) at the World Bank, an experiment that aimed to assess the impact of business training on MSME owners in Nigeria</li>
                <li>The training sessions focused on boosting women's confidence and developing business skills</li>
                <li>Conducted an in-depth literature review to help inform the Randomized Controlled Trial (RCT) design</li>
                <li>Oversaw the drafting and regular revision of important project documents</li>
                <li>Displayed extensive stakeholder engagement through regular calls to align project goals</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Senior Research Associate</h3>
                  <p className="text-lg text-blue-600">LEAD at IFMR</p>
                  <p className="text-gray-600">New Delhi, India</p>
                </div>
                <span className="text-gray-500 text-sm">July 2020 – Aug 2022</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Re-designed research designs to fit the local context and developed quantitative and qualitative research instruments</li>
                <li>Led the field operations by directing 15 enumerator training, and evaluating enumerator performance</li>
                <li>This resulted in a 10% increase in enumerators' productivity by leveraging metadata variables such as interview completion time, number of calls made, and others</li>
                <li>Managed internal and external stakeholders, ensuring seamless project execution</li>
                <li>Drafted successful grant proposals worth $50k USD to organizations such as UNCDF</li>
                <li>Devised budgets for various projects at LEAD and implemented projects on the budget, ensuring optimal resource allocation</li>
                <li>Promoted within less than two years—faster than the typical timeline—based on exceptional performance and contributions across multiple projects</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Research Investigator</h3>
                  <p className="text-lg text-blue-600">Madras Institute of Development Studies</p>
                  <p className="text-gray-600">Chennai, India</p>
                </div>
                <span className="text-gray-500 text-sm">June 2019 – June 2020</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Led the design of baseline research instruments for the Tamil Nadu Household Panel Survey, collaborating with the University of Michigan team to ensure methodological rigor</li>
                <li>Liaised with the Government of Tamil Nadu, driving discussions and finalizing the research instrument to align with government goals</li>
                <li>Coordinated with stakeholders to develop the COVID Pulse Survey questionnaire in June 2020, providing rapid insights during the pandemic</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Associate Consultant - Strategy</h3>
                  <p className="text-lg text-blue-600">KPMG</p>
                  <p className="text-gray-600">New Delhi, India</p>
                </div>
                <span className="text-gray-500 text-sm">Nov 2018 – June 2019</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Conceptualized publicity schemes for international clients and produced high-quality slide decks and reports for stakeholder presentations</li>
                <li>Coordinated between team members, ensuring effective communication</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Teaching Experience */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Teaching Experience</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Teaching Assistant</h3>
                  <p className="text-blue-600">Economy of Ireland</p>
                  <p className="text-gray-600">Prof. Barra Roantree, Prof. Francis O'Toole</p>
                  <p className="text-sm text-gray-600">Undergraduate, Dept. of Economics, Trinity College Dublin</p>
                </div>
                <span className="text-gray-500 text-sm">Sep 2024 - Present</span>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Teaching Assistant</h3>
                  <p className="text-blue-600">Impact Evaluation</p>
                  <p className="text-gray-600">Dr. Tara Bedi</p>
                  <p className="text-sm text-gray-600">Postgraduate, Dept. of Geography, Trinity College Dublin</p>
                </div>
                <span className="text-gray-500 text-sm">Jan 2023 - Present</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Programming & Software</h3>
              <div className="flex flex-wrap gap-2">
                {['R', 'STATA', 'Python', 'LATEX', 'SurveyCTO', 'ArcGIS', 'MS Office'].map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Languages</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-700">English</span>
                  <span className="text-gray-600 text-sm">Native</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Hindi</span>
                  <span className="text-gray-600 text-sm">Native</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Bengali</span>
                  <span className="text-gray-600 text-sm">Intermediate</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">French</span>
                  <span className="text-gray-600 text-sm">Basic</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Resume; 