let a=4;
let b=4;
let c=2;
let val1=a + b * c;
let val2=c + a / b;
let val3=a % b + c;
let val4=a * b + c;
console.log(val1);
console.log(val2);
console.log(val3);

console.log(val4);


if(val1>val3)
{
    if(val1>val4)
    {
        if(val1>val2)
        { 
            console.log(val1+" is Maximum");
        }
    }
    else
    {
        console.log(val4+" is Maximum");

    }
}
else if(val2>val3)
{
    if(val2>val4)
    {
        console.log(val2+" is Maximum");
    }
    else
    {
        console.log(val4+" is Maximum");

    }
}
else if(val3>val4)
{
    console.log(val3+" is Maximum");
}
else
{
    console.log(val4+" is Maximum");

} 




if(val1<val3)
{
    if(val1<val4)
    {
        if(val1<val2)
        {         
                console.log(val1+" is Minimum");
        }
        else
        {
            console.log(val4+" is Minimum");

        }
    }
}
else if(val2<val3)
{
    if(val2<val4)
    {
        console.log(val2+" is Minimum");
    }
    else
    {
        console.log(val4+" is Minimum");

    }
}
else if(val3<val4)
{
console.log(val3+" is Minimum");
}
else
{
console.log(val4+" is Minimum");

} 