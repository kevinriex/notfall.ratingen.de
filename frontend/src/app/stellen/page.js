"use client";
import Header from "@/app/components/Header";
import Container from "react-bootstrap/Container";

export default function Stellen() {
    return (
        <Container className="px-4 py-5">
            <Header title="Aktuelle Stellenangebote" />

            <div className="text-center lead mt-5">
                <div
                    class="stellen-listing"
                    data-bite-jobs-api-listing="stadt-ratingen:stellen-listing"
                ></div>
            </div>
            <script
                defer
                src="https://static.b-ite.com/jobs-api/loader-v1/api-loader-v1.min.js"
            ></script>
        </Container>
    );
}
