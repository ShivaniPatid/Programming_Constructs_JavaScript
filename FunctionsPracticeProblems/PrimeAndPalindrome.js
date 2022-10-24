function ChecckPrimeAndPalindrome(num)
{
    
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
            num=temp;
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
                console.log(num+" palindrome number is also prime number");
            }
            else
            {
                console.log(num+" palindrome number is not a prime number");
            }
        }
        else
        {
            console.log(temp+" is not palindrome number");
        }

    }
    else
    {
        console.log(num+" is not a prime number");
    }
}

let num=131;
ChecckPrimeAndPalindrome(num);