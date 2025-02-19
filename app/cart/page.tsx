"use client"


export default function CartPage() {
  // const [cart, setCart] = useState([])

  // useEffect(() => {
  //   // In a real application, you would fetch the cart from an API or local storage
  //   const dummyCart = [
  //     {
  //       id: 1,
  //       name: "Merino Wool Yarn",
  //       price: 12.99,
  //       quantity: 2,
  //       image: "/placeholder.svg?height=100&width=100&text=Merino+Wool+Yarn",
  //     },
  //     {
  //       id: 2,
  //       name: "DSLR Camera Lens",
  //       price: 299.99,
  //       quantity: 1,
  //       image: "/placeholder.svg?height=100&width=100&text=DSLR+Camera+Lens",
  //     },
  //   ]
  //   setCart(dummyCart)
  // }, [])

  // const updateQuantity = (id, newQuantity) => {
  //   setCart(cart.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  // }

  // const removeItem = (id) => {
  //   setCart(cart.filter((item) => item.id !== id))
  // }

  // const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-serif font-bold text-pink-800 mb-8">Your Cart</h1>

      {/* {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center py-4 border-b last:border-b-0">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="rounded-md mr-4"
                />
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-pink-600 font-medium">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    -
                  </button>
                  <span className="mx-2 w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    +
                  </button>
                </div>
                <button onClick={() => removeItem(item.id)} className="ml-4 text-red-500 hover:text-red-700">
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <p className="text-2xl font-semibold text-gray-800">Total: ${total.toFixed(2)}</p>
            <Link href="/checkout" className="btn-primary">
              Proceed to Checkout
            </Link>
          </div>
        </>
      )} */}
    </div>
  )
}

