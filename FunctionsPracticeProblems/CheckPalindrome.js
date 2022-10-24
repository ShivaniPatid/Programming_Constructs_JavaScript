function Palindrome(num)
{
    let rem,sum=0,temp;
    temp=num;
    while(num>0)
    {
        rem=num%10;
        sum=sum*10+rem;
        num=parseInt(num/10);
    }
    if(temp==sum)
    {
        console.log(temp+" is palindrome number");
    }
    else
    {
        console.log(temp+" is not palindrome number");
    }
}

let num=121;
Palindrome(num);