const News = () => {
  const news = [
    {
      id: 1,
      title: 'Tesla Unveils New Electric Car Model',
      date: 'February 10, 2024',
      description: 'Tesla has revealed its latest electric car model, boasting enhanced range and performance, along with new advanced autonomous driving features.',
    },
    {
      id: 2,
      title: 'Formula 1 Introduces New Regulations for Next Season',
      date: 'March 5, 2024',
      description: 'Formula 1 has announced new regulations aimed at improving competition and safety, including changes to car design, engine specifications, and race weekend format.',
    },
    {
      id: 3,
      title: 'Mercedes-Benz to Release Luxury SUV with AI Technology',
      date: 'April 20, 2024',
      description: 'Mercedes-Benz has announced plans to launch a new luxury SUV equipped with advanced artificial intelligence technology, promising a seamless driving experience.',
    },
    {
      id: 4,
      title: 'Ford Recalls Thousands of Vehicles Due to Safety Concerns',
      date: 'May 15, 2024',
      description: 'Ford has issued a recall for thousands of vehicles due to safety concerns, citing potential issues with brakes and airbag systems. Owners are advised to contact their nearest dealership for inspection and repairs.',
    },
    {
      id: 5,
      title: 'Nissan Unveils Concept Electric Sports Car',
      date: 'June 8, 2024',
      description: 'Nissan has revealed a concept electric sports car, showcasing the brand\'s commitment to electric mobility and high-performance driving.',
    },
    {
      id: 6,
      title: 'Toyota Partners with SpaceX to Develop Lunar Rover',
      date: 'July 25, 2024',
      description: 'Toyota has teamed up with SpaceX to collaborate on the development of a lunar rover for future manned missions to the Moon, aiming to revolutionize space exploration.',
    },
    {
      id: 7,
      title: 'Volkswagen Announces Plans for Fully Autonomous Car',
      date: 'August 12, 2024',
      description: 'Volkswagen has announced its intentions to launch a fully autonomous car within the next decade, aiming to lead the industry in self-driving technology and innovation.',
    },
    {
      id: 8,
      title: 'Porsche Unveils Limited Edition Supercar to Celebrate Anniversary',
      date: 'September 30, 2024',
      description: 'Porsche has revealed a limited edition supercar to commemorate its anniversary, featuring exclusive design elements and enhanced performance capabilities.',
    },
    {
      id: 9,
      title: 'General Motors Invests Billions in Electric Vehicle Development',
      date: 'October 18, 2024',
      description: 'General Motors has announced a multi-billion-dollar investment in electric vehicle development, signaling its commitment to transitioning towards sustainable and emission-free transportation.',
    },
  ];
  
  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <h2 className="text-3xl font-semibold mb-8 text-center">News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map(event => (
          <div key={event.id} className="bg-gray-300 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
            <p className="text-gray-700 mb-2">{event.date}</p>
            <p className="text-gray-700">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;