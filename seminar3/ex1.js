const birthyears=[1990,2000,1985, 1995, 2005, 2010];
const currentYear=new Date().getFullYear();
const mappedYears=birthyears.map(el=>currentYear-el).filter(el=>el>=18);
console.log(mappedYears);