function Cel_Fah(n)
{
    let degF;
    let degC;

    switch(n)
    {
        case 1:
            degC=20;
            degF = (degC * 9/5) + 32;
            console.log("Temperature in Fahrenheit : "+degF)
            break;
        case 2:
            degF=68;
            degC = (degF - 32) * 5/9;
            console.log("Temperature in celcius : "+degC)
            break;
        default:
            return false;
            break;

    }
}

Cel_Fah(2);