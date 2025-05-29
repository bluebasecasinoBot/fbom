import { __c, __p, __sC, __SYD, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.p5 = () =>{
    return __c(
        "div",
        {
            style:`height:fit-content;width:100%;min-height:fit-content;display:flex;justify-content:center;background-image:url("./assets/road.png");background-attachment:fixed;` + __sC['pages'](),
            id:"p5"
        },
        [
            __SYD.p5SubHeader()
        ],{genericStyle:["bg_cover"]}
    )
}

__SYD.p5SubHeader = () =>{
    return __c(
        "div",
        {
            style:`height:100%;width:100%;max-width:1300px;display:flex;flex-direction:column;align-items:center;gap:20px;padding:0 ${__p(["p5SubHeader" , "mobilePadState"],false) ? "10px" : "60px"};`
        },
        [
            __SYD.p5_text1(),
            __SYD.p5_text2(),
            __SYD.p5_text3(),
            __SYD.p5_roadMap()
        ],
        {
            createState:{
                stateName:"p5SubHeader",
                state:{
                    mobilePadState:false,
                    caTextSize:"16px",
                    __flex_child:'row',
                    resize:false,
                    breakVal:false
                }
            },
            mediaQuery:{
                query:[
                    {size:"<800px" , prop:{breakVal:true}},
                    {size:"<500px" , prop:{mobilePadState:true , caTextSize:"13px"}},
                    {size:"<700px" , prop:{__flex_child:'column' , resize:true}}

                    // {size:"<1000px" , prop:{breakVal:true}}
                ],
                defState:{mobilePadState:false , caTextSize:"16px" , __flex_child:'row' , resize:false , breakVal:false}//breakVal:false
            }
        }
    )
}


__SYD.p5_text1 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text1.get()
        },
        [
            __c(
                "p",
                {},["token roadmap"]
            )
        ]
    )
}


__SYD.p5_text2 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text2.get()
        },
        [
            __c(
                "p",
                {},["our token roadmap"]
            )
        ]
    )
}


__SYD.p5_text3 = () =>{
    return __c(
        "div",
        {},
        [
            __c("p" , {style:`${SYD_VAR.pag1SubText.get()} text-align:center;`},["The Journey of a Cyborg Begins Alita AI’s mission unfolds in epic phases—each upgrade pushing us closer to total decentralization, innovation, and community power."])
        ]
    )
}

__SYD.p5_text4 = (textContent , align) =>{
    return __c(
        "div",
        {},
        [
            __c("p" , {style:`${SYD_VAR.page2Text1.get()} font-family:font1;color:#fff; text-align:${align === "right" ? "left" : "right"};`},[textContent])
        ]
    )
}

__SYD.p5_text5 = (textContent , align) =>{
    return __c(
        "div",
        {},
        [
            __c("p" , {style:`${SYD_VAR.pag1SubText.get()} color:#fff; text-align:${align === "right" ? "left" : "right"};`},[textContent])
        ]
    )
}

__SYD.p5_roadMap = () =>{
    return __c(
        "div",
        {
            style:`height:fit-content;padding:20px 0px;width:100%;display:flex;align-items:${__p(["p5SubHeader" , "breakVal"],false) ? "flex-start" : "center"};flex-direction:column;row-gap:20px;position:relative;padding:0 20px;`
        },
        [
            __SYD.p5_tab_center(),
            __SYD.p5_tab({title:"Awakening" , text:"The spark of rebellion is lit. In this phase, we officially launch the $ALITA meme coin on Solana, setting the foundation for our cyborg-powered movement. We’ll mobilize the community, spread the vision across the chain, and release our first version of the no-code AI customization tools—allowing users to craft their own digital companions, infused with personality and purpose." , position:"left" , tab:1}),
            __SYD.p5_tab({title:"Rebellion" , text:"Now armed with tools and tokens, the uprising begins. We deploy our decentralized Telegram casino bot, offering fast-paced degen games powered by $ALITA. This phase also introduces seamless cross-chain token launch features, enabling users to mint and deploy tokens on Solana and beyond—no devs required. Community-driven events, contests, and bounties activate our growing army." , position:"right" , tab:2}),
            __SYD.p5_tab({title:"Evolution" , text:"The network matures, and so do our weapons. We enhance the AI builder with more powerful training algorithms and add deeper personality tuning. Meanwhile, our casino goes next-level with P2E (Play-to-Earn) tournaments where you can stake $ALITA and win big. As our reach grows, we begin integrating with partner chains and ecosystems, spreading the Alita doctrine far and wide." , position:"left" , tab:3}),
            __SYD.p5_tab({title:"Ascension" , text:"Alita AI becomes more than a tool—it becomes a world. We construct the Alita Metaverse Hub: a digital city where your AI agents live, interact, and evolve. This is your personal AI ecosystem, owned and controlled by you. Governance shifts to the people through a fully functional DAO where $ALITA holders decide the future—proving once and for all that the rebellion cannot be stopped." , position:"right" , tab:4}),
        ]
    )
}

__SYD.p5_tab = ({title , text , position , tab}) =>{
    let tx = position === "left" ? "calc(-50% - 10px)" : "calc(50% + 10px)"
    return __c(
        "div",
        {
            style:`height:fit-content;width:${__p(["p5SubHeader" , "breakVal"],false) ? "100%" : "50%"};max-width:500px;padding:20px 0;${__p(["p5SubHeader" , "breakVal"],false) ? "" : `transform:translateX(${tx})`};border-radius:15px;position:relative;display:flex;gap:20px;flex-direction:column;-`
        },
        [
            __c(
                "div",
                {
                    style:`${__p(["p5SubHeader" , "breakVal"],false) ? "" : `position:absolute;top:50%;${position === "left" ? "right" : "left"}:0;transform:translateY(-50%) translateX(${position === "left" ? "calc(100% + 100px)" : "calc(-100% - 100px)"})`};height:130px;width:250px;background:transparent;display:flex;align-items:center;justify-content:center;border:30px solid transparent;border-image:url("./assets/border.png") 30 round;`
                },
                [
                    __c(
                        "p",
                        {
                            style:"height:calc(100%); width:calc(100%); background:#fff;text-align:center;display:flex;justify-content:center;align-items:center;" + SYD_VAR.page2Text2.get() + "color:#16143a;"
                        },
                        [
                            `#PHASE ${tab}`
                        ]
                    ),
                    __c(
                        "span",
                        {
                            style:`display:${__p(["p5SubHeader" , "breakVal"],false) ? "none" : "block"};position:absolute;top:50%;${position}:-30px;transform:translateY(-50%) translateX(${position === "left" ? "-100%" : "100%"});height:5px;width:80px;background:#000;`
                        }
                    )
                ]
            ),
            __c(
                "div",
                {
                    style:`height:100%;width:100%;background:#0B0A1D;padding:25px 15px;border-radius:inherit;display:flex;flex-direction:column;row-gap:20px;`
                },
                [
                    __SYD.p5_text4(title , __p(["p5SubHeader" , "breakVal"],false) ? "right" : position),
                    __SYD.p5_text5(text , __p(["p5SubHeader" , "breakVal"],false) ? "right" : position)
                ]
            ),
            __c(
                "div",
                {
                    style:`height:15px;width:15px;border-radius:50%;position:absolute;${__p(["p5SubHeader" , "breakVal"],false) ? "top:0;left:-20px;transform:translateY(50%) translateX(-50%);" : `top:50%;transform:translateY(-50%) translateX(${position === "left" ? "calc(100% + 0px)" : "calc(-100% - 0px)"});${position === "left" ? "right" : "left"}:0;`}`,
                    class:"p5_tab_knob"
                }
            )
        ]
    )
}

__SYD.p5_tab_center = () =>{
    return __c(
        "div",
        {
            style:`height:calc(100% - 30px);width:5px;background:#0B0A1D;position:absolute;${__p(["p5SubHeader" , "breakVal"],false) ? "left:0%" : "left:50%;transform:translateX(-50%)"};top:10px;`
        }
    )
}