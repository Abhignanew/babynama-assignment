"use client";

import React from "react";
import { Calendar, Play, Users } from "lucide-react";
import WebinarCard, { Webinar } from "../components/WebinarCard";

// Sample webinar data with proper typing
const webinars: Webinar[] = [
  {
    id: 1,
    title: "Understanding Infant Sleep Patterns",
    speaker: "Dr. Sumitra Meena",
    date: "15-06-2025",
    time: "10:00 AM",
    duration: "45 mins",
    attendees: 234,
    category: "Sleep Health",
    description: "Learn evidence-based strategies for healthy infant sleep patterns and common challenges new parents face.",
    status: "upcoming"
  },
  {
    id: 2,
    title: "Nutrition Basics for New Parents",
    speaker: "Dr. Arjun Malhotra",
    date: "20-06-2025",
    time: "2:00 PM",
    duration: "60 mins",
    attendees: 189,
    category: "Nutrition",
    description: "Essential nutrition guidelines for infants and feeding best practices for optimal growth and development.",
    status: "upcoming"
  },
  {
    id: 3,
    title: "Postpartum Mental Health Awareness",
    speaker: "Dr. Nisha Rao",
    date: "25-06-2025",
    time: "6:00 PM",
    duration: "50 mins",
    attendees: 156,
    category: "Mental Health",
    description: "Understanding postpartum mental health, recognizing symptoms, and finding support resources.",
    status: "upcoming"
  },
  
];

export default function WebinarsPage() {
   const handleViewDetails = (id: string | number): void => {
    console.log(`View details for webinar ID: ${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-90"></div>
        <div className="relative px-6 py-16">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-4">
              Upcoming Webinars
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join our expert-led sessions on parenting, health, and wellness. 
              Learn from medical professionals and connect with other parents.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="text-sm font-medium">
                  {webinars.length} webinars available this month
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                <Play className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">3</p>
                <p className="text-gray-600">Live Sessions</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">579</p>
                <p className="text-gray-600">Total Attendees</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mr-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">June</p>
                <p className="text-gray-600">This Month</p>
              </div>
            </div>
          </div>
        </div>

        {/* Webinars Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {webinars.map((webinar: Webinar) => (
            <div key={webinar.id}>
              <WebinarCard
                webinar={webinar}
                handleViewDetails={handleViewDetails}
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Don&apos;t Miss Out!
            </h3>
            <p className="text-blue-100 mb-6 max-w-md mx-auto">
              Subscribe to get notified about upcoming webinars and exclusive parenting resources.
            </p>
            <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-50 transition-colors shadow-lg">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}