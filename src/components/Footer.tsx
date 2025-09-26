import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">세진 마켓</h3>
            <p className="text-gray-300 text-sm">
              오세진의 포트폴리오 작업물입니다. 다양한 전자제품과 가전제품을 합리적인 가격에 제공합니다.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">고객 서비스</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">자주 묻는 질문</a></li>
              <li><a href="#" className="hover:text-white transition-colors">배송 안내</a></li>
              <li><a href="#" className="hover:text-white transition-colors">교환/환불</a></li>
              <li><a href="#" className="hover:text-white transition-colors">고객센터</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">회사 정보</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">회사 소개</a></li>
              <li><a href="#" className="hover:text-white transition-colors">채용 정보</a></li>
              <li><a href="#" className="hover:text-white transition-colors">이용약관</a></li>
              <li><a href="#" className="hover:text-white transition-colors">개인정보처리방침</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">연락처</h4>
            <div className="text-sm text-gray-300 space-y-2">
              <p>이메일: os160960@gmail.com</p>
              <p>전화: 1588-0000</p>
              <p>운영시간: 평일 9:00-18:00</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 MiniShop. All rights reserved. 오세진의 포트폴리오 작업물입니다</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
