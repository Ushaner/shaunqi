import Spawnpoint from "../Legos/Spawnpoint";
import ToppyBoppy from "../Legos/ToppyBoppy";
import { Container, Row, Col } from 'react-bootstrap'
import '../LegosCSS/RippyOffy.css';

function RippyOffy() {
    return (
        <Container>
        <div className="Doos">
        <ToppyBoppy/>
        <Spawnpoint/>
        </div>
        </Container>
    )
}
export default RippyOffy 