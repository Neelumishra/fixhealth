import { NextResponse } from "next/server";

export async function POST(req: any, res: any) {
    const list = [
    { name: "Dr. Arjun Gupta", expertise: "Cardiologist", city: "Mumbai" },
    { name: "Dr. Priya Sharma", expertise: "Pediatrician", city: "Delhi" },
    { name: "Dr. Rajesh Verma", expertise: "Dermatologist", city: "Bangalore" },
    { name: "Dr. Ananya Singh", expertise: "Orthopedic Surgeon", city: "Chennai" },
    { name: "Dr. Sunil Kumar", expertise: "Gastroenterologist", city: "Hyderabad" },
    { name: "Dr. Nandini Reddy", expertise: "Ophthalmologist", city: "Kolkata" },
    { name: "Dr. Aman Agarwal", expertise: "Neurologist", city: "Pune" },
    { name: "Dr. Sneha Kapoor", expertise: "Psychiatrist", city: "Ahmedabad" },
    { name: "Dr. Vikas Malhotra", expertise: "Dentist", city: "Jaipur" },
    { name: "Dr. Meera Patel", expertise: "Endocrinologist", city: "Lucknow" },
    { name: "Dr. Sanjay Kumar", expertise: "Urologist", city: "Bhopal" },
    { name: "Dr. Nisha Gupta", expertise: "Oncologist", city: "Indore" },
    { name: "Dr. Ajay Singh", expertise: "Pulmonologist", city: "Chandigarh" },
    { name: "Dr. Divya Sharma", expertise: "Rheumatologist", city: "Nagpur" },
    { name: "Dr. Rahul Khanna", expertise: "Hematologist", city: "Amritsar" },
    { name: "Dr. Anika Verma", expertise: "Gynecologist", city: "Surat" },
    { name: "Dr. Mohan Joshi", expertise: "Dietitian", city: "Ahmednagar" },
    { name: "Dr. Preeti Desai", expertise: "Dermatopathologist", city: "Agra" },
    { name: "Dr. Rakesh Tiwari", expertise: "Nephrologist", city: "Vadodara" },
    { name: "Dr. Shweta Singh", expertise: "Radiologist", city: "Varanasi" },
    { name: "Dr. Siddharth Raj", expertise: "Gastrointestinal Surgeon", city: "Thane" },
    { name: "Dr. Anjali Kapoor", expertise: "Cardiothoracic Surgeon", city: "Noida" },
    { name: "Dr. Pradeep Sharma", expertise: "Neonatologist", city: "Gurgaon" },
    { name: "Dr. Aarti Verma", expertise: "Allergist", city: "Faridabad" },
    { name: "Dr. Karishma Kapoor", expertise: "Plastic Surgeon", city: "Goa" },
    { name: "Dr. Rahul Verma", expertise: "Gastrointestinal Oncologist", city: "Patiala" },
    { name: "Dr. Sonali Reddy", expertise: "Vascular Surgeon", city: "Jalandhar" },
    { name: "Dr. Sameer Kapoor", expertise: "Thoracic Surgeon", city: "Ludhiana" },
    { name: "Dr. Simran Sharma", expertise: "Podiatrist", city: "Shimla" },
    { name: "Dr. Harish Gupta", expertise: "Infectious Disease Specialist", city: "Dehradun" },
    { name: "Dr. Kavita Agarwal", expertise: "Hepatologist", city: "Haridwar" },
    { name: "Dr. Mohit Singh", expertise: "Geriatrician", city: "Rishikesh" },
    { name: "Dr. Poonam Tiwari", expertise: "Sports Medicine Physician", city: "Jammu" },
    { name: "Dr. Viren Joshi", expertise: "Interventional Radiologist", city: "Srinagar" },
    { name: "Dr. Nisha Arora", expertise: "Pain Management Specialist", city: "Gulmarg" },
    { name: "Dr. Rishi Verma", expertise: "Maxillofacial Surgeon", city: "Leh" },
    { name: "Dr. Ankit Malhotra", expertise: "Virologist", city: "Udaipur" },
    { name: "Dr. Neha Khanna", expertise: "Speech Therapist", city: "Jaipur" },
    { name: "Dr. Akshay Patel", expertise: "Hematopathologist", city: "Ahmedabad" },
    { name: "Dr. Aarav Singh", expertise: "Sleep Medicine Specialist", city: "Surat" },
    { name: "Dr. Natasha Reddy", expertise: "Clinical Geneticist", city: "Vadodara" },
    { name: "Dr. Rohit Sharma", expertise: "Hypnotherapist", city: "Indore" },
    { name: "Dr. Ananya Kapoor", expertise: "Transplant Surgeon", city: "Bhopal" },
    { name: "Dr. Varun Joshi", expertise: "Orthoptist", city: "Lucknow" },
  ];

  const body = await req.json();
  const { city } = body;
  console.log(body)
   if (!city) {
     return new NextResponse("City parameter is required",{status:402});
   }

   // Filter doctors by city
   const filteredDoctors = list.filter(
     (doctor) => doctor.city.toLowerCase() === city.toLowerCase()
   );
  return new NextResponse(JSON.stringify(filteredDoctors), { status: 200 });
}
