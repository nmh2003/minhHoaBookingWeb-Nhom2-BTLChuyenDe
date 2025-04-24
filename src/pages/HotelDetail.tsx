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
  
  const roomTypes = [
    {
      name: "Phòng Tiêu Chuẩn",
      price: hotel.price,
      maxGuests: 2,
      bedType: "1 Giường Đôi",
      amenities: ["WiFi Miễn Phí", "TV", "Điều Hòa", "Phòng Tắm Riêng"]
    },
    {
      name: "Phòng Deluxe",
      price: hotel.price * 1.3,
      maxGuests: 2,
      bedType: "1 Giường King",
      amenities: ["WiFi Miễn Phí", "TV", "Điều Hòa", "Phòng Tắm Riêng", "View Thành Phố", "Mini Bar"]
    },
    {
      name: "Phòng Suite",
      price: hotel.price * 1.8,
      maxGuests: 4,
      bedType: "1 Giường King + 1 Giường Sofa",
      amenities: ["WiFi Miễn Phí", "TV", "Điều Hòa", "Phòng Khách Riêng", "Phòng Tắm Sang Trọng", "View Đẹp", "Mini Bar", "Máy Pha Cà Phê"]
    }
  ];

  return (
    <Layout>
      <div 
        className="h-[400px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hotel.image})` }}
      />
      
      <div className="container mx-auto px-4 py-8">
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
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            <Tabs defaultValue="overview">
              <TabsList className="w-full mb-6">
                <TabsTrigger value="overview" className="flex-1">Tổng Quan</TabsTrigger>
                <TabsTrigger value="rooms" className="flex-1">Phòng</TabsTrigger>
                <TabsTrigger value="amenities" className="flex-1">Tiện Nghi</TabsTrigger>
                <TabsTrigger value="reviews" className="flex-1">Đánh Giá</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Về Khách Sạn</h2>
                  <p className="text-gray-600 mb-4">{hotel.description}</p>
                  <p className="text-gray-600">
                    Tọa lạc tại vị trí đắc địa của {hotel.location}, khách sạn cung cấp dễ dàng tiếp cận đến các điểm tham quan và phương tiện giao thông.
                    Du khách yêu thích vị trí thuận tiện, dịch vụ xuất sắc và tiện nghi thoải mái của chúng tôi.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold mb-4">Tiện Nghi Nổi Bật</h2>
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
                <h2 className="text-xl font-semibold mb-4">Các Loại Phòng</h2>
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
                    "WiFi Miễn Phí", "Hồ Bơi", "Spa & Trung Tâm Chăm Sóc Sức Khỏe",
                    "Nhà Hàng", "Quầy Bar/Sảnh Chờ", "Phòng Tập Gym",
                    "Lễ Tân 24/7", "Đưa Đón Sân Bay", "Dịch Vụ Phòng",
                    "Trung Tâm Doanh Nhân", "Dịch Vụ Concierge", "Giặt Ủi",
                    "Bãi Đậu Xe", "Điều Hòa", "Máy Sưởi",
                    "Thang Máy", "Phòng Không Hút Thuốc", "Phòng Gia Đình"
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
                  <h2 className="text-xl font-semibold">Đánh Giá Từ Khách Hàng</h2>
                  <div>
                    <Badge className="bg-hotel-300">
                      {hotel.rating.toFixed(1)} / 5 - Xuất Sắc
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
                            <h4 className="font-medium">Khách hàng {index + 1}</h4>
                            <p className="text-xs text-gray-500">Đã nghỉ vào Tháng 4, 2025</p>
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
                          "Tuyệt vời! Phòng rộng rãi và sạch sẽ, nhân viên rất thân thiện và nhiệt tình. Vị trí hoàn hảo để khám phá thành phố."
                        ) : index === 1 ? (
                          "Trải nghiệm tuyệt vời. Tiện nghi rất tốt, đặc biệt là hồ bơi và nhà hàng. Chắc chắn sẽ quay lại trong chuyến đi tới."
                        ) : (
                          "Giường thoải mái, phòng sạch sẽ, dịch vụ tuyệt vời. Bữa sáng ngon và đa dạng. Rất đáng để trải nghiệm!"
                        )}
                      </p>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full">Xem Tất Cả Đánh Giá</Button>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="w-full lg:w-1/3">
            <div className="bg-white border rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Đặt Phòng</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Nhận phòng / Trả phòng</label>
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
                  <label className="text-sm font-medium mb-1 block">Số khách</label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-gray-500 block mb-1">Người lớn</label>
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
                      <label className="text-xs text-gray-500 block mb-1">Trẻ em</label>
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
                    <span>1 đêm</span>
                    <span>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(hotel.price)}</span>
                  </div>
                  <div className="flex justify-between mb-2 text-sm text-gray-600">
                    <span>Thuế & phí</span>
                    <span>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(hotel.price * 0.1)}</span>
                  </div>
                  {hotel.discount && (
                    <div className="flex justify-between mb-2 text-green-600 text-sm font-medium">
                      <span>Giảm giá</span>
                      <span>-{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(hotel.price * hotel.discount / 100)}</span>
                    </div>
                  )}
                  <div className="flex justify-between font-bold text-lg mt-2 pt-2 border-t">
                    <span>Tổng cộng</span>
                    <span>
                      {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                        hotel.discount
                          ? hotel.price * (1 - hotel.discount / 100) + hotel.price * 0.1
                          : hotel.price + hotel.price * 0.1
                      )}
                    </span>
                  </div>
                </div>
                
                <Button className="w-full">Đặt Ngay</Button>
                <p className="text-xs text-gray-500 text-center">Không cần thanh toán ngay</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HotelDetail;
