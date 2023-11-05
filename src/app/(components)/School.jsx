import {
    faArrowUpRightFromSquare,
    faAt,
    faGraduationCap,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function School({
    name,
    href,
    street,
    plz,
    type,
    tel,
    email,
    district,
}) {
    return (
        <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <FontAwesomeIcon icon={faGraduationCap} />
            </div>
            <div>
                <h3 className="fs-4 text-body-emphasis">{name}</h3>
                <div className="mb-2">
                    {type} in Ratingen-{district}
                    <br />
                    {/* <FontAwesomeIcon icon={faRoad} />{" "} */}
                    {street}
                    <br />
                    {plz}
                    <br />
                    <FontAwesomeIcon icon={faPhone} />{" "}
                    <a href={`tel:${tel}`}>{tel}</a>
                    {email ? (
                        <>
                            <br />
                            <FontAwesomeIcon icon={faAt} />{" "}
                            <a href={`mailto:${email}`}>{email}</a>
                        </>
                    ) : (
                        ""
                    )}
                </div>
                {href ? (
                    <a href={href} className="btn btn-primary">
                        {
                            new RegExp(
                                /(?:(https:|http:)\/\/)(?<fqdn>(.*)(?:\.(de|com)))/,
                                "gm"
                            ).exec(href).groups.fqdn
                        }{" "}
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}
