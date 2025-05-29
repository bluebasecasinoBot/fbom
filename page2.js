import { __c, __p, __sC, __SYD, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.p2 = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;min-height:fit-content;display:flex;justify-content:center;background: #1597cb;" + __sC['pages'](),
            id:"p2"
        },
        [
            __SYD.p2SubHeader()
        ]
    )
}

__SYD.p2SubHeader = () =>{
    return __c(
        "div",
        {
            style:`height:100%;width:100%;max-width:1300px;display:flex;align-items:center;gap:20px;padding:0 ${__p(["p2SubHeader" , "mobilePadState"],false) ? "10px" : "60px"};flex-direction:${__p(["p2SubHeader" , "breakVal"],false) ? "column" : "row"}`
        },
        [
            __c(
                "div",
                {
                    style:`height:100vw;max-height:calc(100vh - 150px);width:${__p(["p2SubHeader" , "breakVal"],false) ? "100%" : "50%"};display:flex;flex-direction:column;gap:20px;background-image:url("./assets/about.png")`
                },[],{genericStyle:["bg_fit"]}
            ),
            __c(
                "div",
                {
                    style:`height:fit-content;width:${__p(["p2SubHeader" , "breakVal"],false) ? "100%" : "50%"};display:flex;justify-content:center;`
                },
                [
                    __SYD.p2_tab()
                ]
            ),
        ],
        {
            createState:{
                stateName:"p2SubHeader",
                state:{
                    mobilePadState:false,
                    caTextSize:"16px",
                    breakVal:false
                }
            },
            mediaQuery:{
                query:[
                    {size:"<500px" , prop:{mobilePadState:true , caTextSize:"13px"}},
                    {size:"<1000px" , prop:{breakVal:true}}
                ],
                defState:{mobilePadState:false , caTextSize:"16px" , breakVal:false}
            }
        }
    )
}

__SYD.p2_tab = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;padding:60px 20px;display:flex;flex-direction:column;gap:30px;border-radius:30px;background:#fff;",
            class:"p2_tab"
        },
        [
            // __SYD.p2_text1(),
            __SYD.p2_text2(),
            __c(
                "div",
                {
                    style:"height:fit-content;width:100%;display:flex;gap:30px;padding:10px 0px;flex-direction:column;"
                },
                [   
                    __SYD.p2_text3(),
                    __SYD.p2_text4(),
                ]
            ),
            __SYD.p1_CA_section()
            // __SYD.p2_button()

        ]
    )
}

__SYD.p2_text1 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text1.get()
        },
        [
            __c(
                "p",
                {},["read more about Alita"]
            )
        ]
    )
}


__SYD.p2_text2 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text2.get() + "color:#000000;"
        },
        [
            __c(
                "p",
                {},["about FBOM"]
            )
        ]
    )
}

__SYD.p2_text3 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text3.get() + "font-weight:900;color:#000000;font-size:14px;"
        },
        [
            __c(
                "p",
                {},["Furie’s Book of Memes ($FBOM) is a wild, on-chain tribute to internet culture—combining the raw chaos of meme coins with the legendary artistry of Matt Furie. Inspired by characters like Pepe, Brett, and Boochie, $FBOM turns every holder into a co-author of the ultimate digital meme anthology. Built on Ethereum, it's secure, eternal, and ready to explode across the memeverse."]
            )
        ]
    )
}

__SYD.p2_text4 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text3.get() + "font-weight:900;color:#000000;font-size:14px;"
        },
        [
            __c(
                "p",
                {},["This is more than a token—it's a cultural movement. $FBOM thrives on viral community energy, TikTok raids, X threads, and collective creativity. Whether you’re a degen, artist, or meme historian, this is your chance to etch your humor into Ethereum’s ledger and help write the internet’s greatest meme book."]
            )
        ]
    )
}

__SYD.p2_button = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.buttonStyle1.get(),
            class:"clickButton"
        },
        [
            __c("p" , {style:"width:fit-content"},["read more"])
        ]
    )
}