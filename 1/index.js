const fs = require("fs");
(async () => console.log((await fs.readFileSync(process.argv[2], "utf-8")).split("\n\n").map(elf => elf.split("\n").reduce((prev,curr) => prev+Number(curr), 0)).reduce((curr, prev) => Math.max(curr, prev), 0)))();
(async () => console.log((await fs.readFileSync(process.argv[2], "utf-8")).split("\n\n").map(elf => elf.split("\n").reduce((prev,curr) => prev+Number(curr), 0)).sort((a, b)=>{return a>b?-1:1}).slice(0,3).reduce((prev,curr) => prev+curr, 0)))();