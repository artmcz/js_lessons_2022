function tick() {
  const elementTick = new Date().toLocaleTimeString();
  return elementTick;
}

setInterval(tick, 1000);

console.log(tick());