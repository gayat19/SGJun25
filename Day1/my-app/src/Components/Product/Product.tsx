import { ProductModel } from "../../Models/Product";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
const Product = (props:{product:ProductModel,onAddToCart:any})=>{

    const handleBuyClick=()=>{
       
        props.onAddToCart(props.product.id)
    }
    return (<>
    
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={props.product?.thumbnail}
        title={props.product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.product.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {props.product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleBuyClick} size="small">buy for {props.product.price}</Button>
      </CardActions>
    </Card>
    </>)
}

export default Product;