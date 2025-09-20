# Mini Shopping Mall

React + TypeScript + Vite로 만든 모던한 온라인 쇼핑몰 프로젝트입니다.

## 🚀 주요 기능

- **상품 목록 및 검색**: 카테고리별 필터링, 검색, 정렬 기능
- **상품 상세 페이지**: 상품 정보, 수량 선택, 장바구니 추가
- **장바구니**: 상품 추가/삭제, 수량 조절, 총액 계산
- **결제 플로우**: 배송 정보 입력, 결제 방법 선택
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 지원
- **상태 관리**: Zustand를 사용한 전역 상태 관리
- **로컬 스토리지**: 장바구니 데이터 영구 저장

## 🛠️ 기술 스택

- **Frontend**: React 18, TypeScript
- **빌드 도구**: Vite
- **스타일링**: Tailwind CSS
- **라우팅**: React Router DOM
- **상태 관리**: Zustand
- **아이콘**: Lucide React

## 📦 설치 및 실행

1. 의존성 설치:
```bash
npm install
```

2. 개발 서버 실행:
```bash
npm run dev
```

3. 빌드:
```bash
npm run build
```

## 🎨 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── Layout.tsx      # 전체 레이아웃
│   ├── Header.tsx      # 헤더 네비게이션
│   ├── Footer.tsx      # 푸터
│   └── ProductCard.tsx # 상품 카드
├── pages/              # 페이지 컴포넌트
│   ├── Home.tsx        # 홈페이지
│   ├── Products.tsx    # 상품 목록
│   ├── ProductDetail.tsx # 상품 상세
│   ├── Cart.tsx        # 장바구니
│   └── Checkout.tsx    # 결제
├── store/              # 상태 관리
│   └── cartStore.ts    # 장바구니 스토어
├── types/              # TypeScript 타입 정의
│   └── index.ts
├── data/               # 정적 데이터
│   └── products.ts      # 상품 데이터
└── App.tsx             # 메인 앱 컴포넌트
```

## 🎯 주요 컴포넌트

### ProductCard
- 상품 정보 표시
- 장바구니 추가 기능
- 반응형 디자인

### Cart
- 장바구니 아이템 관리
- 수량 조절 및 삭제
- 총액 계산

### Checkout
- 배송 정보 입력 폼
- 결제 방법 선택
- 주문 완료 처리

## 🔧 커스터마이징

### 상품 데이터 추가
`src/data/products.ts` 파일에서 상품 정보를 수정하거나 추가할 수 있습니다.

### 스타일 변경
`tailwind.config.js`에서 테마 색상과 스타일을 커스터마이징할 수 있습니다.

### 새로운 기능 추가
- 사용자 인증
- 주문 내역
- 리뷰 시스템
- 관리자 페이지

## 📱 반응형 디자인

- **모바일**: 320px 이상
- **태블릿**: 768px 이상  
- **데스크톱**: 1024px 이상

## 🎨 디자인 시스템

- **Primary Color**: Blue (#3b82f6)
- **Typography**: 시스템 폰트 스택
- **Spacing**: Tailwind CSS 기본 스페이싱
- **Components**: 재사용 가능한 버튼, 카드 스타일

## 📄 라이선스

MIT License
