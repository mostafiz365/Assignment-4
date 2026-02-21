const allBtn = document.getElementById('all-btn');
const interviewBtn = document.getElementById('interview-btn');
const rejectedBtn = document.getElementById('rejected-btn');
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
    selected.classList.remove('bg-white' , 'text-[#64748B]');
    selected.classList.add('bg-[#3B82F6]' ,'text-white');
}

// Card Count function -----------------
let interviewList = [];
let rejectedList = [];
let totalCount = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');

function count(){
    totalCount.innerText= cardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}

count();