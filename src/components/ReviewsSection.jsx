import React from 'react';
import Slider from 'react-slick';
import Star from './Star';
import '../styles/ReviewsSection.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const reviews = [
  {
    name: 'Jasmine S.',
    title: 'Best purchase',
    review:
      "My boys love their nugget couch since we've unpacked it! Best purchase ever. Great quality and love that the covers are machine washable.",
    rating: 5,
  },
  {
    name: 'Brian J.',
    title: 'Nugget in the play room',
    review:
      'Imaginative, well made product. A 3 year old and an 18 month old dove on the cushions, as soon as it was unwrapped, and continually went over and through the various configurations the adults set up. A WINNER.',
    rating: 5,
  },
  {
    name: 'Sophia T.',
    title: 'Highly Recommend',
    review:
      'Bought it for my twins — they have not stopped playing! Beautiful colors, soft material, durable foam.',
    rating: 5,
  },
];

const ReviewsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="reviews-section" aria-labelledby="reviews-title">
      <div className="reviews-heading">
        <h2 id="reviews-title">What Our Cushki™ Families Are Saying</h2>
        <p>Real reviews from real families who made the leap</p>
      </div>

      <Slider {...settings} className="reviews-slider">
        {reviews.map(({ name, title, review, rating }) => (
          <div key={name + title} className="review-card">
            <div className="stars" aria-label={`${rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} filled={i < rating} />
              ))}
            </div>
            <h3>{title}</h3>
            <p>{review}</p>
            <span className="reviewer">
              {name} <span className="verified">✔ Verified Buyer</span>
            </span>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ReviewsSection;
