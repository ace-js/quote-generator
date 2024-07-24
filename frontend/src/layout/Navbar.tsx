import { Navbar as CoreNavbar, Container } from 'react-bootstrap';

type Props = {
    brand: string;
};

const Navbar = ({ brand }: Props) => {
    return (
        <CoreNavbar
            style={{ height: "80px", backgroundColor: "#FBA026" }}
            expand="lg"
            sticky="top"
            data-bs-theme="dark">
            <Container>
                <CoreNavbar.Brand>{brand}</CoreNavbar.Brand>
            </Container>
        </CoreNavbar>
    );
};

export default Navbar;
