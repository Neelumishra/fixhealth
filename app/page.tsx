"use client";
import Navbar from "@/components/Navbar";
import Testimonal from "@/components/Testimonal";
import Form from "@/components/form/form0";
import { Flowbite } from "flowbite-react";
import { useState } from "react";
import Stepper from "@/components/Stepper";
import Indicator from "@/components/Indicator";
import Form1 from "@/components/form/form1";
import Form2 from "@/components/form/form2";
import Form3 from "@/components/form/form3";
import List from "@/components/form/List";

export default function Home() {
  const [doctors, setDoctors] = useState([]);
  const [city, setCity] = useState("");
  function getSectionComponent(current: number) {
    switch (current) {
      case 0:
        return <Form />;
      case 1:
        return <Form1 setCity={setCity} />;
      case 2:
        return <Form2 />;
      case 3:
        return <Form3 />;
      case 4:
        return <List doctors={doctors} />;
      default:
        return null;
    }
  }
  function getSectionTitle(current: number) {
    switch (current) {
      case 0:
        return "Start Your Recovery";
      case 1:
        return "Two More Step Left";
      case 2:
        return "Click Next";
      case 3:
        return "Submit";

      default:
        return null;
    }
  }
  async function handleSubmit() {
    try {
      const response = await fetch(`/api`, {
        method: "POST",
        body: JSON.stringify({
          city: city,
        }),
      });
      const data = await response.json();
      console.log(data);
      setDoctors(data);
      goToNextStep();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  const [currentStep, setCurrentStep] = useState(0);
  const NUMBER_OF_STEPS = 5;

  const goToNextStep = () =>
    setCurrentStep((prev) => (prev === NUMBER_OF_STEPS - 1 ? prev : prev + 1));

  return (
    <Flowbite theme={{mode:"dark"}}>
      <div className="text-center">
        <Navbar />
        <div className="heroImage h-[40rem]">
          <div className=" pt-32 ml-5">
            <br />
            <div className="relative h-[35rem]">
              <Stepper
                currentStep={currentStep}
                numberOfSteps={NUMBER_OF_STEPS}
              />
              <br />
              <div className="absolute top-14 w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 dark:text-white h-96">
                <div className="space-y-6  mt-16">
                  {getSectionComponent(currentStep)}
                  {currentStep == NUMBER_OF_STEPS - 1 ? null : (
                    <button
                      onClick={
                        NUMBER_OF_STEPS - 2 == currentStep
                          ? handleSubmit
                          : goToNextStep
                      }
                      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border"
                    >
                      {getSectionTitle(currentStep)}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <List />
        <Testimonal />
      </div>
    </Flowbite>
  );
}
