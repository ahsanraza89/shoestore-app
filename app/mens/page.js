import Card from "@/components/cards/card"
import { mensProducts } from "../data"
export default function Mens(){
    return <div className="card-container">
 { mensProducts.map((ad)=>{

   return <Card key={ad.id} myAdd = {ad}></Card>
 })
    }

    </div>
}