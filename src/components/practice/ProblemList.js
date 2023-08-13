import React from 'react';
import { FaLink } from 'react-icons/fa';
import { BsCheckCircle } from 'react-icons/bs';
import { GoLinkExternal } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { practiceProblem } from '../../utils/practiceProblem';



const ProblemList = () => {
  return (
    <div className="container mx-auto md:w-[800px] mt-8">
      <h1 className="text-2xl font-bold mb-4">Problem List</h1>
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Problem Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Solve
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Solution
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                LeetCode
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {practiceProblem.map((problem, index) => (
              <tr key={index}>
                <td className="md:px-6 px-2 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{problem.title}</div>
                </td>
                <td className="px-1  md:px-4 py-4 whitespace-nowrap">
                <Link to={'/problems'+`/${problem.title.replace(/ /g, '-')}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 md:px-4 rounded">
                <BsCheckCircle className="inline mr-2" /> Solve
                </Link> 
                 
                </td>
                <td className="px-1 md:px-4 py-4 whitespace-nowrap">
                  <a
                    href={problem.solutionLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 md:px-4 rounded"
                  >
                    <FaLink className="inline mr-2" /> Solution
                  </a>
                </td>
                <td className="px-1 md:px-4 py-4 whitespace-nowrap">
                  <a
                    href="https://leetcode.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-1 md:px-4 rounded"
                  >
                    <GoLinkExternal className="inline " /> LeetCode
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProblemList;
