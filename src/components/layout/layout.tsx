import Home from '../../pages/home';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

export function Layout() {
    return (
        <>
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
        </>
    );
}
