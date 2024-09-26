import { useMemo } from "react"
import { OrderItem } from "../types/types"
import { formatCurrency } from "../helpers/helpers"


type OrderTotalsProps = {
    order: OrderItem[]
    tip: number
    placeOrder: () => void
}

const OrderTotals = ({order, tip, placeOrder} : OrderTotalsProps) => {
  
    const subtotalCalculate = useMemo(() => (order.reduce((total, item) => total + (item.quantity*item.price), 0)), [order])

    const tipCalculate = useMemo(() => (subtotalCalculate * tip), [order, tip])

    const totalCalculate = useMemo(() => (subtotalCalculate + tipCalculate), [order, tip])

    return (
    <>
        <div>
            <h2 className="font-black text-2xl">Totales y propina:</h2>
            <p>Subtotal:
                <span className="font-bold">{formatCurrency(subtotalCalculate)}</span>
            </p>
            <p>Propina:
                <span className="font-bold"> {formatCurrency(tipCalculate)}</span>
            </p>
            <p>Total:
                <span className="font-bold">{formatCurrency(totalCalculate)}</span>
            </p>
        </div>
        <button className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10" disabled={totalCalculate===0} onClick={placeOrder}>
            Guardar Orden
        </button>
    </>
  )
}

export default OrderTotals
