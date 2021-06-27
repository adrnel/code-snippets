let averageDamage = iterations => {
    let total = 0;
    for (var i = 0; i < iterations; i++) {
        let numberOfHeads = 0;
        for (var j = 0; j < 4; j++) {
            if (Math.random() > 0.5) numberOfHeads++;
        }
        if (numberOfHeads === 0) total += 10;
        else if (numberOfHeads === 1) total += 20;
        else if (numberOfHeads === 2) total += 30;
        else if (numberOfHeads === 3) total += 50;
        else total += 90
    }
    return total / iterations;
}
