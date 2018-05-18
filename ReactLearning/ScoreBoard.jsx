function Team(props) {
    console.log(props);
    return(
        <div className={`team ${props.teamName}`}>
            <div className={"team-name"}>
                <h3>{props.teamName}</h3>

            </div>
            <div className={"counter"}>
                <button className={"btn btn-danger"}>-</button>
                <div className={"team-score"}>0</div>
                <button className={"btn btn-success"}>+</button>

            </div>
        </div>
    )
}

function ScoreBoard() {
    return (

        <div className="scoreboard">
            <div className="header">
                <h1>
                    Celtics vs Cavs - Game 3
                </h1>
            </div>
            <div className="teams">
                <Team teamName={"Boston"}/>
                <Team teamName={"Cleveland"}/>
            </div>
        </div>

    )
}

ReactDOM.render(
    <ScoreBoard/>,
    document.getElementById('root')
)
;

