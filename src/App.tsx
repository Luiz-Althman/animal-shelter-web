import { Footer } from './components/footer';
import { Header } from './components/header';
import { Home } from './pages/home';

export default function App() {
    return (
        <div className="relative text-blue-100 ">
            <Header />
            <Home />
            <Footer />
        </div>
    );
}
