
import React from 'react';
import Layout from '@/components/Layout';
import DestinationCard from '@/components/DestinationCard';
import { destinations } from '@/data/mockData';
import { MapPin } from 'lucide-react';

const DestinationsPage = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Popular Destinations</h1>
          <p className="text-gray-600 mb-8">Explore hotels in these top locations around the world</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {destinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
          
          {/* World regions section */}
          <h2 className="text-2xl font-bold mb-6">Explore by Region</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl mb-4 flex items-center">
                <MapPin className="mr-2 text-hotel-300" size={20} />
                Europe
              </h3>
              <ul className="space-y-2">
                <li className="hover:text-hotel-300 transition-colors">
                  <a href="#">Paris, France</a>
                </li>
                <li className="hover:text-hotel-300 transition-colors">
                  <a href="#">Rome, Italy</a>
                </li>
                <li className="hover:text-hotel-300 transition-colors">
                  <a href="#">Barcelona, Spain</a>
                </li>
                <li className="hover:text-hotel-300 transition-colors">
                  <a href="#">London, UK</a>
                </li>
                <li className="hover:text-hotel-300 transition-colors">
                  <a href="#">Amsterdam, Netherlands</a>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl mb-4 flex items-center">
                <MapPin className="mr-2 text-hotel-300" size={20} />
                Asia
              </h3>
              <ul className="space-y-2">
                <li className="hover:text-hotel-300 transition-colors">
                  <a href="#">Tokyo, Japan</a>
                </li>
                <li className="hover:text-hotel-300 transition-colors">
                  <a href="#">Bali, Indonesia</a>
                </li>
                <li className="hover:text-hotel-300 transition-colors">
                  <a href="#">Bangkok, Thailand</a>
                </li>
                <li className="hover:text-hotel-300 transition-colors">
                  <a href="#">Singapore</a>
                </li>
                <li className="hover:text-hotel-300 transition-colors">
                  <a href="#">Seoul, South Korea</a>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl mb-4 flex items-center">
                <MapPin className="mr-2 text-hotel-300" size={20} />
                Americas
              </h3>
              <ul className="space-y-2">
                <li className="hover:text-hotel-300 transition-colors">
                  <a href="#">New York, USA</a>
                </li>
                <li className="hover:text-hotel-300 transition-colors">
                  <a href="#">Cancun, Mexico</a>
                </li>
                <li className="hover:text-hotel-300 transition-colors">
                  <a href="#">Rio de Janeiro, Brazil</a>
                </li>
                <li className="hover:text-hotel-300 transition-colors">
                  <a href="#">Vancouver, Canada</a>
                </li>
                <li className="hover:text-hotel-300 transition-colors">
                  <a href="#">Buenos Aires, Argentina</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DestinationsPage;
