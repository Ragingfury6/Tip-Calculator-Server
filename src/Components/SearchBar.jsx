import Divider from "./Divider";

export default function SearchBar(){
    return (
        <div className="bg-primary-800 text-center w-3/4 mx-auto rounded-xl my-8 p-4 grid gap-4 justify-items-center">
            <h2 className="text-4xl font-bold">Search By...</h2>
            <div className="flex justify-center items-start gap-4">
                <div className="">
                    <h3 className="text-xl font-bold mb-2">Location</h3>
                    <input type="text" className="search-input search-input-lg"/>
                </div>
                <div className="">
                    <h3 className="text-xl font-bold mb-2">Date</h3>
                    <div className="flex">
                        <input type="text" className="search-input"/>
                        <Divider/>
                        <input type="text" className="search-input"/>
                    </div>
                </div>
                <div className="">
                    <h3 className="text-xl font-bold mb-2">Time</h3>
                    <div className="flex">
                        <input type="text" className="search-input"/>
                        <Divider/>
                        <input type="text" className="search-input"/>
                    </div>
                </div>
                <div className="">
                    <h3 className="text-xl font-bold mb-2">Total</h3>
                    <div className="flex">
                        <input type="text" className="search-input"/>
                        <Divider/>
                        <input type="text" className="search-input"/>
                    </div>
                </div>
            </div>
            <button className="py-4 px-12 rounded-xl bg-accent-dark-blue text-2xl font-bold tracking-wide w-min hover:bg-[#0252ca] transition">Search</button>
        </div>
    )
}