import Meta from './Meta';
import Navbar from './Navbar';
import Footer from './Footer';

export default ({ children }) => (
  <div>
    <Meta />
    <Navbar />

    <div className="content-wrapper">
      { children }
    </div>

    <Footer />

    <style jsx>{`
      .content-wrapper {
        margin-top: 50px;
      }
    `}</style>
  </div>
);