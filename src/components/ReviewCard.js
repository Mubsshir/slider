import styles from './ReviewCard.module.css'
import { FaQuoteRight } from 'react-icons/fa';

const ReviewCard = (props) => {
    const { image, name, title, quote } = props.person;
    let styleName = props.class();
    let classname;
    switch (styleName) {
        case "active":
            classname = styles.activeSlide;
            break;
        case "next":
            classname = styles.nextSlide;
            break;
        case "last":
            classname = styles.lastSlide;
            break;
        default:
            classname = " ";
    }
    return (
        <article className={`${styles.ReviewCard} ${classname}`}>
            <img src={image} alt="" />
            <h3 className={styles.name}>{name}</h3>
            <h3 className={styles.job}>{title}</h3>
            <p className={styles.about}>{quote}</p>
            <FaQuoteRight className={styles.icon} />
        </article>
    )
}

export default ReviewCard;