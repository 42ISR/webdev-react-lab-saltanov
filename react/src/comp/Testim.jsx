import './Testimontals.css'

const Testim = ({name, avatar, text, course}) =>{
    return(
        <div className="review-card">
             {avatar && <img
        src= {avatar}
        alt={name}
    />}
          <div className="review-card__content">
            <p className="review-card__text">{text}</p>
            <span className="review-card__author">{name} — курс «{course}»</span>
          </div>
        </div>
    )

}
    export default Testim