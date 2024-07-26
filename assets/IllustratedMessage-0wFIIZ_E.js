import{U as L}from"./UI5Element-DH5oRWb7.js";import{s as Z,a as h,o as H,b as O,l as p,g as z,p as d,c as R,d as j}from"./withWebComponent-CFCcsgaR.js";import{s as A}from"./slot-Df15G--e.js";import{R as E}from"./ResizeHandler-SVe57yR2.js";import{g as k}from"./useIsomorphicLayoutEffect-BZqdrUgG.js";import{b as $,r as P}from"./Boot-DdVREbXE.js";import{g as y}from"./AriaLabelHelper-CzOXVcye.js";import{b as U}from"./i18nBundle-VKnKJfRd.js";import{T as D,a as q}from"./Title-CZ4mgGsM.js";import{U as K,V as M}from"./i18n-defaults-BiDPwFvU.js";import{s as G}from"./parameters-bundle.css-BfeWTp2S.js";var v;(function(t){t.Auto="Auto",t.Base="Base",t.Dot="Dot",t.Spot="Spot",t.Dialog="Dialog",t.Scene="Scene"})(v||(v={}));const u=v;var b;(function(t){t.BeforeSearch="BeforeSearch",t.NewMail="NewMail",t.NoActivities="NoActivities",t.NoColumnsSet="NoColumnsSet",t.NoData="NoData",t.NoMail="NoMail",t.NoMail_v1="NoMail_v1",t.NoEntries="NoEntries",t.NoNotifications="NoNotifications",t.NoSavedItems="NoSavedItems",t.NoSavedItems_v1="NoSavedItems_v1",t.NoSearchResults="NoSearchResults",t.NoTasks="NoTasks",t.NoTasks_v1="NoTasks_v1",t.NoDimensionsSet="NoDimensionsSet",t.UnableToLoad="UnableToLoad",t.UnableToLoadImage="UnableToLoadImage",t.UnableToUpload="UnableToUpload",t.UploadToCloud="UploadToCloud",t.AddColumn="AddColumn",t.AddPeople="AddPeople",t.AddDimensions="AddDimensions",t.BalloonSky="BalloonSky",t.Connection="Connection",t.EmptyCalendar="EmptyCalendar",t.EmptyList="EmptyList",t.EmptyPlanningCalendar="EmptyPlanningCalendar",t.ErrorScreen="ErrorScreen",t.FilterTable="FilterTable",t.GroupTable="GroupTable",t.NoFilterResults="NoFilterResults",t.PageNotFound="PageNotFound",t.ReloadScreen="ReloadScreen",t.ResizeColumn="ResizeColumn",t.SearchEarth="SearchEarth",t.SearchFolder="SearchFolder",t.SignOut="SignOut",t.SimpleBalloon="SimpleBalloon",t.SimpleBell="SimpleBell",t.SimpleCalendar="SimpleCalendar",t.SimpleCheckMark="SimpleCheckMark",t.SimpleConnection="SimpleConnection",t.SimpleEmptyDoc="SimpleEmptyDoc",t.SimpleEmptyList="SimpleEmptyList",t.SimpleError="SimpleError",t.SimpleMagnifier="SimpleMagnifier",t.SimpleMail="SimpleMail",t.SimpleNoSavedItems="SimpleNoSavedItems",t.SimpleNotFoundMagnifier="SimpleNotFoundMagnifier",t.SimpleReload="SimpleReload",t.SimpleTask="SimpleTask",t.SleepingBell="SleepingBell",t.SortColumn="SortColumn",t.SuccessBalloon="SuccessBalloon",t.SuccessCheckMark="SuccessCheckMark",t.SuccessHighFive="SuccessHighFive",t.SuccessScreen="SuccessScreen",t.Survey="Survey",t.Tent="Tent",t.UploadCollection="UploadCollection",t.TntAvatar="TntAvatar",t.TntCalculator="TntCalculator",t.TntChartArea="TntChartArea",t.TntChartArea2="TntChartArea2",t.TntChartBar="TntChartBar",t.TntChartBPMNFlow="TntChartBPMNFlow",t.TntChartBullet="TntChartBullet",t.TntChartDoughnut="TntChartDoughnut",t.TntChartFlow="TntChartFlow",t.TntChartGantt="TntChartGantt",t.TntChartOrg="TntChartOrg",t.TntChartPie="TntChartPie",t.TntCodePlaceholder="TntCodePlaceholder",t.TntCompany="TntCompany",t.TntCompass="TntCompass",t.TntComponents="TntComponents",t.TntDialog="TntDialog",t.TntExternalLink="TntExternalLink",t.TntFaceID="TntFaceID",t.TntFingerprint="TntFingerprint",t.TntHandshake="TntHandshake",t.TntHelp="TntHelp",t.TntLock="TntLock",t.TntMission="TntMission",t.TntMissionFailed="TntMissionFailed",t.TntNoApplications="TntNoApplications",t.TntNoFlows="TntNoFlows",t.TntNoUsers="TntNoUsers",t.TntRadar="TntRadar",t.TntRoadMap="TntRoadMap",t.TntSecrets="TntSecrets",t.TntServices="TntServices",t.TntSessionExpired="TntSessionExpired",t.TntSessionExpiring="TntSessionExpiring",t.TntSettings="TntSettings",t.TntSuccess="TntSuccess",t.TntSuccessfulAuth="TntSuccessfulAuth",t.TntSystems="TntSystems",t.TntTeams="TntTeams",t.TntTools="TntTools",t.TntTutorials="TntTutorials",t.TntUnableToLoad="TntUnableToLoad",t.TntUnlock="TntUnlock",t.TntUnsuccessfulAuth="TntUnsuccessfulAuth",t.TntUser2="TntUser2"})(b||(b={}));const f=b,N=new Map([["sap_horizon","V5"],["sap_horizon_dark","V5"],["sap_horizon_hcb","V5/HC"],["sap_horizon_hcw","V5/HC"]]),g="V4",_=new Map,w=k("SVGIllustration.registry",new Map),C=k("SVGIllustration.promises",new Map),V=()=>{const t=$();return N.has(t)?N.get(t):g},T=t=>{let e=V();const[l,r]=t.split("/");let n=`${l}/${e}/${r}`;return!_.has(n)&&e!==g&&(e=g,n=`${l}/${e}/${r}`),{registryKey:n,collection:e}},W=(t,e)=>{const l=e.collection||g;w.set(`${e.set}/${l}/${t}`,{dialogSvg:e.dialogSvg,sceneSvg:e.sceneSvg,spotSvg:e.spotSvg,dotSvg:e.dotSvg,title:e.title,subtitle:e.subtitle})},B1=(t,e)=>{_.set(t,e)},J=t=>{const{registryKey:e}=T(t);if(!C.has(e)){if(!_.has(e)){const r=t.startsWith("fiori/")?t.replace("fiori/",""):t;throw new Error(`No loader registered for the ${t} illustration. Probably you forgot to import the "@ui5/webcomponents-fiori/dist/illustrations/${r}.js" module. Or you can import the "@ui5/webcomponents-fiori/dist/illustrations/AllIllustrations.js" module that will make all illustrations available, but fetch only the ones used.`)}const l=_.get(e);C.set(e,l(e))}return C.get(e)},Q=t=>{const{registryKey:e}=T(t);return w.get(e)},X=async t=>{const{registryKey:e}=T(t);return await J(t),w.get(e)},F=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="160" height="160" viewBox="0 0 160 160" id="sapIllus-Dialog-BeforeSearch">
      <path class="sapIllus_AccentColor" d="M132.6937,27.73c-3.2533-1.26-4.83-4.3131-6.05-7.4252A.4783.4783,0,0,0,126.2047,20a.5881.5881,0,0,0-.4465.2938c-1.6253,3.8672-4.04,5.8423-6.8353,8.13l-.0664.0545a.481.481,0,0,0,.2027.8428c2.5332.54,6.303,5.2112,6.303,7.81a.4778.4778,0,0,0,.9369.1352c.8192-2.8039,3.1973-7.4187,6.3928-8.6383a.4815.4815,0,0,0,.0018-.8977Z"/>
      <path class="sapIllus_AccentColor" d="M112.8666,47.768c-1.831-.7278-2.728-2.5166-3.4249-4.3412a.4884.4884,0,0,0-.4476-.3185h-.0057a.4885.4885,0,0,0-.45.3067,11.7736,11.7736,0,0,1-3.943,4.8026l-.0392.0333a.5123.5123,0,0,0-.1665.5079.4964.4964,0,0,0,.3732.3735c1.3845.3028,3.5269,3.0264,3.5269,4.4835a.4983.4983,0,0,0,.4181.4976.4735.4735,0,0,0,.07.0049.49.49,0,0,0,.4676-.3607c.4694-1.6445,1.82-4.3465,3.6192-5.0512a.508.508,0,0,0,.0019-.9384Z"/>
    <ellipse class="sapIllus_BackgroundColor" cx="80.5" cy="142" rx="42.5" ry="6"/>
    <path class="sapIllus_NoColor" d="M85.2249,48.2865A25.9088,25.9088,0,1,0,68.9265,78.275,25.9112,25.9112,0,0,0,85.2249,48.2865Z"/>
    <path class="sapIllus_NoColor" d="M40.0092,59.22l.0312.1187c-.0051-.02-.0086-.04-.0136-.06S40.0142,59.2393,40.0092,59.22Z"/>
    <path class="sapIllus_PatternShadow" d="M68.9265,78.275A25.9007,25.9007,0,0,0,72.468,31.2983a34.2591,34.2591,0,0,1,1.2231,4.4233,29.3159,29.3159,0,0,1-23.416,34.2131,33.9609,33.9609,0,0,1-8.5285.3409c-.7736-.077-1.49-.1849-2.1779-.3039A25.9118,25.9118,0,0,0,68.9265,78.275Z"/>
    <path class="sapIllus_StrokeDetailColor" d="M72.291,84.5876c.3059.4336.59.8349.9111,1.2933l-.8993-1.2978Z"/>
      <path class="sapIllus_StrokeDetailColor" d="M42.626,66.5166a.5.5,0,0,1-.418-.2256,21.9665,21.9665,0,0,1-2.873-6.5459l.0009-.0005a21.0917,21.0917,0,0,1-.206-9.3359q.0557-.2739.1172-.543a.5.5,0,1,1,.9746.2217q-.0587.2586-.1113.52a20.0791,20.0791,0,0,0,.2246,9.0083l-.001,0a20.9567,20.9567,0,0,0,2.71,6.1265.5.5,0,0,1-.4179.7744Z"/>
      <path class="sapIllus_StrokeDetailColor" d="M40.39,48.2061a.4995.4995,0,0,1-.4716-.6651,21.0763,21.0763,0,0,1,1.0293-2.437.5.5,0,0,1,.8945.4463,20.0851,20.0851,0,0,0-.98,2.3208A.5.5,0,0,1,40.39,48.2061Z"/>
    <path class="sapIllus_StrokeDetailColor" d="M85.5592,81.5767l-2.658-3.8454a43.4693,43.4693,0,0,1-4.9776,3.7875A47.882,47.882,0,0,1,72.29,84.5854l.0015.0022.0118-.0045.8993,1.2978.0521.0741S82.053,86.1378,85.5592,81.5767Z"/>
    <path class="sapIllus_BrandColorSecondary" d="M107.3985,113.1019,82.8973,77.7253a32.9823,32.9823,0,1,0-13.0759,7.752c.8435-.2634,1.6632-.5664,2.47-.89l-.0015-.0022a47.882,47.882,0,0,0,5.6341-3.0666,43.4693,43.4693,0,0,0,4.9776-3.7875l2.658,3.8454c-3.5062,4.5611-12.305,4.3783-12.305,4.3783l-.0521-.0741,23.905,34.4959c.0969.1415.2021.2735.3081.4044a6.3072,6.3072,0,0,0,8.3437,1.09h0A6.308,6.308,0,0,0,107.3985,113.1019ZM68.9265,78.275A25.9007,25.9007,0,1,1,85.2249,48.2865,25.9118,25.9118,0,0,1,68.9265,78.275Z"/>
</svg>
`,O1=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"})),x=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="320" height="240" viewBox="0 0 320 240" id="sapIllus-Scene-BeforeSearch">
    <path class="sapIllus_BackgroundColor" d="M245.38,171.4746H242.546a11.5477,11.5477,0,0,1-10.9266-7.3527,9.3554,9.3554,0,0,1-.5977-2.96q-.0036-.1521-.0052-.3028a10.9462,10.9462,0,0,1,9.0747-10.7733c14.4689-2.67,28.3441-7.5976,39.0055-15.8435,15.8174-12.234,25.2983-30.1413,25.2986-48.2414,0-32.3337-28.7569-59.0139-66.2417-63.7612-19.1224-2.4216-39.22-1.8209-58.5032-1.8821q-30.51-.0966-61.0186-.0241c-25.038.0517-52.0666.6182-73.0249,13.849C26.4294,46.2886,15,65.8607,15,86c0,35.2454,33.6343,58.1414,71.8081,63.7773l.4956.0738q1.2916.1853,2.5889.3434c6.4013,1.288,9.952,5.6046,9.654,11.6212-.2047,4.1329-3.1466,7.23-7.7849,8.5154a95.9553,95.9553,0,0,0-12.8274,1.6864c-16.781,3.4816-30.1267,18.0291-24.73,35.5255,3.8016,12.3243,15.09,16.07,26.8749,17.7281,7.8472,1.1038,16.2067,1.1088,23.4419,1.1037,49.2867-.035,98.2475,0,147.38,0,13.4976,0,26.5205-.3844,34.9722-11.9494a26.5531,26.5531,0,0,0,.3955-31.3C277.4067,169.5317,260.427,171.4746,245.38,171.4746Z"/>
    <path class="sapIllus_BrandColorSecondary" d="M200.4067,60.6067a23.5169,23.5169,0,0,0-7.5478.8318c-.1641.0456-.3193.1068-.4812.1562a68.011,68.011,0,1,0,15.6289,44.1992,23.503,23.503,0,0,0,2.7229-1.3057c.0181-.01.0354-.0214.0535-.0317q.6788-.386,1.3258-.8127c.0562-.0374.11-.0776.1656-.1155.3909-.2629.7749-.5342,1.147-.8186.1094-.084.2128-.1744.32-.26.3139-.2489.6264-.4995.9257-.7633.1886-.1667.3662-.3438.5491-.516.21-.198.4262-.3911.6289-.5965q.5751-.5837,1.1085-1.2033C215.551,83.3423,207.9,69.7109,200.4067,60.6067Z"/>
    <path class="sapIllus_ObjectFillColor" d="M206.2947,187.3667q.0581-.0273.1152-.0563c2.09-1.06,2.2331-3.5861,3.8061-5.1221a4.093,4.093,0,0,1,6.9452,2.6826,15.1474,15.1474,0,0,0,.0276,2.6661c.72,2.9709,4.22.1975,5.72-.2054,1.2042-.3234,2.7606.0306,3.1779,1.2055.3065.8632-.0046,2.0639.7782,2.5394a2.0413,2.0413,0,0,0,1.53-.0022,4.9625,4.9625,0,0,1,3.549.2143,2.3663,2.3663,0,0,1,1.0916,3.074,2.8633,2.8633,0,0,1-1.0306.9412c-4.18,2.5122-9.178-.3139-13.5276-.7287-4.0935-.39-8.0438.9672-12.0985,1.1232a6.7827,6.7827,0,0,1-4.991-1.5419c-1.2925-1.2377-1.68-3.5045-.4695-4.8225C202.2274,187.9081,204.5427,188.192,206.2947,187.3667Z"/>
    <path class="sapIllus_ObjectFillColor" d="M263.9157,71.1341a4.7593,4.7593,0,0,0,1.4264-1.0856c1.34-1.5112,1.7157-3.7163,3.1322-5.1559a4.6827,4.6827,0,0,1,8.0424,3.3349c.0108,1.02-1.1452,3.0131.3635,3.37,1.7592.4157,3.985-2.1423,5.3933-2.8955,1.606-.859,3.6623-1.3029,5.1967-.3216a5.6206,5.6206,0,0,1,2.0587,3.1888,14.2924,14.2924,0,0,0,.9982,3.0139c.6181,1.043,1.3085.6245,2.3111.2451a2.3715,2.3715,0,0,1,2.0013.1057,2.411,2.411,0,0,1,1.0337,2.4814c-.4956,2.8331-4.3163,4.042-6.7354,4.4454a16.8725,16.8725,0,0,1-8.989-1.07,17.27,17.27,0,0,0-4.0393-1.4079,11.0206,11.0206,0,0,0-3.5445.2615c-4.17.8082-10.4025,3.0568-14.0654-.198-1.5741-1.3988-2.129-4.0475-.7634-5.65C259.2669,71.999,261.8685,72.1787,263.9157,71.1341Z"/>
    <path class="sapIllus_NoColor" d="M84.7369,52.0775a1.5445,1.5445,0,0,0,1.7676.06,1.5729,1.5729,0,0,0,.5647-.6375,1.562,1.562,0,0,0-1.9941-2.1346,1.5711,1.5711,0,0,0-.8013.74,1.55,1.55,0,0,0-.179.7127,1.5568,1.5568,0,0,0,.6421,1.2593Z"/>
    <path class="sapIllus_StrokeDetailColor" d="M205.92,148.2069a.5445.5445,0,0,0-.7695.0175l-8.9787,9.3825a2.6338,2.6338,0,0,0-1.6609-.5993,2.6611,2.6611,0,0,0-2.6582,2.6582,2.6315,2.6315,0,0,0,.5942,1.6545A76.737,76.737,0,0,1,83.9874,52.8645a2.632,2.632,0,0,0,1.6758.6119A2.6438,2.6438,0,0,0,87.68,49.1058l9.2463-9.1177a.5442.5442,0,1,0-.7637-.7754l-9.3488,9.2189a2.5827,2.5827,0,0,0-2.5425.1318l-8.928-8.9054a.5448.5448,0,1,0-.7695.7715l8.904,8.8815A2.602,2.602,0,0,0,83.3,52.009,77.8259,77.8259,0,0,0,193.2946,162.0156a2.6015,2.6015,0,0,0,2.7229-.1635l7.758,7.78a.5449.5449,0,0,0,.7715-.77l-7.7817-7.8032a2.5778,2.5778,0,0,0,.1-2.6022l9.0722-9.48A.5435.5435,0,0,0,205.92,148.2069Z"/>
    <path class="sapIllus_AccentColor" d="M84.2738,50.1055a1.5672,1.5672,0,0,1,2.9578.7127,1.5508,1.5508,0,0,1-.1624.6819,1.5729,1.5729,0,0,1-.5647.6375,1.5715,1.5715,0,0,1-2.3762-.9986,1.5768,1.5768,0,0,1-.0335-.3208A1.55,1.55,0,0,1,84.2738,50.1055Z"/>
    <path class="sapIllus_AccentColor" d="M195.9633,160.2547a1.571,1.571,0,0,1-.74.8008,1.4918,1.4918,0,0,1-1.0632.1358,1.5744,1.5744,0,0,1-1.2173-1.5255,1.5511,1.5511,0,0,1,.186-.7255,1.5639,1.5639,0,0,1,2.8348,1.3144Z"/>
    <path class="sapIllus_Layering1" d="M133.9905,189.6417v8.869h12.008v-7.78C139.62,191.6866,135.834,190.365,133.9905,189.6417Z"/>
    <path class="sapIllus_Layering2" d="M128.0443,97.1c-3,0-8-4-9,1s6,3,8,3,2,2,5,3,11,4,10-3S131.0443,97.1,128.0443,97.1Z"/>
    <path class="sapIllus_Layering2" d="M143.0443,44.1c3,1,5,0,6,1s1,4,3,5,7,1,9-1c2.4146-2.4145-1.0737-7.6142-2.5287-9.5543a68.0023,68.0023,0,0,0-18.4887-2.5568c-.34,0-.6739.0207-1.0123.0255C139.0862,37.417,140.15,43.1354,143.0443,44.1Z"/>
    <path class="sapIllus_Layering2" d="M200.9238,119.1458c-4,5-4,6-3,9,.7951,2.385,4.6172.5069,6.1543-.3648a67.4853,67.4853,0,0,0,2.5279-9.0345C206.0549,117.677,204.2134,115.0339,200.9238,119.1458Z"/>
    <path class="sapIllus_Layering2" d="M140.99,167.967c.107-3.2751,8.1121-3.0805,11.012-2.9721a2.9656,2.9656,0,0,0,2-1c1.9773-2.4254,7.5274-9.3608,10.0057-11.0129,3-2,4.99-1.0022,7.99-4.0022s.9948-4.9906,2.9948-7.9906,5.6053-3.0273,7.051-6.8886c2.1127-5.6424.9623-8.1083-6.0377-8.1083S167.0443,129.1,164.0443,127.1c-3.0621-2.0414-1.9568-7.2086-7.3187-6.9935a12.2831,12.2831,0,0,1-9.2341-3.6557c-2.9258-3-6.628-.3508-9.4472-.3508a8.4183,8.4183,0,0,1-7-4c-1-2-2-2-4,1s-2,4-5,0-5-7-7-8-4-1-5-3,1-5-5-5-4-4-2-7,5-5,9-1,7,3,9,1,3-4,4-8,3-10,9-11,11-1,13-4,4-9-1-14-12.5679-6.5187-18,0c-5,6-7,7-10,4-2-2-2-7,2-9,3.6878-1.8439,8.2042.4264,12-4,2.7138-3.1645,1.3126-5.2734-.5912-6.5541a68.0449,68.0449,0,0,0-55.93,45.9251,22.315,22.315,0,0,0,.5216,3.629,9.6051,9.6051,0,0,0,9,7c4,0,7,1,9,6s6.9476,7.8827,9.9476,8.8827,5.9981.9838,7.9981,5.9838,6.0239,3.8978,8.0181,4.0248c1.9958.1272,5.994-.0018,1.994,6.9982s-3.0174,9.991-1.0174,13.991a16.4617,16.4617,0,0,0,12.0038,8.9981c6,1,4.0069,8.0025,2.0069,12.0025s-4.0137,4.9984-4.0137,6.9984a16.871,16.871,0,0,0,.9752,4.5164,68.6077,68.6077,0,0,0,8.07.493c.9841,0,1.9606-.0323,2.9345-.0736C142.3678,172.5518,140.8812,171.3049,140.99,167.967Z"/>
    <path class="sapIllus_PatternHighlight" d="M113.7623,61.0757c21.6526-13.041,60.5282-7.7931,72.7831-5.6616a67.9819,67.9819,0,0,0-114.5185,49.575,68.6576,68.6576,0,0,0,.4375,7.6332C75.8542,93.4065,98.3638,70.35,113.7623,61.0757Z"/>
    <path class="sapIllus_PatternShadow" d="M140.0267,172.9717a67.9842,67.9842,0,0,0,67.89-64.4319c-4.9717,12.7237-23.5447,49.2273-74.26,53.826-16.6413,1.5088-35.3975-5.7754-45.9912-14.02A67.84,67.84,0,0,0,140.0267,172.9717Z"/>
    <path class="sapIllus_ObjectFillColor" d="M221.8728,111.9629a11.3351,11.3351,0,0,1-1.2415,1.1365c-.0256.02-.0493.0424-.0749.0626a13.7469,13.7469,0,0,1-1.3433.9217c-.0332.02-.0653.042-.0987.0619-.4685.28-.9467.5309-1.4276.7587l-.0652.0312c-.4966.233-.9921.4393-1.4809.6222l-.0014.0006-.0042.0015c-.1747.0654-.348.1292-.52.1887l-.0009,0-.0032.0011A24.9873,24.9873,0,0,1,211,116.8594l29.2333,45.6252a5.8976,5.8976,0,1,0,9.9353-6.3573Z"/>
    <path class="sapIllus_StrokeDetailColor" d="M199.1544,59.4084a24.6642,24.6642,0,1,0,24.6641,24.6641A24.6642,24.6642,0,0,0,199.1544,59.4084Zm0,48.152a23.4879,23.4879,0,1,1,23.4878-23.4879A23.4878,23.4878,0,0,1,199.1544,107.56Z"/>
    <path class="sapIllus_Layering2" d="M145.8778,198.5107H134.0693a34.0352,34.0352,0,0,0-23.5949,17.4854h58.9924A34.0271,34.0271,0,0,0,145.8778,198.5107Z"/>
    <path class="sapIllus_StrokeDetailColor" d="M268.39,216.9936h-6.786a.5046.5046,0,1,1,0-.9874h6.786a.5046.5046,0,1,1,0,.9874Z"/>
    <path class="sapIllus_StrokeDetailColor" d="M253.4376,215.9961H63.5441a.5063.5063,0,1,0,0,1.01H253.4376a.5063.5063,0,1,0,0-1.01Z"/>
    <path class="sapIllus_Layering2" d="M175.6665,84.0725a23.4165,23.4165,0,0,0,1.6063,8.5353c8.0688,4.85,18.5629,4.9635,22.5292-2.726,5.119-9.924-6.0742-19.6617-16.6635-22.9826A23.4179,23.4179,0,0,0,175.6665,84.0725Z"/>
    <path class="sapIllus_NoColor" d="M221.8728,111.9629a11.3035,11.3035,0,0,1-1.2415,1.1365c-.0253.02-.0493.0426-.0749.0626a13.7469,13.7469,0,0,1-1.3433.9217c-.033.02-.0654.042-.0987.0619-.4683.2793-.947.5314-1.4276.7587l-.0652.0312c-.4956.2321-.9928.4395-1.4809.6222l-.0056.0021c-.1747.0652-.348.1294-.52.1887l-.0041.0015A24.9873,24.9873,0,0,1,211,116.8594l29.2333,45.6252a5.8976,5.8976,0,1,0,9.9353-6.3573Z"/>
    <path class="sapIllus_Layering2" d="M127.4462,181.9507l-.048-.0044a14.15,14.15,0,0,0,6.5923,6.3849c.0471.0221.0932.0458.1405.0675a17.815,17.815,0,0,0,4.83,1.2261c.3211.0229.6414.0482.9679.0493.0177,0,.0352.0017.0529.0017.3567,0,.7068-.0274,1.0569-.0537a17.9755,17.9755,0,0,0,4.8134-1.2408c.0491-.0227.0972-.0468.146-.07a14.15,14.15,0,0,0,6.52-6.3093,79.0543,79.0543,0,0,1-12.4066.994A78.0942,78.0942,0,0,1,127.4462,181.9507Z"/>
    <path class="sapIllus_StrokeDetailColor" d="M145.8525,188.3813a17.9755,17.9755,0,0,1-4.8134,1.2408c-.35.0263-.7.0534-1.0569.0537-.0177,0-.0352-.0017-.0529-.0017-.3265-.0011-.6468-.0264-.9679-.0493a17.815,17.815,0,0,1-4.83-1.2261c-.0473-.0217-.0934-.0454-.1405-.0675v1.31c1.8435.7233,5.63,2.0449,12.008,1.0889l.001-2.42-.001,0C145.95,188.3345,145.9016,188.3586,145.8525,188.3813Z"/>
    <path class="sapIllus_ObjectFillColor" d="M222.3417,60.75a32.8936,32.8936,0,1,0,9.7044,23.3267A32.7916,32.7916,0,0,0,222.3417,60.75Zm-23.1873,47.9867a24.6642,24.6642,0,1,1,24.6641-24.6642A24.6643,24.6643,0,0,1,199.1544,108.7367Z"/>
    <path class="sapIllus_StrokeDetailColor" d="M251.1582,155.494l-29.4154-45.9162a34.119,34.119,0,0,0-22.6617-59.63c-.63,0-1.2557.02-1.8772.0537-.2028.011-.4029.0314-.6045.0459-.4189.03-.8369.0625-1.2513.1077-.2326.0253-.4627.0581-.6939.0881-.3821.05-.7631.1021-1.1413.1641-.2358.0388-.47.0821-.7039.1257q-.5572.1036-1.1078.2241-.3435.0759-.6846.158c-.3739.0906-.7445.1887-1.1135.2915-.2116.059-.4234.1169-.6331.18-.3935.1181-.7823.2459-1.17.3774-.1785.0607-.3585.1178-.5357.1813-.4621.1657-.9181.3435-1.3708.5283-.0968.04-.1958.0748-.2922.1153A34.13,34.13,0,0,0,206.88,117.2959h0l.0007,0q1.2936-.3033,2.549-.7l29.814,46.5226a7.0724,7.0724,0,0,0,11.9143-7.6238Zm-52.0771-38.4916a32.93,32.93,0,0,1-13.8623-62.8h0q.7686-.3573,1.5585-.675c.0391-.0156.0787-.0308.1177-.0464q.7251-.2893,1.4668-.5446.1155-.04.2315-.0782.6836-.23,1.3807-.43c.1108-.0318.2216-.0639.3329-.0945.4321-.12.8686-.2287,1.3078-.3308.14-.0325.28-.0664.42-.0971.414-.09.8319-.17,1.2514-.2448.164-.0292.327-.0612.4919-.0878.4046-.0659.8133-.1194,1.2227-.17.1777-.022.354-.0486.5324-.0677.4205-.0453.8448-.0766,1.27-.1059.1663-.0112.3308-.029.4978-.0378.59-.0316,1.1826-.0493,1.78-.0493a32.93,32.93,0,0,1,32.93,32.93c0,.5294-.0152,1.0552-.04,1.5785-.0081.17-.0221.339-.0329.5085-.0219.3532-.0471.7055-.08,1.0556-.0186.1963-.0411.3916-.0631.587q-.0549.4869-.1233.97c-.0282.1971-.0573.3941-.0891.59-.0523.3241-.1109.6461-.1726.967-.0356.1846-.0693.37-.1079.5532-.0763.3628-.1614.7224-.2495,1.081-.0331.1342-.062.27-.0967.4036q-.189.7284-.41,1.4435c-.04.1278-.0847.2532-.1257.38-.1128.35-.2285.6975-.3525,1.0417-.0657.1828-.1365.363-.2054.5441-.1089.2864-.22.5715-.3367.854-.08.1928-.1618.384-.2448.575q-.1758.4032-.3621.8c-.0887.19-.1775.3794-.27.5671-.1314.2676-.2688.5318-.4073.7955-.0929.1765-.1833.3547-.2793.5294-.1708.3111-.35.617-.53.922-.1063.18-.2126.359-.3221.5363-.2116.3422-.4274.6814-.6509,1.0152-.119.1775-.2438.3507-.3661.5259-.157.2247-.3141.4494-.4765.67-.1392.1891-.2823.3751-.4255.5612q-.231.3-.4681.5959-.2289.2837-.4636.5623c-.1571.1865-.3175.37-.4788.5528-.1638.1857-.3271.3715-.4951.5535-.1619.1754-.3284.3464-.4941.5183-.1741.18-.3457.3634-.5237.54-.1648.1635-.3357.3206-.5039.48q-.5318.5055-1.0852.9873c-.159.1383-.316.2784-.4776.4137-.2113.1767-.4275.3476-.6432.5193-.1627.1293-.3253.259-.4906.3854-.2223.17-.4475.3364-.6743.5008q-.2442.1771-.4923.35c-.2347.1637-.4706.3257-.71.4834-.1587.1048-.32.2063-.4807.3083-.2515.16-.5026.32-.7585.4727-.1272.0762-.2576.1476-.386.222-.6579.3813-1.3274.7445-2.013,1.0805l-.0273.0139c-.29.1421-.5862.2749-.8814.4086-.15.0681-.3.1383-.4515.2042-.2833.123-.57.24-.8573.355-.167.0669-.3341.1338-.5024.198q-.43.1644-.8665.3172c-.1695.0595-.34.1164-.511.173-.2975.0986-.5954.1958-.8966.2861-.156.0469-.3138.0891-.4708.1337-.3208.0911-.6414.1827-.9661.2643h0A32.989,32.989,0,0,1,199.0811,117.0024Zm51.88,43.5686a5.8976,5.8976,0,0,1-10.7281,1.9136L211,116.8594a24.9873,24.9873,0,0,0,4.611-1.1094l.0041-.0015c.1719-.0593.3452-.1235.52-.1887l.0056-.0021c.4881-.1827.9853-.39,1.4809-.6222l.0652-.0312c.4806-.2273.9593-.4794,1.4276-.7587.0333-.02.0657-.0416.0987-.0619a13.7469,13.7469,0,0,0,1.3433-.9217c.0256-.02.05-.0424.0749-.0626a11.3035,11.3035,0,0,0,1.2415-1.1365l28.2959,44.1644A5.8612,5.8612,0,0,1,250.9615,160.571Z"/>
    <path class="sapIllus_ObjectFillColor" d="M99.43,80.439a8.714,8.714,0,0,0-2.4814.1436c.8751-.18-.9907-4.38-1.2793-4.8751A9.642,9.642,0,0,0,91.38,71.7453c-3.3445-1.5088-6.6853-.49-9.3569,1.8191-2.5543,2.2075-4.1191,5.612-7.2313,7.154a.6592.6592,0,0,1-.42.0963.6868.6868,0,0,1-.2844-.172,9.6442,9.6442,0,0,0-5.7058-2.5079,8.9977,8.9977,0,0,0-9.0681,5.7335,9.9439,9.9439,0,0,1-.8512,2.2429c-1.654,2.556-4.235.6613-6.4695-.1543C42.8483,82.6188,38.1285,100.51,50.5782,98.983c3.4714-.4257,7.0373-1.492,10.525-1.7161a75.9961,75.9961,0,0,1,9.8793.17c7.097.4815,14.1175,1.6856,21.188,2.422,4.9234.5128,10.9559-.4458,14.0624-4.7269A9.268,9.268,0,0,0,99.43,80.439Z"/>
    <path class="sapIllus_AccentColor" d="M260.6345,19.2893c-3.8045-1.4729-5.6484-5.0437-7.0748-8.683a.5593.5593,0,0,0-.5135-.3562.6882.6882,0,0,0-.5221.3435c-1.9006,4.5224-4.724,6.8321-7.9932,9.5068l-.0776.0637a.5623.5623,0,0,0,.237.9855c2.9623.6316,7.3708,6.094,7.3708,9.1331a.5587.5587,0,0,0,1.0956.158c.958-3.2788,3.7388-8.6753,7.4756-10.1016a.5631.5631,0,0,0,.0022-1.05Z"/>
    <path class="sapIllus_AccentColor" d="M241.3939,38.7768c-2.1412-.851-3.19-2.9429-4.0051-5.0766a.571.571,0,0,0-.5234-.3724h-.0067a.5712.5712,0,0,0-.5256.3587c-1.09,2.66-2.7213,4.03-4.6109,5.616l-.0459.0391a.5989.5989,0,0,0-.1948.5939.5806.5806,0,0,0,.4365.4367c1.619.3541,4.1243,3.5392,4.1243,5.243a.5828.5828,0,0,0,.489.582.5651.5651,0,0,0,.0812.0057.5729.5729,0,0,0,.5468-.4218c.549-1.9231,2.1279-5.0829,4.2324-5.907a.5939.5939,0,0,0,.0022-1.0973Z"/>
</svg>
`,E1=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"})),S=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="128" height="128" viewBox="0 0 128 128" id="sapIllus-Spot-BeforeSearch">
    <path class="sapIllus_AccentColor" d="M111.7219,25.5662c-2.7032-1.0653-4.0145-3.653-5.029-6.29A.4258.4258,0,0,0,106.3022,19h-.0051a.4254.4254,0,0,0-.3924.2664c-1.3529,3.2782-3.3643,4.9541-5.6934,6.8946l-.054.0452a.442.442,0,0,0-.1455.44.4317.4317,0,0,0,.3259.3238c2.0547.4459,5.2344,4.4584,5.2344,6.6053a.433.433,0,0,0,.365.4315.4206.4206,0,0,0,.0607.0042.4272.4272,0,0,0,.4083-.3127c.6818-2.3766,2.66-6.2863,5.3142-7.3185a.4394.4394,0,0,0,.0016-.8139Z"/>
    <path class="sapIllus_AccentColor" d="M94.7267,41.78c-1.4341-.5859-2.1375-2.0305-2.6847-3.5041A.4115.4115,0,0,0,91.6655,38h-.0048a.4111.4111,0,0,0-.3782.266,9.48,9.48,0,0,1-3.1,3.8839l-.03.0263a.4512.4512,0,0,0-.14.44.4239.4239,0,0,0,.3141.3234c1.0576.2375,2.7592,2.4639,2.7592,3.609a.4281.4281,0,0,0,.3517.4308.4063.4063,0,0,0,.0585.0043.4143.4143,0,0,0,.3934-.3124c.3677-1.3281,1.4268-3.51,2.8369-4.0784a.4451.4451,0,0,0,.0016-.8128Z"/>
    <polygon class="sapIllus_NoColor" points="59.063 28.836 59.062 28.836 59.063 28.836 59.063 28.836"/>
    <path class="sapIllus_StrokeDetailColor" d="M30.0687,49a16.599,16.599,0,0,1,.4815-7.4287l.13-.42a.5.5,0,1,0-.9512-.3067q-.0718.219-.1377.4419a17.5953,17.5953,0,0,0-.5254,7.7735,18.2682,18.2682,0,0,0,1.8985,5.6533.5.5,0,1,0,.8808-.4727A17.281,17.281,0,0,1,30.0687,49Z"/>
    <path class="sapIllus_StrokeDetailColor" d="M30.7074,39.6243a.5.5,0,0,0,.6621-.248,16.5661,16.5661,0,0,1,.9785-1.8369.5.5,0,1,0-.8515-.5244,17.6783,17.6783,0,0,0-1.0371,1.9472A.5.5,0,0,0,30.7074,39.6243Z"/>
    <path class="sapIllus_PatternShadow" d="M67.5611,41.6163a21.3965,21.3965,0,0,0-8.4985-12.78c.0423.2961.079.5908.1065.8778a27.0961,27.0961,0,0,1-24.384,29.5606,28.7268,28.7268,0,0,1-5.3583-.0488,21.4795,21.4795,0,0,0,38.1343-17.61Z"/>
    <path class="sapIllus_BrandColorSecondary" d="M79.0359,93.8809l-.0015.001L64.0288,67.6342a27.5031,27.5031,0,1,0-40.1212-5.7376c.0709.1048.14.2081.2133.3138.12.17.2437.3358.3672.5026a25.3986,25.3986,0,0,0,4.9373,5.12A27.4452,27.4452,0,0,0,52.6378,73.192c.7224-.1625,1.4274-.36,2.1227-.5752l.4564.7986.2163.3786h0L74.889,107.8254l.0106.0148.3516.6152a4.82,4.82,0,0,0,6.5768,1.7922l.7631-.4363a4.82,4.82,0,0,0,1.7923-6.5769ZM46.6048,67.8157A21.4848,21.4848,0,1,1,68.09,46.3309,21.4848,21.4848,0,0,1,46.6048,67.8157Z"/>
    <path class="sapIllus_StrokeDetailColor" d="M54.76,72.6162l.6714,1.176s7.3005,1.4574,10.7275-2.421l-2.1312-3.7377-.36.2689a21.6468,21.6468,0,0,1-7.44,4.1914Z"/>
</svg>
`,D1=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),Y="BeforeSearch",t1="fiori",e1="V4",l1=K,a1=M;W(Y,{dialogSvg:F,sceneSvg:x,spotSvg:S,dotSvg:S,title:l1,subtitle:a1,set:t1,collection:e1});const i1="BeforeSearch",N1=Object.freeze(Object.defineProperty({__proto__:null,default:i1,dialogSvg:F,dotSvg:S,sceneSvg:x,spotSvg:S},Symbol.toStringTag,{value:"Module"}));P("@ui5/webcomponents-theming","sap_horizon",async()=>Z);P("@ui5/webcomponents-fiori","sap_horizon",async()=>G);const s1={packageName:"@ui5/webcomponents-fiori",fileName:"themes/IllustratedMessage.css.ts",content:`:host(:not([hidden])){display:block}:host{box-sizing:border-box;width:100%;height:100%;padding:1rem}.ui5-illustrated-message-root,.ui5-illustrated-message-inner,.ui5-illustrated-message-text-and-actions-container{display:flex;flex-direction:column;align-items:center;justify-content:center;height:inherit;flex-basis:content}.ui5-illustrated-message-illustration{margin:2rem 0}.ui5-illustrated-message-illustration svg{max-height:100%;max-width:100%}.ui5-illustrated-message-illustration.ui5-illustrated-message-illustration-fit-content{position:relative;width:0;padding:0 0 0 100%;height:100%;display:flex;align-items:center}.ui5-illustrated-message-illustration.ui5-illustrated-message-illustration-fit-content svg{position:absolute;height:100%;width:100%;left:0;top:0}.ui5-illustrated-message-title{text-align:center;margin-bottom:1rem;line-height:1.3;max-width:61.9375rem}.ui5-illustrated-message-subtitle{text-align:center;font-size:var(--sapFontLargeSize);font-family:var(--sapFontFamily);line-height:1.4;color:var(--sapTextColor);margin-bottom:.5rem;max-width:61.9375rem}.ui5-illustrated-message-actions{margin:1rem 0}:host([media="dialog"]) .ui5-illustrated-message-illustration{margin:1rem 0}:host([media="dialog"]) .ui5-illustrated-message-title{margin-bottom:.5rem;font-size:var(--sapFontHeader4Size);max-width:40.5625rem}:host([media="dialog"]) .ui5-illustrated-message-subtitle{margin-bottom:.5rem;font-size:var(--sapFontSize);max-width:40.5625rem}:host([media="dialog"]) .ui5-illustrated-message-actions{margin-top:.5rem;margin-bottom:1rem}:host([media="spot"]){padding:.5rem}:host([media="spot"]) .ui5-illustrated-message-illustration{margin-bottom:.5rem;margin-top:0}:host([media="spot"]) .ui5-illustrated-message-title{margin-bottom:.5rem;font-size:var(--sapFontHeader5Size);line-height:1.25rem;max-width:21.5rem}:host([media="spot"]) .ui5-illustrated-message-subtitle{font-size:var(--sapFontSize);max-width:21.5rem;margin-bottom:.5rem}:host([media="spot"]) .ui5-illustrated-message-actions{margin:.5rem 0}:host([media="dot"]){padding:.25rem;min-height:4rem}:host([media="dot"]) .ui5-illustrated-message-inner{flex-direction:row}:host([media="dot"]) .ui5-illustrated-message-illustration{margin:0 .25rem 0 0;height:2.8125rem;width:2.8125rem;align-self:baseline}:host([media="dot"]) .ui5-illustrated-message-title{margin-bottom:.25rem;font-size:var(--sapFontHeader5Size);line-height:1.25rem;max-width:12.6875rem}:host([media="dot"]) .ui5-illustrated-message-subtitle{font-size:var(--sapFontSize);max-width:12.6875rem;margin-bottom:.25rem}:host([media="dot"]) .ui5-illustrated-message-actions{margin:.25rem 0}:host([media="base"]) .ui5-illustrated-message-illustration{display:none}:host([media="base"]) .ui5-illustrated-message-title{margin-bottom:.25rem;font-size:var(--sapFontHeader5Size);line-height:1.25rem;max-width:10rem}:host([media="base"]) .ui5-illustrated-message-subtitle{font-size:var(--sapFontSize);max-width:10rem;margin-bottom:0rem}.ui5-illustrated-message-util{position:fixed;top:-9999px;left:-9999px}.sapIllus_MaskTypeAlpha{mask-type:alpha}.sapIllus_BackgroundColor{fill:var(--sapIllus_BackgroundColor)}.sapIllus_BrandColorPrimary{fill:var(--sapIllus_BrandColorPrimary)}.sapIllus_BrandColorSecondary{fill:var(--sapIllus_BrandColorSecondary)}.sapIllus_StrokeDetailColor{fill:var(--sapIllus_StrokeDetailColor)}.sapIllus_Layering1{fill:var(--sapIllus_Layering1)}.sapIllus_Layering2{fill:var(--sapIllus_Layering2)}.sapIllus_ObjectFillColor{fill:var(--sapIllus_ObjectFillColor)}.sapIllus_AccentColor{fill:var(--sapIllus_AccentColor)}.sapIllus_NoColor{fill:var(--sapIllus_NoColor)}.sapIllus_PatternShadow{fill:var(--sapIllus_PatternShadow)}.sapIllus_PatternHighlight{fill:var(--sapIllus_PatternHighlight)}.sapIllus_NoColor_Fill{fill:var(--sapIllus_NoColor)}.sapIllus_BrandColorPrimary_Fill{fill:var(--sapIllus_BrandColorPrimary)}.sapIllus_ObjectFillColor_Fill{fill:var(--sapIllus_ObjectFillColor)}
`};function o1(t,e,l){return h`<div class="ui5-illustrated-message-root"><div class="ui5-illustrated-message-inner"><div class="ui5-illustrated-message-illustration">${H(this.effectiveIllustration)}</div><div class="ui5-illustrated-message-text-and-actions-container">${this.hasTitle?r1.call(this,t,e,l):void 0}${this.hasSubtitle?d1.call(this,t,e,l):void 0}${this.hasActions?m1.call(this,t,e,l):void 0}</div></div><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="ui5-illustrated-message-util">${p1.call(this,t,e,l)}</svg></div>`}function r1(t,e,l){return h`${this.hasFormattedTitle?n1.call(this,t,e,l):c1.call(this,t,e,l)}`}function n1(t,e,l){return h`<slot name="title"></slot>`}function c1(t,e,l){return l?h`<${O("ui5-title",e,l)} level="${p(this.titleLevel)}" class="ui5-illustrated-message-title" wrapping-type="Normal">${p(this.effectiveTitleText)}</${O("ui5-title",e,l)}>`:h`<ui5-title level="${p(this.titleLevel)}" class="ui5-illustrated-message-title" wrapping-type="Normal">${p(this.effectiveTitleText)}</ui5-title>`}function d1(t,e,l){return h`<div part="subtitle" class="ui5-illustrated-message-subtitle">${this.hasFormattedSubtitle?h1.call(this,t,e,l):u1.call(this,t,e,l)}</div>`}function h1(t,e,l){return h`<slot name="subtitle"></slot>`}function u1(t,e,l){return h`${p(this.effectiveSubitleText)}`}function m1(t,e,l){return h`<div class="ui5-illustrated-message-actions"><slot></slot></div>`}function p1(t,e,l){return z`<defs><pattern id="sapIllus_PatternShadow" data-name="sapIllus_PatternShadow" width="3" height="5.5" patternUnits="userSpaceOnUse" viewBox="0 0 3 5.5"><rect class="sapIllus_NoColor sapIllus_NoColor_Fill" width="3" height="5.5" /><circle class="sapIllus_BrandColorPrimary sapIllus_BrandColorPrimary_Fill" cx="3" cy="5.5001" r="0.5" /><circle class="sapIllus_BrandColorPrimary sapIllus_BrandColorPrimary_Fill" cy="5.5001" r="0.5" /><circle class="sapIllus_BrandColorPrimary sapIllus_BrandColorPrimary_Fill" cx="1.5" cy="2.7501" r="0.5" /><circle class="sapIllus_BrandColorPrimary sapIllus_BrandColorPrimary_Fill" cx="3" cy="0.0001" r="0.5" /><circle class="sapIllus_BrandColorPrimary sapIllus_BrandColorPrimary_Fill" cy="0.0001" r="0.5" /></pattern><pattern id="sapIllus_PatternHighlight" data-name="sapIllus_PatternHighlight" width="3" height="5.5" patternTransform="translate(35.9059 309.6208)" patternUnits="userSpaceOnUse" viewBox="0 0 3 5.5"><rect class="sapIllus_NoColor sapIllus_NoColor_Fill" width="3" height="5.5" /><circle class="sapIllus_ObjectFillColor sapIllus_ObjectFillColor_Fill" cx="3.0001" cy="5.5001" r="0.5" /><circle class="sapIllus_ObjectFillColor sapIllus_ObjectFillColor_Fill" cx="0.0001" cy="5.5001" r="0.5" /><circle class="sapIllus_ObjectFillColor sapIllus_ObjectFillColor_Fill" cx="1.5001" cy="2.7501" r="0.5" /><circle class="sapIllus_ObjectFillColor sapIllus_ObjectFillColor_Fill" cx="3.0001" cy="0.0001" r="0.5" /><circle class="sapIllus_ObjectFillColor sapIllus_ObjectFillColor_Fill" cx="0.0001" cy="0.0001" r="0.5" /></pattern></defs>`}var o=function(t,e,l,r){var n=arguments.length,c=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,l):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(t,e,l,r);else for(var m=t.length-1;m>=0;m--)(s=t[m])&&(c=(n<3?s(c):n>3?s(e,l,c):s(e,l))||c);return n>3&&c&&Object.defineProperty(e,l,c),c},a;const I=t=>t.startsWith("Tnt")?t.replace("Tnt","tnt/"):t.includes("/")?t:`fiori/${t}`;let i=a=class extends L{constructor(){super(),this._handleResize=this.handleResize.bind(this),this._lastKnownOffsetWidthForMedia={},this._lastKnownOffsetHeightForMedia={},this._lastKnownMedia="base"}static async onDefine(){a.i18nBundle=await U("@ui5/webcomponents-fiori")}static get BREAKPOINTS(){return{DIALOG:681,SPOT:360,DOT:260,BASE:160}}static get BREAKPOINTS_HEIGHT(){return{DIALOG:415,SPOT:284,DOT:207,BASE:61}}static get MEDIA(){return{BASE:"base",DOT:"dot",SPOT:"spot",DIALOG:"dialog",SCENE:"scene"}}async onBeforeRendering(){let e=I(this.name),l=Q(e);this.hasAttribute("name")&&!this.isValidIllustration(e)&&(e=I(f.BeforeSearch),console.warn(`The illustration "${e}" does not exist. The default illustration "${f.BeforeSearch}" is loaded instead.`)),l===void 0&&(l=await X(e)),this.dotSvg=l.dotSvg,this.spotSvg=l.spotSvg,this.dialogSvg=l.dialogSvg,this.sceneSvg=l.sceneSvg,this.illustrationTitle=a.i18nBundle.getText(l.title),this.illustrationSubtitle=a.i18nBundle.getText(l.subtitle),this.size!==u.Auto&&this._handleCustomSize()}onEnterDOM(){E.register(this,this._handleResize)}onExitDOM(){E.deregister(this,this._handleResize)}handleResize(){if(this.size!==u.Auto){this._adjustHeightToFitContainer();return}this._applyMedia(),window.requestAnimationFrame(this._adjustHeightToFitContainer.bind(this))}_applyMedia(e){const l=this.offsetWidth,r=this.offsetHeight,n=e?r:l,c=e?a.BREAKPOINTS_HEIGHT:a.BREAKPOINTS;let s="";n<=c.BASE?s=a.MEDIA.BASE:n<=c.DOT?s=a.MEDIA.DOT:n<=c.SPOT?s=a.MEDIA.SPOT:n<=c.DIALOG?s=a.MEDIA.DIALOG:s=a.MEDIA.SCENE;const m=this._lastKnownOffsetWidthForMedia[s],B=this._lastKnownOffsetHeightForMedia[s];(!(m&&l===m&&B&&r===B)||this._lastKnownOffsetWidthForMedia[this._lastKnownMedia]===0||this._lastKnownOffsetHeightForMedia[this._lastKnownMedia]===0)&&(this.media=s,this._lastKnownOffsetWidthForMedia[s]=l,this._lastKnownOffsetHeightForMedia[s]=r,this._lastKnownMedia=s)}_setSVGAccAttrs(){const e=this.shadowRoot.querySelector(".ui5-illustrated-message-illustration svg");e&&(this.ariaLabelText?e.setAttribute("aria-label",this.ariaLabelText):e.removeAttribute("aria-label"))}_adjustHeightToFitContainer(){const e=this.shadowRoot.querySelector(".ui5-illustrated-message-illustration");e.querySelector("svg")&&(e.classList.toggle("ui5-illustrated-message-illustration-fit-content",!1),this.getDomRef().scrollHeight>this.getDomRef().offsetHeight&&(e.classList.toggle("ui5-illustrated-message-illustration-fit-content",!0),this._applyMedia(!0)))}onAfterRendering(){this._setSVGAccAttrs()}_handleCustomSize(){switch(this.size){case u.Base:this.media=a.MEDIA.BASE;return;case u.Dot:this.media=a.MEDIA.DOT;return;case u.Spot:this.media=a.MEDIA.SPOT;return;case u.Dialog:this.media=a.MEDIA.DIALOG;return;default:this.media=a.MEDIA.SCENE}}get ariaLabelText(){return y(this)}get effectiveIllustration(){switch(this.media){case a.MEDIA.DOT:return this.dotSvg;case a.MEDIA.SPOT:return this.spotSvg;case a.MEDIA.DIALOG:return this.dialogSvg;case a.MEDIA.SCENE:return this.sceneSvg;default:return""}}get hasFormattedSubtitle(){return!!this.subtitle.length}get hasFormattedTitle(){return!!this.title.length}get effectiveTitleText(){return this.titleText?this.titleText:this.illustrationTitle}get effectiveSubitleText(){return this.subtitleText?this.subtitleText:this.illustrationSubtitle}get hasTitle(){return!!(this.hasFormattedTitle||this.titleText||this.illustrationTitle)}get hasSubtitle(){return!!(this.hasFormattedSubtitle||this.subtitleText||this.illustrationSubtitle)}get hasActions(){return!!this.actions.length&&this.media!==a.MEDIA.BASE}isValidIllustration(e){return e=e.startsWith("tnt/")?e.replace("tnt/","Tnt"):e.replace("fiori/",""),e in f}};o([d({type:String,defaultValue:f.BeforeSearch})],i.prototype,"name",void 0);o([d({type:u,defaultValue:u.Auto})],i.prototype,"size",void 0);o([d()],i.prototype,"subtitleText",void 0);o([d()],i.prototype,"titleText",void 0);o([d({defaultValue:""})],i.prototype,"accessibleNameRef",void 0);o([d({type:D,defaultValue:D.H2})],i.prototype,"titleLevel",void 0);o([d({noAttribute:!0})],i.prototype,"dotSvg",void 0);o([d({noAttribute:!0})],i.prototype,"spotSvg",void 0);o([d({noAttribute:!0})],i.prototype,"sceneSvg",void 0);o([d({noAttribute:!0})],i.prototype,"dialogSvg",void 0);o([d()],i.prototype,"media",void 0);o([A({type:HTMLElement})],i.prototype,"title",void 0);o([A({type:HTMLElement})],i.prototype,"subtitle",void 0);o([A({type:HTMLElement,default:!0})],i.prototype,"actions",void 0);i=a=o([R({tag:"ui5-illustrated-message",languageAware:!0,themeAware:!0,renderer:j,styles:s1,template:o1,dependencies:[q]})],i);i.define();const S1=i,k1=Object.freeze(Object.defineProperty({__proto__:null,default:S1},Symbol.toStringTag,{value:"Module"}));export{N1 as B,f as I,B1 as a,S1 as b,E1 as c,D1 as d,k1 as e,W as r,O1 as s};
