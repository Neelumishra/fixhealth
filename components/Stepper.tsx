export default function Stepper({ currentStep, numberOfSteps }: any) {
  const activeColor = (index: any) =>
    currentStep >= index ? "bg-blue-600" : "bg-gray-600";
  const isFinalStep = (index: any) => index === 4;

  return (
    <div className="flex items-center absolute">
      {Array.from({ length: numberOfSteps }).map((_, index) =>
        isFinalStep(index) ? (
          <div key={index}>
            <div className="relative w-full">
              <div className="flex items-center">
                <div
                  className={`z-10 flex items-center justify-center w-6 h-6 ${activeColor(
                    index
                  )} rounded-full ring-0 ring-white dark:${activeColor(
                    index
                  )} sm:ring-8 dark:ring-gray-900 shrink-0`}
                >
                  
                  <svg
                    className={`w-2.5 h-2.5`}
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
              </div>
              <div className="mt-3">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Step 1
                </h3>
              </div>
            </div>
          </div>
        ) : (
          <div key={index}>
            <div className="relative w-full">
              <div className="flex items-center">
                <div
                  className={`z-10 flex items-center justify-center w-6 h-6 ${activeColor(
                    index
                  )} rounded-full ring-0 ring-white dark:${activeColor(
                    index
                  )} sm:ring-8 dark:ring-gray-900 shrink-0`}
                >
                  <svg
                    className={`w-2.5 h-2.5 text-${activeColor(
                      index
                    )}-100 dark:text-${activeColor(index)}-300`}
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
                <div className="flex w-[60px] bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Step 1
                </h3>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
