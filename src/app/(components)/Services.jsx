"use client";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import {
    faBook,
    faCalendarDays,
    faChild,
    faEarthEurope,
    faGraduationCap,
    faLandmark,
    faSchool,
    faTrash,
    faUser,
    faWarning,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ServiceLink from "../(components)/ServiceLink";

const LinkSammlung = [
    [
        {
            name: "Serviceportal",
            href: "https://serviceportal.ratingen.de/",
            desc: "Hier finden sie alle wichtigen Dienstleistungen.",
            icon: <FontAwesomeIcon icon={faUser} />,
        },
        {
            name: "Terminvergabe",
            href: "https://termine.ratingen.de/",
            desc: "Hier können Sie Termine im Bürgerbüro buchen.",
            icon: <FontAwesomeIcon icon={faCalendarDays} />,
        },
        {
            name: "Ratsinformationssystem",
            href: "https://ratsinfo.ratingen.de/",
            desc: "Hier finden sie alle Ratsunterlagen.",
            icon: <FontAwesomeIcon icon={faLandmark} />,
        },
    ],
    [
        {
            name: "Mängelmelder",
            href: "https://ratingen.maengelmelder.de/",
            desc: "Hier können Sie Termine im Bürgerbüro buchen.",
            icon: <FontAwesomeIcon icon={faWarning} />,
        },
        {
            name: "Stadtbibliothek",
            href: "https://webopac.ratingen.de/webopac/index.asp?DB=web_biblio",
            desc: "Hier finden sie alle wichtigen Dienstleistungen.",
            icon: <FontAwesomeIcon icon={faBook} />,
        },
        {
            name: "Sperrmüllanmeldung",
            href: "https://awistalogistik.de/das-bieten-wir/ratingen/",
            desc: "Hier finden sie alle wichtigen Dienstleistungen.",
            icon: <FontAwesomeIcon icon={faTrash} />,
        },
    ],
    [
        {
            name: "VHS",
            href: "https://vhs-ratingen.de/",
            desc: "Hier finden sie alle wichtigen Dienstleistungen.",
            icon: <FontAwesomeIcon icon={faSchool} />,
        },
        {
            name: "Geoportal",
            href: "https://gdi.regioit.de/portal/apps/sites/#/kartendienste/",
            desc: "Hier finden sie alle wichtigen Dienstleistungen.",
            icon: <FontAwesomeIcon icon={faEarthEurope} />,
        },
        {
            name: "Aktuelle Informationen",
            href: "https://facebook.com/DeinRatingen/",
            desc: "Hier finden sie alle wichtigen Dienstleistungen.",
            icon: <FontAwesomeIcon icon={faFacebook} />,
        },
    ],
    [
        {
            name: "Kitas",
            href: "https://kita-planer.kdo.de/ratingen-elternportal/elternportal/de/",
            desc: "Hier finden sie alle stätischen Kindertagesstätten.",
            icon: <FontAwesomeIcon icon={faChild} />,
        },
        {
            name: "Schulen",
            href: "/schulen",
            desc: "Hier finden Sie alle Schulen",
            icon: <FontAwesomeIcon icon={faGraduationCap} />,
        },
        {
            name: "Kreis Mettmann",
            href: "https://kreis-mettmann.de",
            desc: "Die Website des Kreises Mettmann.",
            icon: <FontAwesomeIcon icon={faCircle} />,
        },
    ],
];

export default function Services({ mastername }) {
    return (
        <Container className="px-4 py-5">
            <h2 className="pb-2 border-bottom">{mastername}</h2>
            {LinkSammlung.map((linkTriple, idx) => (
                <Row className="g-4 py-5" key={idx}>
                    {linkTriple.map(({ name, href, desc, icon }, idx) => (
                        <Col key={name} className="col-sm-8 col-lg-4">
                            <ServiceLink
                                key={`${name}${idx}`}
                                name={name}
                                href={href}
                                desc={desc}
                                icon={icon}
                            />
                        </Col>
                    ))}
                </Row>
            ))}
        </Container>
    );
}
