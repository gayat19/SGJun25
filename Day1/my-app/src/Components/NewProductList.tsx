import { useInfiniteQuery, type QueryFunctionContext } from "@tanstack/react-query"
import { useEffect, useRef } from "react"


type ProductModelType={
    id:number
    title:string
    price:number
}
type PageResponseType={
    data:ProductModelType[]
    nextPage:number
    hasMore:boolean
}

const getProductByPage = async(ctx:QueryFunctionContext):Promise<PageResponseType>=>{
    const pageParam = (ctx.pageParam??1) as number;
    const limit = 5;
    const skip = (pageParam-1)*limit;

    const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=id,title,price`)

    const jsonData = await response.json();

    return{
        data:jsonData.products,
        nextPage:pageParam+1,
        hasMore:skip+limit<jsonData.total
    }
}


const NewProductList=()=>{

    const containerRef = useRef<HTMLDivElement | null>(null)
    const lineRef = useRef<HTMLDivElement | null>(null)

    const{
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
        error} = useInfiniteQuery<PageResponseType,Error>({
            queryKey:['products'],
            queryFn:getProductByPage,
            getNextPageParam:(lastPage)=> lastPage.hasMore? lastPage.nextPage:undefined,
            initialPageParam:1
        });
    

    useEffect(()=>{
        if(!lineRef.current ||  !containerRef.current || !hasNextPage) return;

        const observer = new IntersectionObserver((entries)=>{
            if(entries[0].isIntersecting){
                fetchNextPage();
            }
        },{
            root:containerRef.current,
            threshold:1.0,
        })

        observer.observe(lineRef.current)

        return()=>{
            if(lineRef.current) observer.unobserve(lineRef.current);
        }

    },[fetchNextPage,hasNextPage])

    if(status === 'pending') return <p>Loading....</p>
    if(status === 'error') return<p>Error : {error.message}</p>

    return (<>
        <div ref={containerRef} style={{height:'400px',overflow:'auto',padding:'10px'}}>
            {data?.pages.map((page,i)=>(<div key={i}>
                {page.data.map(product=>(
                    <div key={product.id}>
                        <h3>{product.title}</h3>
                        <h4>{product.price}</h4>
                    </div>
                ))}
                <div ref={lineRef} style={{height:20,backgroundColor:"blue"}}/>
                {isFetchingNextPage && <p>Loading...</p>}
            </div>))}
        </div>
    </>);
}

export default NewProductList;