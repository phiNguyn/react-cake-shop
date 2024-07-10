
export interface Product {
    _id: string;
    name: string;
    material: string;
    img: string;
    price: number;
    view: number;
    bestseller: boolean;
    quantity: number;
    slug: string;
    category: {
      categoryId: string;
      categoryName: string;
    };

}

