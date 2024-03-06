export {};

declare global {
  interface Product {
    id: string;
    name: string;
    description: string | null;
    categoryId: string | null;
    category: Category | null;
    tags: string | null;
    gallery: string | null;
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
}
