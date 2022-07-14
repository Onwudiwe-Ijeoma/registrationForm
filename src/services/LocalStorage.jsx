const setItems =(item)=>{
    const isAvailable = localStorage.getItem(values);
    if (isAvailable){
        const values =JSON.parse(localStorage.getItem());
        values.push(item);
        localStorage.setItem("",JSON.s)
    }
}