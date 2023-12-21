import { faCircleInfo, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact({ name, tel }) {
    return (
        <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <FontAwesomeIcon icon={faCircleInfo} />
            </div>
            <div>
                <h3 className="fs-4 text-body-emphasis">{name}</h3>
                <div className="mb-2">
                    <FontAwesomeIcon icon={faPhone} />{" "}
                    <a href={`tel:${tel}`}>{tel}</a>
                </div>
            </div>
        </div>
    );
}
