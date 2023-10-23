const loadphone =async(searchText='13',isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones,isShowAll)
     }

     const displayPhones = (phones,isShowAll) => {
        console.log(phones)
        // 1  get container id
        const phoeContainer = document.getElementById('phone-container')
        // clear phone container cards before adding new cards
        phoeContainer.textContent =''; 
        console.log(phones.length)
        // display show all btn if there are more then 5
        showAllContainer = document.getElementById('show-all-container');

        if(phones.length > 5 && !isShowAll){
          showAllContainer.classList.remove('hidden')
        }
        else{showAllContainer.classList.add('hidden'); }
        // console.log('is show all',isShowAll)
        // display only 4 phones if not show all
        if(!isShowAll){
          phones = phones.slice(0,5);
        }
        phones.forEach(phone => {
            // console.log(phone)
            // 2 creat a div
            const phoneCard = document.createElement('div');
            phoneCard.classList = `card bg-gray-100 shadow-xl`;
            // 3 set inner html
            phoneCard.innerHTML =`            <figure><img src="${phone.image }" alt="Shoes" /></figure>

            <div class="card-body">
              <h2 class="card-title">${phone.phone_name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-center">
                <button onclick="handleShowDetail('${phone.slug}')" class="btn btn-primary">show Details</button>
              </div>
            </div>`;
        // 4 append child
        phoeContainer.appendChild(phoneCard)
        })
        // hide loading spinner
         toggleLoadingSpinner(false)
    }
    // show detail
      const handleShowDetail = async(id) =>{
        // console.log('click show details',id)
        // load single phone data
      const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
      const data = await res.json();
      const phone = data.data;
        showPhoneDetails(phone)

      }

      const showPhoneDetails = (phone) =>{
        console.log(phone)
        const phoneName = document.getElementById('show-detail-phone-name');
        phoneName.innerText = phone.name;
        const showDetailContainer = document.getElementById('show-detail-container');
        showDetailContainer.innerHTML = `
          <img src ="${phone.image}" alt=""/>
          
          
        `
        // show the modal

        document.getElementById('my_modal_5').showModal()
      }

    // handle search button
    const handleSearch = (isShowAll) =>{
      // console.log('handleSearch')
      toggleLoadingSpinner(true);
      const searchField = document.getElementById('search-field')
      const searchText = searchField.value;
      // console.log(searchText)
      loadphone(searchText,isShowAll);
    }

    const toggleLoadingSpinner = (isLoading) =>{
      const loadingSpinner = document.getElementById('loading-spinner')
      if(isLoading){
        loadingSpinner.classList.remove('hidden')

      }
      else{
        loadingSpinner.classList.add('hidden');
      }
    } 
    // handle show all
    const handleShowAll = () =>{
      handleSearch(true)
    }
    
    // loadphone()