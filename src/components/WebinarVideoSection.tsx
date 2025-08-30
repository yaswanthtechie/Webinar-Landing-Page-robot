import React from 'react';
import { Play } from 'lucide-react';

const WebinarVideoSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Watch the Teaser
          </h2>
          <p className="text-lg text-white/70 font-light max-w-2xl mx-auto">
            Get a quick preview of what you'll learn in the free live webinar.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-4 sm:p-8">
            {/* Video Container - 16:9 Aspect Ratio */}
            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black/40">
              {/* Placeholder with Play Button */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-900/50 to-purple-900/50">
                <div className="text-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-white/30 transition-all duration-300 cursor-pointer group">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <p className="text-white/80 text-sm font-light">
                    Click to watch teaser
                  </p>
                </div>
              </div>
              
              {/* You can replace this with actual video embed */}
              {/* 
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
                title="Webinar Teaser"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              */}
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-white/60 text-sm font-light">
                Duration: 45 seconds • Preview of full 2-hour masterclass
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebinarVideoSection;
