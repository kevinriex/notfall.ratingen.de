"use client";
import ServiceLink from "@/app/components/ServiceLink";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import {
    faBook,
    faBookmark,
    faCalendar,
    faCalendarDays,
    faChild,
    faDumpster,
    faEarthEurope,
    faGraduationCap,
    faLandmark,
    faSchool,
    faTrash,
    faUmbrellaBeach,
    faUser,
    faWarning,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const LinkSammlung = [
    [
        {
            name: "Service-Portal",
            href: "https://serviceportal.ratingen.de/",
            desc: "Hier finden Sie Online-Dienstleistungen der Stadt Ratingen.",
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
            desc: "Hier finden Sie Unterlagen zu den Sitzungen des Stadtrates und seiner Ausschüsse.",
            icon: <FontAwesomeIcon icon={faLandmark} />,
        },
    ],
    [
        {
            name: "Mängelmelder",
            href: "https://ratingen.maengelmelder.de/",
            desc: "Hier können Sie uns Schäden und Mängel an öffentlichen Einrichtungen melden.",
            icon: <FontAwesomeIcon icon={faWarning} />,
        },
        {
            name: "Abfallkalender",
            href: "https://www.umwelt-webmedia.de/index.php?id=b2a854d7f22b13c44c853ac0157d3c07",
            desc: "Hier erfahren Sie, wann bei Ihnen die Mülltonnen geleert werden",
            icon: <FontAwesomeIcon icon={faDumpster} />,
        },
        {
            name: "Sperrmüllanmeldung",
            href: "https://awistalogistik.de/das-bieten-wir/ratingen/",
            desc: "Hier können Sie einen Termin für die Abfuhr Ihres Sperrmülls beantragen.",
            icon: <FontAwesomeIcon icon={faTrash} />,
        },
    ],
    [
        {
            name: "VHS",
            href: "https://vhs-ratingen.de/",
            desc: "Hier gelangen Sie zum Internetauftritt der Volkshochschule Ratingen.",
            icon: <FontAwesomeIcon icon={faSchool} />,
        },
        {
            name: "Stadtbibliothek",
            href: "https://webopac.ratingen.de/webopac/index.asp?DB=web_biblio",
            desc: "Hier finden Sie Medien, die Sie im Medienzentrum und in den Stadtteil-Büchereien ausleihen können.",
            icon: <FontAwesomeIcon icon={faBook} />,
        },
        {
            name: "Veranstaltungskalender",
            href: "https://kalender-ratingen.de/",
            desc: "Hier finden Sie alle Veranstaltungen in Ratingen.",
            icon: <FontAwesomeIcon icon={faCalendar} />,
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
            desc: "Hier finden Sie alle Schulen.",
            icon: <FontAwesomeIcon icon={faGraduationCap} />,
        },
        {
            name: "Stellenangebote",
            href: "/stellen",
            desc: "Hier finden Sie eine Übersicht aktueller Ausschreibungsverfahren bei der Stadt Ratingen.",
            icon: <FontAwesomeIcon icon={faBookmark} />,
        },
    ],
    [
        {
            name: "Geoportal",
            href: "https://gdi.regioit.de/portal/apps/sites/#/kartendienste/",
            desc: "Hier finden Sie die Kartendienste der Stadt Ratingen.",
            icon: <FontAwesomeIcon icon={faEarthEurope} />,
        },
        {
            name: "Kreis Mettmann",
            href: "https://kreis-mettmann.de",
            desc: "Die Website des Kreises Mettmann.",
            icon: <FontAwesomeIcon icon={faCircle} />,
        },
        {
            name: "Aktuelle Informationen",
            href: "https://facebook.com/DeinRatingen/",
            desc: (
                <>
                    Hier gelangen Sie zur Facebook-Seite{" "}
                    <em>„Dein Ratingen“</em>.
                </>
            ),
            icon: <FontAwesomeIcon icon={faFacebook} />,
        },
    ],
    [
        {
            name: "",
            href: "",
            desc: "",
            icon: <></>,
        },
        {
            name: "Ferienprogram der Stadt Ratingen",
            href: "https://unser-ferienprogramm.de/ratingen/",
            desc: "Hier finden Sie das Ferienprogramm der Stadt Ratingen",
            icon: <FontAwesomeIcon icon={faUmbrellaBeach} />,
        },
        {
            name: "",
            href: "",
            desc: "",
            icon: <></>,
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
