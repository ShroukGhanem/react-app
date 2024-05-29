import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button onClick={() => console.log("clicked")} color="danger">
        My Btn
      </Button>
    </div>
  );
}

export default App;
