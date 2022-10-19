#include<stdio.h>
#include <stdlib.h>

int main()
{
  i,j,k,a[1000];
 m,n,l;
scanf("%d",n);
printf("%d",n);
for(i=0;i<n;i++);
{
scanf("%lld",a[i]);
}
scanf("%d",m);
l=m%n;
l=n-l;
for(i=l;i<n;i++)
printf("%lld ",a[i]);
for(i=0;i<l;i++)
printf("%lld ",a[i]);
}