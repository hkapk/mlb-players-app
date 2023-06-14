//get all 40 man rosters
export async function fetchPlayers() {
    const headers = {
        'X-RapidAPI-Key': 'd4a3bd96d8msh50aa4388afe186cp170f19jsn1ca90b8f2614',
        'X-RapidAPI-Host': 'baseballapi.p.rapidapi.com'
    }
    const response = await fetch('https://baseballapi.p.rapidapi.com/api/baseball/team/3650/players', {
        headers: headers,
    });

    const result = await response.json();

    return result;
}

//fetch score data from last 3 days using live sports odds api
export async function fetchScores() {

    const headers = {
        'X-RapidAPI-Key': 'd4a3bd96d8msh50aa4388afe186cp170f19jsn1ca90b8f2614',
        'X-RapidAPI-Host': 'odds.p.rapidapi.com'
    }

    const response = await fetch('https://odds.p.rapidapi.com/v4/sports/baseball_mlb/scores?daysFrom=3', {
        headers: headers,
    });

    const result = await response.json();

    return result;
}

export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const month = date.toLocaleString('en-US', { month: 'long' });
    const day = date.getDate();
    return `${month} ${day}`;
}

export function convertToCST(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
        timeZone: 'America/Chicago',
        hour: 'numeric',
        minute: 'numeric',
    };
    const cstTime = date.toLocaleString('en-US', options);
    return cstTime;
}
