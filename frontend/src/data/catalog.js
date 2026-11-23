export const rooms = [
  { id: 'auditorium', name: 'Auditorium hall', detail: 'A grand stage for your biggest moments', capacity: 200, price: 5500, icon: '01', image: '/images/room-auditorium.jpg', imageAlt: 'Rows of blue seats in a spacious auditorium' },
  { id: 'conference', name: 'Conference room', detail: 'A focused space for meaningful conversations', capacity: 15, price: 3500, icon: '02', image: '/images/venue-hero.jpg', imageAlt: 'Sunlit modern conference room with a long table' },
  { id: 'presentation', name: 'Presentation room', detail: 'Made for clear ideas and a captive audience', capacity: 50, price: 700, icon: '03', image: '/images/room-presentation.jpg', imageAlt: 'Conference presentation stage with projection screens and seating' },
  { id: 'large-meeting', name: 'Large meeting room', detail: 'Room to think, plan, and collaborate', capacity: 10, price: 900, icon: '04', image: '/images/room-large-meeting.jpg', imageAlt: 'Team meeting around a large conference table' },
  { id: 'small-meeting', name: 'Small meeting room', detail: 'A comfortable setting for smaller teams', capacity: 5, price: 1100, icon: '05', image: '/images/room-small-meeting.jpg', imageAlt: 'Small group collaborating around a meeting table' },
]

export const addons = [
  { id: 'speakers', name: 'Speakers', detail: 'Room-filling sound', price: 35, icon: '♪', image: '/images/addon-speakers.jpg', imageAlt: 'Close-up of a professional speaker grille' },
  { id: 'microphones', name: 'Microphones', detail: 'Make every voice heard', price: 45, icon: '◉', image: '/images/addon-microphones.jpg', imageAlt: 'Microphone ready for a conference presentation' },
  { id: 'whiteboards', name: 'Whiteboards', detail: 'Space for the next big idea', price: 80, icon: '▤', image: '/images/addon-whiteboards.jpg', imageAlt: 'Colleagues working together at a whiteboard' },
  { id: 'projectors', name: 'Projectors', detail: 'Bring your presentation to life', price: 200, icon: '▱', image: '/images/addon-projectors.jpg', imageAlt: 'Projector and screen set up in a meeting room' },
  { id: 'signage', name: 'Signage', detail: 'Help guests find their way', price: 80, icon: '↗', image: '/images/addon-signage.jpg', imageAlt: 'Directional sign guiding guests to a conference' },
]

export const meals = [
  { id: 'breakfast', name: 'Breakfast', detail: 'A fresh start to the day', price: 50, image: '/images/meal-breakfast.jpg', imageAlt: 'Fresh fruit and pastries at a breakfast buffet' },
  { id: 'lunch', name: 'Lunch', detail: 'A delicious midday break', price: 60, image: '/images/meal-lunch.jpg', imageAlt: 'Fresh lunch bowl with vegetables and grains' },
  { id: 'high-tea', name: 'High tea', detail: 'A little pause, served beautifully', price: 25, image: '/images/meal-high-tea.jpg', imageAlt: 'Tea and pastries served for afternoon tea' },
  { id: 'dinner', name: 'Dinner', detail: 'A lovely close to the day', price: 70, image: '/images/meal-dinner.jpg', imageAlt: 'A dinner spread prepared for sharing' },
]

export const catalog = [...rooms, ...addons, ...meals]
