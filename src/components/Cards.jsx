import Card from "./Card";
import { CARDS } from "../data";

export default function Cards() {
  return (
    <div className="cards">
      {CARDS.map((item) => (
        <Card key={item.title} {...item} />
      ))}
    </div>
  );
}
