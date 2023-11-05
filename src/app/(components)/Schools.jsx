"use client";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Adress from "../(components)/Adress";
import Header from "../(components)/Header"

const LinkSammlung = [
  [    
    {
      name: "Minoritenschule",
      href: "https://www.minoritenschule.de/",
      street: "Minoritenstraße 12",
      plz: "40878 Ratingen",
      type: "Städt. Kath. Grundschule",
      tel: "02102 5504530",
      email: "schule@minoritenschule.ratingen.de",
      district: "Mitte",
    },
    {
      name: "Minoritenschule",
      href: "https://www.minoritenschule.de/",
      street: "Minoritenstraße 12",
      plz: "40878 Ratingen",
      type: "Städt. Kath. Grundschule",
      tel: "02102 5504530",
      email: "schule@minoritenschule.ratingen.de",
      district: "Mitte",
    },
    {
      name: "Minoritenschule",
      href: "https://www.minoritenschule.de/",
      street: "Minoritenstraße 12",
      plz: "40878 Ratingen",
      type: "Städt. Kath. Grundschule",
      tel: "021025504530",
      email: "schule@minoritenschule.ratingen.de",
      district: "Mitte",
    },
  ],
  [    
    {
      name: "Minoritenschule",
      href: "https://www.minoritenschule.de/",
      street: "Minoritenstraße 12",
      plz: "40878 Ratingen",
      type: "Städt. Kath. Grundschule",
      tel: "02102 5504530",
      email: "schule@minoritenschule.ratingen.de",
      district: "Mitte",
    },
    {
      name: "Minoritenschule",
      href: "https://www.minoritenschule.de/",
      street: "Minoritenstraße 12",
      plz: "40878 Ratingen",
      type: "Städt. Kath. Grundschule",
      tel: "02102 5504530",
      email: "schule@minoritenschule.ratingen.de",
      district: "Mitte",
    },
    {
      name: "Minoritenschule",
      href: "https://www.minoritenschule.de/",
      street: "Minoritenstraße 12",
      plz: "40878 Ratingen",
      type: "Städt. Kath. Grundschule",
      tel: "021025504530",
      email: "schule@minoritenschule.ratingen.de",
      district: "Mitte",
    },
  ],
];


export default function SchoolList({ mastername }) {
  return (
    <>
    <Container className="px-4 py-5">
      <Header h1="Unsere Schulen"/>
      {LinkSammlung.map((linkTriple, idx) => (
        <Row className="g-4 py-5" key={idx}>
          {linkTriple.map(({ name, href, street, plz, type, tel, email, district }, idx) => (
            <Col key={idx}>
             <Adress
                key={idx}
                name={name}
                href={href}
                street={street}
                plz={plz}
                type={type}
                tel={tel}
                email={email}
                district={district}
              />
            </Col>
          ))}
        </Row>
      ))}
    </Container>
    </>
  );
}