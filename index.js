const DataLoad=()=>{
    fetch('https://f24-1-mid-1.vercel.app/content')
    .then(res=>res.json())
    .then(data=>ShowData(data))
}
DataLoad()
const ShowData=(values)=>{
    const mainDiv=document.getElementById('container')
    for(const value of values){
        const {category,title,description,comment_count,posted_time,view_count,image} = value;
        const div =document.createElement('div')
        div.innerHTML =` <div class="card card-side bg-base-100 shadow-xl">
  <figure>
    <img class="h-24 w-32"
      src="${image}"
      alt="Movie" />
  </figure>
  <div class="card-body">
   <div class="flex gap-40">
    <div>
    <h2 class="card-title font-bold">${category}</h2>
    </div>
    <div>
    <p class="text-xl font-bold">${value.author.name}</p>
    </div>
    </div><br>
    <p class="text-xl font-semibold">${title}</p>
    <p class="text-l font-normal">${description}</p><br>

        <div class="flex gap-40">
    <div>
    <h2 class="card-title font-bold">${comment_count}</h2>
    </div>
    <div>
    <p class="text-xl font-bold">${posted_time}</p>
    </div>
    </div>

    <div class="card-actions justify-end">
      <button class="btn btn-primary"  onclick='add(${JSON.stringify(value)})'>Add</button>
    </div>
  </div>
</div> 
`
mainDiv.appendChild(div)
    }   
}


const add=(clicked)=>{
    const {title,comment_count} =clicked
const order=document.getElementById('order')
const li=document.createElement('li')
li.innerHTML=`
<div class="flex gap-16 pt-4">
    <p class="text-s font-semibold">${title}</p>
    <p class="text-xl font-semibold">${comment_count}</p>
</div>`
order.appendChild(li);

}

const loadData=()=>{
    fetch('https://f24-1-mid-1.vercel.app/blogs')
    .then(res1=>res1.json())
    .then(data1=>dataShow(data1))
}
loadData()
const dataShow=(values1)=>{
    const mainDiv1=document.getElementById('container2')
    for(const value1 of values1){
        
        const {cover_image,profile_image,posted_date,title,description} = value1;
        const div =document.createElement('div')
        

        const cardContainer = document.getElementById("card-container");


        div.innerHTML =`<div class="card card-compact bg-base-100  shadow-xl">
  <figure>
    <img
      src="${cover_image}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">
       ${value1.author.posted_date}  
    </h2>
    <p>${title}</p>
    <p>${description}</p>
    <div class="flex gap-20">
     <figure>
    <img class="w-20 h-16"
      src="${profile_image}"
      alt="Shoes" />
  </figure>
        <p>${value1.author.name}</p>
    </div>
    <p class="text-center">${value1.author.designation}</p>
  </div>
</div>
        `
        mainDiv1.appendChild(div) ;     
}
}





