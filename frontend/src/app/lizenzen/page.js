import {
    faArrowUpRightFromSquare
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { promises as fs } from "fs";
import Container from "react-bootstrap/Container";

export default async function Licenses() {
    const file = await fs.readFile(process.cwd() + "/public/licenses.json", "utf-8")
    const listLicenses = JSON.parse(file);
    return (
        <Container className="px-4 py-5 vw-100 text-center d-flex align-items-center justify-content-center flex-column">
            <h1>Lizenzen</h1>
            {listLicenses.map(
                ({ name, link, installedVersion, author }, idx) => {
                    link = link.replaceAll(/(git\+|\.git)/gm, "");
                    return (
                        <div
                            key={link}
                            className="col d-flex align-items-start"
                        >
                            <div>
                                <h3 className="fs-4 text-body-emphasis mt-4">
                                    {name}
                                </h3>
                                <p>
                                    {author}, {installedVersion}
                                </p>
                                <a
                                    href={link}
                                    className="btn btn-primary text-nowrap"
                                >
                                    {new RegExp(
                                        /(?:https:\/\/)(?<fqdn>(.*)(?:\.(de|com)))/,
                                        "gm"
                                    ).exec(link)?.groups
                                        ?.fqdn ?? "Hier geht's lang.."}{" "}
                                    <FontAwesomeIcon
                                        icon={faArrowUpRightFromSquare}
                                    />
                                </a>
                            </div>
                        </div>
                    );
                }
            )}
        </Container>
    );
}
