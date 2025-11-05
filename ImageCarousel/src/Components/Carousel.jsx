import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Carousel.module.css';

const Carousel = () => {

    const images = [
        "https://picsum.photos/id/1018/600/400",
        "https://picsum.photos/id/1015/600/400",
        "https://images.unsplash.com/photo-1762221527642-3dcb0d5b4b4d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1026",
        "https://images.unsplash.com/photo-1752035682786-23e56b84dd12?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        "https://images.unsplash.com/photo-1752035682784-b482b6904c13?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        "https://images.unsplash.com/photo-1761872936237-d207421c3c69?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1033",
        "https://images.unsplash.com/photo-1759222973482-3c0d90dd8549?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        "https://images.unsplash.com/photo-1761873177874-cb09e93778c8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        "https://plus.unsplash.com/premium_photo-1761779542229-ee0d4bb8a82f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600",
        "https://plus.unsplash.com/premium_photo-1760541119946-681e1c93b805?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=1000",
        "https://images.unsplash.com/photo-1761838816945-021a4ebd67bc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=1000"
    ];


    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        )
    }

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className={`${styles.carouselContainer}`}>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        src={images[currentIndex]}
                        className={`d-block w-100 ${styles.carouselImg}`}
                        alt="carousel" />
                </div>
            </div>

            <button
                className="carousel-control-prev"
                type="button"
                onClick={handlePrev}
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                onClick={handleNext}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel;