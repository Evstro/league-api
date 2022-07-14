const key = 'RGAPI-8711efed-79b7-4000-b9f3-6f272eb1ab07';

// get champion rotation
const getChampionRotation = async () => {
    const base = `https://na1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${key}`;

    const response = await fetch(base);
    const data = await response.json();

    console.log(data);
};

// get champion data
const getChampionData = async () => {
    const base = 'http://ddragon.leagueoflegends.com/cdn/12.13.1/data/en_US/champion.json';

    const response = await fetch(base);
    const data = await response.json();

    console.log(data);
}

getChampionRotation();
getChampionData();