export const fetchFilteredTips = async ({queryKey}) => {
  const [_, filter] = queryKey;
  const res = await fetch(
    "https://tip-calculator-server.onrender.com/tip/filter",
    {
      method: "POST",
      body:JSON.stringify(filter),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (res) {
    return res.json();
  } else {
    throw new Error("Cannot Fetch All Tips");
  }
};
