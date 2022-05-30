// Api load  
const searchPhone = () =>{
    document.getElementById('parantDiv').innerHTML=" ";
    document.getElementById('phoneDetails').innerHTML=" ";
    const error = document.getElementById('error')
    const phoneSearcher = document.getElementById('input-id').value  
       // console.log(phoneSearcher.data);   
        //error handler
        if( phoneSearcher==""){
         error.innerText ="*please type your phone name"
         document.getElementById('input-id').value=""
         
        }else if(phoneSearcher <= 0 || phoneSearcher >0){
            error.innerText="please type your phone name"
            document.getElementById('input-id').value="";
        }else{
            const url = `https://openapi.programming-hero.com/api/phones?search=${phoneSearcher}`
            fetch(url)
            .then(response => response.json())
            .then (data => showDisplay(data.data))
            //.then(data => console.log(data.data) )
           document.getElementById('input-id').value="";
           error.innerText=""
        }

}
// Api data show ui 
const showDisplay =(sendPhoneData)=>{
    if(sendPhoneData == 0 ){
        error.innerText ="SORRY invalid ame ! PLEASE Try a valid name"

    }else{

        const mainDiv = document.getElementById('parantDiv')
        const showFirst20Data =sendPhoneData.slice(0,20)
    // spinner function
        showSpinner('block');
        for (const phone of showFirst20Data ){
            const div=document.createElement('div')
            div.className =' col-12 col-md-4 col-lg-4 '
            div.innerHTML =`
            <div class=" my-card shadow-lg rounded-3 border border-success card mt-2 mb-4 " style="width:15rem; ">
            <img src="${phone.image}" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
            <h5 class="card-title fs-5 fw-bold">Brand Name: ${phone.brand}</h5>  
            <h5 class="card-title fs-5 fw-bold"> Product Name: ${phone.phone_name}</h5>
            <button href="#" onclick="PhoneDetails('${phone.slug}')" class="btn btn-success ">Phone Details</button>
            </div>
          </div>
          `
          mainDiv.appendChild(div)
         
        }
        showSpinner('none');  
    
    }
  
  
 
}

// phone details
 const PhoneDetails=(info) =>{
    const url = `https://openapi.programming-hero.com/api/phone/${info}`
        fetch(url)
        .then(response => response.json())
        .then(dataLoad =>displayPhone(dataLoad.data))

        document.getElementById('phoneDetails').innerHTML=""
 }

//  show UI phone details
const displayPhone =(detailsLoad)=>{
    const phoneDetails=document.getElementById('phoneDetails')
    const div = document.createElement('div')
    div.className='col-12 col-md-3 col-lg-3'
    div.innerHTML=`
    <div class="shadow rounded-3 border border-success card mt-2 mb-4 " style="width:20rem; ">
    <img src="${detailsLoad.image}" class="card-img-top w-75 ms-2 " alt="...">
    <div class="card-body">
    <h5 class="card-title fs-6 fw-bold">Name: ${detailsLoad.name}</h5>
    <p class="card-title fs-6 fw-normal">Release Date: ${detailsLoad.releaseDate}</p>
    <p class="card-title fs-6 fw-normal">Storage: ${detailsLoad.mainFeatures.storage}</p>  
    <p class="card-title fs-6 fw-normal">Display: ${detailsLoad.mainFeatures.displaySize}</p>
    <p class="card-title fs-6 fw-normal">Sensors: ${detailsLoad.mainFeatures.sensors}</p>
    <p class="card-title fs-6 fw-normal">Other Features: ${ Object.entries(detailsLoad.others)}</p>
    </div>
    </div>`
    
 phoneDetails.appendChild(div)
 
}

// spinner function 
const showSpinner = displayStyle => {
document.getElementById('spinner').style.display = displayStyle;

}