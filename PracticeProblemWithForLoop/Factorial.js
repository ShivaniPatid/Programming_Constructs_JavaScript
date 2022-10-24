let n=5;
let answer=1;
if(n==0||n==1)
{
    console.log(answer)
}
else
{
    for(let i=n;i>=1;i--)
    {
        answer=answer*i;
    }
    console.log("The factorial of "+n+" is : "+answer);
}