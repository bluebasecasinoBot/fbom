import { __c, __p, __SYD, __v, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.p1 = () =>{
    return __c(
        "div",
        {
            style:`height:fit-content;width:100%;min-height:fit-content;padding-top:150px;padding-bottom:20px;display:flex;justify-content:center;background-attachment:fixed;`,
            id:"p1"
        },
        [
            __SYD.p1SubHeader()
        ],[],{genericStyle:["bg_cover"]}
    )
}

__SYD.p1SubHeader = () =>{
    return  __c(
        "div",
        {
            style:`height:100%;width:100%;max-width:1300px;display:flex;align-items:center;gap:10px;padding:0 ${__p(["p1SubHeader" , "mobilePadState"],false) ? "10px" : "60px"};flex-direction:${__p(["p1SubHeader" , "breakVal"],false) ? "column-reverse" : "column-reverse"}`
        },
        [
            __c(
                "div",
                {
                    style:`height:fit-content;width:${__p(["p1SubHeader" , "breakVal"],false) ? "100%" : "50%"};display:flex;flex-direction:column;gap:20px;align-items:center;`
                },
                [
                    __SYD.p1_mainHeader(),
                    __c(
                        "div",
                        {
                            style:"display:flex;gap:25px;align-items:center;"
                        },
                        [
                            __SYD.desktopNav_button(),
                            __c(
                                "a",
                                {href:"#"},
                                [
                                    __SYD.iconify_30px({attr:'fa-brands fa-x-twitter' , clr :' #f1c907 '}),
                                ]
                            ),
                            __c(
                                "a",
                                {href:"#"},
                                [
                                    __SYD.iconify_30px({attr:'fa-brands fa-telegram' , clr :' #f1c907 '})
                                ]
                            ),
                            
                            

                        ]
                    )
                    // __SYD.p1_subText(),
                    // __SYD.p1_CA_section()
                ]
            ),
            __c(
                "div",
                {
                    style:`height:80vw;max-height:calc(80vh - 150px);width:${__p(["p1SubHeader" , "breakVal"],false) ? "100%" : "50%"};display:flex;flex-direction:column;gap:20px;background-image:url("./assets/fobm_logo.png")`,
                    // class:"floatMainPic"
                },[],{genericStyle:['bg_fit']}
            )
        ],
        {
            createState:{
                stateName:"p1SubHeader",
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

__SYD.p1_mainHeader = () =>{
    return __c(
        "div",
        {
            style:`text-shadow:1px 1px 0px grey,2px 2px 0px grey,3px 3px 0px grey,4px 4px 0px grey , 6px 6px 0px #000000;letter-spacing:1px;
            text-transform:uppercase;font-weight:900;font-size:${SYD_VAR.page1MainFont_1.get()};color:#ffffff;font-family:font1;text-align:center;display:flex;justify-content:center;align-items:center;`
        },
        [
            __c("p" , {style:"max-width:500px;text-align:center;"} , ["fury's Book of memes"])
        ]
    )
}

__SYD.p1_subText = () =>{
    return __c(
        "div",
        {},
        [
            __c("p" , {style:SYD_VAR.pag1SubText.get()},["Your Cyborg Revolution on Solana Step into a futuristic world where AI, decentralization, and rebellion collide. Alita AI is not just a meme coin—it's a movement. Inspired by the legendary cyborg warrior, we empower dreamers, creators, and degens to seize control of their digital future. No code. No gatekeepers. Just raw, unstoppable freedom. Built on Solana for speed, scale, and sovereignty."])
        ]
    )
}

__SYD.p1_CA_section = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;max-width:600px;background:#f1c907;padding:10px;border-radius:10px;display:flex;gap:10px;flex-wrap:wrap;justify-content:center;align-items:center;border:2px solid #000000;",
            class:"clickButton"
        },
        [
            __c(
                "i",
                {
                    style:"min-height:40px;min-width:40px;font-size:20px;color:#000;background: transparent;border-radius:5px;display:flex;justify-content:center;align-items:center;",
                    class:"fa-solid fa-copy"
                }
            ),
            __c(
                "div",
                {
                    style:`font-weight:900;font-size:${__p(["p1SubHeader" , "caTextSize"],"16px")};color:#000;`
                },
                [
                    SYD_VAR.p1CAText.get()
                ],
                {
                    type:"c_a"
                }
            ),
            // __SYD.CA_copyButton()
        ],
        {
            events:{
                onclick:() =>{
                    navigator.clipboard.writeText(SYD_VAR.p1CAText.get())
                    __v['c_a'].textContent = 'Contract Address Copied'

                    const timer = setTimeout(() =>{
                    __v['c_a'].textContent = SYD_VAR.p1CAText.get()
                    clearTimeout(timer)
                    },1500)
                }
            }
        }
    )
}

__SYD.CA_copyButton = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.buttonStyle1.get(),
            class:"clickButton"
        },
        [
            __c("p",{style:"font-weight:900;"},["copy"])
        ],
        {
            events:{
                onclick:() =>{
                    navigator.clipboard.writeText(SYD_VAR.p1CAText.get())
                    __v['c_a'].textContent = 'Contract Address Copied'

                    const timer = setTimeout(() =>{
                    __v['c_a'].textContent = SYD_VAR.p1CAText.get()
                    clearTimeout(timer)
                    },1500)
                }
            }
        }
    )
}