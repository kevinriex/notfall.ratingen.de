"use client";
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Contact from "../components/Contact";
import HeroContact from "../components/HeroContact";

const Contacts = [
    { name: "Büro Bürgermeister", tel: "02102 550 1080" },
    { name: "Vorstandssekretariat", tel: "02102 550 1001" },
    { name: "Rechnungsprüfungsamt", tel: "02102 550 1401" },
    {
        name: "Amt für Digitalisierung und Informationstechnologie",
        tel: "02102 550 1604",
    },
    { name: "Amt für Finanzwirtschaft", tel: "02102 550 2000" },
    { name: "Stadtkasse", tel: "02102 550 2101" },
    {
        name: "Amt für Gebäudemanagement - Grundstücksverwaltung",
        tel: "02102 550 2546",
    },
    {
        name: "Amt für Gebäudemanagement - Zentrale Störungsannahme",
        tel: "02102 550 2544",
    },
    {
        name: "Amt für Gebäudemanagement - Gebäudeservice",
        tel: "02102 550 2545",
    },
    { name: "Ordnungsamt", tel: "02102 550 3210" },
    { name: "Rechtsamt", tel: "02102 550 3006" },
    { name: "Bürgerbüro", tel: "02102 550 3222" },
    { name: "Standesamt", tel: "02102 550 3284" },
    { name: "Amt für Schulverwaltung und Sport", tel: "02102 550 4000" },
    { name: "Amt für Kultur und Tourismus", tel: "02102 550 4102" },
    { name: "Volkshochschule", tel: "02102 550 4306" },
    {
        name: "Amt für Soziales, Wohnen und Integration - Sozialhilfe, Grundsicherung, Asylleistungen",
        tel: "02102 550 5009",
    },
    {
        name: "Amt für Soziales, Wohnen und Integration - Wohngeld",
        tel: "02102 550 5024",
    },
    {
        name: "Amt für Soziales, Wohnen und Integration - Personenunterbringung",
        tel: "02102 550 5015",
    },
    {
        name: "Amt für Soziales, Wohnen und Integration - Unterhaltsvorschussleistungen",
        tel: "02102 550 5059",
    },
    {
        name: "Amt für Soziales, Wohnen und Integration - Integrationsbeauftragte",
        tel: "02102 550 5096",
    },
    { name: "Amt für Kinder, Jugend und Familie", tel: "02102 550 5103" },
    {
        name: "Amt für Stadtplanung, Vermessung und Bauordnung",
        tel: "02102 550 6100",
    },
    { name: "Tiefbauamt", tel: "02102 550 6641" },
    { name: "Amt für Kommunale Dienste", tel: "02102 550 7070" },
    { name: "Stabsstelle Verwaltungsorganisation", tel: "02102 550 1111" },
    { name: "Stabsstelle Öffentlichkeitsarbeit", tel: "02102 550 1063" },
    { name: "Beschwerdestelle", tel: "02102 550 1055" },
];

export default function ContactPage() {
    return (
        <>
            <Container className="px-4 py-5">
                <HeroContact title="Kontaktadressen" />
                {Contacts.map((contact, idx) => (
                    <Row className="g-4 py-5" key={idx}>
                        <Contact name={contact.name} tel={contact.tel} />
                    </Row>
                ))}
            </Container>
        </>
    );
}
