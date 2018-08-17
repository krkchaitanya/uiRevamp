// basic-literals3
// Higher order functions... Arraya... TM
// forEach  filter  map   sort   reduce
const companies = [
    {name: "company one", category: "finance"},
    {name: "company Two", category: "indusrty"},
    {name: "companyThree", category: "medical"},
    {name: "company four", category: "medical"},
    {name: "company five", category: "auto"},
    {name: "company six", category: "Technology"},
    {name: "company seven", category: "Retail"}
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
