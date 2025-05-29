import { __c, __g, __p, __sC, __SYD, __u, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.p7 = () =>{
    return __c(
        "div",
        {
            style:`height:fit-content;width:100%;min-height:fit-content;display:flex;justify-content:center;background-image:url("./assets/faq.jpg");background-attachment:fixed;` + __sC['pages']() + "paddingBottom:unset;",
            id:"p7"
        },
        [
            __SYD.p7SubHeader()
        ],{genericStyle:["bg_cover"]}
    )
}

__SYD.p7SubHeader = () =>{
    return __c(
        "div",
        {
            style:`height:100%;width:100%;max-width:1300px;display:flex;flex-direction:column;align-items:center;gap:20px;padding:0 ${__p(["p7SubHeader" , "mobilePadState"],false) ? "10px" : "60px"};`
        },
        [
            __SYD.p7_text1(),
            __SYD.p7_text2(),
            __SYD.p7_text3(),
            __c(
                "div",
                {
                    style:`height:100%;width:100%;max-width:1300px;display:flex;align-items:center;gap:20px;padding:0 ${__p(["p7SubHeader" , "mobilePadState"],false) ? "10px" : "60px"};flex-direction:${__p(["p7SubHeader" , "breakVal"],false) ? "column" : "row"}`
                },
                [
                    __c(
                        "div",
                        {
                            style:`height:100vw;max-height:calc(100vh - 150px);width:${__p(["p7SubHeader" , "breakVal"],false) ? "100%" : "50%"};display:flex;flex-direction:column;gap:20px;background-image:url("./assets/faq.png")`
                        },[],{genericStyle:["bg_fit"]}
                    ),
                    __c(
                        "div",
                        {
                            style:`height:fit-content;width:${__p(["p7SubHeader" , "breakVal"],false) ? "100%" : "50%"};display:flex;justify-content:center;`
                        },
                        [
                            __SYD.faqsQuestionaire()
                        ]
                    ),
                ]
            )
        ],
        {
            createState:{
                stateName:"p7SubHeader",
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
                    {size:"<1000px" , prop:{breakVal:true}},
                    {size:"<500px" , prop:{mobilePadState:true , caTextSize:"13px"}},
                    {size:"<700px" , prop:{__flex_child:'column' , resize:true}},
                ],
                defState:{mobilePadState:false , caTextSize:"16px" , __flex_child:'row' , resize:false , breakVal:false}
            }
        }
    )
}

__SYD.p7_text1 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text1.get()
        },
        [
            __c(
                "p",
                {},["frequently asked questions"]
            )
        ]
    )
}


__SYD.p7_text2 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text2.get() + "color:#16143a;"
        },
        [
            __c(
                "p",
                {},["frequently asked questions"]
            )
        ]
    )
}


__SYD.p7_text3 = () =>{
    return __c(
        "div",
        {},
        [
            __c("p" , {style:`${SYD_VAR.pag1SubText.get()} text-align:center;`},["New to Alita AI? You’re not alone—and that’s exactly the point. We built this platform to welcome everyone, from Solana natives to total crypto rookies. Whether you’re curious about our tech, the token, or just how to start building your own AI, this section breaks it all down. No jargon, no fluff—just real answers for real rebels."])
        ]
    )
}

__SYD.p7_text4 = (textContent) =>{
    return __c(
        "p",
        {},
        [
            __c("p" , {style:`${SYD_VAR.pag1SubText.get()} padding:10px 20px;`},[textContent])
        ]
    )
}

__SYD.faqsQuestionaire = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;max-width:700px;display:flex;flex-direction:column;row-gap:10px;padding-top:50px;"
        },
        [
            __SYD.questionTab({
                question:"What is Alita AI?",
                answer:"Alita AI is a meme coin and decentralized platform on Solana, inspired by Alita: Battle Angel. It empowers users to create custom AI models, launch tokens, and engage in degen-friendly casino games—all without code.",
                index:0
            }),
            __SYD.questionTab({
                question:"Is $ALITA just a meme coin?",
                answer:"Nope. While it carries the energy of a meme coin, $ALITA unlocks access to powerful tools like AI customization, token deployment, and casino gameplay. It's utility-packed and community-driven.",
                index:1
            }),
            __SYD.questionTab({
                question:"Why choose Solana?",
                answer:"Solana offers lightning-fast transaction speeds, near-zero fees, and a thriving ecosystem—perfect for building an immersive, scalable platform like Alita AI.",
                index:2
            }),
            __SYD.questionTab({
                question:"How do I use the casino bot?",
                answer:"Once launched, simply connect your wallet, choose a game (like poker or dice), and play. Winnings are sent instantly thanks to Solana’s high-speed infrastructure.",
                index:3
            }),
            __SYD.questionTab({
                question:"Is there a DAO or governance model?",
                answer:"Yes! Future phases will hand over control to the community via a DAO structure, where $ALITA holders can vote on upgrades, features, and platform decisions.",
                index:4
            })

        ],
        {
            createState:{
                stateName:"faqsQuestionaire",
                state:{
                    currentOpen:0,
                    height:"0px"
                }
            }
        }
    )
}

__SYD.questionTab = ({
    question = "hello world",
    answer = "answer to hello world",
    index = 0
} = {}) =>{
    return __c(
        "div",
        {
            style:"display:flex;flex-direction:column;width:100%;color:#000;font-size:18px;"
        },
        [
            __c(
                "div",
                {
                    style:"height:60px;width:100%;cursor:pointer;padding:10px 20px;align-items:center;display:flex;position:relative;font-weight:700;border:3px solid #0B0A1D;border-radius:15px;color:#fff;background:#16143a;"
                },
                [
                    question,
                    __c(
                        "i",
                        {
                            style:"position:absolute;top:50%;transform:translateY(-50%);right:15px;pointer-events:none;transition:transform linear .3s;",
                            class:"fa-solid fa-chevron-down"
                        }
                    )

                ],
                {
                    events:{
                        onclick:e =>{
                            const state = __g("faqsQuestionaire");
                            state.currentOpen = index;
                            state.height = getComputedStyle(e.target.parentElement.querySelector(".foldTab p")).height
                            __u("faqsQuestionaire" , {type:"a" , value:state});
                        }
                    }
                }
            ),
            __c(
                "div",
                {
                    style:`height:${__p(["faqsQuestionaire" , "currentOpen"],0) === index ? __p(["faqsQuestionaire" , "height"],"0px") : "0px"};width:100%;transition:all linear .3s;overflow:hidden;`,
                    class:"foldTab"
                },
                [
                    __SYD.p7_text4(answer)
                ]
            )
        ]
    )
}