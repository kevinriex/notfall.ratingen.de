"use client";
import Header from "@/app/components/Header";
import School from "@/app/components/School";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const primarySchools = [
    [
        {
            name: "Albert-Schweitzer-Schule",
            href: "https://ass-ratingen.de/",
            street: "Bruchstraße 22",
            plz: "40882 Ratingen",
            type: "Grundschule",
            tel: "02102 550 4400",
            email: "schule@albert-schweitzer-schule.ratingen.de",
            district: "Ost",
        },
        {
            name: "Anne-Frank-Schule",
            href: "https://afs-ratingen.de",
            street: "Mülheimer Str. 47",
            plz: "40878 Ratingen",
            type: "Grundschule",
            tel: "02102 550 4410",
            email: "schule@anne-frank-schule.ratingen.de",
            district: "Mitte",
        },
        {
            name: "Astrid-Lindgren-Schule",
            href: "https://als-ratingen.de/",
            street: "Erfurter Straße 26",
            plz: "40880 Ratingen",
            type: "Grundschule",
            tel: "02102 550 8902",
            email: "schule@astrid-lindgren-schule.ratingen.de",
            district: "West",
        },
    ],
    [
        {
            name: "Christian-Morgenstern-Schule",
            href: "https://christian-morgenstern-schule-ratingen.de/",
            street: "Ulmenstr. 3",
            plz: "40882 Ratingen",
            type: "Grundschule",
            tel: "02102 550 4422",
            email: "sek@christian-morgenstern-schule.ratingen.de",
            district: "Homberg",
        },
        {
            name: "Eduard-Dietrich-Schule",
            href: "https://eduard-dietrich-schule.de/",
            street: "Duisburger Straße 14",
            plz: "40885 Ratingen",
            type: "Grundschule",
            tel: "02102 550 4432",
            email: "schule@eduard-dietrich-schule.ratingen.de",
            district: "Lintorf",
        },
        {
            name: "Erich Kästner-Schule",
            href: "http://eks-ratingen.de/",
            street: "Berliner straße 35",
            plz: "40880 Ratingen",
            type: "Grundschule",
            tel: "02102 550 4442",
            email: "sek@erich-kaestner-schule.ratingen.de",
            district: "West",
        },
    ],
    [
        {
            name: "Gebrüder-Grimm-Schule",
            href: "https://gebrueder-grimm-schule-ratingen.de/",
            street: "Karl-Mücher-Weg 17",
            plz: "40878 Ratingen",
            type: "Grundschule",
            tel: "02102 550 4450",
            email: "schule@gebrueder-grimm-schule.ratingen.de",
            district: "Süd",
        },
        {
            name: "Heinrich-Schmitz-Schule",
            street: "Duisburger Straße 112",
            plz: "40885 Ratingen",
            type: "Grundschule",
            tel: "02102 550 4802",
            email: "",
            district: "Lintorf",
        },
        {
            name: "Johann-Peter-Melchior-Schule",
            href: "https://www.jpm-ratingen.de/",
            street: "Am Weiher 4",
            plz: "40885 Ratingen",
            type: "Grundschule",
            tel: "02102 550 4500",
            email: "schule@johann-peter-melchior-schule.ratingen.de",
            district: "Lintorf",
        },
    ],
    [
        {
            name: "Karl-Arnold-Schule",
            href: "http://karl-arnold-schule.de/",
            street: "Volkardeyer Straße 36",
            plz: "40878 Ratingen",
            type: "Grundschule",
            tel: "02102 550 8472",
            email: "",
            district: "West",
        },
        {
            name: "Matthias-Claudius-Schule",
            href: "https://mcs-ratingen.de/",
            street: "Mintarder Weg 98",
            plz: "40885 Ratingen",
            type: "Grundschule",
            tel: "02102 550 4480",
            email: "schule@matthias-claudius-schule.ratingen.de",
            district: "Breitscheid",
        },
        {
            name: "Minoritenschule",
            href: "https://minoritenschule.de/",
            street: "Minoritenstraße 12",
            plz: "40878 Ratingen",
            type: "Städt. Kath. Grundschule",
            tel: "02102 5504530",
            email: "schule@minoritenschule.ratingen.de",
            district: "Mitte",
        },
    ],
    [
        {
            name: "Paul-Maar-Schule",
            href: "https://pms-ratingen.de/",
            street: "Am Söttgen 15",
            plz: "40880 Ratingen",
            type: "Grundschule",
            tel: "02102 550 4462",
            email: "schule@paul-maar-schule.ratingen.de",
            district: "Tiefenbroich",
        },
        {
            name: "Suitbertusschule",
            href: "https://grundschule-suitbertus.de/",
            street: "Dürerring 3",
            plz: "40878 Ratingen",
            type: "Grundschule",
            tel: "02102 550 4540",
            email: "schule@suitbertusschule.ratingen.de",
            district: "Mitte/Süd",
        },
        {
            name: "Wilhelm-Busch-Schule",
            href: "https://wilhelm-busch-schule-ratingen.de/",
            street: "Bismarckstr. 16",
            plz: "40883 Ratingen",
            type: "Grundschule",
            tel: "02102 550 4492",
            email: "schule@wilhelm-busch-schule.ratingen.de",
            district: "Hösel",
        },
    ],
];

const secondarySchools = [
    [
        {
            name: "Carl-Friedrich-von-Weizsäcker-Gymnasium",
            href: "https://cfvw-gymnasium.de/",
            street: "Karl-Mücher-Weg 2",
            plz: "40878 Ratingen",
            type: "Gymnasium",
            tel: "02102 550 8700",
            email: "sekretariat@cfvw-gymnasium.info",
            district: "Mitte",
        },
        {
            name: "Dietrich-Bonhoeffer-Gymnasium",
            href: "https://dbg-ratingen.de/",
            street: "Erfurter Straße 30",
            plz: "40880 Ratingen",
            type: "Gymnasium",
            tel: "02102 550 4932",
            email: "schule@dietrich-bonhoeffer-gymnasium.ratingen.de",
            district: "West",
        },
        {
            name: "Friedrich-Ebert-Realschule",
            href: "https://friedrich-ebert-realschule.de/",
            street: "Philippstraße 30",
            plz: "40878 Ratingen",
            type: "Realschule",
            tel: "02102 550 4600",
            email: "sek1@friedrich-ebert-schule.ratingen.de",
            district: "Mitte",
        },
    ],
    [
        {
            name: "Käthe-Kollwitz-Schule",
            href: "https://kksreal.de/",
            street: "Erfurter Straße 40",
            plz: "40880 Ratingen",
            type: "Realschule",
            tel: "02102 550 4910",
            email: "west@kksreal.de",
            district: "West",
        },
        {
            name: "Käthe-Kollwitz-Schule Dependance Lintorf",
            href: "https://kksreal.de/",
            street: "Duisburger Straße 112",
            plz: "40885 Ratingen",
            type: "Realschule",
            tel: "02102 550 4830",
            email: "lintorf@kksreal.de",
            district: "Lintorf",
        },
        {
            name: "Kopernikus-Gymnasium",
            href: "https://kgl-ratingen.de/",
            street: "Duisburger Straße 112",
            plz: "40885 Ratingen",
            type: "Gymnasium",
            tel: "02102 550 4862",
            email: "sekretariat@kgl.schule",
            district: "Lintorf",
        },
    ],
    [
        {
            name: "Martin-Luther-King-Gesamtschule",
            href: "https://gesamtschule-ratingen.de/",
            street: "Erfurter Straße 36",
            plz: "40880 Ratingen",
            type: "Gesamtschule",
            tel: "02102 550 4962",
            email: "sek1@martin-luther-king-schule.ratingen.de",
            district: "West",
        },
        {
            name: "Liebfrauenschule",
            href: "https://liebfrauenschule-ratingen.de/",
            street: "Schwarzbachstr.17",
            plz: "40878 Ratingen",
            type: "Realschule in privater Trägerschaft",
            tel: "02102 843012",
            email: "sekretariat@lfs-ratingen.de",
            district: "Mitte",
        },
        {
            name: "Adam-Josef-Cüppers Berufskolleg",
            href: "https://ajc-bk.de/",
            street: "Minoritenstraße 10",
            plz: "40878 Ratingen",
            type: "Berufskolleg in Trägerschaft des Kreises Mettmann",
            tel: "02102 71120",
            email: " sekretariat@ajc-bk.de",
            district: "Mitte",
        },
    ],
];

export default function SchoolPage() {
    return (
        <>
            <Container className="px-4 py-5">
                <Header title="Unsere Schulen" />
                <h2 className="pb-2 border-bottom">Grundschulen</h2>
                {primarySchools.map((linkTriple, idx) => (
                    <Row className="g-4 py-5" key={idx}>
                        {linkTriple.map(
                            (
                                {
                                    name,
                                    href,
                                    street,
                                    plz,
                                    type,
                                    tel,
                                    email,
                                    district,
                                },
                                idx
                            ) => (
                                <Col key={name} className="col-sm-8 col-lg-4">
                                    <School
                                        key={`${plz}${idx}`}
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
                            )
                        )}
                    </Row>
                ))}
                <div className="mt-4">
                    <h2 className="pb-2 border-bottom mt-4">
                        Weiterführende Schulen
                    </h2>
                    {secondarySchools.map((linkTriple, idx) => (
                        <Row className="g-4 py-5" key={100 + idx}>
                            {linkTriple.map(
                                (
                                    {
                                        name,
                                        href,
                                        street,
                                        plz,
                                        type,
                                        tel,
                                        email,
                                        district,
                                    },
                                    idx
                                ) => (
                                    <Col
                                        key={name}
                                        className="col-sm-8 col-lg-4"
                                    >
                                        <School
                                            key={`${plz}${idx}`}
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
                                )
                            )}
                        </Row>
                    ))}
                </div>
            </Container>
        </>
    );
}
