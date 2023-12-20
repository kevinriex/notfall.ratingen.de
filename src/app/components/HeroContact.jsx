import Header from "@/app/components/Header";
import StyledLink from "./StyledLink";

export default function HeroContact({ title }) {
    return (
        <>
            <div className="px-4 py-5 my-5 text-center" data-bs-theme="light">
                <Header title={title} />
                <div className="col-lg-8 mx-auto">
                    <p className="lead mb-4 mt-4">
                        Im Gegensatz zu vielen anderen Behörden ist die Stadtverwaltung Ratingen „zwischen den Jahren“ nicht geschlossen. Die städtischen Dienststellen sind im Rahmen der jeweiligen Öffnungszeiten von Mittwoch, 27. Dezember, bis Samstag, 30. Dezember, für den Publikumsverkehr geöffnet. Eine Ausnahme bildet die Volkshochschule, die geschlossen bleibt.
                        <br />
                        <br />
                        Eine Änderung gibt es an den genannten Tagen in Bezug auf die telefonische Erreichbarkeit der Verwaltung über die Zentralnummer <StyledLink href="tel:021025500" text="02102 550 0"/>. Da der Vermittlungsdienst über diese Nummer durch den Kreis Mettmann erfolgt, die Kreisverwaltung aber zwischen Weihnachten und Neujahr komplett geschlossen ist, können an diesen Tagen keine Anrufe über die <StyledLink href="tel:021025500" text="02102 550 0"/> angenommen werden. Der Kreis Mettmann wird per Ansagetext auf diese Einschränkung hinweisen. 
                        <br />
                        <br />
                        Bürgerinnen und Bürger finden jedoch im Internet unter <StyledLink href="/" text="ratingen.de" /> den richtigen Ansprechpartner in der Verwaltung. Auf der städtischen Not-Homepage wird eine Übersicht eingestellt mit folgenden Rufnummern für alle Stadtämter/Fachbereiche:
                    </p>
                </div>
            </div>
        </>
    );
}
