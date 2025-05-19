import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Phone } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    helpType: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.firstName || !formData.email || !formData.phone || !formData.helpType) {
      setStatus("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setStatus("Sending...");

    // Google Apps Script URL - you'll need to replace this with your deployed script URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwWU7sBI9SZ_MiL_j7AMQ23_s99wz8jzja81PMh3qUHwE8QgBzJsvKU0aXUGTtP27z9dQ/exec';

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors', // This is important for cross-origin requests to Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString()
        }),
      });

      // Since mode is no-cors, we can't actually read the response
      // So we assume it was successful if no error was thrown
      setStatus("Submitted successfully! Check your email.");
      setFormData({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phone: '',
        helpType: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact-section">
      {/* Heading Section */}
      <section className="bg-bigebrains-darkblue text-white py-20 pb-28">
        <div className="container px-4 md:px-6">
          <p className="text-sm font-semibold mb-2 uppercase tracking-wide">What we use</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight whitespace-nowrap">
            Partner with Us for Comprehensive IT
          </h2>
        </div>
      </section>

      {/* Form + Info Section */}
      <section className="relative -mt-16 z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-xl shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-10 p-10">
            {/* Left: Info */}
            <div className="text-bigebrains-darkblue space-y-6">
              <p className="text-lg">
                We're happy to answer any questions you may have and help you determine which of our services best fit your needs.
              </p>
              <div className="flex items-center text-lg font-semibold">
                <Phone className="h-5 w-5 text-bigebrains-blue mr-2" />
                Call us at: <span className="ml-1 font-bold">+91 9666717099</span>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Your benefits:</h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Client-oriented', 'Results-driven',
                    'Independent', 'Problem-solving',
                    'Competent', 'Transparent'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center text-base">
                      <CheckCircle className="h-5 w-5 text-bigebrains-blue mr-2" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">What happens next?</h3>
                <div className="space-y-3">
                  {[
                    "We Schedule a call at your convenience",
                    "We do a discovery and consulting meeting",
                    "We prepare a proposal"
                  ].map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-bigebrains-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                        {index + 1}
                      </div>
                      <p className="text-base">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="p-6 bg-bigebrains-gray rounded-lg">
              <h3 className="text-2xl font-semibold text-bigebrains-darkblue mb-6">
                Schedule a Free Consultation
              </h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name*</Label>
                    <Input 
                      id="firstName" 
                      value={formData.firstName} 
                      onChange={handleChange} 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input 
                      id="lastName" 
                      value={formData.lastName} 
                      onChange={handleChange} 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company / Organization</Label>
                  <Input 
                    id="company" 
                    value={formData.company} 
                    onChange={handleChange} 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Company email*</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone*</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="helpType">How Can We Help You?*</Label>
                  <select
                    id="helpType"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={formData.helpType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select option*</option>
                    <option>IT Consulting</option>
                    <option>Managed Services</option>
                    <option>Web Development</option>
                    <option>Mobile Development</option>
                    <option>Cloud Services</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-bigebrains-blue hover:bg-bigebrains-darkblue text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
                {status && (
                  <p className={`text-center mt-2 text-sm ${
                    status.includes("success") ? "text-green-600" : 
                    status.includes("error") ? "text-red-600" : "text-gray-700"
                  }`}>
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;