


let currentImageIndex = 0,
     imagem = [document.querySelectorAll('section.backgrounds img')],
     max = imagem.length
     let titulo = document.querySelectorAll('.title h1')
     const icoDown = document.getElementById('ico-down')
     
     function icon() {
          icoDown.style.visibility = 'hidden'
     }

     //const res = 
     console.log(imagem)
     //for (const tit of titulo) {
     //     imagem.addEventListener('scroll', () =>{
           
     //}
     for (const img of imagem) {
         // console.log()
         //console.log(img.nextElementSibling)
      //  if (img.length) {
              
      //      console.log(img.id.toString())
      //      currentImageIndex++
              
      //  }else if (img.id = 'model-y') {
      //   console.log(img.id.toString())
      //   currentImageIndex++
      //   }
          //console.log(img.id)   
          
    //   currentImageIndex++
        }    
//console.log(icoDown)
  scrollDown()
     function scrollDown() {
     
         
//     if(imagem[currentImageIndex]){
//          console.log(imagem[0])
//    }else if (imagem[currentImageIndex == 1]) {
//          console.log(imagem[1])
//    }else if(imagem[currentImageIndex] == 2){
//          console.log(imagem[2])
//    }else if(imagem[currentImageIndex] == 3){
//           console.log(imagem[3])
//    }
//}

    /*
     function nextImage() {
         
          currentImageIndex++

          if (currentImageIndex > max) {
               currentImageIndex = 0
          }
          console.log(currentImageIndex)
          imagem[currentImageIndex].classList.add('h1')
     
     
     }


     function start() {
          setInterval(() => {
              console.log('Funcionou') 
              nextImage()
          }, 2000);
     }



window.addEventListener('load', start)




/*
let imagem = document.querySelectorAll('section.backgrounds img')
console.log(imagem[0])
const icoDown = document.getElementById('ico-down')



imagem.forEach(function (element) {

window.addEventListener('scroll', scrollDown)
window.addEventListener('scroll', iconVisibility)

})

function scrollDown() {
    
    
   
    const windowTop = window.pageYOffset
    icon() 
  
       
   
    
     if (windowTop > element.offsetTop) {
         window.scroll({
         
         visibility: icoDown.style.visibility = "visible",
         behavior: 'smooth'
         
      })
       
  }

     }
  
*/
//window.addEventListener('scroll', scrollDown)
}
     window.addEventListener('scroll', scrollDown)