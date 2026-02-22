let interviewList = [];
let rejectedList = [];
let currentStatus = 'all';

let totalCount = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');

const allBtn = document.getElementById('all-btn');
const interviewBtn = document.getElementById('interview-btn');
const rejectedBtn = document.getElementById('rejected-btn');
const filteredSection = document.getElementById('filtered-section');

const cardSection = document.getElementById('card-section');
const noJobSection = document.getElementById('no-job-section');


// button click and card show ---------
allBtn.addEventListener('click', function(){
    cardSection.classList.remove('hidden');
})
interviewBtn.addEventListener('click', function(){
    cardSection.classList.add('hidden');
    noJobSection.classList.remove('hidden');
})
rejectedBtn.addEventListener('click', function(){
    cardSection.classList.add('hidden');
    noJobSection.classList.remove('hidden');
})

// button toggle Style ----------------
function toggleStyle(id){
    allBtn.classList.add('bg-white' , 'text-[#64748B]');
    interviewBtn.classList.add('bg-white' , 'text-[#64748B]');
    rejectedBtn.classList.add('bg-white' , 'text-[#64748B]');

    allBtn.classList.remove('bg-[#3B82F6]' ,'text-white');
    interviewBtn.classList.remove('bg-[#3B82F6]' ,'text-white');
    rejectedBtn.classList.remove('bg-[#3B82F6]' ,'text-white');

    const selected = document.getElementById(id);
    currentStatus = id;

    selected.classList.remove('bg-white' , 'text-[#64748B]');
    selected.classList.add('bg-[#3B82F6]' ,'text-white');

    if(id == 'interview-btn'){
        cardSection.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderInterview();
    }
    else if(id == 'all-btn'){
        cardSection.classList.remove('hidden');
        filteredSection.classList.add('hidden');
        noJobSection.classList.add('hidden');
    }
    else if(id == 'rejected-btn'){
        cardSection.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderRejected();
    }
}

// Card Count function -----------------

function count(){
    totalCount.innerText= cardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
count();


cardSection.addEventListener('click', function(event){
    if(event.target.classList.contains('card-interview-btn')){
        const parent = event.target.parentNode.parentNode;
    
    const companyName = parent.querySelector('.companyname').innerText;
    const position = parent.querySelector('.position').innerText;
    const salary = parent.querySelector('.salary').innerText;
    const status = parent.querySelector('.status').innerText;
    const description = parent.querySelector('.description').innerText;

    parent.querySelector('.status').innerText = 'Interview';

    const cardInfo = {
        companyName,
        position,
        salary,
        status: 'Interview',
        description
    };

    const companyNameExist = interviewList.find(item => item.companyName == cardInfo.companyName)
    
    if(!companyNameExist){
        interviewList.push(cardInfo);
    }

    rejectedList = rejectedList.filter(item => item.companyName != cardInfo.companyName)

    
    if(currentStatus == 'rejected-btn'){
        renderRejected();
    }
    count()
    }
    else if(event.target.classList.contains('card-rejected-btn')){
        const parent = event.target.parentNode.parentNode;
    
    const companyName = parent.querySelector('.companyname').innerText;
    const position = parent.querySelector('.position').innerText;
    const salary = parent.querySelector('.salary').innerText;
    const status = parent.querySelector('.status').innerText;
    const description = parent.querySelector('.description').innerText;

    parent.querySelector('.status').innerText = 'Rejected';

    const cardInfo = {
        companyName,
        position,
        salary,
        status: 'Rejected',
        description
    };

    const companyNameExist = rejectedList.find(item => item.companyName == cardInfo.companyName)
    
    if(!companyNameExist){
        rejectedList.push(cardInfo)
    }

    interviewList = interviewList.filter(item => item.companyName != cardInfo.companyName)

    if(currentStatus == "interview-btn"){
        renderInterview();
    }

    count();
    }
})



function renderInterview(){
    filteredSection.innerHTML = '';

    for(let interview of interviewList){
        let div = document.createElement('div');
        div.className = 'bg-white p-6 rounded-lg flex justify-between mb-4';
        div.innerHTML = `
        <div class="space-y-4">
            <h5 class="companyname text-[18px] font-semibold text-[#002C5C]">
              ${interview.companyName}
            </h5>
            <p class="position text-[#64748B]">${interview.position} </p>
            <p class="salary text-[#64748B] text-[14px]">
              ${interview.salary}
            </p>
            <button
              class="status font-medium text-[14px] text-[#002C5C] bg-[#EEF4FF] px-4 py-2 rounded-md"
            >
              ${interview.status}
            </button>
            <p class="description text-[14px] text-[#323B49]">
              ${interview.description}
            </p>
            <div class="flex gap-2">
              <button
                class="card-interview-btn border-[#10B981] border rounded-md px-3 py-2 font-semibold text-[14px] text-[#10B981]"
              >
                Interview
              </button>
              <button
                class="card-rejected-btn border-[#EF4444] border rounded-md px-3 py-2 font-semibold text-[14px] text-[#EF4444]"
              >
                Rejected
              </button>
            </div>
          </div>
          <span
            ><i class="fa-regular fa-trash-can border border-[#F1F2F4]"></i
          ></span>
        `

        filteredSection.appendChild(div);
    }
}

function renderRejected(){
    filteredSection.innerHTML = '';

    for(let rejected of rejectedList){
        let div = document.createElement('div');
        div.className = 'bg-white p-6 rounded-lg flex justify-between mb-4';
        div.innerHTML = `
        <div class="space-y-4">
            <h5 class="companyname text-[18px] font-semibold text-[#002C5C]">
              ${rejected.companyName}
            </h5>
            <p class="position text-[#64748B]">${rejected.position} </p>
            <p class="salary text-[#64748B] text-[14px]">
              ${rejected.salary}
            </p>
            <button
              class="status font-medium text-[14px] text-[#002C5C] bg-[#EEF4FF] px-4 py-2 rounded-md"
            >
              ${rejected.status}
            </button>
            <p class="description text-[14px] text-[#323B49]">
              ${rejected.description}
            </p>
            <div class="flex gap-2">
              <button
                class="card-interview-btn border-[#10B981] border rounded-md px-3 py-2 font-semibold text-[14px] text-[#10B981]"
              >
                Interview
              </button>
              <button
                class="card-rejected-btn border-[#EF4444] border rounded-md px-3 py-2 font-semibold text-[14px] text-[#EF4444]"
              >
                Rejected
              </button>
            </div>
          </div>
          <span
            ><i class="fa-regular fa-trash-can border border-[#F1F2F4]"></i
          ></span>
        `

        filteredSection.appendChild(div);
    }
}
