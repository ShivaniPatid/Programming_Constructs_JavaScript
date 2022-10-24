let num=7;
let flag=0;
if(num == 0 || num == 1)
{
    flag=1;
}

for(let i=2;i<=num/2;i++)
{
    if(num%i==0)
    {
        flag=1;
        break;
    }
}
if(flag==0)
{
    console.log(num+" is prime number");

}
else
{
    console.log(num+" is not a prime number");
}