const input = document.querySelector("#text");
const btn = document.querySelector("#submit");
const displayResult = document.querySelector("#result");

btn.addEventListener('click',submitText);
let data;

let resultData=[];

function submitText(e)
{
    e.preventDefault();
    resultData=[];
    displayResult.innerHTML='';
    if(input.value==''){
        alert("Please enter some text")
    }
    else{
     
    let text = input.value;
    data = text.split(' ');
    let uniqueData = [...new Set(data)]
    // console.log(uniqueData)
    uniqueData.map((word)=>{
        checkCount(word);
    })
 resultData= resultData.sort(function(a, b) { 
        return b.count - a.count;
      });
      displayResult.innerHTML='';
      display();
}
}

function checkCount(word){
   let result= data.filter((item)=>{
        return word==item;
    })
    const obj = {
        name: result[0],
        count: result.length
    }
    resultData.push(obj);
}

function display(){
    const table= document.createElement('table');
    const thead = document.createElement('thead');
    thead.innerHTML = ` <tr> <th>Word</th><th>Count</th> </tr>`
       table.appendChild(thead);
    const tbody = document.createElement('tbody');
    table.appendChild(tbody);
    resultData.map((item)=>{
        const tr= document.createElement('tr');
        const td1= document.createElement('td');
        const td2= document.createElement('td');
        td1.appendChild(document.createTextNode(item.name));
        td2.appendChild(document.createTextNode(item.count));
        tr.appendChild(td1);
        tr.appendChild(td2);
        tbody.appendChild(tr);
    })
    displayResult.appendChild(table);
    input.value='';
}



