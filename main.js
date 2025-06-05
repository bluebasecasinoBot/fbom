import { __c, __m, __SYD, __v, manage_mediaQuery, SYD_VAR } from "./sydneyDom_v3.js"
import bookify from "./book_lib/bookify.js"

import "./nav.js"
import "./page1.js"
import "./page2.js"
import "./page3.js"
import "./page4.js"
import "./pageMemes.js"
import "./page5.js"
import "./page6.js"
import "./page7.js"
import "./footer.js"
import "./variable.js"

__SYD.container = () =>{
    return __c(
        "div",
        {
            style:`min-height:100vh;width:100vw;background:${SYD_VAR.mainClr.get()};font-family:font2;`
        },
        [
            __SYD.navBar(),
            __SYD.p1(),
            __SYD.p2(),
            __SYD.p3(),
            __SYD.p4(),
            __SYD.pageMemes(),
            // __SYD.p5(),
            // __SYD.p6(),
            // __SYD.p7(),
            __SYD.footer_main_parent()
        ],
        {
            createState:{
                stateName:"container"
            }
        }
    )
}

__m(__SYD.container() , ()=>{
    manage_mediaQuery(window.innerWidth);

    const newBook = new bookify();
    newBook.pageSettings.style = newBook.createStyleArray('fontWeight:900;fontSize:13px;');
    newBook.pageSettings.styleP = newBook.createStyleArray('borderTopRightRadius:0;borderBottomRightRadius:0;background:#000;overflow:hidden;display:flex;align-items:center;justify-content:center;')
    newBook.pages = 21;
    newBook.parent = __v["pageMemesSubHeader"];
    newBook.bookSettings.maxSizing = false
    newBook.pageSettings.coverPageImage = "/cover.png"
    newBook.run()
    const book_pages = newBook.getPage_elements;

    const memes = ["meme1.jpg" , "meme2.jpg" , "meme2.jpg_large" , "meme4.JPG" , "meme5.png" , "meme6.jpg" , "meme8.jpg" , "meme9.jpg" , "meme10.jpg" , "meme11.jpg" , "meme12.jpg" , "meme13.gif" , "meme14.jpg" , "meme15.jpg" , "meme16.png" , "meme17.jpg" , "meme18.jpg" , "meme19.jpg" , "meme7.gif"]
    
    book_pages.forEach((page , id) =>{
        book_pages[id].style.borderTopRightRadius = "25px";

        book_pages[id].style.borderBottomRightRadius = "25px";

        if(id > 0 && id < book_pages.length-1)
        {
            console.log(id)
            const div_child = document.createElement("div");
            div_child.style = `position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);height:90%;width:90%;pointer-events:none;backface-visibility:hidden;background-image:url(./assets/${memes[id-1]});background-repeat:no-repeat;background-size:cover;background-position:center;`
            page.appendChild(div_child);

            // page.style.height = `${Number(getComputedStyle(page).height.split("").splice(getComputedStyle(page).height.length-3 , 2).join("")) - 10}px`;
        }
        else if(id === book_pages.length-1 || id === 0)
        {
            book_pages[id].style.backgroundImage = 'url(./book_lib/imgs/cover.png)';
            book_pages[id].style.backgroundPosition = "center";
            book_pages[id].style.backgroundSize = "contain";
            book_pages[id].style.backgroundRepeat = "no-repeat";
            book_pages[id].style.backgroundColor = "rgb(15, 70, 146)";

            book_pages[id].children[0].style.background = "unset";

            book_pages[id].style.borderTop = "6px groove #f1c907";
            book_pages[id].style.borderRight = "6px groove #f1c907";
            book_pages[id].style.borderBottom = "6px groove #f1c907";

            book_pages[id].style.borderLeft = "10px groove #1597cb";
        }
        
    })
});