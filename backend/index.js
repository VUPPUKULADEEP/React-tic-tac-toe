const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.get('/',(req,res) => {
    res.send('hello')
})

app.post('/check',(req,res) =>{
    const {board, position, count} = req.body
    console.log(board)
    console.log(position+' is postion')
    console.log(count+' is count')
    const win = {
    0:[[1,2],[4,8],[3,6]],
    1:[[4,7],[0,2]],
    2:[[5,8],[0,1],[4,6]],
    3:[[4,5],[0,6]],
    4:[[0,8],[3,5],[1,7],[2,6]],
    5:[[2,8], [3,4]],
    6:[[7,8],[0,3],[4,2]],
    7:[[8,6],[1,4]],
    8:[[0,4],[6,7],[2,5]]
    };

    let arr = win[position]
    console.log(arr)
    for(let a of arr){
        console.log(board[position])
        if(board[position] === board[a[0]] && board[position] === board[a[1]]){
            console.log(`${board[position]} won match`)
            res.json({
                message:`${board[position]} won match`
            })
        }
    }
    if(count == 8){
        res.json({
                message:`draw`
            })
    }

})

app.listen(3000, ()=>{
    console.log('it is ready')
})