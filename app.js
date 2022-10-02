// Bubble sort Implementação usando Javascript

const express = require ('express');
const app = express();

app.get ('/',(req,res) => {
    return res.json("funcionando")
});

function bblSort(arr){
	
    for(const i = 0; i < arr.length; i++){
        
    for(const j = 0; j < ( arr.length - i -1 ); j++){
        if(arr[j] > arr[j+1]){
            
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j+1] = temp
        }
    }
    }
    
    console.log(arr);
    }
    
    
    
    const arr = [654, 13, 15, 33, 25, 6, 212, 80];
    
    
    bblSort(arr);
    
    app.listen (3000,() =>{
        alert (Funcionando)
        });