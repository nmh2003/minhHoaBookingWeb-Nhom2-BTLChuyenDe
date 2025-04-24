import React from "react";
import Layout from "@/components/Layout";
import DestinationCard from "@/components/DestinationCard";
import { destinations } from "@/data/mockData";
import { MapPin } from "lucide-react";

const DestinationsPage = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Địa Điểm Phổ Biến</h1>
          <p className="text-gray-600 mb-8">
            Khám phá các điểm phổ biến tuyệt vời với giá tốt nhất cùng dịch vụ
            đặt phòng cao cấp của chúng tôi.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {destinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DestinationsPage;
