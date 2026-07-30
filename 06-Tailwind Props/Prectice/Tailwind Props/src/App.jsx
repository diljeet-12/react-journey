import Card from "./components/Card";
 function App() {
  let myobj = {
    age: 20,
    city: "Amritsar",
    profession: "Student"
  }
  let myobj2 = {
    age: 25
  }
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-8">
    <h1 className="bg-black text-white text-5xl p-4 rounded-2xl" >
      Tailwind test
    </h1>
    <Card username="diljeet" someobj={myobj}/>
    <Card username="Rahul" someobj={myobj2}/>
    <Card />
    </div>
    
  );
  
} 
export default App;
