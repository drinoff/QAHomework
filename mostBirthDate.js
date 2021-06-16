const xlsxFile = require("read-excel-file/node");

let datesCount = {};
let zodiac = {};

xlsxFile("./birthDates.xlsx").then((rows) => {
  let yearSum = 0;
  for (let i = 0; i < rows.length; i++) {
    let current = rows[i][0].split(" ");
    let currentDate = current[0].split(".").slice(0, 2).join(".");
    let currentYear = current[0].split(".").slice(2).join("");
    yearSum += 2021 - Number(currentYear);

    if (datesCount.hasOwnProperty(currentDate)) {
      datesCount[currentDate] += 1;
    } else {
      datesCount[currentDate] = 1;
    }

    let currentZodiac = Zodiac(currentDate);
    if (zodiac.hasOwnProperty(currentZodiac)) {
      zodiac[currentZodiac] += 1;
    } else {
      zodiac[currentZodiac] = 1;
    }
  }

  //print birthdays Count
  for (const [key, value] of Object.entries(datesCount)) {
    console.log(`${key}: ${value}`);
  }
  // print zodiac count
  for (const [key, value] of Object.entries(zodiac)) {
    console.log(`${key}: ${value}`);
  }

  // print avg age
  console.log(yearSum / 640);

  // zodiac decider function
  function Zodiac(date) {
    [dayS, monthS] = date.split(".");
    day = Number(dayS);
    month = Number(monthS);
    if (month === 3) {
      if (day >= 21) {
        return "oven";
      } else {
        return "ribi";
      }
    }

    if (month === 4) {
      if (day >= 21) {
        return "telec";
      } else {
        return "oven";
      }
    }
    if (month === 5) {
      if (day >= 22) {
        return "bliznaci";
      } else {
        return "telec";
      }
    }
    if (month === 6) {
      if (day >= 22) {
        return "rak";
      } else {
        return "bliznaci";
      }
    }
    if (month === 7) {
      if (day >= 23) {
        return "lav";
      } else {
        return "rak";
      }
    }
    if (month === 8) {
      if (day >= 24) {
        return "deva";
      } else {
        return "lav";
      }
    }
    if (month === 9) {
      if (day >= 24) {
        return "vezni";
      } else {
        return "deva";
      }
    }
    if (month === 10) {
      if (day >= 24) {
        return "skorpion";
      } else {
        return "vezni";
      }
    }
    if (month === 11) {
      if (day >= 23) {
        return "strelec";
      } else {
        return "skorpion";
      }
    }
    if (month === 12) {
      if (day >= 22) {
        return "kozirog";
      } else {
        return "strelec";
      }
    }

    if (month === 1) {
      if (day >= 21) {
        return "vodoley";
      } else {
        return "kozirog";
      }
    }

    if (month === 2) {
      if (day >= 20) {
        return "ribi";
      } else {
        return "vodoley";
      }
    }
  }
});
