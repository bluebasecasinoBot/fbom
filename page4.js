import { __c, __p, __sC, __SYD, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.p4 = () =>{
    return __c(
        "div",
        {
            style:"background:#1597cb;height:fit-content;width:100%;min-height:fit-content;display:flex;justify-content:center;" + __sC['pages'](),
            id:"p4"
        },
        [
            __SYD.p4SubHeader()
        ]
    )
}

__SYD.p4SubHeader = () =>{
    return __c(
        "div",
        {
            style:`height:100%;width:100%;max-width:1300px;display:flex;flex-direction:column;align-items:center;gap:20px;padding:0 ${__p(["p4SubHeader" , "mobilePadState"],false) ? "10px" : "60px"};`
        },
        [
            // __SYD.p4_text1(),
            __SYD.p4_text2(),
            __SYD.p4_text3(),
            __SYD.p4_tabs()
        ],
        {
            createState:{
                stateName:"p4SubHeader",
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


__SYD.p4_text1 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text1.get() + "color:#b9bcc5;"
        },
        [
            __c(
                "p",
                {},["get $Alita"]
            )
        ]
    )
}


__SYD.p4_text2 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text2.get() + "letter-spacing:1px;text-shadow:1px 1px 0px #000000;"
        },
        [
            __c(
                "p",
                {},["FBOM's Roadmap"]
            )
        ]
    )
}


__SYD.p4_text3 = () =>{
    return __c(
        "div",
        {},
        [
            __c("p" , {style:`${SYD_VAR.pag1SubText.get() + "color:#fff;"} text-align:center;`},[" "])
        ]
    )
}

__SYD.p4_tabs = () =>{
    return __c(
        "div",
        {
            style:"display:flex;row-gap:10px;column-gap:50px;height:fit-content;width:100%;justify-content:center;flex-wrap:wrap;"
        },
        [
            __SYD.p4_tab({title:"Chapter 1: The Summoning" , src:"uniswap" , contents:["Stealth launch on Ethereum" , "DEX listing & liquidity lock" , "Meme storm on X & TikTok" , "Community Telegram opens the portal"]}),
            __SYD.p4_tab({title:"Chapter 2: The Lore Grows" , src:"bybit" , contents:["Viral meme contests & Pepe drops" , "First NFT page mint: “Furie’s Forgotten Files”" , "Listings on meme-friendly platforms (DexTools, Gecko, etc.)" , "Merge memes + madness: TikTok raids & X threads"]}),
            __SYD.p4_tab({title:"Chapter 3: The Meme Manuscript" , src:"okx" , contents:["Collaborative NFT zine from the community" , "Staking or page-forging for special editions" , "Strategic partnerships (memecoins, art DAOs, NFT communities)" , "Meme-fueled metaverse experiences"]}),
            __SYD.p4_tab({title:"Chapter 4: The Final Chapter (For Now)" , src:"binance" , contents:["Surprise burn event: “The Meme Purge”" , "Legendary meme anthology NFT airdrop" , "Ethereum mainstage shoutouts" , "$FBOM inscribed in the Meme Hall of Flame 🔥"]}),
        ]
    )
}

__SYD.p4_tab = ({title , src , contents = []}) =>{
    return __c(
        "div",
        {
            style:`height:fit-content;min-height:250px;width:${__p(['p4SubHeader' , 'resize'], false) ? "100%" : "100%"};padding:25px 30px;border-radius:10px;display:flex;gap:16px;cursor:pointer;background: #fff;flex-direction:column;gap:20px;border:2px solid #0B0A1D;`,
            class:"p4_tab"
        },
        [
            // __c(
            //     "img",
            //     {
            //         style:"height:50px;width:50px;",
            //         src:`./assets/${src}.png`
            //     }
            // ),
            __c(
                "p",
                {
                    style:SYD_VAR.page3Text4.get() + "color:#f1c907;text-shadow:1px 1px 0px #000000;letter-spacing:1px;"
                },
                [
                    `${title}`
                ]
            ),
            __c(
                "ul",
                {
                    style:"display:flex;flex-direction:column;row-gap:8px;padding:0px 25px;"
                },
                [
                    ...(() =>{
                        const elArray = [];
                        contents.forEach(val =>{
                            elArray.push(
                                __c("li",{style:"font-size:14px;font-weight:900;"},[val])
                            )
                        })
                        return elArray
                    })()
                ]
            )
        ]
    )
}