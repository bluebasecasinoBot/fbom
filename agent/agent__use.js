import { __c, __g, __p, __SYD, __u, __v } from "../sydneyDom_v3.js";


__SYD.agent_use_chat_main = () =>{
    return __c(
        "div",
        {
            style:`padding-top:50px;height:100%;width:100%;max-width:1000px;background:#fff;backdrop-filter: blur(10px);border: 1px solid rgba(0, 255, 255, 0.4);box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);display:${__p(["userAgentAi__sections_main" , "section2"] , false) ? "flex" : "none"};justify-content:center;align-items:center;min-height:100vh;`
        },
        [
            __c(
                "h2",
                {
                    style:"font-size:18px;color: #8A63F7;font-weight:500;text-transform:capitalize;margin-bottom:16px;position:absolute;left:50%;transform:translateX(-50%);top:20px;font-family:shine;text-shadow:2px 2px 1px #141414;text-align:center;width:100%;pointer-events:none;opacity:.7;"
                },
                [
                    "Agent -" , __c("span" , {style:"color:#8A63F7;text-shadow:2px 2px 1px #141414 , 0 0 1px #000 , 0 0 6px rgb(170, 142, 247);"},[` ${__p(["userAgentAi__sections_main" , "agentLoginInfo" , "agentName"] , "Agent name")}`.toUpperCase()])
                ]
            ),
            __c(
                "div",
                {
                    style:"height:100%;width:100%;display:flex;justify-content:center;flex-direction:column;background:inherit;padding:10px;padding-bottom:30px;gap:40px;"
                },
                [
                    __SYD.chatArea__agent(),
                    __SYD.messageTab()
                ]
            )
        ],
        {
            createState:{
                stateName:"agent_use_chat_main",
                state:{
                    localCache:"",
                    startAutoType:false,
                    intervalTimer:null,
                    disableSend:false,
                    wordCount:0,
                    maxCount:50,
                    agentResponseAwait:false,
                    startResponseWait:() =>{
                        const state = __g("agent_use_chat_main");
                        state.agentResponseAwait = true;
                        __u("agent_use_chat_main" , {type:"a" , value:state})
                    },
                    stopResponseWait:() =>{
                        const state = __g("agent_use_chat_main");
                        state.agentResponseAwait = false;
                        __u("agent_use_chat_main" , {type:"a" , value:state})
                    },
                    wordCountFunc:(count) =>{
                        const state = __g("agent_use_chat_main");
                        state.wordCount = count;
                        __u("agent_use_chat_main" , {type:"a" , value:state})
                    },
                    disableSendFunc:() =>{
                        const state = __g("agent_use_chat_main");
                        state.disableSend = true;
                        __u("agent_use_chat_main" , {type:"a" , value:state})
                    },
                    enableSendFunc:() =>{
                        const state = __g("agent_use_chat_main");
                        state.disableSend = false;
                        __u("agent_use_chat_main" , {type:"a" , value:state})
                    },
                    clearIntervalTimer:() =>{
                        if(__p(["agent_use_chat_main" , "intervalTimer"],null) !== null)
                        {
                            clearInterval(__p(["agent_use_chat_main" , "intervalTimer"],null))

                            const state = __g("agent_use_chat_main");
                            state.localCache = "";
                            state.startAutoType = false;
                            state.disableSend = false;
                            __u("agent_use_chat_main" , {type:"a" , value:state})
                        }
                    },
                    agentAutoTypeEffect:() =>{
                        const agentMessage = __p(['userAgentAi__sections_main' , 'agentMessage'] , [])

                        if(agentMessage.length > __p(['userAgentAi__sections_main' , 'userMessage'] , []).length)
                        {
                            if(!__p(["agent_use_chat_main" , "startAutoType"] , false))
                                {
                                    const state = __g("agent_use_chat_main");
                                    state.localCache = agentMessage[agentMessage.length-1];
                                    state.startAutoType = true;
                                    __u("agent_use_chat_main" , {type:"a" , value:state})
        
                                    //clear last agent message
                                    const state2 = __g("userAgentAi__sections_main");
                                    state2.agentMessage[agentMessage.length-1] = "";
                                    console.log(state2.agentMessage)
                                    __u("userAgentAi__sections_main" , {type:"a" , value:state2})
                                    //clear last agent message
                                }
        
                                const state3 = __g("agent_use_chat_main")
                                state3.intervalTimer = setInterval(() =>{
                                    if(__p(['userAgentAi__sections_main' , 'agentMessage'] , [])[agentMessage.length-1].length === __p(['agent_use_chat_main' , 'localCache'],"").length)
                                    {
                                        __p(["agent_use_chat_main" , "clearIntervalTimer"])()
                                    }else
                                    {
                                        //update agent last message
                                        const state2 = __g("userAgentAi__sections_main");
                                        state2.agentMessage[agentMessage.length-1] += __p(["agent_use_chat_main" , "localCache"] , "")[state2.agentMessage[agentMessage.length-1].length];
                                        __u("userAgentAi__sections_main" , {type:"a" , value:state2})
                                        //update agent last message
                                    }

                                    __v['chatScroll'].scrollIntoView();
                                } , 50)
        
                                __u("agent_use_chat_main" , {type:"a" , value:state3})
                        }
                    }
                }
            }
        }
    )
}

__SYD.chatArea__agent = () =>{
    const get_render_chat = () =>{
        const chatEl = [];
        const agentChat = __p(['userAgentAi__sections_main' , 'agentMessage'] , [])
        const userChat = __p(['userAgentAi__sections_main' , 'userMessage'] , [])
        for(let i = 0; i < Math.max(agentChat.length , userChat.length); i++)
        {
            if(agentChat.length > i)
            {
                chatEl.push(
                    __SYD.chatTabs__agent({msg:`${agentChat[i]}`})
                )
            }

            if(userChat.length > i)
            {
                chatEl.push(
                    __SYD.chatTabs__user({msg:`${userChat[i]}`})
                )
            }
        }

        return chatEl;
    }
    return __c(
        "div",
        {
            style:"height:100%;width:100%;background:transparent;border-radius:15px;padding:10px;padding-top:40px;display:flex;flex-direction:column;overflow:scroll;"
        },
        [
            ...get_render_chat(),
            __c(
                "span",
                {},[],{type:"chatScroll"}
            ),
            __c(
                "i",
                {
                    style:`display:${__p(['agent_use_chat_main' , 'agentResponseAwait'],false) ? "flex" : "none"};height:20px;width:20px;font-size:20px;min-width:20px;color:#8A63F7;align-self:flex-start;`,
                    class:"fa-solid fa-robot text_opacity_animation"
                }
            )
        ]
    )
}

__SYD.userTextCount = () =>{
    return __c(
        "div",
        {
            style:`position:absolute;top:0;transform:translateY(-120%);right:0;color:${__p(['agent_use_chat_main' , 'wordCount'],0) > __p(['agent_use_chat_main' , 'maxCount'],50) ? "red" : "grey"};`
        },
        [
            `Words ${__p(['agent_use_chat_main' , 'wordCount'],0)} / ${__p(['agent_use_chat_main' , 'maxCount'],50)}`
        ]
    )
}

__SYD.messageTab = () =>{
    return __c(
        "div",
        {
            style:"height:140px;width:100%;background:inherit;min-height:140px;display:flex;gap:10px;border-radius:15px;position:relative;padding:10px;background:rgba(0, 0, 0, 0.1);"
        },
        [
            __SYD.userTextCount(),
            __SYD.textArea_type_text({name:"agentname__id" , type:"text" , ph:"Enter your message" , w:"500" , size:"16px" , inject:"box-shadow:unset;font-family:monospace;height:80px;border-radius:inherit;width:100%;resize:none;padding:16px;border:none;border-bottom:1px solid #171717;" , cls:"" , fnc:{oninput:e =>{
                __p(['createAI__sections_main' , 'editName'])(e.target.value)
            }} , stateCred:{type:"chat_msg_tab"} , fnc:{
                oninput: e =>{
                    __p(['agent_use_chat_main' , 'wordCountFunc'])(e.target.value.split(" ").length)
                }
            }}),

            __c("i" , {style:`border-radius:inherit;font-size:25px;text-align:center;color:#fff;font-weight:900;height:50px;min-width:50px;background:#8A63F7;display:flex;align-items:center;justify-content:center;${__p(["agent_use_chat_main" , "startAutoType"] , false) ? "opacity:.6;pointer-events:none;" : ""}` , class:`${"fa-solid fa-paper-plane"} click`},[],{
                events:{
                    onclick:async e =>{
                        if(!__p(["agent_use_chat_main" , "startAutoType"] , false))
                        {
                            if(__v['chat_msg_tab'].value.length > 0)
                            {
                                if(__p(['agent_use_chat_main' , 'wordCount'],0) < __p(['agent_use_chat_main' , 'maxCount'],50))
                                {
                                    __p(["agent_use_chat_main" , "startResponseWait"])()

                                    __p(["agent_use_chat_main" , "disableSendFunc"])()

                                    __p(['userAgentAi__sections_main' , 'updateUserMessage'])(__v['chat_msg_tab'].value);
    
                                    __v['chatScroll'].scrollIntoView();
    
                                    __v['chat_msg_tab'].value = "";
    
                                    const agentChat = __p(['userAgentAi__sections_main' , 'agentMessage'] , [])
                                    const userChat = __p(['userAgentAi__sections_main' , 'userMessage'] , []);
    
                                    const tokenised_customisation = () =>{
                                        const customisation = __p(['userAgentAi__sections_main' , 'agentLoginInfo'] , {});
    
                                        return `->admin_msg: Your_name_is:${customisation.agentName},personality:${customisation.personality},responseTone:${customisation.responseTone},responseFormat:${customisation.responseFormat},expertise:${customisation.expertise},askQuestions:${customisation.askQuestion},be_very_brief`
                                    }
    
                                    await fetch('https://alita-ai-server.fly.dev/agent_chat', {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify({recentChat:[
                                            {role:`assistant` , content:agentChat[agentChat.length-1]},
                                            {role:"user" , content:userChat[userChat.length-1] + tokenised_customisation()}
                                        ]})
                                    })
                                    .then(response => response.json())
                                    .then(data =>{
                                        __p(["agent_use_chat_main" , "stopResponseWait"])()

                                        if(data.status !== "Good")
                                        {
                                            __p(["popUp" , "displayText"])(`Sorry, could not reply your message , server error ~ ${data.status}` , "warn");
    
                                            __p(["agent_use_chat_main" , "enableSendFunc"])();
                                        }else
                                        {
                                            //data.response_agent
                                            __p(['userAgentAi__sections_main' , 'updateAgentMessage'])(`${data.response_agent}`)
    
                                            __p(["agent_use_chat_main" , "agentAutoTypeEffect"])()
                                        }
                                    })
                                    .catch(err =>{
                                        __p(["agent_use_chat_main" , "stopResponseWait"])()

                                        __p(["popUp" , "displayText"])(`${err.message}` , "warn");
    
                                        __p(["agent_use_chat_main" , "enableSendFunc"])();
                                    })
                                }else
                                {
                                    __p(["popUp" , "displayText"])(`Max word count of ${__p(['agent_use_chat_main' , 'maxCount'],50)} exceeded` , "warn");
                                }
                            }else
                            {
                                __p(["popUp" , "displayText"])("Please Enter a message" , "warn");
                            }
                            
                        }
                        
                    }
                }
            }),
        ]
    )
}

__SYD.chatTabs__agent = ({msg = ""}) =>{
    const message = () =>{
        const el = [];
        const rectifiedMsg = msg.split('\n')
        rectifiedMsg.forEach((val) =>{
            el.push(
                __c(
                    "p",
                    {
                        style:"font-family:monospace;font-weight:700;font-size:16px;margin-bottom:6px;"
                    },
                    [
                        `${val}`
                    ]
                )
            )
        })
        return el
    }
    return __c(
        "div",
        {
            style:"width:100%;min-height:fit-content;display:flex;justify-content:flex-start;align-items:flex-start;gap:8px;border-bottom:1px solid rgba(255,255,255,.1);padding:10px 0;"
        },
        [
            __c(
                "i",
                {
                    style:"height:40px;width:40px;display:flex;align-items:center;justify-content:center;border-radius:50%;font-size:20px;min-width:20px;color:#8A63F7;border:2px solid #8A63F7;",
                    class:"fa-solid fa-robot"
                },
                [
                    // "🤖"
                ]
            ),
            __c(
                "div",
                {
                    style:"padding:15px 10px;min-height:fit-content;width:fit-content;background:transparent;max-width:90%;border-radius:15px;border-top-left-radius:unset;color:#16143a;"
                },
                [
                    ...message()
                ]
            )
        ]
    )
}

__SYD.chatTabs__user = ({msg = ""}) =>{
    const message = () =>{
        const el = [];
        const rectifiedMsg = msg.split('\n')
        rectifiedMsg.forEach((val) =>{
            el.push(
                __c(
                    "p",
                    {
                        style:"font-family:monospace;font-weight:700;font-size:16px;margin-bottom:6px;"
                    },
                    [
                        `${val}`
                    ]
                )
            )
        })
        return el
    }
    return __c(
        "div",
        {
            style:"width:100%;min-height:fit-content;display:flex;justify-content:flex-end;align-items:flex-start;gap:8px;border-bottom:1px solid rgba(255,255,255,.1);padding:10px 0;"
        },
        [
            __c(
                "div",
                {
                    style:"padding:15px 10px;min-height:fit-content;width:fit-content;background:#16143a;max-width:70%;border-radius:15px;border-top-right-radius:unset;"
                },
                [
                    ...message()
                ]
            ),
            __c(
                "i",
                {
                    style:"height:40px;width:40px;display:flex;align-items:center;justify-content:center;border-radius:50%;font-size:20px;min-width:20px;border:2px solid #246696;color:#F4D03F;",
                    class:"fa-solid fa-user-secret"
                },
                [
                    // "🤖"
                ]
            ),
        ]
    )
}

__SYD.textArea_type_text = ({ph = 'Text Here' , cls = 'thin_border' , w = '500' , size = '16px' , inject = '' , fnc = {} , stateCred = {}} = {}) =>{
    return __c(
        'textarea',
        {
            type:"text",
            placeholder:ph,
            class:cls,
            style:`background:transparent;padding:5px;padding-left:10px;font-weight:${w};font-size:${size};${inject};outline:none;`
        },
        [],
        {
            ...stateCred,
            events:{
                ...fnc
            }
        }
    )
}
