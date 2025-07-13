import React from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import { BsCalendar, BsClock, BsTags } from 'react-icons/bs';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      category: 'Platform Update',
      title: 'High-Performance Order Storage',
      excerpt: 'Learn about our new order storage system designed to handle high-volume transactions.',
      tags: ['Product News', 'Performance'],
      date: 'June 15, 2025',
      readTime: '5 min read',
    },
    // ... other posts
  ];

  const popularTags = [
    { name: 'Ecommerce', count: 24 },
    { name: 'Marketing', count: 18 },
    { name: 'SEO', count: 15 },
    { name: 'Productivity', count: 12 }
  ];

  const newsletterSignup = async (email) => {
    // Newsletter signup logic
  };

  return (
    <div className="min-vh-100 d-flex flex-column bg-light">
      <Navbar />
      
      <main className="flex-grow-1">
        {/* Hero Section */}
        <div className="bg-primary bg-opacity-10 py-5">
          <div className="container text-center">
            <h1 className="display-5 fw-bold text-dark mb-3">ShopCart Blog</h1>
            <p className="lead text-muted">
              Insights, tips and strategies to grow your online business
            </p>
          </div>
        </div>

        <div className="container py-5">
          <div className="row">
            {/* Main Content */}
            <div className="col-lg-8">
              {/* Search and Filter */}
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      className="form-control"
                    />
                    <button className="btn btn-primary">
                      Search
                    </button>
                  </div>
                </div>
              </div>

              {/* Featured Posts */}
              <div className="row g-4 mb-5">
                {blogPosts.map((post) => (
                  <div key={post.id} className="col-md-6">
                    <div className="card h-100 shadow-sm">
                      <img 
                        src="https://via.placeholder.com/600x400" 
                        className="card-img-top"
                        alt={post.title}
                      />
                      <div className="card-body">
                        <div className="d-flex align-items-center text-muted small mb-2">
                          <BsCalendar className="me-2" />
                          <span className="me-3">{post.date}</span>
                          <BsClock className="me-2" />
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="h5">{post.title}</h3>
                        <p className="card-text">{post.excerpt}</p>
                        <div className="d-flex flex-wrap gap-2 mb-3">
                          {post.tags.map((tag) => (
                            <span key={tag} className="badge bg-light text-dark border">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <a href="#" className="btn btn-outline-primary">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <nav aria-label="Blog pagination">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex="-1">Previous</a>
                  </li>
                  <li className="page-item active"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              {/* Newsletter */}
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h3 className="h5 mb-3">Subscribe to Newsletter</h3>
                  <p className="text-muted small mb-3">
                    Get the latest articles and news delivered to your inbox
                  </p>
                  <div className="input-group mb-3">
                    <input 
                      type="email" 
                      className="form-control" 
                      placeholder="Your email" 
                    />
                    <button className="btn btn-primary">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>

              {/* Popular Tags */}
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h3 className="h5 mb-3">Popular Tags</h3>
                  <div className="d-flex flex-wrap gap-2">
                    {popularTags.map((tag, index) => (
                      <a 
                        key={index} 
                        href="#" 
                        className="badge bg-light text-dark text-decoration-none border"
                      >
                        {tag.name} <span className="text-muted">({tag.count})</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;