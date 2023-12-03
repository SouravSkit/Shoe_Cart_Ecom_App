const PRODUCTS = [
    {
        id: 1,
        name: "Addidas",
        price: 3389,
        image: require("../assets/product_images/addidas.jpg"),
        description:
          "Elevate your running experience with the Adidas Ultraboost 21, a pinnacle of innovation and comfort in the world of running shoes. Engineered for elite performance and designed with style in mind, this shoe redefines what it means to run with unmatched energy return and a sleek aesthetic.",
    },
    {
        id: 2,
        name: "Nike",
        price: 4959,
        image: require("../assets/product_images/nike.jpg"),
        description:
            "Experience the pinnacle of performance and style with the Nike Air Zoom Pegasus 38. Engineered for runners who demand excellence, this iconic running shoe combines cutting-edge technology with a sleek design, ensuring an unparalleled experience on the track, trail, or city streets.",
    },
    {
    id: 3,
    name: "Puma",
    price: 979,
    image: require("../assets/product_images/puma.webp"),
    description: " a triumph of athletic innovation and street-ready style. This iconic shoe seamlessly blends retro-inspired design with cutting-edge technology, offering a versatile and comfortable option for the modern urban explorer."
    }
]

export function getProducts(){
    return PRODUCTS;
}

export function getProduct(id){
    return PRODUCTS.find((product) => product.id == id);
}