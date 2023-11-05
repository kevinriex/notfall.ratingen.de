import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SiteLink({ name, href, desc, icon, internal }) {
    var btntext = "";
    if (internal == true) {
        btntext = "Hier gehts lang..."
    }
    else {
        btntext = new RegExp(
            /(?:https:\/\/)(?<fqdn>(.*)(?:\.(de|com)))/,
            'gm'
        ).exec(href).groups.fqdn
        }
    return (
        <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                {icon}
            </div>
            <div>
                <h3 className="fs-4 text-body-emphasis">{name}</h3>
                <p>{desc}</p>
                <a href={href} className="btn btn-primary text-nowrap">
                       {btntext}{' '}
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
            </div>
        </div>
    );
}
