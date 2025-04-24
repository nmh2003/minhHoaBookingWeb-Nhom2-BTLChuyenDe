
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import HotelCard from '@/components/HotelCard';
import SearchForm from '@/components/SearchForm';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { hotels } from '@/data/mockData';

const HotelsPage = () => {
  const [priceRange, setPriceRange] = useState<number[]>([50, 500]);
  const [amenities, setAmenities] = useState<Record<string, boolean>>({
    wifi: false,
    pool: false,
    spa: false,
    restaurant: false,
    fitness: false,
  });
  
  const handleAmenityChange = (amenity: string) => {
    setAmenities({
      ...amenities,
      [amenity]: !amenities[amenity]
    });
  };
  
  return (
    <Layout>
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Find Your Perfect Hotel</h1>
          <p className="text-gray-600 mb-8">Browse and filter our selection of premium hotels</p>
          
          <SearchForm className="mb-8" />
          
          <div className="flex flex-col md:flex-row gap-6">
            {/* Filters */}
            <div className="w-full md:w-1/4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h2 className="font-semibold text-lg mb-4">Filter Results</h2>
                
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Price Range</h3>
                  <div className="px-2 mb-2">
                    <Slider 
                      defaultValue={[50, 500]} 
                      min={50} 
                      max={500} 
                      step={10}
                      value={priceRange}
                      onValueChange={setPriceRange}
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}+</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Amenities</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Checkbox 
                        id="wifi" 
                        checked={amenities.wifi}
                        onCheckedChange={() => handleAmenityChange('wifi')}
                      />
                      <Label htmlFor="wifi">Free WiFi</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox 
                        id="pool" 
                        checked={amenities.pool}
                        onCheckedChange={() => handleAmenityChange('pool')}
                      />
                      <Label htmlFor="pool">Pool</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox 
                        id="spa" 
                        checked={amenities.spa}
                        onCheckedChange={() => handleAmenityChange('spa')}
                      />
                      <Label htmlFor="spa">Spa</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox 
                        id="restaurant" 
                        checked={amenities.restaurant}
                        onCheckedChange={() => handleAmenityChange('restaurant')}
                      />
                      <Label htmlFor="restaurant">Restaurant</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox 
                        id="fitness" 
                        checked={amenities.fitness}
                        onCheckedChange={() => handleAmenityChange('fitness')}
                      />
                      <Label htmlFor="fitness">Fitness Center</Label>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Star Rating</h3>
                  <div className="flex flex-wrap gap-2">
                    {[5, 4, 3, 2].map((rating) => (
                      <Badge 
                        key={rating} 
                        variant="outline" 
                        className="cursor-pointer hover:bg-hotel-300 hover:text-white"
                      >
                        {rating}+ Stars
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Button className="w-full" variant="outline">Apply Filters</Button>
              </div>
            </div>
            
            {/* Hotel Listings */}
            <div className="w-full md:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {hotels.map((hotel) => (
                  <HotelCard key={hotel.id} hotel={hotel} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HotelsPage;
