let day= new Date().getDay();
let text;
if(day==0)
{
    text="Sunday";
}
else if(day==1)
{
    text="Monday"
}
else if(day==2)
{
    text="Tuesday";
}
else if(day==3)
{
    text="Wednesday";
}
else if(day==4)
{
    text="Thursday";
}
else if(day==5)
{
    text="Friday";
}
else if(day==6)
{
    text="Saturday";
}
else
{
    text="whatever";
}
console.log(text);