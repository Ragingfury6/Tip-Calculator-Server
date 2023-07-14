import Divider from "./Divider";
import PropTypes from "prop-types";
export default function SearchBar({ filtration, dispatch, handleSubmit }) {
  

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="bg-primary-800 text-center w-3/4 mx-auto rounded-xl my-8 p-4 grid gap-4 justify-items-center"
    >
      <h2 className="text-4xl font-bold">Search By...</h2>
      <div className="flex justify-center items-start gap-6">
        <div className="">
          <h3 className="text-xl font-bold mb-2">Location</h3>
          <input
            type="text"
            value={filtration.location}
            onChange={(e) =>
              dispatch({ type: "Location", payload: e.target.value })
            }
            placeholder="e.g. Happy Valley"
            className="search-input search-input-lg"
          />
        </div>
        <div className="">
          <h3 className="text-xl font-bold mb-2">Date</h3>
          <div className="flex items-center">
            <input
              type="date"
              value={filtration.startDate}
              onChange={(e) =>
                dispatch({ type: "StartDate", payload: e.target.value })
              }
              className="search-input"
            />
            <Divider />
            <input
              type="date"
              value={filtration.endDate}
              onChange={(e) =>
                dispatch({ type: "EndDate", payload: e.target.value })
              }
              className="search-input"
            />
          </div>
        </div>
        <div className="">
          <h3 className="text-xl font-bold mb-2">Time</h3>
          <div className="flex items-center">
            <input
              type="time"
              value={filtration.startTime}
              onChange={(e) =>
                dispatch({ type: "StartTime", payload: e.target.value })
              }
              className="search-input"
            />
            <Divider />
            <input
              type="time"
              value={filtration.endTime}
              onChange={(e) =>
                dispatch({ type: "EndTime", payload: e.target.value })
              }
              className="search-input"
            />
          </div>
        </div>
        <div className="">
          <h3 className="text-xl font-bold mb-2">Total</h3>
          <div className="flex items-center">
            <input
              type="text"
              value={filtration.minTotal}
              onChange={(e) =>
                dispatch({ type: "MinTotal", payload: e.target.value })
              }
              placeholder="e.g. 5.50"
              pattern="^[+-]?(\d*\.)?\d+$"
              className="search-input"
            />
            <Divider />
            <input
              type="text"
              value={filtration.maxTotal}
              onChange={(e) =>
                dispatch({ type: "MaxTotal", payload: e.target.value })
              }
              pattern="^[+-]?(\d*\.)?\d+$"
              className="search-input"
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="py-4 px-12 rounded-xl bg-accent-dark-blue text-2xl font-bold tracking-wide w-min hover:bg-[#0252ca] transition"
      >
        Search
      </button>
    </form>
  );
}
SearchBar.propTypes = {
  filtration: PropTypes.object,
  dispatch: PropTypes.func,
  handleSubmit: PropTypes.func
};
