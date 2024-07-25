function createChristmasTree(ornaments, height) {

    if (height < 1 || ornaments.length === 0) return '';

    let tree = [];
    let i = 0;
    let indexOrnaments = 0;

    while (i < height) {
        let line = ' '.repeat(height - i - 1);

        for (let j = 0; j <= i; j++) {
            line += ornaments[indexOrnaments % ornaments.length];
            indexOrnaments++;
            if (j < i) line += ' ';
        }
        i++;
        tree.push(line);
    }

    // Parte final
    tree.push(' '.repeat(height - 1) + '|');

    return tree.join('\n') + '\n';
}
/*
   1
  2 3
 1 2 3
1 2 3 1
   |
*/