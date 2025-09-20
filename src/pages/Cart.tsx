import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

const Cart: React.FC = () => {
  const { items, total, itemCount, updateQuantity, removeItem, clearCart } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">장바구니가 비어있습니다</h1>
          <p className="text-lg text-gray-600 mb-8">
            원하는 상품을 장바구니에 담아보세요
          </p>
          <Link to="/products" className="btn-primary">
            쇼핑 계속하기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">장바구니</h1>
        <p className="text-gray-600">총 {itemCount}개의 상품이 담겨있습니다</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 장바구니 아이템 목록 */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item.product.id} className="card p-6">
              <div className="flex items-center space-x-4">
                {/* 상품 이미지 */}
                <div className="w-20 h-20 overflow-hidden rounded-lg">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* 상품 정보 */}
                <div className="flex-1">
                  <Link
                    to={`/products/${item.product.id}`}
                    className="text-lg font-semibold text-gray-900 hover:text-primary-600 transition-colors"
                  >
                    {item.product.name}
                  </Link>
                  <p className="text-gray-600 text-sm mt-1">{item.product.category}</p>
                  <p className="text-xl font-bold text-primary-600 mt-2">
                    {item.product.price.toLocaleString()}원
                  </p>
                </div>

                {/* 수량 조절 */}
                <div className="flex items-center space-x-3">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="p-2 hover:bg-gray-100"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-4 py-2 min-w-[60px] text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="p-2 hover:bg-gray-100"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  {/* 삭제 버튼 */}
                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>

                {/* 소계 */}
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-900">
                    {(item.product.price * item.quantity).toLocaleString()}원
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* 장바구니 비우기 버튼 */}
          <div className="text-right">
            <button
              onClick={clearCart}
              className="text-red-600 hover:text-red-700 font-medium transition-colors"
            >
              장바구니 비우기
            </button>
          </div>
        </div>

        {/* 주문 요약 */}
        <div className="lg:col-span-1">
          <div className="card p-6 sticky top-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">주문 요약</h2>
            
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

            <div className="mt-6 space-y-3">
              <Link
                to="/checkout"
                className="w-full btn-primary text-center block py-3"
              >
                주문하기
              </Link>
              
              <Link
                to="/products"
                className="w-full btn-secondary text-center block py-3"
              >
                쇼핑 계속하기
              </Link>
            </div>

            {/* 혜택 정보 */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-sm mb-2">구매 혜택</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 전국 무료배송</li>
                <li>• 30일 무조건 교환/환불</li>
                <li>• 안전한 결제 시스템</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
