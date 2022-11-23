// console.log("WELCOME")
class team{
    constructor(name,match,won,lose,nrr,pt){
        this.name=name;
        this.match=match;
        this.won=won;
        this.lose=lose;
        this.nrr=nrr;
        this.pt=pt;
    }
}

let ind= new team("India",5,4,1,+1.319,8);
let sa= new team("South Africa",5,2,2,+0.874,5);
let zim= new team("Zimbabwe",5,1,3,-1.138,3);
let ned= new team("Netherland",5,2,3,-0.849,4);
let ban= new team("Bangladesh",5,2,3,-1.176,4);
let pak= new team("Pakistan",5,3,2,+1.028,6);

let teams=[ind,sa,zim,ned,ban,pak];

teams.sort(
    (t1,t2)=>{
        if(t1.pt!=t2.pt)
        return (t2.pt-t1.pt)
        else
        return (t2.nrr-t1.nrr)
    }
    );
    console.log(teams);
    let i;
    let r="";
    for(i=0;i<teams.length;i++){
        if(i&1)
        r+="<tr class=table-danger>"+"<td>"+teams[i].name+"</td>"+"<td>"+teams[i].match+"</td>"+"<td>"+teams[i].won+"</td>"+"<td>"+teams[i].lose+"</td>"+"<td>"+teams[i].nrr+"</td>"+"<td>"+teams[i].pt+"</td>"+"</tr>";
        else
    r+="<tr class=table-warning>"+"<td>"+teams[i].name+"</td>"+"<td>"+teams[i].match+"</td>"+"<td>"+teams[i].won+"</td>"+"<td>"+teams[i].lose+"</td>"+"<td>"+teams[i].nrr+"</td>"+"<td>"+teams[i].pt+"</td>"+"</tr>";
}
document.getElementById('maindata').innerHTML=r;