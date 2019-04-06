#include<stdio.h>
#include<conio.h>
#include<graphics.h>
void midPointCircle(int,int,int);
main(){
	int gd=DETECT,gm;
	initgraph(&gd,&gm,"C:\\turboC3\\bgi");
	int r,xc,yc;
	printf("Enter coordinates of the center and radius of the circle:");
	scanf("%d %d %d",&xc,&yc,&r);
	midPointCircle(xc,yc,r);
	getch();
	closegraph();
}
void midPointCircle(int x0, int y0, int radius)
{
    int xc = radius;
    int yc = 0;
    int p = 0;
 
    while (xc >= yc)
    {
    putpixel(x0 + xc, y0 + yc, 7);
    putpixel(x0 + yc, y0 + xc, 7);
    putpixel(x0 - yc, y0 + xc, 7);
    putpixel(x0 - xc, y0 + yc, 7);
    putpixel(x0 - xc, y0 - yc, 7);
    putpixel(x0 - yc, y0 - xc, 7);
    putpixel(x0 + yc, y0 - xc, 7);
    putpixel(x0 + xc, y0 - yc, 7);
 
    if (p <= 0)
    {
        yc += 1;
        p += 2*yc + 1;
    }
 
    if (p > 0)
    {
        xc -= 1;
        p -= 2*xc + 1;
    }
    }
}