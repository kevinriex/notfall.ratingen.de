import Header from "@/app/components/Header";
import fs from "fs/promises";
import path from "path";
import { fromBuffer } from "pdf2pic";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import AmtsblattCard from "../components/AmtsblattCard";


async function fetchPreviews() {
    const basePath = path.resolve(process.cwd() + "/public/amtsblatt");
    async function getPdfImages(filePath) {
        const options = {
            density: 100,
            format: "png",
            width: 2480,
            height: 3508,
        };
        const file = await fs.readFile(path.resolve(filePath));
        const convert = fromBuffer(file, options);
        const pageToConvertAsImage = 1;
        const meta = await convert(pageToConvertAsImage, {
            responseType: "base64",
        });
        return meta.base64;
    }

    const blattFileName = (await fs.readdir(basePath)).sort().reverse();
    const blattData = [];
    for (const doc of blattFileName) {
        const img = await getPdfImages(path.resolve(basePath + `/${doc}`));
        blattData.push({
            text: `Amtsblatt ${doc.slice(0, -4)}`,
            href: doc,
            image: `data:image/png;base64,${img}`,
        });
    }
    const splitArray = (array, size) => array.map((val, i) => i % size === 0 && array.slice(i, i + size)).filter(e => e);

    return splitArray(blattData, 3);
}

export default async function AmtsblattPage() {
    const amtsblattData = await fetchPreviews()
    return (
        <Container className="px-4 py-5 my-5 lead w-100">
            <Header title="Amtsblatt" />
            {amtsblattData.map((dataTriplet, row_idx) => (
                <Row className="g-4 py-5" key={row_idx}>
                    {dataTriplet.map(({ text, href, image }, col_idx) => (
                        <Col key={text + col_idx} className="col-sm-8 col-lg-4">
                            <AmtsblattCard
                                href={href}
                                text={text}
                                image={image}
                            />
                        </Col>
                    ))}
                </Row>
            ))}
        </Container>
    );
}
