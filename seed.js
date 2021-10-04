const Product = require('./models/product');

const products = [
    {
        name: 'Tphone 13',
        price: 100000,
        desc: "With powerful technology and an intuitive operating system that's easy to use, the iPhone helps you stay connected and engaged with the world around you. Keeping up to date with the latest iPhone",
        img:"https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: 'ipad air',
        price: 70000,
        desc: "With powerful technology and an intuitive operating system that's easy to use, the iPhone helps you stay connected and engaged with the world around you. Keeping up to date with the latest iPhone",
        img:"https://images.unsplash.com/photo-1502404768591-f24d06b7a366?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aXBhZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: 'Mac Book Air Pro',
        price: 55000,
        desc: "With powerful technology and an intuitive operating system that's easy to use, the iPhone helps you stay connected and engaged with the world around you. Keeping up to date with the latest iPhone",
        img:"https://images.unsplash.com/file-1626897789502-538d933b419fimage"
    },
    {
        name: 'Asus Tuf A15',
        price: 95000,
        desc: "With powerful technology and an intuitive operating system that's easy to use, the iPhone helps you stay connected and engaged with the world around you. Keeping up to date with the latest iPhone",
        img:"https://images.unsplash.com/photo-1612952020509-359f309bd102?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFzdXMlMjB0dWYlMjBhMTV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: 'Vivo Pro',
        price: 80000,
        desc: "With powerful technology and an intuitive operating system that's easy to use, the iPhone helps you stay connected and engaged with the world around you. Keeping up to date with the latest iPhone",
        img:"https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGlwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=600"
    },
    {
        name: 'Vivo Pro',
        price: 80000,
        desc: "With powerful technology and an intuitive operating system that's easy to use, the iPhone helps you stay connected and engaged with the world around you. Keeping up to date with the latest iPhone",
        img:"https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGlwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=600"
    }
    
]


const seedBB = async () => {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("DB seeded");
}

module.exports = seedBB;