import React, { useEffect } from "react";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Solutions = () => {
  // Add this useEffect to scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <main className="container mx-auto px-4 py-12">
        {/* Page Heading */}
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-900">
          AI Services & Solutions
        </h1>
        <p className="text-center text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
          Empower your business with cutting-edge AI technologies designed to streamline operations, enhance decision-making, and drive innovation.
        </p>

        {/* Gray Card Section */}
        <div className="bg-gray-100 rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Intelligent AI-Powered Solutions for Modern Enterprises
            </h2>
            <p className="text-gray-700 mb-4">
              Bigebrains leverages the power of artificial intelligence to automate workflows, predict trends, and personalize customer experiences, helping your business scale with confidence.
            </p>
            <p className="text-gray-700">
              From machine learning models to natural language processing and data analytics, our AI solutions are tailored to meet your unique business needs — all under a secure and scalable cloud infrastructure.
            </p>
          </div>

          {/* Image from internet */}
          <div className="md:w-1/2">
            <img
              src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg"
              alt="AI team collaboration"
              className="rounded-xl w-full object-cover"
            />
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mt-20">
          <ContactForm />
        </div>
      </main>
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Solutions;