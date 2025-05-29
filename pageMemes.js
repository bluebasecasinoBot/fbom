import { __c, __p, __sC, __SYD, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.pageMemes = () =>{
    return __c(
        "div",
        {
            style:"background:transparent;height:fit-content;width:100%;min-height:fit-content;display:flex;justify-content:center;" + __sC['pages'](),
            id:"pageMemes"
        },
        [
            __SYD.pageMemesSubHeader()
        ]
    )
}

__SYD.pageMemesSubHeader = () =>{
    return __c(
        "div",
        {
            style:`height:${__p(["pageMemesSubHeader" , "mobilePadState"],false) ? "100vw" : "50vw"};width:100%;max-width:unset;display:flex;flex-direction:column;align-items:center;gap:20px;padding:0 ${__p(["pageMemesSubHeader" , "mobilePadState"],false) ? "0px" : "0px"};`
        },
        [
            __SYD.pageMemes_text2(),
        ],
        {
            createState:{
                stateName:"pageMemesSubHeader",
                state:{
                    mobilePadState:false,
                    caTextSize:"16px",
                    __flex_child:'row',
                    resize:false
                    // breakVal:false
                }
            },
            mediaQuery:{
                query:[
                    {size:"<500px" , prop:{mobilePadState:true , caTextSize:"13px"}},
                    {size:"<700px" , prop:{__flex_child:'column' , resize:true}}
                    // {size:"<1000px" , prop:{breakVal:true}}
                ],
                defState:{mobilePadState:false , caTextSize:"16px" , __flex_child:'row' , resize:false}//breakVal:false
            }
        }
    )
}


__SYD.pageMemes_text2 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text2.get() + "text-shadow:1px 1px 0px #000000;letter-spacing:1px;"
        },
        [
            __c(
                "p",
                {},["FBOM's Memes"]
            )
        ]
    )
}

