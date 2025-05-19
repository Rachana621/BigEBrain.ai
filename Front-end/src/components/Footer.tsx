import React from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaAngleDoubleUp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const googleMapsUrl = `https://www.google.com/search?q=17.450491718845207%2C+78.38705545303921&sourceid=chrome&ie=UTF-8`;

  const socialLinks = {
    linkedin: "https://www.linkedin.com/company/bigclasses-ai/",
    github: "https://x.com/bigclasses_ai",
    facebook: "https://www.facebook.com/bigclassesai/",
    twitter: "https://twitter.com/bigebrains",
    youtube: "https://www.youtube.com/@BigClasses_AI",
  };

  return (
    <footer className="bg-black text-white pt-16 pb-24 relative">
      {/* Top Grid - Logo | Company | Services */}
      <div className="container mx-auto px-4 grid md:grid-cols-[1.5fr_1fr_1fr] gap-8">
        {/* Logo & Description */}
        <div>
          <img
            src="/lovable-uploads/whitebeb.png"
            alt="BigEBrains Logo"
            className="h-16 mb-4"
          />
          <p className="text-gray-300 text-sm leading-relaxed">
            BigEBrains pioneers smart digital solutions, AI enhancements, and
            business innovation through scalable technologies. Focused on
            quality, sustainability, and next-gen services.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link to="/about" className="hover:text-teal-400">Our Mission</Link></li>
            <li><Link to="/services" className="hover:text-teal-400">Services</Link></li>
            <li><Link to="/contact" className="hover:text-teal-400">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>AI Solutions</li>
            <li>Mobile & Web Development</li>
            <li>Cloud & Cybersecurity</li>
            <li>IT Consulting</li>
          </ul>
        </div>
      </div>

      {/* Contact Info */}
      <div className="container mx-auto px-4 mt-16 border-t border-gray-700 pt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Phone Numbers */}
        <div>
          <h4 className="text-lg font-semibold flex items-center mb-3">
            <FaPhone className="mr-2 text-teal-500" /> Phone Numbers
          </h4>
          <div className="text-gray-300 text-sm pl-6">
            <p>Sales: +91 9666523199</p>
            <p>Support: +91 9666717099</p>
          </div>
        </div>

        {/* Emails */}
        <div>
          <h4 className="text-lg font-semibold flex items-center mb-3">
            <FaEnvelope className="mr-2 text-teal-500" /> Email
          </h4>
          <div className="text-gray-300 text-sm pl-6">
            <p>info@bigebrains.com</p>
            <p>support@bigebrains.com</p>
            <p>careers@bigebrains.com</p>
          </div>
        </div>

        {/* Address */}
        <div className="lg:col-span-2">
          <h4 className="text-lg font-semibold flex items-center mb-3">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-teal-400 transition-colors"
            >
              <FaMapMarkerAlt className="mr-2 text-teal-500" /> Address
            </a>
          </h4>
          <div className="text-gray-300 text-sm pl-6">
            <p>BigEBrains Headquarters</p>
            <p>
              Big E Brains, 4th Floor, Maa Nilayam, opposite SRM WESTIN
              Hospital, Jaihind Colony, Silicon Valley, Madhapur, Hyderabad,
              Telangana 500081.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-16 pt-6 px-4 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} BigEBrains. All rights reserved.</p>
        <div className="flex space-x-5 mt-4 md:mt-0 text-lg">
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-white" aria-label="GitHub"><FaGithub /></a>
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white" aria-label="Facebook"><FaFacebook /></a>
          <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-white" aria-label="Twitter"><FaTwitter /></a>
          <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-white" aria-label="YouTube"><FaYoutube /></a>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg transition duration-300 z-50"
        aria-label="Scroll to top"
      >
        <FaAngleDoubleUp className="w-4 h-4" />
      </button>
    </footer>
  );
};

export default Footer;