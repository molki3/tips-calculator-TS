import { OrderItem } from "../types/types"


type OrderContentsProps = {
    order: OrderItem[]
    removeItem: (id: OrderItem['id'])=>void
}

export const OrderContents = ({order, removeItem}: OrderContentsProps) => {
  return (
    <>
        <h2 className="font-black text-4xl">Consumo</h2>
        <div className="space-y-3 mt-10">
            {order.map(item => (
                <div key={item.id} className="flex justify-between items-center border-t border-gray-500 py-5 last-of-type:border-b">
                    <div>
                        <p className="text-lg">{item.name} - ${item.price}</p>
                        <p className="font-black">Cantidad: {item.quantity} </p>
                    </div>
                    <div className="flex">
                        <p className="text-3xl font-black px-5">${item.price * item.quantity}</p>
                        <button className="bg-red-600 px-5 rounded-3xl text-white" onClick={() => removeItem(item.id)}>Eliminar</button>
                    </div>
                    
                </div>
            ))}
        </div>
    </>
  )
}
