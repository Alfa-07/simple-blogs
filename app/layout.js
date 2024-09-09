import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css'; 

export const metadata = {
  title: 'Simple Blog',
  description: 'A blog built with Next.js',
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
