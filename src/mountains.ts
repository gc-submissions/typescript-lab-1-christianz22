export interface Mountain { 
    name:string, 
    height:number,  
 } 

 const mountains : Mountain[] = [
    {
        name: "Kilimanjaro",
        height: 19347,
    },
    {
        name: "Everest",
        height: 29029,
    },
    {
        name: "Denali",
        height: 20310,
    },
];

 export function findNameOfTallestMountain(mountains : Mountain[]) : string {
    var tallest = mountains[0];

    for (var i = 0; i < mountains.length; i++) {
        if (tallest.height < mountains[i].height ) {
            tallest = mountains[i];
        }
    }
    
    //console.log(tallest);
    return tallest.name;
}
findNameOfTallestMountain(mountains);

