import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Truck, Shield } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { ShippingAddress } from '../types';

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { items, total, clearCart } = useCartStore();
  const [formData, setFormData] = useState<ShippingAddress>({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('card');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 간단한 유효성 검사
    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
      alert('필수 정보를 모두 입력해주세요.');
      return;
    }

    // 주문 완료 처리
    alert('주문이 완료되었습니다! 감사합니다.');
    clearCart();
    navigate('/');
  };

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">주문할 상품이 없습니다</h1>
          <Link to="/products" className="btn-primary">
            쇼핑하러 가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* 뒤로가기 버튼 */}
      <Link 
        to="/cart" 
        className="inline-flex items-center text-gray-600 hover:text-primary-600 mb-6 transition-colors"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        장바구니로 돌아가기
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 주문 폼 */}
        <div className="space-y-8">
          {/* 배송 정보 */}
          <div className="card p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">배송 정보</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    이름 *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    이메일 *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  전화번호 *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  주소 *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    도시
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    우편번호
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
            </form>
          </div>

          {/* 결제 방법 */}
          <div className="card p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">결제 방법</h2>
            <div className="space-y-4">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="text-primary-600 focus:ring-primary-500"
                />
                <CreditCard className="h-5 w-5 text-gray-400" />
                <span>신용카드</span>
              </label>
              
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="bank"
                  checked={paymentMethod === 'bank'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="text-primary-600 focus:ring-primary-500"
                />
                <span>무통장입금</span>
              </label>
            </div>
          </div>
        </div>

        {/* 주문 요약 */}
        <div className="space-y-6">
          {/* 주문 상품 목록 */}
          <div className="card p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">주문 상품</h2>
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.product.id} className="flex items-center space-x-4">
                  <div className="w-16 h-16 overflow-hidden rounded-lg">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{item.product.name}</h3>
                    <p className="text-sm text-gray-600">수량: {item.quantity}개</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">
                      {(item.product.price * item.quantity).toLocaleString()}원
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 결제 요약 */}
          <div className="card p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">결제 요약</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">상품 금액</span>
                <span>{total.toLocaleString()}원</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">배송비</span>
                <span className="text-green-600">무료</span>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>총 결제금액</span>
                  <span className="text-primary-600">{total.toLocaleString()}원</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full btn-primary mt-6 py-3 text-lg"
            >
              주문 완료하기
            </button>
          </div>

          {/* 보안 정보 */}
          <div className="card p-6 bg-gray-50">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="h-6 w-6 text-green-600" />
              <h3 className="font-semibold text-gray-900">안전한 결제</h3>
            </div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• SSL 보안 인증서로 안전한 결제</li>
              <li>• 개인정보 보호 정책 준수</li>
              <li>• 30일 무조건 교환/환불 보장</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
