export async function getAddress(ip = '8.8.8.8') {
    const response = await fetch(`
    https://geo.ipify.org/api/v2/country?apiKey=at_1jvTBAcezK7ZVz6B8n5xrQZIiZtVg&ipAddress=${ip}`);

    return await response.json();
}