import { useEffect, useState } from "react";
import {  GetProductsBySearchKey } from "../../Services/ProductService";
// import { ProductModel } from "../../Models/Product";
import './Products.css';
import Product from "../Product/Product";
import type { CartModel } from "../../Models/Cart";
import { toast } from "react-toastify";
import { Alert, Button, CircularProgress } from "@mui/material";


export default function Products(){
    //const [refresh,setRefresh] = useState<boolean>();
    const [searchKey,setSearchKey] = useState<string>("");
    const [total,setTotal] = useState<Number>(0);
    const [filteredCount,setFilteredCount] = useState<Number>(0);

  useEffect(()=>{
   
     GetProductsBySearchKey(searchKey)
        .then(result=>{
            if(result.status==200)
            {
                setProducts(result.data.products);
                if(searchKey=="")
                {
                    setTotal(result.data.total);
                    setFilteredCount(result.data.total);
                }
                    
                else
                    setFilteredCount(result.data.total);
            }
        })
        .catch(err=>{
            console.error(err);
        })
  },[searchKey]);
    //const [product,setProduct] = useState(new ProductModel());
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState<CartModel[]>([]);
    // const getProducts=()=>{
    //     setRefresh(!refresh);
    // }
    const handleAddtoCart =(pid:number)=>{
        console.log("cehck")
        setCart(prev=>{
            const existing = prev.find(item=>item.id==pid);
            if(existing)
            {
                toast.info(`Product with ${pid} quantity increased`);
                return prev.map(item=>item.id==pid?{...item,quantity:item.quantity+1}:item);
            }
            else{
                 toast.success(`Product with ${pid} added`)
            return[...prev,{id:pid,quantity:1}];
            }
           
        });
          
    }
    return(<>
        <input type="text" value={searchKey} onChange={(e)=>setSearchKey(e.target.value)}/>
        <Button onClick={()=>setSearchKey("")}>Clear search</Button>
        <Alert severity="info">{filteredCount as any}/{total as any}</Alert>
        
        {
            cart.length>0&&<div>
                <h2>Cart</h2>
                {
                    cart.map(ci=><p key={ci.id}>{ci.id}---{ci.quantity}</p>)
                }
            </div>
        }
        <hr/>
        <div className="container">
        {
            products.length==0?<CircularProgress />:
            products.map((prod:any)=><div key={prod.id} className="box">
                    <Product  key={prod.id} product={prod} onAddToCart={(event:number)=>handleAddtoCart(event)}/>
                </div>)
        }
        </div>
        
    </>)
}