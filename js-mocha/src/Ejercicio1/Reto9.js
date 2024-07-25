function adjustLights(lights) {
    // Code here
    if (lights.length === 0) return 0;

    let greenLight = '🟢';
    let redLight = '🔴';

    // Dos patrones
    let pattern1 = [];
    let pattern2 = [];

    for (let i = 0; i < lights.length; i++) {
        pattern1.push(i % 2 === 0 ? greenLight : redLight);
        pattern2.push(i % 2 === 0 ? redLight : greenLight);
    }

    let lightsChanged1 = 0;
    let lightsChanged2 = 0;

    for (let i = 0; i < lights.length; i++) {
       if (lights[i] !== pattern1[i])
           lightsChanged1++;

       if (lights[i] !== pattern2[i])
           lightsChanged2++;
    }

    return Math.min(lightsChanged1, lightsChanged2);
}
