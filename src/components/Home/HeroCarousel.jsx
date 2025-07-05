import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeroCarousel = () => {
  const heroItems = [
    {
      id: 1,
      title: "Summer Collection",
      description: "Discover our new arrivals for the season",
      image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      buttonText: "Shop Now",
      buttonLink: "/products",
    },
    {
      id: 2,
      title: "Limited Time Offer",
      description: "Get 30% off on selected items",
      image: "https://plus.unsplash.com/premium_photo-1684407616442-8d5a1b7c978e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      buttonText: "View Deals",
      buttonLink: "/products?discount=true",
    },
    {
      id: 3,
      title: "New Tech Gadgets",
      description: "The latest tech at competitive prices",
      image: "https://images.unsplash.com/photo-1515940175183-6798529cb860?q=80&w=1029&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      buttonText: "Explore",
      buttonLink: "/products?category=electronics",
    },
  ];

  return (
    <Carousel fade className="mb-5" style={{ height: "500px" }}>
      {heroItems.map((item) => (
        <Carousel.Item key={item.id} style={{ height: "500px" }}>
          <img
            className="d-block w-100 h-100"
            src={item.image}
            alt={item.title}
            style={{ 
              objectFit: "cover",
              objectPosition: "center",
              width: "100%",
              height: "100%"
            }}
          />
          <Carousel.Caption className="hero-overlay d-flex flex-column justify-content-center h-100">
            <div className="container">
              <h2 className="display-4 fw-bold mb-3">{item.title}</h2>
              <p className="lead mb-4">{item.description}</p>
              <Link
                to={item.buttonLink}
                className="btn btn-primary btn-lg px-4 rounded-pill"
              >
                {item.buttonText}
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HeroCarousel;