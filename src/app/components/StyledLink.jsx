"use client";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function StyledLink({ href, button, arrow, text }) {
    return (
        <a
            href={href}
            className={`${
                button ? "btn btn-primary" : "text-primary"
            } text-nowrap`}
        >
            {new RegExp(
                /(?:(?:tel:|https:\/\/|mailto:))(?<fqdn>([^\/]*))/,
                "gm"
            ).exec(href)?.groups?.fqdn ?? text ?? "Hier geht's lang.."}{" "}
            {arrow || button ? <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> : ""}
        </a>
    );
}
