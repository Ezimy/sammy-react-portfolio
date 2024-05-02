import './index.scss'
function AnimatedLetters({letterClass, strArray, index}){
    return(
        <span>
            {
                strArray.map((char,i)=>(
                    <span key={char +i} className={`${letterClass} _${i+index}`}>

                    </span>
                ))
            }
        </span>
    )
}