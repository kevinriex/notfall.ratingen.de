"use client";
const ListLicenses = [
    {
        name: "@fortawesome/fontawesome-svg-core",
        link: "git+https://github.com/FortAwesome/Font-Awesome.git",
        comment: "6.4.2",
        installedVersion: "6.4.2",
        author: "The Font Awesome Team (https://github.com/orgs/FortAwesome/people)",
    },
    {
        name: "@fortawesome/free-brands-svg-icons",
        link: "git+https://github.com/FortAwesome/Font-Awesome.git",
        comment: "6.4.2",
        installedVersion: "6.4.2",
        author: "The Font Awesome Team (https://github.com/orgs/FortAwesome/people)",
    },
    {
        name: "@fortawesome/free-regular-svg-icons",
        link: "git+https://github.com/FortAwesome/Font-Awesome.git",
        comment: "6.4.2",
        installedVersion: "6.4.2",
        author: "The Font Awesome Team (https://github.com/orgs/FortAwesome/people)",
    },
    {
        name: "@fortawesome/free-solid-svg-icons",
        link: "git+https://github.com/FortAwesome/Font-Awesome.git",
        comment: "6.4.2",
        installedVersion: "6.4.2",
        author: "The Font Awesome Team (https://github.com/orgs/FortAwesome/people)",
    },
    {
        name: "@fortawesome/react-fontawesome",
        link: "git+https://github.com/FortAwesome/react-fontawesome.git",
        comment: "0.2.0",
        installedVersion: "0.2.0",
        author: "n/a",
    },
    {
        name: "bootstrap",
        link: "git+https://github.com/twbs/bootstrap.git",
        comment: "5.3.2",
        installedVersion: "5.3.2",
        author: "The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)",
    },
    {
        name: "next",
        link: "git+https://github.com/vercel/next.js.git",
        comment: "14.0.1",
        installedVersion: "14.0.1",
        author: "n/a",
    },
    {
        name: "react",
        link: "git+https://github.com/facebook/react.git",
        comment: "18.2.0",
        installedVersion: "18.2.0",
        author: "n/a",
    },
    {
        name: "react-bootstrap",
        link: "git+https://github.com/react-bootstrap/react-bootstrap.git",
        comment: "2.9.1",
        installedVersion: "2.9.1",
        author: "Stephen J. Collings stevoland@gmail.com",
    },
    {
        name: "react-dom",
        link: "git+https://github.com/facebook/react.git",
        comment: "18.2.0",
        installedVersion: "18.2.0",
        author: "n/a",
    },
];
import {
  faArrowUpRightFromSquare
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";

export default function Licenses() {
    return (
        <Container className="px-4 py-5 vw-100 text-center d-flex align-items-center justify-content-center flex-column">
            <h1>Lizenzen</h1>
            {ListLicenses.map(
                ({ name, link, installedVersion, author }, idx) => (
                    <div key={link} className="col d-flex align-items-start">
                        {/* <div className="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3 text-center">
                            <FontAwesomeIcon icon={faCode} />
                        </div> */}
                        <div>
                            <h3 className="fs-4 text-body-emphasis mt-4">{name}</h3>
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
                                ).exec(link)?.groups?.fqdn ??
                                    "Hier geht's lang.."}{" "}
                                <FontAwesomeIcon
                                    icon={faArrowUpRightFromSquare}
                                />
                            </a>
                        </div>
                    </div>
                )
            )}
        </Container>
    );
}
