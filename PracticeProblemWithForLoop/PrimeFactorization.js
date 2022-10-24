let n=315;
for(i=2;i*i<=n;i++)
{
    while(n%i==0)
    {
        console.log(i);
        n=n/i;
    }
}
if(n>2)
{
    console.log(i);
}
