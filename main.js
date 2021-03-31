//const { doc } = require("prettier")

const image = document.getElementById("image")
//header
const langSwitch =document.getElementById("lang")
//first-block
const block1 = document.getElementById("first-block")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")

//second-block
const abtCntnr = document.getElementById("about-container")
//third-block
const evntCntnr = document.getElementById("event-container")

const pushPics = (title, number) => {
    const array = []
    for(let i=1; i<=number; i++) {
        array.push(`./images/${title}${i}.jpg`)
    }
    return array
}

const catPics = pushPics("Tiara", 6)
console.dir(catPics)

let i = 1
const showImages = (image, pics) => {
    if(i < pics.length-1) {
        image.src = pics[i]
        i++
        //console.log(i)
    } else {
        image.src = pics[i]
        i = 0
    }  
}

setInterval(() => {
    showImages(image, catPics)
}, 3000)
//clearInterval(id)

const flowers = pushPics("flower", 5)
console.dir(flowers)

let j = 0
const proceed = (element, pics) => {
    if(pics[j+1]) {
        j++
        element.style.backgroundImage = `url(${pics[j]})`
    } else {
        j = 0
        element.style.backgroundImage = `url(${pics[j]})`
    }
}

const receed = (element, pics) => {
    if(pics[j-1]) {
        j--
        element.style.backgroundImage = `url(${pics[j]})`
    } else {
        j = pics.length -1
        element.style.backgroundImage = `url(${pics[j]})`
    }
}

btn1.onclick =() => {
    receed(block1, flowers)
}

btn2.onclick = () => {
    proceed(block1, flowers)
}

//.info-card (second-block)
const cards = [
    {
        text: "Part-time Job: Kumon",
        small:[
            "Have been working there for years now.",
            "Mainly in charge of kids' English learning.", 
            "Hope everyone becomes fond of English ! "
        ],
        img: "./images/kumon1.jpg"
    },
    {   text: "TUFS English Major",
        small: [
            "Have been widely commited to English-related studies.",
            "Particularly, belong to a seminer of American literature.",
            "Hope to use English for job, too !"
        ],
        img: "./images/college1.jpg"
    },
    {   text: "What I love: CATS !!",
        small: [
            "In love with cats since elementary school days, inspired by my friend.",
            "There are lots of cat lovers around me.",
            "Cats connect people and save the world !!"
        ],
        img: "./images/cat1.jpg"
    }
]

const cardsJa = [
    {
        text: "公文でバイト",
        small:[
            "かれこれもう3年になります。",
            "主に子供の英語学習を担当しています。", 
            "みんな英語が好きになってくれるといいな ! "
        ],
        img: "./images/kumon2.gif"
    },
    {   text: "東外大の英語専攻",
        small: [
            "英語関連の勉強を広く（浅く）してきました。",
            "特に米文学ゼミ所属です。",
            "英語を使える仕事がしたいです !"
        ],
        img: "./images/college2.jpg"
    },
    {   text: "ねこちゃん大好き !!",
        small: [
            "友達の影響で小学生の頃からずっと猫派です。",
            "周りにも猫好きがたくさんいます。",
            "猫ちゃんパワーが世界を救う !!"
        ],
        img: "./images/cat2.jpg"
    }
]


const createCard = (card) => {
    //aタグの中にinfoを入れる
    const a = document.createElement("a")
    a.classList.add("info-card")
    a.href = card.img
    a.setAttribute('data-lightbox', 'group')
    abtCntnr.append(a)
    
    /*const info = document.createElement("div")
    info.classList.add("info-card")
    a.append(info)*/

    const text = document.createElement("p")
    text.classList.add("info-text")
    text.textContent = card.text
    a.append(text)
    
    for(let i=0; i<card.small.length; i++) {
        const small = document.createElement("p")
        small.classList.add("font-small")
        small.textContent = card.small[i]
        a.append(small)
    }
    
}

//初期表示
for(const card of cards) {
    createCard(card)
}

//日本語版を作る

//second-block




//third-block
const events = [
    {
        img: "./images/tbm1.png",
        title: [
            "Dec. 2020/",
            "Marketing Seminer"
        ],
        texts: [
            "I participated in the 2nd term of a free marketing course by Think Twice, a job-agent company.",
            "It was about a month long, with three lecture days and a final team presentation.",
            "Due to a lack skill, I couldn't make a landing page.",
            "Through Geeksalon, I want to be able to create my own degital products."
        ],
        class: ["event"]
    },
    {
        img: "./images/rarejob1.jpg",
        title: [
            "Feb. 2021/",
            "Free Trial at RareJob"
        ],
        texts: [
            "I'm gonna take a free trial course at RareJob.",
            "We've been given the offer by TUFS,",
            "because some professors are involved in the program.",
            "I'm taking a job interview with AEON around March,",
            "so it'll be a good practice for that."
        ],
        class: ["event", "event1"]
    }
]

const eventsJa = [
    {
        img: "./images/tbm2.jpg",
        title: [
            "2020年 12月/",
            "マーケティング研修"
        ],
        texts: [
            "シンクトワイス（就活エージェント）主催の無料のマーケティング研修に参加しました。",
            "約１か月間のプログラムで、3回の講義と最終発表がありました。",
            "その時はスキル不足でランディングページを作れなかったので、",
            "Geeksalonで学んで、自分でWeb制作できるようになりたいです."
        ],
        class: ["event"]
    },
    {
        img: "./images/rarejob2.jpg",
        title: [
            "2021年 2月/",
            "レアジョブで無料体験"
        ],
        texts: [
            "レアジョブで無料の体験コースを受講します。",
            "外大の教授が関わっているらしく、",
            "学校から案内が来ました。",
            "3月頃にイーオンを受ける予定なので、",
            "良い練習になればと思います。"
        ],
        class: ["event", "event1"]
    }
]

const createEvent = (object) => {
    const event = document.createElement("div")
    for(let i=0; i< object.class.length; i++) {
        event.classList.add(object.class[i])
    }
    evntCntnr.append(event)

    const img = document.createElement("img")
    img.classList.add("event-image")
    img.src = object.img
    event.append(img)

    const info = document.createElement("div")
    info.classList.add("event-info")
    event.append(info)

    const title = document.createElement("div")
    title.classList.add("event-title")
    info.append(title)

    for(let i =0; i<object.title.length; i++) {
        const p = document.createElement("p")
        p.textContent = object.title[i]
        title.append(p)
    }

    for(let i=0; i<object.texts.length; i++) {
        const p = document.createElement("p")
        p.textContent = object.texts[i]
        info.append(p)
    }
}
//初期表示
for(const event of events) {
    createEvent(event)
}

//言語切り替えボタン
let judge = 0 //default:English
langSwitch.onclick = () => {
    if(judge === 0) {
        langSwitch.textContent = "English"
        judge = 1
        //second-block
        abtCntnr.textContent = ""
        for(const card of cardsJa) {
            createCard(card)
        }
        //third-block
        evntCntnr.textContent = ""
        for(const event of eventsJa) {
            createEvent(event)
        }
    } else {
        langSwitch.textContent = "Japanese"
        judge = 0
        //second-block
        abtCntnr.textContent = ""
        for(const card of cards) {
            createCard(card)
        }
        //third-block
        evntCntnr.textContent = ""
        for(const event of events) {
            createEvent(event)
        }    
        
    }
    
}
