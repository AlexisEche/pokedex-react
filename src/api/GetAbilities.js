
export async function GetAbilites(url){

    const urlHabilities = url;
    const resp = await fetch(urlHabilities);
    const {sprites} = await resp.json();
    const imgExport = await sprites.front_default

    return imgExport
}