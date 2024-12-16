import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const QLinks = "hover:underline font-bold";
  const colStyle = "text-lg font-bold text-white1 mb-4";
  const iStyle = "w-8 h-8 flex items-center justify-center rounded-full";
  
  return (
    <footer className="bg-green2 text-brown1 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h2 className={colStyle}>Online Shop</h2>
            <p className="text-sm">
              Delivering quality products since 2012. Stay connected with us.
            </p>
          </div>

          <div>
            <h2 className={colStyle}>Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="/" className={QLinks}>Home</a></li>
              <li><a href="/products" className={QLinks}>Products</a></li>
              <li><a href="/cart" className={QLinks}>Shopping Cart</a></li>
              <li><a href="/userDetail" className={QLinks}>User Detail</a></li>
            </ul>
          </div>

          <div>
            <h2 className={colStyle}>Contact Us</h2>
            <p className="text-sm flex items-center space-x-2">
              <span>Email: contact@OnlineShop.com</span>
            </p>
            <p className="text-sm flex items-center space-x-2 mt-2">
              <span>Phone: +0 000 000 000</span>
            </p>
            <div className="flex flex-col items-start space-y-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2">
                <div className={iStyle}>
                  <FaFacebook className="text-white1 w-5 h-5" />
                </div>
                <span className="font-medium hover:underline">Facebook</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2">
                <div className={iStyle}>
                  <FaTwitter className="text-white1 w-5 h-5" />
                </div>
                <span className="font-medium hover:underline">Twitter</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2">
                <div className={iStyle}>
                  <FaInstagram className="text-white1 w-5 h-5" />
                </div>
                <span className="font-medium hover:underline">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} Online Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
