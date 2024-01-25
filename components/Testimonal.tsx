import React from "react";
import {
  CarouselContent,
  CarouselItem,
  Carousel,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Testimonal() {
  const testimonials = [
    {
      clientImage:
        "https://image.lexica.art/full_webp/1126c2f1-bb3d-410a-a999-8248e6914626",
      review: "Relieved my shoulder pain!",
      descriptiveReview:
        "I suffered from chronic shoulder pain for years, but thanks to the doctors, I am finally pain-free.",
      avatarImage:
        "https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftcfp7i31d%2Fshoulder-icon_5gBsUn5a0.png%3FupdatedAt%3D1685626136256&w=64&q=75",
      clientName: "Alice Johnson",
      clientAge: 42,
      clientWorkProfession: "Marketing Manager",
      clientRating: [1,2,3,4,5],
    },
    {
      clientImage:
        "https://image.lexica.art/full_webp/9d1639ac-92b6-4b51-ba24-e1470123ead0",
      review: "Back pain no more!",
      descriptiveReview:
        "The treatment plan for my back pain was effective. I can now move without any discomfort.",
      avatarImage:
        "https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftcfp7i31d%2Fspinal-icon_OASEt8ZaM.png%3FupdatedAt%3D1685626136193&w=64&q=75",
      clientName: "David Smith",
      clientAge: 48,
      clientWorkProfession: "IT Consultant",
      clientRating: [1,2,3,4]
    },
    {
      clientImage:
        "https://image.lexica.art/full_webp/8543a7f3-b384-4178-8f56-d36210e92af5",
      review: "Sitting pain resolved!",
      descriptiveReview:
        "I had persistent sitting pain due to my job. The doctors provided targeted therapy, and I am pain-free now.",
      avatarImage:
        "https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftcfp7i31d%2Fspinal-icon_OASEt8ZaM.png%3FupdatedAt%3D1685626136193&w=64&q=75",
      clientName: "Emma Turner",
      clientAge: 35,
      clientWorkProfession: "Office Administrator",
      clientRating: [1,2,3,4],
    },
    {
      clientImage:
        "https://image.lexica.art/full_webp/11671367-dc98-4b50-a3cd-781905463209",
      review: "Injury finally fixed!",
      descriptiveReview:
        "I had an injury for over a decade that other doctors couldn't fix. These doctors devised a successful treatment plan, and I'm grateful for the relief.",
      avatarImage:
        "https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fqtv93d5ym%2Ficons%2Fneck_2nm5zMr_6o.svg%3FupdatedAt%3D1684229898100&w=64&q=75",
      clientName: "James Miller",
      clientAge: 50,
      clientWorkProfession: "Construction Supervisor",
      clientRating: [1,2,3,4,5],
    },
    {
      clientImage:
        "https://image.lexica.art/full_webp/8543a7f3-b384-4178-8f56-d36210e92af5",
      review: "No more 12 years of pain!",
      descriptiveReview:
        "I had been living with an injury for 12 years. The doctors here provided a comprehensive solution, and I am finally pain-free.",
      avatarImage:
        "https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fqtv93d5ym%2Ficons%2Fknee_7WDYxzf9kQ.svg%3FupdatedAt%3D1684229845076&w=64&q=75",
      clientName: "Olivia Robinson",
      clientAge: 38,
      clientWorkProfession: "Teacher",
      clientRating: [1,2,3,4],
    },
    {
      clientImage:
        "https://image.lexica.art/full_webp/947ddadf-b9f1-4636-8479-ad6b063b476b",
      review: "Knee pain resolved!",
      descriptiveReview:
        "I struggled with knee pain, affecting my daily activities. The doctors' expertise and personalized care helped me regain mobility.",
      avatarImage:
        "https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fqtv93d5ym%2Ficons%2Fknee_7WDYxzf9kQ.svg%3FupdatedAt%3D1684229845076&w=64&q=75",
      clientName: "Michael Turner",
      clientAge: 45,
      clientWorkProfession: "Financial Analyst",
      clientRating: [1,2,3,4],
    },
    {
      clientImage:
        "https://image.lexica.art/full_webp/9678581d-bfea-46e9-99ce-f5ce96dda035",
      review: "Back Pain relief!",
      descriptiveReview:
        "I suffered from Back Pain. The doctors provided a tailored treatment plan, and I am now living without constant headaches.",
      avatarImage:
        "https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftcfp7i31d%2Fspinal-icon_OASEt8ZaM.png%3FupdatedAt%3D1685626136193&w=64&q=75",
      clientName: "Sophia Davis",
      clientAge: 30,
      clientWorkProfession: "Graphic Designer",
      clientRating: [1,2,3,4],
    },
    {
      clientImage:
        "https://image.lexica.art/full_webp/095dad00-af7b-472d-aaf8-04da7339090f",
      review: "Neck pain improvement!",

      descriptiveReview:
        "Persistent neck pain affected my daily life. The doctors' care and rehabilitation techniques significantly improved my condition.",
      avatarImage:
        "https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftcfp7i31d%2Fshoulder-icon_5gBsUn5a0.png%3FupdatedAt%3D1685626136256&w=64&q=75",
      clientName: "Daniel White",
      clientAge: 40,
      clientWorkProfession: "Architect",
      clientRating: [1,2,3,4],
    },
    {
      clientImage:
        "https://image.lexica.art/full_webp/9ac6cabb-01d8-4c60-b2d0-1bedc5a0d040",
      review: "Hip pain resolved!",
      descriptiveReview:
        "I had chronic hip pain that limited my mobility. The doctors' comprehensive approach helped me get back to an active lifestyle.",
      avatarImage:
        "https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftcfp7i31d%2Fspinal-icon_OASEt8ZaM.png%3FupdatedAt%3D1685626136193&w=64&q=75",
      clientName: "Isabella Brown",
      clientAge: 35,
      clientWorkProfession: "Human Resources Manager",
      clientRating: [1,2,3,4,5],
    },
    {
      clientImage:
        "https://image.lexica.art/full_webp/812f2a47-ed08-4a9a-bf49-b9a344c8b062",
      review: "Knee pain no more!",
      descriptiveReview:
        "I struggled with Knee pain for years. The doctors here provided a holistic treatment plan, and I am now leading a pain-free life.",
      avatarImage:
        "https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fqtv93d5ym%2Ficons%2Fknee_7WDYxzf9kQ.svg%3FupdatedAt%3D1684229845076&w=64&q=75",
      clientName: "Robert Taylor",
      clientAge: 55,
      clientWorkProfession: "Retired",
      clientRating: [1,2,3,4],
    },
  ];

  return (
    <div className="w-[92%]  m-auto dark:bg-gray-800">
      <Carousel className="">
        <CarouselContent>
          {testimonials.map((e) => (
            <CarouselItem className="p-6 md:basis-1/2 lg:basis-1/3">
              {" "}
              <div className=" bg-white border border-white h-[550px] rounded-lg shadow dark:bg-gray-700 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg w-full h-80 relative "
                    src={e.clientImage}
                    alt=""
                  />
                </a>

                <img
                  className="absolute top-3    p-2 rounded-full z-40 -ml-2  items-start h-20"
                  src={e.avatarImage}
                />
                <div className="absolute top-5 border border-gray-200 -mt-1 w-[374px] rounded p-5 text-xl bg-slate-200 pl-6 -ml-1 dark:bg-gray-600 dark:text-white dark:border-none">
                  {e.review}
                </div>
                <div className="p-5 dark:bg-gray-700">
                  <p className="mb-3 font-normal text-gray-700  h-24 dark:text-white">
                    {e.descriptiveReview}
                  </p>
                </div>
                <div className="flex justify-between mx-2 mb-4 dark:bg-gray-700 ">
                  <div className="text-left">
                    <h5 className=" text-xl font-sm text-gray-900 dark:text-white text-left">
                      {e.clientName}
                    </h5>
                    <span className="text-sm text-gray-500  dark:text-white mr-2">
                      {e.clientAge}
                      <span>,</span>
                    </span>
                    <span className="text-sm text-gray-500 dark:text-white ">
                      {e.clientWorkProfession}
                    </span>
                  </div>
                  <div className="flex items-center mt-2.5  dark:bg-gray-700">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      {e.clientRating.map((e) => (
                        <svg
                          className="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      ))}
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                      {e.clientRating.length}
                    </span>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default Testimonal;
