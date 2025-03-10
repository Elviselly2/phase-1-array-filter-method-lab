// Code your solution here
function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
}

const drivers = ["Alice", "Bob", "Charlie", "alice"];
console.log(findMatching(drivers, "Alice"));

function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.startsWith(query));
}

console.log(fuzzyMatch(drivers, "Al"));
 
function matchName(driverObjects, query) {
    return driverObjects.filter(driver => driver.name === query);
}
const driverObjects = [
    { name: "Alice", hometown: "Nairobi" },
    { name: "Bob", hometown: "Mombasa" },
    { name: "Alice", hometown: "Kisumu" }
];
console.log(matchName(driverObjects, "Alice")); 

