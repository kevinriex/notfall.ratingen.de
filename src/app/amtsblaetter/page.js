
import Header from "@/app/components/Header";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Amtsblatt from "../components/Amtsblatt";

const Amtsblaetter = [
    [
        {
            text: "Amtsblatt 2024-01",
            href: "2024-01.pdf",
        },
        {
            text: "Amtsblatt 2024-02",
            href: "2024-02.pdf",
        },
    ],
];

async function fetchPreviews() {
    const res = await fetch("http://127.0.0.1:3000/api/imgtopdf")
    const { images } = await res.json()
    return images.map((image) => `data:image/png;base64,${image}`);
}

export default async function AmtsblaetterPage() {
    const img = await fetchPreviews()
    return (
        <Container className="px-4 py-5 my-5 lead w-100">
            <Header title="Amtsblätter" />
            {Amtsblaetter.map((linkTriple, idx) => (
                <Row className="g-4 py-5" key={idx}>
                    {linkTriple.map(({ text, href }, idx) => (
                        <Col key={text + idx} className="col-sm-8 col-lg-4">
                            <Amtsblatt href={href} text={text} image={img[idx]} />
                        </Col>
                    ))}
                </Row>
            ))}
        </Container>
    );
}
