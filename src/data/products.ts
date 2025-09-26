import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "무선 블루투스 이어폰",
    price: 89000,
    description: "불편함 없는 무선 연결과 엄청난 음질을 자랑 합니다.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    category: "전자제품",
    stock: 50,
    rating: 4.5,
    reviews: 128
  },
  {
    id: 2,
    name: "생활 스마트 워치",
    price: 299000,
    description: "생활 방수 기능과 가볍고 착용감 좋은 시계입니다..",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    category: "전자제품",
    stock: 25,
    rating: 4.8,
    reviews: 89
  },
  {
    id: 3,
    name: "에스프레소 머신",
    price: 450000,
    description: "프리미엄 에스프레소 머신으로 카페 수준의 커피를 집에서 즐기세요.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop",
    category: "가전제품",
    stock: 15,
    rating: 4.6,
    reviews: 67
  },
  {
    id: 4,
    name: "무선 마우스",
    price: 45000,
    description: "정밀한 센서와 편안한 그립감의 무선 마우스입니다.",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    category: "전자제품",
    stock: 100,
    rating: 4.3,
    reviews: 156
  },
  {
    id: 5,
    name: "블루투스 스피커",
    price: 120000,
    description: "강력한 베이스와 선명한 고음의 포터블 블루투스 스피커입니다.",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    category: "전자제품",
    stock: 30,
    rating: 4.4,
    reviews: 92
  },
  {
    id: 6,
    name: "스탠딩 데스크",
    price: 180000,
    description: "높이 조절 가능한 스탠딩 데스크로 건강한 업무 환경을 만들어보세요.",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop",
    category: "가구",
    stock: 20,
    rating: 4.7,
    reviews: 45
  },
  {
    id: 7,
    name: "키보드",
    price: 20000,
    description: "타이핑이 편안한 무선 키보드로 효율적인 작업을 도와드립니다.",
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop",
    category: "전자제품",
    stock: 60,
    rating: 4.2,
    reviews: 78
  },
  {
    id: 8,
    name: "LED 데스크 램프",
    price: 35000,
    description: "눈에 편안한 LED 조명과 터치 조절 기능이 있는 데스크 램프입니다.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    category: "조명",
    stock: 40,
    rating: 4.1,
    reviews: 34
  }
];

export const categories = [
  "전체",
  "전자제품",
  "가전제품", 
  "가구",
  "조명"
];
