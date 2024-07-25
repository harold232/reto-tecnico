function calculateTime(deliveries) {
    const SECONDS_FINAL = 25200; // '07:00:00'

    let totalSeconds= 0;

    for (const str of deliveries) {
        const partsTime = str.split(':');
        const hours = parseInt(partsTime[0], 10);
        const minutes = parseInt(partsTime[1], 10);
        const seconds = parseInt(partsTime[2], 10);
        totalSeconds += (hours * 3600) + (minutes * 60) + seconds;
    }

    let final = SECONDS_FINAL - totalSeconds; // Restando el tiempo establecido con el tiempo faltante
    let isNegative = final > 0;
    final = Math.abs(final);

    const hours = Math.floor(final / 3600);
    const remainingHours = final % 3600;
    const minutes = Math.floor(remainingHours / 60);
    const seconds = remainingHours % 60;

    //Damos formato a la hora
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${isNegative ? '-' : ''}${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

console.log(calculateTime(['00:10:00', '01:00:00', '03:30:00']));