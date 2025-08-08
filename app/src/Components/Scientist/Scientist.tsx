import scientistData from "./data.json";

export default function Scientists() {
  const scientistList = scientistData.map((s) => (
    <li key={s.id}>
      <img src={s.url} alt={s.name} height={100} width={100}></img>
      {s.name}
      <p>
        <b>{s.name}:</b>
        {" " + s.profession}
        known for {s.accomplishment}
      </p>
    </li>
  ));

  return <ul>{scientistList}</ul>;
}
