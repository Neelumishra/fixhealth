import React from "react";

function Indicator() {
  return (
    <ol className="flex items-center">
      <li className="relative w-full mb-6">
        <div className="flex items-center">
          <div
            className={`z-10 flex items-center justify-center w-6 h-6 bg-${``}-600 rounded-full ring-0 ring-white dark:bg-${``}-900 sm:ring-8 dark:ring-gray-900 shrink-0`}
          >
            <svg
              className={`w-2.5 h-2.5 text-${``}-100 dark:text-${``}-300`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
          </div>
          <div className="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700">
            Hello
          </div>
        </div>
        <div className="mt-3">
          <h3 className="font-medium text-gray-900 dark:text-white">Step 1</h3>
        </div>
      </li>
      
    </ol>
  );
}

export default Indicator;
