const searchPhone =()=>{
    const phoneSearcher = document.getElementById('input-id').value
    const url = `https://openapi.programming-hero.com/api/phones?search=${phoneSearcher}`
     fetch(url)
    .then(response => response.json())
    .then (data => showDisplay(data.data))

}
const showDisplay =(sendPhoneData)=>{

    const mainDiv = document.getElementById('parantaDiv')

    for (const phone of sendPhoneData ){
        const div=document.createElement('div')
        div.className =' col-12 col-md-4 col-lg-4 '
        div.innerHTML =`
        <div class="shadow rounded-3 border border-success card mt-2 mb-4 " style="width:15rem; ">
        <img src="${phone.image}" class="card-img-top img-fluid" alt="...">
        <div class="card-body">
        <h5 class="card-title fs-5 fw-bold">Brand Name: ${phone.brand}</h5>  
        <h5 class="card-title fs-5 fw-bold"> Phone Name: ${phone.phone_name}</h5>
        <button href="#" onclick="PhoneDetails('${phone.slug}')" class="btn btn-success ">Phone Details</button>
        </div>
      </div>
      `
      mainDiv.appendChild(div)
    

     
    }

}

// phone details
 const PhoneDetails=(info) =>{
    const url = `https://openapi.programming-hero.com/api/phone/${info}`
        fetch(url)
        .then(response => response.json())
        .then(dataLoad =>displayPhone(dataLoad.data))

 }

//  show UI phone details
const displayPhone =(detailsLoad)=>{


    const phoneDetails=document.getElementById('phoneDetails')
    const div = document.createElement('div')
    div.innerHTML=`
    <div class="shadow rounded-3 border border-success card mt-2 mb-4 " style="width:15rem; ">
    <img src="${detailsLoad.image}" class="card-img-top w-75" alt="...">
    <div class="card-body">
    <h5 class="card-title fs-6 fw-bold">Name: ${detailsLoad.name}</h5>
    <p class="card-title fs-6 fw-normal">Release Date: ${detailsLoad.releaseDate}</p>
    <p class="card-title fs-6 fw-normal">Storage: ${detailsLoad.mainFeatures.storage}</p>  
    <p class="card-title fs-6 fw-normal">Display: ${detailsLoad.mainFeatures.displaySize}</p>
    <p class="card-title fs-6 fw-normal">Sensors: ${detailsLoad.mainFeatures.sensors}</p>
    <p class="card-title fs-6 fw-normal">Other Features: ${detailsLoad.others }</p>
    <p class="card-title fs-6 fw-normal">Release Date: ${detailsLoad.releaseDate}</p>
    </div>
    </div>
    
 `
 phoneDetails.appendChild(div)


}