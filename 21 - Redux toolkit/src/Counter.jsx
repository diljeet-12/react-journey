import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./redux/counterSlice";

function Counter() {
  // useSelector reads the counter value from the Redux store
  const count = useSelector((state) => state.counter.value);

  // useDispatch gives us access to dispatch actions to the Redux store
  const dispatch = useDispatch();

  return (
    <div className="bg-slate-800 text-white p-8 rounded-2xl shadow-xl w-full max-w-sm text-center border border-slate-700">
      <h2 className="text-slate-400 text-sm font-semibold tracking-wider uppercase mb-2">
        Redux Toolkit Counter
      </h2>

      <div className="text-6xl font-bold my-6 font-mono text-cyan-400">
        {count}
      </div>

      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => dispatch(decrement())}
          className="flex-1 bg-rose-600 hover:bg-rose-500 active:scale-95 transition-all text-white font-semibold py-2.5 px-4 rounded-xl shadow-md cursor-pointer"
        >
          - Decrease
        </button>

        <button
          onClick={() => dispatch(reset())}
          className="bg-slate-700 hover:bg-slate-600 active:scale-95 transition-all text-slate-200 font-semibold py-2.5 px-4 rounded-xl shadow cursor-pointer"
        >
          Reset
        </button>

        <button
          onClick={() => dispatch(increment())}
          className="flex-1 bg-emerald-600 hover:bg-emerald-500 active:scale-95 transition-all text-white font-semibold py-2.5 px-4 rounded-xl shadow-md cursor-pointer"
        >
          + Increase
        </button>
      </div>
    </div>
  );
}

export default Counter;