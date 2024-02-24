import { useState } from "react";
import Events from "./Events";
import News from "./News";
import { Link } from "react-router-dom";

const EventsNewsSection = () => {

  const [ showEvents , setShowEvents ] = useState(true);
  const [ showNews , setShowNews ] = useState(false);

  const handleShowEvents = () => {
    setShowEvents(true);
    setShowNews(false);
  }

  const handleShowNews = () => {
    setShowEvents(false);
    setShowNews(true);
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <div className="flex justify-left mb-2">
        <Link
          onClick={handleShowEvents}
          className={`px-6 py-2 rounded-l-xl cursor-pointer ${showEvents ? 'bg-dark-blue text-orange-700' : 'bg-gray-400 text-gray-800'}`}
        >
          Events
        </Link>
        <Link
          onClick={handleShowNews}
          className={`px-6 py-2 rounded-r-xl cursor-pointer ${showNews ? 'bg-dark-blue text-orange-700' : 'bg-gray-400 text-gray-800'}`}
        >
          News
        </Link>
      </div>

      <div>
        {showEvents && <Events />}
        {showNews && <News />}
      </div>
    </div>
  );
}

export default EventsNewsSection;

