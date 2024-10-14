let data = [
    {
        name: 'Jus Jeruk',
        ingredients: ['Jeruk', 'Gula', 'Air'],
        price: 15000,
        size: 'Medium',
        calories: 120,
    },
    {
        name: 'Jus Apel',
        ingredients: ['Apel', 'Madu', 'Air'],
        price: 18000,
        size: 'Large',
        calories: 140,
    },
    {
        name: 'Jus Mangga',
        ingredients: ['Mangga', 'Gula', 'Air'],
        price: 20000,
        size: 'Small',
        calories: 100,
    }
];

// Menampilkan semua data dalam format tabel
console.table(data);

// TODO 1: Dapatkan semua data dengan nama tertentu
const getDataByName = (name) => data.find(juice => juice.name === name);
console.log("Data dengan nama 'Jus Apel':", getDataByName('Jus Apel'));

// TODO 2: Dapatkan data dengan ukuran tertentu
const getDataBySize = (size) => data.filter(juice => juice.size === size);
console.log("Data dengan ukuran 'Medium':", getDataBySize('Medium'));

// TODO 3: Dapatkan data dengan harga tertentu
const getDataByPrice = (price) => data.filter(juice => juice.price === price);
console.log("Data dengan harga 20000:", getDataByPrice(20000));
