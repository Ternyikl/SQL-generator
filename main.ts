import fs from "node:fs";
import util from 'node:util';
import readline from 'node:readline/promises';
using rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let kiir: string = "INSERT INTO icecream (flavor, lactose_free, weight) VALUES\n";

let fagyik: string[] = []

let be = "";

do{
    be = await rl.question(`adja meg egy fagyi fajtáját: `);
    if(be.includes(`"`) || be.includes("'") && be !== "0")
    {
        console.log(util.styleText(['red'], `A fajta nem tartalmazhat ' vagy " karaktert`));
    }
    else
    {
        fagyik.push(be);
    }


}while(be !== "0")

let fut: Boolean = true;

let min: number;

do{

    let seged: number = Number(await rl.question(`adja meg a fagyik minimum mennyiségét: `));

    if(seged > 0)
    {
        min = seged;
        fut = false;
    }
    else
    {
        console.log(util.styleText(['red'], `0-nál nagyobb mennyiség kell meg addni!`));
    }

}while(fut)

fut = true;

let max: number;

do{

    let seged: number = Number(await rl.question(`adja meg a fagyik maximum mennyiségét: `));

    if(seged > 0 && min! < seged)
    {
        max = seged;
        fut = false;
    }
    else
    {
        console.log(util.styleText(['red'], `0-nál nagyobb mennyiség kell meg addni!`));
    }

}while(fut)

fut = true;

let mennyiseg: number;

do{

    let seged: number = Number(await rl.question(`adja meg a teszt addatok menniségét: `));

    if(seged > 0)
    {
        mennyiseg = seged;
        fut = false;
    }
    else
    {
        console.log(util.styleText(['red'], `0-nál nagyobb mennyiség kell meg addni!`));
    }

}while(fut)


for (let i = 0; i < mennyiseg!; i++) {
    
    let index: number = Math.floor(Math.random() * (fagyik.length - 1))

    let lactose: Boolean = Boolean(Math.floor(Math.random() * 2))

    let mennyiseg: number = Math.floor(Math.random() * (max! - min! + 1)) + min!;

    kiir += `('${fagyik[index]}', ${lactose}, ${mennyiseg.toString()})\n`;
    
}

fs.writeFileSync("fagyik.sql", kiir, { encoding: 'utf-8' })