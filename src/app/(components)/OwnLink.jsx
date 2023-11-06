"use client";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function OwnLink({ href, button, arrow }) {
    if (button == true) {
        arrow = true;
    }
    return (
        <a
            href={href}
            className={`${
                button ? "btn btn-primary" : "text-primary"
            } text-nowrap`}
        >
            {new RegExp(
                /(?:(?:tel:|https:\/\/|mailto:).*?)(?<fqdn>(.*)(([0-9])|(?:\.(de|com|eu))))/,
                "gm"
            ).exec(href)?.groups?.fqdn ?? "Hier geht's lang.."}{" "}
            {arrow ? <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> : ""}
        </a>
    );
}
