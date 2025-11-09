import styles from './Card.module.css'
import Buttons from '../Buttons/Buttons'
import { useEffect, useState } from 'react'

const Card = () => {
  const [quotes, setQuotes] = useState([]); // plural
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const quoteApi = 'https://dummyjson.com/quotes';

  useEffect(() => {
    fetch(quoteApi)
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data.quotes); // store full array
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching quote:", error);
        setLoading(false);
      });
  }, []);

  // next button 
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? quotes.length - 1 : prevIndex - 1
    );
  };

  // WhatsApp share
  const handleShare = () => {
    const quote = quotes[currentIndex];
    if (!quote) return;

    const message = `"${quote.quote}" - ${quote.author}`;
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.card_container}>
        <h1>Inspirational Quote Generator</h1>

        {loading ? (
          <p className={styles.quote_text}>Loading...</p>
        ) : (
          <>
            <p className={styles.quote_text}>
              "{quotes[currentIndex]?.quote}"
            </p>
            <h3 className={styles.author_name}>
              {quotes[currentIndex]?.author}
            </h3>
          </>
        )}

        <div className={styles.btn_container}>
          <Buttons text="Previous" onClick={handlePrevious} />
          <Buttons text="Next" onClick={handleNext} />
          <Buttons text="Share on WhatsApp" onClick={handleShare} />
        </div>
      </div>
    </div>
  );
};

export default Card;
