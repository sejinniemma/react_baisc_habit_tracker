# Emma's Portfolio Website 🎟 <br>

# 🤹🏻 Introduce 🤹🏻‍♀️
<br>

- My unique website that shows who I am and my ability as a junior front-end engineer 
<br>

https://user-images.githubusercontent.com/80943394/133916876-dfd19ef7-c325-4815-a305-c06399dfc9c2.mov

### responsive website 🥰

https://user-images.githubusercontent.com/80943394/133980158-72c5630d-6203-416c-a245-df1ce59bc95e.mov

# 🔸 Main function 🔸

## 1. ScrollIntoView()
### Function 
- When click 'navbar menu item' , move to certain section which has same 'id'
<br>

<img width="798" alt="스크린샷 2021-09-19 오후 1 58 26" src="https://user-images.githubusercontent.com/80943394/133917067-39a10276-f370-49be-82b7-7606428d4d75.png">

- add data-link="id" info in each of navbar menu items which is correspond 'id' of sections in html
- then make function scrollIntoview()
### bug💥
- when click contactMe & arrow-up button, I found out navbar menu items wasn't able to be active.
- because I added 'function selectNavItem' only when navbar menu item click.
- so I added function 'selectNavItem()' into function scrollIntoview() so that it works at once when scrollIntoview event.
- function selecNavItem : when move to certain section,correspond to certain navbar menu item has a white border 

<img width="569" alt="스크린샷 2021-09-19 오후 8 11 21" src="https://user-images.githubusercontent.com/80943394/133925402-5f4482af-b172-490a-a36b-d95a4fbbaae5.png">

- finally when click navbarmenu,homecontact,arrow up button, 'navbar menu item' was able to be active correctly. 


<br>

## 2.Intersection Observer 🌈⭐️
### Function
- when scrolling window, navbar memu items to be active by noticing some inersection change using 'Intersection observer API'
- For more great performence I used Intersection observer API
<br>

### ex) Bad performence without intersection observer❌ 💩

1. getboundingClientRect() generate layout even whenver scroll events (too bad)
2. we should avoid heavy works in callback function because we can't do anything until callback is finished.
3. scroll event generate so frequently.Instead we make layout in the for loop whenever scroll events,I prefer using Intersection Observer API👓

## Let's use Intersection Observer 🧬
### 1.sectionIds[ ] : make new 'Id' array 
- map : make sections and navbar menu items using sectionIds
- so we can control section and navbar menu more easily

<img width="930" alt="스크린샷 2021-09-19 오후 8 38 50" src="https://user-images.githubusercontent.com/80943394/133926369-093c7645-ada5-4a40-9a82-0c7dcdd3b9e4.png">

### 2.make Intersection Observer
- when intersection observer observe sections, I can call 'callback' which is to active navbar menu items
- those are possible using entry information.
<br>

<img width="803" alt="스크린샷 2021-09-19 오후 8 53 51" src="https://user-images.githubusercontent.com/80943394/133927238-0d32cee4-8620-4aa0-98d8-19fb14e5c88f.png">

- since we made sections and navbar menu through sectionIds,
- so we can find current element through 'entry.target.id' of sectionIds 
- they have same index.(map API)


### selectNavItem
- make current navbar menu item  to be active and remove it.
- selectNavItem : so we should remember previous one by making new variable.

### bug💥
- As soon as the page loaded 'testimonial' navbar menu item was selected.
- when I debugged, intersectionRatio was zero.
- It means some sections are paged out as soon as page loaded.
- so I gave condition (intersectionRatio > 0)

### 3. When scrolling, excute intersection observer

<img width="965" alt="스크린샷 2021-09-19 오후 9 36 05" src="https://user-images.githubusercontent.com/80943394/133927804-771d419a-93d6-4f84-a7f2-423251b78231.png">

### bug💥
### 1).wheel event
- scroll event is working whenever scrolling.
- It means when we click navbar menu,there is also 'scrollIntoview events',so scroll event occur consistantly.
- To avoid this situation, I used 'wheel' event instead of using 'scroll'.
- 'wheel' is only working when person make scroll with mouse.

### 2).when window size is different
- It can happen first section (#home) and the last section(#contact) dosen't come in or out on document.It depends on window size.
- To prevent this,I gave some conditions.

## 3.Filter project
### Function
- when click category button, they are filtered.
- make data information in html.

<img width="965" alt="스크린샷 2021-09-20 오후 4 14 43" src="https://user-images.githubusercontent.com/80943394/133968989-aad9215f-0033-4b4b-a6d3-7a8f94b8a294.png">

### bug💥
- when click 'category__count' projects are not filtered because category count has no data information.
- when debug category__count, It is undifined.
- we can solve this problem using their parentNode data information.

<img width="1206" alt="스크린샷 2021-09-20 오후 4 54 42" src="https://user-images.githubusercontent.com/80943394/133971619-01541216-c7cf-48f3-a1f4-b91053758bd4.png">

<img width="1206" alt="스크린샷 2021-09-20 오후 4 45 20" src="https://user-images.githubusercontent.com/80943394/133971097-f5038a2c-45ca-4095-ba16-4edbd7b463fc.png">

