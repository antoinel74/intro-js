function askTVseries(name, year, cast) {
  let tvSeries = {
    name: name,
    year: year,
    cast: cast,
  };
  return tvSeries;
}

// Create a function containin an  object with 3 informations and return it

let name = prompt("What's your favourite TV show ?");
let year = parseInt(prompt("What's the release year ?"));
let castmember = prompt("Enter the castmembers separated by a coma :");
let cast = castmember.split(",");

// Ask the user to prompt the information, cast member must be separated by a coma

let seriesobject = askTVseries(name, year, cast);
const json = JSON.stringify(askTVseries(name, year, cast));
console.log(json);

// Display the object in json format within the console
