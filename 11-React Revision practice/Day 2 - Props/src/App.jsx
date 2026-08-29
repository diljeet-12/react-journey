function App() {
  const course = "MERN Stack";

  return <Message course={course} />;
}

function Message(props) {
  return <h1>I am learning {props.course}</h1>;
}

export default App;