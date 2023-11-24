import { PomodoroTimer } from './components/pomodoro-timer';

function App(): JSX.Element {
  return (
    <div className="container">
      <PomodoroTimer
        pomodoroTime={5}
        shortRestTime={2}
        longRestTime={5}
        cycles={4}
      />
    </div>
  );
}

export default App;
