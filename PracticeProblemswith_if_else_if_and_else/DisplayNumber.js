let number=1000;
if(number==1)
{
    text="One";
}
else if(number==10)
{
    text="Ten";
}
else if(number==100)
{
    text="Hundred";
}
else if(number==1000)
{
    text="Thousand";
}
else if(number==1000000)
{
    text="Million";
}
else if(number==1000000000)
{
    text="Brillion";
}
else if(number==1000000000000)
{
    text="Trillion";
}
else
{
    text="Infinity";
}
console.log(text);