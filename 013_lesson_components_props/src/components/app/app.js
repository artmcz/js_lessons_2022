import Clock from "../clock/clock";
import Welcome from "../welcome/welcome";

function App() {
  return (
    <div>
      <Clock /><Clock /><Clock /><Clock />
      <Welcome name="Алиса" age='22' testDef = 'ff' />
      <Welcome name="Базилио"  age='18' testDef = 'aa' />
      <Welcome name="Буратино"  age='71' testDef = 'dd' />
    </div>
  );
}

export default App;