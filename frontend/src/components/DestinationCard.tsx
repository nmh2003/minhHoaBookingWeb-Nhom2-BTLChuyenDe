
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from './ui/card';

interface DestinationProps {
  id: string;
  name: string;
  image: string;
  hotelCount: number;
  featured?: boolean;
}

const DestinationCard = ({ destination }: { destination: DestinationProps }) => {
  return (
    <Link to={`/destinations/${destination.id}`}>
      <Card className="overflow-hidden hotel-card h-full">
        <div className="relative h-56 w-full">
          <img 
            src={destination.image} 
            alt={destination.name} 
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-bold">{destination.name}</h3>
            <p className="text-sm text-gray-200">{destination.hotelCount} hotels</p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default DestinationCard;
