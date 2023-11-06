import OwnLink from "./OwnLink";
export default function ServiceLink({ name, href, desc, icon }) {
    return (
        <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                {icon}
            </div>
            <div>
                <h3 className="fs-4 text-body-emphasis">{name}</h3>
                <p>{desc}</p>
                <OwnLink href={href} button={true} />
            </div>
        </div>
    );
}
