import Header from "@/app/components/Header";
import fs from "fs/promises";
import path from "path";
import { fromBuffer } from "pdf2pic";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import AmtsblattCard from "../components/AmtsblattCard";


const AmtsblattList = [
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
    const basePath = path.resolve(process.cwd() + "/public/amtsblatt");
    async function getPdfImages(filePath) {
        const options = {
            density: 100,
            format: "png",
            width: 1080,
            height: 1920,
        };
        const file = await fs.readFile(path.resolve(filePath));
        const convert = fromBuffer(file, options);
        const pageToConvertAsImage = 1;
        const meta = await convert(pageToConvertAsImage, {
            responseType: "base64",
        });
        return meta.base64;
    }

    const blattFileName = (await fs.readdir(basePath)).sort();
    const images = [];
    for (const doc of blattFileName) {
        const img = await getPdfImages(path.resolve(basePath + `/${doc}`));
        images.push(img);
    }

    return images.map((image) => `data:image/png;base64,${image}`);
}

export default async function AmtsblattPage() {
    const img = await fetchPreviews()
    return (
        <Container className="px-4 py-5 my-5 lead w-100">
            <Header title="Amtsblatt" />
            {AmtsblattList.map((linkTriple, idx) => (
                <Row className="g-4 py-5" key={idx}>
                    {linkTriple.map(({ text, href }, idx) => (
                        <Col key={text + idx} className="col-sm-8 col-lg-4">
                            <AmtsblattCard href={href} text={text} image={img[idx]} />
                        </Col>
                    ))}
                </Row>
            ))}
        </Container>
    );
}
