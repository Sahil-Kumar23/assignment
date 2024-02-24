const AboutSection = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-justify">
      <h2 className="text-3xl font-semibold mb-8 text-center">About the Team</h2>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 md:pr-8">
          <h3 className="text-xl font-semibold mb-4">Mission</h3>
          <p className="text-gray-700">At AutoShowcase, our mission is to create an engaging and informative platform that showcases the latest in automotive innovation, events, and news. We are dedicated to providing enthusiasts and consumers alike with a comprehensive resource to explore and stay updated on the automotive industry. Our key objectives include curating a diverse collection of cars, events, and news articles to cater to a wide audience, fostering a sense of community among automotive enthusiasts, and promoting transparency and authenticity in our content. By delivering high-quality and relevant content, we aim to empower individuals to make informed decisions and foster a deeper appreciation for automotive excellence. Our core values of integrity, passion, and innovation guide us as we strive to become the premier destination for automotive enthusiasts worldwide.</p>
        </div>
        <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <h3 className="text-xl font-semibold mb-4">History</h3>
          <p className="text-gray-700">Insert team history here.</p>
        </div>
      </div>
      <div className="mt-8 mb-8">
        <h3 className="text-xl font-semibold mb-4">Vision</h3>
        <p className="text-gray-700">Insert team vision here.</p>
      </div>
    </div>
  );
}

export default AboutSection;
