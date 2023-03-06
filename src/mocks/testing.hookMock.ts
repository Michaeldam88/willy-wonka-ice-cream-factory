export const mockIceCream1 = {
    id: 'testID',
    colors: ['#F4A460', '#8B4513'],
    description:
        "descriptionTest1",
    ingredients: ['caramel ice cream', 'toffee pieces', 'salted caramel swirl'],
    name: 'Test1',
    image: '',
    size: 'large',
    price: '3.56€',
    onSale: {
        isOnSale: true,
        discount: 0.4,
        finalPrice: '2.136€',
    },
};

export const mockIceCream2 = {
    id: 'testID2',
    colors: ['#F4A460', '#8B4513'],
    description: 'descriptionTest2',
    ingredients: ['caramel ice cream', 'toffee pieces', 'salted caramel swirl'],
    name: 'Test2',
    size: 'small',
    price: '3.56€',
    image: 'imageTest',
    onSale: {
        isOnSale: false,
        discount: 0,
        finalPrice: '3.56€',
    },
};

export const iceCreamsList = [mockIceCream1, mockIceCream2];
