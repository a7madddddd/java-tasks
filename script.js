

let yellowBox = document.getElementById('yellowbox')
  yellowBox.addEventListener('mouseover' ,()=>{
    yellowBox.innerHTML =' Hello World'
    
      yellowBox.addEventListener('mouseout', ()=>{
        yellowBox.textContent='Can I Help You'
      })
    
  })



function change(x){
  document.querySelector("#image-1").src=x;
}
// 
    let con2 = document.getElementById('con-2') 
    let fontFamily = document.getElementById('select1')
    fontFamily.addEventListener('change', () =>{
    con2.style.fontFamily =fontFamily.value
    })
// 
    let fontsize = document.getElementById('select2')
    fontsize.addEventListener('change', () =>{
    con2.style.fontSize =fontsize.value
    })
// 
    let textColor = document.getElementById('select3')
    textColor.addEventListener('change', ()=>{
      con2.style.color= textColor.value
    })
// 
    let select4 = document.getElementById('select4')
    select4.addEventListener('change', ()=>{
      con2.style.letterSpacing = select4.value
    })
// 
    let italic = document.getElementById('check1')
    italic.addEventListener('change' , ()=> {
      if(italic.checked){
        con2.style.fontStyle = 'italic'
      }else {
        con2.style.fontStyle=''
      }
    })
    // 
   let bold =document.getElementById('check2')
    bold.addEventListener('change' , ()=> {
      if(bold.checked){
        con2.style.fontWeight = 'bold'
      }else {
        con2.style.fontWeight='normal'
      }
    })
// 
    let underline = document.getElementById('check3')
      underline.addEventListener('change' , ()=> {
      if(underline.checked){
        con2.style.textDecoration= 'underline'
      }else {
        con2.style.textDecoration=''
      }
    })
// 
    let changecolor = document.getElementById('changecolor')
    changecolor.style.backgroundColor = 'blue'
    

    // changecolor.addEventListener('click' ,() => {
    //   if(changecolor.click){
    //     changecolor.style.backgroundColor ='red '
    //   }
    // })

 
  changecolor.addEventListener('click', ()=>{
    if (changecolor.style.backgroundColor == 'blue'){
        changecolor.style.backgroundColor = 'red'
    }else{
    changecolor.style.backgroundColor = 'blue'
    }
  })
  // 

  let log1 = document.getElementById('log1')
  let log2 = document.getElementById('log2')
  let Password = document.getElementById('input1')
  let Password2 = document.getElementById('input2')
  let submit = document.getElementById('button')
  let div = document.getElementById('information')
  Password.addEventListener('input', ()=>{
    log1.textContent =''
    if(Password.value.length <= 6){
      log1.textContent ='Too Short'
    }else{
      log1.textContent =''
    }
  })
  Password2.addEventListener('input', ()=>{
    if(Password2.value.length <= 6){
      log2.textContent =' The Two Password don`t Match'
    }else{
      log2.textContent =' '
    }
    if(Password.value.length === Password2.value.length){
      submit.style.visibility='visible'
    }else{
      submit.style.visibility='hidden'
    }
  })
  

  // function submitTest(){
  //    let show = true
  //   if(Password.value.length <= 6){
  //     log1.innerHTML ='Too Short'
  //      show = flase
  //   }else{ 
  //     log1.textContent =''
  //    }

  //    if(Password.value.length != Password2.value.length ){
  //      log2.textContent =' The Two Password don`t Match'
  //      show = false
  //    }else{
  //     log2.textContent =''
  //    }
  //    button.style.visibility='visibile'? 'Too Short':' '
  //     return show
  //   }
     
  //   Password.addEventListener('input', checkpassword);
  //   Password2.addEventListener('input', checkpassword);

  //   div.addEventListener('submit' ,(x)=>{
  //     if(!checkpassword ()){
  //       x.back();
  //     }
  //   })

    



let addSong = document.getElementById('addsongfield')
let addbtn = document.getElementById('addsongbtn')
let songList = document.getElementById('songlist')
addbtn.addEventListener('click' ,() =>{
  let newaddedSong = document.createElement('li')
  newaddedSong.innerText = addSong.value
  addSong.value = ''
  songList.appendChild(newaddedSong)
})






