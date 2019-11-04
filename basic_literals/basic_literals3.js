// basic-literals3
// Higher order functions... Arraya... TM
// forEach  filter  map   sort   reduce
const companies = [
    {name: "company one", category: "finance", start: 1981, end: 2018},
    {name: "company Two", category: "indusrty", start: 1992, end: 2015},
    {name: "companyThree", category: "medical", start: 1999, end: 2013},
    {name: "company four", category: "medical", start: 1994, end: 2007},
    {name: "company five", category: "auto", start: 1985, end: 2009},
    {name: "company six", category: "Technology", start: 1987, end: 2006},
    {name: "company seven", category: "Retail", start: 1989, end: 1999}
];  

const ages=[21,24,25,31,33,42,45,56,43,41,37,39,29,28];

// forEach
getDataInNewArray = (arrayInfo) => {
    const updatedCompaniesArray = [];
    arrayInfo.forEach((ele) => {
        updatedCompaniesArray.push(ele);
    });
    return updatedCompaniesArray;
};

console.log(getDataInNewArray(companies));

// filter
const filteredData = companies.filter((ele) => {
    if(ele.category === "medical"){
        return true;
    }
});
console.log("**Filtered data**", filteredData);

// Map
const mapMethodHandler =  companies.map((ele) => {
    return `${ele.name}..${ele.category}`;
});
console.log(mapMethodHandler);

// reduce
const randomNos = [1,2,3,4,5];
const randomNumsSum = randomNos.reduce((total,age) => total+age, 0);
console.log(randomNumsSum);

// combined methods
const combined = ages
    .map(age => age*2)
    .filter(age => age >= 40)
    .reduce((a,b) => a+b,0);
console.log(combined);

// get company ages and sort it
companies.forEach(ele => console.log("before sorting",ele));
companies.sort((a,b) => a.start-b.start);
companies.forEach(ele => console.log("after sorting", ele));