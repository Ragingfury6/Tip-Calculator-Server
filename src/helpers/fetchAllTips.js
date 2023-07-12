export const fetchAllTips = async () => {
    const res = await fetch("https://tip-calculator-server.onrender.com/tip");
    if(res){
        return res.json();
    }else{
        throw new Error("Cannot Fetch All Tips");
    }
}