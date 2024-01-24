"use client";
import StyledLink from "@/app/components/StyledLink";
import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container"

export default function ImpressumPage() {
    const [hostname, setHostname] = useState("");
    useEffect(() => {
        if (typeof window !== "undefined") {
            setHostname(window.location.hostname)
        }
    }, []);
    return (
        <Container className="px-4 py-5 my-5 lead">
            <h1 className="py-5">Impressum</h1>
            <div className="uncode_text_Col">
                <p className="">
                    Die Internetportale{" "}
                    <StyledLink href="https://www.ratingen.de" arrow={true} />{" "}
                    bzw.{" "}
                    <StyledLink
                        href="https://www.stadt-ratingen.de"
                        arrow={true}
                    />{" "}
                    sind Informationsangebote der
                </p>
                <p className="">
                    <strong>Stadt Ratingen</strong>
                    <br />
                    Der Bürgermeister
                    <br />
                    Minoritenstraße. 2-6
                    <br />
                    40878 Ratingen
                </p>
                <p className="pt-2 ">
                    Die Stadt Ratingen ist eine Körperschaft des öffentlichen
                    Rechts. Sie wird vertreten durch Bürgermeister Klaus Pesch.
                </p>
                <h2 className="pt-5">Telefon / Telefax</h2>
                <Row>
                    <Col>
                        <strong>Telefonzentrale</strong>
                    </Col>
                    <Col>
                        <StyledLink href="tel:02102 550-0" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <strong>Behördenrufnummer</strong>
                    </Col>
                    <Col>
                        <StyledLink href="tel:115" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <strong>Telefax (Poststelle)</strong>
                    </Col>
                    <Col>
                        <StyledLink href="tel:02102 550-9250" />
                    </Col>
                </Row>
                <h2 className="pt-5">E-Mail</h2>
                <Row>
                    <Col>
                        <strong>E-Mail ohne Signatur</strong>
                    </Col>
                    <Col>
                        <StyledLink href="mailto:stadt@ratingen.de" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <strong>DE-Mail</strong>
                    </Col>
                    <Col>
                        <StyledLink href="mailto:poststelle@ratingen.de-mail.de" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <strong>
                            E-Mail mit qualifizierter elektronischer Signatur
                        </strong>
                    </Col>
                    <Col>
                        <StyledLink href="mailto:vps@ratingen.de" />
                    </Col>
                </Row>
                <h2 className="pt-5">Steuerliche Angaben</h2>
                <Row>
                    <Col>
                        <strong>Umsatzsteuer- Identifikationsnummer</strong>
                    </Col>
                    <Col>DE121633426</Col>
                </Row>
                <h2 className="pt-5">Rechtliche Hinweise</h2>
                <p className="">
                    Das Layout und die Inhalte dieses Internetauftritts sind
                    urheberrechtlich geschützt. Die Stadt Ratingen ist bemüht,
                    Informationen auf ihren Internetseiten richtig, vollständig
                    und aktuell wiederzugeben. Fehler und Unklarheiten können
                    jedoch nicht vollständig ausgeschlossen werden. Die Stadt
                    Ratingen übernimmt keine Gewähr für Richtigkeit,
                    Vollständigkeit und Aktualität der von ihr bereitgestellten
                    Informationen. Sie haftet nicht für Schäden, die aus der
                    Nutzung der zur Verfügung gestellten Informationen
                    entstehen. Soweit die Stadt Ratingen Links auf Angebote
                    Dritter legt, wird darauf hingewiesen, dass die Stadt
                    Ratingen auf die fremden Inhalte keinen Einfluss und sich
                    die Inhalte auch nicht zu eigen macht. Die
                    Verantwortlichkeit für diese fremden Inhalte liegt allein
                    bei dem Anbieter, der diese Inhalte bereithält.
                </p>
                <h2 className="pt-5">Gestaltung und Umsetzung</h2>
                <div>
                    <Row>
                        <Col>
                            <strong>Design:</strong>
                        </Col>
                        <Col>Kevin Yven Riexinger</Col>
                    </Row>
                    <Row>
                        <Col>
                            <strong>Infrastruktur:</strong>
                        </Col>
                        <Col>Konstantin Westhoff</Col>
                    </Row>
                    <Row>
                        <Col>
                            {" "}
                            <strong>Code:</strong>
                        </Col>
                        <Col>Beide :)</Col>
                    </Row>
                </div>
                <h2 className="pt-5">Lizenzen</h2>
                <p>
                    Alle für diesen Webauftritt verwendeten Techologien finden
                    Sie unter:{" "}
                    <StyledLink
                        href="/lizenzen"
                        arrow={true}
                        text={`${hostname}/lizenzen`}
                    />
                </p>
                <h2 className="pt-5">Quelltext</h2>
                <p>
                    Diesen Quelltext für diesen Webauftritt finden Sie unter:{" "}
                    <StyledLink
                        href="https://github.com/kevinriex/notfall.ratingen.de"
                        arrow={true}
                    />
                </p>
            </div>
        </Container>
    );
}
