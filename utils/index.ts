//get all 40 man rosters
export async function fetchPlayers() {
    const headers = {
        'X-RapidAPI-Key': 'd4a3bd96d8msh50aa4388afe186cp170f19jsn1ca90b8f2614',
        'X-RapidAPI-Host': 'baseballapi.p.rapidapi.com'
    }
    const response = await fetch('https://baseballapi.p.rapidapi.com/api/baseball/team/3634/players', {
        headers: headers,
    });

    const result = await response.json();

    return result;
}