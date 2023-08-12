let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  
  // Don't worry about consoling these functions, they are already being called on the button clicks.
  // Please don't change anything in the index.html file.
  
  function PrintDeveloper() {
    //Write your code here , just console.log
    for(let i of arr){
        if(i.proffesion==="developer")
        console.log(i);
    }

  }
  
  function addData() {
    //Write your code here, just console.log
    let add={id:4, name:"Kittu", age:22, profession:"developer"};
    arr.push(add)
    console.log(arr)
  }
  
  function removeAdmin() {
    //Write your code here, just console.log

    for(i of arr){
        if(arr[i].profession=='admin')
        {
            arr.splice(i,1)
        }
    }
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log

    let arr2=[
    
     {id:5, name:"sai", age:22, proffesion:"Businessman"},
   { id:6, name:"Kiran", age:22, profession:"Youtuber"},
   { id:7, name:"Boppani", age:23, profession:"Gamer"}
    

    ]
    arr=arr.concat(arr2);
    console.log(arr)
  }
  
  // Here is an example of how functions work,
  // basically a function is a block of code which can directly access your 'arr' variable since arr is global.
  // If I have a function called consoleArr(), that can directly access arr like this to console it.
  
  function consoleArr() {
    console.log('Consoling Array Variable', arr);
    // Over here I can directly access the variable.
  }