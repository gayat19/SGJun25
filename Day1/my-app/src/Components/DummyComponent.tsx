import { useEffect, useState } from "react";
import { Observable } from "rxjs";



const DummyComponent = ()=>{
    const [count,setCount] = useState<number>(0);
    useEffect(()=>{
        const myObservable = new Observable((subscriber)=>{
            let count =0;
            const intervalId=setInterval(()=>{
                subscriber.next(count);
                console.log(count);
                count++;

                if(count>100)
                        subscriber.complete();
                
            },1000);
            return()=>{
                clearInterval(intervalId);
                console.log("All is done");
            }
        });
        const subscription = myObservable.subscribe({
            next:(value)=>{
                setCount(value as number);
                console.log(`Received - ${value}`);

            }
        })
        return ()=>subscription.unsubscribe();
    },[])
    return(<div>Count:{count}</div>)
}

export default DummyComponent;