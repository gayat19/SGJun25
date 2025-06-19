export class ProductModel
{
    constructor(public id:number=0,
        public title:string="",
        public price:number=0,
        public thumbnail:string="",
        public stock:number=0,
        public description:string="")
    {

    }
    public static fromForm(data:{id:number,title:string,price:number,thumbnail:string,stock:number})
    {
        return new ProductModel(data.id,data.title,data.price,data.thumbnail,data.stock)
    }
}