

const instagram = [
    {
        dp:'https://plus.unsplash.com/premium_photo-1694618625193-3d056dcd1ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
        story:'https://images.unsplash.com/photo-1694595437436-2ccf5a95591f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80'
    },
    {
        dp:"https://images.unsplash.com/photo-1694668726784-b99875a4bffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        story:"https://images.unsplash.com/photo-1693323932877-04b1a3068ade?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"
    },
    {
        dp:"https://images.unsplash.com/photo-1689312771647-96fedf46e0e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1924&q=80",
        story:"https://images.unsplash.com/photo-1684829352131-66d7617e392d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
    },
    {
        dp:"https://images.unsplash.com/photo-1694106348181-7738c01407b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
        story:"https://images.unsplash.com/photo-1654512495058-da576f481167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
    },
    {
        dp:"https://images.unsplash.com/photo-1654514435401-7e5ea64ee6df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
        story:"https://images.unsplash.com/photo-1654765435365-42eb1e895de2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
        dp:"https://images.unsplash.com/photo-1654512463066-3c923091ebbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
        story:"https://images.unsplash.com/photo-1694120341137-182907e87f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
    },
]

{/* */}



let arr = []
let dataArr = ''
  const storylist = document.getElementById('storylist')   

  instagram.forEach((item,id)=>{
    dataArr += `<div class="story">
    <img id="${id}" src=${item.dp} alt="">
    </div> `

  })

  storylist.innerHTML =dataArr


  storylist.addEventListener('click',(event)=>{

    console.log(instagram[event.target.id].story)

    

    
  })
