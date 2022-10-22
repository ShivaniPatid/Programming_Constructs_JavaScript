let arr=new Array();
for(let i=0;i<5;i++)
{
    arr.push(Math.floor(Math.random()*999+100));
}
console.log(arr);

function MaxNumber()
{
    let temp;
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i;j<arr.length;j++)
        {
            if(arr[i]<arr[j])
            {
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr[0];
    
}

function MinNumber()
{
    let temp;
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i;j<arr.length;j++)
        {
            if(arr[i]<arr[j])
            {
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr[arr.length-1];
    
}
console.log("Maximum Number is "+MaxNumber());
console.log("Minimum Number is "+MinNumber());
