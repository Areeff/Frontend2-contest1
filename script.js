const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  for(let i=0;i<data.length;i++){
    if(data[i].profession=="developer"){
      console.log(data[i]);
    }
  }
}

// 2. Add Data
function addData() {
  let obj={
    name:prompt("enter name"),
    age:parseInt(prompt("enter age")),
    profession:prompt("enter profession")
  }
  data.push(obj);
}

// 3. Remove Admins
function removeAdmin() {
  for(let i=0;i<data.length;i++){
    if(data[i].profession=="admin"){
      data.splice(i,1);
    }
  }
}

// 4. Concatenate Array
function concatenateArray() {
  const extradata=[
    {name:"Areeff", age:22, profession:"developer"}
  ]
   console.log(data.concat(extradata));
}

// 5. Average Age
function averageAge() {
  let sum=0;
  for(let i=0;i<data.length;i++){
       sum+=parseInt(data[i].age);
  }
  let ans=sum/data.length;
  console.log(ans);
}

// 6. Age Check
function checkAgeAbove25() {
  let count=0;
  for(let i=0;i<data.length;i++){
    if(parseInt(data[i].age)>=25){
      count++;
    }
  }
  if(count>=1){
      console.log("ageabove 25 is:" + count);
  }else{
    console.log("there is no one age above 25");
  }
}

// 7. Unique Professions
function uniqueProfessions() {
  let map={};
  for(let i=0;i<data.length;i++){
    if(map[data[i].profession]==null){
      map[data[i].profession]=1;
    }else{
      let x= parseInt(map[data[i].profession]);
      x=x+1;
      map[data[i].profession]=x.toString();
    }
  }
  console.log(Object.keys(map));
}

// 8. Sort by Age
function sortByAge() {
  // let n=data.length;
  // for(let i=0;i<n-1;i++){
  //   for(let j=0;j<n-i-1;j++){
  //     if(parseInt(data[i].age)>parseInt(data[i+1].age)){
  //       console.log(1);
  //       let temp=data[i];
  //       data[i]=data[i+1];
  //       data[i+1]=temp;
  //     }
  //   }
  // }
  // console.log(data);
  // for(let i=0;i<n;i++){
  //   console.log(data[i]);
  // }

  data.sort((a,b)=>{
    if(parseInt(a.age)>parseInt(b.age)){
      return 1;
    }
    else if(parseInt(a.age)<parseInt(b.age)){
      return -1;
    }else{
      return 0;
    }
  })
  console.log(data);
}

// 9. Update Profession
function updateJohnsProfession() {
  for(let i=0;i<data.length;i++){
    if(data[i].name=="john"){
      data[i].profession="manager";
    }
  }
}

// 10. Profession Count
function getTotalProfessions() {
  let map={};
  for(let i=0;i<data.length;i++){
    if(map[data[i].profession]==null){
      map[data[i].profession]=1;
    }else{
      let x= parseInt(map[data[i].profession]);
      x=x+1;
      map[data[i].profession]=x.toString();
    }
  }
  console.log(Object.entries(map));
}
