import Counter from "./Counter";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-extrabold text-white tracking-tight mb-2">
          React Journey - Lesson 21
        </h1>
        <p className="text-slate-400 text-sm">
          State Management with Redux Toolkit (RTK)
        </p>
      </div>

      <Counter />
    </div>
  );
}

export default App;
