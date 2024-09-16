import React from 'react';

function Footer() {
  return (
    <footer className="footer bg-[#41844d] text-white py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold ml-5">Company Name</h3>
            <p className="text-white ml-5">
              Our mission statement goes here.
            </p>
          </div>
          <div className="flex flex-col md:flex-row space-x-4">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold ml-5">Quick Links</h3>
              <ul className="list-none">
                <li className="text-white my-5 ml-5">
                  <a href="#">Home</a>
                </li>
                <li className="text-white my-5 ml-5">
                  <a href="#">About Us</a>
                </li>
                <li className="text-white my-5 ml-5">
                  <a href="#">Services</a>
                </li>
                <li className="text-white my-5 ml-5">
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-5 ">Contact Us</h3>
              <p className="text-white">
                Address: 123 Main Street, City, State, ZIP
                <br />
                Phone: (123) 456-7890
                <br />
                Email: info@example.com
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 py-4 text-center">
          <p className="text-sm text-white">
            &copy; {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;