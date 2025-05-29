import { __c, __g, __p, __SYD, __u } from "../sydneyDom_v3.js";

__SYD.createIntro_tab = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;min-height:150px;max-width:600px;width:90%;border-radius:20px;display:flex;justify-content:center;align-items:center;row-gap:30px;padding:30px 30px;flex-direction:column;background:rgba(22, 20, 58, 0.74);backdrop-filter: blur(10px);border: 1px solid #fff;box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);"
        },
        [
            __c(
                "h1",
                {style:`color:#fff;text-align:center;font-family:shine;text-shadow:2px 2px 1px #141414;font-weight:900;position:relative;font-size:${__p(["subContainer" , "scaleIntro"] , false) ? "30px" : "35px"}` , class:"spaceCharacters"},
                [
                    'Build' , " in Minutes!"
                ]//__c("span",{style:"min-height:40px;min-width:40px;background-size:100%;background-image:url(../assets/buildPng.png);display:inline-block;"},[],{genericStyle:['bg_fit']}),
            ),
            __c(
                "p",
                {
                    style:`font-size:${__p(["subContainer" , "scaleIntro"] , false) ? "15px" : "17px"};text-align:center;font-weight:900;line-height:25px;white-space: pre-line;text-shadow:1px 1px 2px #000;`
                },
                [
                    __c("p",{},["Unleash your creativity and build your perfect digital companion."])
                ]
            ),
            __SYD.createAi__start(),
            __SYD.access_agent()
        ]
    )
}

__SYD.createIntro_tabMain = () =>{
    return __c(
        "div",
        {
            style:`height:100vh;width:100%;display:${__p(["createIntro_tabMain" , "display"] , true) ? "flex" : "none"};justify-content:center;align-items:center;`
        },
        [
            __SYD.createIntro_tab()
        ],
        {
            createState:{
                stateName:"createIntro_tabMain",
                state:{
                    display:true,
                    remove_display_func:() =>{
                        const state = __g("createIntro_tabMain");
                        state.display = false;
                        __u(
                            "createIntro_tabMain",
                            {type:"a" , value:state}
                        )
                    },
                    display_func:() =>{
                        const state = __g("createIntro_tabMain");
                        state.display = true;
                        __u(
                            "createIntro_tabMain",
                            {type:"a" , value:state}
                        )
                    },
                }
            }
        }
    )
}