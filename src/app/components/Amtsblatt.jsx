import { faDownload } from "@fortawesome/free-solid-svg-icons";
import StyledLink from "../components/StyledLink";

export default function Amtsblatt({ href, text, image }) {
    return (
        <div className="card">
            <img
                className="card-img-top"
                src={image}
                alt="Card image cap"
            />
            <div className="card-body">
                <h5 className="card-title">{text}</h5>
                <StyledLink
                    href={`/amtsblaetter/${href}`}
                    button={true}
                    icon={faDownload}
                    text="Jetzt Downloaden"
                />
            </div>
        </div>
    );
}
