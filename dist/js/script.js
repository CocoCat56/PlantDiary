let createItem = document.querySelector("#createItem");
let diaryShow = document.querySelector("section.diaryShow");
let diaryItems = document.createElement("div");
diaryItems.classList.add("diaryItems");
diaryShow.appendChild(diaryItems);
let downIcon = document.querySelector(".downIcon");
var diaryList = [];
createItem.addEventListener("click", e => {
    e.preventDefault();
    //取得使用者輸入的資料
    let items = document.querySelector(".items");
    let title = items.children[0].children[1];
    let addDate = items.children[1].children[1];
    let year = addDate.value.substring(0, 4);
    let month = addDate.value.substring(5, 7);
    let date = addDate.value.substring(8);
    let picture = items.children[2].children[1];
    let desc = items.children[3].children[1];
    //未輸入的提示訊息
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
        //從陣列 ( diaryList )中刪除
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
    //h2標題
    let heading2 = document.createElement("h2");
    heading2.innerText = title.value;
    //日期
    let diaryDate = document.createElement("p");
    diaryDate.classList.add("diaryDate");
    diaryDate.innerHTML ="<i class='far fa-calendar-check'></i>" +  year + "/" + month + "/" + date;
    //照片
    let image = document.createElement("img");
    image.src = picture.value;
    //描述
    let diaryDesc = document.createElement("p");
    diaryDesc.classList.add("diaryDesc");
    diaryDesc.innerText = desc.value;

    diaryItem.appendChild(delItem);
    diaryItem.appendChild(image);
    diaryItem.appendChild(heading2);
    diaryItem.appendChild(diaryDesc);
    diaryItem.appendChild(diaryDate);

    //建立 diary object，並加到陣列
    let diary = {
        title: title.value,
        year: year,
        month: month,
        date: date,
        image: picture.value,
        desc: desc.value
    };
    diaryList.push(diary);
    //是否顯示 icon
    if(diaryList.length !== 0) {
        downIcon.style.visibility = "";
    } else {
        downIcon.style.visibility = "hidden";
    }

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
            //照片
            let image = document.createElement("img");
            image.src = diaryList[i].image;
            //h2
            let heading2 = document.createElement("h2");
            heading2.innerText = diaryList[i].title;
            
            let diaryDesc = document.createElement("p");
            diaryDesc.classList.add("diaryDesc");
            diaryDesc.innerText = diaryList[i].desc;
            
            let diaryDate = document.createElement("p");
            diaryDate.classList.add("diaryDate");
            diaryDate.innerHTML = "<i class='far fa-calendar-check'></i>" + diaryList[i].year + "/" + diaryList[i].month + "/" + diaryList[i].date;

            diaryItem.appendChild(delItem);
            diaryItem.appendChild(image);
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
