import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center max-w-md">
          <h1 className="text-7xl font-bold text-hotel-300 mb-4">404</h1>
          <p className="text-2xl font-semibold text-gray-800 mb-4">
            Không Tìm Thấy Trang
          </p>
          <p className="text-gray-600 mb-8">
            Trang bạn đang truy cập không tồn tại hoặc đang được chúng tôi phát
            triển.
          </p>
          <div className="space-x-4">
            <Button asChild>
              <Link to="/">Về Trang Chủ</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/hotels">Xem Khách Sạn</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
