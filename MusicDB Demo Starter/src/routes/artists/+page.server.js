import db from "$lib/db.js";

export async function load() {
    const artists = await db.getArtists();
    return {
        message: "Hallo",
        artists: artists
    };
}
