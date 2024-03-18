// import math from "./math.js";

setTimeout(async () => {
  const math = await import("./math.js");
  console.log(math.default.sum(10, 223));
  console.log(math.default.isOdd(233));
}, 2000);
