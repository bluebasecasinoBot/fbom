import { __c, __g, __p, __SYD, __u, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.navBar = () =>{
    return __c(
        "nav",
        {
            style:`overflow-y:hidden;height:60px;height:${__p(["navBar" , "mobileNavExpand"], false) ? "400px" : "60px"};width:${__p(["navBar" , "desktopMode"],true) ? "fit-content" : "100%"};max-width:1300px;border:${__p(["navBar" , "desktopMode"],true) ? "3px solid #0B0A1D" : "unset"};position:fixed;top:30px;left:50%;transform:translateX(-50%);border-radius:25px;padding:0 ${__p(["navBar" , "mobilePadState"], false) ? "10px" : "50px"};background: ${__p(["navBar" , "desktopMode"],true) ? "#f1c907" : __p(["navBar" , "mobileNavExpand"], false) ? "#f1c907" : "transparent"};transition:all ease-out .4s;display:flex;align-items:flex-start;z-index:10000;`
        },
        [
            __SYD.navLogo(),
            __SYD.mobileMenuLogo(),
            __SYD.desktopNav(),
            __SYD.mobileNav()
        ],
        {
            createState:{
                stateName:"navBar",
                state:{
                    desktopMode:true,
                    mobileNavExpand:false,
                    mobilePadState:false
                }
            },
            mediaQuery:{
                query:[
                    {size:"<400px" , prop:{mobilePadState:true}},
                    {size:"<1000px" , prop:{desktopMode:false}},
                ],
                defState:{desktopMode:true , mobilePadState:false}
            }
        }
    )
}

__SYD.navLogo = () =>{
    return __c(
        "a",
        {
            style:`display:${__p(["navBar" , "desktopMode"],true) ? "none" : "block"};min-height:40px;min-width:40px;position:absolute;top:${__p(["navBar" , "mobileNavExpand"], false) ? "15px" : "50%"};left:${__p(["navBar" , "mobilePadState"], false) ? "20px" : "20px"};background-image:url("./assets/logo.png");border-radius:50%;transform:${__p(["navBar" , "mobileNavExpand"], false) ? "unset" : "translateY(-50%);"}`,
            href:"#"
        },[],{genericStyle:["bg_cover"]}
    )
}

__SYD.mobileMenuLogo = () =>{
    return __c(
        "div",
        {
            style:`height:35px;width:35px;position:absolute;top:${__p(["navBar" , "mobileNavExpand"], false) ? "15px" : "50%"};right:${__p(["navBar" , "mobilePadState"], false) ? "20px" : "20px"};background-color:#f1c907;border:1px solid #171717;border-radius:5px;display:${__p(["navBar" , "desktopMode"],true) ? "none" : "block"};cursor:pointer;background-image:url(./assets/menu.png);background-size:45%;transform:${__p(["navBar" , "mobileNavExpand"], false) ? "unset" : "translateY(-50%);"}`
        },[],
        {
            genericStyle:['bg_cover'],
            events:{
                onclick:e =>{
                    const state = __g("navBar");
                    state.mobileNavExpand = state.mobileNavExpand === true ? false : true;
                    __u("navBar" , {type:"a" , value:state})
                }
            }
        }
    )
}

__SYD.mobileNav = () =>{
    return __c(
        "div",
        {
            style:`min-height:90px;padding-top:90px;height:fit-content;display:${__p(["navBar" , "desktopMode"],true) ? "none" : "block"};width:100%;`
        },
        [
            __c(
                "div",
                {
                    style:`height:fit-content;height:fit-content;margin-top:${__p(["navBar" , "mobileNavExpand"], false) ? "0px" : "0px"};padding:20px 10px;display:flex;flex-direction:column;gap:15px;background:#fff;`
                },
                [
                    __SYD.desktopNav_textContent_text({val:"home" , ref:"p1"}),
                    __SYD.desktopNav_textContent_text({val:"about" , ref:"p2"}),
                    __SYD.desktopNav_textContent_text({val:"tokenomics" , ref:"p3"}),
                    __SYD.desktopNav_textContent_text({val:"roadmap" , ref:"p4"}),
                    // __SYD.desktopNav_textContent_text({val:"tokenomics" , ref:"p6"}),
                    __SYD.desktopNav_textContent_text({val:"memes" , ref:"pageMemes"}),
                    // __SYD.desktopNav_textContent_text({val:"contact" , ref:"footer"}),
                    __SYD.desktopNav_button()
                ]
            )
        ]
    )
}

__SYD.desktopNav = () =>{
    return __c(
        "div",
        {
            style:`height:100%;width:100%;display:${__p(["navBar" , "desktopMode"],true) ? "flex" : "none"};gap:50px;align-items:center;justify-content:center;padding-right:unset;`
        },
        [
            __SYD.desktopNav_textContent(),
            // __SYD.desktopNav_button()
        ]
    )
}

__SYD.desktopNav_textContent = () =>{
    return __c(
        "div",
        {
            style:"display:flex;align-items:center;justify-content:center;gap:20px;"
        },
        [
            __SYD.desktopNav_textContent_text({val:"home" , ref:"p1"}),
            __SYD.desktopNav_textContent_text({val:"about" , ref:"p2"}),
            __SYD.desktopNav_textContent_text({val:"tokenomics" , ref:"p3"}),
            __SYD.desktopNav_textContent_text({val:"roadmap" , ref:"p4"}),
            // __SYD.desktopNav_textContent_text({val:"tokenomics" , ref:"p6"}),
            __SYD.desktopNav_textContent_text({val:"memes" , ref:"pageMemes"}),
            // __SYD.desktopNav_textContent_text({val:"contact" , ref:"footer"}),
        ]
    )
}

__SYD.desktopNav_textContent_text = ({val = "home" , ref}) =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:fit-content;"
        },
        [
            __c(
                "a",
                {
                    style:"font-weight:900;text-transform:capitalize;font-size:16px;",
                    href:`#${ref}`
                },
                [
                    val
                ]
            )
        ]
    )
}

__SYD.desktopNav_button = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.buttonStyle1.get(),
            class:"clickButton"
        },
        [
            __c("p" , {style:"width:fit-content"},["Buy FBOM"])
        ],
        {
            events:{
                onclick:e =>{
                    location.href = '/agent/create.html'
                }
            }
        }
    )
}