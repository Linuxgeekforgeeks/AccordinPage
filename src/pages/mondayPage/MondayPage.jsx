
import "./MondayPage.css";
import Question from "../../component/Question/Question";

function MondayPage() {
  return (
    <div className="monday">
      <div className="monday__right">
        <header>
          <h1>My Projects</h1>
        </header>
        <section>
          <Question />
          <Question />
          <Question />
        </section>
      </div>
    </div>
  );
}

export default MondayPage;
