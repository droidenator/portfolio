export const projects = [
  {
    name: 'Explore LEVEL',
    description: `LEVEL wanted an immersive way for potential tenants to explore their apartments. After much brainstorming, it was decided to build an interactive exploded-view floorplan.

    Users can click through each floor and view the details for specific apartments. Entering the data for the apartments was done with a custom Drupal component that allowed an admin to use a GUI interface to trace each apartment and enter the details.

    The LEVEL website was built using Drupal 7. The admin tool for adding apartments is a custom Drupal module written in PHP and JavaScript. The floor plan explorer is built using jQuery, Raphael, and custom JavaScript.

    This website won the 2012 "Best of Interactive" Addy award in Oklahoma.`,
    video: [{ url: 'https://vimeo.com/369484760', image: 'images/level.png' }],
    technologies: 'JavaScript, HTML, CSS, PHP',
    urls: [{ url: 'https://levelokc.com/the-space/level', text: 'LEVEL' }],
  },
  {
    name: 'Sundance Airport Automated Weather Observation Service (AWOS)',
    description: `Sundance Airport needed a new application to display AWOS information and replace the legacy flash version provided by the AWOS vendor.

    Two versions were designed and built. The first version prioritized speed and ease of use for mobile and desktop users. The mobile version is built to be easy to use for pilots checking the current conditions from their phones.

    The other version was developed for the large display behind the front desk of Sundance Airport. It includes real-time weather effects and up-to-date weather for frequent destinations.

    The AWOS application is built in React. The animations are a result of my work with our UX designer who designed the application. I also built a Node.js server for fetching the AWOS and weather data. SSE is used to stream data from the server to the client in realtime.`,
    video: [
      { url: 'https://vimeo.com/369484922', image: 'images/sundance-tv.png' },
      {
        url: 'https://vimeo.com/369484940',
        image: 'images/sundance-desktop.png',
      },
    ],
    technologies: 'Javascript, HTML, CSS, React, Server Sent Events, node.js',
    urls: [
      { url: 'http://awos.sundanceairport.com/tv', text: 'TV Version' },
      {
        url: 'http://awos.sundanceairport.com',
        text: 'Desktop/Mobile version',
      },
    ],
  },
  {
    name: 'Music Trail Itinerary and Homepage Map',
    description: `The Oklahoma Tourism department wanted to create an interactive way for visitors to learn more about Oklahoma's musical history.

    The music trail homepage map is generated using HTML and JavaScript. Site administrators are able to place points on the map and add content for each popup.

    The music trail itineraries section provides visitors with itineraries for various musical artists. Site administrators are able to create new itineraries and add and order various starts. The public itineraries pages features tight integration with Google Maps. Each location can easily be displayed via Google maps and driving directions are generated for the entire itinerary and also between each stop on the itinerary.`,
    video: [
      {
        url: 'https://vimeo.com/369484865',
        image: 'images/music-trail-map.png',
      },
      {
        url: 'https://vimeo.com/369484803',
        image: 'images/music-trail-itenary.png',
      },
    ],
    technologies: 'JavaScript, HTML, CSS, PHP',
    urls: [
      {
        url: 'https://www.travelok.com/music-trail/',
        text: 'Music Trail Homepage',
      },
      {
        url: 'https://www.travelok.com/music-trail/itineraries',
        text: 'Music Trail Itineraries',
      },
    ],
  },
  {
    name: 'nJoy Vision Scheduling App',
    description: `nJoy Vision needed to allow patients to schedule appointments online using their appointment scheduling software.

    I wrote a server to interface with the scheduling API. The front end is built using Angular and embedded in a Wordpress site.`,
    video: [{ url: 'https://vimeo.com/369484879', image: 'images/njoy.png' }],
    technologies: 'JavaScript, HTML, CSS, PHP, Angular',
    urls: [
      {
        url: 'https://njoyvision.com/schedule/',
        text: 'nJoy Appointment Scheduling',
      },
    ],
  },
  {
    name: 'PDC Productions Custom Slider',
    description: `I built a custom slider that animated the slider image, headline, and body text separately to help it standout from all the other sliders on the market.

    The website also featured a unique expanding footer.`,
    video: [{ url: 'https://vimeo.com/369484889', image: 'images/pdc.png' }],
    technologies: 'JavaScript, HTML, CSS',
    urls: [],
  },
  {
    name: 'Ruby Red 40 Parallax Effect',
    description: `The Ruby Red 40 was a simple one page application with some information about the event. I animated the clouds and flowers on the landing page using a custom parallax effect.`,
    video: [
      { url: 'https://vimeo.com/369484903', image: 'images/ruby-red.png' },
    ],
    technologies: 'JavaScript, HTML, CSS',
    urls: [],
  },
];
