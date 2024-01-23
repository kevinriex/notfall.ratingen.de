"use client";

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
        {
            text: "Amtsblatt 2024-02",
            href: "2024-02.pdf",
        },
    ],
    [
        {
            text: "Amtsblatt 2024-01",
            href: "2024-01.pdf",
        },
        {
            text: "Amtsblatt 2024-02",
            href: "2024-02.pdf",
        },
        {
            text: "Amtsblatt 2024-02",
            href: "2024-02.pdf",
        },
    ],
];

export default function AmtsblaetterPage() {
    return (
        <Container className="px-4 py-5 my-5 lead w-100">
            <Header title="Amtsblätter" />
            <div className="col d-flex align-items-start">
                <div className="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                    {Amtsblaetter.map((linkTriple, idx) => (
                        <Row className="g-4 py-5" key={idx}>
                            {linkTriple.map(({ text, href }, idx) => (
                                <Col
                                    key={text + idx}
                                    className="col-sm-8 col-lg-4"
                                >
                                    <Amtsblatt href={href} text={text} />
                                </Col>
                            ))}
                        </Row>
                    ))}
                </div>
            </div>
        </Container>
    );
}
