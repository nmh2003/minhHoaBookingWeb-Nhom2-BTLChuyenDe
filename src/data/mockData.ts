
export const hotels = [
  {
    id: "1",
    name: "Grand Hotel Luxury",
    location: "Paris, France",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    price: 299,
    rating: 4.8,
    featured: true,
    amenities: ["Free WiFi", "Pool", "Spa", "Restaurant", "Fitness Center"],
    description: "Experience luxury at its finest in the heart of Paris. Our 5-star hotel offers spectacular views of the Eiffel Tower and exceptional service that will make your stay unforgettable."
  },
  {
    id: "2",
    name: "Seaside Resort & Spa",
    location: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    price: 189,
    rating: 4.5,
    discount: 15,
    amenities: ["Beach Access", "Infinity Pool", "Spa", "Restaurant", "Bar"],
    description: "Relax in paradise at our beautiful beachfront resort in Bali. Enjoy stunning ocean views, world-class dining, and rejuvenating spa treatments."
  },
  {
    id: "3",
    name: "City Center Boutique",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    price: 249,
    rating: 4.6,
    amenities: ["Free WiFi", "Bar", "Restaurant", "Concierge", "Business Center"],
    description: "Stay in the heart of Manhattan in our stylish boutique hotel. Walk to famous attractions, experience the city's vibrant nightlife, and return to your comfortable, modern room."
  },
  {
    id: "4",
    name: "Mountain Lodge Retreat",
    location: "Aspen, Colorado",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    price: 329,
    rating: 4.7,
    featured: true,
    amenities: ["Fireplace", "Mountain View", "Ski-in/Ski-out", "Hot Tub", "Restaurant"],
    description: "Escape to our cozy mountain lodge surrounded by breathtaking alpine scenery. Perfect for ski enthusiasts in winter and hiking lovers in summer."
  },
  {
    id: "5",
    name: "Desert Oasis Resort",
    location: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1589923158684-a21056415766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    price: 399,
    rating: 4.9,
    discount: 10,
    amenities: ["Private Pool", "Desert Views", "Spa", "Multiple Restaurants", "Luxury Transfers"],
    description: "Indulge in luxury amidst the Arabian desert. Our resort offers private villas with pools, desert adventures, and exceptional Arabian hospitality."
  },
  {
    id: "6",
    name: "Historic Town Inn",
    location: "Prague, Czech Republic",
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    price: 159,
    rating: 4.4,
    amenities: ["Free WiFi", "Historic Building", "Restaurant", "Bar", "Walking Tours"],
    description: "Stay in a beautifully restored medieval building in Prague's historic center. Experience the charm of old Europe with modern comforts."
  }
];

export const destinations = [
  {
    id: "1",
    name: "Paris",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
    hotelCount: 245,
    featured: true
  },
  {
    id: "2",
    name: "Bali",
    image: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    hotelCount: 187,
    featured: true
  },
  {
    id: "3",
    name: "New York",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    hotelCount: 320,
    featured: true
  },
  {
    id: "4",
    name: "Tokyo",
    image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80",
    hotelCount: 215
  }
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    comment: "Our stay at Grand Hotel Luxury exceeded all expectations. The staff went above and beyond to ensure our comfort and the views of Paris were breathtaking!",
    date: "October 12, 2024"
  },
  {
    name: "Michael Chen",
    avatar: "https://i.pravatar.cc/150?img=2",
    rating: 4,
    comment: "The Seaside Resort in Bali was paradise! Beautiful beaches, amazing food, and such a relaxing atmosphere. Can't wait to return next year!",
    date: "September 28, 2024"
  },
  {
    name: "Emma Williams",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 5,
    comment: "The Mountain Lodge was the perfect winter getaway. Skiing right from our door and warming up by the fireplace in the evening was magical.",
    date: "October 5, 2024"
  }
];
