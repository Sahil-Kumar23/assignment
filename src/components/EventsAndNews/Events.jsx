const Events = () => {
    // Dummy data for events
    const events = [
      {
        id: 1,
        title: 'Daytona 500',
        date: 'February 20, 2024',
        description: 'The Daytona 500 is a 500-mile-long NASCAR Cup Series motor race held annually at Daytona International Speedway in Daytona Beach, Florida.',
      },
      {
        id: 2,
        title: 'Monaco Grand Prix',
        date: 'May 26, 2024',
        description: 'The Monaco Grand Prix is a Formula One motor race held each year on the Circuit de Monaco. It is considered one of the most prestigious automobile races in the world.',
      },
      {
        id: 3,
        title: '24 Hours of Le Mans',
        date: 'June 15-16, 2024',
        description: 'The 24 Hours of Le Mans is the world\'s oldest active sports car race in endurance racing, held annually near the town of Le Mans, France.',
      },
      {
        id: 4,
        title: 'Indianapolis 500',
        date: 'May 26, 2024',
        description: 'The Indianapolis 500 is an automobile race held annually at Indianapolis Motor Speedway in Speedway, Indiana, United States.',
      },
      {
        id: 5,
        title: 'Bathurst 1000',
        date: 'October 13, 2024',
        description: 'The Bathurst 1000 is a 1,000-kilometer touring car race held annually at Mount Panorama Circuit in Bathurst, New South Wales, Australia.',
      },
      {
        id: 6,
        title: 'Monza Grand Prix',
        date: 'September 8, 2024',
        description: 'The Monza Grand Prix is a Formula One motor race held at the Autodromo Nazionale Monza in Monza, Italy.',
      },
      {
        id: 7,
        title: 'Suzuka Grand Prix',
        date: 'October 13, 2024',
        description: 'The Suzuka Grand Prix is a Formula One motor race held at the Suzuka International Racing Course in Suzuka, Japan.',
      },
      {
        id: 8,
        title: 'Australian Grand Prix',
        date: 'March 17, 2024',
        description: 'The Australian Grand Prix is a Formula One motor race held annually in Australia since 1985.',
      },
      {
        id: 9,
        title: 'Spa-Francorchamps Grand Prix',
        date: 'August 25, 2024',
        description: 'The Spa-Francorchamps Grand Prix is a Formula One motor race held at Circuit de Spa-Francorchamps in Stavelot, Belgium.',
      },
    ];
  
    return (
      <div className="container mx-auto px-4 py-8 bg-white">
        <h2 className="text-3xl font-semibold mb-8 text-center">Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map(event => (
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
  
  export default Events;