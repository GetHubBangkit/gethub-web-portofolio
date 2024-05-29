

export default function Home() {
    return (
      <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gethub to-light-blue-500 py-20 text-white">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Gethub</h1>
            <p className="text-lg md:text-xl mb-8">Your Gateway to Freelance Success</p>
            <a href="/" className="bg-white text-cyan-600 px-6 py-3 rounded-full font-bold text-lg hover:bg-cyan-600 hover:text-white transition duration-300">Get Application</a>
          </div>
        </section>
  
        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-gethub" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v.59l-.3.3A9 9 0 109 18.42l.3-.3V17a1 1 0 002 0v1.12l.3.3A9 9 0 1017.7 14.3l-.3-.3V13a1 1 0 00-2 0v.59l-.3.3A7 7 0 019 15.42l.3-.3V14a1 1 0 00-2 0v1.12l-.3.3A7 7 0 013.7 10.3l.3-.3V9a1 1 0 00-1-1H2a1 1 0 00-1 1v1.12l-.3.3a7 7 0 010-7.84l.3.3V3a1 1 0 001-1h1.12l.3-.3a7 7 0 017.84 0l.3.3H14a1 1 0 001-1zM6 10a1 1 0 11-2 0 1 1 0 012 0zm8-7a1 1 0 11-2 0 1 1 0 012 0zm3 3a1 1 0 110 2 1 1 0 010-2zm-7 7a1 1 0 110-2 1 1 0 010 2z" clipRule="evenodd" />
                </svg>
                <h2 className="text-xl font-bold mb-2">Feature 1</h2>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              {/* Feature 2 */}
              <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-gethub" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v.59l-.3.3A9 9 0 109 18.42l.3-.3V17a1 1 0 002 0v1.12l.3.3A9 9 0 1017.7 14.3l-.3-.3V13a1 1 0 00-2 0v.59l-.3.3A7 7 0 019 15.42l.3-.3V14a1 1 0 00-2 0v1.12l-.3.3A7 7 0 013.7 10.3l.3-.3V9a1 1 0 00-1-1H2a1 1 0 00-1 1v1.12l-.3.3a7 7 0 010-7.84l.3.3V3a1 1 0 001-1h1.12l.3-.3a7 7 0 017.84 0l.3.3H14a1 1 0 001-1zM6 10a1 1 0 11-2 0 1 1 0 012 0zm8-7a1 1 0 11-2 0 1 1 0 012 0zm3 3a1 1 0 110 2 1 1 0 010-2zm-7 7a1 1 0 110-2 1 1 0 010 2z" clipRule="evenodd" />
                </svg>
                <h2 className="text-xl font-bold mb-2">Feature 2</h2>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              {/* Feature 3 */}
              <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-cyan-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v.59l-.3.3A9 9 0 109 18.42l.3-.3V17a1 1 0 002 0v1.12l.3.3A9 9 0 1017.7 14.3l-.3-.3V13a1 1 0 00-2 0v.59l-.3.3A7 7 0 019 15.42l.3-.3V14a1 1 0 00-2 0v1.12l-.3.3A7 7 0 013.7 10.3l.3-.3V9a1 1 0 00-1-1H2a1 1 0 00-1 1v1.12l-.3.3a7 7 0 010-7.84l.3.3V3a1 1 0 001-1h1.12l.3-.3a7 7 0 017.84 0l.3.3H14a1 1 0 001-1zM6 10a1 1 0 11-2 0 1 1 0 012 0zm8-7a1 1 0 11-2 0 1 1 0 012 0zm3 3a1 1 0 110 2 1 1 0 010-2zm-7 7a1 1 0 110-2 1 1 0 010 2z" clipRule="evenodd" />
                </svg>
                <h2 className="text-xl font-bold mb-2">Feature 3</h2>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-r from-light-blue-500 to-cyan-400">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <p className="text-gray-800 mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                <p className="font-bold">- John Doe</p>
              </div>
              {/* Testimonial 2 */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <p className="text-gray-800 mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                <p className="font-bold">- Jane Smith</p>
              </div>
              {/* Testimonial 3 */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <p className="text-gray-800 mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                <p className="font-bold">- Alex Johnson</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-lg mb-8">Join thousands of developers already using Gethub to build amazing projects.</p>
          <a href="/signup" className="bg-cyan-400 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gethub transition duration-300">Get Application</a>
        </section>
      </div>
    );
  }
  