import Card from "@/components/cards/card"
import { kidsProducts } from "../data"

export default function Kids(){
    return <div className="card-container">
 { kidsProducts.map((ad)=>{

   return <Card myAdd = {ad}></Card>
 })
    }

    </div>
}