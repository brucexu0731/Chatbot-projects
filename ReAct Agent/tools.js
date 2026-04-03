export async function getCurrentWeather() {
    const weather = {
        temperature: "2",
        unit: "F",
        forecast: "snowy"
    }
    return JSON.stringify(weather)
}

export async function getLocation() {
    return "New York City, NY"
}
