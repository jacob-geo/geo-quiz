import "../../css/quizcard.css"

function QuizCardContent({data, type}){

    if(type==="flag"){
        return <img className="flag-img" src={data.flags?.svg} alt="flag of ..."/>
    }
    
    if(type==="capital"){
        return (
            <div className="card-text">
                Hauptstadt von 
                <span className="card-text-big">
                    {data.name.common}
                </span>
            </div>
        )
    }
}

function QuizCard({type, data, isCorrect, score, showAnswer}){

    const getAnswer = (type) =>{
        if(type === "flag") return data.name.common
        if(type === "capital") return data.capital?.[0]
    }

    return (
        <div className={`quiz-card ${type} ${isCorrect}`}>
            
            <QuizCardContent data={data} type={type}/>

            <div className="score">{score.correct}/{score.total}</div>
            <div className="solution">
                {isCorrect || showAnswer ? getAnswer(type) : " . . . "}
            </div>
        </div>    
    )
}

function QuizForm({onCheck, onSkip, inputRef, isCorrect}){

    const handleInputEnter = (e) => {
        if(e.code === "Enter") onCheck(e.target.value)
    }

    return(
        <div className="quiz-form">
            <input type="text" ref={inputRef} onKeyDown={handleInputEnter}/>
            <button className="skip-btn" onClick={() => onSkip(isCorrect ? false : true)}>
                {isCorrect ? "Next" : "Skip"}
            </button>
            <button className="check-btn" onClick={(e) => onCheck(e.target.closest(".quiz-form").querySelector("input").value)}>
                Check
            </button>
        </div>
    )
}

export {
    QuizCard,
    QuizForm
}