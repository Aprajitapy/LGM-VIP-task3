const data = [
    {
        name: "Abc",
        Maths:"90",
        Physics:"85",
        Chemistry : "70"
    },
    {
        name: "Harry",
        Maths:"98",
        Physics:"75",
        Chemistry : "81"
    },
    {
        name: "xyz",
        Maths:"83",
        Physics:"68",
        Chemistry : "91"
    },
    {
        name: "mno",
        Maths:"72",
        Physics:"84",
        Chemistry : "89"
    },
    {
        name: "pqr",
        Maths:"77",
        Physics:"66",
        Chemistry : "95"
    },
    {
        name: "stu",
        Maths:"75",
        Physics:"94",
        Chemistry : "69"
    },
    {
        name: "vwx",
        Maths:"76",
        Physics:"89",
        Chemistry : "89"
    },
    {
        name: "def",
        Maths:"91",
        Physics:"92",
        Chemistry : "93"
    },
    {
        name: "ghi",
        Maths:"65",
        Physics:"72",
        Chemistry : "75"
    },
    {
        name: "jkl",
        Maths:"72",
        Physics:"69",
        Chemistry : "66"
    }
]

const results = document.getElementById('res')

const smBtn = document.getElementById('smt-btn')
smBtn.addEventListener("click", function() {
    const name = document.getElementById('name-box').value;
    for(let i = 0; i < data.length; i++){
        if(data[i].name.toLowerCase() == name.toLowerCase()){
            console.log(data[i].marks)
            results.innerHTML ="<hr><h3>" + "Maths : " + data[i].Maths +"</h3></hr>" + "<hr><h3>" + "Physics : " 
            + data[i].Physics +"</h3></hr>" +"<h3><hr>" + "Chemistry : " + data[i].Chemistry +"</h3></hr>"+"<hr></hr>"
            return;
        }
    }
    results.innerHTML = "<h3>" + "NO information about this student." + "</h3>" 
})
