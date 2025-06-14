// What we are going to learn and master it, in loops this are the main categories

// 1. For Statements
// 2. For.......in and For.....of statements

// For Flexibility
//  1. While loops
//  2. Do..while statements
//  3. For Each

`Today on 14 june 2025 will focus only on for statements`

// For statements loops until a specified condition evaluates to false

// for (initialization; condition; afterthought)
//  statement

function countSelected (selectObject) {
    let numberSelected = 0;
    for (let i = 0; i < selectObject.options.length; i++){
        if (selectObject.options[i].selected) {
            numberSelected++;
        }
    }
    return numberSelected;
}
 const btn = document.getElementById("btn");

 btn.addEventListener("click", () => {
    const musicTypes = document.selectForm.musicTypes;
    console.log (`You have Selected ${countSelected(musicTypes)}
options(s). `)
 })


 