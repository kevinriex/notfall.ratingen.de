import fs from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";
import { fromBuffer } from "pdf2pic";

export async function GET(request) {
    const basePath = path.resolve(process.cwd() + "/public/amtsblaetter");
    async function getPdfImages(filePath) {
        const options = {
            density: 100,
            format: "png",
            width: 1080,
            height: 1920,
        };
        const file = await fs.readFile(path.resolve(filePath));
        const convert = fromBuffer(
            file,
            options
        );
        const pageToConvertAsImage = 1;
        const meta = await convert(pageToConvertAsImage, { responseType: "base64" })
        return meta.base64;
    }

    const blaetter = (await fs.readdir(basePath)).sort();
    const images = []
    for (const doc of blaetter) {
        const img = await getPdfImages(path.resolve(basePath + `/${doc}`));
        images.push(img)
    }

    return NextResponse.json({ images });
}
