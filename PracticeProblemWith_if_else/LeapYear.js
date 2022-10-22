let CheckLeapYear=function()
{
    let year=2016;
    if(year >= 999 && year <= 9999)
    {
        if(year%4==0)
        {
            console.log(year+" is a leap year");
        }
        else if(year%100==0)
        {
            console.log(year+" is not a leap year");
        }
        else if(year%400==0)
        {
            console.log(year+" is a leap year");
        }
        else
        {
            console.log(year+" is not a leap year");
        }
    }
    else
    {
        console.log("Give only 4 digit number");
    }
}

CheckLeapYear();