
import Link from 'next/link'
import './card.css'
export default function Card ({myAdd}){
    return <div>
      
<div className="card" style={{ width: "18rem" }}>

<Link href={ "/productdetails/" + myAdd.id} >
{/* <Link href="/productdetails/[id]" as={`/productdetails/${myAdd.id}`}> */}

  
<h5 className="card-title">{myAdd.name}</h5>

  <img src={myAdd.src} className="card-img-top" alt="..." />

 
  <div className="card-body ">
    <p className="card-text">
      {myAdd.price}
    </p>
    <b href="#" className="btn btn-primary">
    Add to Cart    </b>
  </div>
</Link>
</div>

    </div>
}