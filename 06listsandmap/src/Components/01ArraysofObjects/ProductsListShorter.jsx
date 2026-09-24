

function ProductsListShorter(){

    const products = [
        {
            id: 1,
            name: "Laptop",
            price: 50000
        },

        {
            id: 2,
            name: "Mobile",
            price: 20000
        },

        {
            id: 3,
            name: "Keyboard",
            price: 1000
        }
    ]

    return(
        <div>
            {
                products.map((product) => (
                    <div key={product.id}>
                        <h2>{product.name}</h2>
                        <p>Price: {product.price}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductsListShorter