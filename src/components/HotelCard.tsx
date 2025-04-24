
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Star, MapPin } from 'lucide-react';

export interface HotelProps {
  id: string;
  name: string;
  location: string;
  image: string;
  price: number;
  rating: number;
  discount?: number;
  featured?: boolean;
}

const HotelCard = ({ hotel }: { hotel: HotelProps }) => {
  return (
    <Link to={`/hotels/${hotel.id}`}>
      <Card className="overflow-hidden hotel-card h-full">
        <div className="relative">
          <img 
            src={hotel.image} 
            alt={hotel.name} 
            className="h-48 w-full object-cover"
          />
          
          {hotel.featured && (
            <Badge className="absolute top-2 left-2 bg-hotel-300 hover:bg-hotel-400">
              Featured
            </Badge>
          )}
          
          {hotel.discount && (
            <Badge className="absolute top-2 right-2 bg-red-500 hover:bg-red-600">
              {hotel.discount}% OFF
            </Badge>
          )}
        </div>
        
        <CardContent className="pt-4">
          <h3 className="font-semibold text-lg mb-1 line-clamp-1">{hotel.name}</h3>
          
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <MapPin size={14} className="mr-1 text-hotel-400" />
            <span className="line-clamp-1">{hotel.location}</span>
          </div>
          
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center">
              <div className="flex items-center text-yellow-500 mr-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    className={i < Math.floor(hotel.rating) ? "fill-yellow-500" : "fill-gray-200"} 
                  />
                ))}
              </div>
              <span className="text-sm font-medium">{hotel.rating.toFixed(1)}</span>
            </div>
            
            <div>
              <span className="text-lg font-bold text-hotel-400">{hotel.price.toLocaleString('vi-VN')}</span>
              <span className="text-sm text-gray-500"> VNĐ/đêm</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default HotelCard;
