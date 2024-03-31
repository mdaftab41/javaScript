const books =[
    {title:'Book one' , gendre:'Friction', publice:'1981', edition:'2004'},
    {title:'Book two' , gendre:'Non-Friction', publice:'1992', edition:'2008'},
    {title:'Book three' , gendre:'History', publice:'1999', edition:'2007'},
    {title:'Book four' , gendre:'Non-Friction', publice:'1989', edition:'2010'},
    {title:'Book five' , gendre:'science', publice:'2009', edition:'2014'},
    {title:'Book six' , gendre:'Friction', publice:'1987', edition:'2010'},
    {title:'Book seven' , gendre:'History', publice:'1986', edition:'1996'},
    {title:'Book Eight' , gendre:'science', publice:'2011', edition:'2016'},
    {title:'Book Nine' , gendre:'Friction', publice:'1980', edition:'2008'}
]

let UserBooks = books.filter((bk) =>bk.gendre==="Friction"  );
console.log(UserBooks);

console.log("using two condition");

UserBooks = books.filter((bk) =>bk.gendre==="Friction" && bk.edition<"2010");
console.log(UserBooks);
