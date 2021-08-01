let createItem = document.querySelector("#createItem");
let diaryShow = document.querySelector("section.diaryShow");
let diaryItems = document.createElement("div");
diaryItems.classList.add("diaryItems");
diaryShow.appendChild(diaryItems);
let downIcon = document.querySelector(".downIcon");
var diaryList = [];
createItem.addEventListener("click", e => {
    e.preventDefault();
    let items = document.querySelector(".items");
    let title = items.children[0].children[1];
    let addDate = items.children[1].children[1];
    let year = addDate.value.substring(0, 4);
    let month = addDate.value.substring(5, 7);
    let date = addDate.value.substring(8);
    let picture = items.children[2].children[1];
    let desc = items.children[3].children[1];
    
    if(title.value === ""){
        alert("請填寫標題");
        title.parentElement.children[1].select();
        return ;
    }
    if(addDate.value === ""){
        alert("請填寫日期");
        addDate.parentElement.children[1].select();
        return ;
    }
    if(picture.value === ""){
        alert("請填寫照片網址");
        picture.parentElement.children[1].select();
        return ;
    }

    let diaryItem = document.createElement("div");
    diaryItem.classList.add("diaryItem");
    //delete btn
    let delItem = document.createElement("div");
    delItem.classList.add("delItem");
    delItem.addEventListener("click", e => {
        let delitem = e.target.parentElement;
        let deltext = delitem.children[2].innerText;
        diaryList.forEach((item, index) => {
            if(item.title == deltext) {
                diaryList.splice(index, 1);
            }
        });
        if(diaryList.length == 0) {
            downIcon.style.visibility = "hidden";
        }
        delitem.remove();
    });
    let heading2 = document.createElement("h2");
    heading2.innerText = title.value;

    let diaryDate = document.createElement("p");
    diaryDate.classList.add("diaryDate");
    diaryDate.innerHTML ="<i class='far fa-calendar-check'></i>" +  year + "/" + month + "/" + date;
    
    let image = document.createElement("img");
    image.src = picture.value;

    let diaryDesc = document.createElement("p");
    diaryDesc.classList.add("diaryDesc");
    diaryDesc.innerText = desc.value;

    diaryItem.appendChild(delItem);
    diaryItem.appendChild(image);
    diaryItem.appendChild(heading2);
    diaryItem.appendChild(diaryDesc);
    diaryItem.appendChild(diaryDate);

    if(diaryList.length !== 0) {
        downIcon.style.visibility = "";
    } else {
        downIcon.style.visibility = "hidden";
    }
    //建立diary object
    let diary = {
        title: title.value,
        year: year,
        month: month,
        date: date,
        image: picture.value,
        desc: desc.value
    };
    
    diaryList.push(diary);
    //清空欄位
    title.value = ""; 
    addDate.value = "";
    picture.value = "";
    desc.value = ""; 

    diaryItems.appendChild(diaryItem);
});

loadData();

function loadData() {
    let record1 = {
        title: "花",
        year: "2021",
        month: "06",
        date: "01",
        image: "./images/plant1.jpg",
        desc: "雨後的花!"
    };
    diaryList.push(record1);
    if(diaryList.length !== 0) {
        
        for(let i in diaryList) {
            let diaryItem = document.createElement("div");
            diaryItem.classList.add("diaryItem");
            
            let delItem = document.createElement("div");
            delItem.classList.add("delItem");
            delItem.addEventListener("click", e => {
                let delitem = e.target.parentElement;
                let deltext = delitem.children[2].innerText;
                diaryList.forEach((item, index) => {
                    if(item.title == deltext) {
                        diaryList.splice(index, 1);
                    }
                });
                if(diaryList.length == 0) {
                    downIcon.style.visibility = "hidden";
                }
                delitem.remove();
            });
            
            
            let img = document.createElement("img");
            img.src = diaryList[i].image;

            let heading2 = document.createElement("h2");
            heading2.innerText = diaryList[i].title;
            
            let diaryDesc = document.createElement("p");
            diaryDesc.classList.add("diaryDesc");
            diaryDesc.innerText = diaryList[i].desc;
            
            let diaryDate = document.createElement("p");
            diaryDate.classList.add("diaryDate");
            diaryDate.innerHTML = "<i class='far fa-calendar-check'></i>" + diaryList[i].year + "/" + diaryList[i].month + "/" + diaryList[i].date;

            diaryItem.appendChild(delItem);
            diaryItem.appendChild(img);
            diaryItem.appendChild(heading2);
            diaryItem.appendChild(diaryDesc);
            diaryItem.appendChild(diaryDate);
            diaryItems.appendChild(diaryItem);
            
            downIcon.style.visibility = "";
        } 
    } else {
        downIcon.style.visibility = "hidden";
    }
}
