import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingCart, ArrowLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCartStore } from '../store/cartStore';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === parseInt(id || '0'));
  const addItem = useCartStore(state => state.addItem);
  
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">상품을 찾을 수 없습니다</h1>
          <Link to="/products" className="btn-primary">
            상품 목록으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, quantity);
    alert(`${product.name} ${quantity}개가 장바구니에 추가되었습니다!`);
  };

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* 뒤로가기 버튼 */}
      <Link 
        to="/products" 
        className="inline-flex items-center text-gray-600 hover:text-primary-600 mb-6 transition-colors"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        상품 목록으로 돌아가기
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* 상품 이미지 */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 상품 정보 */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-lg text-gray-600">{product.description}</p>
          </div>

          {/* 평점 */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-lg font-medium">{product.rating}</span>
            <span className="text-gray-600">({product.reviews}개 리뷰)</span>
          </div>

          {/* 가격 */}
          <div className="text-4xl font-bold text-primary-600">
            {product.price.toLocaleString()}원
          </div>

          {/* 재고 정보 */}
          <div className="text-sm text-gray-600">
            {product.stock > 10 ? (
              <span className="text-green-600">재고 충분</span>
            ) : (
              <span className="text-red-600">재고 {product.stock}개 남음</span>
            )}
          </div>

          {/* 수량 선택 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">수량</h3>
            <div className="flex items-center space-x-4">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                  className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 py-2 min-w-[60px] text-center">{quantity}</span>
                <button
                  onClick={incrementQuantity}
                  disabled={quantity >= product.stock}
                  className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <span className="text-sm text-gray-600">
                최대 {product.stock}개까지 구매 가능
              </span>
            </div>
          </div>

          {/* 장바구니 버튼 */}
          <div className="space-y-4">
            <button
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className="w-full btn-primary flex items-center justify-center space-x-2 py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>장바구니에 담기</span>
            </button>
            
            <Link
              to="/cart"
              className="w-full btn-secondary flex items-center justify-center space-x-2 py-3 text-lg"
            >
              <span>장바구니로 이동</span>
            </Link>
          </div>

          {/* 상품 정보 */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">상품 정보</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">카테고리</span>
                <span>{product.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">재고</span>
                <span>{product.stock}개</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">평점</span>
                <span>{product.rating}/5 ({product.reviews}개 리뷰)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
