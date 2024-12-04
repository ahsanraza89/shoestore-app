import Card from "@/components/cards/card"
import { womensProducts } from "../data"
export default function Womens(){
    return <div className="card-container">
      
 { womensProducts.map((ad)=>{

   return <Card myAdd = {ad}></Card>
 })
    }

    </div>
}