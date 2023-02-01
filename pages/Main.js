import Nav from './Components/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import TopSlide from './Components/TopSlide';
import Crack from './Components/Crack'
import FreeTest from './Components/FreeTest'
import WatchFree from './Components/WatchFree'

const Main = () => {
    return (
        <div>
            <Nav />
            <TopSlide />
            <Crack />
            <FreeTest/>
            <WatchFree/>

        </div>
    )
}

export default Main