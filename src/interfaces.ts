export interface Receipt {
    id: string;
    categories: Category[];
    description: string;
    image: string;
    price: number;
    pricetotal: number;    
    title: string;
    uploader: User;
}

export interface Category {
    id: string;
    name: string;
}

export interface User {
    id: string;
    fullname: string;
}