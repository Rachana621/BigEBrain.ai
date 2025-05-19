import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Industries = () => {
  const industries = [
    {
      title: "Industry & manufacturing",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/industry-manufacturing"
    },
    {
      title: "Transportation & Logistics",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/transportation-logistics"
    },
    {
      title: "Medicine and health care",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/medicine-healthcare"
    },
    {
      title: "Banks & Insurance",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/banks-insurance"
    },
    {
      title: "Consulting Providers",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/consulting-providers"
    },
    {
      title: "Non-profit",
      image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/non-profit"
    },
  ];

  // Function to handle navigation with scroll to top
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10">
          <p className="text-bigebrains-blue font-semibold mb-2">HOW WE DO</p>
          <h2 className="text-3xl md:text-4xl font-bold text-bigebrains-darkblue mb-4">
            Solving IT challenges in every <br className="hidden sm:block" />
            industry, every day.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Link 
              to={industry.link} 
              key={index} 
              onClick={handleScrollToTop}
            >
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <div className="relative h-60">
                  <img 
                    src={industry.image} 
                    alt={industry.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-semibold text-white">{industry.title}</h3>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link to="/Indus" onClick={handleScrollToTop}>
            <Button variant="outline" className="border-bigebrains-blue text-bigebrains-blue hover:bg-bigebrains-blue hover:text-white px-8 py-6 text-lg">
              View all industries
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Industries;