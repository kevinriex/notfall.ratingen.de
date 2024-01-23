"use client";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function StyledLink({ href, button, arrow, text, icon }) {
    return (
        <Link
            href={href}
            className={`${
                button ? "btn btn-primary" : "text-primary"
            } text-nowrap`}
            passHref
        >
            {new RegExp(
                /(?:(?:tel:|https:\/\/|mailto:))(?<fqdn>([^\/]*))/,
                "gm"
            ).exec(href)?.groups?.fqdn ??
                text ??
                "Hier geht's lang..."}
            {arrow || button ? (
                <>
                    {" "}
                    <FontAwesomeIcon icon={icon ?? faArrowUpRightFromSquare} />
                </>
            ) : (
                ""
            )}
        </Link>
    );
}
