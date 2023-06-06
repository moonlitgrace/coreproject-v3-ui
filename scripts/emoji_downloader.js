import fs from "fs";
import fetch from "node-fetch";

const emoji_data_path = "../src/lib/data/emojis.json";
const download_path = "../static/emojis";

// Check if folder exists
if (!fs.existsSync(download_path)) {
    fs.mkdirSync(download_path);
}

fs.readFile(emoji_data_path, "utf8", async (err, data) => {
    if (err) {
        console.error("Error reading the file:", err);
        return;
    }
    const emojis_data = JSON.parse(data);

    for (const [emoji_name, emoji_link] of Object.entries(emojis_data)) {
        const image_filename = `${download_path}/${emoji_name.replace(":", "")}.png`;

        try {
            const response = await fetch(emoji_link);
            if (!response.ok) {
                throw new Error("Error while downloading image. HTTP status " + response.status);
            }
            const arrayBuffer = await response.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            fs.writeFileSync(image_filename, buffer);
            console.log(`Downloaded: ${emoji_name}`);
        } catch (error) {
            console.error("Error while downloading image:", error);
            return;
        }
    }
});
