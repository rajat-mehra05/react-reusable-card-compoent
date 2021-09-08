import CardComp from "./components/CardComp";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <CardComp header="Twitter" type="facebook">
        <h1> card box </h1>
      </CardComp>
    </div>
  );
}
