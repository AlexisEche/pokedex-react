
export async function GetImages(url) {

    const urlHabilities = url;
    const resp = await fetch(urlHabilities);
    const { sprites } = await resp.json();
    const imgExport = sprites.front_default

    return imgExport
}