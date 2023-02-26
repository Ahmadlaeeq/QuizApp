import questions from "./questions";

function ResultSheet(props){
return(
    <div className="container my-5 queblock shadow-lg p-3 mb-5 bg-body-tertiary rounded">
    <h2>Correct Questions: {props.correctAns} of {questions.length}</h2>
    <h2>Total Score: {props.score}/25</h2>
    <div>
        <button className="btn btn-primary btn-lg opbtn my-1 "
        onClick={props.handleQuit}
        >Play Again</button>
    </div>
</div>
)
}
export default ResultSheet;