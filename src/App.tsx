import s from "./App.module.css";
import { Developer } from "./developer";
import { Student } from "./student";
import { Teacher } from "./teacher";

function App() {
  return (
    <div className={s.layout}>
      <div className={s.app}>
        <h2 className={s.title}>Teacher</h2>
        <div className={s.phone}>
          <Teacher />
        </div>
      </div>
      <div className={s.app}>
        <h2 className={s.title}>Student</h2>
        <div className={s.phone}>
          <Student />
        </div>
      </div>
      <div className={s.app}>
        <h2 className={s.title}>Developer</h2>
        <div className={s.phone}>
          <Developer />
        </div>
      </div>
    </div>
  );
}

export default App;
