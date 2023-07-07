let myLeads = []

const leads = document.getElementById("leads")
const leadsList = document.getElementById("leads-list")
const inputBtn = document.getElementById("input-btn")

localStorage.clear()
//Get the leads from localStorage
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)

inputBtn.addEventListener("click", function() {
    myLeads.push(leads.value)
    //Clear out the input field
    leads.value = ""

    //Save the my Leads array to localStorage
    localStorage.setItem("myLeads", JSON.stringify("myLeads"))
  
    renderLeads()
      
    
})

function renderLeads(){
    let listItems = ""
for (let i = 0; i < myLeads.length; i++) {
    //listItems +=  "<li><a href='#' target='_blank' >" + myLeads[i]  + "</a></li>" 
    listItems += `
    <li>
       <a target='_blank' href='${myLeads[i]}'>
       ${myLeads[i]}
       </a>
    </li>
    ` 
    
}
leadsList.innerHTML = listItems
} 








