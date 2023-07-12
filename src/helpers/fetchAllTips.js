export const fetchAllTips = async () => {
    const res = await fetch("http://localhost:3000/tip");
    if(res){
        return res.json();
    }else{
        throw new Error("Cannot Fetch All Tips");
    }
}