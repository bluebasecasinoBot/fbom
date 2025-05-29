import { __c, __p, __sC, __SYD, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.p3 = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;min-height:fit-content;display:flex;justify-content:center;background:#1597cb;" + __sC['pages'](),
            id:"p3"
        },
        [
            __SYD.p3SubHeader()
        ]
    )
}

__SYD.p3SubHeader = () =>{
    return __c(
        "div",
        {
            style:`height:100%;width:100%;max-width:1300px;display:flex;flex-direction:column;align-items:center;gap:20px;padding:0 ${__p(["p3SubHeader" , "mobilePadState"],false) ? "10px" : "60px"};`
        },
        [
            // __SYD.p3_text1(),
            __SYD.p3_text2(),
            __SYD.p3_text3(),
            __SYD.p3_tabs()
        ],
        {
            createState:{
                stateName:"p3SubHeader",
                state:{
                    mobilePadState:false,
                    caTextSize:"16px",
                    __flex_child:'row'
                    // breakVal:false
                }
            },
            mediaQuery:{
                query:[
                    {size:"<500px" , prop:{mobilePadState:true , caTextSize:"13px"}},
                    {size:"<700px" , prop:{__flex_child:'column'}}
                    // {size:"<1000px" , prop:{breakVal:true}}
                ],
                defState:{mobilePadState:false , caTextSize:"16px" , __flex_child:'row'}//breakVal:false
            }
        }
    )
}


__SYD.p3_text1 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text1.get()
        },
        [
            __c(
                "p",
                {},["Buy $Alita"]
            )
        ]
    )
}


__SYD.p3_text2 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text2.get() + "color:#ffffff;letter-spacing:1px;text-shadow:1px 1px 0px #000000;"
        },
        [
            __c(
                "p",
                {},["FBOM's Tokenomics"]
            )
        ]
    )
}


__SYD.p3_text3 = () =>{
    return __c(
        "div",
        {},
        [
            __c("p" , {style:`${SYD_VAR.pag1SubText.get()} text-align:center;`},[" "])
        ]
    )
}

__SYD.p3_text4 = (textContent) =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page3Text4.get() + "text-align:center;color:#000000;letter-spacing:1px;"
        },
        [
            __c(
                "p",
                {},[`${textContent}`]
            )
        ]
    )
}


__SYD.p3_text5 = (textContent) =>{
    return __c(
        "div",
        {
            style:SYD_VAR.pag1SubText.get() + "text-align:center;color:#000000;font-size:14px;"
        },
        [
            __c(
                "p",
                {},[`${textContent}`]
            )
        ]
    )
}

__SYD.p3_tabs = () =>{
    return  __c(
        "div",
        {
            style:"display:flex;gap:50px;height:fit-content;width:100%;justify-content:center;flex-wrap:wrap;"
        },
        [
            __SYD.p3_tab(
                {content:`100% fair launch. No presale. No dev wallets. Just pure meme power in the hands of the people.` ,title:`📦 Total Supply: 10,000,000 $FBOM` , img:"1"}
            ),
            __SYD.p3_tab({
                content:`No roadblocks, just full send: 10m supply, all to the community. Liquidity locked, ownership renounced. HODL or perish.`,title:`🔥 Tokenomics of Chaos` , img:"2"
            }),
            __SYD.p3_tab({
                content:`$FBOM is community ink. 100% supply flows through traders, artists, and degens. Every wallet a pen, every trade a page.`,title:`🖌 Meme-Driven Distribution` , img:"3"
            }),
            // __SYD.p3_tab({
            //     content:`Fixed supply, zero fluff. $FBOM is etched on-chain with no take-backs. Meme responsibly.`,title:`📚 Printed on Ethereum, Powered by Memes` , img:"3"
            // }),
        ]
    )
}


__SYD.p3_tab = ({title = '' , content = '' , img = "basePlus2"}) =>{
    return __c(
        'div',
        {
            style:`width:calc(100% - 20px);max-width:${__p(["p3SubHeader" , "__flex_child"],"row") === "row" ? "380px" : "500px"};height:fit-content;border-radius:10px;padding:30px 0;`,
            class:"buy_tabs"
        },
        [
            __c(
                'div',
                {
                    style:`height:fit-content;min-height:250px;padding:10px 20px;width:100%;background:unset;display:flex;align-items:center;column-gap:20px;row-gap:20px;flex-direction:column;`
                },
                [
                    __c(
                        'div',
                        {
                            style:'width:100%;display:flex;flex-direction:column;gap:10px;'
                        },
                        [
                            __SYD.p3_text4(title),
                            __SYD.p3_text5(content)
                        ]
                    ),
                    __c(
                        "div",
                        {
                            style:"height:fit-content;width:fit-content;display:flex;justify-content:center;align-items:center;",
                            class:"p3_tab"
                        },
                        [
                            __c(
                                "img",
                                {
                                    style:"width:200px;height:200px;",
                                    src:`./assets/${img}.png`
                                }
                            ),
                        ]
                    )
                ]
            )
        ]
    )
}
