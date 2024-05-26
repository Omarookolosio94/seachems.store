export {};

declare global {
  interface Product {
    id: string;
    name: string;
    description: string | null;
    categoryId: string | null;
    category: Category | null;
    tags: string | null;
    gallery: ProductGallery[];
    manufacturedBy: string | null;
    qrCodeUrl: string | null;
    size: string;
    color: string;
    unit: string;
    itemPerPack: number;
    comments: string;
    costPrice: number;
    sellingPrice: number;
    discountPercent: number;
    isListed: boolean;
    addedBy: string;
    updatedBy: string;
    manufacturingDate: string | null;
    expiringDate: string | null;
    dateAdded: string;
    lastUpdated: string;
    employerId: string;
  }

  interface Category {
    id: string;
    employerId: string;
    name: string;
    description: string;
    addedBy: string;
    updatedBy: string;
    dateAdded: string;
    lastUpdated: string;
  }

  interface Cart {
    productId: string;
    product: Product | null;
    quantity: number;
  }

  interface OrderCart {
    productId: string;
    quantity: number;
  }

  interface NewOrder {
    paymentMethod: string;
    deliveryMode: string;
    cart: OrderCart[];
    firstName: string;
    lastName: string;
    businessName: string;
    state: string;
    lga: string;
    deliveryAddress: string;
    customerEmail: string;
    customerPhone: string;
  }

  interface ProductGallery {
    id: string;
    name: string;
    url: string;
    isDefault: string;
  }

  interface OrderItem {
    productId: string;
    productName: string;
    unitPriceAtPurchase: number;
    costPriceAtPurchase: number;
    quantity: number;
    unit: string;
    quantityNarration: string;
  }

  interface OrderTimeline {
    process: string;
    initiatedBy: string;
    instruction: string;
    dateAdded: string;
  }

  interface OrderDetail {
    id: string;
    code: string;
    cart: OrderItem[];
    cartTotal: number;
    tax: number;
    deliveryFee: number;
    totalPaid: number;
    status: string;
    paymentMethod: string;
    deliveryMethod: string;
    isPaid: boolean;
    customerName: string;
    deliveryAddress: string;
    state: string;
    lga: string;
    customerEmail: string;
    customerPhone: string;
    businessName: string;
    datePaid: string;
    dateAdded: string;
    lastUpdated: string;
    timeLine: OrderTimeline[];
    lastUpdatedBy: string;
    employerId: string;
    employer: Employer;
  }

  interface Logo {
    id: string;
    name: string;
    url: string;
    isDefault: boolean;
  }

  interface Employer {
    id: string;
    name: string;
    email: string;
    logo: Logo[];
    about: string;
    caption: string;
    services: string;
    termsAndConditions: string;
    privacyPolicy: string;
    legalDocument: string;
    headOfficeAddress: string;
    contactLine: string;
    weblink: string;
    isVerified: boolean;
    dateRegistered: string;
    lastUpdated: string;
  }
}
