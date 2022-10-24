let flag;
for(let i=0;i<=100;i++)
{
    if(i==0||i==1)
    {
        continue;
    }
    flag=1;
    for(let j=2;j<=i/2;j++)
    {
        if(i%j==0)
        {
            flag=0;
            break;
        }
    }
    if(flag==1)
    {
        console.log(i);
    }
}