
import React from 'react';
import Layout from '@/components/Layout';
import SearchForm from '@/components/SearchForm';
import HotelCard from '@/components/HotelCard';
import DestinationCard from '@/components/DestinationCard';
import Testimonial from '@/components/Testimonial';
import { Button } from '@/components/ui/button';
import { BedDouble, MapPin, Star } from 'lucide-react';
import { hotels, destinations, testimonials } from '@/data/mockData';

const Index = () => {
  const featuredHotels = hotels.filter(hotel => hotel.featured);
  const featuredDestinations = destinations.filter(dest => dest.featured);
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative">
        <div 
          className="h-[600px] bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80')"
          }}
        >
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Tìm Khách Sạn Ưng Ý</h1>
            <p className="text-xl text-white mb-8 max-w-xl">Khám phá các khách sạn tuyệt vời với giá tốt nhất cùng dịch vụ đặt phòng cao cấp của chúng tôi.</p>
          </div>
        </div>
        
        {/* Search Form */}
        <div className="container mx-auto px-4 relative -mt-16 z-10">
          <SearchForm className="mx-auto max-w-5xl" />
        </div>
      </section>
      
      {/* Featured Hotels Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Khách Sạn Nổi Bật</h2>
              <p className="text-gray-600">Những lựa chọn hàng đầu cho kỳ nghỉ của bạn</p>
            </div>
            <Button variant="outline" asChild>
              <a href="/hotels">Xem Tất Cả</a>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredHotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Popular Destinations Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Điểm Đến Phổ Biến</h2>
              <p className="text-gray-600">Khám phá các địa điểm thu hút khách du lịch</p>
            </div>
            <Button variant="outline" asChild>
              <a href="/destinations">Xem Tất Cả</a>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-hotel-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Tại Sao Chọn ComfyStay</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Chúng tôi mang đến trải nghiệm đặt phòng tốt nhất với các tính năng cao cấp</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-hotel-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BedDouble className="text-hotel-400 h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl mb-2">Lựa Chọn Tốt Nhất</h3>
              <p className="text-gray-600">Hợp tác với các khách sạn hàng đầu để đảm bảo chất lượng dịch vụ.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-hotel-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-hotel-400 h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl mb-2">Vị Trí Thuận Tiện</h3>
              <p className="text-gray-600">Các khách sạn của chúng tôi đều nằm ở những vị trí đắc địa.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-hotel-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-hotel-400 h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl mb-2">Đánh Giá Tin Cậy</h3>
              <p className="text-gray-600">Đánh giá thực tế từ khách hàng giúp bạn lựa chọn chính xác.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Khách Hàng Nói Gì</h2>
            <p className="text-gray-600">Trải nghiệm thực tế từ những khách hàng đã sử dụng dịch vụ</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-hotel-300">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Sẵn Sàng Đặt Phòng?</h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            Tìm khách sạn phù hợp từ bộ sưu tập các khách sạn và khu nghỉ dưỡng cao cấp của chúng tôi.
          </p>
          <Button size="lg" className="bg-white text-hotel-400 hover:bg-gray-100">
            Tìm Kiếm Ngay
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
