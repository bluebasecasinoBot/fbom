import { __c, __g, __p, __SYD, __u, __v } from "../sydneyDom_v3.js";

__SYD.cred_container = () =>{
    return __c(
        "div",
        {
            style:`padding:20px 16px;background:#fff;box-shadow: 0 0 15px rgba(139, 99, 247, 0.3);border:2px solid #0B0A1D;display:${__p(["cred_container" , "display"],false) ? "flex" : "none"};flex-direction:column;row-gap:25px;border-radius:10px;width:100%;color:#2fb0f6;`
        },
        [
            __c(
                "div",
                {
                    style:"height:fit-content;width:100%;position:relative;border-radius:inherit;margin-top:20px;"
                },
                [
                    __c("p" , {style:"font-family:shine;margin-bottom:8px;font-size:12px;position:absolute;transform:translateY(-110%);color:#16143a;" , class:"spaceCharacters"},["wallet Adx: "]),
                    __SYD.input_type_text({name:"wallet_adx" , type:"text" , ph:"Wallet Adx" , w:"500" , size:"16px" , inject:"background:#333;box-shadow:unset;font-family:monospace;height:50px;border:none;border-radius:inherit;width:100%;padding-right:50px;color:rgba(255,255,255,.5);" , cls:"launch_btn" , otherProps:{readonly:true , value:__p(["cred_container" , "walletAdx"],"")}}),

                    __c("i" , {style:"font-size:25px;color:#8A63F7;font-weight:900;height:25px;min-width:25px;position:absolute;top:50%;right:16px;transform:translateY(-50%);" , class:`${"fa-solid fa-copy"} click`},[],{
                        events:{
                            onclick:e =>{
                                navigator.clipboard.writeText(__p(["cred_container" , "walletAdx"],"")).then(() => {
                                    console.log("Text copied to clipboard!");

                                    __p(["popUp" , "displayText"])(`Wallet adx copied ... 🎉`);
                                    
                                }).catch(err => {
                                    console.error("Failed to copy text: ");

                                    __p(["popUp" , "displayText"])(`Failed to copy wallet adx: ${err.message}` , "warn");
                                });
                            }
                        }
                    }),
                ]
            ),

            __c(
                "div",
                {
                    style:"height:fit-content;width:100%;position:relative;border-radius:inherit;margin-top:40px;"
                },
                [
                    __c("p" , {style:"font-family:shine;margin-bottom:8px;font-size:12px;position:absolute;transform:translateY(-110%);color:#16143a;" , class:"spaceCharacters"},["Paste Txn Id to confirm transaction: "]),
                    __SYD.input_type_text({name:"tnxID" , type:"text" , ph:"Enter Txn ID" , w:"500" , size:"16px" , inject:"background:#333;box-shadow:unset;font-family:monospace;height:50px;border:none;border-radius:inherit;width:100%;padding-right:50px;color:rgba(255,255,255,1)" , cls:"launch_btn" , otherProps:{value:__p(["cred_container" , "txnId"],"")} , fnc:{
                        oninput: e =>{
                            __p(['cred_container','updateTxnId'])(e.target.value)
                        }
                    }}),

                    __c("i" , {style:"font-size:25px;color:#8A63F7;font-weight:900;height:25px;min-width:25px;position:absolute;top:50%;right:16px;transform:translateY(-50%);" , class:`${"fa-regular fa-share-from-square"} click`},[],{
                        events:{
                            onclick:async e =>{
                                //clipboard copy text
                                __p(["createAi__sections_sec2" , "startAnimation_txn"])();
                                __v["loadTxn"].scrollIntoView();

                                __v['trackID__copy'].style.opacity = '.6';

                                __v['trackID__copy'].style.pointerEvents = 'none';

                                await fetch('https://alita-ai-server.fly.dev/checkTxnStatus__save', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({agentInfo:__p(['createAI__sections_main','userInfo']) , txnId:__p(['cred_container','txnId'])})
                                })
                                .then(response => response.json())
                                .then(data =>{
                                    if(data.status.includes("Failed"))
                                    {
                                        __p(["popUp" , "displayText"])(`${data.status}` , "error");

                                        __p(['createAi__sections_sec2' , 'updateTxnText'])(data.status , true);

                                    }else
                                    {
                                        __p(["popUp" , "displayText"])(`${data.status}`);

                                        __p(['createAi__sections_sec2' , 'updateTxnText'])(data.status);

                                        __v['trackID__copy'].style.opacity = '1';

                                        __v['trackID__copy'].style.pointerEvents = 'auto';

                                        __p(['cred_container' , 'updateTrackId'])(data.trackingID)
                                    }
            
                                    __p(["createAi__sections_sec2" , "endAnimation_txn"])();
                                })
                                .catch(error => {
                                    console.error('Error:', error);
                                    e.target.style.pointerEvents = "none";
                                    e.target.style.opacity = "1"
                                });
                            }
                        }
                    }),
                ]
            ),

            __c(
                "div",
                {
                    style:"height:fit-content;width:100%;position:relative;border-radius:inherit;margin-top:20px;opacity:.6;pointer-events:none;"
                },
                [
                    __c("p" , {style:"font-family:shine;margin-bottom:8px;font-size:12px;position:absolute;transform:translateY(-110%);color:#16143a;" , class:"spaceCharacters"},["Tracking ID: "]),
                    __SYD.input_type_text({name:"wallet_adx" , type:"text" , ph:"Tracking ID" , w:"500" , size:"16px" , inject:"background:#333;box-shadow:unset;font-family:monospace;height:50px;border:none;border-radius:inherit;width:100%;padding-right:50px;color:rgba(255,255,255,.5);" , cls:"launch_btn" , otherProps:{readonly:true , value:__p(["cred_container" , "Track_id"],"")}}),

                    __c("i" , {style:"font-size:25px;color:#8A63F7;font-weight:900;height:25px;min-width:25px;position:absolute;top:50%;right:16px;transform:translateY(-50%);" , class:`${"fa-solid fa-copy"} click`},[],{
                        events:{
                            onclick:e =>{
                                navigator.clipboard.writeText(__p(["cred_container" , "Track_id"],"")).then(() => {
                                    console.log("Text copied to clipboard!");

                                    __p(["popUp" , "displayText"])(`tracking ID copied ... 🎉`);
                                    
                                }).catch(err => {
                                    console.error("Failed to copy text: ");

                                    __p(["popUp" , "displayText"])(`Failed to copy Tracking ID: ${err.message}` , "warn");
                                });
                            }
                        }
                    }),
                ],
                {
                    type:"trackID__copy"
                }
            ),
        ],
        {
            createState:{
                stateName:"cred_container",
                state:{
                    display:false,
                    walletAdx:"",
                    Track_id:"",
                    txnId:"",
                    displayFunc:() =>{
                        const state = __g("cred_container");
                        state.display = true;
                        __u("cred_container" , {type:"a" , value:state})
                    },

                    un_displayFunc:() =>{
                        const state = __g("cred_container");
                        state.display = false;
                        __u("cred_container" , {type:"a" , value:state})
                    },

                    updateCred:(walletAdx) =>{
                        const state = __g("cred_container");
                        state.walletAdx = walletAdx;
                        __u("cred_container" , {type:"a" , value:state})
                    },

                    clearCred:() =>{
                        const state = __g("cred_container");
                        state.walletAdx = "";
                        state.Track_id = "";
                        __u("cred_container" , {type:"a" , value:state})
                    },

                    updateTxnId:(ID) =>{
                        const state = __g("cred_container");
                        state.txnId = ID;
                        __u("cred_container" , {type:"a" , value:state})
                    },

                    updateTrackId:(ID) =>{
                        const state = __g("cred_container");
                        state.Track_id = ID;
                        __u("cred_container" , {type:"a" , value:state})
                    }, 
                }
            }
        }
    )
}
