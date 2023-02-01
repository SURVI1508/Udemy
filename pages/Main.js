import Nav from './Components/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import TopSlide from './Components/TopSlide';
import Crack from './Components/Crack'
import FreeTest from './Components/FreeTest'
import WatchFree from './Components/WatchFree'
import MostEngaging from './Components/MostEngaging'
import Classes from './Components/Classes'

const Main = () => {
    return (
        <div>
            <Nav />
            <TopSlide />
            <Crack />
            <FreeTest />
            <WatchFree />
            <MostEngaging />
            <Classes />

        </div>
    )
}

export default Main