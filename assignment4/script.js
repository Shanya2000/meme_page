var names=new Array();
names[0]="Yaakov"
names[1]="Jhope"
names[2]="Jin"
names[3]="Jestin"
names[4]="Prince"
names[5]="Frankin"
names[6]="Larry"
names[7]="Pauly"
names[8]="Lacy"
names[9]="Jam"


for ( var i=0; i<names.length;i++) 
    if (names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
    console.log("Goodbye" + names[i])
      }
    else{
    console.log("Hello" + names[i])
}