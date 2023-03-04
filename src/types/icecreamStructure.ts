export interface IcecreamStructure {
    id: string;
    colors: string[];
    description: string;
    ingredients: string[];
    name: string;
    image: string;
    size: string;
    price: string;
    onSale: OnSale;
}

interface OnSale {
    isOnSale: boolean;
    discount: number;
    finalPrice: string;
}
