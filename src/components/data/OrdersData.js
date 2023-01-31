export const handleData = () =>{
    if(!localStorage.getItem('orders')){
        localStorage.setItem('orders', 0);
    };
}

