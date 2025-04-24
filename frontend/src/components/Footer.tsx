import React from "react";
import { Link } from "react-router-dom";
import { BedDouble } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link
              to="/"
              className="flex items-center gap-2 text-hotel-300 mb-4"
            >
              <BedDouble size={28} />
              <span className="text-xl font-bold">ComfyStay</span>
            </Link>
            <p className="text-gray-600 text-sm">
              Khám phá các khách sạn tuyệt vời trên khắp Việt Nam. Tìm nơi nghỉ
              dưỡng hoàn hảo với giá tốt nhất.
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Công ty</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-hotel-300 transition-colors text-sm"
                >
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-600 hover:text-hotel-300 transition-colors text-sm"
                >
                  Tuyển dụng
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-600 hover:text-hotel-300 transition-colors text-sm"
                >
                  Tin tức
                </Link>
              </li>
              <li>
                <Link
                  to="/press"
                  className="text-gray-600 hover:text-hotel-300 transition-colors text-sm"
                >
                  Báo chí
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Hỗ trợ</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/help"
                  className="text-gray-600 hover:text-hotel-300 transition-colors text-sm"
                >
                  Trung tâm trợ giúp
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-hotel-300 transition-colors text-sm"
                >
                  Liên hệ
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-600 hover:text-hotel-300 transition-colors text-sm"
                >
                  Câu hỏi thường gặp
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-600 hover:text-hotel-300 transition-colors text-sm"
                >
                  Điều khoản & Điều kiện
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Đăng ký</h3>
            <p className="text-gray-600 text-sm mb-4">
              Nhận thông tin ưu đãi và cập nhật mới nhất.
            </p>
            <div className="flex border rounded-md overflow-hidden">
              <input
                type="email"
                placeholder="Email của bạn"
                className="px-3 py-2 flex-1 outline-none text-sm"
              />
              <button className="bg-hotel-300 text-white px-4 py-2 text-sm">
                Đăng ký
              </button>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ComfyStay. By Nhóm 2 Chuyên Đề.
          </p>

          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link
              to="/privacy"
              className="text-gray-500 hover:text-hotel-300 transition-colors text-sm"
            >
              Quyền riêng tư
            </Link>
            <Link
              to="/terms"
              className="text-gray-500 hover:text-hotel-300 transition-colors text-sm"
            >
              Điều khoản
            </Link>
            <Link
              to="/sitemap"
              className="text-gray-500 hover:text-hotel-300 transition-colors text-sm"
            >
              Sơ đồ trang
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
