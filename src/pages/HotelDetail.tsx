
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { hotels } from '@/data/mockData';
import { MapPin, Star, Wifi, Coffee, Utensils, Dumbbell, Check } from 'lucide-react';

const HotelDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [adults, setAdults] = useState('2');
  const [children, setChildren] = useState('0');
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Find the hotel from the mock data
  const hotel = hotels.find(h => h.id === id);
  
  if (!hotel) {
    return (
      <Layout>
        <div className="container mx-auto py-16 px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Hotel Not Found</h1>
          <p className="text-gray-600 mb-8">We couldn't find the hotel you're looking for.</p>
          <Button asChild>
            <a href="/hotels">Browse All Hotels</a>
          </Button>
        </div>
      </Layout>
    );
  }
  
  // Mock room types
  const roomTypes = [
    {
      name: "Standard Room",
      price: hotel.price,
      maxGuests: 2,
      bedType: "1 Queen Bed",
      amenities: ["Free WiFi", "TV", "Air Conditioning", "En-suite Bathroom"]
    },
    {
      name: "Deluxe Room",
      price: hotel.price * 1.3,
      maxGuests: 2,
      bedType: "1 King Bed",
      amenities: ["Free WiFi", "TV", "Air Conditioning", "En-suite Bathroom", "City View", "Mini Bar"]
    },
    {
      name: "Suite",
      price: hotel.price * 1.8,
      maxGuests: 4,
      bedType: "1 King Bed + 1 Sofa Bed",
      amenities: ["Free WiFi", "TV", "Air Conditioning", "Separate Living Area", "Luxury Bathroom", "Premium View", "Mini Bar", "Coffee Machine"]
    }
  ];
  
  // Mock amenity icons
  const amenityIcons: Record<string, React.ReactNode> = {
    "Free WiFi": <Wifi size={16} />,
    "Pool": <div className="w-4 h-4 flex items-center justify-center text-xs">🏊</div>,
    "Spa": <div className="w-4 h-4 flex items-center justify-center text-xs">💆</div>,
    "Restaurant": <Utensils size={16} />,
    "Fitness Center": <Dumbbell size={16} />,
    "Bar": <Coffee size={16} />
  };
  
  return (
    <Layout>
      {/* Hero Image */}
      <div 
        className="h-[400px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hotel.image})` }}
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hotel Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div>
            <div className="flex items-center mb-2">
              <Badge className="bg-hotel-300 mr-2">{hotel.rating} Stars</Badge>
              {hotel.featured && <Badge variant="outline">Featured</Badge>}
            </div>
            <h1 className="text-3xl font-bold mb-2">{hotel.name}</h1>
            <div className="flex items-center text-gray-600 mb-4">
              <MapPin size={18} className="mr-1" />
              <span>{hotel.location}</span>
            </div>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={18} 
                  className={i < Math.floor(hotel.rating) ? "fill-yellow-500 text-yellow-500" : "fill-gray-200 text-gray-200"} 
                />
              ))}
              <span className="ml-2 text-gray-600">{hotel.rating.toFixed(1)} ({Math.floor(Math.random() * 500) + 50} reviews)</span>
            </div>
          </div>
          
          <div className="mt-4 md:mt-0">
            <div className="text-right">
              <span className="text-2xl font-bold text-hotel-400">${hotel.price}</span>
              <span className="text-gray-500"> / night</span>
            </div>
            {hotel.discount && (
              <div className="text-sm text-green-600 font-medium">
                {hotel.discount}% off the regular price
              </div>
            )}
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Hotel Info */}
          <div className="w-full lg:w-2/3">
            <Tabs defaultValue="overview">
              <TabsList className="w-full mb-6">
                <TabsTrigger value="overview" className="flex-1">Overview</TabsTrigger>
                <TabsTrigger value="rooms" className="flex-1">Rooms</TabsTrigger>
                <TabsTrigger value="amenities" className="flex-1">Amenities</TabsTrigger>
                <TabsTrigger value="reviews" className="flex-1">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">About This Hotel</h2>
                  <p className="text-gray-600 mb-4">{hotel.description}</p>
                  <p className="text-gray-600">
                    Located in the heart of {hotel.location.split(',')[0]}, this hotel offers easy access to major attractions and transportation. 
                    Guests love the convenient location, exceptional service, and comfortable accommodations.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold mb-4">Top Amenities</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {hotel.amenities?.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-2">
                        {amenityIcons[amenity] || <Check size={16} className="text-hotel-300" />}
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="rooms" className="space-y-6">
                <h2 className="text-xl font-semibold mb-4">Available Room Types</h2>
                <div className="space-y-4">
                  {roomTypes.map((room, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div>
                          <h3 className="font-semibold text-lg">{room.name}</h3>
                          <p className="text-sm text-gray-600">{room.bedType} • Up to {room.maxGuests} guests</p>
                          <div className="mt-2 space-y-1">
                            {room.amenities.map((amenity, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <Check size={14} className="text-hotel-300" />
                                <span className="text-sm">{amenity}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="text-right">
                          <div>
                            <span className="text-xl font-bold text-hotel-400">${Math.floor(room.price)}</span>
                            <span className="text-gray-500"> / night</span>
                          </div>
                          <p className="text-xs text-gray-500 mb-2">Includes taxes & fees</p>
                          <Button size="sm">Select Room</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="amenities" className="space-y-6">
                <h2 className="text-xl font-semibold mb-4">Hotel Amenities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                  {[
                    "Free WiFi", "Swimming Pool", "Spa and Wellness Center",
                    "Restaurant", "Bar/Lounge", "Fitness Center",
                    "24-Hour Front Desk", "Airport Shuttle", "Room Service",
                    "Business Center", "Concierge Service", "Laundry Service",
                    "Parking", "Air Conditioning", "Heating",
                    "Elevator", "Non-smoking Rooms", "Family Rooms"
                  ].map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check size={16} className="text-hotel-300" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="space-y-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <h2 className="text-xl font-semibold">Guest Reviews</h2>
                  <div>
                    <Badge className="bg-hotel-300">
                      {hotel.rating.toFixed(1)} / 5 - Excellent
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {[...Array(3)].map((_, index) => (
                    <div key={index} className="border-b pb-6 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                          <div>
                            <h4 className="font-medium">Guest {index + 1}</h4>
                            <p className="text-xs text-gray-500">Stayed in October 2024</p>
                          </div>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={14} 
                              className={i < Math.floor(hotel.rating) ? "fill-yellow-500 text-yellow-500" : "fill-gray-200 text-gray-200"} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600">
                        {index === 0 ? (
                          "Had an amazing stay at this hotel. The room was spacious and clean, and the staff was extremely helpful and friendly. The location was perfect for exploring the city."
                        ) : index === 1 ? (
                          "Great experience overall. The amenities were excellent, especially the pool and restaurant. Would definitely stay here again on my next trip."
                        ) : (
                          "Comfortable beds, clean rooms, and fantastic service. The breakfast was delicious and had many options. Highly recommended!"
                        )}
                      </p>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full">View All Reviews</Button>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Right Column - Booking Widget */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white border rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Book Your Stay</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Check-in / Check-out</label>
                  <div>
                    <Calendar 
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="border rounded-md p-3 pointer-events-auto"
                      disabled={(date) => date < new Date()}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1 block">Guests</label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-gray-500 block mb-1">Adults</label>
                      <Select value={adults} onValueChange={setAdults}>
                        <SelectTrigger>
                          <SelectValue placeholder="Adults" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                          <SelectItem value="4">4</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="text-xs text-gray-500 block mb-1">Children</label>
                      <Select value={children} onValueChange={setChildren}>
                        <SelectTrigger>
                          <SelectValue placeholder="Children" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0">0</SelectItem>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between mb-2">
                    <span>1 night</span>
                    <span>${hotel.price}</span>
                  </div>
                  <div className="flex justify-between mb-2 text-sm text-gray-600">
                    <span>Taxes & fees</span>
                    <span>${Math.floor(hotel.price * 0.1)}</span>
                  </div>
                  {hotel.discount && (
                    <div className="flex justify-between mb-2 text-green-600 text-sm font-medium">
                      <span>Discount</span>
                      <span>-${Math.floor(hotel.price * hotel.discount / 100)}</span>
                    </div>
                  )}
                  <div className="flex justify-between font-bold text-lg mt-2 pt-2 border-t">
                    <span>Total</span>
                    <span>
                      ${hotel.discount
                        ? Math.floor(hotel.price * (1 - hotel.discount / 100) + hotel.price * 0.1)
                        : Math.floor(hotel.price + hotel.price * 0.1)}
                    </span>
                  </div>
                </div>
                
                <Button className="w-full">Reserve Now</Button>
                <p className="text-xs text-gray-500 text-center">No payment required today</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HotelDetail;
