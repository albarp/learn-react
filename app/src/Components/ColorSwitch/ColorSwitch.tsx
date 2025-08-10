export default function ColorSwitch({
  onChangeColor,
}: {
  onChangeColor: () => void;
}) {
  return <button onClick={ (e) => {
    e.stopPropagation()
    onChangeColor()
}}>Change Color</button>;
}
