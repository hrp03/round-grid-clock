import "./round.css";

function Round(props) {

    return (
        <div className={`container`}>
            <div className={`hour ${props.value}`}>
                <div className="handle"></div>
            </div>
            <div className={`minute ${props.value}`}>
                <div className="handle"></div>
            </div>
        </div>
    )
}

export default Round;