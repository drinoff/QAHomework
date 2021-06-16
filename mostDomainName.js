const xlsxFile = require("read-excel-file/node");

let abv = 0;
let gbg = 0;
let gmail = 0;
let icloud = 0;
let mail = 0;
let yahoo = 0;
let other = 0;

xlsxFile("./domainNames.xlsx").then((rows) => {
  for (let i = 0; i < rows.length; i++) {
    if (rows[i][0] === "abv.bg") {
      abv += 1;
    }else if(rows[i][0] === "gbg.bg"){
        gbg +=1;
    }else if(rows[i][0] === "gmail.com"){
        gmail +=1;
    }else if(rows[i][0] === "icloud.com"){
        icloud +=1;
    }
    else if(rows[i][0] === "mail.bg"){
        mail +=1;
    }else if(rows[i][0] === "yahoo.com"){
        yahoo +=1;
    }else{
        other +=1;
    }
  }
  console.log('abv: ' + abv);
  console.log('gbg: ' + gbg);
  console.log('gmail: ' + gmail);
  console.log('icloud: ' + icloud);
  console.log('mail: ' + mail);
  console.log('yahoo: ' + yahoo);
});

