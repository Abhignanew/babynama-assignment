import React, { useState } from "react";
import { Calendar, User, Clock, ChevronRight, Play, Users } from "lucide-react";

// Type definitions
export interface Webinar {
  id: string | number;
  title: string;
  speaker: string;
  date: string;
  time: string;
  duration: string;
  attendees: number;
  category: string;
  description: string;
  status: string;
}

export interface WebinarCardProps {
  webinar: Webinar;
  handleViewDetails: (id: string | number) => void;
}

export default function WebinarCard({ webinar, handleViewDetails }: WebinarCardProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  
  const getCategoryColor = (category: string): string => {
    const colors: Record<string, string> = {
      "Sleep Health": "bg-purple-100 text-purple-800 border-purple-200",
      "Nutrition": "bg-green-100 text-green-800 border-green-200",
      "Mental Health": "bg-blue-100 text-blue-800 border-blue-200"
    };
    return colors[category] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  return (
    <div 
      className={`group relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
        isHovered ? 'scale-105' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      
      <div className="p-6">
        {/* Category Badge */}
        <div className="flex justify-between items-start mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(webinar.category)}`}>
            {webinar.category}
          </span>
          <div className="flex items-center text-gray-500 text-sm">
            <Users className="w-4 h-4 mr-1" />
            {webinar.attendees}
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
          {webinar.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 overflow-hidden" style={{
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical'
        }}>
          {webinar.description}
        </p>

        {/* Speaker */}
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mr-3">
            <User className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="font-medium text-gray-900">{webinar.speaker}</p>
            <p className="text-xs text-gray-500">Medical Expert</p>
          </div>
        </div>

        {/* Date and Time */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">{webinar.date}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-2" />
            <span className="text-sm">{webinar.time}</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center group shadow-lg hover:shadow-xl"
          onClick={() => handleViewDetails(webinar.id)}
        >
          <Play className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
          View Details
          <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Hover effect overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 transition-opacity duration-300 pointer-events-none ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`} />
    </div>
  );
}
