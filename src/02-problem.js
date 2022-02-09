function plant(seed, water, fert, temp) {
  const stemString = '-';

  const stem = stemString.repeat(water);

  let result = '';

  if (temp >= 20 && temp <= 30) {
    const cluster = stem + seed.repeat(fert);
    result = cluster.repeat(water);
  } else {
    result = stem.repeat(water) + seed;
  }

  return result;
}

module.exports = {
  plant,
};
