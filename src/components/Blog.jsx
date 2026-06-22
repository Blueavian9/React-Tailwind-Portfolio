import React, { useState } from "react";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable AI Integration with OpenAI and AWS",
      excerpt:
        "Learn how to integrate OpenAI's GPT models with AWS services for production-ready AI applications.",
      category: "AI Integration",
      date: "2024-01-15",
      readTime: "8 min read",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true,
      content: `
        In this comprehensive guide, we'll explore how to build scalable AI applications using OpenAI's powerful GPT models integrated with AWS services.
        
        ## Architecture Overview
        
        Our architecture leverages AWS Lambda for serverless computing, Amazon API Gateway for request handling, and AWS Secrets Manager for secure API key management.
        
        ## Implementation Steps
        
        1. **Setting up AWS Lambda**: Configure your Lambda function with the necessary permissions and environment variables.
        2. **OpenAI Integration**: Implement secure API calls to OpenAI's endpoints with proper error handling.
        3. **Scaling Considerations**: Use AWS CloudWatch for monitoring and auto-scaling based on demand.
        
        ## Best Practices
        
        - Always implement rate limiting to avoid API quota issues
        - Use caching strategies with Amazon ElastiCache for frequently requested data
        - Implement proper logging and monitoring for production environments
        
        This approach has helped me build robust AI applications that can handle thousands of requests while maintaining low latency and high availability.
      `,
    },
    {
      id: 2,
      title: "Advanced React Patterns for Enterprise Applications",
      excerpt:
        "Explore compound components, render props, and custom hooks for building maintainable React applications.",
      category: "Frontend",
      date: "2024-01-10",
      readTime: "12 min read",
      image:
        "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
      content: `
        Enterprise React applications require robust patterns that promote code reusability, maintainability, and scalability.
        
        ## Compound Components Pattern
        
        This pattern allows you to create flexible and reusable components that work together seamlessly.
        
        ## Custom Hooks for Business Logic
        
        Extract complex business logic into custom hooks to promote reusability and testing.
        
        ## Performance Optimization
        
        Learn about React.memo, useMemo, and useCallback for optimizing component performance in large applications.
      `,
    },
    {
      id: 3,
      title: "DevOps Best Practices: CI/CD with Docker and AWS",
      excerpt:
        "Implement robust CI/CD pipelines using Docker containers and AWS services for reliable deployments.",
      category: "DevOps",
      date: "2024-01-05",
      readTime: "10 min read",
      image:
        "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800",
      content: `
        Modern DevOps practices are essential for delivering reliable software at scale. This article covers implementing CI/CD pipelines with Docker and AWS.
        
        ## Docker Containerization
        
        Learn how to create efficient Docker images and manage container orchestration.
        
        ## AWS CodePipeline Integration
        
        Set up automated deployment pipelines that trigger on code commits.
        
        ## Monitoring and Rollback Strategies
        
        Implement comprehensive monitoring and automated rollback mechanisms for production safety.
      `,
    },
    {
      id: 4,
      title: "Cloud Architecture: Designing for Scale and Resilience",
      excerpt:
        "Design principles for building cloud-native applications that can handle millions of users.",
      category: "Cloud Architecture",
      date: "2023-12-28",
      readTime: "15 min read",
      image:
        "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
      content: `
        Building applications that can scale to millions of users requires careful architectural planning and cloud-native design principles.
        
        ## Microservices Architecture
        
        Break down monolithic applications into manageable, scalable microservices.
        
        ## Load Balancing and Auto-Scaling
        
        Implement intelligent load balancing and auto-scaling strategies.
        
        ## Data Management at Scale
        
        Design database architectures that can handle massive amounts of data efficiently.
      `,
    },
    {
      id: 5,
      title: "The Future of AI in Software Development",
      excerpt:
        "Exploring how AI tools are transforming the software development lifecycle and what it means for developers.",
      category: "AI Integration",
      date: "2023-12-20",
      readTime: "7 min read",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      content: `
        AI is revolutionizing software development, from code generation to automated testing and deployment.
        
        ## AI-Powered Code Generation
        
        Tools like GitHub Copilot and ChatGPT are changing how we write code.
        
        ## Automated Testing and QA
        
        AI can help generate test cases and identify potential bugs before they reach production.
        
        ## The Developer's Role Evolution
        
        How developers can adapt and thrive in an AI-augmented development environment.
      `,
    },
    {
      id: 6,
      title: "Building Real-time Applications with WebSockets and Node.js",
      excerpt:
        "Create responsive real-time applications using WebSockets, Socket.io, and modern Node.js patterns.",
      category: "Backend",
      date: "2023-12-15",
      readTime: "11 min read",
      image:
        "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800",
      content: `
        Real-time applications are becoming increasingly important in modern web development. Learn how to build them effectively.
        
        ## WebSocket Fundamentals
        
        Understanding the WebSocket protocol and when to use it over traditional HTTP.
        
        ## Socket.io Implementation
        
        Building robust real-time features with Socket.io and Node.js.
        
        ## Scaling Real-time Applications
        
        Strategies for scaling WebSocket connections across multiple servers.
      `,
    },
  ];

  const categories = [
    "All",
    "AI Integration",
    "Frontend",
    "DevOps",
    "Cloud Architecture",
    "Backend",
  ];

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const featuredPost = blogPosts.find((post) => post.featured);

  if (selectedArticle) {
    return (
      <section
        id="blog"
        className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 min-h-screen"
      >
        <div className="container mx-auto px-6">
          <button
            onClick={() => setSelectedArticle(null)}
            className="mb-8 flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </button>

          <article className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-64 object-cover rounded-xl mb-8"
              />

              <div className="flex items-center gap-4 mb-6 text-sm text-gray-300">
                <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full">
                  {selectedArticle.category}
                </span>
                <span>{selectedArticle.date}</span>
                <span>{selectedArticle.readTime}</span>
              </div>

              <h1 className="text-4xl font-bold text-white mb-6">{selectedArticle.title}</h1>

              <div className="prose prose-invert prose-purple max-w-none">
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {selectedArticle.content}
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/20">
                <div className="flex items-center justify-between">
                  <div className="text-gray-300">
                    <p className="font-semibold">Written by Darius Hines</p>
                    <p className="text-sm">Software Engineer & AI Enthusiast</p>
                  </div>
                  <a
                    href="#contact"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Get In Touch
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical Blog
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights on AI integration, cloud architecture, and modern software development
            practices
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-pink-600; text-white shadow-lg"
                  : "bg-white/10; text-gray-300; hover:bg-white/20; border border-white/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {selectedCategory === "All" && featuredPost && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Featured Article</h3>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                    <span className="text-purple-400 text-sm">{featuredPost.category}</span>
                  </div>
                  <img
                    src="/assets/Cesar_Cover2.webp"
                    alt="Cesar Aguilar Blog"
                    className="w-full h-64 object-cover rounded-xl mb-8"
                  />
                  <h4 className="text-2xl font-bold text-white mb-4">{featuredPost.title}</h4>
                  <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                    <span>{featuredPost.date}</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <button
                    onClick={() => setSelectedArticle(featuredPost)}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Read Full Article
                  </button>
                </div>
                <div>
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts
            .filter((post) => !post.featured || selectedCategory !== "All")
            .map((post) => (
              <article
                key={post.id}
                className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <button
                    onClick={() => setSelectedArticle(post)}
                    className="w-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 py-2 rounded-lg hover:from-purple-600/30 hover:to-pink-600/30 transition-all duration-300 border border-purple-500/30"
                  >
                    Read More
                  </button>
                </div>
              </article>
            ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No articles found in this category.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to collaborate on a project?
            </h3>
            <p className="text-gray-300 mb-6">
              I'm always interested in discussing new opportunities and technical challenges.
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
