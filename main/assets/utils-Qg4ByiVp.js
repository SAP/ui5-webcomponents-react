import{f as m}from"./index-jRCnJyDX.js";import{r as c}from"./index-OjgoNOWw.js";const h="1.0.0",b="",f=[{kind:"javascript-module",path:"dist/fcl-utils/FCLLayout.js",declarations:[],exports:[]},{kind:"javascript-module",path:"dist/features/CoPilotAnimation.js",declarations:[],exports:[]},{kind:"javascript-module",path:"dist/illustrations/AllIllustrations.js",declarations:[],exports:[]},{kind:"javascript-module",path:"dist/types/BarDesign.js",declarations:[{kind:"enum",name:"BarDesign",description:"Different types of Bar design",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"Default type",default:"Header",name:"Header",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Subheader type",default:"Subheader",name:"Subheader",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Footer type",default:"Footer",name:"Footer",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Floating Footer type - there is visible border on all sides",default:"FloatingFooter",name:"FloatingFooter",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"BarDesign",module:"dist/types/BarDesign.js"}}]},{kind:"javascript-module",path:"dist/types/FCLLayout.js",declarations:[{kind:"enum",name:"FCLLayout",description:"Different types of FCLLayout.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"The layout will display 1 column.",default:"OneColumn",name:"OneColumn",readonly:!0},{kind:"field",static:!0,privacy:"public",description:`
Desktop: 67 - 33 - -- Start (expanded) and Mid columns are displayed
Tablet:  67 - 33 - -- Start (expanded) and Mid columns are displayed
Phone:   -- 100 --  only the Mid column is displayed

Use to display both a list and a detail page when the user should focus on the list page.`,default:"TwoColumnsStartExpanded",name:"TwoColumnsStartExpanded",readonly:!0},{kind:"field",static:!0,privacy:"public",description:`Desktop: 33 - 67 - --  Start and Mid (expanded) columns are displayed
Tablet:  33 - 67 - --  Start and Mid (expanded) columns are displayed
Phone:   -- 100 --   only the Mid column is displayed

Use to display both a list and a detail page when the user should focus on the detail page.`,default:"TwoColumnsMidExpanded",name:"TwoColumnsMidExpanded",readonly:!0},{kind:"field",static:!0,privacy:"public",description:`Desktop: 25 - 50 - 25 Start, Mid (expanded) and End columns are displayed
Tablet:  0 - 67 - 33  Mid (expanded) and End columns are displayed, Start is accessible by a layout arrow
Phone:   -- -- 100  only the End column is displayed

Use to display all three pages (list, detail, detail-detail) when the user should focus on the detail.`,default:"ThreeColumnsMidExpanded",name:"ThreeColumnsMidExpanded",readonly:!0},{kind:"field",static:!0,privacy:"public",description:`Desktop: 25 - 25 - 50 Start, Mid and End (expanded) columns are displayed
Tablet:  0 - 33 - 67  Mid and End (expanded) columns are displayed, Start is accessible by layout arrows
Phone:   -- -- 100  (only the End column is displayed)

Use to display all three pages (list, detail, detail-detail) when the user should focus on the detail-detail.`,default:"ThreeColumnsEndExpanded",name:"ThreeColumnsEndExpanded",readonly:!0},{kind:"field",static:!0,privacy:"public",description:`Desktop: 67 - 33 - 0  Start (expanded) and Mid columns are displayed, End is accessible by layout arrows
Tablet:  67 - 33 - 0  Start (expanded) and Mid columns are displayed, End is accessible by layout arrows
Phone:   -- -- 100  only the End column is displayed

Use to display the list and detail pages when the user should focus on the list.
The detail-detail is still loaded and easily accessible with layout arrows.`,default:"ThreeColumnsStartExpandedEndHidden",name:"ThreeColumnsStartExpandedEndHidden",readonly:!0},{kind:"field",static:!0,privacy:"public",description:`Desktop: 33 - 67 - 0  Start and Mid (expanded) columns are displayed, End is accessible by a layout arrow
Tablet:  33 - 67 - 0  Start and Mid (expanded) columns are displayed, End is accessible by a layout arrow
Phone:   -- -- 100  only the End column is displayed

Use to display the list and detail pages when the user should focus on the detail.
The detail-detail is still loaded and easily accessible with a layout arrow.`,default:"ThreeColumnsMidExpandedEndHidden",name:"ThreeColumnsMidExpandedEndHidden",readonly:!0},{kind:"field",static:!0,privacy:"public",description:`Desktop: -- 100 --  only the Mid column is displayed
Tablet:  -- 100 --  only the Mid column is displayed
Phone:   -- 100 --  only the Mid column is displayed

Use to display a detail page only, when the user should focus entirely on it.`,default:"MidColumnFullScreen",name:"MidColumnFullScreen",readonly:!0},{kind:"field",static:!0,privacy:"public",description:`Desktop: -- -- 100  only the End column is displayed
Tablet:  -- -- 100  only the End column is displayed
Phone:   -- -- 100  only the End column is displayed

Use to display a detail-detail page only, when the user should focus entirely on it.`,default:"EndColumnFullScreen",name:"EndColumnFullScreen",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"FCLLayout",module:"dist/types/FCLLayout.js"}}]},{kind:"javascript-module",path:"dist/types/IllustrationMessageSize.js",declarations:[{kind:"enum",name:"IllustrationMessageSize",description:"Different types of IllustrationMessageSize.",_ui5privacy:"public",_ui5since:"1.5.0",members:[{kind:"field",static:!0,privacy:"public",description:`Automatically decides the <code>Illustration</code> size (<code>Base</code>, <code>Spot</code>,
<code>Dialog</code>, or <code>Scene</code>) depending on the <code>IllustratedMessage</code> container width.

<b>Note:</b> <code>Auto</code> is the only option where the illustration size is changed according to
the available container width. If any other <code>IllustratedMessageSize</code> is chosen, it remains
until changed by the app developer.`,default:"Auto",name:"Auto",readonly:!0},{kind:"field",static:!0,privacy:"public",description:`Base <code>Illustration</code> size (XS breakpoint). Suitable for cards (two columns).

<b>Note:</b> When <code>Base</code> is in use, no illustration is displayed.`,default:"Base",name:"Base",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Spot <code>Illustration</code> size (S breakpoint). Suitable for cards (four columns).",default:"Spot",name:"Spot",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Dialog <code>Illustration</code> size (M breakpoint). Suitable for dialogs.",default:"Dialog",name:"Dialog",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Scene <code>Illustration</code> size (L breakpoint). Suitable for a <code>Page</code> or a table.",default:"Scene",name:"Scene",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"IllustrationMessageSize",module:"dist/types/IllustrationMessageSize.js"}}]},{kind:"javascript-module",path:"dist/types/IllustrationMessageType.js",declarations:[{kind:"enum",name:"IllustrationMessageType",description:"Different illustration types of Illustrated Message.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:'"Before Search" illustration type.',default:"BeforeSearch",name:"BeforeSearch",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"New Mail" illustration type.',default:"NewMail",name:"NewMail",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"No Activities" illustration type.',default:"NoActivities",name:"NoActivities",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"No Columns Set" illustration type.',default:"NoColumnsSet",name:"NoColumnsSet",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"No Data" illustration type.',default:"NoData",name:"NoData",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"No Email" illustration type.',default:"NoMail",name:"NoMail",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"No Email v1" illustration type.',default:"NoMail_v1",name:"NoMail_v1",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"No Entries" illustration type.',default:"NoEntries",name:"NoEntries",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"No Notifications" illustration type.',default:"NoNotifications",name:"NoNotifications",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"No Saved Items" illustration type.',default:"NoSavedItems",name:"NoSavedItems",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"No Saved Items v1" illustration type.',default:"NoSavedItems_v1",name:"NoSavedItems_v1",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"No Search Results" illustration type.',default:"NoSearchResults",name:"NoSearchResults",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"No Tasks" illustration type.',default:"NoTasks",name:"NoTasks",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"No Tasks v1" illustration type.',default:"NoTasks_v1",name:"NoTasks_v1",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"No Dimensions Set" illustration type.',default:"NoDimensionsSet",name:"NoDimensionsSet",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"Unable To Load" illustration type.',default:"UnableToLoad",name:"UnableToLoad",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"Unable To Load Image" illustration type.',default:"UnableToLoadImage",name:"UnableToLoadImage",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"Unable To Upload" illustration type.',default:"UnableToUpload",name:"UnableToUpload",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"Upload To Cloud" illustration type.',default:"UploadToCloud",name:"UploadToCloud",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"Add Column" illustration type.',default:"AddColumn",name:"AddColumn",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"Add People" illustration type.',default:"AddPeople",name:"AddPeople",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"Add Dimensions" illustration type.',default:"AddDimensions",name:"AddDimensions",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"Balloon Sky" illustration type.',default:"BalloonSky",name:"BalloonSky",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"Connection" illustration type.',default:"Connection",name:"Connection",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"Empty Calendar" illustration type.',default:"EmptyCalendar",name:"EmptyCalendar",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"Empty List" illustration type.',default:"EmptyList",name:"EmptyList",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"Empty Planning Calendar" illustration type.',default:"EmptyPlanningCalendar",name:"EmptyPlanningCalendar",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"Error Screen" illustration type.',default:"ErrorScreen",name:"ErrorScreen",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"Filter Table" illustration type.',default:"FilterTable",name:"FilterTable",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"Group Table" illustration type.',default:"GroupTable",name:"GroupTable",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"No Filter Results" illustration type.',default:"NoFilterResults",name:"NoFilterResults",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"Page Not Found" illustration type.',default:"PageNotFound",name:"PageNotFound",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"Reload Screen" illustration type.',default:"ReloadScreen",name:"ReloadScreen",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"Resize Column" illustration type.',default:"ResizeColumn",name:"ResizeColumn",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"Search Earth" illustration type.',default:"SearchEarth",name:"SearchEarth",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"Search Folder" illustration type.',default:"SearchFolder",name:"SearchFolder",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"Sign Out" illustration type.',default:"SignOut",name:"SignOut",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"Simple Balloon" illustration type.',default:"SimpleBalloon",name:"SimpleBalloon",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"Simple Bell" illustration type.',default:"SimpleBell",name:"SimpleBell",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"Simple Calendar" illustration type.',default:"SimpleCalendar",name:"SimpleCalendar",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"Simple CheckMark" illustration type.',default:"SimpleCheckMark",name:"SimpleCheckMark",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"Simple Connection" illustration type.',default:"SimpleConnection",name:"SimpleConnection",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"Simple Empty Doc" illustration type.',default:"SimpleEmptyDoc",name:"SimpleEmptyDoc",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"Simple Empty List" illustration type.',default:"SimpleEmptyList",name:"SimpleEmptyList",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"Simple Error" illustration type.',default:"SimpleError",name:"SimpleError",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"Simple Magnifier" illustration type.',default:"SimpleMagnifier",name:"SimpleMagnifier",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"Simple Mail" illustration type.',default:"SimpleMail",name:"SimpleMail",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"Simple No Saved Items" illustration type.',default:"SimpleNoSavedItems",name:"SimpleNoSavedItems",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"Simple Not Found Magnifier" illustration type.',default:"SimpleNotFoundMagnifier",name:"SimpleNotFoundMagnifier",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"Simple Reload" illustration type.',default:"SimpleReload",name:"SimpleReload",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"Simple Task" illustration type.',default:"SimpleTask",name:"SimpleTask",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"Sleeping Bell" illustration type.',default:"SleepingBell",name:"SleepingBell",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"Sort Column" illustration type.',default:"SortColumn",name:"SortColumn",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"Success Balloon" illustration type.',default:"SuccessBalloon",name:"SuccessBalloon",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"Success CheckMark" illustration type.',default:"SuccessCheckMark",name:"SuccessCheckMark",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"Success HighFive" illustration type.',default:"SuccessHighFive",name:"SuccessHighFive",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"Success Screen" illustration type.',default:"SuccessScreen",name:"SuccessScreen",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"Survey" illustration type.',default:"Survey",name:"Survey",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"Tent" illustration type.',default:"Tent",name:"Tent",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"Upload Collection" illustration type.',default:"UploadCollection",name:"UploadCollection",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntAvatar" illustration type.',default:"TntAvatar",name:"TntAvatar",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntCalculator" illustration type.',default:"TntCalculator",name:"TntCalculator",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntChartArea" illustration type.',default:"TntChartArea",name:"TntChartArea",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntChartArea2" illustration type.',default:"TntChartArea2",name:"TntChartArea2",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntChartBar" illustration type.',default:"TntChartBar",name:"TntChartBar",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntChartBPMNFlow" illustration type.',default:"TntChartBPMNFlow",name:"TntChartBPMNFlow",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntChartBullet" illustration type.',default:"TntChartBullet",name:"TntChartBullet",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntChartDoughnut" illustration type.',default:"TntChartDoughnut",name:"TntChartDoughnut",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntChartFlow" illustration type.',default:"TntChartFlow",name:"TntChartFlow",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntChartGantt" illustration type.',default:"TntChartGantt",name:"TntChartGantt",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntChartOrg" illustration type.',default:"TntChartOrg",name:"TntChartOrg",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntChartPie" illustration type.',default:"TntChartPie",name:"TntChartPie",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntCodePlaceholder" illustration type.',default:"TntCodePlaceholder",name:"TntCodePlaceholder",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntCompany" illustration type.',default:"TntCompany",name:"TntCompany",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntCompass" illustration type.',default:"TntCompass",name:"TntCompass",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntComponents" illustration type.',default:"TntComponents",name:"TntComponents",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntDialog" illustration type.',default:"TntDialog",name:"TntDialog",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntExternalLink" illustration type.',default:"TntExternalLink",name:"TntExternalLink",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntFaceID" illustration type.',default:"TntFaceID",name:"TntFaceID",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntFingerprint" illustration type.',default:"TntFingerprint",name:"TntFingerprint",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntHandshake" illustration type.',default:"TntHandshake",name:"TntHandshake",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntHelp" illustration type.',default:"TntHelp",name:"TntHelp",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntLock" illustration type.',default:"TntLock",name:"TntLock",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntMission" illustration type.',default:"TntMission",name:"TntMission",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntMissionFailed" illustration type.',default:"TntMissionFailed",name:"TntMissionFailed",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntNoApplications" illustration type.',default:"TntNoApplications",name:"TntNoApplications",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntNoFlows" illustration type.',default:"TntNoFlows",name:"TntNoFlows",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntNoUsers" illustration type.',default:"TntNoUsers",name:"TntNoUsers",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntRadar" illustration type.',default:"TntRadar",name:"TntRadar",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntRoadMap" illustration type.',default:"TntRoadMap",name:"TntRoadMap",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntSecrets" illustration type.',default:"TntSecrets",name:"TntSecrets",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntServices" illustration type.',default:"TntServices",name:"TntServices",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntSessionExpired" illustration type.',default:"TntSessionExpired",name:"TntSessionExpired",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntSessionExpiring" illustration type.',default:"TntSessionExpiring",name:"TntSessionExpiring",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntSettings" illustration type.',default:"TntSettings",name:"TntSettings",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntSuccess" illustration type.',default:"TntSuccess",name:"TntSuccess",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntSuccessfulAuth" illustration type.',default:"TntSuccessfulAuth",name:"TntSuccessfulAuth",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntSystems" illustration type.',default:"TntSystems",name:"TntSystems",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntTeams" illustration type.',default:"TntTeams",name:"TntTeams",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntTools" illustration type.',default:"TntTools",name:"TntTools",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntTutorials" illustration type.',default:"TntTutorials",name:"TntTutorials",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntUnableToLoad" illustration type.',default:"TntUnableToLoad",name:"TntUnableToLoad",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntUnlock" illustration type.',default:"TntUnlock",name:"TntUnlock",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntUnsuccessfulAuth" illustration type.',default:"TntUnsuccessfulAuth",name:"TntUnsuccessfulAuth",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'"TntUser2" illustration type.',default:"TntUser2",name:"TntUser2",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"IllustrationMessageType",module:"dist/types/IllustrationMessageType.js"}}]},{kind:"javascript-module",path:"dist/types/MediaGalleryItemLayout.js",declarations:[{kind:"enum",name:"MediaGalleryItemLayout",description:"Defines the layout of the content displayed in the <code>ui5-media-gallery-item</code>.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:`Recommended to use when the item contains an image.<br>
When a thumbnail is selected, it makes the corresponding enlarged content appear in a square display area.`,default:"Square",name:"Square",readonly:!0},{kind:"field",static:!0,privacy:"public",description:`Recommended to use when the item contains video content.<br>
When a thumbnail is selected, it makes the corresponding enlarged content appear in a wide display area
(stretched to fill all of the available width) for optimal user experiance.`,default:"Wide",name:"Wide",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"MediaGalleryItemLayout",module:"dist/types/MediaGalleryItemLayout.js"}}]},{kind:"javascript-module",path:"dist/types/MediaGalleryLayout.js",declarations:[{kind:"enum",name:"MediaGalleryLayout",description:"Defines the layout type of the thumbnails list of the <code>ui5-media-gallery</code> component.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"The layout is determined automatically.",default:"Auto",name:"Auto",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Displays the layout as a vertical split between the thumbnails list and the selected image.",default:"Vertical",name:"Vertical",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Displays the layout as a horizontal split between the thumbnails list and the selected image.",default:"Horizontal",name:"Horizontal",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"MediaGalleryLayout",module:"dist/types/MediaGalleryLayout.js"}}]},{kind:"javascript-module",path:"dist/types/MediaGalleryMenuHorizontalAlign.js",declarations:[{kind:"enum",name:"MediaGalleryMenuHorizontalAlign",description:"Defines the horizontal alignment of the thumbnails menu of the <code>ui5-media-gallery</code> component.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"Displays the menu on the left side of the target.",default:"Left",name:"Left",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Displays the menu on the right side of the target.",default:"Right",name:"Right",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"MediaGalleryMenuHorizontalAlign",module:"dist/types/MediaGalleryMenuHorizontalAlign.js"}}]},{kind:"javascript-module",path:"dist/types/MediaGalleryMenuVerticalAlign.js",declarations:[{kind:"enum",name:"MediaGalleryMenuVerticalAlign",description:"Types for the vertical alignment of the thumbnails menu of the <code>ui5-media-gallery</code> component.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"Displays the menu at the top of the reference control.",default:"Top",name:"Top",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Displays the menu at the bottom of the reference control.",default:"Bottom",name:"Bottom",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"MediaGalleryMenuVerticalAlign",module:"dist/types/MediaGalleryMenuVerticalAlign.js"}}]},{kind:"javascript-module",path:"dist/types/PageBackgroundDesign.js",declarations:[{kind:"enum",name:"PageBackgroundDesign",description:"Available Page Background Design.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"Page background color when a List is set as the Page content.",default:"List",name:"List",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"A solid background color dependent on the theme.",default:"Solid",name:"Solid",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Transparent background for the page.",default:"Transparent",name:"Transparent",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"PageBackgroundDesign",module:"dist/types/PageBackgroundDesign.js"}}]},{kind:"javascript-module",path:"dist/types/SideContentFallDown.js",declarations:[{kind:"enum",name:"SideContentFallDown",description:"SideContent FallDown options.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"Side content falls down on breakpoints below XL",default:"BelowXL",name:"BelowXL",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Side content falls down on breakpoints below L",default:"BelowL",name:"BelowL",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Side content falls down on breakpoints below M",default:"BelowM",name:"BelowM",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Side content falls down on breakpoint M and the minimum width for the side content",default:"OnMinimumWidth",name:"OnMinimumWidth",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"SideContentFallDown",module:"dist/types/SideContentFallDown.js"}}]},{kind:"javascript-module",path:"dist/types/SideContentPosition.js",declarations:[{kind:"enum",name:"SideContentPosition",description:"Side Content position options.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:`The side content is on the right side of the main container
in left-to-right mode and on the left side in right-to-left mode.`,default:"End",name:"End",readonly:!0},{kind:"field",static:!0,privacy:"public",description:`The side content is on the left side of the main container
in left-to-right mode and on the right side in right-to-left mode.`,default:"Start",name:"Start",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"SideContentPosition",module:"dist/types/SideContentPosition.js"}}]},{kind:"javascript-module",path:"dist/types/SideContentVisibility.js",declarations:[{kind:"enum",name:"SideContentVisibility",description:"Side Content visibility options.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"Show the side content on any breakpoint",default:"AlwaysShow",name:"AlwaysShow",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Show the side content on XL breakpoint",default:"ShowAboveL",name:"ShowAboveL",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Show the side content on L and XL breakpoints",default:"ShowAboveM",name:"ShowAboveM",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Show the side content on M, L and XL breakpoints",default:"ShowAboveS",name:"ShowAboveS",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Don't show the side content on any breakpoints",default:"NeverShow",name:"NeverShow",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"SideContentVisibility",module:"dist/types/SideContentVisibility.js"}}]},{kind:"javascript-module",path:"dist/types/TimelineLayout.js",declarations:[{kind:"enum",name:"TimelineLayout",description:"Available Timeline layout orientation",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:`Vertical layout
Default type`,default:"Vertical",name:"Vertical",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Horizontal layout",default:"Horizontal",name:"Horizontal",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"TimelineLayout",module:"dist/types/TimelineLayout.js"}}]},{kind:"javascript-module",path:"dist/types/UploadCollectionDnDMode.js",declarations:[],exports:[{kind:"js",name:"default",declaration:{name:"UploadCollectionDnDOverlayMode",module:"dist/types/UploadCollectionDnDMode.js"}}]},{kind:"javascript-module",path:"dist/types/UploadState.js",declarations:[{kind:"enum",name:"UploadState",description:"Different types of UploadState.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"The file has been uploaded successfully.",default:"Complete",name:"Complete",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"The file cannot be uploaded due to an error.",default:"Error",name:"Error",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"The file is awaiting an explicit command to start being uploaded.",default:"Ready",name:"Ready",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"The file is currently being uploaded.",default:"Uploading",name:"Uploading",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"UploadState",module:"dist/types/UploadState.js"}}]},{kind:"javascript-module",path:"dist/types/ViewSettingsDialogMode.js",declarations:[{kind:"enum",name:"ViewSettingsDialogMode",description:"Different types of Bar.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",_ui5since:"1.0.0-rc.16",description:"Default type",default:"Sort",name:"Sort",readonly:!0},{kind:"field",static:!0,privacy:"public",_ui5since:"1.0.0-rc.16",description:"Filter type",default:"Filter",name:"Filter",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"ViewSettingsDialogMode",module:"dist/types/ViewSettingsDialogMode.js"}}]},{kind:"javascript-module",path:"dist/types/WizardContentLayout.js",declarations:[{kind:"enum",name:"WizardContentLayout",description:"Enumeration for different content layouts of the <code>ui5-wizard</code>.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"Display the content of the <code>ui5-wizard</code> as multiple steps in a scroll section.",default:"MultipleSteps",name:"MultipleSteps",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Display the content of the <code>ui5-wizard</code> as single step.",default:"SingleStep",name:"SingleStep",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"WizardContentLayout",module:"dist/types/WizardContentLayout.js"}}]},{kind:"javascript-module",path:"dist/upload-utils/UploadCollectionBodyDnD.js",declarations:[],exports:[]},{kind:"javascript-module",path:"dist/Assets-static.js",declarations:[],exports:[]},{kind:"javascript-module",path:"dist/Assets.js",declarations:[],exports:[]},{kind:"javascript-module",path:"dist/Bar.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>
The Bar is a container which is primarily used to hold titles, buttons and input elements
and its design and functionality is the basis for page headers and footers.
The component consists of three areas to hold its content - startContent slot, default slot and endContent slot.
It has the capability to center content, such as a title, while having other components on the left and right side.

<h3>Usage</h3>
With the use of the design property, you can set the style of the Bar to appear designed like a Header, Subheader, Footer and FloatingFooter.
<br>
<b>Note:</b> Do not place a Bar inside another Bar or inside any bar-like component. Doing so may cause unpredictable behavior.

<h3>Responsive Behavior</h3>
The default slot will be centered in the available space between the startContent and the endContent areas,
therefore it might not always be centered in the entire bar.

<h3>Keyboard Handling</h3>

<h4>Fast Navigation</h4>
This component provides a build in fast navigation group which can be used via <code>F6 / Shift + F6</code> or <code> Ctrl + Alt(Option) + Down /  Ctrl + Alt(Option) + Up</code>.
In order to use this functionality, you need to import the following module:
<code>import "@ui5/webcomponents-base/dist/features/F6Navigation.js"</code>
<br><br>

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents-fiori/dist/Bar.js";</code>`,name:"Bar",cssParts:[{description:"Used to style the wrapper of the content of the component",name:"bar"}],slots:[{name:"startContent",description:"Defines the content at the start of the bar.",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"},{name:"default",description:"Defines the content in the middle of the bar.",_ui5propertyName:"middleContent",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"},{name:"endContent",description:"Defines the content at the end of the bar.",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"}],members:[{kind:"field",name:"design",type:{text:"BarDesign",references:[{name:"BarDesign",package:"@ui5/webcomponents-fiori",module:"dist/types/BarDesign.js"}]},description:"Defines the component's design.",default:'"Header"',privacy:"public",_ui5validator:"BarDesign"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-bar",customElement:!0,_ui5since:"1.0.0-rc.11",_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"Bar",module:"dist/Bar.js"}},{kind:"custom-element-definition",name:"ui5-bar",declaration:{name:"Bar",module:"dist/Bar.js"}}]},{kind:"javascript-module",path:"dist/BarcodeScannerDialog.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>BarcodeScannerDialog</code> component provides barcode scanning functionality for all devices that support the <code>MediaDevices.getUserMedia()</code> native API.
Opening the dialog launches the device camera and scans for known barcode formats.
<br>
<br>
A <code>scanSuccess</code> event fires whenever a barcode is identified
and a <code>scanError</code> event fires when the scan failed (for example, due to missing permisions).
<br>
<br>
Internally, the component  uses the zxing-js/library third party OSS.

For a list of supported barcode formats, see the <ui5-link target="_blank" href="https://github.com/zxing-js/library">zxing-js/library</ui5-link> documentation.`,name:"BarcodeScannerDialog",members:[{kind:"method",name:"show",return:{type:{text:"void"}},description:"Shows a dialog with the camera videostream. Starts a scan session.",privacy:"public"},{kind:"method",name:"close",return:{type:{text:"void"}},description:"Closes the dialog and the scan session.",privacy:"public"}],events:[{name:"scan-success",_ui5privacy:"public",type:{text:"CustomEvent<BarcodeScannerDialogScanSuccessEventDetail>",references:[{name:"BarcodeScannerDialogScanSuccessEventDetail",package:"@ui5/webcomponents-fiori",module:"dist/BarcodeScannerDialog.js"}]},description:"Fires when the scan is completed successfuuly.",_ui5parameters:[{type:{text:"string"},name:"text",_ui5privacy:"public",description:"the scan result as string"},{type:{text:"Object"},name:"rawBytes",_ui5privacy:"public",description:"the scan result as a Uint8Array"}]},{name:"scan-error",_ui5privacy:"public",type:{text:"CustomEvent<BarcodeScannerDialogScanErrorEventDetail>",references:[{name:"BarcodeScannerDialogScanErrorEventDetail",package:"@ui5/webcomponents-fiori",module:"dist/BarcodeScannerDialog.js"}]},description:"Fires when the scan fails with error.",_ui5parameters:[{type:{text:"string"},name:"message",_ui5privacy:"public",description:"the error message"}]}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-barcode-scanner-dialog",customElement:!0,_ui5since:"1.0.0-rc.15",_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"BarcodeScannerDialog",module:"dist/BarcodeScannerDialog.js"}},{kind:"custom-element-definition",name:"ui5-barcode-scanner-dialog",declaration:{name:"BarcodeScannerDialog",module:"dist/BarcodeScannerDialog.js"}}]},{kind:"javascript-module",path:"dist/DynamicSideContent.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The DynamicSideContent (<code>ui5-dynamic-side-content</code>) is a layout component that allows additional content
to be displayed in a way that flexibly adapts to different screen sizes. The side
content appears in a container next to or directly below the main content
(it doesn't overlay). When the side content is triggered, the main content becomes
narrower (if appearing side-by-side). The side content contains a separate scrollbar
when appearing next to the main content.


<h3>Usage</h3>

<i>When to use?</i>

Use this component if you want to display relevant information that is not critical
for users to complete a task. Users should have access to all the key functions and
critical information in the app even if they do not see the side content. This is
important because on smaller screen sizes it may be difficult to display the side
content in a way that is easily accessible for the user.

<i>When not to use?</i>

Don't use it if you want to display navigation or critical information that prevents
users from completing a task when they have no access to the side content.


<h3>Responsive Behavior</h3>

Screen width > 1440px

<ul><li>Main vs. side content ratio is 75 vs. 25 percent (with a minimum of 320px
each).</li>
<li>If the application defines a trigger, the side content can be hidden.</li></ul>

Screen width <= 1440px and > 1024px

<ul><li>Main vs. side content ratio is 66.666 vs. 33.333 percent (with a minimum of
320px each). If the side content width falls below 320 px, it automatically slides
under the main content, unless the app development team specifies that it should
disappear.</li></ul>

Screen width <= 1024px and > 720px

<ul><li>The side content ratio is fixed to 340px, and the main content takes the rest
of the width. Only if the <code>sideContentFallDown</code> is set to <code>OnMinimumWidth</code>
and screen width is <= 960px and > 720px the side content falls below the main content.</li></ul>

Screen width <= 720px (for example on a mobile device)

<ul><li>In this case, the side content automatically disappears from the screen (unless
specified to stay under the content by setting of <code>sideContentVisibility</code>
property to <code>AlwaysShow</code>) and can be triggered from a pre-set trigger
(specified within the app). When the side content is triggered, it replaces the main
content. We recommend that you always place the trigger for the side content in the
same location, such as in the app footer.</li></ul>

A special case allows switching the comparison mode between the main and side content.
In this case, the screen is split into 50:50 percent for main vs. side content. The
responsive behavior of the equal split is the same as in the standard view - the
side content disappears on screen widths of less than 720 px and can only be
viewed by triggering it.

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents-fiori/dist/DynamicSideContent";</code>`,name:"DynamicSideContent",slots:[{description:"Defines the main content.",name:"default",_ui5privacy:"public",_ui5type:{text:"Array<HTMLElement>"}},{name:"sideContent",description:"Defines the side content.",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"}],members:[{kind:"field",name:"hideMainContent",type:{text:"boolean"},description:"Defines the visibility of the main content.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"hideSideContent",type:{text:"boolean"},description:"Defines the visibility of the side content.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"sideContentPosition",type:{text:"SideContentPosition",references:[{name:"SideContentPosition",package:"@ui5/webcomponents-fiori",module:"dist/types/SideContentPosition.js"}]},description:`Defines whether the side content is positioned before the main content (left side
in LTR mode), or after the the main content (right side in LTR mode).

<br><br>
<b>The available values are:</b>

<ul>
<li><code>Start</code></li>
<li><code>End</code></li>
</ul>`,default:'"End"',privacy:"public",_ui5validator:"SideContentPosition"},{kind:"field",name:"sideContentVisibility",type:{text:"SideContentVisibility",references:[{name:"SideContentVisibility",package:"@ui5/webcomponents-fiori",module:"dist/types/SideContentVisibility.js"}]},description:`Defines on which breakpoints the side content is visible.

<br><br>
<b>The available values are:</b>

<ul>
<li><code>AlwaysShow</code></li>
<li><code>ShowAboveL</code></li>
<li><code>ShowAboveM</code></li>
<li><code>ShowAboveS</code></li>
<li><code>NeverShow</code></li>
</ul>`,default:'"ShowAboveS"',privacy:"public",_ui5validator:"SideContentVisibility"},{kind:"field",name:"sideContentFallDown",type:{text:"SideContentFallDown",references:[{name:"SideContentFallDown",package:"@ui5/webcomponents-fiori",module:"dist/types/SideContentFallDown.js"}]},description:`Defines on which breakpoints the side content falls down below the main content.

<br><br>
<b>The available values are:</b>

<ul>
<li><code>BelowXL</code></li>
<li><code>BelowL</code></li>
<li><code>BelowM</code></li>
<li><code>OnMinimumWidth</code></li>
</ul>`,default:'"OnMinimumWidth"',privacy:"public",_ui5validator:"SideContentFallDown"},{kind:"field",name:"equalSplit",type:{text:"boolean"},description:`Defines whether the component is in equal split mode. In this mode, the side and
the main content take 50:50 percent of the container on all screen sizes
except for phone, where the main and side contents are switching visibility
using the toggle method.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"method",name:"toggleContents",return:{type:{text:"void"}},description:"Toggles visibility of main and side contents on S screen size (mobile device).",privacy:"public"}],events:[{name:"layout-change",_ui5privacy:"public",type:{text:"CustomEvent<DynamicSideContentLayoutChangeEventDetail>",references:[{name:"DynamicSideContentLayoutChangeEventDetail",package:"@ui5/webcomponents-fiori",module:"dist/DynamicSideContent.js"}]},description:"Fires when the current breakpoint has been changed.",_ui5parameters:[{type:{text:"string"},name:"currentBreakpoint",_ui5privacy:"public",description:"the current breakpoint."},{type:{text:"string"},name:"previousBreakpoint",_ui5privacy:"public",description:"the breakpoint that was active before change to current breakpoint."},{type:{text:"boolean"},name:"mainContentVisible",_ui5privacy:"public",description:"visibility of the main content."},{type:{text:"boolean"},name:"sideContentVisible",_ui5privacy:"public",description:"visibility of the side content."}]}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-dynamic-side-content",customElement:!0,_ui5since:"1.1.0",_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"DynamicSideContent",module:"dist/DynamicSideContent.js"}},{kind:"custom-element-definition",name:"ui5-dynamic-side-content",declaration:{name:"DynamicSideContent",module:"dist/DynamicSideContent.js"}}]},{kind:"javascript-module",path:"dist/FilterItem.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

<h3>Usage</h3>

For the <code>ui5-filter-item</code>
<h3>ES6 Module Import</h3>

<code>import @ui5/webcomponents-fiori/dist/FilterItem.js";</code>`,name:"FilterItem",slots:[{name:"values",description:"Defines the <code>values</code> list.",_ui5type:{text:"Array<FilterItemOption>",references:[{name:"FilterItemOption",package:"@ui5/webcomponents-fiori",module:"dist/FilterItemOption.js"}]},_ui5privacy:"public"}],members:[{kind:"field",name:"text",type:{text:"string"},description:"Defines the text of the component.",default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"additionalText",type:{text:"string"},description:"Defines the additional text of the component.",default:'""',privacy:"public",_ui5validator:"String"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-filter-item",customElement:!0,_ui5since:"1.0.0-rc.16",_ui5privacy:"public",_ui5abstract:!0}],exports:[{kind:"js",name:"default",declaration:{name:"FilterItem",module:"dist/FilterItem.js"}},{kind:"custom-element-definition",name:"ui5-filter-item",declaration:{name:"FilterItem",module:"dist/FilterItem.js"}}]},{kind:"javascript-module",path:"dist/FilterItemOption.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>


<h3>Usage</h3>

For the <code>ui5-filter-item-option</code>
<h3>ES6 Module Import</h3>

<code>import @ui5/webcomponents-fiori/dist/FilterItemOption.js";</code>`,name:"FilterItemOption",members:[{kind:"field",name:"text",type:{text:"string"},description:"Defines the text of the component.",default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"selected",type:{text:"boolean"},description:"Defines if the component is selected.",default:"false",privacy:"public",_ui5validator:"Boolean"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-filter-item-option",customElement:!0,_ui5since:"1.0.0-rc.16",_ui5privacy:"public",_ui5abstract:!0}],exports:[{kind:"js",name:"default",declaration:{name:"FilterItemOption",module:"dist/FilterItemOption.js"}},{kind:"custom-element-definition",name:"ui5-filter-item-option",declaration:{name:"FilterItemOption",module:"dist/FilterItemOption.js"}}]},{kind:"javascript-module",path:"dist/FlexibleColumnLayout.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>FlexibleColumnLayout</code> implements the list-detail-detail paradigm by displaying up to three pages in separate columns.
There are several possible layouts that can be changed either with the component API, or by pressing the arrows, displayed between the columns.

<h3>Usage</h3>

Use this component for applications that need to display several logical levels of related information side by side (e.g. list of items, item, sub-item, etc.).
The Component is flexible in a sense that the application can focus the user's attention on one particular column.

<h3>Responsive Behavior</h3>

The <code>FlexibleColumnLayout</code> automatically displays the maximum possible number of columns based on <code>layout</code> property and the window size.
The component would display 1 column for window size smaller than 599px, up to two columns between 599px and 1023px,
and 3 columns for sizes bigger than 1023px.

<br><br>
<h3>Keyboard Handling</h3>

<h4>Basic Navigation</h4>
<ul>
<li>[SPACE, ENTER, RETURN] - If focus is on the layout toggle button (arrow button), once activated, it triggers the associated action (such as expand/collapse the column).</li>
<li>This component provides a build in fast navigation group which can be used via <code>F6 / Shift + F6</code> or <code> Ctrl + Alt(Option) + Down /  Ctrl + Alt(Option) + Up</code>.
In order to use this functionality, you need to import the following module:
<code>import "@ui5/webcomponents-base/dist/features/F6Navigation.js"</code></li>
</ul>

<h4>Fast Navigation</h4>
This component provides a build in fast navigation group which can be used via <code>F6 / Shift + F6</code> or <code> Ctrl + Alt(Option) + Down /  Ctrl + Alt(Option) + Up</code>.
In order to use this functionality, you need to import the following module:
<code>import "@ui5/webcomponents-base/dist/features/F6Navigation.js"</code>
<br><br>

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents-fiori/dist/FlexibleColumnLayout.js";</code>`,name:"FlexibleColumnLayout",slots:[{name:"startColumn",description:"Defines the content in the start column.",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"},{name:"midColumn",description:"Defines the content in the middle column.",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"},{name:"endColumn",description:"Defines the content in the end column.",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"}],members:[{kind:"field",name:"layout",type:{text:"FCLLayout",references:[{name:"FCLLayout",package:"@ui5/webcomponents-fiori",module:"dist/types/FCLLayout.js"}]},description:`Defines the columns layout and their proportion.
<br><br>
<b>Note:</b> The layout also depends on the screen size - one column for screens smaller than 599px,
two columns between 599px and 1023px and three columns for sizes bigger than 1023px.
<br><br>
<b>For example:</b> layout=<code>TwoColumnsStartExpanded</code> means the layout will display up to two columns
in 67%/33% proportion.`,default:'"OneColumn"',privacy:"public",_ui5validator:"FCLLayout"},{kind:"field",name:"hideArrows",type:{text:"boolean"},description:`Defines the visibility of the arrows,
used for expanding and shrinking the columns.`,default:"false",privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"Boolean"},{kind:"field",name:"accessibilityTexts",type:{text:"FlexibleColumnLayoutAccessibilityTexts",references:[{name:"FlexibleColumnLayoutAccessibilityTexts",package:"@ui5/webcomponents-fiori",module:"dist/FlexibleColumnLayout.js"}]},description:`An object of strings that defines several additional accessibility texts for even further customization.

It supports the following fields:
 - <code>startColumnAccessibleName</code>: the accessibility name for the <code>startColumn</code> region
 - <code>midColumnAccessibleName</code>: the accessibility name for the <code>midColumn</code> region
 - <code>endColumnAccessibleName</code>: the accessibility name for the <code>endColumn</code> region
 - <code>startArrowLeftText</code>: the text that the first arrow (between the <code>begin</code> and <code>mid</code> columns) will have when pointing to the left
 - <code>startArrowRightText</code>: the text that the first arrow (between the <code>begin</code> and <code>mid</code> columns) will have when pointing to the right
 - <code>endArrowLeftText</code>: the text that the second arrow (between the <code>mid</code> and <code>end</code> columns) will have when pointing to the left
 - <code>endArrowRightText</code>: the text that the second arrow (between the <code>mid</code> and <code>end</code> columns) will have when pointing to the right
 - <code>startArrowContainerAccessibleName</code>: the text that the first arrow container (between the <code>begin</code> and <code>mid</code> columns) will have as <code>aria-label</code>
 - <code>endArrowContainerAccessibleName</code>: the text that the second arrow container (between the <code>mid</code> and <code>end</code> columns) will have as <code>aria-label</code>`,default:"{}",privacy:"public",_ui5since:"1.0.0-rc.11",_ui5validator:"Object"},{kind:"field",name:"accessibilityRoles",type:{text:"FlexibleColumnLayoutAccessibilityRoles",references:[{name:"FlexibleColumnLayoutAccessibilityRoles",package:"@ui5/webcomponents-fiori",module:"dist/FlexibleColumnLayout.js"}]},description:`An object of strings that defines additional accessibility roles for further customization.

It supports the following fields:
 - <code>startColumnRole</code>: the accessibility role for the <code>startColumn</code>
 - <code>startArrowContainerRole</code>: the accessibility role for the first arrow container (between the <code>begin</code> and <code>mid</code> columns)
 - <code>midColumnRole</code>: the accessibility role for the <code>midColumn</code>
 - <code>endArrowContainerRole</code>: the accessibility role for the second arrow container (between the <code>mid</code> and <code>end</code> columns)
 - <code>endColumnRole</code>: the accessibility role for the <code>endColumn</code>`,default:"{}",privacy:"public",_ui5since:"1.1.0",_ui5validator:"Object"},{kind:"field",name:"columnLayout",type:{text:"FlexibleColumnLayoutColumnLayout | undefined",references:[{name:"FlexibleColumnLayoutColumnLayout",package:"@ui5/webcomponents-fiori",module:"dist/FlexibleColumnLayout.js"}]},description:`Returns the current column layout, based on both the <code>layout</code> property and the screen size.
<br><br>
<b>For example:</b> ["67%", "33%", 0], ["100%", 0, 0], ["25%", "50%", "25%"], etc,
where the numbers represents the width of the start, middle and end columns.`,default:"undefined",privacy:"public",readonly:!0},{kind:"field",name:"startColumnVisible",type:{text:"boolean"},description:"Returns if the <code>start</code> column is visible.",default:"true",privacy:"public",readonly:!0},{kind:"field",name:"midColumnVisible",type:{text:"boolean"},description:"Returns if the <code>middle</code> column is visible.",default:"false",privacy:"public",readonly:!0},{kind:"field",name:"endColumnVisible",type:{text:"boolean"},description:"Returns if the <code>end</code> column is visible.",default:"false",privacy:"public",readonly:!0},{kind:"field",name:"visibleColumns",type:{text:"number"},description:"Returns the number of currently visible columns.",default:"1",privacy:"public",readonly:!0}],events:[{name:"layout-change",_ui5privacy:"public",type:{text:"CustomEvent<FlexibleColumnLayoutLayoutChangeEventDetail>",references:[{name:"FlexibleColumnLayoutLayoutChangeEventDetail",package:"@ui5/webcomponents-fiori",module:"dist/FlexibleColumnLayout.js"}]},description:`Fired when the layout changes via user interaction by clicking the arrows
or by changing the component size due to resizing.`,_ui5parameters:[{type:{text:"FCLLayout",references:[{name:"FCLLayout",package:"@ui5/webcomponents-fiori",module:"dist/types/FCLLayout.js"}]},name:"layout",_ui5privacy:"public",description:"The current layout"},{type:{text:"array"},name:"columnLayout",_ui5privacy:"public",description:"The effective column layout, f.e [67%, 33%, 0]"},{type:{text:"boolean"},name:"startColumnVisible",_ui5privacy:"public",description:"Indicates if the start column is currently visible"},{type:{text:"boolean"},name:"midColumnVisible",_ui5privacy:"public",description:"Indicates if the middle column is currently visible"},{type:{text:"boolean"},name:"endColumnVisible",_ui5privacy:"public",description:"Indicates if the end column is currently visible"},{type:{text:"boolean"},name:"arrowsUsed",_ui5privacy:"public",description:"Indicates if the layout is changed via the arrows"},{type:{text:"boolean"},name:"resize",_ui5privacy:"public",description:"Indicates if the layout is changed via resizing"}]}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-flexible-column-layout",customElement:!0,_ui5since:"1.0.0-rc.8",_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"FlexibleColumnLayout",module:"dist/FlexibleColumnLayout.js"}},{kind:"custom-element-definition",name:"ui5-flexible-column-layout",declaration:{name:"FlexibleColumnLayout",module:"dist/FlexibleColumnLayout.js"}}]},{kind:"javascript-module",path:"dist/IllustratedMessage.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>
An IllustratedMessage is a recommended combination of a solution-oriented message, an engaging
illustration, and conversational tone to better communicate an empty or a success state than just show
a message alone.

Each illustration has default internationalised title and subtitle texts. Also they can be managed with
<code>titleText</code> and <code>subtitleText</code> properties.

To display the desired illustration, use the <code>name</code> property, where you can find the list of all available illustrations.
<br><br>
<b>Note:</b> By default the “BeforeSearch” illustration is loaded. To use other illustrations, make sure you import them in addition, for example:
<br>
<code>import "@ui5/webcomponents-fiori/dist/illustrations/NoData.js"</code>
<br>
<b>Note:</b> Illustrations starting with the “Tnt” prefix are part of another illustration set. For example to use the “TntSuccess” illustration, add the following import::
<br>
<code>import "@ui5/webcomponents-fiori/dist/illustrations/tnt/Success.js"</code>

<h3>Structure</h3>
The IllustratedMessage consists of the following elements, which are displayed below each other in the following order:
<br>
<ul>
<li>Illustration</li>
<li>Title</li>
<li>Subtitle</li>
<li>Actions</li>
</ul>

<h3>Usage</h3>
<code>ui5-illustrated-message</code> is meant to be used inside container component, for example a <code>ui5-card</code>,
a <code>ui5-dialog</code> or a <code>ui5-page</code>

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents-fiori/dist/IllustratedMessage.js";</code>`,name:"IllustratedMessage",cssParts:[{description:"Used to style the subtitle wrapper of the <code>ui5-illustrated-message</code>",name:"subtitle"}],slots:[{name:"title",description:`Defines the title of the component.
<br><br>
<b>Note:</b> Using this slot, the default title text of illustration and the value of <code>title</code> property will be overwritten.`,_ui5since:"1.7.0",_ui5type:{text:"Array<HTMLElement> & string"},_ui5privacy:"public"},{name:"subtitle",description:`Defines the subtitle of the component.
<br><br>
<b>Note:</b> Using this slot, the default subtitle text of illustration and the value of <code>subtitleText</code> property will be overwritten.`,_ui5since:"1.0.0-rc.16",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"},{name:"default",description:"Defines the component actions.",_ui5propertyName:"actions",_ui5type:{text:"Array<IButton>",references:[{name:"IButton",package:"@ui5/webcomponents",module:"dist/Button.js"}]},_ui5privacy:"public"}],members:[{kind:"field",name:"name",type:{text:"string"},description:`Defines the illustration name that will be displayed in the component.
<br>
Example:
<br>
<code>name='BeforeSearch'</code>, <code>name='UnableToUpload'</code>, etc..
<br>
<br>
<b>Note:</b> To use the TNT illustrations,
you need to set the <code>tnt</code> or <code>Tnt</code> prefix in front of the icon's name.
<br>
Example:
<br>
<code>name='tnt/Avatar'</code> or <code>name='TntAvatar'</code>.
<br>
<br>
<b>Note:</b> By default the <code>BeforeSearch</code> illustration is loaded.
When using an illustration type, other than the default, it should be loaded in addition:
<br>
<code>import "@ui5/webcomponents-fiori/dist/illustrations/NoData.js";</code>
<br>
<br>
For TNT illustrations:
<br>
<code>import "@ui5/webcomponents-fiori/dist/illustrations/tnt/SessionExpired.js";</code>`,default:'"BeforeSearch"',privacy:"public",_ui5validator:"String"},{kind:"field",name:"size",type:{text:"IllustrationMessageSize",references:[{name:"IllustrationMessageSize",package:"@ui5/webcomponents-fiori",module:"dist/types/IllustrationMessageSize.js"}]},description:`Determines which illustration breakpoint variant is used.
<br><br>

As <code>IllustratedMessage</code> adapts itself around the <code>Illustration</code>, the other
elements of the component are displayed differently on the different breakpoints/illustration sizes.`,default:'"Auto"',privacy:"public",_ui5since:"1.5.0",_ui5validator:"IllustrationMessageSize"},{kind:"field",name:"subtitleText",type:{text:"string"},description:`Defines the subtitle of the component.
<br><br>
<b>Note:</b> Using this property, the default subtitle text of illustration will be overwritten.
<br><br>
<b>Note:</b> Using <code>subtitle</code> slot, the default of this property will be overwritten.`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"titleText",type:{text:"string"},description:`Defines the title of the component.
<br><br>
<b>Note:</b> Using this property, the default title text of illustration will be overwritten.`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"accessibleNameRef",type:{text:"string"},description:"Receives id(or many ids) of the elements that label the component.",default:'""',privacy:"public",_ui5since:"1.7.0",_ui5validator:"String"},{kind:"field",name:"titleLevel",type:{text:"TitleLevel",references:[{name:"TitleLevel",package:"@ui5/webcomponents",module:"dist/types/TitleLevel.js"}]},description:`Defines the semantic level of the title.

<b>Note:</b> Used for accessibility purposes only.`,default:'"H2"',privacy:"public",_ui5since:"1.20.0",_ui5validator:"TitleLevel"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-illustrated-message",customElement:!0,_ui5since:"1.0.0-rc.15",_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"IllustratedMessage",module:"dist/IllustratedMessage.js"}},{kind:"custom-element-definition",name:"ui5-illustrated-message",declaration:{name:"IllustratedMessage",module:"dist/IllustratedMessage.js"}}]},{kind:"javascript-module",path:"dist/MediaGallery.js",declarations:[{kind:"interface",name:"IMediaGalleryItem",description:"Interface for components that can be slotted inside <code>ui5-media-gallery</code> as items.",_ui5privacy:"public"},{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-media-gallery</code> component allows the user to browse through multimedia items. Currently,
the supported items are images and videos. The items should be defined using the <code>ui5-media-gallery-item</code>
component.

The items are initially displayed as thumbnails. When the user selects a thumbnail, the corresponding item
is displayed in larger size.
<br>
The component is responsive by default and adjusts the position of the menu with respect to viewport size,
but the application is able to further customize the layout via the provided API.

<h3>Keyboard Handling</h3>
The <code>ui5-media-gallery</code> provides advanced keyboard handling.
<br>
When the thumbnails menu is focused the following keyboard
shortcuts allow the user to navigate through the thumbnail items:
<br>

<ul>
<li>[UP/DOWN] - Navigates up and down the items</li>
<li>[HOME] - Navigates to first item</li>
<li>[END] - Navigates to the last item</li>
<li>[SPACE/ENTER] - Select an item</li>
</ul>
<br>

<h3>ES6 Module Import</h3>
<code>import "@ui5/webcomponents-fiori/dist/MediaGallery";</code>
<br>
<code>import "@ui5/webcomponents-fiori/dist/MediaGalleryItem";</code>`,name:"MediaGallery",slots:[{name:"default",description:`Defines the component items.

<br><br>
<b>Note:</b> Only one selected item is allowed.

<br><br>
<b>Note:</b> Use the <code>ui5-media-gallery-item</code> component to define the desired items.`,_ui5propertyName:"items",_ui5type:{text:"Array<IMediaGalleryItem>",references:[{name:"IMediaGalleryItem",package:"@ui5/webcomponents-fiori",module:"dist/MediaGallery.js"}]},_ui5privacy:"public"}],members:[{kind:"field",name:"showAllThumbnails",type:{text:"boolean"},description:`If set to <code>true</code>, all thumbnails are rendered in a scrollable container.
If <code>false</code>, only up to five thumbnails are rendered, followed by
an overflow button that shows the count of the remaining thumbnails.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"interactiveDisplayArea",type:{text:"boolean"},description:`If enabled, a <code>display-area-click</code> event is fired
when the user clicks or taps on the display area.
<br>
The display area is the central area that contains
the enlarged content of the currently selected item.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"layout",type:{text:"MediaGalleryLayout",references:[{name:"MediaGalleryLayout",package:"@ui5/webcomponents-fiori",module:"dist/types/MediaGalleryLayout.js"}]},description:"Determines the layout of the component.",default:'"Auto"',privacy:"public",_ui5validator:"MediaGalleryLayout"},{kind:"field",name:"menuHorizontalAlign",type:{text:"MediaGalleryMenuHorizontalAlign",references:[{name:"MediaGalleryMenuHorizontalAlign",package:"@ui5/webcomponents-fiori",module:"dist/types/MediaGalleryMenuHorizontalAlign.js"}]},description:`Determines the horizontal alignment of the thumbnails menu
vs. the central display area.`,default:'"Left"',privacy:"public",_ui5validator:"MediaGalleryMenuHorizontalAlign"},{kind:"field",name:"menuVerticalAlign",type:{text:"MediaGalleryMenuVerticalAlign",references:[{name:"MediaGalleryMenuVerticalAlign",package:"@ui5/webcomponents-fiori",module:"dist/types/MediaGalleryMenuVerticalAlign.js"}]},description:`Determines the vertical alignment of the thumbnails menu
vs. the central display area.`,default:'"Bottom"',privacy:"public",_ui5validator:"MediaGalleryMenuVerticalAlign"}],events:[{name:"selection-change",_ui5privacy:"public",type:{text:"CustomEvent<MediaGallerySelectionChangeEventDetail>",references:[{name:"MediaGallerySelectionChangeEventDetail",package:"@ui5/webcomponents-fiori",module:"dist/MediaGallery.js"}]},description:"Fired when selection is changed by user interaction.",_ui5parameters:[{type:{text:"HTMLElement"},name:"item",_ui5privacy:"public",description:"the selected item."}]},{name:"overflow-click",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired when the thumbnails overflow button is clicked."},{name:"display-area-click",_ui5privacy:"public",type:{text:"CustomEvent"},description:`Fired when the display area is clicked.<br>
The display area is the central area that contains
the enlarged content of the currently selected item.`}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-media-gallery",customElement:!0,_ui5since:"1.1.0",_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"MediaGallery",module:"dist/MediaGallery.js"}},{kind:"custom-element-definition",name:"ui5-media-gallery",declaration:{name:"MediaGallery",module:"dist/MediaGallery.js"}}]},{kind:"javascript-module",path:"dist/MediaGalleryItem.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>
The <code>ui5-media-gallery-item</code> web component represents the items displayed in the
<code>ui5-media-gallery</code> web component.
<br><br>
<b>Note:</b> <code>ui5-media-gallery-item</code> is not supported when used outside of <code>ui5-media-gallery</code>.
<br><br>

<h3>Keyboard Handling</h3>
The <code>ui5-media-gallery</code> provides advanced keyboard handling.
When focused, the user can use the following keyboard
shortcuts in order to perform a navigation:
<br>
<ul>
<li>[SPACE/ENTER/RETURN] - Trigger <code>ui5-click</code> event</li>
</ul>

<h3>ES6 Module Import</h3>
<code>import "@ui5/webcomponents-fiori/dist/MediaGalleryItem.js";</code> (comes with <code>ui5-media-gallery</code>)`,name:"MediaGalleryItem",slots:[{name:"default",description:"Defines the content of the component.",_ui5propertyName:"content",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"},{name:"thumbnail",description:"Defines the content of the thumbnail.",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"}],members:[{kind:"field",name:"selected",type:{text:"boolean"},description:"Defines the selected state of the component.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"disabled",type:{text:"boolean"},description:"Defines whether the component is in disabled state.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"layout",type:{text:"MediaGalleryItemLayout",references:[{name:"MediaGalleryItemLayout",package:"@ui5/webcomponents-fiori",module:"dist/types/MediaGalleryItemLayout.js"}]},description:`Determines the layout of the item container.
<br><br>
Available options are:
<ul>
<li><code>Square</code></li>
<li><code>Wide</code></li>
</ul>`,default:'"Square"',privacy:"public",_ui5validator:"MediaGalleryItemLayout"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-media-gallery-item",customElement:!0,_ui5since:"1.1.0",_ui5privacy:"public",_ui5implements:[{name:"IMediaGalleryItem",package:"@ui5/webcomponents-fiori",module:"dist/MediaGallery.js"}]}],exports:[{kind:"js",name:"default",declaration:{name:"MediaGalleryItem",module:"dist/MediaGalleryItem.js"}},{kind:"custom-element-definition",name:"ui5-media-gallery-item",declaration:{name:"MediaGalleryItem",module:"dist/MediaGalleryItem.js"}}]},{kind:"javascript-module",path:"dist/NotificationAction.js",declarations:[{kind:"class",description:`The <code>ui5-notification-action</code> represents an abstract action,
used in the <code>ui5-li-notification</code> and the <code>ui5-li-notification-group</code> items.`,name:"NotificationAction",members:[{kind:"field",name:"text",type:{text:"string"},description:"Defines the text of the <code>ui5-notification-action</code>.",default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"disabled",type:{text:"boolean"},description:`Defines if the action is disabled.
<br><br>
<b>Note:</b> a disabled action can't be pressed or focused, and it is not in the tab chain.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"design",type:{text:"ButtonDesign",references:[{name:"ButtonDesign",package:"@ui5/webcomponents",module:"dist/types/ButtonDesign.js"}]},description:"Defines the action design.",default:'"Transparent"',privacy:"public",_ui5validator:"ButtonDesign"},{kind:"field",name:"icon",type:{text:"string"},description:`Defines the <code>icon</code> source URI.
<br><br>
<b>Note:</b>
SAP-icons font provides numerous built-in icons. To find all the available icons, see the
<ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.`,default:'""',privacy:"public",_ui5validator:"String"}],events:[{name:"click",_ui5privacy:"public",type:{text:"CustomEvent<NotificationActionClickEventDetail>",references:[{name:"NotificationActionClickEventDetail",package:"@ui5/webcomponents-fiori",module:"dist/NotificationAction.js"}]},description:"Fired, when the action is pressed."}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-notification-action",customElement:!0,_ui5privacy:"public",_ui5abstract:!0}],exports:[{kind:"js",name:"default",declaration:{name:"NotificationAction",module:"dist/NotificationAction.js"}},{kind:"custom-element-definition",name:"ui5-notification-action",declaration:{name:"NotificationAction",module:"dist/NotificationAction.js"}}]},{kind:"javascript-module",path:"dist/NotificationListGroupItem.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>
The <code>ui5-li-notification-group</code> is a special type of list item,
that unlike others can group items within self, usually <code>ui5-li-notification</code> items.
<br>

The component consists of:
<ul>
<li><code>Toggle</code> button to expand and collapse the group</li>
<li><code>Priority</code> icon to display the priority of the group</li>
<li><code>TitleText</code> to entitle the group</li>
<li>Custom actions - with the use of <code>ui5-notification-action</code></li>
<li>Items of the group</li>
</ul>

<h3>Usage</h3>
The component can be used in a standard <code>ui5-list</code>.

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/NotificationListGroupItem.js";</code>
<br>
<code>import "@ui5/webcomponents/dist/NotificationAction.js";</code> (optional)`,name:"NotificationListGroupItem",slots:[{name:"default",description:`Defines the items of the <code>ui5-li-notification-group</code>,
usually <code>ui5-li-notification</code> items.`,_ui5propertyName:"items",_ui5type:{text:"Array<NotificationListItemBase>",references:[{name:"NotificationListItemBase",package:"@ui5/webcomponents-fiori",module:"dist/NotificationListItemBase.js"}]},_ui5privacy:"public"},{name:"actions",description:`Defines the actions, displayed in the top-right area.
<br><br>
<b>Note:</b> use the <code>ui5-notification-action</code> component.`,_ui5type:{text:"Array<NotificationAction>",references:[{name:"NotificationAction",package:"@ui5/webcomponents-fiori",module:"dist/NotificationAction.js"}]},_ui5privacy:"public"}],members:[{kind:"field",name:"collapsed",type:{text:"boolean"},description:"Defines if the group is collapsed or expanded.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"showCounter",type:{text:"boolean"},description:"Defines if the items <code>counter</code> would be displayed.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"titleText",type:{text:"string"},description:"Defines the <code>titleText</code> of the item.",default:'""',privacy:"public",_ui5validator:"String",inheritedFrom:{name:"NotificationListItemBase",module:"dist/NotificationListItemBase.js"}},{kind:"field",name:"priority",type:{text:"Priority",references:[{name:"Priority",package:"@ui5/webcomponents",module:"dist/types/Priority.js"}]},description:"Defines the <code>priority</code> of the item.",default:'"None"',privacy:"public",_ui5validator:"Priority",inheritedFrom:{name:"NotificationListItemBase",module:"dist/NotificationListItemBase.js"}},{kind:"field",name:"showClose",type:{text:"boolean"},description:"Defines if the <code>close</code> button would be displayed.",default:"false",privacy:"public",_ui5validator:"Boolean",inheritedFrom:{name:"NotificationListItemBase",module:"dist/NotificationListItemBase.js"}},{kind:"field",name:"read",type:{text:"boolean"},description:`Defines if the <code>notification</code> is new or has been already read.
<br><br>
<b>Note:</b> if set to <code>false</code> the <code>titleText</code> has bold font,
if set to true - it has a normal font.`,default:"false",privacy:"public",_ui5validator:"Boolean",inheritedFrom:{name:"NotificationListItemBase",module:"dist/NotificationListItemBase.js"}},{kind:"field",name:"busy",type:{text:"boolean"},description:"Defines if a busy indicator would be displayed over the item.",default:"false",privacy:"public",_ui5since:"1.0.0-rc.8",_ui5validator:"Boolean",inheritedFrom:{name:"NotificationListItemBase",module:"dist/NotificationListItemBase.js"}},{kind:"field",name:"busyDelay",type:{text:"number"},description:"Defines the delay in milliseconds, after which the busy indicator will show up for this component.",default:"1000",privacy:"public",_ui5validator:"Integer",inheritedFrom:{name:"NotificationListItemBase",module:"dist/NotificationListItemBase.js"}},{kind:"field",name:"selected",type:{text:"boolean"},description:"Defines the selected state of the <code>ListItem</code>.",default:"false",privacy:"public",_ui5validator:"Boolean"}],events:[{name:"toggle",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired when the <code>ui5-li-notification-group</code> is expanded/collapsed by user interaction."},{name:"close",_ui5privacy:"public",type:{text:"CustomEvent<NotificationListItemBaseCloseEventDetail>",references:[{name:"NotificationListItemBaseCloseEventDetail",package:"@ui5/webcomponents-fiori",module:"dist/NotificationListItemBase.js"}]},description:"Fired when the <code>Close</code> button is pressed.",_ui5parameters:[{type:{text:"HTMLElement"},name:"item",_ui5privacy:"public",description:"the closed item."}],inheritedFrom:{name:"NotificationListItemBase",module:"dist/NotificationListItemBase.js"}}],superclass:{name:"NotificationListItemBase",package:"@ui5/webcomponents-fiori",module:"dist/NotificationListItemBase.js"},tagName:"ui5-li-notification-group",customElement:!0,_ui5since:"1.0.0-rc.8",_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"NotificationListGroupItem",module:"dist/NotificationListGroupItem.js"}},{kind:"custom-element-definition",name:"ui5-li-notification-group",declaration:{name:"NotificationListGroupItem",module:"dist/NotificationListGroupItem.js"}}]},{kind:"javascript-module",path:"dist/NotificationListItem.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>
The <code>ui5-li-notification</code> is a type of list item, meant to display notifications.
<br>

The component has a rich set of various properties that allows the user to set <code>avatar</code>, <code>titleText</code>, descriptive <code>content</code>
and <code>footnotes</code> to fully describe a notification.
<br>

The user can:
<ul>
<li>display a <code>Close</code> button</li>
<li>can control whether the <code>titleText</code> and <code>description</code> should wrap or truncate
and display a <code>ShowMore</code> button to switch between less and more information</li>
<li>add custom actions by using the <code>ui5-notification-action</code> component</li>
</ul>

<h3>Usage</h3>
The component can be used in a standard <code>ui5-list</code>.

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/NotificationListItem.js";</code>
<br>
<code>import "@ui5/webcomponents/dist/NotificationAction.js";</code> (optional)`,name:"NotificationListItem",cssParts:[{description:"Used to style the titleText of the notification list item",name:"title-text"}],slots:[{name:"avatar",description:`Defines the avatar, displayed in the <code>ui5-li-notification</code>.

<br><br>
<b>Note:</b> Consider using the <code>ui5-avatar</code> to display icons, initials or images.
<br>
<b>Note:</b>In order to be complaint with the UX guidlines and for best experience,
we recommend using avatars with 2rem X 2rem in size (32px X 32px). In case you are using the <code>ui5-avatar</code>
you can set its <code>size</code> property to <code>XS</code> to get the required size - <code>&lt;ui5-avatar size="XS">&lt;/ui5-avatar></code>.`,_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"},{name:"footnotes",description:"Defines the elements, displayed in the footer of the of the component.",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"},{name:"default",description:`Defines the content of the <code>ui5-li-notification</code>,
usually a description of the notification.

<br><br>
<b>Note:</b> Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,_ui5propertyName:"description",_ui5type:{text:"Array<Node>"},_ui5privacy:"public"},{name:"actions",description:`Defines the actions, displayed in the top-right area.
<br><br>
<b>Note:</b> use the <code>ui5-notification-action</code> component.`,_ui5type:{text:"Array<NotificationAction>",references:[{name:"NotificationAction",package:"@ui5/webcomponents-fiori",module:"dist/NotificationAction.js"}]},_ui5privacy:"public"}],members:[{kind:"field",name:"wrappingType",type:{text:"WrappingType",references:[{name:"WrappingType",package:"@ui5/webcomponents",module:"dist/types/WrappingType.js"}]},description:`Defines if the <code>titleText</code> and <code>description</code> should wrap,
they truncate by default.

<br><br>
<b>Note:</b> by default the <code>titleText</code> and <code>description</code>,
and a <code>ShowMore/Less</code> button would be displayed.`,default:'"None"',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"WrappingType"},{kind:"field",name:"titleText",type:{text:"string"},description:"Defines the <code>titleText</code> of the item.",default:'""',privacy:"public",_ui5validator:"String",inheritedFrom:{name:"NotificationListItemBase",module:"dist/NotificationListItemBase.js"}},{kind:"field",name:"priority",type:{text:"Priority",references:[{name:"Priority",package:"@ui5/webcomponents",module:"dist/types/Priority.js"}]},description:"Defines the <code>priority</code> of the item.",default:'"None"',privacy:"public",_ui5validator:"Priority",inheritedFrom:{name:"NotificationListItemBase",module:"dist/NotificationListItemBase.js"}},{kind:"field",name:"showClose",type:{text:"boolean"},description:"Defines if the <code>close</code> button would be displayed.",default:"false",privacy:"public",_ui5validator:"Boolean",inheritedFrom:{name:"NotificationListItemBase",module:"dist/NotificationListItemBase.js"}},{kind:"field",name:"read",type:{text:"boolean"},description:`Defines if the <code>notification</code> is new or has been already read.
<br><br>
<b>Note:</b> if set to <code>false</code> the <code>titleText</code> has bold font,
if set to true - it has a normal font.`,default:"false",privacy:"public",_ui5validator:"Boolean",inheritedFrom:{name:"NotificationListItemBase",module:"dist/NotificationListItemBase.js"}},{kind:"field",name:"busy",type:{text:"boolean"},description:"Defines if a busy indicator would be displayed over the item.",default:"false",privacy:"public",_ui5since:"1.0.0-rc.8",_ui5validator:"Boolean",inheritedFrom:{name:"NotificationListItemBase",module:"dist/NotificationListItemBase.js"}},{kind:"field",name:"busyDelay",type:{text:"number"},description:"Defines the delay in milliseconds, after which the busy indicator will show up for this component.",default:"1000",privacy:"public",_ui5validator:"Integer",inheritedFrom:{name:"NotificationListItemBase",module:"dist/NotificationListItemBase.js"}},{kind:"field",name:"selected",type:{text:"boolean"},description:"Defines the selected state of the <code>ListItem</code>.",default:"false",privacy:"public",_ui5validator:"Boolean"}],superclass:{name:"NotificationListItemBase",package:"@ui5/webcomponents-fiori",module:"dist/NotificationListItemBase.js"},tagName:"ui5-li-notification",customElement:!0,_ui5since:"1.0.0-rc.8",_ui5privacy:"public",events:[{name:"close",_ui5privacy:"public",type:{text:"CustomEvent<NotificationListItemBaseCloseEventDetail>",references:[{name:"NotificationListItemBaseCloseEventDetail",package:"@ui5/webcomponents-fiori",module:"dist/NotificationListItemBase.js"}]},description:"Fired when the <code>Close</code> button is pressed.",_ui5parameters:[{type:{text:"HTMLElement"},name:"item",_ui5privacy:"public",description:"the closed item."}],inheritedFrom:{name:"NotificationListItemBase",module:"dist/NotificationListItemBase.js"}}]}],exports:[{kind:"js",name:"default",declaration:{name:"NotificationListItem",module:"dist/NotificationListItem.js"}},{kind:"custom-element-definition",name:"ui5-li-notification",declaration:{name:"NotificationListItem",module:"dist/NotificationListItem.js"}}]},{kind:"javascript-module",path:"dist/NotificationListItemBase.js",declarations:[{kind:"class",description:"The base class of the <code>NotificationListItem</code> and <code>NotificationListGroupItem</code>.",name:"NotificationListItemBase",slots:[{name:"actions",description:`Defines the actions, displayed in the top-right area.
<br><br>
<b>Note:</b> use the <code>ui5-notification-action</code> component.`,_ui5type:{text:"Array<NotificationAction>",references:[{name:"NotificationAction",package:"@ui5/webcomponents-fiori",module:"dist/NotificationAction.js"}]},_ui5privacy:"public"}],members:[{kind:"field",name:"titleText",type:{text:"string"},description:"Defines the <code>titleText</code> of the item.",default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"priority",type:{text:"Priority",references:[{name:"Priority",package:"@ui5/webcomponents",module:"dist/types/Priority.js"}]},description:"Defines the <code>priority</code> of the item.",default:'"None"',privacy:"public",_ui5validator:"Priority"},{kind:"field",name:"showClose",type:{text:"boolean"},description:"Defines if the <code>close</code> button would be displayed.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"read",type:{text:"boolean"},description:`Defines if the <code>notification</code> is new or has been already read.
<br><br>
<b>Note:</b> if set to <code>false</code> the <code>titleText</code> has bold font,
if set to true - it has a normal font.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"busy",type:{text:"boolean"},description:"Defines if a busy indicator would be displayed over the item.",default:"false",privacy:"public",_ui5since:"1.0.0-rc.8",_ui5validator:"Boolean"},{kind:"field",name:"busyDelay",type:{text:"number"},description:"Defines the delay in milliseconds, after which the busy indicator will show up for this component.",default:"1000",privacy:"public",_ui5validator:"Integer"},{kind:"field",name:"selected",type:{text:"boolean"},description:"Defines the selected state of the <code>ListItem</code>.",default:"false",privacy:"public",_ui5validator:"Boolean"}],events:[{name:"close",_ui5privacy:"public",type:{text:"CustomEvent<NotificationListItemBaseCloseEventDetail>",references:[{name:"NotificationListItemBaseCloseEventDetail",package:"@ui5/webcomponents-fiori",module:"dist/NotificationListItemBase.js"}]},description:"Fired when the <code>Close</code> button is pressed.",_ui5parameters:[{type:{text:"HTMLElement"},name:"item",_ui5privacy:"public",description:"the closed item."}]}],superclass:{name:"ListItemBase",package:"@ui5/webcomponents",module:"dist/ListItemBase.js"},customElement:!0,_ui5since:"1.0.0-rc.8",_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"NotificationListItemBase",module:"dist/NotificationListItemBase.js"}}]},{kind:"javascript-module",path:"dist/Page.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-page</code> is a container component that holds one whole screen of an application.
The page has three distinct areas that can hold content - a header, content area and a footer.
<h3>Structure</h3>
<h4>Header</h4>
The top most area of the page is occupied by the header. The standard header includes a navigation button and a title.
<h4>Content</h4>
The content occupies the main part of the page. Only the content area is scrollable by default.
This can be prevented by setting  <code>enableScrolling</code> to <code>false</code>.
<h4>Footer</h4>
The footer is optional and occupies the fixed bottom part of the page. Alternatively, the footer can be floating above the bottom part of the content.
This is enabled with the <code>floatingFooter</code> property.

<b>Note:</b> <code>ui5-page</code> occipues the whole available space of its parent. In order to achieve the intended design you have to make sure
that there is enough space for the <code>ui5-page</code> to be rendered.
<b>Note:</b> In order for the <code>ui5-page</code> to be displayed, the parent element should have fixed height.

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents-fiori/dist/Page.js";</code>`,name:"Page",cssParts:[{description:"Used to style the content section of the component",name:"content"}],slots:[{name:"header",description:"Defines the header HTML Element.",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"},{name:"default",description:"Defines the content HTML Element.",_ui5propertyName:"content",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"},{name:"footer",description:"Defines the footer HTML Element.",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"}],members:[{kind:"field",name:"backgroundDesign",type:{text:"PageBackgroundDesign",references:[{name:"PageBackgroundDesign",package:"@ui5/webcomponents-fiori",module:"dist/types/PageBackgroundDesign.js"}]},description:`Defines the background color of the <code>ui5-page</code>.
<br><br>
<b>Note:</b> When a ui5-list is placed inside the page, we recommend using “List” to ensure better color contrast.
<br><br>`,default:'"Solid"',privacy:"public",_ui5validator:"PageBackgroundDesign"},{kind:"field",name:"disableScrolling",type:{text:"boolean"},description:`Disables vertical scrolling of page content.
If set to true, there will be no vertical scrolling at all.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"floatingFooter",type:{text:"boolean"},description:`Defines if the footer should float over the content.
<br><br>
<b>Note:</b> When set to true the footer floats over the content with a slight offset from the bottom, otherwise it is fixed at the very bottom of the page.`,default:"true",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"hideFooter",type:{text:"boolean"},description:"Defines the footer visibility.",default:"false",privacy:"public",_ui5validator:"Boolean"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-page",customElement:!0,_ui5since:"1.0.0-rc.12",_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"Page",module:"dist/Page.js"}},{kind:"custom-element-definition",name:"ui5-page",declaration:{name:"Page",module:"dist/Page.js"}}]},{kind:"javascript-module",path:"dist/ProductSwitch.js",declarations:[{kind:"interface",name:"IProductSwitchItem",description:"Interface for components that may be slotted inside <code>ui5-product-switch</code> as items",_ui5privacy:"public"},{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-product-switch</code> is an SAP Fiori specific web component that is used in <code>ui5-shellbar</code>
and allows the user to easily switch between products.
<br><br>

<h3>Keyboard Handling</h3>
The <code>ui5-product-switch</code> provides advanced keyboard handling.
When focused, the user can use the following keyboard
shortcuts in order to perform a navigation:
<br>
<ul>
<li>[TAB] - Move focus to the next interactive element after the <code>ui5-product-switch</code></li>
<li>[UP/DOWN] - Navigates up and down the items </li>
<li>[LEFT/RIGHT] - Navigates left and right the items</li>
</ul>
<br>
<br>

<h3>ES6 Module Import</h3>
<code>import "@ui5/webcomponents-fiori/dist/ProductSwitch.js";</code>
<br>
<code>import "@ui5/webcomponents-fiori/dist/ProductSwitchItem.js";</code> (for <code>ui5-product-switch-item</code>)`,name:"ProductSwitch",slots:[{name:"default",description:"Defines the items of the <code>ui5-product-switch</code>.",_ui5propertyName:"items",_ui5type:{text:"Array<IProductSwitchItem>",references:[{name:"IProductSwitchItem",package:"@ui5/webcomponents-fiori",module:"dist/ProductSwitch.js"}]},_ui5privacy:"public"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-product-switch",customElement:!0,_ui5since:"1.0.0-rc.5",_ui5privacy:"public",members:[]}],exports:[{kind:"js",name:"default",declaration:{name:"ProductSwitch",module:"dist/ProductSwitch.js"}},{kind:"custom-element-definition",name:"ui5-product-switch",declaration:{name:"ProductSwitch",module:"dist/ProductSwitch.js"}}]},{kind:"javascript-module",path:"dist/ProductSwitchItem.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>
The <code>ui5-product-switch-item</code> web component represents the items displayed in the
<code>ui5-product-switch</code> web component.
<br><br>
<b>Note:</b> <code>ui5-product-switch-item</code> is not supported when used outside of <code>ui5-product-switch</code>.
<br><br>

<h3>Keyboard Handling</h3>
The <code>ui5-product-switch</code> provides advanced keyboard handling.
When focused, the user can use the following keyboard
shortcuts in order to perform a navigation:
<br>
<ul>
<li>[SPACE/ENTER/RETURN] - Trigger <code>ui5-click</code> event</li>
</ul>

<h3>ES6 Module Import</h3>
<code>import "@ui5/webcomponents-fiori/dist/ProductSwitchItem.js";</code>`,name:"ProductSwitchItem",members:[{kind:"field",name:"titleText",type:{text:"string"},description:"Defines the title of the component.",default:'""',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"String"},{kind:"field",name:"subtitleText",type:{text:"string"},description:"Defines the subtitle of the component.",default:'""',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"String"},{kind:"field",name:"icon",type:{text:"string"},description:`Defines the icon to be displayed as a graphical element within the component.
<br><br>
Example:
<br>
<pre>ui5-product-switch-item icon="palette"</pre>

See all the available icons in the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"target",type:{text:"string"},description:`Defines a target where the <code>targetSrc</code> content must be open.
<br><br>
Available options are:
<ul>
<li><code>_self</code></li>
<li><code>_top</code></li>
<li><code>_blank</code></li>
<li><code>_parent</code></li>
<li><code>_search</code></li>
</ul>`,default:'"_self"',privacy:"public",_ui5validator:"String"},{kind:"field",name:"targetSrc",type:{text:"string"},description:"Defines the component target URI. Supports standard hyperlink behavior.",default:'""',privacy:"public",_ui5validator:"String"}],events:[{name:"click",_ui5privacy:"public",type:{text:"CustomEvent"},description:`Fired when the <code>ui5-product-switch-item</code> is activated either with a
click/tap or by using the Enter or Space key.`}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-product-switch-item",customElement:!0,_ui5since:"1.0.0-rc.5",_ui5privacy:"public",_ui5implements:[{name:"IProductSwitchItem",package:"@ui5/webcomponents-fiori",module:"dist/ProductSwitch.js"}]}],exports:[{kind:"js",name:"default",declaration:{name:"ProductSwitchItem",module:"dist/ProductSwitchItem.js"}},{kind:"custom-element-definition",name:"ui5-product-switch-item",declaration:{name:"ProductSwitchItem",module:"dist/ProductSwitchItem.js"}}]},{kind:"javascript-module",path:"dist/ShellBar.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-shellbar</code> is meant to serve as an application header
and includes numerous built-in features, such as: logo, profile image/icon, title, search field, notifications and so on.
<br><br>

<h3>Stable DOM Refs</h3>

You can use the following stable DOM refs for the <code>ui5-shellbar</code>:
<ul>
<li>logo</li>
<li>copilot</li>
<li>notifications</li>
<li>overflow</li>
<li>profile</li>
<li>product-switch</li>
</ul>

<h3>Keyboard Handling</h3>

<h4>Fast Navigation</h4>
This component provides a build in fast navigation group which can be used via <code>F6 / Shift + F6</code> or <code> Ctrl + Alt(Option) + Down /  Ctrl + Alt(Option) + Up</code>.
In order to use this functionality, you need to import the following module:
<code>import "@ui5/webcomponents-base/dist/features/F6Navigation.js"</code>
<br><br>

<h3>ES6 Module Import</h3>
<code>import "@ui5/webcomponents-fiori/dist/ShellBar";</code>`,name:"ShellBar",cssParts:[{description:"Used to style the outermost wrapper of the <code>ui5-shellbar</code>",name:"root"}],slots:[{name:"default",description:`Defines the <code>ui5-shellbar</code> aditional items.
<br><br>
<b>Note:</b>
You can use the &nbsp;&lt;ui5-shellbar-item>&lt;/ui5-shellbar-item>.`,_ui5propertyName:"items",_ui5type:{text:"Array<ShellBarItem>",references:[{name:"ShellBarItem",package:"@ui5/webcomponents-fiori",module:"dist/ShellBarItem.js"}]},_ui5privacy:"public"},{name:"profile",description:`You can pass <code>ui5-avatar</code> to set the profile image/icon.
If no profile slot is set - profile will be excluded from actions.

Note: We recommend not using the <code>size</code> attribute of <code>ui5-avatar</code> because
it should have specific size by design in the context of <code>ui5-shellbar</code> profile.`,_ui5since:"1.0.0-rc.6",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"},{name:"logo",description:`Defines the logo of the <code>ui5-shellbar</code>.
For example, you can use <code>ui5-avatar</code> or <code>img</code> elements as logo.`,_ui5since:"1.0.0-rc.8",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"},{name:"menuItems",description:`Defines the items displayed in menu after a click on the primary title.
<br><br>
<b>Note:</b>
You can use the &nbsp;&lt;ui5-li>&lt;/ui5-li> and its ancestors.`,_ui5since:"0.10",_ui5type:{text:"Array<ListItemBase>",references:[{name:"ListItemBase",package:"@ui5/webcomponents",module:"dist/ListItemBase.js"}]},_ui5privacy:"public"},{name:"searchField",description:"Defines the <code>ui5-input</code>, that will be used as a search field.",_ui5type:{text:"Array<Input>",references:[{name:"Input",package:"@ui5/webcomponents",module:"dist/Input.js"}]},_ui5privacy:"public"},{name:"startButton",description:`Defines a <code>ui5-button</code> in the bar that will be placed in the beginning.
We encourage this slot to be used for a back or home button.
It gets overstyled to match ShellBar's styling.`,_ui5type:{text:"Array<IButton>",references:[{name:"IButton",package:"@ui5/webcomponents",module:"dist/Button.js"}]},_ui5privacy:"public"}],members:[{kind:"field",name:"primaryTitle",type:{text:"string"},description:`Defines the <code>primaryTitle</code>.
<br><br>
<b>Note:</b> The <code>primaryTitle</code> would be hidden on S screen size (less than approx. 700px).`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"secondaryTitle",type:{text:"string"},description:`Defines the <code>secondaryTitle</code>.
<br><br>
<b>Note:</b> The <code>secondaryTitle</code> would be hidden on S and M screen sizes (less than approx. 1300px).`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"notificationsCount",type:{text:"string"},description:`Defines the <code>notificationsCount</code>,
displayed in the notification icon top-right corner.`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"showNotifications",type:{text:"boolean"},description:"Defines, if the notification icon would be displayed.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"showProductSwitch",type:{text:"boolean"},description:"Defines, if the product switch icon would be displayed.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"showCoPilot",type:{text:"boolean"},description:`Defines, if the product CoPilot icon would be displayed.
<br><b>Note:</b> By default the co-pilot is displayed as static SVG.
If you need an animated co-pilot, you can import the <code>"@ui5/webcomponents-fiori/dist/features/CoPilotAnimation.js"</code> module as add-on feature.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"showSearchField",type:{text:"boolean"},description:`Defines, if the Search Field would be displayed when there is a valid <code>searchField</code> slot.
<br><b>Note:</b> By default the Search Field is not displayed.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"accessibilityRoles",type:{text:"ShellBarAccessibilityRoles",references:[{name:"ShellBarAccessibilityRoles",package:"@ui5/webcomponents-fiori",module:"dist/ShellBar.js"}]},description:`An object of strings that defines additional accessibility roles for further customization.

It supports the following fields:
 - <code>logoRole</code>: the accessibility role for the <code>logo</code>`,default:"{}",privacy:"public",_ui5since:"1.6.0",_ui5validator:"Object"},{kind:"field",name:"accessibilityTexts",type:{text:"ShellBarAccessibilityTexts",references:[{name:"ShellBarAccessibilityTexts",package:"@ui5/webcomponents-fiori",module:"dist/ShellBar.js"}]},description:`An object of strings that defines several additional accessibility texts
for even further customization.

It supports the following fields:
- <code>profileButtonTitle</code>: defines the tooltip for the profile button
- <code>logoTitle</code>: defines the tooltip for the logo`,default:"{}",privacy:"public",_ui5since:"1.1.0",_ui5validator:"Object"},{kind:"field",name:"accessibilityAttributes",type:{text:"ShellBarAccessibilityAttributes",references:[{name:"ShellBarAccessibilityAttributes",package:"@ui5/webcomponents-fiori",module:"dist/ShellBar.js"}]},description:`An object of strings that defines several additional accessibility attribute values
for customization depending on the use case.

It supports the following fields:

<ul>
		<li><code>expanded</code>: Indicates whether the anchor element, or another grouping element it controls, is currently expanded or collapsed. Accepts the following string values:
		<ul>
			<li><code>true</code></li>
			<li><code>false</code></li>
		</ul>
		</li>
		<li><code>hasPopup</code>: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the anchor element. Accepts the following string values:
			<ul>
			<li><code>Dialog</code></li>
			<li><code>Grid</code></li>
			<li><code>ListBox</code></li>
			<li><code>Menu</code></li>
			<li><code>Tree</code></li>
			</ul>
		</li>
</ul>`,default:"{}",privacy:"public",_ui5since:"1.10.0",_ui5validator:"Object"},{kind:"method",name:"closeOverflow",return:{type:{text:"void"}},description:`Closes the overflow area.
Useful to manually close the overflow after having suppressed automatic closing with preventDefault() of ShellbarItem's press event`,privacy:"public"},{kind:"field",name:"logoDomRef",type:{text:"HTMLElement | null"},description:"Returns the <code>logo</code> DOM ref.",privacy:"public",default:"null",readonly:!0,_ui5since:"1.0.0-rc.16"},{kind:"field",name:"copilotDomRef",type:{text:"HTMLElement | null"},description:"Returns the <code>copilot</code> DOM ref.",privacy:"public",default:"null",readonly:!0,_ui5since:"1.0.0-rc.16"},{kind:"field",name:"notificationsDomRef",type:{text:"HTMLElement | null"},description:"Returns the <code>notifications</code> icon DOM ref.",privacy:"public",default:"null",readonly:!0,_ui5since:"1.0.0-rc.16"},{kind:"field",name:"overflowDomRef",type:{text:"HTMLElement | null"},description:"Returns the <code>overflow</code> icon DOM ref.",privacy:"public",default:"null",readonly:!0,_ui5since:"1.0.0-rc.16"},{kind:"field",name:"profileDomRef",type:{text:"HTMLElement | null"},description:"Returns the <code>profile</code> icon DOM ref.",privacy:"public",default:"null",readonly:!0,_ui5since:"1.0.0-rc.16"},{kind:"field",name:"productSwitchDomRef",type:{text:"HTMLElement | null"},description:"Returns the <code>product-switch</code> icon DOM ref.",privacy:"public",default:"null",readonly:!0,_ui5since:"1.0.0-rc.16"}],events:[{name:"notifications-click",_ui5privacy:"public",type:{text:"CustomEvent<ShellBarNotificationsClickEventDetail>",references:[{name:"ShellBarNotificationsClickEventDetail",package:"@ui5/webcomponents-fiori",module:"dist/ShellBar.js"}]},description:"Fired, when the notification icon is activated.",_ui5allowPreventDefault:!0,_ui5parameters:[{type:{text:"HTMLElement"},name:"targetRef",_ui5privacy:"public",description:"dom ref of the activated element"}]},{name:"profile-click",_ui5privacy:"public",type:{text:"CustomEvent<ShellBarProfileClickEventDetail>",references:[{name:"ShellBarProfileClickEventDetail",package:"@ui5/webcomponents-fiori",module:"dist/ShellBar.js"}]},description:"Fired, when the profile slot is present.",_ui5parameters:[{type:{text:"HTMLElement"},name:"targetRef",_ui5privacy:"public",description:"dom ref of the activated element"}]},{name:"product-switch-click",_ui5privacy:"public",type:{text:"CustomEvent<ShellBarProductSwitchClickEventDetail>",references:[{name:"ShellBarProductSwitchClickEventDetail",package:"@ui5/webcomponents-fiori",module:"dist/ShellBar.js"}]},description:`Fired, when the product switch icon is activated.
<b>Note:</b> You can prevent closing of overflow popover by calling <code>event.preventDefault()</code>.`,_ui5allowPreventDefault:!0,_ui5parameters:[{type:{text:"HTMLElement"},name:"targetRef",_ui5privacy:"public",description:"dom ref of the activated element"}]},{name:"logo-click",_ui5privacy:"public",type:{text:"CustomEvent<ShellBarLogoClickEventDetail>",references:[{name:"ShellBarLogoClickEventDetail",package:"@ui5/webcomponents-fiori",module:"dist/ShellBar.js"}]},description:"Fired, when the logo is activated.",_ui5since:"0.10",_ui5parameters:[{type:{text:"HTMLElement"},name:"targetRef",_ui5privacy:"public",description:"dom ref of the activated element"}]},{name:"co-pilot-click",_ui5privacy:"public",type:{text:"CustomEvent<ShellBarCoPilotClickEventDetail>",references:[{name:"ShellBarCoPilotClickEventDetail",package:"@ui5/webcomponents-fiori",module:"dist/ShellBar.js"}]},description:"Fired, when the co pilot is activated.",_ui5since:"0.10",_ui5parameters:[{type:{text:"HTMLElement"},name:"targetRef",_ui5privacy:"public",description:"dom ref of the activated element"}]},{name:"menu-item-click",_ui5privacy:"public",type:{text:"CustomEvent<ShellBarMenuItemClickEventDetail>",references:[{name:"ShellBarMenuItemClickEventDetail",package:"@ui5/webcomponents-fiori",module:"dist/ShellBar.js"}]},description:`Fired, when a menu item is activated
<b>Note:</b> You can prevent closing of overflow popover by calling <code>event.preventDefault()</code>.`,_ui5since:"0.10",_ui5parameters:[{type:{text:"HTMLElement"},name:"item",_ui5privacy:"public",description:"DOM ref of the activated list item"}]},{name:"search-button-click",_ui5privacy:"public",type:{text:"CustomEvent<ShellBarSearchButtonEventDetail>",references:[{name:"ShellBarSearchButtonEventDetail",package:"@ui5/webcomponents-fiori",module:"dist/ShellBar.js"}]},description:`Fired, when the search button is activated.
<b>Note:</b> You can prevent expanding/collapsing of the search field by calling <code>event.preventDefault()</code>.`,_ui5allowPreventDefault:!0}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-shellbar",customElement:!0,_ui5since:"0.8.0",_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"ShellBar",module:"dist/ShellBar.js"}},{kind:"custom-element-definition",name:"ui5-shellbar",declaration:{name:"ShellBar",module:"dist/ShellBar.js"}}]},{kind:"javascript-module",path:"dist/ShellBarItem.js",declarations:[{kind:"class",description:`The <code>ui5-shellbar-item</code> represents a custom item, that
might be added to the <code>ui5-shellbar</code>.
<br><br>
<h3>ES6 Module Import</h3>
<code>import "@ui5/webcomponents-fiori/dist/ShellBarItem";</code>`,name:"ShellBarItem",members:[{kind:"field",name:"icon",type:{text:"string"},description:"Defines the name of the item's icon.",default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"text",type:{text:"string"},description:`Defines the item text.
  <br><br>
  <b>Note:</b> The text is only displayed inside the overflow popover list view.`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"count",type:{text:"string"},description:"Defines the count displayed in the top-right corner.",default:'""',privacy:"public",_ui5since:"1.0.0-rc.6",_ui5validator:"String"}],events:[{name:"click",_ui5privacy:"public",type:{text:"CustomEvent<ShellBarItemClickEventDetail>",references:[{name:"ShellBarItemClickEventDetail",package:"@ui5/webcomponents-fiori",module:"dist/ShellBarItem.js"}]},description:"Fired, when the item is pressed.",_ui5allowPreventDefault:!0}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-shellbar-item",customElement:!0,_ui5privacy:"public",_ui5abstract:!0}],exports:[{kind:"js",name:"default",declaration:{name:"ShellBarItem",module:"dist/ShellBarItem.js"}},{kind:"custom-element-definition",name:"ui5-shellbar-item",declaration:{name:"ShellBarItem",module:"dist/ShellBarItem.js"}}]},{kind:"javascript-module",path:"dist/SideNavigation.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>SideNavigation</code> is used as a standard menu in applications.
It consists of three containers: header (top-aligned), main navigation section (top-aligned) and the secondary section (bottom-aligned).
<ul>
<li>The header is meant for displaying user related information - profile data, avatar, etc.</li>
<li>The main navigation section is related to the user’s current work context</li>
<li>The secondary section is mostly used to link additional information that may be of interest (legal information, developer communities, external help, contact information and so on). </li>
</ul>

<h3>Usage</h3>

Use the available <code>ui5-side-navigation-item</code> and <code>ui5-side-navigation-sub-item</code> components to build your menu.
The items can consist of text only or an icon with text. The use or non-use of icons must be consistent for all items on one level.
You must not combine entries with and without icons on the same level. We strongly recommend that you do not use icons on the second level.

<h3>Keyboard Handling</h3>

<h4>Fast Navigation</h4>
This component provides a build in fast navigation group which can be used via <code>F6 / Shift + F6</code> or <code> Ctrl + Alt(Option) + Down /  Ctrl + Alt(Option) + Up</code>.
In order to use this functionality, you need to import the following module:
<code>import "@ui5/webcomponents-base/dist/features/F6Navigation.js"</code>
<br><br>

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents-fiori/dist/SideNavigation.js";</code>
<br>
<code>import "@ui5/webcomponents-fiori/dist/SideNavigationItem.js";</code> (for <code>ui5-side-navigation-item</code>)
<br>
<code>import "@ui5/webcomponents-fiori/dist/SideNavigationSubItem.js";</code> (for <code>ui5-side-navigation-sub-item</code>)`,name:"SideNavigation",slots:[{name:"default",description:`Defines the main items of the <code>ui5-side-navigation</code>. Use the <code>ui5-side-navigation-item</code> component
for the top-level items, and the <code>ui5-side-navigation-sub-item</code> component for second-level items, nested
inside the items.`,_ui5propertyName:"items",_ui5type:{text:"Array<SideNavigationItem>",references:[{name:"SideNavigationItem",package:"@ui5/webcomponents-fiori",module:"dist/SideNavigationItem.js"}]},_ui5privacy:"public"},{name:"header",description:`Defines the header of the <code>ui5-side-navigation</code>.

<br><br>
<b>Note:</b> The header is displayed when the component is expanded - the property <code>collapsed</code> is false;`,_ui5since:"1.0.0-rc.11",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"},{name:"fixedItems",description:`Defines the fixed items at the bottom of the <code>ui5-side-navigation</code>. Use the <code>ui5-side-navigation-item</code> component
for the fixed items, and optionally the <code>ui5-side-navigation-sub-item</code> component to provide second-level items inside them.

<b>Note:</b> In order to achieve the best user experience, it is recommended that you keep the fixed items "flat" (do not pass sub-items)`,_ui5type:{text:"Array<SideNavigationItem>",references:[{name:"SideNavigationItem",package:"@ui5/webcomponents-fiori",module:"dist/SideNavigationItem.js"}]},_ui5privacy:"public"}],members:[{kind:"field",name:"collapsed",type:{text:"boolean"},description:"Defines whether the <code>ui5-side-navigation</code> is expanded or collapsed.",privacy:"public",default:"false",_ui5validator:"Boolean"}],events:[{name:"selection-change",_ui5privacy:"public",type:{text:"CustomEvent<SideNavigationSelectionChangeEventDetail>",references:[{name:"SideNavigationSelectionChangeEventDetail",package:"@ui5/webcomponents-fiori",module:"dist/SideNavigation.js"}]},description:"Fired when the selection has changed via user interaction",_ui5allowPreventDefault:!0,_ui5parameters:[{type:{text:"SideNavigationItemBase",references:[{name:"SideNavigationItemBase",package:"@ui5/webcomponents-fiori",module:"dist/SideNavigationItemBase.js"}]},name:"item",_ui5privacy:"public",description:"the clicked item."}]}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-side-navigation",customElement:!0,_ui5since:"1.0.0-rc.8",_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"SideNavigation",module:"dist/SideNavigation.js"}},{kind:"custom-element-definition",name:"ui5-side-navigation",declaration:{name:"SideNavigation",module:"dist/SideNavigation.js"}}]},{kind:"javascript-module",path:"dist/SideNavigationItem.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-side-navigation-item</code> is used within <code>ui5-side-navigation</code> only.
Via the <code>ui5-side-navigation-item</code> you control the content of the <code>SideNavigation</code>.

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents-fiori/dist/SideNavigationItem.js";</code>`,name:"SideNavigationItem",slots:[{name:"default",description:"Defines nested items by passing <code>ui5-side-navigation-sub-item</code> to the default slot.",_ui5propertyName:"items",_ui5type:{text:"Array<SideNavigationSubItem>",references:[{name:"SideNavigationSubItem",package:"@ui5/webcomponents-fiori",module:"dist/SideNavigationSubItem.js"}]},_ui5privacy:"public"}],members:[{kind:"field",name:"expanded",type:{text:"boolean"},description:"Defines if the item is expanded",privacy:"public",default:"false",_ui5validator:"Boolean"},{kind:"field",name:"wholeItemToggleable",type:{text:"boolean"},description:`Defines whether clicking the whole item or only pressing the icon will show/hide the sub items (if present).
If set to true, clicking the whole item will toggle the sub items, and it won't fire the <code>click</code> event.
By default, only clicking the arrow icon will toggle the sub items.`,privacy:"public",default:"false",_ui5since:"1.0.0-rc.11",_ui5validator:"Boolean"},{kind:"field",name:"text",type:{text:"string"},description:"Defines the text of the item.",privacy:"public",default:'""',_ui5validator:"String",inheritedFrom:{name:"SideNavigationItemBase",module:"dist/SideNavigationItemBase.js"}},{kind:"field",name:"icon",type:{text:"string"},description:`Defines the icon of the item.
<br><br>

The SAP-icons font provides numerous options.
<br>
See all the available icons in the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.`,privacy:"public",default:'""',_ui5validator:"String",inheritedFrom:{name:"SideNavigationItemBase",module:"dist/SideNavigationItemBase.js"}},{kind:"field",name:"selected",type:{text:"boolean"},description:"Defines whether the item is selected",privacy:"public",default:"false",_ui5validator:"Boolean",inheritedFrom:{name:"SideNavigationItemBase",module:"dist/SideNavigationItemBase.js"}},{kind:"field",name:"href",type:{text:"string"},description:`Defines the link target URI. Supports standard hyperlink behavior.
If a JavaScript action should be triggered,
this should not be set, but instead an event handler
for the <code>click</code> event should be registered.`,privacy:"public",default:'""',_ui5since:"1.19.0",_ui5validator:"String",inheritedFrom:{name:"SideNavigationItemBase",module:"dist/SideNavigationItemBase.js"}},{kind:"field",name:"target",type:{text:"string"},description:`Defines the component target.
<br><br>
<b>Notes:</b>

<ul>
<li><code>_self</code></li>
<li><code>_top</code></li>
<li><code>_blank</code></li>
<li><code>_parent</code></li>
<li><code>_search</code></li>
</ul>

<b>This property must only be used when the <code>href</code> property is set.</b>`,privacy:"public",default:'""',_ui5since:"1.19.0",_ui5validator:"String",inheritedFrom:{name:"SideNavigationItemBase",module:"dist/SideNavigationItemBase.js"}},{kind:"field",name:"disabled",type:{text:"boolean"},description:`Defines whether the component is disabled.
A disabled component can't be pressed or
focused, and it is not in the tab chain.`,default:"false",privacy:"public",_ui5since:"1.19.0",_ui5validator:"Boolean",inheritedFrom:{name:"SideNavigationItemBase",module:"dist/SideNavigationItemBase.js"}}],superclass:{name:"SideNavigationItemBase",package:"@ui5/webcomponents-fiori",module:"dist/SideNavigationItemBase.js"},tagName:"ui5-side-navigation-item",customElement:!0,_ui5since:"1.0.0-rc.8",_ui5privacy:"public",_ui5abstract:!0,events:[{name:"click",_ui5privacy:"public",type:{text:"CustomEvent"},description:`Fired when the component is activated either with a
click/tap or by using the Enter or Space key.`,inheritedFrom:{name:"SideNavigationItemBase",module:"dist/SideNavigationItemBase.js"}}]}],exports:[{kind:"js",name:"default",declaration:{name:"SideNavigationItem",module:"dist/SideNavigationItem.js"}},{kind:"custom-element-definition",name:"ui5-side-navigation-item",declaration:{name:"SideNavigationItem",module:"dist/SideNavigationItem.js"}}]},{kind:"javascript-module",path:"dist/SideNavigationItemBase.js",declarations:[{kind:"class",description:`A class to serve as a foundation
for the <code>SideNavigationItem</code> and <code>SideNavigationSubItem</code> classes.`,name:"SideNavigationItemBase",members:[{kind:"field",name:"text",type:{text:"string"},description:"Defines the text of the item.",privacy:"public",default:'""',_ui5validator:"String"},{kind:"field",name:"icon",type:{text:"string"},description:`Defines the icon of the item.
<br><br>

The SAP-icons font provides numerous options.
<br>
See all the available icons in the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.`,privacy:"public",default:'""',_ui5validator:"String"},{kind:"field",name:"selected",type:{text:"boolean"},description:"Defines whether the item is selected",privacy:"public",default:"false",_ui5validator:"Boolean"},{kind:"field",name:"href",type:{text:"string"},description:`Defines the link target URI. Supports standard hyperlink behavior.
If a JavaScript action should be triggered,
this should not be set, but instead an event handler
for the <code>click</code> event should be registered.`,privacy:"public",default:'""',_ui5since:"1.19.0",_ui5validator:"String"},{kind:"field",name:"target",type:{text:"string"},description:`Defines the component target.
<br><br>
<b>Notes:</b>

<ul>
<li><code>_self</code></li>
<li><code>_top</code></li>
<li><code>_blank</code></li>
<li><code>_parent</code></li>
<li><code>_search</code></li>
</ul>

<b>This property must only be used when the <code>href</code> property is set.</b>`,privacy:"public",default:'""',_ui5since:"1.19.0",_ui5validator:"String"},{kind:"field",name:"disabled",type:{text:"boolean"},description:`Defines whether the component is disabled.
A disabled component can't be pressed or
focused, and it is not in the tab chain.`,default:"false",privacy:"public",_ui5since:"1.19.0",_ui5validator:"Boolean"}],events:[{name:"click",_ui5privacy:"public",type:{text:"CustomEvent"},description:`Fired when the component is activated either with a
click/tap or by using the Enter or Space key.`}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},customElement:!0,_ui5since:"1.19.0",_ui5privacy:"public",_ui5abstract:!0}],exports:[{kind:"js",name:"default",declaration:{name:"SideNavigationItemBase",module:"dist/SideNavigationItemBase.js"}}]},{kind:"javascript-module",path:"dist/SideNavigationSubItem.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-side-navigation-sub-item</code> is intended to be used inside a <code>ui5-side-navigation-item</code> only.

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents-fiori/dist/SideNavigationSubItem.js";</code>`,name:"SideNavigationSubItem",superclass:{name:"SideNavigationItemBase",package:"@ui5/webcomponents-fiori",module:"dist/SideNavigationItemBase.js"},tagName:"ui5-side-navigation-sub-item",customElement:!0,_ui5since:"1.0.0-rc.8",_ui5privacy:"public",_ui5abstract:!0,members:[{kind:"field",name:"text",type:{text:"string"},description:"Defines the text of the item.",privacy:"public",default:'""',_ui5validator:"String",inheritedFrom:{name:"SideNavigationItemBase",module:"dist/SideNavigationItemBase.js"}},{kind:"field",name:"icon",type:{text:"string"},description:`Defines the icon of the item.
<br><br>

The SAP-icons font provides numerous options.
<br>
See all the available icons in the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.`,privacy:"public",default:'""',_ui5validator:"String",inheritedFrom:{name:"SideNavigationItemBase",module:"dist/SideNavigationItemBase.js"}},{kind:"field",name:"selected",type:{text:"boolean"},description:"Defines whether the item is selected",privacy:"public",default:"false",_ui5validator:"Boolean",inheritedFrom:{name:"SideNavigationItemBase",module:"dist/SideNavigationItemBase.js"}},{kind:"field",name:"href",type:{text:"string"},description:`Defines the link target URI. Supports standard hyperlink behavior.
If a JavaScript action should be triggered,
this should not be set, but instead an event handler
for the <code>click</code> event should be registered.`,privacy:"public",default:'""',_ui5since:"1.19.0",_ui5validator:"String",inheritedFrom:{name:"SideNavigationItemBase",module:"dist/SideNavigationItemBase.js"}},{kind:"field",name:"target",type:{text:"string"},description:`Defines the component target.
<br><br>
<b>Notes:</b>

<ul>
<li><code>_self</code></li>
<li><code>_top</code></li>
<li><code>_blank</code></li>
<li><code>_parent</code></li>
<li><code>_search</code></li>
</ul>

<b>This property must only be used when the <code>href</code> property is set.</b>`,privacy:"public",default:'""',_ui5since:"1.19.0",_ui5validator:"String",inheritedFrom:{name:"SideNavigationItemBase",module:"dist/SideNavigationItemBase.js"}},{kind:"field",name:"disabled",type:{text:"boolean"},description:`Defines whether the component is disabled.
A disabled component can't be pressed or
focused, and it is not in the tab chain.`,default:"false",privacy:"public",_ui5since:"1.19.0",_ui5validator:"Boolean",inheritedFrom:{name:"SideNavigationItemBase",module:"dist/SideNavigationItemBase.js"}}],events:[{name:"click",_ui5privacy:"public",type:{text:"CustomEvent"},description:`Fired when the component is activated either with a
click/tap or by using the Enter or Space key.`,inheritedFrom:{name:"SideNavigationItemBase",module:"dist/SideNavigationItemBase.js"}}]}],exports:[{kind:"js",name:"default",declaration:{name:"SideNavigationSubItem",module:"dist/SideNavigationSubItem.js"}},{kind:"custom-element-definition",name:"ui5-side-navigation-sub-item",declaration:{name:"SideNavigationSubItem",module:"dist/SideNavigationSubItem.js"}}]},{kind:"javascript-module",path:"dist/SortItem.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>


<h3>Usage</h3>

For the <code>ui5-sort-item</code>
<h3>ES6 Module Import</h3>

<code>import @ui5/webcomponents-fiori/dist/SortItem.js";</code>`,name:"SortItem",members:[{kind:"field",name:"text",type:{text:"string"},description:"Defines the text of the component.",default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"selected",type:{text:"boolean"},description:"Defines if the component is selected.",default:"false",privacy:"public",_ui5validator:"Boolean"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-sort-item",customElement:!0,_ui5since:"1.0.0-rc.16",_ui5privacy:"public",_ui5abstract:!0}],exports:[{kind:"js",name:"default",declaration:{name:"SortItem",module:"dist/SortItem.js"}},{kind:"custom-element-definition",name:"ui5-sort-item",declaration:{name:"SortItem",module:"dist/SortItem.js"}}]},{kind:"javascript-module",path:"dist/Timeline.js",declarations:[{kind:"interface",name:"ITimelineItem",description:"Interface for components that may be slotted inside <code>ui5-timeline</code> as items",_ui5privacy:"public"},{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-timeline</code> component shows entries (such as objects, events, or posts) in chronological order.
A common use case is to provide information about changes to an object, or events related to an object.
These entries can be generated by the system (for example, value XY changed from A to B), or added manually.
There are two distinct variants of the timeline: basic and social. The basic timeline is read-only,
while the social timeline offers a high level of interaction and collaboration, and is integrated within SAP Jam.`,name:"Timeline",slots:[{name:"default",description:"Determines the content of the <code>ui5-timeline</code>.",_ui5propertyName:"items",_ui5type:{text:"Array<ITimelineItem>",references:[{name:"ITimelineItem",package:"@ui5/webcomponents-fiori",module:"dist/Timeline.js"}]},_ui5privacy:"public"}],members:[{kind:"field",name:"layout",type:{text:"TimelineLayout",references:[{name:"TimelineLayout",package:"@ui5/webcomponents-fiori",module:"dist/types/TimelineLayout.js"}]},description:`Defines the items orientation.

<br><br>
<b>Note:</b>
Available options are:
<ul>
<li><code>Vertical</code></li>
<li><code>Horizontal</code></li>
</ul>`,default:'"Vertical"',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"TimelineLayout"},{kind:"field",name:"accessibleName",type:{text:"string"},description:"Defines the accessible ARIA name of the component.",default:'""',privacy:"public",_ui5since:"1.2.0",_ui5validator:"String"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-timeline",customElement:!0,_ui5since:"0.8.0",_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"Timeline",module:"dist/Timeline.js"}},{kind:"custom-element-definition",name:"ui5-timeline",declaration:{name:"Timeline",module:"dist/Timeline.js"}}]},{kind:"javascript-module",path:"dist/TimelineItem.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

An entry posted on the timeline.`,name:"TimelineItem",slots:[{description:"Determines the description of the <code>ui5-timeline-item</code>.",name:"default",_ui5privacy:"public",_ui5type:{text:"Array<Node>"}}],members:[{kind:"field",name:"icon",type:{text:"string"},description:`Defines the icon to be displayed as graphical element within the <code>ui5-timeline-item</code>.
SAP-icons font provides numerous options.
<br><br>

See all the available icons in the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"name",type:{text:"string"},description:"Defines the name of the item, displayed before the <code>title-text</code>.",default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"nameClickable",type:{text:"boolean"},description:"Defines if the <code>name</code> is clickable.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"titleText",type:{text:"string"},description:"Defines the title text of the component.",default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"subtitleText",type:{text:"string"},description:"Defines the subtitle text of the component.",default:'""',privacy:"public",_ui5validator:"String"}],events:[{name:"name-click",_ui5privacy:"public",type:{text:"CustomEvent"},description:`Fired when the item name is pressed either with a
click/tap or by using the Enter or Space key.
<br><br>
<b>Note:</b> The event will not be fired if the <code>name-clickable</code>
attribute is not set.`}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-timeline-item",customElement:!0,_ui5privacy:"public",_ui5implements:[{name:"ITimelineItem",package:"@ui5/webcomponents-fiori",module:"dist/Timeline.js"}]}],exports:[{kind:"js",name:"default",declaration:{name:"TimelineItem",module:"dist/TimelineItem.js"}},{kind:"custom-element-definition",name:"ui5-timeline-item",declaration:{name:"TimelineItem",module:"dist/TimelineItem.js"}}]},{kind:"javascript-module",path:"dist/UploadCollection.js",declarations:[{kind:"interface",name:"IUploadCollectionItem",description:"Interface for components that may be slotted inside <code>ui5-upload-collection</code> as items",_ui5privacy:"public"},{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>
This component allows you to represent files before uploading them to a server, with the help of <code>ui5-upload-collection-item</code>.
It also allows you to show already uploaded files.

<h3>ES6 Module Import</h3>
<code>import "@ui5/webcomponents-fiori/dist/UploadCollection.js";</code>
<br>
<code>import "@ui5/webcomponents-fiori/dist/UploadCollectionItem.js";</code> (for <code>ui5-upload-collection-item</code>)`,name:"UploadCollection",slots:[{name:"default",description:`Defines the items of the <code>ui5-upload-collection</code>.
<br><b>Note:</b> Use <code>ui5-upload-collection-item</code> for the intended design.`,_ui5propertyName:"items",_ui5type:{text:"Array<IUploadCollectionItem>",references:[{name:"IUploadCollectionItem",package:"@ui5/webcomponents-fiori",module:"dist/UploadCollection.js"}]},_ui5privacy:"public"},{name:"header",description:`Defines the <code>ui5-upload-collection</code> header.
<br><br>
<b>Note:</b> If <code>header</code> slot is provided,
the labelling of the <code>UploadCollection</code> is a responsibility of the application developer.
<code>accessibleName</code> should be used.`,_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"}],members:[{kind:"field",name:"mode",type:{text:"ListMode",references:[{name:"ListMode",package:"@ui5/webcomponents",module:"dist/types/ListMode.js"}]},description:`Defines the mode of the <code>ui5-upload-collection</code>.

<br><b>Note:</b>
Mode "Delete" has no effect. The delete button is controlled by the <code>hideDeleteButton</code> property of UploadCollectionItem`,default:'"None"',privacy:"public",_ui5validator:"ListMode"},{kind:"field",name:"noDataDescription",type:{text:"string"},description:"Allows you to set your own text for the 'No data' description.",default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"noDataText",type:{text:"string"},description:"Allows you to set your own text for the 'No data' text.",default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"hideDragOverlay",type:{text:"boolean"},description:`By default there will be drag and drop overlay shown over the <code>ui5-upload-collection</code> when files
are dragged. If you don't intend to use drag and drop, set this property.
<br><br>
<b>Note:</b> It is up to the application developer to add handler for <code>drop</code> event and handle it.
<code>ui5-upload-collection</code> only displays an overlay.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"accessibleName",type:{text:"string"},description:"Defines the accessible ARIA name of the component.",default:'""',privacy:"public",_ui5since:"1.0.0-rc.16",_ui5validator:"String"}],events:[{name:"drop",_ui5privacy:"public",type:{text:"Event"},description:`Fired when an element is dropped inside the drag and drop overlay.
<br><br>
<b>Note:</b> The <code>drop</code> event is fired only when elements are dropped within the drag and drop overlay and ignored for the other parts of the <code>ui5-upload-collection</code>.`},{name:"item-delete",_ui5privacy:"public",type:{text:"CustomEvent<UploadCollectionItemDeleteEventDetail>",references:[{name:"UploadCollectionItemDeleteEventDetail",package:"@ui5/webcomponents-fiori",module:"dist/UploadCollection.js"}]},description:"Fired when the delete button of any item is pressed.",_ui5parameters:[{type:{text:"HTMLElement"},name:"item",_ui5privacy:"public",description:"The <code>ui5-upload-collection-item</code> which was deleted."}]},{name:"selection-change",_ui5privacy:"public",type:{text:"CustomEvent<UploadCollectionSelectionChangeEventDetail>",references:[{name:"UploadCollectionSelectionChangeEventDetail",package:"@ui5/webcomponents-fiori",module:"dist/UploadCollection.js"}]},description:`Fired when selection is changed by user interaction
in <code>SingleSelect</code> and <code>MultiSelect</code> modes.`,_ui5parameters:[{type:{text:"Array"},name:"selectedItems",_ui5privacy:"public",description:"An array of the selected items."}]}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-upload-collection",customElement:!0,_ui5since:"1.0.0-rc.7",_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"UploadCollection",module:"dist/UploadCollection.js"}},{kind:"custom-element-definition",name:"ui5-upload-collection",declaration:{name:"UploadCollection",module:"dist/UploadCollection.js"}}]},{kind:"javascript-module",path:"dist/UploadCollectionItem.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>
A component to be used within the <code>ui5-upload-collection</code>.

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents-fiori/dist/UploadCollectionItem.js";</code>`,name:"UploadCollectionItem",slots:[{description:"Hold the description of the <code>ui5-upload-collection-item</code>. Will be shown below the file name.",name:"default",_ui5privacy:"public",_ui5type:{text:"Array<Node>"}},{name:"thumbnail",description:`A thumbnail, which will be shown in the beginning of the <code>ui5-upload-collection-item</code>.
<br><br>
<b>Note:</b> Use <code>ui5-icon</code> or <code>img</code> for the intended design.`,_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"},{name:"deleteButton",description:`Defines the delete button, displayed in "Delete" mode.
<b>Note:</b> While the slot allows custom buttons, to match
design guidelines, please use the <code>ui5-button</code> component.
<b>Note:</b> When the slot is not present, a built-in delete button will be displayed.`,_ui5since:"1.9.0",_ui5type:{text:"Array<IButton>",references:[{name:"IButton",package:"@ui5/webcomponents",module:"dist/Button.js"}]},_ui5privacy:"public"}],members:[{kind:"field",name:"file",type:{text:"File | null | undefined"},description:"Holds an instance of <code>File</code> associated with this item.",default:"null",privacy:"public",_ui5validator:"Object",_ui5noAttribute:!0},{kind:"field",name:"fileName",type:{text:"string"},description:"The name of the file.",default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"fileNameClickable",type:{text:"boolean"},description:"If set to <code>true</code> the file name will be clickable and it will fire <code>file-name-click</code> event upon click.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"disableDeleteButton",type:{text:"boolean"},description:"Disables the delete button.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"hideDeleteButton",type:{text:"boolean"},description:`By default, the delete button will always be shown, regardless of the <code>ui5-upload-collection</code>'s property <code>mode</code>.
Setting this property to <code>true</code> will hide the delete button.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"hideRetryButton",type:{text:"boolean"},description:"Hides the retry button when <code>uploadState</code> property is <code>Error</code>.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"hideTerminateButton",type:{text:"boolean"},description:"Hides the terminate button when <code>uploadState</code> property is <code>Uploading</code>.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"progress",type:{text:"number"},description:`The upload progress in percentage.
<br><br>
<b>Note:</b> Expected values are in the interval [0, 100].`,default:"0",privacy:"public",_ui5validator:"Integer"},{kind:"field",name:"uploadState",type:{text:"UploadState",references:[{name:"UploadState",package:"@ui5/webcomponents-fiori",module:"dist/types/UploadState.js"}]},description:`If set to <code>Uploading</code> or <code>Error</code>, a progress indicator showing the <code>progress</code> is displayed.
Also if set to <code>Error</code>, a refresh button is shown. When this icon is pressed <code>retry</code> event is fired.
If set to <code>Uploading</code>, a terminate button is shown. When this icon is pressed <code>terminate</code> event is fired.`,default:'"Ready"',privacy:"public",_ui5validator:"UploadState"},{kind:"field",name:"type",type:{text:"ListItemType",references:[{name:"ListItemType",package:"@ui5/webcomponents",module:"dist/types/ListItemType.js"}]},description:`Defines the visual indication and behavior of the list items.
Available options are <code>Active</code> (by default), <code>Inactive</code>, <code>Detail</code> and <code>Navigation</code>.
<br><br>
<b>Note:</b> When set to <code>Active</code> or <code>Navigation</code>, the item will provide visual response upon press and hover,
while with type <code>Inactive</code> and <code>Detail</code> - will not.`,default:'"Active"',privacy:"public",_ui5validator:"ListItemType"},{kind:"field",name:"accessibilityAttributes",type:{text:"AccessibilityAttributes",references:[{name:"AccessibilityAttributes",package:"@ui5/webcomponents",module:"dist/ListItem.js"}]},description:`An object of strings that defines several additional accessibility attribute values
for customization depending on the use case.

 It supports the following fields:

<ul>
		<li><code>ariaSetsize</code>: Defines the number of items in the current set of listitems or treeitems when not all items in the set are present in the DOM.
		The value of each <code>aria-setsize</code> is an integer reflecting number of items in the complete set.
		<b>Note: </b> If the size of the entire set is unknown, set <code>aria-setsize="-1"</code>.
		</li>
		<li><code>ariaPosinset</code>: Defines an element's number or position in the current set of listitems or treeitems when not all items are present in the DOM.
		The value of each <code>aria-posinset</code> is an integer greater than or equal to 1, and less than or equal to the size of the set when that size is known.
		</li>
</ul>`,default:"{}",privacy:"public",_ui5since:"1.15.0",_ui5validator:"Object"},{kind:"field",name:"navigated",type:{text:"boolean"},description:`The navigated state of the list item.
If set to <code>true</code>, a navigation indicator is displayed at the end of the list item.`,default:"false",privacy:"public",_ui5since:"1.10.0",_ui5validator:"Boolean"},{kind:"field",name:"selected",type:{text:"boolean"},description:"Defines the selected state of the <code>ListItem</code>.",default:"false",privacy:"public",_ui5validator:"Boolean",inheritedFrom:{name:"ListItemBase",module:"dist/ListItemBase.js"}}],events:[{name:"file-name-click",_ui5privacy:"public",type:{text:"CustomEvent"},description:`Fired when the file name is clicked.
<br><br>
<b>Note:</b> This event is only available when <code>fileNameClickable</code> property is <code>true</code>.`},{name:"rename",_ui5privacy:"public",type:{text:"CustomEvent"},description:`Fired when the <code>fileName</code> property gets changed.
<br><br>
<b>Note:</b> An edit button is displayed on each item,
when the <code>ui5-upload-collection-item</code> <code>type</code> property is set to <code>Detail</code>.`},{name:"terminate",_ui5privacy:"public",type:{text:"CustomEvent"},description:`Fired when the terminate button is pressed.
<br><br>
<b>Note:</b> Terminate button is displayed when <code>uploadState</code> property is set to <code>Uploading</code>.`},{name:"retry",_ui5privacy:"public",type:{text:"CustomEvent"},description:`Fired when the retry button is pressed.
<br><br>
<b>Note:</b> Retry button is displayed when <code>uploadState</code> property is set to <code>Error</code>.`},{name:"detail-click",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired when the user clicks on the detail button when type is <code>Detail</code>."}],superclass:{name:"ListItem",package:"@ui5/webcomponents",module:"dist/ListItem.js"},tagName:"ui5-upload-collection-item",customElement:!0,_ui5since:"1.0.0-rc.7",_ui5privacy:"public",_ui5implements:[{name:"IUploadCollectionItem",package:"@ui5/webcomponents-fiori",module:"dist/UploadCollection.js"}]}],exports:[{kind:"js",name:"default",declaration:{name:"UploadCollectionItem",module:"dist/UploadCollectionItem.js"}},{kind:"custom-element-definition",name:"ui5-upload-collection-item",declaration:{name:"UploadCollectionItem",module:"dist/UploadCollectionItem.js"}}]},{kind:"javascript-module",path:"dist/ViewSettingsDialog.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>
The <code>ui5-view-settings-dialog</code> component helps the user to sort data within a list or a table.
It consists of several lists like <code>Sort order</code> which is built-in and <code>Sort By</code> and <code>Filter By</code> lists,
for which you must be provide items(<code>ui5-sort-item</code> & <code>ui5-filter-item</code> respectively)
These options can be used to create sorters for a table.

The <code>ui5-view-settings-dialog</code> interrupts the current application processing as it is the only focused UI element and
the main screen is dimmed/blocked.
The <code>ui5-view-settings-dialog</code> is modal, which means that user action is required before returning to the parent window is possible.

<h3>Structure</h3>
A <code>ui5-view-settings-dialog</code> consists of a header, content, and a footer for action buttons.
The <code>ui5-view-settings-dialog</code> is usually displayed at the center of the screen.

<h3>Responsive Behavior</h3>
<code>ui5-view-settings-dialog</code> stretches on full screen on phones.

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents-fiori/dist/ViewSettingsDialog";</code>`,name:"ViewSettingsDialog",slots:[{name:"sortItems",description:`Defines the list of items against which the user could sort data.
<b>Note:</b> If you want to use this slot, you need to import used item: <code>import "@ui5/webcomponents-fiori/dist/SortItem";</code>`,_ui5type:{text:"Array<SortItem>",references:[{name:"SortItem",package:"@ui5/webcomponents-fiori",module:"dist/SortItem.js"}]},_ui5privacy:"public"},{name:"filterItems",description:`Defines the <code>filterItems</code> list.
<b>Note:</b> If you want to use this slot, you need to import used item: <code>import "@ui5/webcomponents-fiori/dist/FilterItem";</code>`,_ui5type:{text:"Array<FilterItem>",references:[{name:"FilterItem",package:"@ui5/webcomponents-fiori",module:"dist/FilterItem.js"}]},_ui5privacy:"public"}],members:[{kind:"field",name:"sortDescending",type:{text:"boolean"},description:"Defines the initial sort order.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"method",name:"show",return:{type:{text:"void"}},description:"Shows the dialog.",privacy:"public"},{kind:"method",name:"setConfirmedSettings",return:{type:{text:"void"}},parameters:[{name:"settings",type:{text:"VSDSettings",references:[{name:"VSDSettings",package:"@ui5/webcomponents-fiori",module:"dist/ViewSettingsDialog.js"}]},description:"predefined settings.",_ui5privacy:"public"}],description:`Sets a JavaScript object, as settings to the <code>ui5-view-settings-dialog</code>.
This method can be used after the dialog is initially open, as the dialog needs
to set its initial settings.<br>
The <code>ui5-view-settings-dialog</code> throws an event called "before-open",
which can be used as a trigger point.<br>
The object should have the following format:<br>
<pre>
{
sortOrder: "Ascending",
sortBy: "Name",
filters: [
	{"Filter 1": ["Some filter 1", "Some filter 2"]},
	{"Filter 2": ["Some filter 4"]},
]
}
</pre>`,privacy:"public"}],events:[{name:"confirm",_ui5privacy:"public",type:{text:"CustomEvent<ViewSettingsDialogConfirmEventDetail>",references:[{name:"ViewSettingsDialogConfirmEventDetail",package:"@ui5/webcomponents-fiori",module:"dist/ViewSettingsDialog.js"}]},description:"Fired when confirmation button is activated.",_ui5parameters:[{type:{text:"String"},name:"sortOrder",_ui5privacy:"public",description:"The current sort order selected."},{type:{text:"String"},name:"sortBy",_ui5privacy:"public",description:"The currently selected <code>ui5-sort-item</code> text attribute."},{type:{text:"HTMLElement"},name:"sortByItem",_ui5privacy:"public",description:"The currently selected <code>ui5-sort-item</code>."},{type:{text:"Boolean"},name:"sortDescending",_ui5privacy:"public",description:"The selected sort order (true = descending, false = ascending)."},{type:{text:"Array"},name:"filters",_ui5privacy:"public",description:"The selected filters items."}]},{name:"cancel",_ui5privacy:"public",type:{text:"CustomEvent<ViewSettingsDialogCancelEventDetail>",references:[{name:"ViewSettingsDialogCancelEventDetail",package:"@ui5/webcomponents-fiori",module:"dist/ViewSettingsDialog.js"}]},description:"Fired when cancel button is activated.",_ui5parameters:[{type:{text:"String"},name:"sortOrder",_ui5privacy:"public",description:"The current sort order selected."},{type:{text:"String"},name:"sortBy",_ui5privacy:"public",description:"The currently selected <code>ui5-sort-item</code> text attribute."},{type:{text:"HTMLElement"},name:"sortByItem",_ui5privacy:"public",description:"The currently selected <code>ui5-sort-item</code>."},{type:{text:"Boolean"},name:"sortDescending",_ui5privacy:"public",description:"The selected sort order (true = descending, false = ascending)."},{type:{text:"Array"},name:"filters",_ui5privacy:"public",description:"The selected filters items."}]},{name:"before-open",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired before the component is opened. <b>This event does not bubble.</b>"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-view-settings-dialog",customElement:!0,_ui5since:"1.0.0-rc.16",_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"ViewSettingsDialog",module:"dist/ViewSettingsDialog.js"}},{kind:"custom-element-definition",name:"ui5-view-settings-dialog",declaration:{name:"ViewSettingsDialog",module:"dist/ViewSettingsDialog.js"}}]},{kind:"javascript-module",path:"dist/Wizard.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-wizard</code> helps users to complete a complex task by dividing it into sections and guiding them through it.
It has two main areas - a navigation area at the top showing the step sequence and a content area below it.

<h3>Structure</h3>
<h4>Navigation area</h4>
The top most area of the <code>ui5-wizard</code> is occupied by the navigation area.
It shows the sequence of steps, where the recommended number of steps is between 3 and 8 steps.
<ul>
<li> Steps can have different visual representations - numbers or icons.</li>
<li> Steps might have labels for better readability - titleText and subTitleText.</li>
<li> Steps are defined by using the <code>ui5-wizard-step</code> as slotted element within the <code>ui5-wizard</code>.</li>
</ul>

<b>Note:</b> If no selected step is defined, the first step will be auto selected.
<br>
<b>Note:</b> If multiple selected steps are defined, the last step will be selected.

<h3>Keyboard Handling</h3>
The user can navigate using the following keyboard shortcuts:
<br>

<h4>Wizard Progress Navigation</h4>
<ul>
	<li>[LEFT], [DOWN] - Focus moves backward to the WizardProgressNavAnchors.</li>
	<li>[UP], [RIGHT] - Focus moves forward to the WizardProgressNavAnchor.</li>
	<li>[SPACE] or [ENTER], [RETURN] - Selects an active step</li>
	<li>[HOME] or [PAGE UP] - Focus goes to the first step</li>
	<li>[END] or [PAGE DOWN] - Focus goes to the last step</li>
</ul>

<h4>Fast Navigation</h4>
This component provides a build in fast navigation group which can be used via <code>F6 / Shift + F6</code> or <code> Ctrl + Alt(Option) + Down /  Ctrl + Alt(Option) + Up</code>.
In order to use this functionality, you need to import the following module:
<code>import "@ui5/webcomponents-base/dist/features/F6Navigation.js"</code>

<h4>Content</h4>
The content occupies the main part of the page. It can hold any type of HTML elements.
It's defined by using the <code>ui5-wizard-step</code> as slotted element within the <code>ui5-wizard</code>.

<h3>Scrolling</h3>
The component handles user scrolling by selecting the closest step, based on the current scroll position
and scrolls to particular place, when the user clicks on the step within the navigation area.
<br><br>

<b>Important:</b> In order the component's scrolling behaviour to work, it has to be limited from the outside parent element in terms of height.
The component or its parent has to be given percentage or absolute height. Otherwise, the component will be scrolled out with the entire page.
<br><br>
<b>For example:</b>
<br><br>
<code>&lt;ui5-dialog style="height: 80%"&gt;<br></code>
<code>&#9;&lt;ui5-wizard&gt;&lt;/ui5-wizard&gt;<br></code>
<code>&lt;/ui5-dialog&gt;</code>

<h4>Moving to next step</h4>
The <code>ui5-wizard-step</code> provides the necessary API and it's up to the user of the component to use it to move to the next step.
You have to set its <code>selected</code> property (and remove the <code>disabled</code> one if set) to <code>true</code>.
The <code>ui5-wizard</code> will automatically scroll to the content of the newly selected step.
<br><br>

The Fiori 3 guidelines recommends having a "nextStep" button in the content area.
You can place a button, or any other type of element to trigger step change, inside the <code>ui5-wizard-step</code>,
and show/hide it when certain fields are filled or user defined criteria is met.

<h3>Usage</h3>
<h4>When to use:</h4>
When the user has to accomplish a long or unfamiliar task.

<h4>When not to use:</h4>
When the task has less than 3 steps.

<h3>Responsive Behavior</h3>
On small widths the step's titleText, subtitleText and separators in the navigation area shrink and from particular point the steps are grouped together and overlap.
Tapping on them will show a popover to select the step to navigate to. On mobile device, the grouped steps are presented within a dialog.

<h3>ES6 Module Import</h3>
<code>import "@ui5/webcomponents-fiori/dist/Wizard.js";</code> (includes &lt;ui5-wizard-step/&gt;)`,name:"Wizard",cssParts:[{description:"Used to style the progress navigator of the <code>ui5-wizard</code>.",name:"navigator"},{description:"Used to style a <code>ui5-wizard-step</code> container.",name:"step-content"}],slots:[{name:"default",description:`Defines the steps.
<br><br>
<b>Note:</b> Use the available <code>ui5-wizard-step</code> component.`,_ui5propertyName:"steps",_ui5type:{text:"Array<WizardStep>",references:[{name:"WizardStep",package:"@ui5/webcomponents-fiori",module:"dist/WizardStep.js"}]},_ui5privacy:"public"}],members:[{kind:"field",name:"contentLayout",type:{text:"WizardContentLayout",references:[{name:"WizardContentLayout",package:"@ui5/webcomponents-fiori",module:"dist/types/WizardContentLayout.js"}]},description:"Defines how the content of the <code>ui5-wizard</code> would be visualized.",privacy:"public",default:'"MultipleSteps"',_ui5since:"1.14.0",_ui5validator:"WizardContentLayout"}],events:[{name:"step-change",_ui5privacy:"public",type:{text:"CustomEvent<WizardStepChangeEventDetail>",references:[{name:"WizardStepChangeEventDetail",package:"@ui5/webcomponents-fiori",module:"dist/Wizard.js"}]},description:`Fired when the step is changed by user interaction - either with scrolling,
or by clicking on the steps within the component header.`,_ui5parameters:[{type:{text:"WizardStep",references:[{name:"WizardStep",package:"@ui5/webcomponents-fiori",module:"dist/WizardStep.js"}]},name:"step",_ui5privacy:"public",description:"The new step."},{type:{text:"WizardStep",references:[{name:"WizardStep",package:"@ui5/webcomponents-fiori",module:"dist/WizardStep.js"}]},name:"previousStep",_ui5privacy:"public",description:"The previous step."},{type:{text:"boolean"},name:"changeWithClick",_ui5privacy:"public",description:"The step change occurs due to user's click or 'Enter'/'Space' key press on step within the navigation."}]}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-wizard",customElement:!0,_ui5since:"1.0.0-rc.10",_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"Wizard",module:"dist/Wizard.js"}},{kind:"custom-element-definition",name:"ui5-wizard",declaration:{name:"Wizard",module:"dist/Wizard.js"}}]},{kind:"javascript-module",path:"dist/WizardStep.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

A component that represents a logical step as part of the <code>ui5-wizard</code>.
It is meant to aggregate arbitrary HTML elements that form the content of a single step.

<h3>Structure</h3>
<ul>
<li>Each wizard step has arbitrary content.</li>
<li>Each wizard step might have texts - defined by the <code>titleText</code> and <code>subtitleText</code> properties.</li>
<li>Each wizard step might have an icon - defined by the <code>icon</code> property.</li>
<li>Each wizard step might display a number in place of the <code>icon</code>, when it's missing.</li>
</ul>

<h3>Usage</h3>
The <code>ui5-wizard-step</code> component should be used only as slot of the <code>ui5-wizard</code> component
and should not be used standalone.`,name:"WizardStep",slots:[{description:"Defines the step content.",name:"default",_ui5privacy:"public",_ui5type:{text:"Array<Node>"}}],members:[{kind:"field",name:"titleText",type:{text:"string"},description:`Defines the <code>titleText</code> of the step.
<br><br>

<b>Note:</b> The text is displayed in the <code>ui5-wizard</code> navigation header.`,default:'""',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"String"},{kind:"field",name:"subtitleText",type:{text:"string"},description:`Defines the <code>subtitleText</code> of the step.
<br><br>

<b>Note:</b> the text is displayed in the <code>ui5-wizard</code> navigation header.`,default:'""',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"String"},{kind:"field",name:"icon",type:{text:"string"},description:`Defines the <code>icon</code> of the step.
<br><br>

<b>Note:</b> The icon is displayed in the <code>ui5-wizard</code> navigation header.
<br><br>

The SAP-icons font provides numerous options.
See all the available icons in the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"disabled",type:{text:"boolean"},description:`Defines if the step is <code>disabled</code>. When disabled the step is displayed,
but the user can't select the step by clicking or navigate to it with scrolling.
<br><br>

<b>Note:</b> Step can't be <code>selected</code> and <code>disabled</code> at the same time.
In this case the <code>selected</code> property would take precedence.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"selected",type:{text:"boolean"},description:`Defines the step's <code>selected</code> state - the step that is currently active.
<br><br>

<b>Note:</b> Step can't be <code>selected</code> and <code>disabled</code> at the same time.
In this case the <code>selected</code> property would take precedence.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"branching",type:{text:"boolean"},description:`When <code>branching</code> is enabled a dashed line would be displayed after the step,
meant to indicate that the next step is not yet known and depends on user choice in the current step.
<br><br>

<b>Note:</b> It is recommended to use <code>branching</code> on the last known step
and later add new steps when it becomes clear how the wizard flow should continue.`,default:"false",privacy:"public",_ui5validator:"Boolean"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-wizard-step",customElement:!0,_ui5since:"1.0.0-rc.10",_ui5privacy:"public",_ui5abstract:!0}],exports:[{kind:"js",name:"default",declaration:{name:"WizardStep",module:"dist/WizardStep.js"}},{kind:"custom-element-definition",name:"ui5-wizard-step",declaration:{name:"WizardStep",module:"dist/WizardStep.js"}}]},{kind:"javascript-module",path:"dist/WizardTab.js",declarations:[],exports:[{kind:"js",name:"default",declaration:{name:"WizardTab",module:"dist/WizardTab.js"}}]}],y={schemaVersion:h,readme:b,modules:f},v="1.0.0",g="",k=[{kind:"javascript-module",path:"dist/features/ColorPaletteMoreColors.js",declarations:[],exports:[{kind:"js",name:"default",declaration:{name:"ColorPaletteMoreColors",module:"dist/features/ColorPaletteMoreColors.js"}}]},{kind:"javascript-module",path:"dist/features/InputElementsFormSupport.js",declarations:[],exports:[{kind:"js",name:"default",declaration:{name:"FormSupport",module:"dist/features/InputElementsFormSupport.js"}}]},{kind:"javascript-module",path:"dist/features/InputSuggestions.js",declarations:[],exports:[{kind:"js",name:"default",declaration:{name:"Suggestions",module:"dist/features/InputSuggestions.js"}}]},{kind:"javascript-module",path:"dist/popup-utils/OpenedPopupsRegistry.js",declarations:[],exports:[]},{kind:"javascript-module",path:"dist/popup-utils/PopoverRegistry.js",declarations:[],exports:[]},{kind:"javascript-module",path:"dist/timepicker-utils/TimeSlider.js",declarations:[],exports:[]},{kind:"javascript-module",path:"dist/types/AvatarColorScheme.js",declarations:[{kind:"enum",name:"AvatarColorScheme",description:"Different types of AvatarColorScheme.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",default:"Accent1",name:"Accent1",readonly:!0},{kind:"field",static:!0,privacy:"public",default:"Accent2",name:"Accent2",readonly:!0},{kind:"field",static:!0,privacy:"public",default:"Accent3",name:"Accent3",readonly:!0},{kind:"field",static:!0,privacy:"public",default:"Accent4",name:"Accent4",readonly:!0},{kind:"field",static:!0,privacy:"public",default:"Accent5",name:"Accent5",readonly:!0},{kind:"field",static:!0,privacy:"public",default:"Accent6",name:"Accent6",readonly:!0},{kind:"field",static:!0,privacy:"public",default:"Accent7",name:"Accent7",readonly:!0},{kind:"field",static:!0,privacy:"public",default:"Accent8",name:"Accent8",readonly:!0},{kind:"field",static:!0,privacy:"public",default:"Accent9",name:"Accent9",readonly:!0},{kind:"field",static:!0,privacy:"public",default:"Accent10",name:"Accent10",readonly:!0},{kind:"field",static:!0,privacy:"public",default:"Placeholder",name:"Placeholder",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"AvatarColorScheme",module:"dist/types/AvatarColorScheme.js"}}]},{kind:"javascript-module",path:"dist/types/AvatarGroupType.js",declarations:[{kind:"enum",name:"AvatarGroupType",description:"Different types of AvatarGroupType.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"The avatars are displayed as partially overlapped on top of each other and the entire group has one click or tap area.",default:"Group",name:"Group",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"The avatars are displayed side-by-side and each avatar has its own click or tap area.",default:"Individual",name:"Individual",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"AvatarGroupType",module:"dist/types/AvatarGroupType.js"}}]},{kind:"javascript-module",path:"dist/types/AvatarShape.js",declarations:[{kind:"enum",name:"AvatarShape",description:"Different types of AvatarShape.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"Circular shape.",default:"Circle",name:"Circle",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Square shape.",default:"Square",name:"Square",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"AvatarShape",module:"dist/types/AvatarShape.js"}}]},{kind:"javascript-module",path:"dist/types/AvatarSize.js",declarations:[{kind:"enum",name:"AvatarSize",description:"Different types of AvatarSize.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:`component size - 2rem
font size - 1rem`,default:"XS",name:"XS",readonly:!0},{kind:"field",static:!0,privacy:"public",description:`component size - 3rem
font size - 1.5rem`,default:"S",name:"S",readonly:!0},{kind:"field",static:!0,privacy:"public",description:`component size - 4rem
font size - 2rem`,default:"M",name:"M",readonly:!0},{kind:"field",static:!0,privacy:"public",description:`component size - 5rem
font size - 2.5rem`,default:"L",name:"L",readonly:!0},{kind:"field",static:!0,privacy:"public",description:`component size - 7rem
font size - 3rem`,default:"XL",name:"XL",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"AvatarSize",module:"dist/types/AvatarSize.js"}}]},{kind:"javascript-module",path:"dist/types/BackgroundDesign.js",declarations:[{kind:"enum",name:"BackgroundDesign",description:"Defines background designs.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"A solid background color dependent on the theme.",default:"Solid",name:"Solid",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Transparent background.",default:"Transparent",name:"Transparent",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"A translucent background depending on the opacity value of the theme.",default:"Translucent",name:"Translucent",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"BackgroundDesign",module:"dist/types/BackgroundDesign.js"}}]},{kind:"javascript-module",path:"dist/types/BadgeDesign.js",declarations:[{kind:"enum",name:"BadgeDesign",description:"Defines badge design types.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"Set1 of generic indication colors that are intended for industry-specific use cases",default:"Set1",name:"Set1",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Set2 of generic indication colors that are intended for industry-specific use cases",default:"Set2",name:"Set2",readonly:!0},{kind:"field",static:!0,privacy:"public",description:`Set3 of generic indication colors that are
intended for industry-specific use cases. Used in SAP BTP design system.`,default:"Set3",name:"Set3",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Neutral design",default:"Neutral",name:"Neutral",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Information design",default:"Information",name:"Information",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Positive design",default:"Positive",name:"Positive",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Negative design",default:"Negative",name:"Negative",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Critical design",default:"Critical",name:"Critical",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"BadgeDesign",module:"dist/types/BadgeDesign.js"}}]},{kind:"javascript-module",path:"dist/types/BorderDesign.js",declarations:[{kind:"enum",name:"BorderDesign",description:"Defines border designs.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"A solid border color dependent on the theme.",default:"Solid",name:"Solid",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Specifies no border.",default:"None",name:"None",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"BorderDesign",module:"dist/types/BorderDesign.js"}}]},{kind:"javascript-module",path:"dist/types/BreadcrumbsDesign.js",declarations:[{kind:"enum",name:"BreadcrumbsDesign",description:"Different  Breadcrumbs designs.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:`Shows the current page as the last item in the trail.
The last item contains only plain text and is not a link.`,default:"Standard",name:"Standard",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"All items are displayed as links.",default:"NoCurrentPage",name:"NoCurrentPage",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"BreadcrumbsDesign",module:"dist/types/BreadcrumbsDesign.js"}}]},{kind:"javascript-module",path:"dist/types/BreadcrumbsSeparatorStyle.js",declarations:[{kind:"enum",name:"BreadcrumbsSeparatorStyle",description:"Different Breadcrumbs separator styles.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:'The separator appears as "/".',default:"Slash",name:"Slash",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'The separator appears as "\\".',default:"BackSlash",name:"BackSlash",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'The separator appears as "\\\\".',default:"DoubleBackSlash",name:"DoubleBackSlash",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'The separator appears as ">>".',default:"DoubleGreaterThan",name:"DoubleGreaterThan",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'The separator appears as "//" .',default:"DoubleSlash",name:"DoubleSlash",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'The separator appears as ">".',default:"GreaterThan",name:"GreaterThan",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"BreadcrumbsSeparatorStyle",module:"dist/types/BreadcrumbsSeparatorStyle.js"}}]},{kind:"javascript-module",path:"dist/types/BusyIndicatorSize.js",declarations:[{kind:"enum",name:"BusyIndicatorSize",description:"Different BusyIndicator sizes.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"small size",default:"Small",name:"Small",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"medium size",default:"Medium",name:"Medium",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"large size",default:"Large",name:"Large",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"BusyIndicatorSize",module:"dist/types/BusyIndicatorSize.js"}}]},{kind:"javascript-module",path:"dist/types/ButtonDesign.js",declarations:[{kind:"enum",name:"ButtonDesign",description:"Different Button designs.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"default type (no special styling)",default:"Default",name:"Default",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"accept type (green button)",default:"Positive",name:"Positive",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"reject style (red button)",default:"Negative",name:"Negative",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"transparent type",default:"Transparent",name:"Transparent",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"emphasized type",default:"Emphasized",name:"Emphasized",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"attention type",default:"Attention",name:"Attention",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"ButtonDesign",module:"dist/types/ButtonDesign.js"}}]},{kind:"javascript-module",path:"dist/types/ButtonType.js",declarations:[{kind:"enum",name:"ButtonType",description:"Determines if the button has special form-related functionality.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"The button does not do anything special when inside a form",default:"Button",name:"Button",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"The button acts as a submit button (submits a form)",default:"Submit",name:"Submit",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"The button acts as a reset button (resets a form)",default:"Reset",name:"Reset",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"ButtonType",module:"dist/types/ButtonType.js"}}]},{kind:"javascript-module",path:"dist/types/CalendarPickersMode.js",declarations:[],exports:[{kind:"js",name:"default",declaration:{name:"CalendarPickersMode",module:"dist/types/CalendarPickersMode.js"}}]},{kind:"javascript-module",path:"dist/types/CalendarSelectionMode.js",declarations:[{kind:"enum",name:"CalendarSelectionMode",description:"Different Calendar selection mode.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"Only one date can be selected at a time",default:"Single",name:"Single",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Several dates can be selected",default:"Multiple",name:"Multiple",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"A range defined by a start date and an end date can be selected",default:"Range",name:"Range",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"CalendarSelectionMode",module:"dist/types/CalendarSelectionMode.js"}}]},{kind:"javascript-module",path:"dist/types/CarouselArrowsPlacement.js",declarations:[{kind:"enum",name:"CarouselArrowsPlacement",description:"Different Carousel arrows placement.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"Carousel arrows are placed on the sides of the current Carousel page.",default:"Content",name:"Content",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Carousel arrows are placed on the sides of the page indicator of the Carousel.",default:"Navigation",name:"Navigation",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"CarouselArrowsPlacement",module:"dist/types/CarouselArrowsPlacement.js"}}]},{kind:"javascript-module",path:"dist/types/CarouselPageIndicatorStyle.js",declarations:[{kind:"enum",name:"CarouselPageIndicatorStyle",description:"Different Carousel page indicator styles.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:`The page indicator will be visualized as dots if there are fewer than 9 pages.
If there are more pages, the page indicator will switch to displaying the current page and the total number of pages. (e.g. X of Y)`,default:"Default",name:"Default",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"The page indicator will display the current page and the total number of pages. (e.g. X of Y)",default:"Numeric",name:"Numeric",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"CarouselPageIndicatorStyle",module:"dist/types/CarouselPageIndicatorStyle.js"}}]},{kind:"javascript-module",path:"dist/types/ComboBoxFilter.js",declarations:[{kind:"enum",name:"ComboBoxFilter",description:"Different filtering types of the ComboBox.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"Defines filtering by first symbol of each word of item's text.",default:"StartsWithPerTerm",name:"StartsWithPerTerm",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Defines filtering by starting symbol of item's text.",default:"StartsWith",name:"StartsWith",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Defines contains filtering.",default:"Contains",name:"Contains",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Removes any filtering applied while typing",default:"None",name:"None",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"ComboBoxFilter",module:"dist/types/ComboBoxFilter.js"}}]},{kind:"javascript-module",path:"dist/types/HasPopup.js",declarations:[{kind:"enum",name:"HasPopup",description:"Different types of HasPopup.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"Dialog popup type.",default:"Dialog",name:"Dialog",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Grid popup type.",default:"Grid",name:"Grid",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"ListBox popup type.",default:"ListBox",name:"ListBox",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Menu popup type.",default:"Menu",name:"Menu",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Tree popup type.",default:"Tree",name:"Tree",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"HasPopup",module:"dist/types/HasPopup.js"}}]},{kind:"javascript-module",path:"dist/types/IconDesign.js",declarations:[{kind:"enum",name:"IconDesign",description:"Different Icon semantic designs.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"Contrast design",default:"Contrast",name:"Contrast",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Critical design",default:"Critical",name:"Critical",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Default design (brand design)",default:"Default",name:"Default",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"info type",default:"Information",name:"Information",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Negative design",default:"Negative",name:"Negative",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Neutral design",default:"Neutral",name:"Neutral",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Design that indicates an icon which isn't interactive",default:"NonInteractive",name:"NonInteractive",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Positive design",default:"Positive",name:"Positive",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"IconDesign",module:"dist/types/IconDesign.js"}}]},{kind:"javascript-module",path:"dist/types/InputType.js",declarations:[{kind:"enum",name:"InputType",description:"Different input types.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"Defines a one-line text input field:",default:"Text",name:"Text",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Used for input fields that must contain an e-mail address.",default:"Email",name:"Email",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Defines a numeric input field.",default:"Number",name:"Number",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Defines a password field.",default:"Password",name:"Password",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Used for input fields that should contain a telephone number.",default:"Tel",name:"Tel",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Used for input fields that should contain a URL address.",default:"URL",name:"URL",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"InputType",module:"dist/types/InputType.js"}}]},{kind:"javascript-module",path:"dist/types/LinkDesign.js",declarations:[{kind:"enum",name:"LinkDesign",description:"Different link designs.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"default type (no special styling)",default:"Default",name:"Default",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"subtle type (appears as regular text, rather than a link)",default:"Subtle",name:"Subtle",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"emphasized type",default:"Emphasized",name:"Emphasized",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"LinkDesign",module:"dist/types/LinkDesign.js"}}]},{kind:"javascript-module",path:"dist/types/ListGrowingMode.js",declarations:[{kind:"enum",name:"ListGrowingMode",description:"Different list growing modes.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:`Component's "load-more" is fired upon pressing a "More" button.
at the bottom.`,default:"Button",name:"Button",readonly:!0},{kind:"field",static:!0,privacy:"public",description:`Component's "load-more" is fired upon scroll.`,default:"Scroll",name:"Scroll",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Component's growing is not enabled.",default:"None",name:"None",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"ListGrowingMode",module:"dist/types/ListGrowingMode.js"}}]},{kind:"javascript-module",path:"dist/types/ListItemType.js",declarations:[{kind:"enum",name:"ListItemType",description:"Different list item types.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"Indicates the list item does not have any active feedback when item is pressed.",default:"Inactive",name:"Inactive",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Indicates that the item is clickable via active feedback when item is pressed.",default:"Active",name:"Active",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Enables detail button of the list item that fires detail-click event.",default:"Detail",name:"Detail",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Enables the type of navigation, which is specified to add an arrow at the end of the items and fires navigate-click event.",default:"Navigation",name:"Navigation",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"ListItemType",module:"dist/types/ListItemType.js"}}]},{kind:"javascript-module",path:"dist/types/ListMode.js",declarations:[{kind:"enum",name:"ListMode",description:"Different list modes.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"Default mode (no selection).",default:"None",name:"None",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Right-positioned single selection mode (only one list item can be selected).",default:"SingleSelect",name:"SingleSelect",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Left-positioned single selection mode (only one list item can be selected).",default:"SingleSelectBegin",name:"SingleSelectBegin",readonly:!0},{kind:"field",static:!0,privacy:"public",description:`Selected item is highlighted but no selection element is visible
(only one list item can be selected).`,default:"SingleSelectEnd",name:"SingleSelectEnd",readonly:!0},{kind:"field",static:!0,privacy:"public",description:`Selected item is highlighted and selection is changed upon arrow navigation
(only one list item can be selected - this is always the focused item).`,default:"SingleSelectAuto",name:"SingleSelectAuto",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Multi selection mode (more than one list item can be selected).",default:"MultiSelect",name:"MultiSelect",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Delete mode (only one list item can be deleted via provided delete button)",default:"Delete",name:"Delete",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"ListMode",module:"dist/types/ListMode.js"}}]},{kind:"javascript-module",path:"dist/types/ListSeparators.js",declarations:[{kind:"enum",name:"ListSeparators",description:"Different types of list items separators.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"Separators between the items including the last and the first one.",default:"All",name:"All",readonly:!0},{kind:"field",static:!0,privacy:"public",description:`Separators between the items.
Note: This enumeration depends on the theme.`,default:"Inner",name:"Inner",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"No item separators.",default:"None",name:"None",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"ListSeparators",module:"dist/types/ListSeparators.js"}}]},{kind:"javascript-module",path:"dist/types/MessageStripDesign.js",declarations:[{kind:"enum",name:"MessageStripDesign",description:"MessageStrip designs.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"Message should be just an information",default:"Information",name:"Information",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Message is a success message",default:"Positive",name:"Positive",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Message is an error",default:"Negative",name:"Negative",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Message is a warning",default:"Warning",name:"Warning",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"MessageStripDesign",module:"dist/types/MessageStripDesign.js"}}]},{kind:"javascript-module",path:"dist/types/PanelAccessibleRole.js",declarations:[{kind:"enum",name:"PanelAccessibleRole",description:"Panel accessible roles.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:`Represents the ARIA role "complementary".
A section of the page, designed to be complementary to the main content at a similar level in the DOM hierarchy.`,default:"Complementary",name:"Complementary",readonly:!0},{kind:"field",static:!0,privacy:"public",description:`Represents the ARIA role "Form".
A landmark region that contains a collection of items and objects that, as a whole, create a form.`,default:"Form",name:"Form",readonly:!0},{kind:"field",static:!0,privacy:"public",description:`Represents the ARIA role "Region".
A section of a page, that is important enough to be included in a page summary or table of contents.`,default:"Region",name:"Region",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"PanelAccessibleRole",module:"dist/types/PanelAccessibleRole.js"}}]},{kind:"javascript-module",path:"dist/types/PopoverHorizontalAlign.js",declarations:[{kind:"enum",name:"PopoverHorizontalAlign",description:"Popover horizontal align types.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"Popover is centered.",default:"Center",name:"Center",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Popover is aligned with the left side of the target. When direction is RTL, it is right aligned.",default:"Left",name:"Left",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Popover is aligned with the right side of the target. When direction is RTL, it is left aligned.",default:"Right",name:"Right",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Popover is stretched.",default:"Stretch",name:"Stretch",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"PopoverHorizontalAlign",module:"dist/types/PopoverHorizontalAlign.js"}}]},{kind:"javascript-module",path:"dist/types/PopoverPlacementType.js",declarations:[{kind:"enum",name:"PopoverPlacementType",description:"Popover placement types.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"Popover will be placed at the left side of the reference element.",default:"Left",name:"Left",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Popover will be placed at the right side of the reference element.",default:"Right",name:"Right",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Popover will be placed at the top of the reference element.",default:"Top",name:"Top",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Popover will be placed at the bottom of the reference element.",default:"Bottom",name:"Bottom",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"PopoverPlacementType",module:"dist/types/PopoverPlacementType.js"}}]},{kind:"javascript-module",path:"dist/types/PopoverVerticalAlign.js",declarations:[{kind:"enum",name:"PopoverVerticalAlign",description:"Popover vertical align types.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",default:"Center",name:"Center",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Popover will be placed at the top of the reference control.",default:"Top",name:"Top",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Popover will be placed at the bottom of the reference control.",default:"Bottom",name:"Bottom",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Popover will be streched",default:"Stretch",name:"Stretch",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"PopoverVerticalAlign",module:"dist/types/PopoverVerticalAlign.js"}}]},{kind:"javascript-module",path:"dist/types/PopupAccessibleRole.js",declarations:[{kind:"enum",name:"PopupAccessibleRole",description:"Popup accessible roles.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"Represents no ARIA role.",default:"None",name:"None",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'Represents the ARIA role "dialog".',default:"Dialog",name:"Dialog",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'Represents the ARIA role "alertdialog".',default:"AlertDialog",name:"AlertDialog",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"PopupAccessibleRole",module:"dist/types/PopupAccessibleRole.js"}}]},{kind:"javascript-module",path:"dist/types/Priority.js",declarations:[{kind:"enum",name:"Priority",description:"Different types of Priority.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"High priority.",default:"High",name:"High",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Medium priority.",default:"Medium",name:"Medium",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Low priority.",default:"Low",name:"Low",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Default, none priority.",default:"None",name:"None",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"Priority",module:"dist/types/Priority.js"}}]},{kind:"javascript-module",path:"dist/types/SegmentedButtonMode.js",declarations:[{kind:"enum",name:"SegmentedButtonMode",description:"Different SegmentedButton modes.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"There is always one selected. Selecting one deselects the previous one.",default:"SingleSelect",name:"SingleSelect",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Multiple items can be selected at a time. All items can be deselected.",default:"MultiSelect",name:"MultiSelect",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"SegmentedButtonMode",module:"dist/types/SegmentedButtonMode.js"}}]},{kind:"javascript-module",path:"dist/types/SemanticColor.js",declarations:[{kind:"enum",name:"SemanticColor",description:"Different types of SemanticColor.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"Default color (brand color)",default:"Default",name:"Default",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Positive color",default:"Positive",name:"Positive",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Negative color",default:"Negative",name:"Negative",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Critical color",default:"Critical",name:"Critical",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Neutral color.",default:"Neutral",name:"Neutral",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"SemanticColor",module:"dist/types/SemanticColor.js"}}]},{kind:"javascript-module",path:"dist/types/SwitchDesign.js",declarations:[{kind:"enum",name:"SwitchDesign",description:"Different types of Switch designs.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"Defines the Switch as Textual",default:"Textual",name:"Textual",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Defines the Switch as Graphical",default:"Graphical",name:"Graphical",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"SwitchDesign",module:"dist/types/SwitchDesign.js"}}]},{kind:"javascript-module",path:"dist/types/TabContainerBackgroundDesign.js",declarations:[{kind:"enum",name:"TabContainerBackgroundDesign",description:"Background design for the header and content of TabContainer.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"A Solid background color.",default:"Solid",name:"Solid",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"A Transparent background color.",default:"Transparent",name:"Transparent",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"A Translucent background color.",default:"Translucent",name:"Translucent",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"TabContainerBackgroundDesign",module:"dist/types/TabContainerBackgroundDesign.js"}}]},{kind:"javascript-module",path:"dist/types/TabContainerTabsPlacement.js",declarations:[],exports:[{kind:"js",name:"default",declaration:{name:"TabContainerTabsPlacement",module:"dist/types/TabContainerTabsPlacement.js"}}]},{kind:"javascript-module",path:"dist/types/TabLayout.js",declarations:[{kind:"enum",name:"TabLayout",description:"Tab layout of TabContainer.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:'Inline type, the tab "main text" and "additionalText" are displayed horizotally.',default:"Inline",name:"Inline",readonly:!0},{kind:"field",static:!0,privacy:"public",description:'Standard type, the tab "main text" and "additionalText" are displayed vertically.',default:"Standard",name:"Standard",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"TabLayout",module:"dist/types/TabLayout.js"}}]},{kind:"javascript-module",path:"dist/types/TableColumnPopinDisplay.js",declarations:[{kind:"enum",name:"TableColumnPopinDisplay",description:"Table cell popin display.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"default type",default:"Block",name:"Block",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"inline type (the title and value are displayed on the same line)",default:"Inline",name:"Inline",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"TableColumnPopinDisplay",module:"dist/types/TableColumnPopinDisplay.js"}}]},{kind:"javascript-module",path:"dist/types/TableGrowingMode.js",declarations:[{kind:"enum",name:"TableGrowingMode",description:"Different table growing modes.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:`Component <code>load-more</code> is fired
upon pressing a "More" button at the bottom.`,default:"Button",name:"Button",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Component <code>load-more</code> is fired upon scroll.",default:"Scroll",name:"Scroll",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Component growing is not enabled.",default:"None",name:"None",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"TableGrowingMode",module:"dist/types/TableGrowingMode.js"}}]},{kind:"javascript-module",path:"dist/types/TableMode.js",declarations:[{kind:"enum",name:"TableMode",description:"Different table modes.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"Default mode (no selection).",default:"None",name:"None",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Single selection mode (only one table row can be selected).",default:"SingleSelect",name:"SingleSelect",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Multi selection mode (more than one table row can be selected).",default:"MultiSelect",name:"MultiSelect",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"TableMode",module:"dist/types/TableMode.js"}}]},{kind:"javascript-module",path:"dist/types/TableRowType.js",declarations:[{kind:"enum",name:"TableRowType",description:"Different table row types.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"Indicates that the table row does not have any active feedback when item is pressed.",default:"Inactive",name:"Inactive",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Indicates that the table row is clickable via active feedback when item is pressed.",default:"Active",name:"Active",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"TableRowType",module:"dist/types/TableRowType.js"}}]},{kind:"javascript-module",path:"dist/types/TabsOverflowMode.js",declarations:[{kind:"enum",name:"TabsOverflowMode",description:"Tabs overflow mode in TabContainer.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"End type is used if there should be only one overflow with hidden the tabs at the end of the tab container.",default:"End",name:"End",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"StartAndEnd type is used if there should be two overflows on both ends of the tab container.",default:"StartAndEnd",name:"StartAndEnd",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"TabsOverflowMode",module:"dist/types/TabsOverflowMode.js"}}]},{kind:"javascript-module",path:"dist/types/TitleLevel.js",declarations:[{kind:"enum",name:"TitleLevel",description:"Different types of Title level.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"Renders <code>h1</code> tag.",default:"H1",name:"H1",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Renders <code>h2</code> tag.",default:"H2",name:"H2",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Renders <code>h3</code> tag.",default:"H3",name:"H3",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Renders <code>h4</code> tag.",default:"H4",name:"H4",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Renders <code>h5</code> tag.",default:"H5",name:"H5",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Renders <code>h6</code> tag.",default:"H6",name:"H6",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"TitleLevel",module:"dist/types/TitleLevel.js"}}]},{kind:"javascript-module",path:"dist/types/ToastPlacement.js",declarations:[{kind:"enum",name:"ToastPlacement",description:"Toast placement.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"Toast is placed at the <code>TopStart</code> position of its container.",default:"TopStart",name:"TopStart",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Toast is placed at the <code>TopCenter</code> position of its container.",default:"TopCenter",name:"TopCenter",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Toast is placed at the <code>TopEnd</code> position of its container.",default:"TopEnd",name:"TopEnd",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Toast is placed at the <code>MiddleStart</code> position of its container.",default:"MiddleStart",name:"MiddleStart",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Toast is placed at the <code>MiddleCenter</code> position of its container.",default:"MiddleCenter",name:"MiddleCenter",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Toast is placed at the <code>MiddleEnd</code> position of its container.",default:"MiddleEnd",name:"MiddleEnd",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Toast is placed at the <code>BottomStart</code> position of its container.",default:"BottomStart",name:"BottomStart",readonly:!0},{kind:"field",static:!0,privacy:"public",description:`Toast is placed at the <code>BottomCenter</code> position of its container.
Default placement (no selection)`,default:"BottomCenter",name:"BottomCenter",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Toast is placed at the <code>BottomEnd</code> position of its container.",default:"BottomEnd",name:"BottomEnd",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"ToastPlacement",module:"dist/types/ToastPlacement.js"}}]},{kind:"javascript-module",path:"dist/types/ToolbarAlign.js",declarations:[{kind:"enum",name:"ToolbarAlign",description:"Defines which direction the items of ui5-toolbar will be aligned.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"Toolbar items are situated at the <code>start</code> of the Toolbar",default:"Start",name:"Start",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"Toolbar items are situated at the <code>end</code> of the Toolbar",default:"End",name:"End",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"ToolbarAlign",module:"dist/types/ToolbarAlign.js"}}]},{kind:"javascript-module",path:"dist/types/ToolbarItemOverflowBehavior.js",declarations:[{kind:"enum",name:"ToolbarItemOverflowBehavior",description:"Defines the priority of the toolbar item to go inside overflow popover.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"The item is presented inside the toolbar and goes in the popover, when there is not enough space.",default:"Default",name:"Default",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"When set, the item will never go to the overflow popover.",default:"NeverOverflow",name:"NeverOverflow",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"When set, the item will be always part of the overflow part of ui5-toolbar.",default:"AlwaysOverflow",name:"AlwaysOverflow",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"ToolbarItemOverflowBehavior",module:"dist/types/ToolbarItemOverflowBehavior.js"}}]},{kind:"javascript-module",path:"dist/types/WrappingType.js",declarations:[{kind:"enum",name:"WrappingType",description:"Different types of wrapping.",_ui5privacy:"public",members:[{kind:"field",static:!0,privacy:"public",description:"The text will be truncated with an ellipsis.",default:"None",name:"None",readonly:!0},{kind:"field",static:!0,privacy:"public",description:"The text will wrap. The words will not be broken based on hyphenation.",default:"Normal",name:"Normal",readonly:!0}]}],exports:[{kind:"js",name:"default",declaration:{name:"WrappingType",module:"dist/types/WrappingType.js"}}]},{kind:"javascript-module",path:"dist/Assets-static.js",declarations:[],exports:[]},{kind:"javascript-module",path:"dist/Assets.js",declarations:[],exports:[]},{kind:"javascript-module",path:"dist/Avatar.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

An image-like component that has different display options for representing images and icons
in different shapes and sizes, depending on the use case.

The shape can be circular or square. There are several predefined sizes, as well as an option to
set a custom size.

<br><br>
<h3>Keyboard Handling</h3>

<ul>
<li>[SPACE, ENTER, RETURN] - Fires the <code>click</code> event if the <code>interactive</code> property is set to true.</li>
<li>[SHIFT] - If [SPACE] is pressed, pressing [SHIFT] releases the component without triggering the click event.</li>
</ul>
<br><br>

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/Avatar.js";</code>`,name:"Avatar",slots:[{name:"default",description:`Receives the desired <code>&lt;img&gt;</code> tag

<b>Note:</b> If you experience flickering of the provided image, you can hide the component until it is being defined with the following CSS:
<br /> <br />
<code>
	ui5-avatar:not(:defined) { <br />
		&nbsp;visibility: hidden; <br />
	} <br />
</code>`,_ui5since:"1.0.0-rc.15",_ui5propertyName:"image",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"},{name:"badge",description:`Defines the optional badge that will be used for visual affordance.
<b>Note:</b> While the slot allows for custom badges, to achieve
the Fiori design, please use <code>ui5-badge</code> with <code>ui5-icon</code>
in the corresponding <code>icon</code> slot, without text nodes.
<br><br>
Example:
<br><br>
&lt;ui5-avatar><br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ui5-badge slot="badge"><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ui5-icon slot="icon" name="employee">&lt;/ui5-icon><br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ui5-badge><br>
&lt;/ui5-avatar>
<br><br>
<ui5-avatar initials="AB" color-scheme="Accent1">
<ui5-badge slot="badge">
<ui5-icon slot="icon" name="accelerated"></ui5-icon>
</ui5-badge>
</ui5-avatar>`,_ui5since:"1.7.0",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"}],members:[{kind:"field",name:"disabled",type:{text:"boolean"},description:`Defines whether the component is disabled.
A disabled component can't be pressed or
focused, and it is not in the tab chain.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"interactive",type:{text:"boolean"},description:`Defines if the avatar is interactive (focusable and pressable).
<b>Note:</b> This property won't have effect if the <code>disabled</code>
property is set to <code>true</code>.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"icon",type:{text:"string"},description:`Defines the name of the UI5 Icon, that will be displayed.
<br>
<b>Note:</b> If <code>image</code> slot is provided, the property will be ignored.
<br>
<b>Note:</b> You should import the desired icon first, then use its name as "icon".
<br><br>
import "@ui5/webcomponents-icons/dist/{icon_name}.js"
<br>
<pre>&lt;ui5-avatar icon="employee"></pre>
<br>
<b>Note:</b> If no icon or an empty one is provided, by default the "employee" icon should be displayed.

See all the available icons in the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"fallbackIcon",type:{text:"string"},description:`Defines the name of the fallback icon, which should be displayed in the following cases:
<ul>
	<li>If the initials are not valid (more than 3 letters, unsupported languages or empty initials).</li>
	<li>If there are three initials and they do not fit in the shape (e.g. WWW for some of the sizes).</li>
	<li>If the image src is wrong.</li>
</ul>

<br>
<b>Note:</b> If not set, a default fallback icon "employee" is displayed.
<br>
<b>Note:</b> You should import the desired icon first, then use its name as "fallback-icon".
<br><br>
import "@ui5/webcomponents-icons/dist/{icon_name}.js"
<br>
<pre>&lt;ui5-avatar fallback-icon="alert"></pre>
<br>

See all the available icons in the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"initials",type:{text:"string"},description:`Defines the displayed initials.
<br>
Up to three Latin letters can be displayed as initials.`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"shape",type:{text:"AvatarShape",references:[{name:"AvatarShape",package:"@ui5/webcomponents",module:"dist/types/AvatarShape.js"}]},description:"Defines the shape of the component.",default:'"Circle"',privacy:"public",_ui5validator:"AvatarShape"},{kind:"field",name:"size",type:{text:"AvatarSize",references:[{name:"AvatarSize",package:"@ui5/webcomponents",module:"dist/types/AvatarSize.js"}]},description:"Defines predefined size of the component.",default:'"S"',privacy:"public",_ui5validator:"AvatarSize"},{kind:"field",name:"colorScheme",type:{text:"AvatarColorScheme",references:[{name:"AvatarColorScheme",package:"@ui5/webcomponents",module:"dist/types/AvatarColorScheme.js"}]},description:"Defines the background color of the desired image.",default:'"Accent6"',privacy:"public",_ui5validator:"AvatarColorScheme"},{kind:"field",name:"accessibleName",type:{text:"string"},description:`Defines the text alternative of the component.
If not provided a default text alternative will be set, if present.`,default:'""',privacy:"public",_ui5since:"1.0.0-rc.7",_ui5validator:"String"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-avatar",customElement:!0,_ui5since:"1.0.0-rc.6",_ui5privacy:"public",_ui5implements:[{name:"IAvatarGroupItem",package:"@ui5/webcomponents",module:"dist/AvatarGroup.js"}]}],exports:[{kind:"js",name:"default",declaration:{name:"Avatar",module:"dist/Avatar.js"}},{kind:"custom-element-definition",name:"ui5-avatar",declaration:{name:"Avatar",module:"dist/Avatar.js"}}]},{kind:"javascript-module",path:"dist/AvatarGroup.js",declarations:[{kind:"interface",name:"IAvatarGroupItem",description:"Interface for components that represent an avatar and may be slotted in numerous higher-order components such as <code>ui5-avatar-group</code>",_ui5privacy:"public"},{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

Displays a group of avatars arranged horizontally. It is useful to visually
showcase a group of related avatars, such as, project team members or employees.

The component allows you to display the avatars in different sizes,
depending on your use case.

The <code>AvatarGroup</code> component has two group types:
<ul>
<li><code>Group</code> type: The avatars are displayed as partially overlapped on
top of each other and the entire group has one click/tap area.</li>
<li><code>Individual</code> type: The avatars are displayed side-by-side and each
avatar has its own click/tap area.</li>
</ul>

<h3>Responsive Behavior</h3>

When the available space is less than the width required to display all avatars,
an overflow visualization appears as a button placed at the end with the same shape
and size as the avatars. The visualization displays the number of avatars that have overflowed
and are not currently visible.

<h3>Usage</h3>

Use the <code>AvatarGroup</code> if:
<ul>
<li>You want to display a group of avatars.</li>
<li>You want to display several avatars which have something in common.</li>
</ul>

Do not use the <code>AvatarGroup</code> if:
<ul>
<li>You want to display a single avatar.</li>
<li>You want to display a gallery for simple images.</li>
<li>You want to use it for other visual content than avatars.</li>
</ul>

<h3>Keyboard Handling</h3>
The component provides advanced keyboard handling.
When focused, the user can use the following keyboard
shortcuts in order to perform a navigation:

<br>
<code>type</code> Individual:
<br>
<ul>
<li>[TAB] - Move focus to the overflow button</li>
<li>[LEFT] - Navigate one avatar to the left</li>
<li>[RIGHT] - Navigate one avatar to the right</li>
<li>[HOME] - Navigate to the first avatar</li>
<li>[END] - Navigate to the last avatar</li>
<li>[SPACE],[ENTER],[RETURN] - Trigger <code>ui5-click</code> event</li>
</ul>
<br>
<code>type</code> Group:
<br>
<ul>
<li>[TAB] - Move focus to the next interactive element after the component</li>
<li>[SPACE],[ENTER],[RETURN] - Trigger <code>ui5-click</code> event</li>
</ul>
<br>`,name:"AvatarGroup",slots:[{name:"default",description:`Defines the items of the component. Use the <code>ui5-avatar</code> component as an item.
<br><br>
<b>Note:</b> The UX guidelines recommends using avatars with "Circle" shape.
Moreover, if you use avatars with "Square" shape, there will be visual inconsistency
as the built-in overflow action has "Circle" shape.`,_ui5propertyName:"items",_ui5type:{text:"Array<IAvatarGroupItem>",references:[{name:"IAvatarGroupItem",package:"@ui5/webcomponents",module:"dist/AvatarGroup.js"}]},_ui5privacy:"public"},{name:"overflowButton",description:`Defines the overflow button of the component.
<b>Note:</b> We recommend using the <code>ui5-button</code> component.
<br><br>
<b>Note:</b> If this slot is not used, the component will
display the built-in overflow button.`,_ui5since:"1.0.0-rc.13",_ui5type:{text:"Array<IButton>",references:[{name:"IButton",package:"@ui5/webcomponents",module:"dist/Button.js"}]},_ui5privacy:"public"}],members:[{kind:"field",name:"type",type:{text:"AvatarGroupType",references:[{name:"AvatarGroupType",package:"@ui5/webcomponents",module:"dist/types/AvatarGroupType.js"}]},description:"Defines the mode of the <code>AvatarGroup</code>.",default:'"Group"',privacy:"public",_ui5validator:"AvatarGroupType"},{kind:"field",name:"hiddenItems",type:{text:"Array<IAvatarGroupItem>",references:[{name:"IAvatarGroupItem",package:"@ui5/webcomponents",module:"dist/AvatarGroup.js"}]},description:"Returns an array containing the <code>ui5-avatar</code> instances that are currently not displayed due to lack of space.",default:"[]",privacy:"public",readonly:!0},{kind:"field",name:"colorScheme",type:{text:"Array<AvatarColorScheme>",references:[{name:"AvatarColorScheme",package:"@ui5/webcomponents",module:"dist/types/AvatarColorScheme.js"}]},description:"Returns an array containing the <code>AvatarColorScheme</code> values that correspond to the avatars in the component.",default:"[]",privacy:"public",readonly:!0}],events:[{name:"click",_ui5privacy:"public",type:{text:"CustomEvent<AvatarGroupClickEventDetail>",references:[{name:"AvatarGroupClickEventDetail",package:"@ui5/webcomponents",module:"dist/AvatarGroup.js"}]},description:`Fired when the component is activated either with a
click/tap or by using the Enter or Space key.`,_ui5since:"1.0.0-rc.11",_ui5parameters:[{type:{text:"HTMLElement"},name:"targetRef",_ui5privacy:"public",description:"The DOM ref of the clicked item."},{type:{text:"boolean"},name:"overflowButtonClicked",_ui5privacy:"public",description:"indicates if the overflow button is clicked"}]},{name:"overflow",_ui5privacy:"public",type:{text:"CustomEvent"},description:`Fired when the count of visible <code>ui5-avatar</code> elements in the
component has changed`,_ui5since:"1.0.0-rc.13"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-avatar-group",customElement:!0,_ui5since:"1.0.0-rc.11",_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"AvatarGroup",module:"dist/AvatarGroup.js"}},{kind:"custom-element-definition",name:"ui5-avatar-group",declaration:{name:"AvatarGroup",module:"dist/AvatarGroup.js"}}]},{kind:"javascript-module",path:"dist/Badge.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-badge</code> is a component which serves
the purpose to attract the user attention to some piece
of information (state, quantity, condition, etc.).
It can contain icon and text information, and its design can be chosen from specific design types.

<h3>Usage Guidelines</h3>
<ul>
<li>If the text is longer than the width of the component, it can wrap, or it can show ellipsis, depending on the <code>wrappingType</code> property.</li>
<li>Colors can be semantic or not semantic.</li>
</ul>

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/Badge";</code>`,name:"Badge",slots:[{name:"default",description:`Defines the text of the component.
<br><b>Note:</b> Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,_ui5propertyName:"text",_ui5type:{text:"Array<Node>"},_ui5privacy:"public"},{name:"icon",description:"Defines the icon to be displayed in the component.",_ui5type:{text:"Array<IIcon>",references:[{name:"IIcon",package:"@ui5/webcomponents",module:"dist/Icon.js"}]},_ui5privacy:"public"}],members:[{kind:"field",name:"design",type:{text:"BadgeDesign",references:[{name:"BadgeDesign",package:"@ui5/webcomponents",module:"dist/types/BadgeDesign.js"}]},description:"Defines the design type of the component.",default:'"Set3"',privacy:"public",_ui5since:"1.20",_ui5validator:"String"},{kind:"field",name:"colorScheme",type:{text:"string"},description:`Defines the color scheme of the component.
There are 10 predefined schemes.
To use one you can set a number from <code>"1"</code> to <code>"10"</code>. The <code>colorScheme</code> <code>"1"</code> will be set by default.
<br><br>
<b>Note:</b> Color schemes have no visual representation in High Contrast Black (sap_belize_hcb) theme.`,default:'"1"',privacy:"public",_ui5validator:"String"},{kind:"field",name:"hideStateIcon",type:{text:"boolean"},description:"Defines if the default state icon is shown.",default:"false",privacy:"public",_ui5since:"1.20",_ui5validator:"Boolean"},{kind:"field",name:"interactive",type:{text:"boolean"},description:`Defines if the component is interactive (focusable and pressable).
<br><b>Note:</b> The badge cannot be <code>interactive</code>
when <code>design</code> property is <code>BadgeDesign.Set3</code>`,default:"false",privacy:"public",_ui5since:"1.20",_ui5validator:"Boolean"},{kind:"field",name:"wrappingType",type:{text:"WrappingType",references:[{name:"WrappingType",package:"@ui5/webcomponents",module:"dist/types/WrappingType.js"}]},description:`Defines how the text of a component will be displayed when there is not enough space.
<br><b>Note:</b> For option "Normal" the text will wrap and the
words will not be broken based on hyphenation.`,default:'"None"',privacy:"public",_ui5since:"1.20",_ui5validator:"WrappingType"}],events:[{name:"click",_ui5privacy:"public",type:{text:"CustomEvent"},description:`Fired when the user clicks on an interactive badge.
<b>Note:</b> The event will be fired if the <code>interactive</code> property is <code>true</code>`,_ui5since:"1.20"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-badge",customElement:!0,_ui5since:"0.12.0",_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"Badge",module:"dist/Badge.js"}},{kind:"custom-element-definition",name:"ui5-badge",declaration:{name:"Badge",module:"dist/Badge.js"}}]},{kind:"javascript-module",path:"dist/Breadcrumbs.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>
Enables users to navigate between items by providing a list of links to previous steps in the user's navigation path.
It helps the user to be aware of their location within the application and allows faster navigation.
<br><br>
The last three steps can be accessed as links directly, while the remaining links prior to them are available
in a drop-down menu.
<br><br>
You can choose the type of separator to be used from a number of predefined options.

<h3>Keyboard Handling</h3>
The <code>ui5-breadcrumbs</code> provides advanced keyboard handling.
<br>
<ul>
<li>[F4, ALT+UP, ALT+DOWN, SPACE, ENTER] - If the dropdown arrow is focused - opens/closes the drop-down.</li>
<li>[SPACE, ENTER] - Activates the focused item and triggers the <code>item-click</code> event.</li>
<li>[ESC] - Closes the drop-down.</li>
<li>[LEFT] - If the drop-down is closed - navigates one item to the left.</li>
<li>[RIGHT] - If the drop-down is closed - navigates one item to the right.</li>
<li>[UP] - If the drop-down is open - moves focus to the next item.</li>
<li>[DOWN] - If the drop-down is open - moves focus to the previous item.</li>
<li>[HOME] - Navigates to the first item.</li>
<li>[END] - Navigates to the last item.</li>
</ul>
<br>`,name:"Breadcrumbs",slots:[{name:"default",description:`Defines the component items.

<br><br>
<b>Note:</b> Use the <code>ui5-breadcrumbs-item</code> component to define the desired items.`,_ui5propertyName:"items",_ui5type:{text:"Array<BreadcrumbsItem>",references:[{name:"BreadcrumbsItem",package:"@ui5/webcomponents",module:"dist/BreadcrumbsItem.js"}]},_ui5privacy:"public"}],members:[{kind:"field",name:"design",type:{text:"BreadcrumbsDesign",references:[{name:"BreadcrumbsDesign",package:"@ui5/webcomponents",module:"dist/types/BreadcrumbsDesign.js"}]},description:`Defines the visual indication and behavior of the breadcrumbs.
<br><br>
<b>Note:</b> The <code>Standard</code> breadcrumbs show the current page as the last item in the trail.
The last item contains only plain text and is not a link.`,default:'"Standard"',privacy:"public",_ui5validator:"BreadcrumbsDesign"},{kind:"field",name:"separatorStyle",type:{text:"BreadcrumbsSeparatorStyle",references:[{name:"BreadcrumbsSeparatorStyle",package:"@ui5/webcomponents",module:"dist/types/BreadcrumbsSeparatorStyle.js"}]},description:"Determines the visual style of the separator between the breadcrumb items.",default:'"Slash"',privacy:"public",_ui5validator:"BreadcrumbsSeparatorStyle"}],events:[{name:"item-click",_ui5privacy:"public",type:{text:"CustomEvent<BreadcrumbsItemClickEventDetail>",references:[{name:"BreadcrumbsItemClickEventDetail",package:"@ui5/webcomponents",module:"dist/Breadcrumbs.js"}]},description:`Fires when a <code>BreadcrumbsItem</code> is clicked.
<b>Note:</b> You can prevent browser location change by calling <code>event.preventDefault()</code>.`,_ui5allowPreventDefault:!0,_ui5parameters:[{type:{text:"HTMLElement"},name:"item",_ui5privacy:"public",description:"The clicked item."},{type:{text:"Boolean"},name:"altKey",_ui5privacy:"public",description:'Returns whether the "ALT" key was pressed when the event was triggered.'},{type:{text:"Boolean"},name:"ctrlKey",_ui5privacy:"public",description:'Returns whether the "CTRL" key was pressed when the event was triggered.'},{type:{text:"Boolean"},name:"metaKey",_ui5privacy:"public",description:'Returns whether the "META" key was pressed when the event was triggered.'},{type:{text:"Boolean"},name:"shiftKey",_ui5privacy:"public",description:'Returns whether the "SHIFT" key was pressed when the event was triggered.'}]}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-breadcrumbs",customElement:!0,_ui5since:"1.0.0-rc.15",_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"Breadcrumbs",module:"dist/Breadcrumbs.js"}},{kind:"custom-element-definition",name:"ui5-breadcrumbs",declaration:{name:"Breadcrumbs",module:"dist/Breadcrumbs.js"}}]},{kind:"javascript-module",path:"dist/BreadcrumbsItem.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-breadcrumbs-item</code> component defines the content of an item in <code>ui5-breadcrumbs</code>.`,name:"BreadcrumbsItem",slots:[{name:"default",description:`Defines the text of the component.
<br><br>
<b>Note:</b> Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,_ui5propertyName:"text",_ui5type:{text:"Array<Node>"},_ui5privacy:"public"}],members:[{kind:"field",name:"href",type:{text:"string"},description:`Defines the link href.
<br><br>
<b>Note:</b> Standard hyperlink behavior is supported.`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"target",type:{text:"string | undefined"},description:`Defines the link target.
<br><br>
Available options are:
<ul>
<li><code>_self</code></li>
<li><code>_top</code></li>
<li><code>_blank</code></li>
<li><code>_parent</code></li>
<li><code>_search</code></li>
</ul>
<br><br>
<b>Note:<b> This property must only be used when the <code>href</code> property is set.`,default:"undefined",privacy:"public",_ui5validator:"String"},{kind:"field",name:"accessibleName",type:{text:"string"},description:"Defines the accessible ARIA name of the item.",default:"undefined",privacy:"public",_ui5validator:"String"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-breadcrumbs-item",customElement:!0,_ui5since:"1.0.0-rc.15",_ui5privacy:"public",_ui5abstract:!0}],exports:[{kind:"js",name:"default",declaration:{name:"BreadcrumbsItem",module:"dist/BreadcrumbsItem.js"}},{kind:"custom-element-definition",name:"ui5-breadcrumbs-item",declaration:{name:"BreadcrumbsItem",module:"dist/BreadcrumbsItem.js"}}]},{kind:"javascript-module",path:"dist/BusyIndicator.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-busy-indicator</code> signals that some operation is going on and that the
user must wait. It does not block the current UI screen so other operations could be triggered in parallel.
It displays 3 dots and each dot expands and shrinks at a different rate, resulting in a cascading flow of animation.

<h3>Usage</h3>
For the <code>ui5-busy-indicator</code> you can define the size, the text and whether it is shown or hidden.
In order to hide it, use the "active" property.
<br><br>
In order to show busy state over an HTML element, simply nest the HTML element in a <code>ui5-busy-indicator</code> instance.
<br>
<b>Note:</b> Since <code>ui5-busy-indicator</code> has <code>display: inline-block;</code> by default and no width of its own,
whenever you need to wrap a block-level element, you should set <code>display: block</code> to the busy indicator as well.

<h4>When to use:</h4>
<ul>
<li>The user needs to be able to cancel the operation.</li>
<li>Only part of the application or a particular component is affected.</li>
</ul>

<h4>When not to use:</h4>
<ul>
<li>The operation takes less than one second.</li>
<li>You need to block the screen and prevent the user from starting another activity.</li>
<li>Do not show multiple busy indicators at once.</li>
</ul>

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/BusyIndicator";</code>`,name:"BusyIndicator",slots:[{description:"Determines the content over which the component will appear.",name:"default",_ui5privacy:"public",_ui5type:{text:"Array<Node>"}}],members:[{kind:"field",name:"text",type:{text:"string"},description:"Defines text to be displayed below the component. It can be used to inform the user of the current operation.",privacy:"public",default:'""',_ui5since:"1.0.0-rc.7",_ui5validator:"String"},{kind:"field",name:"size",type:{text:"BusyIndicatorSize",references:[{name:"BusyIndicatorSize",package:"@ui5/webcomponents",module:"dist/types/BusyIndicatorSize.js"}]},description:"Defines the size of the component.",default:'"Medium"',privacy:"public",_ui5validator:"BusyIndicatorSize"},{kind:"field",name:"active",type:{text:"boolean"},description:"Defines if the busy indicator is visible on the screen. By default it is not.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"delay",type:{text:"number"},description:"Defines the delay in milliseconds, after which the busy indicator will be visible on the screen.",default:"1000",privacy:"public",_ui5validator:"Integer"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-busy-indicator",customElement:!0,_ui5since:"0.12.0",_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"BusyIndicator",module:"dist/BusyIndicator.js"}},{kind:"custom-element-definition",name:"ui5-busy-indicator",declaration:{name:"BusyIndicator",module:"dist/BusyIndicator.js"}}]},{kind:"javascript-module",path:"dist/Button.js",declarations:[{kind:"interface",name:"IButton",description:"Interface for components that may be used as a button inside numerous higher-order components",_ui5privacy:"public"},{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-button</code> component represents a simple push button.
It enables users to trigger actions by clicking or tapping the <code>ui5-button</code>, or by pressing
certain keyboard keys, such as Enter.


<h3>Usage</h3>

For the <code>ui5-button</code> UI, you can define text, icon, or both. You can also specify
whether the text or the icon is displayed first.
<br><br>
You can choose from a set of predefined types that offer different
styling to correspond to the triggered action.
<br><br>
You can set the <code>ui5-button</code> as enabled or disabled. An enabled
<code>ui5-button</code> can be pressed by clicking or tapping it. The button changes
its style to provide visual feedback to the user that it is pressed or hovered over with
the mouse cursor. A disabled <code>ui5-button</code> appears inactive and cannot be pressed.

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/Button";</code>`,name:"Button",cssParts:[{description:"Used to style the native button element",name:"button"}],slots:[{name:"default",description:`Defines the text of the component.
<br><br>
<b>Note:</b> Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,_ui5propertyName:"text",_ui5type:{text:"Array<Node>"},_ui5privacy:"public"}],members:[{kind:"field",name:"design",type:{text:"ButtonDesign",references:[{name:"ButtonDesign",package:"@ui5/webcomponents",module:"dist/types/ButtonDesign.js"}]},description:"Defines the component design.",default:'"Default"',privacy:"public",_ui5validator:"ButtonDesign"},{kind:"field",name:"disabled",type:{text:"boolean"},description:`Defines whether the component is disabled.
A disabled component can't be pressed or
focused, and it is not in the tab chain.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"icon",type:{text:"string"},description:`Defines the icon, displayed as graphical element within the component.
The SAP-icons font provides numerous options.
<br><br>
Example:

See all the available icons within the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"iconEnd",type:{text:"boolean"},description:"Defines whether the icon should be displayed after the component text.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"submits",type:{text:"boolean"},description:`When set to <code>true</code>, the component will
automatically submit the nearest HTML form element on <code>press</code>.
<br><br>
<b>Note:</b> For the <code>submits</code> property to have effect, you must add the following import to your project:
<code>import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";</code>`,default:"false",privacy:"public",deprecated:'Set the "type" property to "Submit" to achieve the same result. The "submits" property is ignored if "type" is set to any value other than "Button".',_ui5validator:"Boolean"},{kind:"field",name:"tooltip",type:{text:"string"},description:`Defines the tooltip of the component.
<br>
<b>Note:</b> A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.`,default:'""',privacy:"public",_ui5since:"1.2.0",_ui5validator:"String"},{kind:"field",name:"accessibleName",type:{text:"string | undefined"},description:"Defines the accessible ARIA name of the component.",default:"undefined",privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"String"},{kind:"field",name:"accessibleNameRef",type:{text:"string"},description:"Receives id(or many ids) of the elements that label the component.",default:'""',privacy:"public",_ui5since:"1.1.0",_ui5validator:"String"},{kind:"field",name:"accessibilityAttributes",type:{text:"AccessibilityAttributes",references:[{name:"AccessibilityAttributes",package:"@ui5/webcomponents",module:"dist/Button.js"}]},description:`An object of strings that defines several additional accessibility attribute values
for customization depending on the use case.

It supports the following fields:

<ul>
		<li><code>expanded</code>: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed. Accepts the following string values:
		<ul>
			<li><code>true</code></li>
			<li><code>false</code></li>
		</ul>
		</li>
		<li><code>hasPopup</code>: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button. Accepts the following string values:
			<ul>
			<li><code>Dialog</code></li>
			<li><code>Grid</code></li>
			<li><code>Listbox</code></li>
			<li><code>Menu</code></li>
			<li><code>Tree</code></li>
			</ul>
		</li>
		<li><code>controls</code>: Identifies the element (or elements) whose contents or presence are controlled by the button element. Accepts a string value.</li>
</ul>`,privacy:"public",default:"{}",_ui5since:"1.2.0",_ui5validator:"Object"},{kind:"field",name:"type",type:{text:"ButtonType",references:[{name:"ButtonType",package:"@ui5/webcomponents",module:"dist/types/ButtonType.js"}]},description:`Defines whether the button has special form-related functionality.

<br><br>
<b>Note:</b> For the <code>type</code> property to have effect, you must add the following import to your project:
<code>import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";</code>`,default:'"Button"',privacy:"public",_ui5since:"1.15.0",_ui5validator:"ButtonType"}],events:[{name:"click",_ui5privacy:"public",type:{text:"Event"},description:`Fired when the component is activated either with a
mouse/tap or by using the Enter or Space key.
<br><br>
<b>Note:</b> The event will not be fired if the <code>disabled</code>
property is set to <code>true</code>.`}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-button",customElement:!0,_ui5privacy:"public",_ui5implements:[{name:"IButton",package:"@ui5/webcomponents",module:"dist/Button.js"}]}],exports:[{kind:"js",name:"default",declaration:{name:"Button",module:"dist/Button.js"}},{kind:"custom-element-definition",name:"ui5-button",declaration:{name:"Button",module:"dist/Button.js"}}]},{kind:"javascript-module",path:"dist/Calendar.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-calendar</code> component allows users to select one or more dates.
<br><br>
Currently selected dates are represented with instances of <code>ui5-date</code> as
children of the <code>ui5-calendar</code>. The value property of each <code>ui5-date</code> must be a
date string, correctly formatted according to the <code>ui5-calendar</code>'s <code>formatPattern</code> property.
Whenever the user changes the date selection, <code>ui5-calendar</code> will automatically create/remove instances
of <code>ui5-date</code> in itself, unless you prevent this behavior by calling <code>preventDefault()</code> for the
<code>selected-dates-change</code> event. This is useful if you want to control the selected dates externally.
<br><br>

<h3>Usage</h3>

The user can navigate to a particular date by:
<br>
<ul>
<li>Pressing over a month inside the months view</li>
<li>Pressing over an year inside the years view</li>
</ul>
<br>
The user can confirm a date selection by pressing over a date inside the days view.
<br><br>

<h3>Keyboard Handling</h3>
The <code>ui5-calendar</code> provides advanced keyboard handling.
When a picker is showed and focused the user can use the following keyboard
shortcuts in order to perform a navigation:
<br>
- Day picker: <br>
<ul>
<li>[F4] - Shows month picker</li>
<li>[SHIFT] + [F4] - Shows year picker</li>
<li>[PAGEUP] - Navigate to the previous month</li>
<li>[PAGEDOWN] - Navigate to the next month</li>
<li>[SHIFT] + [PAGEUP] - Navigate to the previous year</li>
<li>[SHIFT] + [PAGEDOWN] - Navigate to the next year</li>
<li>[CTRL] + [SHIFT] + [PAGEUP] - Navigate ten years backwards</li>
<li>[CTRL] + [SHIFT] + [PAGEDOWN] - Navigate ten years forwards</li>
<li>[HOME] - Navigate to the first day of the week</li>
<li>[END] - Navigate to the last day of the week</li>
<li>[CTRL] + [HOME] - Navigate to the first day of the month</li>
<li>[CTRL] + [END] - Navigate to the last day of the month</li>
</ul>
<br>
- Month picker: <br>
<ul>
<li>[PAGEUP] - Navigate to the previous year</li>
<li>[PAGEDOWN] - Navigate to the next year</li>
<li>[HOME] - Navigate to the first month of the current row</li>
<li>[END] - Navigate to the last month of the current row</li>
<li>[CTRL] + [HOME] - Navigate to the first month of the current year</li>
<li>[CTRL] + [END] - Navigate to the last month of the year</li>
</ul>
<br>
- Year picker: <br>
<ul>
<li>[PAGEUP] - Navigate to the previous year range</li>
<li>[PAGEDOWN] - Navigate the next year range</li>
<li>[HOME] - Navigate to the first year of the current row</li>
<li>[END] - Navigate to the last year of the current row</li>
<li>[CTRL] + [HOME] - Navigate to the first year of the current year range</li>
<li>[CTRL] + [END] - Navigate to the last year of the current year range</li>
</ul>
<br>

<h4>Fast Navigation</h4>
This component provides a build in fast navigation group which can be used via <code>F6 / Shift + F6</code> or <code> Ctrl + Alt(Option) + Down /  Ctrl + Alt(Option) + Up</code>.
In order to use this functionality, you need to import the following module:
<code>import "@ui5/webcomponents-base/dist/features/F6Navigation.js"</code>
<br><br>

<h3>Calendar types</h3>
The component supports several calendar types - Gregorian, Buddhist, Islamic, Japanese and Persian.
By default the Gregorian Calendar is used. In order to use the Buddhist, Islamic, Japanese or Persian calendar,
you need to set the <code>primaryCalendarType</code> property and import one or more of the following modules:
<br><br>

<code>import "@ui5/webcomponents-localization/dist/features/calendar/Buddhist.js";</code>
<br>
<code>import "@ui5/webcomponents-localization/dist/features/calendar/Islamic.js";</code>
<br>
<code>import "@ui5/webcomponents-localization/dist/features/calendar/Japanese.js";</code>
<br>
<code>import "@ui5/webcomponents-localization/dist/features/calendar/Persian.js";</code>
<br><br>

Or, you can use the global configuration and set the <code>calendarType</code> key:
<br>
<code>
&lt;script data-id="sap-ui-config" type="application/json"&gt;
{
"calendarType": "Japanese"
}
&lt;/script&gt;
</code>


<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/Calendar";</code>`,name:"Calendar",slots:[{name:"default",description:`Defines the selected date or dates (depending on the <code>selectionMode</code> property)
for this calendar as instances of <code>ui5-date</code>.`,_ui5propertyName:"dates",_ui5type:{text:"Array<CalendarDate>",references:[{name:"CalendarDate",package:"@ui5/webcomponents",module:"dist/CalendarDate.js"}]},_ui5privacy:"public"}],members:[{kind:"field",name:"selectionMode",type:{text:"CalendarSelectionMode",references:[{name:"CalendarSelectionMode",package:"@ui5/webcomponents",module:"dist/types/CalendarSelectionMode.js"}]},description:`Defines the type of selection used in the calendar component.
Accepted property values are:<br>
<ul>
<li><code>CalendarSelectionMode.Single</code> - enables a single date selection.(default value)</li>
<li><code>CalendarSelectionMode.Range</code> - enables selection of a date range.</li>
<li><code>CalendarSelectionMode.Multiple</code> - enables selection of multiple dates.</li>
</ul>`,default:'"Single"',privacy:"public",_ui5validator:"CalendarSelectionMode"},{kind:"field",name:"hideWeekNumbers",type:{text:"boolean"},description:`Defines the visibility of the week numbers column.
<br><br>

<b>Note:</b> For calendars other than Gregorian,
the week numbers are not displayed regardless of what is set.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"primaryCalendarType",type:{text:"CalendarType | undefined",references:[{name:"CalendarType",package:"@ui5/webcomponents-base",module:"dist/types/CalendarType.js"}]},description:`Sets a calendar type used for display.
If not set, the calendar type of the global configuration is used.`,default:"undefined",privacy:"public",_ui5validator:"CalendarType",inheritedFrom:{name:"DateComponentBase",module:"dist/DateComponentBase.js"}},{kind:"field",name:"secondaryCalendarType",type:{text:"CalendarType | undefined",references:[{name:"CalendarType",package:"@ui5/webcomponents-base",module:"dist/types/CalendarType.js"}]},description:`Defines the secondary calendar type.
If not set, the calendar will only show the primary calendar type.`,default:"undefined",privacy:"public",_ui5since:"1.0.0-rc.16",_ui5validator:"CalendarType",inheritedFrom:{name:"DateComponentBase",module:"dist/DateComponentBase.js"}},{kind:"field",name:"formatPattern",type:{text:"string"},description:"Determines the format, displayed in the input field.",default:'""',privacy:"public",_ui5validator:"String",inheritedFrom:{name:"DateComponentBase",module:"dist/DateComponentBase.js"}},{kind:"field",name:"minDate",type:{text:"string"},description:`Determines the minimum date available for selection.

<b>Note:</b> If the formatPattern property is not set, the minDate value must be provided in the ISO date format (YYYY-MM-dd).`,default:'""',privacy:"public",_ui5since:"1.0.0-rc.6",_ui5validator:"String",inheritedFrom:{name:"DateComponentBase",module:"dist/DateComponentBase.js"}},{kind:"field",name:"maxDate",type:{text:"string"},description:`Determines the maximum date available for selection.

<b>Note:</b> If the formatPattern property is not set, the maxDate value must be provided in the ISO date format (YYYY-MM-dd).`,default:'""',privacy:"public",_ui5since:"1.0.0-rc.6",_ui5validator:"String",inheritedFrom:{name:"DateComponentBase",module:"dist/DateComponentBase.js"}}],events:[{name:"selected-dates-change",_ui5privacy:"public",type:{text:"CustomEvent<CalendarSelectedDatesChangeEventDetail>",references:[{name:"CalendarSelectedDatesChangeEventDetail",package:"@ui5/webcomponents",module:"dist/Calendar.js"}]},description:`Fired when the selected dates change.
<b>Note:</b> If you call <code>preventDefault()</code> for this event, the component will not
create instances of <code>ui5-date</code> for the newly selected dates. In that case you should do this manually.`,_ui5allowPreventDefault:!0,_ui5parameters:[{type:{text:"Array<string>"},name:"values",_ui5privacy:"public",description:"The selected dates"},{type:{text:"Array<number>"},name:"dates",_ui5privacy:"public",description:"The selected dates as UTC timestamps"}]}],superclass:{name:"CalendarPart",package:"@ui5/webcomponents",module:"dist/CalendarPart.js"},tagName:"ui5-calendar",customElement:!0,_ui5since:"1.0.0-rc.11",_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"Calendar",module:"dist/Calendar.js"}},{kind:"custom-element-definition",name:"ui5-calendar",declaration:{name:"Calendar",module:"dist/Calendar.js"}}]},{kind:"javascript-module",path:"dist/CalendarDate.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-date</code> component defines a calendar date to be used inside <code>ui5-calendar</code>`,name:"CalendarDate",members:[{kind:"field",name:"value",type:{text:"string"},description:`The date formatted according to the <code>formatPattern</code> property
of the <code>ui5-calendar</code> that hosts the component.`,default:'""',privacy:"public",_ui5validator:"String"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-date",customElement:!0,_ui5privacy:"public",_ui5abstract:!0}],exports:[{kind:"js",name:"default",declaration:{name:"CalendarDate",module:"dist/CalendarDate.js"}},{kind:"custom-element-definition",name:"ui5-date",declaration:{name:"CalendarDate",module:"dist/CalendarDate.js"}}]},{kind:"javascript-module",path:"dist/CalendarHeader.js",declarations:[],exports:[{kind:"js",name:"default",declaration:{name:"CalendarHeader",module:"dist/CalendarHeader.js"}}]},{kind:"javascript-module",path:"dist/CalendarPart.js",declarations:[{kind:"class",description:`Abstract base class for Calendar, DayPicker, MonthPicker and YearPicker that adds support for:
 - common properties (timestamp, selectedDates): declarations and methods that operate on them
 - other common code`,name:"CalendarPart",superclass:{name:"DateComponentBase",package:"@ui5/webcomponents",module:"dist/DateComponentBase.js"},customElement:!0,_ui5privacy:"public",members:[{kind:"field",name:"primaryCalendarType",type:{text:"CalendarType | undefined",references:[{name:"CalendarType",package:"@ui5/webcomponents-base",module:"dist/types/CalendarType.js"}]},description:`Sets a calendar type used for display.
If not set, the calendar type of the global configuration is used.`,default:"undefined",privacy:"public",_ui5validator:"CalendarType",inheritedFrom:{name:"DateComponentBase",module:"dist/DateComponentBase.js"}},{kind:"field",name:"secondaryCalendarType",type:{text:"CalendarType | undefined",references:[{name:"CalendarType",package:"@ui5/webcomponents-base",module:"dist/types/CalendarType.js"}]},description:`Defines the secondary calendar type.
If not set, the calendar will only show the primary calendar type.`,default:"undefined",privacy:"public",_ui5since:"1.0.0-rc.16",_ui5validator:"CalendarType",inheritedFrom:{name:"DateComponentBase",module:"dist/DateComponentBase.js"}},{kind:"field",name:"formatPattern",type:{text:"string"},description:"Determines the format, displayed in the input field.",default:'""',privacy:"public",_ui5validator:"String",inheritedFrom:{name:"DateComponentBase",module:"dist/DateComponentBase.js"}},{kind:"field",name:"minDate",type:{text:"string"},description:`Determines the minimum date available for selection.

<b>Note:</b> If the formatPattern property is not set, the minDate value must be provided in the ISO date format (YYYY-MM-dd).`,default:'""',privacy:"public",_ui5since:"1.0.0-rc.6",_ui5validator:"String",inheritedFrom:{name:"DateComponentBase",module:"dist/DateComponentBase.js"}},{kind:"field",name:"maxDate",type:{text:"string"},description:`Determines the maximum date available for selection.

<b>Note:</b> If the formatPattern property is not set, the maxDate value must be provided in the ISO date format (YYYY-MM-dd).`,default:'""',privacy:"public",_ui5since:"1.0.0-rc.6",_ui5validator:"String",inheritedFrom:{name:"DateComponentBase",module:"dist/DateComponentBase.js"}}]}],exports:[{kind:"js",name:"default",declaration:{name:"CalendarPart",module:"dist/CalendarPart.js"}}]},{kind:"javascript-module",path:"dist/Card.js",declarations:[{kind:"interface",name:"ICardHeader",description:"Interface for components that may be slotted inside <code>ui5-card</code> as header",_ui5privacy:"public"},{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-card</code> is a component that represents information in the form of a
tile with separate header and content areas.
The content area of a <code>ui5-card</code> can be arbitrary HTML content.
The header can be used through slot <code>header</code>. For which there is a <code>ui5-card-header</code> component to achieve the card look and feel.

Note: We recommend the usage of <code>ui5-card-header</code> for the header slot, so advantage can be taken for keyboard handling, styling and accessibility.

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/Card";</code>
<br>
<code>import "@ui5/webcomponents/dist/CardHeader.js";</code> (for <code>ui5-card-header</code>)`,name:"Card",cssParts:[{description:"Used to style the root DOM element of the card component",name:"root"},{description:"Used to style the content of the card",name:"content"}],slots:[{name:"default",description:"Defines the content of the component.",_ui5propertyName:"content",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"},{name:"header",description:`Defines the header of the component.
<br><br>
<b>Note:</b> Use <code>ui5-card-header</code> for the intended design.`,_ui5since:"1.0.0-rc.15",_ui5type:{text:"Array<ICardHeader>",references:[{name:"ICardHeader",package:"@ui5/webcomponents",module:"dist/Card.js"}]},_ui5privacy:"public"}],members:[{kind:"field",name:"accessibleName",type:{text:"string"},description:`Defines the accessible name of the component, which is used as the name of the card region and should be unique per card.
<b>Note:</b> <code>accessibleName</code> should be always set, unless <code>accessibleNameRef</code> is set.`,default:'""',privacy:"public",_ui5since:"1.0.0-rc.16",_ui5validator:"String"},{kind:"field",name:"accessibleNameRef",type:{text:"string"},description:"Defines the IDs of the elements that label the component.",default:'""',privacy:"public",_ui5since:"1.0.0-rc.16",_ui5validator:"String"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-card",customElement:!0,_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"Card",module:"dist/Card.js"}},{kind:"custom-element-definition",name:"ui5-card",declaration:{name:"Card",module:"dist/Card.js"}}]},{kind:"javascript-module",path:"dist/CardHeader.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-card-header</code> is a component, meant to be used as a header of the <code>ui5-card</code> component.
It displays valuable information, that can be defined with several properties, such as: <code>titleText</code>, <code>subtitleText</code>, <code>status</code>
and two slots: <code>avatar</code> and <code>action</code>.

<h3>Keyboard handling</h3>
In case you enable <code>interactive</code> property, you can press the <code>ui5-card-header</code> by Space and Enter keys.

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/CardHeader";</code>`,name:"CardHeader",cssParts:[{description:"Used to style the root DOM element of the CardHeader",name:"root"},{description:"Used to style the title of the CardHeader",name:"title"},{description:"Used to style the subtitle of the CardHeader",name:"subtitle"},{description:"Used to style the status of the CardHeader",name:"status"}],slots:[{name:"avatar",description:"Defines an avatar image, displayed in the left most part of the header.",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"},{name:"action",description:"Defines an action, displayed in the right most part of the header.",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"}],members:[{kind:"field",name:"titleText",type:{text:"string"},description:"Defines the title text.",default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"subtitleText",type:{text:"string"},description:"Defines the subtitle text.",default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"status",type:{text:"string"},description:"Defines the status text.",default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"interactive",type:{text:"boolean"},description:`Defines if the component would be interactive,
e.g gets hover effect, gets focus outline and <code>click</code> event is fired, when pressed.`,default:"false",privacy:"public",_ui5validator:"Boolean"}],events:[{name:"click",_ui5privacy:"public",type:{text:"CustomEvent"},description:`Fired when the component is activated by mouse/tap or by using the Enter or Space key.
<br><br>
<b>Note:</b> The event would be fired only if the <code>interactive</code> property is set to true.`}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-card-header",customElement:!0,_ui5since:"1.0.0-rc.15",_ui5privacy:"public",_ui5implements:[{name:"ICardHeader",package:"@ui5/webcomponents",module:"dist/Card.js"}]}],exports:[{kind:"js",name:"default",declaration:{name:"CardHeader",module:"dist/CardHeader.js"}},{kind:"custom-element-definition",name:"ui5-card-header",declaration:{name:"CardHeader",module:"dist/CardHeader.js"}}]},{kind:"javascript-module",path:"dist/Carousel.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>
The Carousel allows the user to browse through a set of items.
The component is mostly used for showing a gallery of images, but can hold any other HTML element.
<br>
There are several ways to perform navigation:
<ul>
<li>on desktop - the user can navigate using the navigation arrows or with keyboard shorcuts.</li>
<li>on mobile - the user can use swipe gestures.</li>
</ul>

<h3>Usage</h3>

<h4>When to use:</h4>

<ul>
<li>The items you want to display are very different from each other.</li>
<li>You want to display the items one after the other.</li>
</ul>

<h4>When not to use:</h4>

<ul>
<li>The items you want to display need to be visible at the same time.</li>
<li>The items you want to display are uniform and very similar.</li>
</ul>

<h3>Keyboard Handling</h3>

<h4>Basic Navigation</h4>
When the <code>ui5-carousel</code> is focused the user can navigate between the items
with the following keyboard shortcuts:
<br>
<ul>
<li>[UP/DOWN] - Navigates to previous and next item</li>
<li>[LEFT/RIGHT] - Navigates to previous and next item</li>
</ul>

<h3>Fast Navigation</h3>
This component provides a build in fast navigation group which can be used via <code>F6 / Shift + F6</code> or <code> Ctrl + Alt(Option) + Down /  Ctrl + Alt(Option) + Up</code>.
In order to use this functionality, you need to import the following module:
<code>import "@ui5/webcomponents-base/dist/features/F6Navigation.js"</code>
<br><br>

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/Carousel.js";</code>`,name:"Carousel",cssParts:[{description:"Used to style the content of the component",name:"content"}],slots:[{name:"default",description:"Defines the content of the component.",_ui5propertyName:"content",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"}],members:[{kind:"field",name:"cyclic",type:{text:"boolean"},description:"Defines whether the carousel should loop, i.e show the first page after the last page is reached and vice versa.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"itemsPerPageS",type:{text:"number"},description:"Defines the number of items per page on small size (up to 640px). One item per page shown by default.",default:"1",privacy:"public",_ui5validator:"Integer"},{kind:"field",name:"itemsPerPageM",type:{text:"number"},description:"Defines the number of items per page on medium size (from 640px to 1024px). One item per page shown by default.",default:"1",privacy:"public",_ui5validator:"Integer"},{kind:"field",name:"itemsPerPageL",type:{text:"number"},description:"Defines the number of items per page on large size (more than 1024px). One item per page shown by default.",default:"1",privacy:"public",_ui5validator:"Integer"},{kind:"field",name:"hideNavigationArrows",type:{text:"boolean"},description:`Defines the visibility of the navigation arrows.
If set to true the navigation arrows will be hidden.
<br><br>
<b>Note:</b> The navigation arrows are never displayed on touch devices.
In this case, the user can swipe to navigate through the items.`,default:"false",privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"Boolean"},{kind:"field",name:"hidePageIndicator",type:{text:"boolean"},description:`Defines the visibility of the page indicator.
If set to true the page indicator will be hidden.`,default:"false",privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"Boolean"},{kind:"field",name:"pageIndicatorStyle",type:{text:"CarouselPageIndicatorStyle",references:[{name:"CarouselPageIndicatorStyle",package:"@ui5/webcomponents",module:"dist/types/CarouselPageIndicatorStyle.js"}]},description:`Defines the style of the page indicator.
Available options are:
<ul>
<li><code>Default</code> - The page indicator will be visualized as dots if there are fewer than 9 pages. If there are more pages, the page indicator will switch to displaying the current page and the total number of pages. (e.g. X of Y)</li>
<li><code>Numeric</code> - The page indicator will display the current page and the total number of pages. (e.g. X of Y)</li>
</ul>`,default:'"Default"',privacy:"public",_ui5since:"1.10",_ui5validator:"CarouselPageIndicatorStyle"},{kind:"field",name:"backgroundDesign",type:{text:"BackgroundDesign",references:[{name:"BackgroundDesign",package:"@ui5/webcomponents",module:"dist/types/BackgroundDesign.js"}]},description:"Defines the carousel's background design.",default:'"Translucent"',privacy:"public",_ui5since:"1.14",_ui5validator:"BackgroundDesign"},{kind:"field",name:"pageIndicatorBackgroundDesign",type:{text:"BackgroundDesign",references:[{name:"BackgroundDesign",package:"@ui5/webcomponents",module:"dist/types/BackgroundDesign.js"}]},description:"Defines the page indicator background design.",default:'"Solid"',privacy:"public",_ui5since:"1.14",_ui5validator:"BackgroundDesign"},{kind:"field",name:"pageIndicatorBorderDesign",type:{text:"BorderDesign",references:[{name:"BorderDesign",package:"@ui5/webcomponents",module:"dist/types/BorderDesign.js"}]},description:"Defines the page indicator border design.",default:'"Solid"',privacy:"public",_ui5since:"1.14",_ui5validator:"BorderDesign"},{kind:"field",name:"arrowsPlacement",type:{text:"CarouselArrowsPlacement",references:[{name:"CarouselArrowsPlacement",package:"@ui5/webcomponents",module:"dist/types/CarouselArrowsPlacement.js"}]},description:`Defines the position of arrows.
<br><br>
Available options are:
<ul>
<li><code>Content</code> - the arrows are placed on the sides of the current page.</li>
<li><code>Navigation</code> - the arrows are placed on the sides of the page indicator.</li>
</ul>`,default:'"Content"',privacy:"public",_ui5validator:"CarouselArrowsPlacement"},{kind:"method",name:"navigateTo",return:{type:{text:"void"}},parameters:[{name:"itemIndex",type:{text:"number"},description:"The index of the target page",_ui5privacy:"public"}],description:"Changes the currently displayed page.",privacy:"public",_ui5since:"1.0.0-rc.15"},{kind:"field",name:"visibleItemsIndices",type:{text:"Array<number>"},description:"The indices of the currently visible items of the component.",privacy:"public",default:"[]",readonly:!0,_ui5since:"1.0.0-rc.15"}],events:[{name:"navigate",_ui5privacy:"public",type:{text:"CustomEvent<CarouselNavigateEventDetail>",references:[{name:"CarouselNavigateEventDetail",package:"@ui5/webcomponents",module:"dist/Carousel.js"}]},description:`Fired whenever the page changes due to user interaction,
when the user clicks on the navigation arrows or while resizing,
based on the <code>items-per-page-l</code>, <code>items-per-page-m</code> and <code>items-per-page-s</code> properties.`,_ui5since:"1.0.0-rc.7",_ui5parameters:[{type:{text:"Integer",references:[{name:"Integer",package:"@ui5/webcomponents-base",module:"dist/types/Integer.js"}]},name:"selectedIndex",_ui5privacy:"public",description:"the current selected index"}]}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-carousel",customElement:!0,_ui5since:"1.0.0-rc.6",_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"Carousel",module:"dist/Carousel.js"}},{kind:"custom-element-definition",name:"ui5-carousel",declaration:{name:"Carousel",module:"dist/Carousel.js"}}]},{kind:"javascript-module",path:"dist/CheckBox.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

Allows the user to set a binary value, such as true/false or yes/no for an item.
<br><br>
The <code>ui5-checkbox</code> component consists of a box and a label that describes its purpose.
If it's checked, an indicator is displayed inside the box.
To check/uncheck the <code>ui5-checkbox</code>, the user has to click or tap the square
box or its label.
<br><br>
The <code>ui5-checkbox</code> component only has 2 states - checked and unchecked.
Clicking or tapping toggles the <code>ui5-checkbox</code> between checked and unchecked state.

<h3>Usage</h3>

You can define the checkbox text with via the <code>text</code> property. If the text exceeds the available width, it is truncated by default.
In case you prefer text to wrap, set the <code>wrappingType</code> property to "Normal".
The touchable area for toggling the <code>ui5-checkbox</code> ends where the text ends.
<br><br>
You can disable the <code>ui5-checkbox</code> by setting the <code>disabled</code> property to
<code>true</code>,
or use the <code>ui5-checkbox</code> in read-only mode by setting the <code>readonly</code>
property to <code>true</code>.

<br><br>

<h3>Keyboard Handling</h3>

The user can use the following keyboard shortcuts to toggle the checked state of the <code>ui5-checkbox</code>.
<ul>
<li>[SPACE, ENTER] - Toggles between different states: checked, not checked.</li>
</ul>
<br><br>

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/CheckBox";</code>`,name:"CheckBox",cssParts:[{description:"Used to style the outermost wrapper of the <code>ui5-checkbox</code>",name:"root"},{description:"Used to style the label of the <code>ui5-checkbox</code>",name:"label"}],members:[{kind:"field",name:"accessibleNameRef",type:{text:"string"},description:"Receives id(or many ids) of the elements that label the component",default:'""',privacy:"public",_ui5since:"1.1.0",_ui5validator:"String"},{kind:"field",name:"accessibleName",type:{text:"string"},description:"Defines the accessible ARIA name of the component.",privacy:"public",default:'""',_ui5since:"1.1.0",_ui5validator:"String"},{kind:"field",name:"disabled",type:{text:"boolean"},description:`Defines whether the component is disabled.
<br><br>
<b>Note:</b> A disabled component is completely noninteractive.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"readonly",type:{text:"boolean"},description:`Defines whether the component is read-only.
<br><br>
<b>Note:</b> A read-only component is not editable,
but still provides visual feedback upon user interaction.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"displayOnly",type:{text:"boolean"},description:`Determines whether the <code>ui5-checkbox</code> is in display only state.

When set to <code>true</code>, the <code>ui5-checkbox</code> is not interactive, not editable, not focusable
and not in the tab chain. This setting is used for forms in review mode.

<Note:> When the property <code>disabled</code> is set to <code>true</code> this property has no effect.`,privacy:"public",default:"false",_ui5since:"1.22.0",_ui5validator:"Boolean"},{kind:"field",name:"required",type:{text:"boolean"},description:"Defines whether the component is required.",default:"false",privacy:"public",_ui5since:"1.3.0",_ui5validator:"Boolean"},{kind:"field",name:"indeterminate",type:{text:"boolean"},description:`Defines whether the component is displayed as partially checked.
<br><br>
<b>Note:</b> The indeterminate state can be set only programmatically and can’t be achieved by user
interaction and the resulting visual state depends on the values of the <code>indeterminate</code>
and <code>checked</code> properties:
<ul>
<li> If the component is checked and indeterminate, it will be displayed as partially checked
<li> If the component is checked and it is not indeterminate, it will be displayed as checked
<li> If the component is not checked, it will be displayed as not checked regardless value of the indeterminate attribute
</ul>`,default:"false",privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"Boolean"},{kind:"field",name:"checked",type:{text:"boolean"},description:`Defines if the component is checked.
<br><br>
<b>Note:</b> The property can be changed with user interaction,
either by cliking/tapping on the component, or by
pressing the Enter or Space key.`,default:"false",privacy:"public",_ui5validator:"Boolean",_ui5formProperty:!0,_ui5formEvents:"change"},{kind:"field",name:"text",type:{text:"string"},description:"Defines the text of the component.",default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"valueState",type:{text:"ValueState",references:[{name:"ValueState",package:"@ui5/webcomponents-base",module:"dist/types/ValueState.js"}]},description:"Defines the value state of the component.",default:'"None"',privacy:"public",_ui5validator:"ValueState"},{kind:"field",name:"wrappingType",type:{text:"WrappingType",references:[{name:"WrappingType",package:"@ui5/webcomponents",module:"dist/types/WrappingType.js"}]},description:`Defines whether the component text wraps when there is not enough space.
<br><b>Note:</b> for option "Normal" the text will wrap and the words will not be broken based on hyphenation.`,default:'"None"',privacy:"public",_ui5validator:"WrappingType"},{kind:"field",name:"name",type:{text:"string"},description:`Determines the name with which the component will be submitted in an HTML form.

<br><br>
<b>Important:</b> For the <code>name</code> property to have effect, you must add the following import to your project:
<code>import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";</code>

<br><br>
<b>Note:</b> When set, a native <code>input</code> HTML element
will be created inside the component so that it can be submitted as
part of an HTML form. Do not use this property unless you need to submit a form.`,default:'""',privacy:"public",_ui5validator:"String"}],events:[{name:"change",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired when the component checked state changes.",_ui5allowPreventDefault:!0}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-checkbox",customElement:!0,_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"CheckBox",module:"dist/CheckBox.js"}},{kind:"custom-element-definition",name:"ui5-checkbox",declaration:{name:"CheckBox",module:"dist/CheckBox.js"}}]},{kind:"javascript-module",path:"dist/ColorPalette.js",declarations:[{kind:"interface",name:"IColorPaletteItem",description:"Interface for components that may be used inside a <code>ui5-color-palette</code> or <code>ui5-color-palette-popover</code>",_ui5privacy:"public"},{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>
The <code>ui5-color-palette</code> provides the users with a range of predefined colors. The colors are fixed and do not change with the theme.

<h3>Usage</h3>

The <code>ui5-color-palette</code> is meant for users that need to select a color from a predefined set.
To define the colors, use the <code>ui5-color-palette-item</code> component inside the default slot of the <code>ui5-color-palette</code>.

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/ColorPalette.js";</code>`,name:"ColorPalette",slots:[{name:"default",description:"Defines the <code>ui5-color-palette-item</code> elements.",_ui5propertyName:"colors",_ui5type:{text:"Array<IColorPaletteItem>",references:[{name:"IColorPaletteItem",package:"@ui5/webcomponents",module:"dist/ColorPalette.js"}]},_ui5privacy:"public"}],events:[{name:"item-click",_ui5privacy:"public",type:{text:"CustomEvent<ColorPaletteItemClickEventDetail>",references:[{name:"ColorPaletteItemClickEventDetail",package:"@ui5/webcomponents",module:"dist/ColorPalette.js"}]},description:"Fired when the user selects a color.",_ui5since:"1.0.0-rc.15",_ui5parameters:[{type:{text:"string"},name:"color",_ui5privacy:"public",description:"the selected color"}]}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-color-palette",customElement:!0,_ui5since:"1.0.0-rc.12",_ui5privacy:"public",members:[]}],exports:[{kind:"js",name:"default",declaration:{name:"ColorPalette",module:"dist/ColorPalette.js"}},{kind:"custom-element-definition",name:"ui5-color-palette",declaration:{name:"ColorPalette",module:"dist/ColorPalette.js"}}]},{kind:"javascript-module",path:"dist/ColorPaletteItem.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-color-palette-item</code> component represents a color in the the <code>ui5-color-palette</code>.`,name:"ColorPaletteItem",members:[{kind:"field",name:"value",type:{text:"string | undefined"},description:`Defines the colour of the component.
<br><br>
<b>Note:</b> The value should be a valid CSS color.`,default:"undefined",privacy:"public",_ui5validator:"CSSColor"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-color-palette-item",customElement:!0,_ui5since:"1.0.0-rc.12",_ui5privacy:"public",_ui5implements:[{name:"IColorPaletteItem",package:"@ui5/webcomponents",module:"dist/ColorPalette.js"}]}],exports:[{kind:"js",name:"default",declaration:{name:"ColorPaletteItem",module:"dist/ColorPaletteItem.js"}},{kind:"custom-element-definition",name:"ui5-color-palette-item",declaration:{name:"ColorPaletteItem",module:"dist/ColorPaletteItem.js"}}]},{kind:"javascript-module",path:"dist/ColorPalettePopover.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>
Represents a predefined range of colors for easier selection.

Overview
The ColorPalettePopover provides the users with a slot to predefine colors.

You can customize them with the use of the colors property. You can specify a defaultColor and display a "Default color" button for the user to choose directly.
You can display a "More colors..." button that opens an additional color picker for the user to choose specific colors that are not present in the predefined range.

<h3>Usage</h3>

The palette is intended for users, who don't want to check and remember the different values of the colors and spend large amount of time to configure the right color through the color picker.

For the <code>ui5-color-palette-popover</code>
<h3>ES6 Module Import</h3>

<code>import @ui5/webcomponents/dist/ColorPalettePopover.js";</code>`,name:"ColorPalettePopover",slots:[{name:"default",description:"Defines the content of the component.",_ui5propertyName:"colors",_ui5type:{text:"Array<IColorPaletteItem>",references:[{name:"IColorPaletteItem",package:"@ui5/webcomponents",module:"dist/ColorPalette.js"}]},_ui5privacy:"public"}],members:[{kind:"field",name:"showRecentColors",type:{text:"boolean"},description:"Defines whether the user can see the last used colors in the bottom of the component",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"showMoreColors",type:{text:"boolean"},description:`Defines whether the user can choose a custom color from a component.
<b>Note:</b> In order to use this property you need to import the following module: <code>"@ui5/webcomponents/dist/features/ColorPaletteMoreColors.js"</code>`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"showDefaultColor",type:{text:"boolean"},description:"Defines whether the user can choose the default color from a button.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"defaultColor",type:{text:"string | undefined"},description:`Defines the default color of the component.
<b>Note:</b> The default color should be a part of the ColorPalette colors</code>`,default:"undefined",privacy:"public",_ui5validator:"CSSColor"},{kind:"field",name:"open",type:{text:"boolean"},description:"Defines the open | closed state of the popover.",privacy:"public",default:"false",_ui5since:"1.21.0",_ui5validator:"Boolean"},{kind:"field",name:"opener",type:{text:"HTMLElement | string | undefined"},description:"Defines the ID or DOM Reference of the element that the popover is shown at.",privacy:"public",default:"undefined",_ui5since:"1.21.0",_ui5validator:"DOMReference"},{kind:"method",name:"showAt",return:{type:{text:"void"}},parameters:[{name:"opener",type:{text:"HTMLElement"},description:"the element that the popover is shown at",_ui5privacy:"public"}],description:"Shows the ColorPalettePopover.",privacy:"public",deprecated:"The method is deprecated in favour of <code>open</code> and <code>opener</code> properties.",_ui5since:"1.1.1"},{kind:"method",name:"openPopover",return:{type:{text:"void"}},parameters:[{name:"opener",type:{text:"HTMLElement"},description:"the element that the popover is shown at",_ui5privacy:"public"}],description:"Shows the ColorPalettePopover.",privacy:"public",deprecated:"The method is deprecated in favour of <code>open</code> and <code>opener</code> properties.",_ui5since:"1.0.0-rc.16"}],events:[{name:"item-click",_ui5privacy:"public",type:{text:"CustomEvent<ColorPalettePopoverItemClickEventDetail>",references:[{name:"ColorPalettePopoverItemClickEventDetail",package:"@ui5/webcomponents",module:"dist/ColorPalettePopover.js"}]},description:"Fired when the user selects a color.",_ui5parameters:[{type:{text:"string"},name:"color",_ui5privacy:"public",description:"the selected color"}]},{name:"close",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired when the <code>ui5-color-palette-popover</code> is closed due to user interaction.",_ui5since:"1.21.0"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-color-palette-popover",customElement:!0,_ui5since:"1.0.0-rc.16",_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"ColorPalettePopover",module:"dist/ColorPalettePopover.js"}},{kind:"custom-element-definition",name:"ui5-color-palette-popover",declaration:{name:"ColorPalettePopover",module:"dist/ColorPalettePopover.js"}}]},{kind:"javascript-module",path:"dist/ColorPicker.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>
The <code>ui5-color-picker</code> allows users to choose any color and provides different input options for selecting colors.

<h3>Usage</h3>

<h4>When to use:</h4
Use the color picker if:
<ul>
<li> users need to select any color freely.</li>
</ul>

<h4>When not to use:</h4>
<ul>
<li> Users need to select one color from a predefined set of colors. Use the ColorPalette component instead.</li>
</ul>

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/ColorPicker.js";</code>`,name:"ColorPicker",members:[{kind:"field",name:"color",type:{text:"string"},description:`Defines the currently selected color of the component.
<br><br>
<b>Note</b>: use HEX, RGB, RGBA, HSV formats or a CSS color name when modifying this property.`,default:'"rgba(255, 255, 255, 1)"',privacy:"public",_ui5validator:"CSSColor"}],events:[{name:"change",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired when the the selected color is changed"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-color-picker",customElement:!0,_ui5since:"1.0.0-rc.12",_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"ColorPicker",module:"dist/ColorPicker.js"}},{kind:"custom-element-definition",name:"ui5-color-picker",declaration:{name:"ColorPicker",module:"dist/ColorPicker.js"}}]},{kind:"javascript-module",path:"dist/ComboBox.js",declarations:[{kind:"interface",name:"IComboBoxItem",description:"Interface for components that may be slotted inside a <code>ui5-combobox</code>",_ui5privacy:"public"},{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-combobox</code> component represents a drop-down menu with a list of the available options and a text input field to narrow down the options.

It is commonly used to enable users to select an option from a predefined list.

<h3>Structure</h3>
The <code>ui5-combobox</code> consists of the following elements:

<ul>
<li> Input field - displays the selected option or a custom user entry. Users can type to narrow down the list or enter their own value.</li>
<li> Drop-down arrow - expands\\collapses the option list.</li>
<li> Option list - the list of available options.</li>
</ul>

<h3>Keyboard Handling</h3>

The <code>ui5-combobox</code> provides advanced keyboard handling.
<br>

<ul>
<li>[F4], [ALT]+[UP], or [ALT]+[DOWN] - Toggles the picker.</li>
<li>[ESC] - Closes the picker, if open. If closed, cancels changes and reverts the typed in value.</li>
<li>[ENTER] or [RETURN] - If picker is open, takes over the currently selected item and closes it.</li>
<li>[DOWN] - Selects the next matching item in the picker.</li>
<li>[UP] - Selects the previous matching item in the picker.</li>
<li>[PAGEDOWN] - Moves selection down by page size (10 items by default).</li>
<li>[PAGEUP] - Moves selection up by page size (10 items by default). </li>
<li>[HOME] - If focus is in the ComboBox, moves cursor at the beginning of text. If focus is in the picker, selects the first item.</li>
<li>[END] - If focus is in the ComboBox, moves cursor at the end of text. If focus is in the picker, selects the last item.</li>
</ul>


<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/ComboBox";</code>`,name:"ComboBox",slots:[{name:"default",description:"Defines the component items.",_ui5propertyName:"items",_ui5type:{text:"Array<IComboBoxItem>",references:[{name:"IComboBoxItem",package:"@ui5/webcomponents",module:"dist/ComboBox.js"}]},_ui5privacy:"public"},{name:"valueStateMessage",description:`Defines the value state message that will be displayed as pop up under the component.
<br><br>

<b>Note:</b> If not specified, a default text (in the respective language) will be displayed.
<br>
<b>Note:</b> The <code>valueStateMessage</code> would be displayed,
when the <code>ui5-combobox</code> is in <code>Information</code>, <code>Warning</code> or <code>Error</code> value state.`,_ui5since:"1.0.0-rc.9",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"},{name:"icon",description:"Defines the icon to be displayed in the input field.",_ui5since:"1.0.0-rc.9",_ui5type:{text:"Array<IIcon>",references:[{name:"IIcon",package:"@ui5/webcomponents",module:"dist/Icon.js"}]},_ui5privacy:"public"}],members:[{kind:"field",name:"value",type:{text:"string"},description:"Defines the value of the component.",default:'""',privacy:"public",_ui5validator:"String",_ui5formProperty:!0,_ui5formEvents:"change,input"},{kind:"field",name:"noTypeahead",type:{text:"boolean"},description:"Defines whether the value will be autocompleted to match an item",default:"false",privacy:"public",_ui5since:"1.19.0",_ui5validator:"Boolean"},{kind:"field",name:"placeholder",type:{text:"string"},description:`Defines a short hint intended to aid the user with data entry when the
component has no value.`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"disabled",type:{text:"boolean"},description:`Defines whether the component is in disabled state.
<br><br>
<b>Note:</b> A disabled component is completely noninteractive.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"valueState",type:{text:"ValueState",references:[{name:"ValueState",package:"@ui5/webcomponents-base",module:"dist/types/ValueState.js"}]},description:"Defines the value state of the component.",default:'"None"',privacy:"public",_ui5validator:"ValueState"},{kind:"field",name:"readonly",type:{text:"boolean"},description:`Defines whether the component is read-only.
<br><br>
<b>Note:</b> A read-only component is not editable,
but still provides visual feedback upon user interaction.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"required",type:{text:"boolean"},description:"Defines whether the component is required.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"loading",type:{text:"boolean"},description:"Indicates whether a loading indicator should be shown in the picker.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"filter",type:{text:"ComboBoxFilter",references:[{name:"ComboBoxFilter",package:"@ui5/webcomponents",module:"dist/types/ComboBoxFilter.js"}]},description:"Defines the filter type of the component.",default:'"StartsWithPerTerm"',privacy:"public",_ui5validator:"ComboBoxFilter"},{kind:"field",name:"showClearIcon",type:{text:"boolean"},description:"Defines whether the clear icon of the combobox will be shown.",default:"false",privacy:"public",_ui5since:"1.20.1",_ui5validator:"Boolean"},{kind:"field",name:"accessibleName",type:{text:"string"},description:"Defines the accessible ARIA name of the component.",default:'""',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"String"},{kind:"field",name:"accessibleNameRef",type:{text:"string"},description:"Receives id(or many ids) of the elements that label the component",default:'""',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"String"}],events:[{name:"change",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired when the input operation has finished by pressing Enter, focusout or an item is selected."},{name:"input",_ui5privacy:"public",type:{text:"CustomEvent"},description:`Fired when typing in input or clear icon is pressed.
<br><br>
<b>Note:</b> filterValue property is updated, input is changed.`},{name:"selection-change",_ui5privacy:"public",type:{text:"CustomEvent<ComboBoxSelectionChangeEventDetail>",references:[{name:"ComboBoxSelectionChangeEventDetail",package:"@ui5/webcomponents",module:"dist/ComboBox.js"}]},description:"Fired when selection is changed by user interaction",_ui5parameters:[{type:{text:"IComboBoxItem",references:[{name:"IComboBoxItem",package:"@ui5/webcomponents",module:"dist/ComboBox.js"}]},name:"item",_ui5privacy:"public",description:"item to be selected."}]}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-combobox",customElement:!0,_ui5since:"1.0.0-rc.6",_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"ComboBox",module:"dist/ComboBox.js"}},{kind:"custom-element-definition",name:"ui5-combobox",declaration:{name:"ComboBox",module:"dist/ComboBox.js"}}]},{kind:"javascript-module",path:"dist/ComboBoxGroupItem.js",declarations:[{kind:"class",description:`The <code>ui5-cb-group-item</code> is type of suggestion item,
that can be used to split the <code>ui5-combobox</code> suggestions into groups.`,name:"ComboBoxGroupItem",members:[{kind:"field",name:"text",type:{text:"string"},description:"Defines the text of the component.",default:'""',privacy:"public",_ui5validator:"String"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-cb-group-item",customElement:!0,_ui5since:"1.0.0-rc.15",_ui5privacy:"public",_ui5abstract:!0,_ui5implements:[{name:"IComboBoxItem",package:"@ui5/webcomponents",module:"dist/ComboBox.js"}]}],exports:[{kind:"js",name:"default",declaration:{name:"ComboBoxGroupItem",module:"dist/ComboBoxGroupItem.js"}},{kind:"custom-element-definition",name:"ui5-cb-group-item",declaration:{name:"ComboBoxGroupItem",module:"dist/ComboBoxGroupItem.js"}}]},{kind:"javascript-module",path:"dist/ComboBoxItem.js",declarations:[{kind:"class",description:"The <code>ui5-cb-item</code> represents the item for a <code>ui5-combobox</code>.",name:"ComboBoxItem",members:[{kind:"field",name:"text",type:{text:"string"},description:"Defines the text of the component.",default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"additionalText",type:{text:"string"},description:"Defines the additional text of the component.",default:'""',privacy:"public",_ui5since:"1.0.0-rc.11",_ui5validator:"String"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-cb-item",customElement:!0,_ui5privacy:"public",_ui5abstract:!0,_ui5implements:[{name:"IComboBoxItem",package:"@ui5/webcomponents",module:"dist/ComboBox.js"}]}],exports:[{kind:"js",name:"default",declaration:{name:"ComboBoxItem",module:"dist/ComboBoxItem.js"}},{kind:"custom-element-definition",name:"ui5-cb-item",declaration:{name:"ComboBoxItem",module:"dist/ComboBoxItem.js"}}]},{kind:"javascript-module",path:"dist/CustomListItem.js",declarations:[{kind:"class",description:`A component to be used as custom list item within the <code>ui5-list</code>
the same way as the standard <code>ui5-li</code>.

The component accepts arbitrary HTML content to allow full customization.`,name:"CustomListItem",cssParts:[{description:"Used to style the main li tag of the list item",name:"native-li"},{description:"Used to style the content area of the list item",name:"content"},{description:"Used to style the button rendered when the list item is of type detail",name:"detail-button"},{description:"Used to style the button rendered when the list item is in delete mode",name:"delete-button"},{description:"Used to style the radio button rendered when the list item is in single selection mode",name:"radio"},{description:"Used to style the checkbox rendered when the list item is in multiple selection mode",name:"checkbox"}],slots:[{description:"Defines the content of the component.",name:"default",_ui5privacy:"public",_ui5type:{text:"Array<Node>"}},{name:"deleteButton",description:`Defines the delete button, displayed in "Delete" mode.
<b>Note:</b> While the slot allows custom buttons, to match
design guidelines, please use the <code>ui5-button</code> component.
<b>Note:</b> When the slot is not present, a built-in delete button will be displayed.`,_ui5since:"1.9.0",_ui5type:{text:"Array<IButton>",references:[{name:"IButton",package:"@ui5/webcomponents",module:"dist/Button.js"}]},_ui5privacy:"public"}],members:[{kind:"field",name:"accessibleName",type:{text:"string"},description:`Defines the text alternative of the component.
Note: If not provided a default text alternative will be set, if present.`,default:'""',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"String"},{kind:"field",name:"type",type:{text:"ListItemType",references:[{name:"ListItemType",package:"@ui5/webcomponents",module:"dist/types/ListItemType.js"}]},description:`Defines the visual indication and behavior of the list items.
Available options are <code>Active</code> (by default), <code>Inactive</code>, <code>Detail</code> and <code>Navigation</code>.
<br><br>
<b>Note:</b> When set to <code>Active</code> or <code>Navigation</code>, the item will provide visual response upon press and hover,
while with type <code>Inactive</code> and <code>Detail</code> - will not.`,default:'"Active"',privacy:"public",_ui5validator:"ListItemType",inheritedFrom:{name:"ListItem",module:"dist/ListItem.js"}},{kind:"field",name:"accessibilityAttributes",type:{text:"AccessibilityAttributes",references:[{name:"AccessibilityAttributes",package:"@ui5/webcomponents",module:"dist/ListItem.js"}]},description:`An object of strings that defines several additional accessibility attribute values
for customization depending on the use case.

 It supports the following fields:

<ul>
		<li><code>ariaSetsize</code>: Defines the number of items in the current set of listitems or treeitems when not all items in the set are present in the DOM.
		The value of each <code>aria-setsize</code> is an integer reflecting number of items in the complete set.
		<b>Note: </b> If the size of the entire set is unknown, set <code>aria-setsize="-1"</code>.
		</li>
		<li><code>ariaPosinset</code>: Defines an element's number or position in the current set of listitems or treeitems when not all items are present in the DOM.
		The value of each <code>aria-posinset</code> is an integer greater than or equal to 1, and less than or equal to the size of the set when that size is known.
		</li>
</ul>`,default:"{}",privacy:"public",_ui5since:"1.15.0",_ui5validator:"Object",inheritedFrom:{name:"ListItem",module:"dist/ListItem.js"}},{kind:"field",name:"navigated",type:{text:"boolean"},description:`The navigated state of the list item.
If set to <code>true</code>, a navigation indicator is displayed at the end of the list item.`,default:"false",privacy:"public",_ui5since:"1.10.0",_ui5validator:"Boolean",inheritedFrom:{name:"ListItem",module:"dist/ListItem.js"}},{kind:"field",name:"selected",type:{text:"boolean"},description:"Defines the selected state of the <code>ListItem</code>.",default:"false",privacy:"public",_ui5validator:"Boolean",inheritedFrom:{name:"ListItemBase",module:"dist/ListItemBase.js"}}],superclass:{name:"ListItem",package:"@ui5/webcomponents",module:"dist/ListItem.js"},tagName:"ui5-li-custom",customElement:!0,_ui5privacy:"public",events:[{name:"detail-click",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired when the user clicks on the detail button when type is <code>Detail</code>.",inheritedFrom:{name:"ListItem",module:"dist/ListItem.js"}}]}],exports:[{kind:"js",name:"default",declaration:{name:"CustomListItem",module:"dist/CustomListItem.js"}},{kind:"custom-element-definition",name:"ui5-li-custom",declaration:{name:"CustomListItem",module:"dist/CustomListItem.js"}}]},{kind:"javascript-module",path:"dist/DateComponentBase.js",declarations:[{kind:"class",description:`Abstract class that provides common functionality for date-related components (day picker, month picker, year picker, calendar, date picker, date range picker, date time picker)
This includes:
 - "languageAware: true" metadata setting, CLDR fetch and i18n initialization
 - common properties (primaryCalendar, minDate, maxDate and formatPattern) declaration and methods that operate on them
 - additional common methods`,name:"DateComponentBase",members:[{kind:"field",name:"primaryCalendarType",type:{text:"CalendarType | undefined",references:[{name:"CalendarType",package:"@ui5/webcomponents-base",module:"dist/types/CalendarType.js"}]},description:`Sets a calendar type used for display.
If not set, the calendar type of the global configuration is used.`,default:"undefined",privacy:"public",_ui5validator:"CalendarType"},{kind:"field",name:"secondaryCalendarType",type:{text:"CalendarType | undefined",references:[{name:"CalendarType",package:"@ui5/webcomponents-base",module:"dist/types/CalendarType.js"}]},description:`Defines the secondary calendar type.
If not set, the calendar will only show the primary calendar type.`,default:"undefined",privacy:"public",_ui5since:"1.0.0-rc.16",_ui5validator:"CalendarType"},{kind:"field",name:"formatPattern",type:{text:"string"},description:"Determines the format, displayed in the input field.",default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"minDate",type:{text:"string"},description:`Determines the minimum date available for selection.

<b>Note:</b> If the formatPattern property is not set, the minDate value must be provided in the ISO date format (YYYY-MM-dd).`,default:'""',privacy:"public",_ui5since:"1.0.0-rc.6",_ui5validator:"String"},{kind:"field",name:"maxDate",type:{text:"string"},description:`Determines the maximum date available for selection.

<b>Note:</b> If the formatPattern property is not set, the maxDate value must be provided in the ISO date format (YYYY-MM-dd).`,default:'""',privacy:"public",_ui5since:"1.0.0-rc.6",_ui5validator:"String"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},customElement:!0,_ui5privacy:"public",_ui5abstract:!0}],exports:[{kind:"js",name:"default",declaration:{name:"DateComponentBase",module:"dist/DateComponentBase.js"}}]},{kind:"javascript-module",path:"dist/DatePicker.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-date-picker</code> component provides an input field with assigned calendar which opens on user action.
The <code>ui5-date-picker</code> allows users to select a localized date using touch,
mouse, or keyboard input. It consists of two parts: the date input field and the
date picker.

<h3>Usage</h3>

The user can enter a date by:
<ul>
<li>Using the calendar that opens in a popup</li>
<li>Typing it in directly in the input field</li>
</ul>
<br><br>
When the user makes an entry and presses the enter key, the calendar shows the corresponding date.
When the user directly triggers the calendar display, the actual date is displayed.

<h3>Formatting</h3>

If a date is entered by typing it into
the input field, it must fit to the used date format.
<br><br>
Supported format options are pattern-based on Unicode LDML Date Format notation.
For more information, see <ui5-link target="_blank" href="http://unicode.org/reports/tr35/#Date_Field_Symbol_Table">UTS #35: Unicode Locale Data Markup Language</ui5-link>.
<br><br>
For example, if the <code>format-pattern</code> is "yyyy-MM-dd",
a valid value string is "2015-07-30" and the same is displayed in the input.

<h3>Keyboard Handling</h3>
The <code>ui5-date-picker</code> provides advanced keyboard handling.
If the <code>ui5-date-picker</code> is focused,
you can open or close the drop-down by pressing <code>F4</code>, <code>ALT+UP</code> or <code>ALT+DOWN</code> keys.
Once the drop-down is opened, you can use the <code>UP</code>, <code>DOWN</code>, <code>LEFT</code>, <code>RIGHT</code> arrow keys
to navigate through the dates and select one by pressing the <code>Space</code> or <code>Enter</code> keys. Moreover you can
use TAB to reach the buttons for changing month and year.
<br>

If the <code>ui5-date-picker</code> input field is focused and its corresponding picker dialog is not opened,
then users can increment or decrement the date referenced by <code>dateValue</code> property
by using the following shortcuts:
<br>
<ul>
<li>[PAGEDOWN] - Decrements the corresponding day of the month by one</li>
<li>[SHIFT] + [PAGEDOWN] - Decrements the corresponding month by one</li>
<li>[SHIFT] + [CTRL] + [PAGEDOWN] - Decrements the corresponding year by one</li>
<li>[PAGEUP] - Increments the corresponding day of the month by one</li>
<li>[SHIFT] + [PAGEUP] - Increments the corresponding month by one</li>
<li>[SHIFT] + [CTRL] + [PAGEUP] - Increments the corresponding year by one</li>
</ul>

<h3>Calendar types</h3>
The component supports several calendar types - Gregorian, Buddhist, Islamic, Japanese and Persian.
By default the Gregorian Calendar is used. In order to use the Buddhist, Islamic, Japanese or Persian calendar,
you need to set the <code>primaryCalendarType</code> property and import one or more of the following modules:
<br><br>

<code>import "@ui5/webcomponents-localization/dist/features/calendar/Buddhist.js";</code>
<br>
<code>import "@ui5/webcomponents-localization/dist/features/calendar/Islamic.js";</code>
<br>
<code>import "@ui5/webcomponents-localization/dist/features/calendar/Japanese.js";</code>
<br>
<code>import "@ui5/webcomponents-localization/dist/features/calendar/Persian.js";</code>
<br><br>

Or, you can use the global configuration and set the <code>calendarType</code> key:
<br>
<pre><code>&lt;script data-id="sap-ui-config" type="application/json"&gt;
{
"calendarType": "Japanese"
}
&lt;/script&gt;</code></pre>

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/DatePicker";</code>`,name:"DatePicker",slots:[{name:"valueStateMessage",description:`Defines the value state message that will be displayed as pop up under the component.
<br><br>

<b>Note:</b> If not specified, a default text (in the respective language) will be displayed.
<br>
<b>Note:</b> The <code>valueStateMessage</code> would be displayed,
when the component is in <code>Information</code>, <code>Warning</code> or <code>Error</code> value state.`,_ui5since:"1.0.0-rc.7",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"}],members:[{kind:"field",name:"value",type:{text:"string"},description:"Defines a formatted date value.",default:'""',privacy:"public",_ui5validator:"String",_ui5formProperty:!0,_ui5formEvents:"change,input"},{kind:"field",name:"valueState",type:{text:"ValueState",references:[{name:"ValueState",package:"@ui5/webcomponents-base",module:"dist/types/ValueState.js"}]},description:"Defines the value state of the component.",default:'"None"',privacy:"public",_ui5validator:"ValueState"},{kind:"field",name:"required",type:{text:"boolean"},description:"Defines whether the component is required.",default:"false",privacy:"public",_ui5since:"1.0.0-rc.9",_ui5validator:"Boolean"},{kind:"field",name:"disabled",type:{text:"boolean"},description:"Determines whether the component is displayed as disabled.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"readonly",type:{text:"boolean"},description:"Determines whether the component is displayed as read-only.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"placeholder",type:{text:"string | undefined"},description:`Defines a short hint, intended to aid the user with data entry when the
component has no value.

<br><br>
<b>Note:</b> When no placeholder is set, the format pattern is displayed as a placeholder.
Passing an empty string as the value of this property will make the component appear empty - without placeholder or format pattern.`,default:"undefined",privacy:"public",_ui5validator:"String"},{kind:"field",name:"name",type:{text:"string"},description:`Determines the name with which the component will be submitted in an HTML form.

<br><br>
<b>Important:</b> For the <code>name</code> property to have effect, you must add the following import to your project:
<code>import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";</code>

<br><br>
<b>Note:</b> When set, a native <code>input</code> HTML element
will be created inside the component so that it can be submitted as
part of an HTML form. Do not use this property unless you need to submit a form.`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"hideWeekNumbers",type:{text:"boolean"},description:`Defines the visibility of the week numbers column.
<br><br>

<b>Note:</b> For calendars other than Gregorian,
the week numbers are not displayed regardless of what is set.`,default:"false",privacy:"public",_ui5since:"1.0.0-rc.8",_ui5validator:"Boolean"},{kind:"field",name:"accessibleName",type:{text:"string"},description:"Defines the aria-label attribute for the component.",default:'""',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"String"},{kind:"field",name:"accessibleNameRef",type:{text:"string"},description:"Receives id(or many ids) of the elements that label the component.",default:'""',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"String"},{kind:"method",name:"isValid",return:{type:{text:"boolean"}},parameters:[{name:"value",type:{text:"string"},description:"A value to be tested against the current date format",_ui5privacy:"public"}],description:"Checks if a value is valid against the current date format of the DatePicker.",privacy:"public"},{kind:"method",name:"isInValidRange",return:{type:{text:"boolean"}},parameters:[{name:"value",type:{text:"string"},description:"A value to be checked",_ui5privacy:"public"}],description:"Checks if a date is between the minimum and maximum date.",privacy:"public"},{kind:"method",name:"formatValue",return:{type:{text:"string"},description:"The date as string"},parameters:[{name:"date",type:{text:"Date"},description:"A Java Script date object to be formatted as string",_ui5privacy:"public"}],description:`Formats a Java Script date object into a string representing a locale date
according to the <code>formatPattern</code> property of the DatePicker instance`,privacy:"public"},{kind:"method",name:"closePicker",return:{type:{text:"void"}},description:"Closes the picker.",privacy:"public"},{kind:"method",name:"openPicker",return:{type:{text:"Promise<void>"},description:"Resolves when the picker is open"},description:"Opens the picker.",privacy:"public"},{kind:"method",name:"isOpen",return:{type:{text:"boolean"},description:"true if the picker is open, false otherwise"},description:"Checks if the picker is open.",privacy:"public"},{kind:"field",name:"dateValue",type:{text:"Date | null"},description:"Currently selected date represented as a Local JavaScript Date instance.",privacy:"public",default:"null",readonly:!0},{kind:"field",name:"primaryCalendarType",type:{text:"CalendarType | undefined",references:[{name:"CalendarType",package:"@ui5/webcomponents-base",module:"dist/types/CalendarType.js"}]},description:`Sets a calendar type used for display.
If not set, the calendar type of the global configuration is used.`,default:"undefined",privacy:"public",_ui5validator:"CalendarType",inheritedFrom:{name:"DateComponentBase",module:"dist/DateComponentBase.js"}},{kind:"field",name:"secondaryCalendarType",type:{text:"CalendarType | undefined",references:[{name:"CalendarType",package:"@ui5/webcomponents-base",module:"dist/types/CalendarType.js"}]},description:`Defines the secondary calendar type.
If not set, the calendar will only show the primary calendar type.`,default:"undefined",privacy:"public",_ui5since:"1.0.0-rc.16",_ui5validator:"CalendarType",inheritedFrom:{name:"DateComponentBase",module:"dist/DateComponentBase.js"}},{kind:"field",name:"formatPattern",type:{text:"string"},description:"Determines the format, displayed in the input field.",default:'""',privacy:"public",_ui5validator:"String",inheritedFrom:{name:"DateComponentBase",module:"dist/DateComponentBase.js"}},{kind:"field",name:"minDate",type:{text:"string"},description:`Determines the minimum date available for selection.

<b>Note:</b> If the formatPattern property is not set, the minDate value must be provided in the ISO date format (YYYY-MM-dd).`,default:'""',privacy:"public",_ui5since:"1.0.0-rc.6",_ui5validator:"String",inheritedFrom:{name:"DateComponentBase",module:"dist/DateComponentBase.js"}},{kind:"field",name:"maxDate",type:{text:"string"},description:`Determines the maximum date available for selection.

<b>Note:</b> If the formatPattern property is not set, the maxDate value must be provided in the ISO date format (YYYY-MM-dd).`,default:'""',privacy:"public",_ui5since:"1.0.0-rc.6",_ui5validator:"String",inheritedFrom:{name:"DateComponentBase",module:"dist/DateComponentBase.js"}}],events:[{name:"change",_ui5privacy:"public",type:{text:"CustomEvent<DatePickerChangeEventDetail>",references:[{name:"DatePickerChangeEventDetail",package:"@ui5/webcomponents",module:"dist/DatePicker.js"}]},description:"Fired when the input operation has finished by pressing Enter or on focusout.",_ui5allowPreventDefault:!0,_ui5parameters:[{type:{text:"string"},name:"value",_ui5privacy:"public",description:"The submitted value."},{type:{text:"boolean"},name:"valid",_ui5privacy:"public",description:"Indicator if the value is in correct format pattern and in valid range."}]},{name:"input",_ui5privacy:"public",type:{text:"CustomEvent<DatePickerInputEventDetail>",references:[{name:"DatePickerInputEventDetail",package:"@ui5/webcomponents",module:"dist/DatePicker.js"}]},description:"Fired when the value of the component is changed at each key stroke.",_ui5allowPreventDefault:!0,_ui5parameters:[{type:{text:"string"},name:"value",_ui5privacy:"public",description:"The submitted value."},{type:{text:"boolean"},name:"valid",_ui5privacy:"public",description:"Indicator if the value is in correct format pattern and in valid range."}]},{name:"value-state-change",_ui5privacy:"public",type:{text:"CustomEvent<DatePickerValueStateChangeEventDetail>",references:[{name:"DatePickerValueStateChangeEventDetail",package:"@ui5/webcomponents",module:"dist/DatePicker.js"}]},description:`Fired before the value state of the component is updated internally.
The event is preventable, meaning that if it's default action is
prevented, the component will not update the value state.`,_ui5allowPreventDefault:!0,_ui5parameters:[{type:{text:"string"},name:"valueState",_ui5privacy:"public",description:"The new <code>valueState</code> that will be set."},{type:{text:"boolean"},name:"valid",_ui5privacy:"public",description:"Indicator if the value is in correct format pattern and in valid range."}]}],superclass:{name:"DateComponentBase",package:"@ui5/webcomponents",module:"dist/DateComponentBase.js"},tagName:"ui5-date-picker",customElement:!0,_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"DatePicker",module:"dist/DatePicker.js"}},{kind:"custom-element-definition",name:"ui5-date-picker",declaration:{name:"DatePicker",module:"dist/DatePicker.js"}}]},{kind:"javascript-module",path:"dist/DateRangePicker.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>
The DateRangePicker enables the users to enter a localized date range using touch, mouse, keyboard input, or by selecting a date range in the calendar.

<h3>Usage</h3>
The user can enter a date by:
Using the calendar that opens in a popup or typing it in directly in the input field (not available for mobile devices).
For the <code>ui5-daterange-picker</code>
<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/DateRangePicker.js";</code>

<h3>Keyboard Handling</h3>
The <code>ui5-daterange-picker</code> provides advanced keyboard handling.
<br>

When the <code>ui5-daterange-picker</code> input field is focused the user can
increment or decrement respectively the range start or end date, depending on where the cursor is.
The following shortcuts are available:
<br>
<ul>
<li>[PAGEDOWN] - Decrements the corresponding day of the month by one</li>
<li>[SHIFT] + [PAGEDOWN] - Decrements the corresponding month by one</li>
<li>[SHIFT] + [CTRL] + [PAGEDOWN] - Decrements the corresponding year by one</li>
<li>[PAGEUP] - Increments the corresponding day of the month by one</li>
<li>[SHIFT] + [PAGEUP] - Increments the corresponding month by one</li>
<li>[SHIFT] + [CTRL] + [PAGEUP] - Increments the corresponding year by one</li>
</ul>`,name:"DateRangePicker",members:[{kind:"field",name:"delimiter",type:{text:"string"},description:`Determines the symbol which separates the dates.
If not supplied, the default time interval delimiter for the current locale will be used.`,default:'"-"',privacy:"public",_ui5validator:"String"},{kind:"field",name:"dateValue",type:{text:"Date | null"},description:"<b>Note:</b> The getter method is inherited and not supported. If called it will return an empty value.",privacy:"public",default:"null",readonly:!0,inheritedFrom:{name:"DatePicker",module:"dist/DatePicker.js"}},{kind:"field",name:"dateValueUTC",type:{text:"Date | null"},description:"<b>Note:</b> The getter method is inherited and not supported. If called it will return an empty value.",privacy:"public",default:"null",readonly:!0},{kind:"field",name:"startDateValue",type:{text:"Date | null"},description:"Returns the start date of the currently selected range as JavaScript Date instance.",privacy:"public",default:"null",readonly:!0},{kind:"field",name:"endDateValue",type:{text:"Date | null"},description:"Returns the end date of the currently selected range as JavaScript Date instance.",privacy:"public",default:"null",readonly:!0},{kind:"field",name:"value",type:{text:"string"},description:"Defines a formatted date value.",default:'""',privacy:"public",_ui5validator:"String",_ui5formProperty:!0,_ui5formEvents:"change,input",inheritedFrom:{name:"DatePicker",module:"dist/DatePicker.js"}},{kind:"field",name:"valueState",type:{text:"ValueState",references:[{name:"ValueState",package:"@ui5/webcomponents-base",module:"dist/types/ValueState.js"}]},description:"Defines the value state of the component.",default:'"None"',privacy:"public",_ui5validator:"ValueState",inheritedFrom:{name:"DatePicker",module:"dist/DatePicker.js"}},{kind:"field",name:"required",type:{text:"boolean"},description:"Defines whether the component is required.",default:"false",privacy:"public",_ui5since:"1.0.0-rc.9",_ui5validator:"Boolean",inheritedFrom:{name:"DatePicker",module:"dist/DatePicker.js"}},{kind:"field",name:"disabled",type:{text:"boolean"},description:"Determines whether the component is displayed as disabled.",default:"false",privacy:"public",_ui5validator:"Boolean",inheritedFrom:{name:"DatePicker",module:"dist/DatePicker.js"}},{kind:"field",name:"readonly",type:{text:"boolean"},description:"Determines whether the component is displayed as read-only.",default:"false",privacy:"public",_ui5validator:"Boolean",inheritedFrom:{name:"DatePicker",module:"dist/DatePicker.js"}},{kind:"field",name:"placeholder",type:{text:"string | undefined"},description:`Defines a short hint, intended to aid the user with data entry when the
component has no value.

<br><br>
<b>Note:</b> When no placeholder is set, the format pattern is displayed as a placeholder.
Passing an empty string as the value of this property will make the component appear empty - without placeholder or format pattern.`,default:"undefined",privacy:"public",_ui5validator:"String",inheritedFrom:{name:"DatePicker",module:"dist/DatePicker.js"}},{kind:"field",name:"name",type:{text:"string"},description:`Determines the name with which the component will be submitted in an HTML form.

<br><br>
<b>Important:</b> For the <code>name</code> property to have effect, you must add the following import to your project:
<code>import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";</code>

<br><br>
<b>Note:</b> When set, a native <code>input</code> HTML element
will be created inside the component so that it can be submitted as
part of an HTML form. Do not use this property unless you need to submit a form.`,default:'""',privacy:"public",_ui5validator:"String",inheritedFrom:{name:"DatePicker",module:"dist/DatePicker.js"}},{kind:"field",name:"hideWeekNumbers",type:{text:"boolean"},description:`Defines the visibility of the week numbers column.
<br><br>

<b>Note:</b> For calendars other than Gregorian,
the week numbers are not displayed regardless of what is set.`,default:"false",privacy:"public",_ui5since:"1.0.0-rc.8",_ui5validator:"Boolean",inheritedFrom:{name:"DatePicker",module:"dist/DatePicker.js"}},{kind:"field",name:"accessibleName",type:{text:"string"},description:"Defines the aria-label attribute for the component.",default:'""',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"String",inheritedFrom:{name:"DatePicker",module:"dist/DatePicker.js"}},{kind:"field",name:"accessibleNameRef",type:{text:"string"},description:"Receives id(or many ids) of the elements that label the component.",default:'""',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"String",inheritedFrom:{name:"DatePicker",module:"dist/DatePicker.js"}},{kind:"method",name:"isValid",return:{type:{text:"boolean"}},parameters:[{name:"value",type:{text:"string"},description:"A value to be tested against the current date format",_ui5privacy:"public"}],description:"Checks if a value is valid against the current date format of the DatePicker.",privacy:"public",inheritedFrom:{name:"DatePicker",module:"dist/DatePicker.js"}},{kind:"method",name:"isInValidRange",return:{type:{text:"boolean"}},parameters:[{name:"value",type:{text:"string"},description:"A value to be checked",_ui5privacy:"public"}],description:"Checks if a date is between the minimum and maximum date.",privacy:"public",inheritedFrom:{name:"DatePicker",module:"dist/DatePicker.js"}},{kind:"method",name:"formatValue",return:{type:{text:"string"},description:"The date as string"},parameters:[{name:"date",type:{text:"Date"},description:"A Java Script date object to be formatted as string",_ui5privacy:"public"}],description:`Formats a Java Script date object into a string representing a locale date
according to the <code>formatPattern</code> property of the DatePicker instance`,privacy:"public",inheritedFrom:{name:"DatePicker",module:"dist/DatePicker.js"}},{kind:"method",name:"closePicker",return:{type:{text:"void"}},description:"Closes the picker.",privacy:"public",inheritedFrom:{name:"DatePicker",module:"dist/DatePicker.js"}},{kind:"method",name:"openPicker",return:{type:{text:"Promise<void>"},description:"Resolves when the picker is open"},description:"Opens the picker.",privacy:"public",inheritedFrom:{name:"DatePicker",module:"dist/DatePicker.js"}},{kind:"method",name:"isOpen",return:{type:{text:"boolean"},description:"true if the picker is open, false otherwise"},description:"Checks if the picker is open.",privacy:"public",inheritedFrom:{name:"DatePicker",module:"dist/DatePicker.js"}},{kind:"field",name:"primaryCalendarType",type:{text:"CalendarType | undefined",references:[{name:"CalendarType",package:"@ui5/webcomponents-base",module:"dist/types/CalendarType.js"}]},description:`Sets a calendar type used for display.
If not set, the calendar type of the global configuration is used.`,default:"undefined",privacy:"public",_ui5validator:"CalendarType",inheritedFrom:{name:"DateComponentBase",module:"dist/DateComponentBase.js"}},{kind:"field",name:"secondaryCalendarType",type:{text:"CalendarType | undefined",references:[{name:"CalendarType",package:"@ui5/webcomponents-base",module:"dist/types/CalendarType.js"}]},description:`Defines the secondary calendar type.
If not set, the calendar will only show the primary calendar type.`,default:"undefined",privacy:"public",_ui5since:"1.0.0-rc.16",_ui5validator:"CalendarType",inheritedFrom:{name:"DateComponentBase",module:"dist/DateComponentBase.js"}},{kind:"field",name:"formatPattern",type:{text:"string"},description:"Determines the format, displayed in the input field.",default:'""',privacy:"public",_ui5validator:"String",inheritedFrom:{name:"DateComponentBase",module:"dist/DateComponentBase.js"}},{kind:"field",name:"minDate",type:{text:"string"},description:`Determines the minimum date available for selection.

<b>Note:</b> If the formatPattern property is not set, the minDate value must be provided in the ISO date format (YYYY-MM-dd).`,default:'""',privacy:"public",_ui5since:"1.0.0-rc.6",_ui5validator:"String",inheritedFrom:{name:"DateComponentBase",module:"dist/DateComponentBase.js"}},{kind:"field",name:"maxDate",type:{text:"string"},description:`Determines the maximum date available for selection.

<b>Note:</b> If the formatPattern property is not set, the maxDate value must be provided in the ISO date format (YYYY-MM-dd).`,default:'""',privacy:"public",_ui5since:"1.0.0-rc.6",_ui5validator:"String",inheritedFrom:{name:"DateComponentBase",module:"dist/DateComponentBase.js"}}],superclass:{name:"DatePicker",package:"@ui5/webcomponents",module:"dist/DatePicker.js"},tagName:"ui5-daterange-picker",customElement:!0,_ui5since:"1.0.0-rc.8",_ui5privacy:"public",events:[{name:"change",_ui5privacy:"public",type:{text:"CustomEvent<DatePickerChangeEventDetail>",references:[{name:"DatePickerChangeEventDetail",package:"@ui5/webcomponents",module:"dist/DatePicker.js"}]},description:"Fired when the input operation has finished by pressing Enter or on focusout.",_ui5allowPreventDefault:!0,_ui5parameters:[{type:{text:"string"},name:"value",_ui5privacy:"public",description:"The submitted value."},{type:{text:"boolean"},name:"valid",_ui5privacy:"public",description:"Indicator if the value is in correct format pattern and in valid range."}],inheritedFrom:{name:"DatePicker",module:"dist/DatePicker.js"}},{name:"input",_ui5privacy:"public",type:{text:"CustomEvent<DatePickerInputEventDetail>",references:[{name:"DatePickerInputEventDetail",package:"@ui5/webcomponents",module:"dist/DatePicker.js"}]},description:"Fired when the value of the component is changed at each key stroke.",_ui5allowPreventDefault:!0,_ui5parameters:[{type:{text:"string"},name:"value",_ui5privacy:"public",description:"The submitted value."},{type:{text:"boolean"},name:"valid",_ui5privacy:"public",description:"Indicator if the value is in correct format pattern and in valid range."}],inheritedFrom:{name:"DatePicker",module:"dist/DatePicker.js"}},{name:"value-state-change",_ui5privacy:"public",type:{text:"CustomEvent<DatePickerValueStateChangeEventDetail>",references:[{name:"DatePickerValueStateChangeEventDetail",package:"@ui5/webcomponents",module:"dist/DatePicker.js"}]},description:`Fired before the value state of the component is updated internally.
The event is preventable, meaning that if it's default action is
prevented, the component will not update the value state.`,_ui5allowPreventDefault:!0,_ui5parameters:[{type:{text:"string"},name:"valueState",_ui5privacy:"public",description:"The new <code>valueState</code> that will be set."},{type:{text:"boolean"},name:"valid",_ui5privacy:"public",description:"Indicator if the value is in correct format pattern and in valid range."}],inheritedFrom:{name:"DatePicker",module:"dist/DatePicker.js"}}],slots:[{name:"valueStateMessage",description:`Defines the value state message that will be displayed as pop up under the component.
<br><br>

<b>Note:</b> If not specified, a default text (in the respective language) will be displayed.
<br>
<b>Note:</b> The <code>valueStateMessage</code> would be displayed,
when the component is in <code>Information</code>, <code>Warning</code> or <code>Error</code> value state.`,_ui5since:"1.0.0-rc.7",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"}]}],exports:[{kind:"js",name:"default",declaration:{name:"DateRangePicker",module:"dist/DateRangePicker.js"}},{kind:"custom-element-definition",name:"ui5-daterange-picker",declaration:{name:"DateRangePicker",module:"dist/DateRangePicker.js"}}]},{kind:"javascript-module",path:"dist/DateTimePicker.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>
The <code>DateTimePicker</code> component alows users to select both date (day, month and year) and time (hours, minutes and seconds)
and for the purpose it consists of input field and Date/Time picker.

<h3>Usage</h3>

Use the <code>DateTimePicker</code> if you need a combined date and time input component.
Don't use it if you want to use either date, or time value.
In this case, use the <code>DatePicker</code> or the <code>TimePicker</code> components instead.
<br><br>
The user can set date/time by:
<ul>
<li>using the calendar and the time selectors</li>
<li>typing in the input field</li>
</ul>

Programmatically, to set date/time for the <code>DateTimePicker</code>, use the <code>value</code> property

<h3>Formatting</h3>

The value entered by typing into the input field must fit to the used date/time format.
<br><br>
Supported format options are pattern-based on Unicode LDML Date Format notation.
For more information, see <ui5-link target="_blank" href="https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table">UTS #35: Unicode Locale Data Markup Language</ui5-link>.
<br><br>
<b>Example:</b> the following format <code>dd/MM/yyyy, hh:mm:ss aa</code>
corresponds the <code>13/04/2020, 03:16:16 AM</code> value.
<br>
The small 'h' defines "12" hours format and the "aa" symbols - "AM/PM" time periods.

<br><br>
<b>Example:</b> the following format <code>dd/MM/yyyy, HH:mm:ss</code>
corresponds the <code>13/04/2020, 15:16:16</code> value.
<br>
The capital 'H' indicates "24" hours format.

<br><br>
<b>Note:</b> If the <code>formatPattern</code> does NOT include time,
the <code>DateTimePicker</code> will fallback to the default time format according to the locale.

<br><br>
<b>Note:</b> If no placeholder is set to the <code>DateTimePicker</code>,
the current <code>formatPattern</code> is displayed as a placeholder.
If another placeholder is needed, it must be set or in case no placeholder is needed - it can be set to an empty string.

<br><br>
<b>Note:</b> If the user input does NOT match the <code>formatPattern</code>,
the <code>DateTimePicker</code> makes an attempt to parse it based on the
locale settings.

<h3>Responsive behavior</h3>

The <code>DateTimePicker</code> is responsive and fully adapts to all devices.
For larger screens, such as tablet or desktop, it is displayed as a popover, while
on phone devices, it is displayed full screen.

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/DateTimePicker.js";</code>`,name:"DateTimePicker",members:[{kind:"method",name:"openPicker",return:{type:{text:"Promise<void>"}},description:"Opens the picker.",privacy:"public",inheritedFrom:{name:"DatePicker",module:"dist/DatePicker.js"}},{kind:"field",name:"value",type:{text:"string"},description:"Defines a formatted date value.",default:'""',privacy:"public",_ui5validator:"String",_ui5formProperty:!0,_ui5formEvents:"change,input",inheritedFrom:{name:"DatePicker",module:"dist/DatePicker.js"}},{kind:"field",name:"valueState",type:{text:"ValueState",references:[{name:"ValueState",package:"@ui5/webcomponents-base",module:"dist/types/ValueState.js"}]},description:"Defines the value state of the component.",default:'"None"',privacy:"public",_ui5validator:"ValueState",inheritedFrom:{name:"DatePicker",module:"dist/DatePicker.js"}},{kind:"field",name:"required",type:{text:"boolean"},description:"Defines whether the component is required.",default:"false",privacy:"public",_ui5since:"1.0.0-rc.9",_ui5validator:"Boolean",inheritedFrom:{name:"DatePicker",module:"dist/DatePicker.js"}},{kind:"field",name:"disabled",type:{text:"boolean"},description:"Determines whether the component is displayed as disabled.",default:"false",privacy:"public",_ui5validator:"Boolean",inheritedFrom:{name:"DatePicker",module:"dist/DatePicker.js"}},{kind:"field",name:"readonly",type:{text:"boolean"},description:"Determines whether the component is displayed as read-only.",default:"false",privacy:"public",_ui5validator:"Boolean",inheritedFrom:{name:"DatePicker",module:"dist/DatePicker.js"}},{kind:"field",name:"placeholder",type:{text:"string | undefined"},description:`Defines a short hint, intended to aid the user with data entry when the
component has no value.

<br><br>
<b>Note:</b> When no placeholder is set, the format pattern is displayed as a placeholder.
Passing an empty string as the value of this property will make the component appear empty - without placeholder or format pattern.`,default:"undefined",privacy:"public",_ui5validator:"String",inheritedFrom:{name:"DatePicker",module:"dist/DatePicker.js"}},{kind:"field",name:"name",type:{text:"string"},description:`Determines the name with which the component will be submitted in an HTML form.

<br><br>
<b>Important:</b> For the <code>name</code> property to have effect, you must add the following import to your project:
<code>import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";</code>

<br><br>
<b>Note:</b> When set, a native <code>input</code> HTML element
will be created inside the component so that it can be submitted as
part of an HTML form. Do not use this property unless you need to submit a form.`,default:'""',privacy:"public",_ui5validator:"String",inheritedFrom:{name:"DatePicker",module:"dist/DatePicker.js"}},{kind:"field",name:"hideWeekNumbers",type:{text:"boolean"},description:`Defines the visibility of the week numbers column.
<br><br>

<b>Note:</b> For calendars other than Gregorian,
the week numbers are not displayed regardless of what is set.`,default:"false",privacy:"public",_ui5since:"1.0.0-rc.8",_ui5validator:"Boolean",inheritedFrom:{name:"DatePicker",module:"dist/DatePicker.js"}},{kind:"field",name:"accessibleName",type:{text:"string"},description:"Defines the aria-label attribute for the component.",default:'""',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"String",inheritedFrom:{name:"DatePicker",module:"dist/DatePicker.js"}},{kind:"field",name:"accessibleNameRef",type:{text:"string"},description:"Receives id(or many ids) of the elements that label the component.",default:'""',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"String",inheritedFrom:{name:"DatePicker",module:"dist/DatePicker.js"}},{kind:"method",name:"isValid",return:{type:{text:"boolean"}},parameters:[{name:"value",type:{text:"string"},description:"A value to be tested against the current date format",_ui5privacy:"public"}],description:"Checks if a value is valid against the current date format of the DatePicker.",privacy:"public",inheritedFrom:{name:"DatePicker",module:"dist/DatePicker.js"}},{kind:"method",name:"isInValidRange",return:{type:{text:"boolean"}},parameters:[{name:"value",type:{text:"string"},description:"A value to be checked",_ui5privacy:"public"}],description:"Checks if a date is between the minimum and maximum date.",privacy:"public",inheritedFrom:{name:"DatePicker",module:"dist/DatePicker.js"}},{kind:"method",name:"formatValue",return:{type:{text:"string"},description:"The date as string"},parameters:[{name:"date",type:{text:"Date"},description:"A Java Script date object to be formatted as string",_ui5privacy:"public"}],description:`Formats a Java Script date object into a string representing a locale date
according to the <code>formatPattern</code> property of the DatePicker instance`,privacy:"public",inheritedFrom:{name:"DatePicker",module:"dist/DatePicker.js"}},{kind:"method",name:"closePicker",return:{type:{text:"void"}},description:"Closes the picker.",privacy:"public",inheritedFrom:{name:"DatePicker",module:"dist/DatePicker.js"}},{kind:"method",name:"isOpen",return:{type:{text:"boolean"},description:"true if the picker is open, false otherwise"},description:"Checks if the picker is open.",privacy:"public",inheritedFrom:{name:"DatePicker",module:"dist/DatePicker.js"}},{kind:"field",name:"dateValue",type:{text:"Date | null"},description:"Currently selected date represented as a Local JavaScript Date instance.",privacy:"public",default:"null",readonly:!0,inheritedFrom:{name:"DatePicker",module:"dist/DatePicker.js"}},{kind:"field",name:"primaryCalendarType",type:{text:"CalendarType | undefined",references:[{name:"CalendarType",package:"@ui5/webcomponents-base",module:"dist/types/CalendarType.js"}]},description:`Sets a calendar type used for display.
If not set, the calendar type of the global configuration is used.`,default:"undefined",privacy:"public",_ui5validator:"CalendarType",inheritedFrom:{name:"DateComponentBase",module:"dist/DateComponentBase.js"}},{kind:"field",name:"secondaryCalendarType",type:{text:"CalendarType | undefined",references:[{name:"CalendarType",package:"@ui5/webcomponents-base",module:"dist/types/CalendarType.js"}]},description:`Defines the secondary calendar type.
If not set, the calendar will only show the primary calendar type.`,default:"undefined",privacy:"public",_ui5since:"1.0.0-rc.16",_ui5validator:"CalendarType",inheritedFrom:{name:"DateComponentBase",module:"dist/DateComponentBase.js"}},{kind:"field",name:"formatPattern",type:{text:"string"},description:"Determines the format, displayed in the input field.",default:'""',privacy:"public",_ui5validator:"String",inheritedFrom:{name:"DateComponentBase",module:"dist/DateComponentBase.js"}},{kind:"field",name:"minDate",type:{text:"string"},description:`Determines the minimum date available for selection.

<b>Note:</b> If the formatPattern property is not set, the minDate value must be provided in the ISO date format (YYYY-MM-dd).`,default:'""',privacy:"public",_ui5since:"1.0.0-rc.6",_ui5validator:"String",inheritedFrom:{name:"DateComponentBase",module:"dist/DateComponentBase.js"}},{kind:"field",name:"maxDate",type:{text:"string"},description:`Determines the maximum date available for selection.

<b>Note:</b> If the formatPattern property is not set, the maxDate value must be provided in the ISO date format (YYYY-MM-dd).`,default:'""',privacy:"public",_ui5since:"1.0.0-rc.6",_ui5validator:"String",inheritedFrom:{name:"DateComponentBase",module:"dist/DateComponentBase.js"}}],superclass:{name:"DatePicker",package:"@ui5/webcomponents",module:"dist/DatePicker.js"},tagName:"ui5-datetime-picker",customElement:!0,_ui5since:"1.0.0-rc.7",_ui5privacy:"public",events:[{name:"change",_ui5privacy:"public",type:{text:"CustomEvent<DatePickerChangeEventDetail>",references:[{name:"DatePickerChangeEventDetail",package:"@ui5/webcomponents",module:"dist/DatePicker.js"}]},description:"Fired when the input operation has finished by pressing Enter or on focusout.",_ui5allowPreventDefault:!0,_ui5parameters:[{type:{text:"string"},name:"value",_ui5privacy:"public",description:"The submitted value."},{type:{text:"boolean"},name:"valid",_ui5privacy:"public",description:"Indicator if the value is in correct format pattern and in valid range."}],inheritedFrom:{name:"DatePicker",module:"dist/DatePicker.js"}},{name:"input",_ui5privacy:"public",type:{text:"CustomEvent<DatePickerInputEventDetail>",references:[{name:"DatePickerInputEventDetail",package:"@ui5/webcomponents",module:"dist/DatePicker.js"}]},description:"Fired when the value of the component is changed at each key stroke.",_ui5allowPreventDefault:!0,_ui5parameters:[{type:{text:"string"},name:"value",_ui5privacy:"public",description:"The submitted value."},{type:{text:"boolean"},name:"valid",_ui5privacy:"public",description:"Indicator if the value is in correct format pattern and in valid range."}],inheritedFrom:{name:"DatePicker",module:"dist/DatePicker.js"}},{name:"value-state-change",_ui5privacy:"public",type:{text:"CustomEvent<DatePickerValueStateChangeEventDetail>",references:[{name:"DatePickerValueStateChangeEventDetail",package:"@ui5/webcomponents",module:"dist/DatePicker.js"}]},description:`Fired before the value state of the component is updated internally.
The event is preventable, meaning that if it's default action is
prevented, the component will not update the value state.`,_ui5allowPreventDefault:!0,_ui5parameters:[{type:{text:"string"},name:"valueState",_ui5privacy:"public",description:"The new <code>valueState</code> that will be set."},{type:{text:"boolean"},name:"valid",_ui5privacy:"public",description:"Indicator if the value is in correct format pattern and in valid range."}],inheritedFrom:{name:"DatePicker",module:"dist/DatePicker.js"}}],slots:[{name:"valueStateMessage",description:`Defines the value state message that will be displayed as pop up under the component.
<br><br>

<b>Note:</b> If not specified, a default text (in the respective language) will be displayed.
<br>
<b>Note:</b> The <code>valueStateMessage</code> would be displayed,
when the component is in <code>Information</code>, <code>Warning</code> or <code>Error</code> value state.`,_ui5since:"1.0.0-rc.7",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"}]}],exports:[{kind:"js",name:"default",declaration:{name:"DateTimePicker",module:"dist/DateTimePicker.js"}},{kind:"custom-element-definition",name:"ui5-datetime-picker",declaration:{name:"DateTimePicker",module:"dist/DateTimePicker.js"}}]},{kind:"javascript-module",path:"dist/DayPicker.js",declarations:[],exports:[{kind:"js",name:"default",declaration:{name:"DayPicker",module:"dist/DayPicker.js"}}]},{kind:"javascript-module",path:"dist/Dialog.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>
The <code>ui5-dialog</code> component is used to temporarily display some information in a
size-limited window in front of the regular app screen.
It is used to prompt the user for an action or a confirmation.
The <code>ui5-dialog</code> interrupts the current app processing as it is the only focused UI element and
the main screen is dimmed/blocked.
The dialog combines concepts known from other technologies where the windows have
names such as dialog box, dialog window, pop-up, pop-up window, alert box, or message box.
<br><br>
The <code>ui5-dialog</code> is modal, which means that an user action is required before it is possible to return to the parent window.
To open multiple dialogs, each dialog element should be separate in the markup. This will ensure the correct modal behavior. Avoid nesting dialogs within each other.
The content of the <code>ui5-dialog</code> is fully customizable.

<h3>Structure</h3>
A <code>ui5-dialog</code> consists of a header, content, and a footer for action buttons.
The <code>ui5-dialog</code> is usually displayed at the center of the screen.
Its position can be changed by the user. To enable this, you need to set the property <code>draggable</code> accordingly.


<h3>Responsive Behavior</h3>
The <code>stretch</code> property can be used to stretch the
<code>ui5-dialog</code> on full screen.

<b>Note:</b> When a <code>ui5-bar</code> is used in the header or in the footer, you should remove the default dialog's paddings.
<br>
For more information see the sample "Bar in Header/Footer".


<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/Dialog";</code>

<b>Note: </b> We recommend placing popup-like components (<code>ui5-dialog</code> and <code>ui5-popover</code>)
outside any other components. Preferably, the popup-like components should be placed
in an upper level HTML element. Otherwise, in some cases the parent HTML elements can break
the position and/or z-index management of the popup-like components.

<b>Note:</b> We don't recommend nesting popup-like components (<code>ui5-dialog</code>, <code>ui5-popover</code>).`,name:"Dialog",cssParts:[{description:"Used to style the header of the component",name:"header"},{description:"Used to style the content of the component",name:"content"},{description:"Used to style the footer of the component",name:"footer"}],slots:[{name:"header",description:`Defines the header HTML Element.
<br><br>
<b>Note:</b> When a <code>ui5-bar</code> is used in the header, you should remove the default dialog's paddings.
<br><br>
<b>Note:</b> If <code>header</code> slot is provided, the labelling of the dialog is a responsibility of the application developer.
<code>accessibleName</code> should be used.`,_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"},{name:"footer",description:`Defines the footer HTML Element.
<br><br>
<b>Note:</b> When a <code>ui5-bar</code> is used in the footer, you should remove the default dialog's paddings.`,_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"},{name:"default",description:"Defines the content of the Popup.",_ui5propertyName:"content",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"}],members:[{kind:"field",name:"headerText",type:{text:"string"},description:`Defines the header text.
<br><br>
<b>Note:</b> If <code>header</code> slot is provided, the <code>headerText</code> is ignored.`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"stretch",type:{text:"boolean"},description:`Determines whether the component should be stretched to fullscreen.
<br><br>
<b>Note:</b> The component will be stretched to approximately
90% of the viewport.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"draggable",type:{text:"boolean"},description:`Determines whether the component is draggable.
If this property is set to true, the Dialog will be draggable by its header.
<br><br>
<b>Note:</b> The component can be draggable only in desktop mode.
<br><br>
<b>Note:</b> This property overrides the default HTML "draggable" attribute native behavior.
When "draggable" is set to true, the native browser "draggable"
behavior is prevented and only the Dialog custom logic ("draggable by its header") works.`,default:"false",privacy:"public",_ui5since:"1.0.0-rc.9",_ui5validator:"Boolean"},{kind:"field",name:"resizable",type:{text:"boolean"},description:`Configures the component to be resizable.
If this property is set to true, the Dialog will have a resize handle in its bottom right corner in LTR languages.
In RTL languages, the resize handle will be placed in the bottom left corner.
<br><br>
<b>Note:</b> The component can be resizable only in desktop mode.
<br>
<b>Note:</b> Upon resizing, externally defined height and width styling will be ignored.`,default:"false",privacy:"public",_ui5since:"1.0.0-rc.10",_ui5validator:"Boolean"},{kind:"field",name:"state",type:{text:"ValueState",references:[{name:"ValueState",package:"@ui5/webcomponents-base",module:"dist/types/ValueState.js"}]},description:`Defines the state of the <code>Dialog</code>.
<br><b>Note:</b> If <code>"Error"</code> and <code>"Warning"</code> state is set, it will change the
accessibility role to "alertdialog", if the accessibleRole property is set to <code>"Dialog"</code>.`,default:'"None"',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"ValueState"},{kind:"method",name:"show",return:{type:{text:"Promise<void>"},description:"Resolves when the dialog is open"},parameters:[{name:"preventInitialFocus",default:"false",description:"Prevents applying the focus inside the popup",optional:!0,_ui5privacy:"public",type:{text:"boolean"}}],description:"Shows the dialog.",privacy:"public"},{kind:"field",name:"initialFocus",type:{text:"string"},description:"Defines the ID of the HTML Element, which will get the initial focus.",default:'""',privacy:"public",_ui5validator:"String",inheritedFrom:{name:"Popup",module:"dist/Popup.js"}},{kind:"field",name:"preventFocusRestore",type:{text:"boolean"},description:`Defines if the focus should be returned to the previously focused element,
when the popup closes.`,default:"false",privacy:"public",_ui5since:"1.0.0-rc.8",_ui5validator:"Boolean",inheritedFrom:{name:"Popup",module:"dist/Popup.js"}},{kind:"field",name:"open",type:{text:"boolean"},description:"Indicates if the element is open",privacy:"public",default:"false",_ui5since:"1.2.0",_ui5validator:"Boolean",inheritedFrom:{name:"Popup",module:"dist/Popup.js"}},{kind:"field",name:"accessibleName",type:{text:"string | undefined"},description:"Defines the accessible name of the component.",default:"undefined",privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"String",inheritedFrom:{name:"Popup",module:"dist/Popup.js"}},{kind:"field",name:"accessibleNameRef",type:{text:"string"},description:"Defines the IDs of the elements that label the component.",default:'""',privacy:"public",_ui5since:"1.1.0",_ui5validator:"String",inheritedFrom:{name:"Popup",module:"dist/Popup.js"}},{kind:"field",name:"accessibleRole",type:{text:"PopupAccessibleRole",references:[{name:"PopupAccessibleRole",package:"@ui5/webcomponents",module:"dist/types/PopupAccessibleRole.js"}]},description:"Allows setting a custom role.",default:'"Dialog"',privacy:"public",_ui5since:"1.10.0",_ui5validator:"PopupAccessibleRole",inheritedFrom:{name:"Popup",module:"dist/Popup.js"}},{kind:"method",name:"applyFocus",return:{type:{text:"Promise<void>"},description:"Promise that resolves when the focus is applied"},description:`Focuses the element denoted by <code>initialFocus</code>, if provided,
or the first focusable element otherwise.`,privacy:"public",inheritedFrom:{name:"Popup",module:"dist/Popup.js"}},{kind:"method",name:"isOpen",return:{type:{text:"boolean"}},description:"Tells if the component is opened",privacy:"public",inheritedFrom:{name:"Popup",module:"dist/Popup.js"}},{kind:"method",name:"close",return:{type:{text:"void"}},description:"Closes the popup.",privacy:"public",inheritedFrom:{name:"Popup",module:"dist/Popup.js"}}],superclass:{name:"Popup",package:"@ui5/webcomponents",module:"dist/Popup.js"},tagName:"ui5-dialog",customElement:!0,_ui5privacy:"public",events:[{name:"before-open",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening. <b>This event does not bubble.</b>",_ui5allowPreventDefault:!0,inheritedFrom:{name:"Popup",module:"dist/Popup.js"}},{name:"after-open",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired after the component is opened. <b>This event does not bubble.</b>",inheritedFrom:{name:"Popup",module:"dist/Popup.js"}},{name:"before-close",_ui5privacy:"public",type:{text:"CustomEvent<PopupBeforeCloseEventDetail>",references:[{name:"PopupBeforeCloseEventDetail",package:"@ui5/webcomponents",module:"dist/Popup.js"}]},description:"Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. <b>This event does not bubble.</b>",_ui5allowPreventDefault:!0,_ui5parameters:[{type:{text:"boolean"},name:"escPressed",_ui5privacy:"public",description:"Indicates that <code>ESC</code> key has triggered the event."}],inheritedFrom:{name:"Popup",module:"dist/Popup.js"}},{name:"after-close",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired after the component is closed. <b>This event does not bubble.</b>",inheritedFrom:{name:"Popup",module:"dist/Popup.js"}}]}],exports:[{kind:"js",name:"default",declaration:{name:"Dialog",module:"dist/Dialog.js"}},{kind:"custom-element-definition",name:"ui5-dialog",declaration:{name:"Dialog",module:"dist/Dialog.js"}}]},{kind:"javascript-module",path:"dist/FileUploader.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-file-uploader</code> opens a file explorer dialog and enables users to upload files.
The component consists of input field, but you can provide an HTML element by your choice
to trigger the file upload, by using the default slot.
Furthermore, you can set the property "hideInput" to "true" to hide the input field.
<br>
To get all selected files, you can simply use the read-only "files" property.
To restrict the types of files the user can select, you can use the "accept" property.
<br>
And, similar to all input based components, the FileUploader supports "valueState", "placeholder", "name", and "disabled" properties.

For the <code>ui5-file-uploader</code>
<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/FileUploader.js";</code>`,name:"FileUploader",slots:[{name:"default",description:`By default the component contains a single input field. With this slot you can pass any content that you wish to add. See the samples for more information. <br>
<b>Note:</b> If no content is provided in this slot, the component will only consist of an input field and will not be interactable using the keyboard.<br>
Also it is not recommended to use any non-interactable components, as it may lead to poor accessibility experience.`,_ui5propertyName:"content",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"},{name:"valueStateMessage",description:`Defines the value state message that will be displayed as pop up under the component.
<br><br>

<b>Note:</b> If not specified, a default text (in the respective language) will be displayed.
<br>
<b>Note:</b> The <code>valueStateMessage</code> would be displayed,
when the component is in <code>Information</code>, <code>Warning</code> or <code>Error</code> value state.`,_ui5since:"1.0.0-rc.9",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"}],members:[{kind:"field",name:"accept",type:{text:"string"},description:`Comma-separated list of file types that the component should accept.
<br><br>
<b>Note:</b> Please make sure you are adding the <code>.</code> in front on the file type, e.g. <code>.png</code> in case you want to accept png's only.`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"hideInput",type:{text:"boolean"},description:'If set to "true", the input field of component will not be rendered. Only the default slot that is passed will be rendered.',default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"disabled",type:{text:"boolean"},description:`Defines whether the component is in disabled state.
<br><br>
<b>Note:</b> A disabled component is completely noninteractive.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"multiple",type:{text:"boolean"},description:"Allows multiple files to be chosen.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"name",type:{text:"string"},description:`Determines the name with which the component will be submitted in an HTML form.

<br><br>
<b>Important:</b> For the <code>name</code> property to have effect, you must add the following import to your project:
<code>import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";</code>

<br><br>
<b>Note:</b> When set, a native <code>input</code> HTML element
will be created inside the component so that it can be submitted as
part of an HTML form. Do not use this property unless you need to submit a form.`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"placeholder",type:{text:"string"},description:"Defines a short hint intended to aid the user with data entry when the component has no value.",default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"value",type:{text:"string"},description:"Defines the name/names of the file/files to upload.",default:'""',privacy:"public",_ui5validator:"String",_ui5formProperty:!0,_ui5formEvents:"change"},{kind:"field",name:"valueState",type:{text:"ValueState",references:[{name:"ValueState",package:"@ui5/webcomponents-base",module:"dist/types/ValueState.js"}]},description:"Defines the value state of the component.",default:'"None"',privacy:"public",_ui5validator:"ValueState"},{kind:"field",name:"files",type:{text:"FileList | null"},description:"FileList of all selected files.",privacy:"public",default:"null",readonly:!0}],events:[{name:"change",_ui5privacy:"public",type:{text:"CustomEvent<FileUploaderChangeEventDetail>",references:[{name:"FileUploaderChangeEventDetail",package:"@ui5/webcomponents",module:"dist/FileUploader.js"}]},description:`Event is fired when the value of the file path has been changed.
<b>Note:</b> Keep in mind that because of the HTML input element of type file, the event is also fired in Chrome browser when the Cancel button of the uploads window is pressed.`,_ui5parameters:[{type:{text:"FileList | null"},name:"files",_ui5privacy:"public",description:"The current files."}]}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-file-uploader",customElement:!0,_ui5since:"1.0.0-rc.6",_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"FileUploader",module:"dist/FileUploader.js"}},{kind:"custom-element-definition",name:"ui5-file-uploader",declaration:{name:"FileUploader",module:"dist/FileUploader.js"}}]},{kind:"javascript-module",path:"dist/Filters.js",declarations:[],exports:[]},{kind:"javascript-module",path:"dist/GroupHeaderListItem.js",declarations:[{kind:"class",description:"The <code>ui5-li-groupheader</code> is a special list item, used only to separate other list items into logical groups.",name:"GroupHeaderListItem",slots:[{description:`Defines the text of the component.
<br>
<b>Note:</b> Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"default",_ui5privacy:"public",_ui5type:{text:"Array<Node>"}}],members:[{kind:"field",name:"accessibleName",type:{text:"string"},description:`Defines the text alternative of the component.
Note: If not provided a default text alternative will be set, if present.`,default:'""',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"String"},{kind:"field",name:"selected",type:{text:"boolean"},description:"Defines the selected state of the <code>ListItem</code>.",default:"false",privacy:"public",_ui5validator:"Boolean",inheritedFrom:{name:"ListItemBase",module:"dist/ListItemBase.js"}}],superclass:{name:"ListItemBase",package:"@ui5/webcomponents",module:"dist/ListItemBase.js"},tagName:"ui5-li-groupheader",customElement:!0,_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"GroupHeaderListItem",module:"dist/GroupHeaderListItem.js"}},{kind:"custom-element-definition",name:"ui5-li-groupheader",declaration:{name:"GroupHeaderListItem",module:"dist/GroupHeaderListItem.js"}}]},{kind:"javascript-module",path:"dist/Icon.js",declarations:[{kind:"interface",name:"IIcon",description:"Interface for components that represent an icon, usable in numerous higher-order components",_ui5privacy:"public"},{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-icon</code> component represents an SVG icon.
There are two main scenarios how the <code>ui5-icon</code> component is used:
as a purely decorative element, <br>
or as an interactive element that can be focused and clicked.

<h3>Usage</h3>

1. <b>Get familiar with the icons collections.</b>
<br>
Before displaying an icon, you need to explore the icons collections to find and import the desired icon.
<br>
Currently there are 3 icons collection, available as 3 npm packages:
<br>

<ul>
<li>
<ui5-link target="_blank" href="https://www.npmjs.com/package/@ui5/webcomponents-icons">@ui5/webcomponents-icons</ui5-link> represents the "SAP-icons" collection and includes the following
<ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/SAP-icons">icons</ui5-link>.
</li>
<li>
<ui5-link target="_blank" href="https://www.npmjs.com/package/@ui5/webcomponents-icons-tnt">@ui5/webcomponents-icons-tnt</ui5-link> represents the "tnt" collection and includes the following
<ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/SAP-icons-TNT">icons</ui5-link>.
</li>
<li>
<ui5-link target="_blank" href="https://www.npmjs.com/package/@ui5/webcomponents-icons-business-suite">@ui5/webcomponents-icons-icons-business-suite</ui5-link> represents the "business-suite" collection and includes the following
<ui5-link target="_blank" href="https://ui5.sap.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/BusinessSuiteInAppSymbols">icons</ui5-link>.
</li>
</ul>

2. <b>After exploring the icons collections, add one or more of the packages as dependencies to your project.</b>
<br>
<code>npm i @ui5/webcomponents-icons</code><br>
<code>npm i @ui5/webcomponents-icons-tnt</code><br>
<code>npm i @ui5/webcomponents-icons-business-suite</code>
<br><br>

3. <b>Then, import the desired icon</b>.
<br>
<code>import "@ui5/{package_name}/dist/{icon_name}.js";</code>
<br><br>

<b>For Example</b>:
<br>

For the standard "SAP-icons" icon collection, import an icon from the <code>@ui5/webcomponents-icons</code> package:
<br>
<code>import "@ui5/webcomponents-icons/dist/employee.js";</code>
<br><br>

For the "tnt" (SAP Fiori Tools) icon collection, import an icon from the <code>@ui5/webcomponents-icons-tnt</code> package:
<br>
<code>import "@ui5/webcomponents-icons-tnt/dist/antenna.js";</code>
<br><br>

For the "business-suite" (SAP Business Suite) icon collection, import an icon from the <code>@ui5/webcomponents-icons-business-suite</code> package:
<br>
<code>import "@ui5/webcomponents-icons-business-suite/dist/ab-testing.js";</code>
<br><br>

4. <b>Display the icon using the <code>ui5-icon</code> web component.</b><br>
Set the icon collection ("SAP-icons", "tnt" or "business-suite" - "SAP-icons" is the default icon collection and can be skipped)<br>
and the icon name to the <code>name</code> property.
<br><br>

<code>&lt;ui5-icon name="employee">&lt;/ui5-icon></code><br>
<code>&lt;ui5-icon name="tnt/antenna">&lt;/ui5-icon></code><br>
<code>&lt;ui5-icon name="business-suite/ab-testing">&lt;/ui5-icon></code>

<br><br>
<h3>Keyboard Handling</h3>

<ul>
<li>[SPACE, ENTER, RETURN] - Fires the <code>click</code> event if the <code>interactive</code> property is set to true.</li>
<li>[SHIFT] - If [SPACE] or [ENTER],[RETURN] is pressed, pressing [SHIFT] releases the ui5-icon without triggering the click event.</li>
</ul>

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/Icon.js";</code>`,name:"Icon",cssParts:[{description:"Used to style the outermost wrapper of the <code>ui5-icon</code>.",name:"root"}],members:[{kind:"field",name:"design",type:{text:"IconDesign",references:[{name:"IconDesign",package:"@ui5/webcomponents",module:"dist/types/IconDesign.js"}]},description:"Defines the component semantic design.",default:'"Default"',privacy:"public",_ui5since:"1.9.2",_ui5validator:"IconDesign"},{kind:"field",name:"interactive",type:{text:"boolean"},description:"Defines if the icon is interactive (focusable and pressable)",default:"false",privacy:"public",_ui5since:"1.0.0-rc.8",_ui5validator:"Boolean"},{kind:"field",name:"name",type:{text:"string"},description:`Defines the unique identifier (icon name) of the component.
<br>

To browse all available icons, see the
<ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">SAP Icons</ui5-link>,
<ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/SAP-icons-TNT">SAP Fiori Tools</ui5-link> and
<ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">SAP Business Suite</ui5-link> collections.
<br>

Example:
<br>
<code>name='add'</code>, <code>name='delete'</code>, <code>name='employee'</code>.
<br><br>

<b>Note:</b> To use the SAP Fiori Tools icons,
you need to set the <code>tnt</code> prefix in front of the icon's name.
<br>

Example:
<br>
<code>name='tnt/antenna'</code>, <code>name='tnt/actor'</code>, <code>name='tnt/api'</code>.
<br><br>

<b>Note:</b> To use the SAP Business Suite icons,
you need to set the <code>business-suite</code> prefix in front of the icon's name.
<br>

Example:
<br>
<code>name='business-suite/3d'</code>, <code>name='business-suite/1x2-grid-layout'</code>, <code>name='business-suite/4x4-grid-layout'</code>.`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"accessibleName",type:{text:"string"},description:`Defines the text alternative of the component.
If not provided a default text alternative will be set, if present.
<br><br>
<b>Note:</b> Every icon should have a text alternative in order to
calculate its accessible name.`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"showTooltip",type:{text:"boolean"},description:`Defines whether the component should have a tooltip.
<br><br>
<b>Note:</b> The tooltip text should be provided via the <code>accessible-name</code> property.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"accessibleRole",type:{text:"string"},description:"Defines the accessibility role of the component.",default:'""',privacy:"public",_ui5since:"1.1.0",_ui5validator:"String"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-icon",customElement:!0,_ui5privacy:"public",_ui5implements:[{name:"IIcon",package:"@ui5/webcomponents",module:"dist/Icon.js"}]}],exports:[{kind:"js",name:"default",declaration:{name:"Icon",module:"dist/Icon.js"}},{kind:"custom-element-definition",name:"ui5-icon",declaration:{name:"Icon",module:"dist/Icon.js"}}]},{kind:"javascript-module",path:"dist/Input.js",declarations:[{kind:"interface",name:"IInputSuggestionItem",description:"Interface for components that represent a suggestion item, usable in <code>ui5-input</code>",_ui5privacy:"public"},{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-input</code> component allows the user to enter and edit text or numeric values in one line.
<br>
Additionally, you can provide <code>suggestionItems</code>,
that are displayed in a popover right under the input.
<br><br>
The text field can be editable or read-only (<code>readonly</code> property),
and it can be enabled or disabled (<code>disabled</code> property).
To visualize semantic states, such as "error" or "warning", the <code>valueState</code> property is provided.
When the user makes changes to the text, the change event is fired,
which enables you to react on any text change.
<br><br>
<b>Note:</b> If you are using the <code>ui5-input</code> as a single npm module,
don't forget to import the <code>InputSuggestions</code> module from
"@ui5/webcomponents/dist/features/InputSuggestions.js"
to enable the suggestions functionality.

<h3>Keyboard Handling</h3>
The <code>ui5-input</code> provides the following keyboard shortcuts:
<br>

<ul>
<li>[ESC] - Closes the suggestion list, if open. If closed or not enabled, cancels changes and reverts to the value which the Input field had when it got the focus.</li>
<li>[ENTER] or [RETURN] - If suggestion list is open takes over the current matching item and closes it. If value state or group header is focused, does nothing.</li>
<li>[DOWN] - Focuses the next matching item in the suggestion list.</li>
<li>[UP] - Focuses the previous matching item in the suggestion list.</li>
<li>[HOME] - If focus is in the text input, moves caret before the first character. If focus is in the list, highlights the first item and updates the input accordingly.</li>
<li>[END] - If focus is in the text input, moves caret after the last character. If focus is in the list, highlights the last item and updates the input accordingly.</li>
<li>[PAGEUP] - If focus is in the list, moves highlight up by page size (10 items by default). If focus is in the input, does nothing.</li>
<li>[PAGEDOWN] - If focus is in the list, moves highlight down by page size (10 items by default). If focus is in the input, does nothing.</li>
</ul>

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/Input.js";</code>
<br>
<code>import "@ui5/webcomponents/dist/features/InputSuggestions.js";</code> (optional - for input suggestions support)`,name:"Input",slots:[{name:"default",description:`Defines the suggestion items.
<br><br>
Example:
<br><br>
&lt;ui5-input show-suggestions><br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ui5-suggestion-item text="Item #1">&lt;/ui5-suggestion-item><br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ui5-suggestion-item text="Item #2">&lt;/ui5-suggestion-item><br>
&lt;/ui5-input>
<br>
<ui5-input show-suggestions>
<ui5-suggestion-group-item text="Group #1"></ui5-suggestion-group-item>
<ui5-suggestion-item text="Item #1"></ui5-suggestion-item>
<ui5-suggestion-item text="Item #2"></ui5-suggestion-item>
<ui5-suggestion-group-item text="Group #2"></ui5-suggestion-group-item>
<ui5-suggestion-item text="Item #3"></ui5-suggestion-item>
<ui5-suggestion-item text="Item #4"></ui5-suggestion-item>
</ui5-input>
<br><br>
<b>Note:</b> The suggestions would be displayed only if the <code>showSuggestions</code>
property is set to <code>true</code>.
<br><br>
<b>Note:</b> The <code>&lt;ui5-suggestion-item&gt;</code> and <code>&lt;ui5-suggestion-group-item&gt;</code> are recommended to be used as suggestion items.
<br><br>
<b>Note:</b> Importing the Input Suggestions Support feature:
<br>
<code>import "@ui5/webcomponents/dist/features/InputSuggestions.js";</code>
<br>
automatically imports the <code>&lt;ui5-suggestion-item></code> and <code>&lt;ui5-suggestion-group-item></code> for your convenience.`,_ui5propertyName:"suggestionItems",_ui5type:{text:"Array<IInputSuggestionItem>",references:[{name:"IInputSuggestionItem",package:"@ui5/webcomponents",module:"dist/Input.js"}]},_ui5privacy:"public"},{name:"icon",description:"Defines the icon to be displayed in the component.",_ui5type:{text:"Array<IIcon>",references:[{name:"IIcon",package:"@ui5/webcomponents",module:"dist/Icon.js"}]},_ui5privacy:"public"},{name:"valueStateMessage",description:`Defines the value state message that will be displayed as pop up under the component.
<br><br>

<b>Note:</b> If not specified, a default text (in the respective language) will be displayed.
<br><br>
<b>Note:</b> The <code>valueStateMessage</code> would be displayed,
when the component is in <code>Information</code>, <code>Warning</code> or <code>Error</code> value state.
<br><br>
<b>Note:</b> If the component has <code>suggestionItems</code>,
the <code>valueStateMessage</code> would be displayed as part of the same popover, if used on desktop, or dialog - on phone.`,_ui5since:"1.0.0-rc.6",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"}],members:[{kind:"field",name:"disabled",type:{text:"boolean"},description:`Defines whether the component is in disabled state.
<br><br>
<b>Note:</b> A disabled component is completely noninteractive.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"placeholder",type:{text:"string"},description:`Defines a short hint intended to aid the user with data entry when the
component has no value.`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"readonly",type:{text:"boolean"},description:`Defines whether the component is read-only.
<br><br>
<b>Note:</b> A read-only component is not editable,
but still provides visual feedback upon user interaction.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"required",type:{text:"boolean"},description:"Defines whether the component is required.",default:"false",privacy:"public",_ui5since:"1.0.0-rc.3",_ui5validator:"Boolean"},{kind:"field",name:"noTypeahead",type:{text:"boolean"},description:"Defines whether the value will be autcompleted to match an item",default:"false",privacy:"public",_ui5since:"1.4.0",_ui5validator:"Boolean"},{kind:"field",name:"type",type:{text:"InputType",references:[{name:"InputType",package:"@ui5/webcomponents",module:"dist/types/InputType.js"}]},description:`Defines the HTML type of the component.
<br><br>
<b>Notes:</b>
<ul>
<li>The particular effect of this property differs depending on the browser
and the current language settings, especially for type <code>Number</code>.</li>
<li>The property is mostly intended to be used with touch devices
that use different soft keyboard layouts depending on the given input type.</li>
</ul>`,default:'"Text"',privacy:"public",_ui5validator:"InputType"},{kind:"field",name:"value",type:{text:"string"},description:`Defines the value of the component.
<br><br>
<b>Note:</b> The property is updated upon typing.`,default:'""',privacy:"public",_ui5validator:"String",_ui5formProperty:!0,_ui5formEvents:"change,input"},{kind:"field",name:"valueState",type:{text:"ValueState",references:[{name:"ValueState",package:"@ui5/webcomponents-base",module:"dist/types/ValueState.js"}]},description:"Defines the value state of the component.",default:'"None"',privacy:"public",_ui5validator:"ValueState"},{kind:"field",name:"name",type:{text:"string"},description:`Determines the name with which the component will be submitted in an HTML form.

<br><br>
<b>Important:</b> For the <code>name</code> property to have effect, you must add the following import to your project:
<code>import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";</code>

<br><br>
<b>Note:</b> When set, a native <code>input</code> HTML element
will be created inside the component so that it can be submitted as
part of an HTML form. Do not use this property unless you need to submit a form.`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"showSuggestions",type:{text:"boolean"},description:`Defines whether the component should show suggestions, if such are present.
<br><br>
<b>Note:</b> You need to import the <code>InputSuggestions</code> module
from <code>"@ui5/webcomponents/dist/features/InputSuggestions.js"</code> to enable this functionality.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"maxlength",type:{text:"number | undefined"},description:`Sets the maximum number of characters available in the input field.
<br><br>
<b>Note:</b> This property is not compatible with the ui5-input type InputType.Number. If the ui5-input type is set to Number, the maxlength value is ignored.`,default:"undefined",privacy:"public",_ui5since:"1.0.0-rc.5",_ui5validator:"Integer"},{kind:"field",name:"accessibleName",type:{text:"string"},description:"Defines the accessible ARIA name of the component.",default:'""',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"String"},{kind:"field",name:"accessibleNameRef",type:{text:"string"},description:"Receives id(or many ids) of the elements that label the input.",default:'""',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"String"},{kind:"field",name:"showClearIcon",type:{text:"boolean"},description:"Defines whether the clear icon of the input will be shown.",default:"false",privacy:"public",_ui5since:"1.2.0",_ui5validator:"Boolean"},{kind:"method",name:"openPicker",return:{type:{text:"void"}},description:"Manually opens the suggestions popover, assuming suggestions are enabled. Items must be preloaded for it to open.",privacy:"public",_ui5since:"1.3.0"},{kind:"field",name:"previewItem",type:{text:"IInputSuggestionItem | null",references:[{name:"IInputSuggestionItem",package:"@ui5/webcomponents",module:"dist/Input.js"}]},description:"The suggestion item on preview.",default:"null",privacy:"public",readonly:!0}],events:[{name:"change",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired when the input operation has finished by pressing Enter or on focusout."},{name:"input",_ui5privacy:"public",type:{text:"CustomEvent"},description:`Fired when the value of the component changes at each keystroke,
and when a suggestion item has been selected.`},{name:"suggestion-item-select",_ui5privacy:"public",type:{text:"CustomEvent<InputSuggestionItemSelectEventDetail>",references:[{name:"InputSuggestionItemSelectEventDetail",package:"@ui5/webcomponents",module:"dist/Input.js"}]},description:"Fired when a suggestion item, that is displayed in the suggestion popup, is selected.",_ui5allowPreventDefault:!0,_ui5parameters:[{type:{text:"HTMLElement"},name:"item",_ui5privacy:"public",description:"The selected item."}]},{name:"suggestion-item-preview",_ui5privacy:"public",type:{text:"CustomEvent<InputSuggestionItemPreviewEventDetail>",references:[{name:"InputSuggestionItemPreviewEventDetail",package:"@ui5/webcomponents",module:"dist/Input.js"}]},description:`Fired when the user navigates to a suggestion item via the ARROW keys,
as a preview, before the final selection.`,_ui5since:"1.0.0-rc.8",_ui5parameters:[{type:{text:"HTMLElement"},name:"item",_ui5privacy:"public",description:"The previewed suggestion item."},{type:{text:"HTMLElement"},name:"targetRef",_ui5privacy:"public",description:"The DOM ref of the suggestion item."}]}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-input",customElement:!0,_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"Input",module:"dist/Input.js"}},{kind:"custom-element-definition",name:"ui5-input",declaration:{name:"Input",module:"dist/Input.js"}}]},{kind:"javascript-module",path:"dist/Label.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-label</code> is a component used to represent a label for elements like input, textarea, select. <br><br>
The <code>for</code> property of the <code>ui5-label</code> must be the same as the id attribute of the related input element.<br><br>
Screen readers read out the label, when the user focuses the labelled control.
<br><br>
The <code>ui5-label</code> appearance can be influenced by properties,
such as <code>required</code> and <code>wrappingType</code>.
The appearance of the Label can be configured in a limited way by using the design property.
For a broader choice of designs, you can use custom styles.

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/Label";</code>`,name:"Label",slots:[{description:`Defines the text of the component.
<br>
<b>Note:</b> Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"default",_ui5privacy:"public",_ui5type:{text:"Array<Node>"}}],members:[{kind:"field",name:"for",type:{text:"string"},description:`Defines the labeled input by providing its ID.
<br><br>
<b>Note:</b> Can be used with both <code>ui5-input</code> and native input.`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"showColon",type:{text:"boolean"},description:`Defines whether colon is added to the component text.
<br><br>
<b>Note:</b> Usually used in forms.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"required",type:{text:"boolean"},description:`Defines whether an asterisk character is added to the component text.
<br><br>
<b>Note:</b> Usually indicates that user input (bound with the <code>for</code> property) is required.
In that case the <code>required</> property of
the corresponding input should also be set.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"wrappingType",type:{text:"WrappingType",references:[{name:"WrappingType",package:"@ui5/webcomponents",module:"dist/types/WrappingType.js"}]},description:`Defines how the text of a component will be displayed when there is not enough space.
<br><b>Note:</b> for option "Normal" the text will wrap and the words will not be broken based on hyphenation.`,default:'"None"',privacy:"public",_ui5validator:"WrappingType"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-label",customElement:!0,_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"Label",module:"dist/Label.js"}},{kind:"custom-element-definition",name:"ui5-label",declaration:{name:"Label",module:"dist/Label.js"}}]},{kind:"javascript-module",path:"dist/Link.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>
The <code>ui5-link</code> is a hyperlink component that is used to navigate to other
apps and web pages, or to trigger actions.
It is a clickable text element, visualized in such a way that it stands out
from the standard text.
On hover, it changes its style to an underlined text to provide additional feedback to the user.


<h3>Usage</h3>

You can set the <code>ui5-link</code> to be enabled or disabled.
<br><br>
To create a visual hierarchy in large lists of links, you can set the less important links as
<code>Subtle</code> or the more important ones as <code>Emphasized</code>,
by using the <code>design</code> property.
<br><br>
If the <code>href</code> property is set, the link behaves as the HTML
anchor tag (<code>&lt;a&gt;&lt;a&#47;&gt;</code>) and opens the specified URL in the given target frame (<code>target</code> property).
To specify where the linked content is opened, you can use the <code>target</code> property.

<h3>Responsive behavior</h3>

If there is not enough space, the text of the <code>ui5-link</code> becomes truncated.
If the <code>wrappingType</code> property is set to <code>"Normal"</code>, the text is displayed
on several lines instead of being truncated.

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/Link";</code>`,name:"Link",slots:[{description:"Defines the text of the component. <br><b>Note:</b> Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.",name:"default",_ui5privacy:"public",_ui5type:{text:"Array<Node>"}}],members:[{kind:"field",name:"disabled",type:{text:"boolean"},description:`Defines whether the component is disabled.
<br><br>
<b>Note:</b> When disabled, the click event cannot be triggered by the user.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"href",type:{text:"string"},description:`Defines the component href.
<br><br>
<b>Note:</b> Standard hyperlink behavior is supported.`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"target",type:{text:"string"},description:`Defines the component target.
<br><br>
<b>Notes:</b>

<ul>
<li><code>_self</code></li>
<li><code>_top</code></li>
<li><code>_blank</code></li>
<li><code>_parent</code></li>
<li><code>_search</code></li>
</ul>

<b>This property must only be used when the <code>href</code> property is set.</b>`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"design",type:{text:"LinkDesign",references:[{name:"LinkDesign",package:"@ui5/webcomponents",module:"dist/types/LinkDesign.js"}]},description:`Defines the component design.
<br><br>
<b>Note:</b> Avaialble options are <code>Default</code>, <code>Subtle</code>, and <code>Emphasized</code>.`,default:'"Default"',privacy:"public",_ui5validator:"LinkDesign"},{kind:"field",name:"wrappingType",type:{text:"WrappingType",references:[{name:"WrappingType",package:"@ui5/webcomponents",module:"dist/types/WrappingType.js"}]},description:`Defines how the text of a component will be displayed when there is not enough space.
<br><b>Note:</b> for option "Normal" the text will wrap and the words will not be broken based on hyphenation.`,default:'"None"',privacy:"public",_ui5validator:"WrappingType"},{kind:"field",name:"accessibleName",type:{text:"string"},description:"Defines the accessible ARIA name of the component.",default:'""',privacy:"public",_ui5since:"1.2.0",_ui5validator:"String"},{kind:"field",name:"accessibleNameRef",type:{text:"string"},description:"Receives id(or many ids) of the elements that label the input",default:'""',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"String"},{kind:"field",name:"accessibleRole",type:{text:"string"},description:`Defines the ARIA role of the component.

<b>Note:</b> Use the "button" role in cases when navigation is not expected to occur and the href property is not defined.`,default:'"link"',privacy:"public",_ui5since:"1.9.0",_ui5validator:"String"},{kind:"field",name:"accessibilityAttributes",type:{text:"AccessibilityAttributes",references:[{name:"AccessibilityAttributes",package:"@ui5/webcomponents",module:"dist/Link.js"}]},description:`An object of strings that defines several additional accessibility attribute values
for customization depending on the use case.

It supports the following fields:

<ul>
		<li><code>expanded</code>: Indicates whether the anchor element, or another grouping element it controls, is currently expanded or collapsed. Accepts the following string values:
		<ul>
			<li><code>true</code></li>
			<li><code>false</code></li>
		</ul>
		</li>
		<li><code>hasPopup</code>: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the anchor element. Accepts the following string values:
			<ul>
			<li><code>Dialog</code></li>
			<li><code>Grid</code></li>
			<li><code>Listbox</code></li>
			<li><code>Menu</code></li>
			<li><code>Tree</code></li>
			</ul>
		</li>
</ul>`,privacy:"public",default:"{}",_ui5since:"1.1.0",_ui5validator:"Object"}],events:[{name:"click",_ui5privacy:"public",type:{text:"CustomEvent<LinkClickEventDetail>",references:[{name:"LinkClickEventDetail",package:"@ui5/webcomponents",module:"dist/Link.js"}]},description:`Fired when the component is triggered either with a mouse/tap
or by using the Enter key.`,_ui5allowPreventDefault:!0,_ui5parameters:[{type:{text:"boolean"},name:"altKey",_ui5privacy:"public",description:'Returns whether the "ALT" key was pressed when the event was triggered.'},{type:{text:"boolean"},name:"ctrlKey",_ui5privacy:"public",description:'Returns whether the "CTRL" key was pressed when the event was triggered.'},{type:{text:"boolean"},name:"metaKey",_ui5privacy:"public",description:'Returns whether the "META" key was pressed when the event was triggered.'},{type:{text:"boolean"},name:"shiftKey",_ui5privacy:"public",description:'Returns whether the "SHIFT" key was pressed when the event was triggered.'}]}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-link",customElement:!0,_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"Link",module:"dist/Link.js"}},{kind:"custom-element-definition",name:"ui5-link",declaration:{name:"Link",module:"dist/Link.js"}}]},{kind:"javascript-module",path:"dist/List.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-list</code> component allows displaying a list of items, advanced keyboard
handling support for navigating between items, and predefined modes to improve the development efficiency.
<br><br>
The <code>ui5-list</code> is a container for the available list items:
<ul>
<li><code>ui5-li</code></li>
<li><code>ui5-li-custom</code></li>
<li><code>ui5-li-groupheader</code></li>
</ul>
<br><br>
To benefit from the built-in selection mechanism, you can use the available
selection modes, such as
<code>SingleSelect</code>, <code>MultiSelect</code> and <code>Delete</code>.
<br><br>
Additionally, the <code>ui5-list</code> provides header, footer, and customization for the list item separators.

<br><br>
<h3>Keyboard Handling</h3>

<h4>Basic Navigation</h4>
The <code>ui5-list</code> provides advanced keyboard handling.
When a list is focused the user can use the following keyboard
shortcuts in order to perform a navigation:
<br>

<ul>
<li>[UP/DOWN] - Navigates up and down the items</li>
<li>[HOME] - Navigates to first item</li>
<li>[END] - Navigates to the last item</li>
</ul>

The user can use the following keyboard shortcuts to perform actions (such as select, delete),
when the <code>mode</code> property is in use:
<ul>
<li>[SPACE] - Select an item (if <code>type</code> is 'Active') when <code>mode</code> is selection</li>
<li>[DELETE] - Delete an item if <code>mode</code> property is <code>Delete</code></li>
</ul>

<h4>Fast Navigation</h4>
This component provides a build in fast navigation group which can be used via <code>F6 / Shift + F6</code> or <code> Ctrl + Alt(Option) + Down /  Ctrl + Alt(Option) + Up</code>.
In order to use this functionality, you need to import the following module:
<code>import "@ui5/webcomponents-base/dist/features/F6Navigation.js"</code>
<br><br>

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/List.js";</code>
<br>
<code>import "@ui5/webcomponents/dist/StandardListItem.js";</code> (for <code>ui5-li</code>)
<br>
<code>import "@ui5/webcomponents/dist/CustomListItem.js";</code> (for <code>ui5-li-custom</code>)
<br>
<code>import "@ui5/webcomponents/dist/GroupHeaderListItem.js";</code> (for <code>ui5-li-groupheader</code>)`,name:"List",slots:[{name:"default",description:`Defines the items of the component.
<br><br>
<b>Note:</b> Use <code>ui5-li</code>, <code>ui5-li-custom</code>, and <code>ui5-li-groupheader</code> for the intended design.`,_ui5propertyName:"items",_ui5type:{text:"Array<ListItemBase>",references:[{name:"ListItemBase",package:"@ui5/webcomponents",module:"dist/ListItemBase.js"}]},_ui5privacy:"public"},{name:"header",description:`Defines the component header.
<br><br>
<b>Note:</b> When <code>header</code> is set, the
<code>headerText</code> property is ignored.`,_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"}],members:[{kind:"field",name:"headerText",type:{text:"string"},description:`Defines the component header text.
<br><br>
<b>Note:</b> If <code>header</code> is set this property is ignored.`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"footerText",type:{text:"string"},description:"Defines the footer text.",default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"indent",type:{text:"boolean"},description:"Determines whether the component is indented.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"mode",type:{text:"ListMode",references:[{name:"ListMode",package:"@ui5/webcomponents",module:"dist/types/ListMode.js"}]},description:"Defines the mode of the component.",default:'"None"',privacy:"public",_ui5validator:"ListMode"},{kind:"field",name:"noDataText",type:{text:"string"},description:"Defines the text that is displayed when the component contains no items.",default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"separators",type:{text:"ListSeparators",references:[{name:"ListSeparators",package:"@ui5/webcomponents",module:"dist/types/ListSeparators.js"}]},description:"Defines the item separator style that is used.",default:'"All"',privacy:"public",_ui5validator:"ListSeparators"},{kind:"field",name:"growing",type:{text:"ListGrowingMode",references:[{name:"ListGrowingMode",package:"@ui5/webcomponents",module:"dist/types/ListGrowingMode.js"}]},description:`Defines whether the component will have growing capability either by pressing a <code>More</code> button,
or via user scroll. In both cases <code>load-more</code> event is fired.
<br><br>
<b>Restrictions:</b> <code>growing="Scroll"</code> is not supported for Internet Explorer,
on IE the component will fallback to <code>growing="Button"</code>.`,default:'"None"',privacy:"public",_ui5since:"1.0.0-rc.13",_ui5validator:"ListGrowingMode"},{kind:"field",name:"busy",type:{text:"boolean"},description:"Defines if the component would display a loading indicator over the list.",default:"false",privacy:"public",_ui5since:"1.0.0-rc.6",_ui5validator:"Boolean"},{kind:"field",name:"busyDelay",type:{text:"number"},description:"Defines the delay in milliseconds, after which the busy indicator will show up for this component.",default:"1000",privacy:"public",_ui5validator:"Integer"},{kind:"field",name:"accessibleName",type:{text:"string"},description:"Defines the accessible name of the component.",default:'""',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"String"},{kind:"field",name:"accessibleNameRef",type:{text:"string"},description:"Defines the IDs of the elements that label the input.",default:'""',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"String"},{kind:"field",name:"accessibleRole",type:{text:"string"},description:`Defines the accessible role of the component.
<br><br>`,privacy:"public",default:'"list"',_ui5since:"1.0.0-rc.15",_ui5validator:"String"}],events:[{name:"item-click",_ui5privacy:"public",type:{text:"CustomEvent<ListItemClickEventDetail>",references:[{name:"ListItemClickEventDetail",package:"@ui5/webcomponents",module:"dist/List.js"}]},description:`Fired when an item is activated, unless the item's <code>type</code> property
is set to <code>Inactive</code>.`,_ui5allowPreventDefault:!0,_ui5parameters:[{type:{text:"HTMLElement"},name:"item",_ui5privacy:"public",description:"The clicked item."}]},{name:"item-close",_ui5privacy:"public",type:{text:"CustomEvent<ListItemCloseEventDetail>",references:[{name:"ListItemCloseEventDetail",package:"@ui5/webcomponents",module:"dist/List.js"}]},description:`Fired when the <code>Close</code> button of any item is clicked
<br><br>
<b>Note:</b> This event is only applicable to list items that can be closed (such as notification list items),
not to be confused with <code>item-delete</code>.`,_ui5since:"1.0.0-rc.8",_ui5parameters:[{type:{text:"HTMLElement"},name:"item",_ui5privacy:"public",description:"the item about to be closed."}]},{name:"item-toggle",_ui5privacy:"public",type:{text:"CustomEvent<ListItemToggleEventDetail>",references:[{name:"ListItemToggleEventDetail",package:"@ui5/webcomponents",module:"dist/List.js"}]},description:`Fired when the <code>Toggle</code> button of any item is clicked.
<br><br>
<b>Note:</b> This event is only applicable to list items that can be toggled (such as notification group list items).`,_ui5since:"1.0.0-rc.8",_ui5parameters:[{type:{text:"HTMLElement"},name:"item",_ui5privacy:"public",description:"the toggled item."}]},{name:"item-delete",_ui5privacy:"public",type:{text:"CustomEvent<ListItemDeleteEventDetail>",references:[{name:"ListItemDeleteEventDetail",package:"@ui5/webcomponents",module:"dist/List.js"}]},description:`Fired when the Delete button of any item is pressed.
<br><br>
<b>Note:</b> A Delete button is displayed on each item,
when the component <code>mode</code> property is set to <code>Delete</code>.`,_ui5parameters:[{type:{text:"HTMLElement"},name:"item",_ui5privacy:"public",description:"the deleted item."}]},{name:"selection-change",_ui5privacy:"public",type:{text:"CustomEvent<ListSelectionChangeEventDetail>",references:[{name:"ListSelectionChangeEventDetail",package:"@ui5/webcomponents",module:"dist/List.js"}]},description:`Fired when selection is changed by user interaction
in <code>SingleSelect</code>, <code>SingleSelectBegin</code>, <code>SingleSelectEnd</code> and <code>MultiSelect</code> modes.`,_ui5allowPreventDefault:!0,_ui5parameters:[{type:{text:"Array<ListItemBase>",references:[{name:"ListItemBase",package:"@ui5/webcomponents",module:"dist/ListItemBase.js"}]},name:"selectedItems",_ui5privacy:"public",description:"An array of the selected items."},{type:{text:"Array<ListItemBase>",references:[{name:"ListItemBase",package:"@ui5/webcomponents",module:"dist/ListItemBase.js"}]},name:"previouslySelectedItems",_ui5privacy:"public",description:"An array of the previously selected items."}]},{name:"load-more",_ui5privacy:"public",type:{text:"CustomEvent"},description:`Fired when the user scrolls to the bottom of the list.
<br><br>
<b>Note:</b> The event is fired when the <code>growing='Scroll'</code> property is enabled.`,_ui5since:"1.0.0-rc.6"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-list",customElement:!0,_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"List",module:"dist/List.js"}},{kind:"custom-element-definition",name:"ui5-list",declaration:{name:"List",module:"dist/List.js"}}]},{kind:"javascript-module",path:"dist/ListItem.js",declarations:[{kind:"class",description:`A class to serve as a base
for the <code>StandardListItem</code> and <code>CustomListItem</code> classes.`,name:"ListItem",slots:[{name:"deleteButton",description:`Defines the delete button, displayed in "Delete" mode.
<b>Note:</b> While the slot allows custom buttons, to match
design guidelines, please use the <code>ui5-button</code> component.
<b>Note:</b> When the slot is not present, a built-in delete button will be displayed.`,_ui5since:"1.9.0",_ui5type:{text:"Array<IButton>",references:[{name:"IButton",package:"@ui5/webcomponents",module:"dist/Button.js"}]},_ui5privacy:"public"}],members:[{kind:"field",name:"type",type:{text:"ListItemType",references:[{name:"ListItemType",package:"@ui5/webcomponents",module:"dist/types/ListItemType.js"}]},description:`Defines the visual indication and behavior of the list items.
Available options are <code>Active</code> (by default), <code>Inactive</code>, <code>Detail</code> and <code>Navigation</code>.
<br><br>
<b>Note:</b> When set to <code>Active</code> or <code>Navigation</code>, the item will provide visual response upon press and hover,
while with type <code>Inactive</code> and <code>Detail</code> - will not.`,default:'"Active"',privacy:"public",_ui5validator:"ListItemType"},{kind:"field",name:"accessibilityAttributes",type:{text:"AccessibilityAttributes",references:[{name:"AccessibilityAttributes",package:"@ui5/webcomponents",module:"dist/ListItem.js"}]},description:`An object of strings that defines several additional accessibility attribute values
for customization depending on the use case.

 It supports the following fields:

<ul>
		<li><code>ariaSetsize</code>: Defines the number of items in the current set of listitems or treeitems when not all items in the set are present in the DOM.
		The value of each <code>aria-setsize</code> is an integer reflecting number of items in the complete set.
		<b>Note: </b> If the size of the entire set is unknown, set <code>aria-setsize="-1"</code>.
		</li>
		<li><code>ariaPosinset</code>: Defines an element's number or position in the current set of listitems or treeitems when not all items are present in the DOM.
		The value of each <code>aria-posinset</code> is an integer greater than or equal to 1, and less than or equal to the size of the set when that size is known.
		</li>
</ul>`,default:"{}",privacy:"public",_ui5since:"1.15.0",_ui5validator:"Object"},{kind:"field",name:"navigated",type:{text:"boolean"},description:`The navigated state of the list item.
If set to <code>true</code>, a navigation indicator is displayed at the end of the list item.`,default:"false",privacy:"public",_ui5since:"1.10.0",_ui5validator:"Boolean"},{kind:"field",name:"selected",type:{text:"boolean"},description:"Defines the selected state of the <code>ListItem</code>.",default:"false",privacy:"public",_ui5validator:"Boolean",inheritedFrom:{name:"ListItemBase",module:"dist/ListItemBase.js"}}],events:[{name:"detail-click",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired when the user clicks on the detail button when type is <code>Detail</code>."}],superclass:{name:"ListItemBase",package:"@ui5/webcomponents",module:"dist/ListItemBase.js"},customElement:!0,_ui5privacy:"public",_ui5abstract:!0}],exports:[{kind:"js",name:"default",declaration:{name:"ListItem",module:"dist/ListItem.js"}}]},{kind:"javascript-module",path:"dist/ListItemBase.js",declarations:[{kind:"class",description:`A class to serve as a foundation
for the <code>ListItem</code> and <code>GroupHeaderListItem</code> classes.`,name:"ListItemBase",members:[{kind:"field",name:"selected",type:{text:"boolean"},description:"Defines the selected state of the <code>ListItem</code>.",default:"false",privacy:"public",_ui5validator:"Boolean"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},customElement:!0,_ui5privacy:"public",_ui5abstract:!0}],exports:[{kind:"js",name:"default",declaration:{name:"ListItemBase",module:"dist/ListItemBase.js"}}]},{kind:"javascript-module",path:"dist/Menu.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

<code>ui5-menu</code> component represents a hierarchical menu structure.

<h3>Usage</h3>

<code>ui5-menu</code> contains <code>ui5-menu-item</code> components.
An arbitrary hierarchy structure can be represented by recursively nesting menu items.

<h3>Keyboard Handling</h3>

The <code>ui5-menu</code> provides advanced keyboard handling.
The user can use the following keyboard shortcuts in order to navigate trough the tree:
<ul>
<li><code>Arrow Up</code> / <code>Arrow Down</code> - Navigates up and down the menu items that are currently visible.</li>
<li><code>Arrow Right</code>, <code>Space</code> or <code>Enter</code> - Opens a sub-menu if there are menu items nested
in the currently clicked menu item.</li>
<li><code>Arrow Left</code> or <code>Escape</code> - Closes the currently opened sub-menu.</li>
</ul>
Note: if the text ditrection is set to Right-to-left (RTL), <code>Arrow Right</code> and <code>Arrow Left</code> functionality is swapped.
<br>

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/Menu.js";</code>`,name:"Menu",slots:[{name:"default",description:`Defines the items of this component.
<br><br>
<b>Note:</b> Use <code>ui5-menu-item</code> for the intended design.`,_ui5propertyName:"items",_ui5type:{text:"Array<MenuItem>",references:[{name:"MenuItem",package:"@ui5/webcomponents",module:"dist/MenuItem.js"}]},_ui5privacy:"public"}],members:[{kind:"field",name:"headerText",type:{text:"string"},description:"Defines the header text of the menu (displayed on mobile).",default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"open",type:{text:"boolean"},description:"Indicates if the menu is open",privacy:"public",default:"false",_ui5since:"1.10.0",_ui5validator:"Boolean"},{kind:"field",name:"busy",type:{text:"boolean"},description:"Defines if a loading indicator would be displayed inside the corresponding ui5-menu popover.",default:"false",privacy:"public",_ui5since:"1.13.0",_ui5validator:"Boolean"},{kind:"field",name:"busyDelay",type:{text:"number"},description:"Defines the delay in milliseconds, after which the busy indicator will be displayed inside the corresponding ui5-menu popover..",default:"1000",privacy:"public",_ui5since:"1.13.0",_ui5validator:"Integer"},{kind:"field",name:"opener",type:{text:"HTMLElement | string"},description:"Defines the ID or DOM Reference of the element that the menu is shown at",privacy:"public",default:'""',_ui5since:"1.10.0",_ui5validator:"DOMReference"},{kind:"method",name:"showAt",return:{type:{text:"Promise<void>"}},parameters:[{name:"opener",type:{text:"HTMLElement"},description:"the element that the popover is shown at",_ui5privacy:"public"}],description:"Shows the Menu near the opener element.",privacy:"public"},{kind:"method",name:"close",return:{type:{text:"void"}},description:"Closes the Menu.",privacy:"public"}],events:[{name:"item-click",_ui5privacy:"public",type:{text:"CustomEvent<MenuItemClickEventDetail>",references:[{name:"MenuItemClickEventDetail",package:"@ui5/webcomponents",module:"dist/Menu.js"}]},description:`Fired when an item is being clicked.
<br />
<b>Note:</b> Since 1.17.0 the event is preventable, allowing the menu to remain open after an item is pressed.`,_ui5allowPreventDefault:!0,_ui5parameters:[{type:{text:"HTMLElement"},name:"item",_ui5privacy:"public",description:"The currently clicked menu item."},{type:{text:"string"},name:"text",_ui5privacy:"public",description:"The text of the currently clicked menu item."}]},{name:"before-open",_ui5privacy:"public",type:{text:"CustomEvent<MenuBeforeOpenEventDetail>",references:[{name:"MenuBeforeOpenEventDetail",package:"@ui5/webcomponents",module:"dist/Menu.js"}]},description:`Fired before the menu is opened. This event can be cancelled, which will prevent the menu from opening. <b>This event does not bubble.</b>
<br />
<b>Note:</b> Since 1.14.0 the event is also fired before a sub-menu opens.`,_ui5allowPreventDefault:!0,_ui5since:"1.10.0",_ui5parameters:[{type:{text:"HTMLElement"},name:"item",_ui5privacy:"public",description:"The <code>ui5-menu-item</code> that triggers opening of the sub-menu or undefined when fired upon root menu opening. <b>Note:</b> available since 1.14.0."}]},{name:"after-open",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired after the menu is opened. <b>This event does not bubble.</b>",_ui5since:"1.10.0"},{name:"before-close",_ui5privacy:"public",type:{text:"CustomEvent<MenuBeforeCloseEventDetail>",references:[{name:"MenuBeforeCloseEventDetail",package:"@ui5/webcomponents",module:"dist/Menu.js"}]},description:"Fired before the menu is closed. This event can be cancelled, which will prevent the menu from closing. <b>This event does not bubble.</b>",_ui5allowPreventDefault:!0,_ui5since:"1.10.0",_ui5parameters:[{type:{text:"boolean"},name:"escPressed",_ui5privacy:"public",description:"Indicates that <code>ESC</code> key has triggered the event."}]},{name:"after-close",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired after the menu is closed. <b>This event does not bubble.</b>",_ui5since:"1.10.0"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-menu",customElement:!0,_ui5since:"1.3.0",_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"Menu",module:"dist/Menu.js"}},{kind:"custom-element-definition",name:"ui5-menu",declaration:{name:"Menu",module:"dist/Menu.js"}}]},{kind:"javascript-module",path:"dist/MenuItem.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

<code>ui5-menu-item</code> is the item to use inside a <code>ui5-menu</code>.
An arbitrary hierarchy structure can be represented by recursively nesting menu items.

<h3>Usage</h3>

<code>ui5-menu-item</code> is an abstract element, representing a node in a <code>ui5-menu</code>. The menu itself is rendered as a list,
and each <code>ui5-menu-item</code> is represented by a list item (<code>ui5-li</code>) in that list. Therefore, you should only use
<code>ui5-menu-item</code> directly in your apps. The <code>ui5-li</code> list item is internal for the list, and not intended for public use.

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/MenuItem.js";</code>`,name:"MenuItem",slots:[{name:"default",description:"Defines the items of this component.",_ui5propertyName:"items",_ui5type:{text:"Array<MenuItem>",references:[{name:"MenuItem",package:"@ui5/webcomponents",module:"dist/MenuItem.js"}]},_ui5privacy:"public"}],members:[{kind:"field",name:"text",type:{text:"string"},description:"Defines the text of the tree item.",default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"additionalText",type:{text:"string"},description:`Defines the <code>additionalText</code>, displayed in the end of the menu item.
<b>Note:</b> The additional text would not be displayed if the item has a submenu.`,default:'""',privacy:"public",_ui5since:"1.8.0",_ui5validator:"String"},{kind:"field",name:"icon",type:{text:"string"},description:`Defines the icon to be displayed as graphical element within the component.
The SAP-icons font provides numerous options.
<br><br>
<b>Example:</b>
<br />
See all the available icons in the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"startsSection",type:{text:"boolean"},description:"Defines whether a visual separator should be rendered before the item.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"disabled",type:{text:"boolean"},description:`Defines whether <code>ui5-menu-item</code> is in disabled state.
<br><br>
<b>Note:</b> A disabled <code>ui5-menu-item</code> is noninteractive.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"busy",type:{text:"boolean"},description:`Defines the delay in milliseconds, after which the busy indicator will be displayed inside the corresponding ui5-menu popover.

Note: If set to <code>true</code> a <code>ui5-busy-indicator</code> component will be displayed into the related one to the current <code>ui5-menu-item</code> sub-menu popover.`,default:"false",privacy:"public",_ui5since:"1.13.0",_ui5validator:"Boolean"},{kind:"field",name:"busyDelay",type:{text:"number"},description:"Defines the delay in milliseconds, after which the busy indicator will be displayed inside the corresponding ui5-menu popover.",default:"1000",privacy:"public",_ui5since:"1.13.0",_ui5validator:"Integer"},{kind:"field",name:"accessibleName",type:{text:"string"},description:"Defines the accessible ARIA name of the component.",default:'""',privacy:"public",_ui5since:"1.7.0",_ui5validator:"String"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-menu-item",customElement:!0,_ui5since:"1.3.0",_ui5privacy:"public",_ui5abstract:!0}],exports:[{kind:"js",name:"default",declaration:{name:"MenuItem",module:"dist/MenuItem.js"}},{kind:"custom-element-definition",name:"ui5-menu-item",declaration:{name:"MenuItem",module:"dist/MenuItem.js"}}]},{kind:"javascript-module",path:"dist/MessageStrip.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-message-strip</code> component enables the embedding of app-related messages.
It displays 4 designs of messages, each with corresponding semantic color and icon: Information, Positive, Warning and Negative.
Each message can have a Close button, so that it can be removed from the UI, if needed.

<h3>Usage</h3>

For the <code>ui5-message-strip</code> component, you can define whether it displays
an icon in the beginning and a close button. Moreover, its size and background
can be controlled with CSS.

<h3>Keyboard Handling</h3>

<h4>Fast Navigation</h4>
This component provides a build in fast navigation group which can be used via <code>F6 / Shift + F6</code> or <code> Ctrl + Alt(Option) + Down /  Ctrl + Alt(Option) + Up</code>.
In order to use this functionality, you need to import the following module:
<code>import "@ui5/webcomponents-base/dist/features/F6Navigation.js"</code>
<br><br>

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/MessageStrip";</code>`,name:"MessageStrip",slots:[{description:`Defines the text of the component.
<br><br>
<b>Note:</b> Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"default",_ui5privacy:"public",_ui5type:{text:"Array<Node>"}},{name:"icon",description:`Defines the content to be displayed as graphical element within the component.
<br><br>
<b>Note:</b> If no icon is given, the default icon for the component type will be used.
The SAP-icons font provides numerous options.
<br><br>

See all the available icons in the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.`,_ui5type:{text:"Array<IIcon>",references:[{name:"IIcon",package:"@ui5/webcomponents",module:"dist/Icon.js"}]},_ui5privacy:"public"}],members:[{kind:"field",name:"design",type:{text:"MessageStripDesign",references:[{name:"MessageStripDesign",package:"@ui5/webcomponents",module:"dist/types/MessageStripDesign.js"}]},description:"Defines the component type.",default:'"Information"',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"MessageStripDesign"},{kind:"field",name:"hideIcon",type:{text:"boolean"},description:`Defines whether the MessageStrip will show an icon in the beginning.
You can directly provide an icon with the <code>icon</code> slot. Otherwise, the default icon for the type will be used.`,default:"false",privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"Boolean"},{kind:"field",name:"hideCloseButton",type:{text:"boolean"},description:"Defines whether the MessageStrip renders close button.",default:"false",privacy:"public",_ui5validator:"Boolean"}],events:[{name:"close",_ui5privacy:"public",type:{text:"CustomEvent"},description:`Fired when the close button is pressed either with a
click/tap or by using the Enter or Space key.`}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-message-strip",customElement:!0,_ui5since:"0.9.0",_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"MessageStrip",module:"dist/MessageStrip.js"}},{kind:"custom-element-definition",name:"ui5-message-strip",declaration:{name:"MessageStrip",module:"dist/MessageStrip.js"}}]},{kind:"javascript-module",path:"dist/MonthPicker.js",declarations:[],exports:[{kind:"js",name:"default",declaration:{name:"MonthPicker",module:"dist/MonthPicker.js"}}]},{kind:"javascript-module",path:"dist/MultiComboBox.js",declarations:[{kind:"interface",name:"IMultiComboBoxItem",description:"Interface for components that may be slotted inside a <code>ui5-multi-combobox</code> as items",_ui5privacy:"public"},{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-multi-combobox</code> component consists of a list box with items and a text field allowing the user to either type a value directly into the text field, or choose from the list of existing items.

The drop-down list is used for selecting and filtering values, it enables users to select one or more options from a predefined list. The control provides an editable input field to filter the list, and a dropdown arrow to expand/collapse the list of available options.
The options in the list have checkboxes that permit multi-selection. Entered values are displayed as tokens.
<h3>Structure</h3>
The <code>ui5-multi-combobox</code> consists of the following elements:
<ul>
<li> Tokenizer - a list of tokens with selected options.</li>
<li> Input field - displays the selected option/s as token/s. Users can type to filter the list.</li>
<li> Drop-down arrow - expands\\collapses the option list.</li>
<li> Option list - the list of available options.</li>
</ul>
<h3>Keyboard Handling</h3>

The <code>ui5-multi-combobox</code> provides advanced keyboard handling.

<h4>Picker</h4>
If the <code>ui5-multi-combobox</code> is focused,
you can open or close the drop-down by pressing <code>F4</code>, <code>ALT+UP</code> or <code>ALT+DOWN</code> keys.
Once the drop-down is opened, you can use the <code>UP</code> and <code>DOWN</code> arrow keys
to navigate through the available options and select one by pressing the <code>Space</code> or <code>Enter</code> keys.
<br>

<h4>Tokens</h4>
<ul>
<li> Left/Right arrow keys - moves the focus selection form the currently focused token to the previous/next one (if available). </li>
<li> Delete -  deletes the token and focuses the previous token. </li>
<li> Backspace -  deletes the token and focus the next token. </li>
</ul>

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/MultiComboBox";</code>`,name:"MultiComboBox",cssParts:[{description:"Used to style each token(where <code>token-0</code> corresponds to the first item)",name:"token-{index}"}],slots:[{name:"default",description:"Defines the component items.",_ui5propertyName:"items",_ui5type:{text:"Array<IMultiComboBoxItem>",references:[{name:"IMultiComboBoxItem",package:"@ui5/webcomponents",module:"dist/MultiComboBox.js"}]},_ui5privacy:"public"},{name:"icon",description:"Defines the icon to be displayed in the component.",_ui5since:"1.0.0-rc.9",_ui5type:{text:"Array<IIcon>",references:[{name:"IIcon",package:"@ui5/webcomponents",module:"dist/Icon.js"}]},_ui5privacy:"public"},{name:"valueStateMessage",description:`Defines the value state message that will be displayed as pop up under the component.
<br><br>

<b>Note:</b> If not specified, a default text (in the respective language) will be displayed.
<br>
<b>Note:</b> The <code>valueStateMessage</code> would be displayed,
when the component is in <code>Information</code>, <code>Warning</code> or <code>Error</code> value state.`,_ui5since:"1.0.0-rc.9",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"}],members:[{kind:"field",name:"value",type:{text:"string"},description:`Defines the value of the component.
<br><br>
<b>Note:</b> The property is updated upon typing.`,default:'""',privacy:"public",_ui5validator:"String",_ui5formProperty:!0,_ui5formEvents:"change,input"},{kind:"field",name:"noTypeahead",type:{text:"boolean"},description:"Defines whether the value will be autcompleted to match an item",default:"false",privacy:"public",_ui5since:"1.4.0",_ui5validator:"Boolean"},{kind:"field",name:"placeholder",type:{text:"string"},description:`Defines a short hint intended to aid the user with data entry when the
component has no value.`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"allowCustomValues",type:{text:"boolean"},description:"Defines if the user input will be prevented, if no matching item has been found",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"disabled",type:{text:"boolean"},description:`Defines whether the component is in disabled state.
<br><br>
<b>Note:</b> A disabled component is completely noninteractive.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"valueState",type:{text:"ValueState",references:[{name:"ValueState",package:"@ui5/webcomponents-base",module:"dist/types/ValueState.js"}]},description:"Defines the value state of the component.",default:'"None"',privacy:"public",_ui5validator:"ValueState"},{kind:"field",name:"readonly",type:{text:"boolean"},description:`Defines whether the component is read-only.
<br><br>
<b>Note:</b> A read-only component is not editable,
but still provides visual feedback upon user interaction.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"required",type:{text:"boolean"},description:"Defines whether the component is required.",default:"false",privacy:"public",_ui5since:"1.0.0-rc.5",_ui5validator:"Boolean"},{kind:"field",name:"filter",type:{text:"ComboBoxFilter",references:[{name:"ComboBoxFilter",package:"@ui5/webcomponents",module:"dist/types/ComboBoxFilter.js"}]},description:"Defines the filter type of the component.",default:'"StartsWithPerTerm"',privacy:"public",_ui5validator:"ComboBoxFilter"},{kind:"field",name:"showClearIcon",type:{text:"boolean"},description:"Defines whether the clear icon of the multi-combobox will be shown.",default:"false",privacy:"public",_ui5since:"1.20.1",_ui5validator:"Boolean"},{kind:"field",name:"accessibleName",type:{text:"string"},description:"Defines the accessible ARIA name of the component.",default:'""',privacy:"public",_ui5since:"1.4.0",_ui5validator:"String"},{kind:"field",name:"accessibleNameRef",type:{text:"string"},description:"Receives id(or many ids) of the elements that label the component.",default:'""',privacy:"public",_ui5since:"1.4.0",_ui5validator:"String"},{kind:"field",name:"showSelectAll",type:{text:"boolean"},description:"Determines if the select all checkbox is visible on top of suggestions.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"open",type:{text:"boolean"},description:"Indicates whether the dropdown is open. True if the dropdown is open, false otherwise.",default:"false",privacy:"public",readonly:!0}],events:[{name:"change",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired when the input operation has finished by pressing Enter or on focusout."},{name:"input",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired when the value of the component changes at each keystroke or clear icon is pressed."},{name:"open-change",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired when the dropdown is opened or closed.",_ui5since:"1.0.0-rc.5"},{name:"selection-change",_ui5privacy:"public",type:{text:"CustomEvent<MultiComboBoxSelectionChangeEventDetail>",references:[{name:"MultiComboBoxSelectionChangeEventDetail",package:"@ui5/webcomponents",module:"dist/MultiComboBox.js"}]},description:"Fired when selection is changed by user interaction.",_ui5allowPreventDefault:!0,_ui5parameters:[{type:{text:"Array<IMultiComboBoxItem>",references:[{name:"IMultiComboBoxItem",package:"@ui5/webcomponents",module:"dist/MultiComboBox.js"}]},name:"items",_ui5privacy:"public",description:"an array of the selected items."}]}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-multi-combobox",customElement:!0,_ui5since:"0.11.0",_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"MultiComboBox",module:"dist/MultiComboBox.js"}},{kind:"custom-element-definition",name:"ui5-multi-combobox",declaration:{name:"MultiComboBox",module:"dist/MultiComboBox.js"}}]},{kind:"javascript-module",path:"dist/MultiComboBoxGroupItem.js",declarations:[{kind:"class",description:`The <code>ui5-mcb-group-item</code> is type of suggestion item,
that can be used to split the <code>ui5-multi-combobox</code> suggestions into groups.`,name:"MultiComboBoxGroupItem",members:[{kind:"field",name:"text",type:{text:"string"},description:"Defines the text of the component.",default:'""',privacy:"public",_ui5validator:"String"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-mcb-group-item",customElement:!0,_ui5since:"1.4.0",_ui5privacy:"public",_ui5abstract:!0,_ui5implements:[{name:"IMultiComboBoxItem",package:"@ui5/webcomponents",module:"dist/MultiComboBox.js"}]}],exports:[{kind:"js",name:"default",declaration:{name:"MultiComboBoxGroupItem",module:"dist/MultiComboBoxGroupItem.js"}},{kind:"custom-element-definition",name:"ui5-mcb-group-item",declaration:{name:"MultiComboBoxGroupItem",module:"dist/MultiComboBoxGroupItem.js"}}]},{kind:"javascript-module",path:"dist/MultiComboBoxItem.js",declarations:[{kind:"class",description:"The <code>ui5-mcb-item</code> represents the item for a <code>ui5-multi-combobox</code>.",name:"MultiComboBoxItem",members:[{kind:"field",name:"selected",type:{text:"boolean"},description:"Defines the selected state of the component.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"text",type:{text:"string"},description:"Defines the text of the component.",default:'""',privacy:"public",_ui5validator:"String",inheritedFrom:{name:"ComboBoxItem",module:"dist/ComboBoxItem.js"}},{kind:"field",name:"additionalText",type:{text:"string"},description:"Defines the additional text of the component.",default:'""',privacy:"public",_ui5since:"1.0.0-rc.11",_ui5validator:"String",inheritedFrom:{name:"ComboBoxItem",module:"dist/ComboBoxItem.js"}}],superclass:{name:"ComboBoxItem",package:"@ui5/webcomponents",module:"dist/ComboBoxItem.js"},tagName:"ui5-mcb-item",customElement:!0,_ui5privacy:"public",_ui5abstract:!0,_ui5implements:[{name:"IMultiComboBoxItem",package:"@ui5/webcomponents",module:"dist/MultiComboBox.js"}]}],exports:[{kind:"js",name:"default",declaration:{name:"MultiComboBoxItem",module:"dist/MultiComboBoxItem.js"}},{kind:"custom-element-definition",name:"ui5-mcb-item",declaration:{name:"MultiComboBoxItem",module:"dist/MultiComboBoxItem.js"}}]},{kind:"javascript-module",path:"dist/MultiInput.js",declarations:[{kind:"class",description:`<h3>Overview</h3>
A <code>ui5-multi-input</code> field allows the user to enter multiple values, which are displayed as <code>ui5-token</code>.

User can choose interaction for creating tokens.
Fiori Guidelines say that user should create tokens when:
<ul>
<li>Type a value in the input and press enter or focus out the input field (<code>change</code> event is fired)</li>
<li>Select a value from the suggestion list (<code>suggestion-item-select</code> event is fired)</li>
</ul>

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/MultiInput";</code>`,name:"MultiInput",slots:[{name:"tokens",description:"Defines the component tokens.",_ui5type:{text:"Array<IToken>",references:[{name:"IToken",package:"@ui5/webcomponents",module:"dist/MultiInput.js"}]},_ui5privacy:"public"},{name:"default",description:`Defines the suggestion items.
<br><br>
Example:
<br><br>
&lt;ui5-input show-suggestions><br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ui5-suggestion-item text="Item #1">&lt;/ui5-suggestion-item><br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ui5-suggestion-item text="Item #2">&lt;/ui5-suggestion-item><br>
&lt;/ui5-input>
<br>
<ui5-input show-suggestions>
<ui5-suggestion-group-item text="Group #1"></ui5-suggestion-group-item>
<ui5-suggestion-item text="Item #1"></ui5-suggestion-item>
<ui5-suggestion-item text="Item #2"></ui5-suggestion-item>
<ui5-suggestion-group-item text="Group #2"></ui5-suggestion-group-item>
<ui5-suggestion-item text="Item #3"></ui5-suggestion-item>
<ui5-suggestion-item text="Item #4"></ui5-suggestion-item>
</ui5-input>
<br><br>
<b>Note:</b> The suggestions would be displayed only if the <code>showSuggestions</code>
property is set to <code>true</code>.
<br><br>
<b>Note:</b> The <code>&lt;ui5-suggestion-item&gt;</code> and <code>&lt;ui5-suggestion-group-item&gt;</code> are recommended to be used as suggestion items.
<br><br>
<b>Note:</b> Importing the Input Suggestions Support feature:
<br>
<code>import "@ui5/webcomponents/dist/features/InputSuggestions.js";</code>
<br>
automatically imports the <code>&lt;ui5-suggestion-item></code> and <code>&lt;ui5-suggestion-group-item></code> for your convenience.`,_ui5propertyName:"suggestionItems",_ui5type:{text:"Array<IInputSuggestionItem>",references:[{name:"IInputSuggestionItem",package:"@ui5/webcomponents",module:"dist/Input.js"}]},_ui5privacy:"public"},{name:"icon",description:"Defines the icon to be displayed in the component.",_ui5type:{text:"Array<IIcon>",references:[{name:"IIcon",package:"@ui5/webcomponents",module:"dist/Icon.js"}]},_ui5privacy:"public"},{name:"valueStateMessage",description:`Defines the value state message that will be displayed as pop up under the component.
<br><br>

<b>Note:</b> If not specified, a default text (in the respective language) will be displayed.
<br><br>
<b>Note:</b> The <code>valueStateMessage</code> would be displayed,
when the component is in <code>Information</code>, <code>Warning</code> or <code>Error</code> value state.
<br><br>
<b>Note:</b> If the component has <code>suggestionItems</code>,
the <code>valueStateMessage</code> would be displayed as part of the same popover, if used on desktop, or dialog - on phone.`,_ui5since:"1.0.0-rc.6",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"}],members:[{kind:"field",name:"showValueHelpIcon",type:{text:"boolean"},description:`Determines whether a value help icon will be visualized in the end of the input.
Pressing the icon will fire <code>value-help-trigger</code> event.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"disabled",type:{text:"boolean"},description:`Defines whether the component is in disabled state.
<br><br>
<b>Note:</b> A disabled component is completely noninteractive.`,default:"false",privacy:"public",_ui5validator:"Boolean",inheritedFrom:{name:"Input",module:"dist/Input.js"}},{kind:"field",name:"placeholder",type:{text:"string"},description:`Defines a short hint intended to aid the user with data entry when the
component has no value.`,default:'""',privacy:"public",_ui5validator:"String",inheritedFrom:{name:"Input",module:"dist/Input.js"}},{kind:"field",name:"readonly",type:{text:"boolean"},description:`Defines whether the component is read-only.
<br><br>
<b>Note:</b> A read-only component is not editable,
but still provides visual feedback upon user interaction.`,default:"false",privacy:"public",_ui5validator:"Boolean",inheritedFrom:{name:"Input",module:"dist/Input.js"}},{kind:"field",name:"required",type:{text:"boolean"},description:"Defines whether the component is required.",default:"false",privacy:"public",_ui5since:"1.0.0-rc.3",_ui5validator:"Boolean",inheritedFrom:{name:"Input",module:"dist/Input.js"}},{kind:"field",name:"noTypeahead",type:{text:"boolean"},description:"Defines whether the value will be autcompleted to match an item",default:"false",privacy:"public",_ui5since:"1.4.0",_ui5validator:"Boolean",inheritedFrom:{name:"Input",module:"dist/Input.js"}},{kind:"field",name:"type",type:{text:"InputType",references:[{name:"InputType",package:"@ui5/webcomponents",module:"dist/types/InputType.js"}]},description:`Defines the HTML type of the component.
<br><br>
<b>Notes:</b>
<ul>
<li>The particular effect of this property differs depending on the browser
and the current language settings, especially for type <code>Number</code>.</li>
<li>The property is mostly intended to be used with touch devices
that use different soft keyboard layouts depending on the given input type.</li>
</ul>`,default:'"Text"',privacy:"public",_ui5validator:"InputType",inheritedFrom:{name:"Input",module:"dist/Input.js"}},{kind:"field",name:"value",type:{text:"string"},description:`Defines the value of the component.
<br><br>
<b>Note:</b> The property is updated upon typing.`,default:'""',privacy:"public",_ui5validator:"String",_ui5formProperty:!0,_ui5formEvents:"change,input",inheritedFrom:{name:"Input",module:"dist/Input.js"}},{kind:"field",name:"valueState",type:{text:"ValueState",references:[{name:"ValueState",package:"@ui5/webcomponents-base",module:"dist/types/ValueState.js"}]},description:"Defines the value state of the component.",default:'"None"',privacy:"public",_ui5validator:"ValueState",inheritedFrom:{name:"Input",module:"dist/Input.js"}},{kind:"field",name:"name",type:{text:"string"},description:`Determines the name with which the component will be submitted in an HTML form.

<br><br>
<b>Important:</b> For the <code>name</code> property to have effect, you must add the following import to your project:
<code>import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";</code>

<br><br>
<b>Note:</b> When set, a native <code>input</code> HTML element
will be created inside the component so that it can be submitted as
part of an HTML form. Do not use this property unless you need to submit a form.`,default:'""',privacy:"public",_ui5validator:"String",inheritedFrom:{name:"Input",module:"dist/Input.js"}},{kind:"field",name:"showSuggestions",type:{text:"boolean"},description:`Defines whether the component should show suggestions, if such are present.
<br><br>
<b>Note:</b> You need to import the <code>InputSuggestions</code> module
from <code>"@ui5/webcomponents/dist/features/InputSuggestions.js"</code> to enable this functionality.`,default:"false",privacy:"public",_ui5validator:"Boolean",inheritedFrom:{name:"Input",module:"dist/Input.js"}},{kind:"field",name:"maxlength",type:{text:"number | undefined"},description:`Sets the maximum number of characters available in the input field.
<br><br>
<b>Note:</b> This property is not compatible with the ui5-input type InputType.Number. If the ui5-input type is set to Number, the maxlength value is ignored.`,default:"undefined",privacy:"public",_ui5since:"1.0.0-rc.5",_ui5validator:"Integer",inheritedFrom:{name:"Input",module:"dist/Input.js"}},{kind:"field",name:"accessibleName",type:{text:"string"},description:"Defines the accessible ARIA name of the component.",default:'""',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"String",inheritedFrom:{name:"Input",module:"dist/Input.js"}},{kind:"field",name:"accessibleNameRef",type:{text:"string"},description:"Receives id(or many ids) of the elements that label the input.",default:'""',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"String",inheritedFrom:{name:"Input",module:"dist/Input.js"}},{kind:"field",name:"showClearIcon",type:{text:"boolean"},description:"Defines whether the clear icon of the input will be shown.",default:"false",privacy:"public",_ui5since:"1.2.0",_ui5validator:"Boolean",inheritedFrom:{name:"Input",module:"dist/Input.js"}},{kind:"method",name:"openPicker",return:{type:{text:"void"}},description:"Manually opens the suggestions popover, assuming suggestions are enabled. Items must be preloaded for it to open.",privacy:"public",_ui5since:"1.3.0",inheritedFrom:{name:"Input",module:"dist/Input.js"}},{kind:"field",name:"previewItem",type:{text:"IInputSuggestionItem | null",references:[{name:"IInputSuggestionItem",package:"@ui5/webcomponents",module:"dist/Input.js"}]},description:"The suggestion item on preview.",default:"null",privacy:"public",readonly:!0,inheritedFrom:{name:"Input",module:"dist/Input.js"}}],events:[{name:"value-help-trigger",_ui5privacy:"public",type:{text:"CustomEvent"},description:`Fired when the value help icon is pressed
and F4 or ALT/OPTION + ARROW_UP/ARROW_DOWN keyboard keys are used.`},{name:"token-delete",_ui5privacy:"public",type:{text:"CustomEvent<MultiInputTokenDeleteEventDetail>",references:[{name:"MultiInputTokenDeleteEventDetail",package:"@ui5/webcomponents",module:"dist/MultiInput.js"}]},description:"Fired when a token is about to be deleted.",_ui5parameters:[{type:{text:"HTMLElement"},name:"token",_ui5privacy:"public",description:"deleted token."}]},{name:"change",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired when the input operation has finished by pressing Enter or on focusout.",inheritedFrom:{name:"Input",module:"dist/Input.js"}},{name:"input",_ui5privacy:"public",type:{text:"CustomEvent"},description:`Fired when the value of the component changes at each keystroke,
and when a suggestion item has been selected.`,inheritedFrom:{name:"Input",module:"dist/Input.js"}},{name:"suggestion-item-select",_ui5privacy:"public",type:{text:"CustomEvent<InputSuggestionItemSelectEventDetail>",references:[{name:"InputSuggestionItemSelectEventDetail",package:"@ui5/webcomponents",module:"dist/Input.js"}]},description:"Fired when a suggestion item, that is displayed in the suggestion popup, is selected.",_ui5allowPreventDefault:!0,_ui5parameters:[{type:{text:"HTMLElement"},name:"item",_ui5privacy:"public",description:"The selected item."}],inheritedFrom:{name:"Input",module:"dist/Input.js"}},{name:"suggestion-item-preview",_ui5privacy:"public",type:{text:"CustomEvent<InputSuggestionItemPreviewEventDetail>",references:[{name:"InputSuggestionItemPreviewEventDetail",package:"@ui5/webcomponents",module:"dist/Input.js"}]},description:`Fired when the user navigates to a suggestion item via the ARROW keys,
as a preview, before the final selection.`,_ui5since:"1.0.0-rc.8",_ui5parameters:[{type:{text:"HTMLElement"},name:"item",_ui5privacy:"public",description:"The previewed suggestion item."},{type:{text:"HTMLElement"},name:"targetRef",_ui5privacy:"public",description:"The DOM ref of the suggestion item."}],inheritedFrom:{name:"Input",module:"dist/Input.js"}}],superclass:{name:"Input",package:"@ui5/webcomponents",module:"dist/Input.js"},tagName:"ui5-multi-input",customElement:!0,_ui5since:"1.0.0-rc.9",_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"MultiInput",module:"dist/MultiInput.js"}},{kind:"custom-element-definition",name:"ui5-multi-input",declaration:{name:"MultiInput",module:"dist/MultiInput.js"}}]},{kind:"javascript-module",path:"dist/NavigationMenu.js",declarations:[],exports:[{kind:"js",name:"default",declaration:{name:"NavigationMenu",module:"dist/NavigationMenu.js"}}]},{kind:"javascript-module",path:"dist/NavigationMenuItem.js",declarations:[],exports:[{kind:"js",name:"default",declaration:{name:"NavigationMenuItem",module:"dist/NavigationMenuItem.js"}}]},{kind:"javascript-module",path:"dist/Option.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-option</code> component defines the content of an option in the <code>ui5-select</code>.`,name:"Option",slots:[{name:"default",description:`Defines the text of the component.
<br><br>
<b>Note:</b> Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,_ui5propertyName:"text",_ui5type:{text:"Array<Node>"},_ui5privacy:"public"}],members:[{kind:"field",name:"selected",type:{text:"boolean"},description:"Defines the selected state of the component.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"disabled",type:{text:"boolean"},description:`Defines whether the component is in disabled state.
<br><br>
<b>Note:</b> A disabled component is hidden.`,default:"false",privacy:"public",_ui5since:"1.0.0-rc.12",_ui5validator:"Boolean"},{kind:"field",name:"icon",type:{text:"string | null | undefined"},description:`Defines the <code>icon</code> source URI.
<br><br>
<b>Note:</b>
SAP-icons font provides numerous built-in icons. To find all the available icons, see the
<ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.`,default:"null",privacy:"public",_ui5validator:"String"},{kind:"field",name:"value",type:{text:"string"},description:`Defines the value of the <code>ui5-select</code> inside an HTML Form element when this component is selected.
For more information on HTML Form support, see the <code>name</code> property of <code>ui5-select</code>.`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"additionalText",type:{text:"string"},description:"Defines the additional text displayed at the end of the option element.",default:'""',privacy:"public",_ui5since:"1.3.0",_ui5validator:"String"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-option",customElement:!0,_ui5privacy:"public",_ui5abstract:!0,_ui5implements:[{name:"IOption",package:"@ui5/webcomponents",module:"dist/Select.js"}]}],exports:[{kind:"js",name:"default",declaration:{name:"Option",module:"dist/Option.js"}},{kind:"custom-element-definition",name:"ui5-option",declaration:{name:"Option",module:"dist/Option.js"}}]},{kind:"javascript-module",path:"dist/Panel.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-panel</code> component is a container which has a header and a
content area and is used
for grouping and displaying information. It can be collapsed to save space on the screen.

<h3>Guidelines:</h3>
<ul>
<li>Nesting two or more panels is not recommended.</li>
<li>Do not stack too many panels on one page.</li>
</ul>

<h3>Structure</h3>
The panel's header area consists of a title bar with a header text or custom header.
<br>
The header is clickable and can be used to toggle between the expanded and collapsed state. It includes an icon which rotates depending on the state.
<br>
The custom header can be set through the <code>header</code> slot and it may contain arbitraray content, such as: title, buttons or any other HTML elements.
<br>
The content area can contain an arbitrary set of controls.
<br><b>Note:</b> The custom header is not clickable out of the box, but in this case the icon is interactive and allows to show/hide the content area.

<h3>Responsive Behavior</h3>
<ul>
<li>If the width of the panel is set to 100% (default), the panel and its children are
resized responsively,
depending on its parent container.</li>
<li>If the panel has a fixed height, it will take up the space even if the panel is
collapsed.</li>
<li>When the panel is expandable (the <code>fixed</code> property is set to <code>false</code>),
an arrow icon (pointing to the right) appears in front of the header.</li>
<li>When the animation is activated, expand/collapse uses a smooth animation to open or
close the content area.</li>
<li>When the panel expands/collapses, the arrow icon rotates 90 degrees
clockwise/counter-clockwise.</li>
</ul>

<h3>Keyboard Handling</h3>

<h4>Fast Navigation</h4>
This component provides a build in fast navigation group which can be used via <code>F6 / Shift + F6</code> or <code> Ctrl + Alt(Option) + Down /  Ctrl + Alt(Option) + Up</code>.
In order to use this functionality, you need to import the following module:
<code>import "@ui5/webcomponents-base/dist/features/F6Navigation.js"</code>
<br><br>

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/Panel";</code>`,name:"Panel",cssParts:[{description:"Used to style the wrapper of the header.",name:"header"},{description:"Used to style the wrapper of the content.",name:"content"}],slots:[{description:"Defines the content of the component. The content is visible only when the component is expanded.",name:"default",_ui5privacy:"public",_ui5type:{text:"Array<Node>"}},{name:"header",description:`Defines the component header area.
<br><br>
<b>Note:</b> When a header is provided, the <code>headerText</code> property is ignored.`,_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"}],members:[{kind:"field",name:"headerText",type:{text:"string"},description:`This property is used to set the header text of the component.
The text is visible in both expanded and collapsed states.
<br><br>
<b>Note:</b> This property is overridden by the <code>header</code> slot.`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"fixed",type:{text:"boolean"},description:`Determines whether the component is in a fixed state that is not
expandable/collapsible by user interaction.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"collapsed",type:{text:"boolean"},description:"Indicates whether the component is collapsed and only the header is displayed.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"noAnimation",type:{text:"boolean"},description:"Indicates whether the transition between the expanded and the collapsed state of the component is animated. By default the animation is enabled.",default:"false",privacy:"public",_ui5since:"1.0.0-rc.16",_ui5validator:"Boolean"},{kind:"field",name:"accessibleRole",type:{text:"PanelAccessibleRole",references:[{name:"PanelAccessibleRole",package:"@ui5/webcomponents",module:"dist/types/PanelAccessibleRole.js"}]},description:`Sets the accessible ARIA role of the component.
Depending on the usage, you can change the role from the default <code>Form</code>
to <code>Region</code> or <code>Complementary</code>.`,default:'"Form"',privacy:"public",_ui5validator:"PanelAccessibleRole"},{kind:"field",name:"headerLevel",type:{text:"TitleLevel",references:[{name:"TitleLevel",package:"@ui5/webcomponents",module:"dist/types/TitleLevel.js"}]},description:`Defines the "aria-level" of component heading,
set by the <code>headerText</code>.`,default:'"H2"',privacy:"public",_ui5validator:"TitleLevel"},{kind:"field",name:"accessibleName",type:{text:"string"},description:"Defines the accessible ARIA name of the component.",default:'""',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"String"},{kind:"field",name:"stickyHeader",type:{text:"boolean"},description:`Indicates whether the Panel header is sticky or not.
If stickyHeader is set to true, then whenever you scroll the content or
the application, the header of the panel will be always visible and
a solid color will be used for its design.`,default:"false",privacy:"public",_ui5since:"1.16.0-rc.1",_ui5validator:"Boolean"}],events:[{name:"toggle",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired when the component is expanded/collapsed by user interaction."}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-panel",customElement:!0,_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"Panel",module:"dist/Panel.js"}},{kind:"custom-element-definition",name:"ui5-panel",declaration:{name:"Panel",module:"dist/Panel.js"}}]},{kind:"javascript-module",path:"dist/Popover.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-popover</code> component displays additional information for an object
in a compact way and without leaving the page.
The Popover can contain various UI elements, such as fields, tables, images, and charts.
It can also include actions in the footer.

<h3>Structure</h3>

The popover has three main areas:
<ul>
<li>Header (optional)</li>
<li>Content</li>
<li>Footer (optional)</li>
</ul>

<b>Note:</b> The <code>ui5-popover</code> is closed when the user clicks
or taps outside the popover
or selects an action within the popover. You can prevent this with the
<code>modal</code> property.

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/Popover.js";</code>

<b>Note: </b> We recommend placing popup-like components (<code>ui5-dialog</code> and <code>ui5-popover</code>)
outside any other components. Preferably, the popup-like components should be placed
in an upper level HTML element. Otherwise, in some cases the parent HTML elements can break
the position and/or z-index management of the popup-like components.

<b>Note:</b> We don't recommend nesting popup-like components (<code>ui5-dialog</code>, <code>ui5-popover</code>).`,name:"Popover",cssParts:[{description:"Used to style the header of the component",name:"header"},{description:"Used to style the content of the component",name:"content"},{description:"Used to style the footer of the component",name:"footer"}],slots:[{name:"header",description:"Defines the header HTML Element.",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"},{name:"footer",description:"Defines the footer HTML Element.",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"},{name:"default",description:"Defines the content of the Popup.",_ui5propertyName:"content",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"}],members:[{kind:"field",name:"headerText",type:{text:"string"},description:`Defines the header text.
<br><br>
<b>Note:</b> If <code>header</code> slot is provided, the <code>headerText</code> is ignored.`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"placementType",type:{text:"PopoverPlacementType",references:[{name:"PopoverPlacementType",package:"@ui5/webcomponents",module:"dist/types/PopoverPlacementType.js"}]},description:"Determines on which side the component is placed at.",default:'"Right"',privacy:"public",_ui5validator:"PopoverPlacementType"},{kind:"field",name:"horizontalAlign",type:{text:"PopoverHorizontalAlign",references:[{name:"PopoverHorizontalAlign",package:"@ui5/webcomponents",module:"dist/types/PopoverHorizontalAlign.js"}]},description:"Determines the horizontal alignment of the component.",default:'"Center"',privacy:"public",_ui5validator:"PopoverHorizontalAlign"},{kind:"field",name:"verticalAlign",type:{text:"PopoverVerticalAlign",references:[{name:"PopoverVerticalAlign",package:"@ui5/webcomponents",module:"dist/types/PopoverVerticalAlign.js"}]},description:"Determines the vertical alignment of the component.",default:'"Center"',privacy:"public",_ui5validator:"PopoverVerticalAlign"},{kind:"field",name:"modal",type:{text:"boolean"},description:`Defines whether the component should close when
clicking/tapping outside of the popover.
If enabled, it blocks any interaction with the background.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"hideBackdrop",type:{text:"boolean"},description:"Defines whether the block layer will be shown if modal property is set to true.",default:"false",privacy:"public",_ui5since:"1.0.0-rc.10",_ui5validator:"Boolean"},{kind:"field",name:"hideArrow",type:{text:"boolean"},description:"Determines whether the component arrow is hidden.",default:"false",privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"Boolean"},{kind:"field",name:"allowTargetOverlap",type:{text:"boolean"},description:`Determines if there is no enough space, the component can be placed
over the target.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"opener",type:{text:"HTMLElement | string | undefined"},description:"Defines the ID or DOM Reference of the element that the popover is shown at",privacy:"public",default:"undefined",_ui5since:"1.2.0",_ui5validator:"DOMReference"},{kind:"method",name:"showAt",return:{type:{text:"Promise<void>"},description:"Resolved when the popover is open"},parameters:[{name:"opener",type:{text:"HTMLElement"},description:"the element that the popover is shown at",_ui5privacy:"public"},{name:"preventInitialFocus",default:"false",description:"prevents applying the focus inside the popover",optional:!0,_ui5privacy:"public",type:{text:"boolean"}}],description:"Shows the popover.",privacy:"public"},{kind:"field",name:"initialFocus",type:{text:"string"},description:"Defines the ID of the HTML Element, which will get the initial focus.",default:'""',privacy:"public",_ui5validator:"String",inheritedFrom:{name:"Popup",module:"dist/Popup.js"}},{kind:"field",name:"preventFocusRestore",type:{text:"boolean"},description:`Defines if the focus should be returned to the previously focused element,
when the popup closes.`,default:"false",privacy:"public",_ui5since:"1.0.0-rc.8",_ui5validator:"Boolean",inheritedFrom:{name:"Popup",module:"dist/Popup.js"}},{kind:"field",name:"open",type:{text:"boolean"},description:"Indicates if the element is open",privacy:"public",default:"false",_ui5since:"1.2.0",_ui5validator:"Boolean",inheritedFrom:{name:"Popup",module:"dist/Popup.js"}},{kind:"field",name:"accessibleName",type:{text:"string | undefined"},description:"Defines the accessible name of the component.",default:"undefined",privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"String",inheritedFrom:{name:"Popup",module:"dist/Popup.js"}},{kind:"field",name:"accessibleNameRef",type:{text:"string"},description:"Defines the IDs of the elements that label the component.",default:'""',privacy:"public",_ui5since:"1.1.0",_ui5validator:"String",inheritedFrom:{name:"Popup",module:"dist/Popup.js"}},{kind:"field",name:"accessibleRole",type:{text:"PopupAccessibleRole",references:[{name:"PopupAccessibleRole",package:"@ui5/webcomponents",module:"dist/types/PopupAccessibleRole.js"}]},description:"Allows setting a custom role.",default:'"Dialog"',privacy:"public",_ui5since:"1.10.0",_ui5validator:"PopupAccessibleRole",inheritedFrom:{name:"Popup",module:"dist/Popup.js"}},{kind:"method",name:"applyFocus",return:{type:{text:"Promise<void>"},description:"Promise that resolves when the focus is applied"},description:`Focuses the element denoted by <code>initialFocus</code>, if provided,
or the first focusable element otherwise.`,privacy:"public",inheritedFrom:{name:"Popup",module:"dist/Popup.js"}},{kind:"method",name:"isOpen",return:{type:{text:"boolean"}},description:"Tells if the component is opened",privacy:"public",inheritedFrom:{name:"Popup",module:"dist/Popup.js"}},{kind:"method",name:"close",return:{type:{text:"void"}},description:"Closes the popup.",privacy:"public",inheritedFrom:{name:"Popup",module:"dist/Popup.js"}}],superclass:{name:"Popup",package:"@ui5/webcomponents",module:"dist/Popup.js"},tagName:"ui5-popover",customElement:!0,_ui5since:"1.0.0-rc.6",_ui5privacy:"public",events:[{name:"before-open",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening. <b>This event does not bubble.</b>",_ui5allowPreventDefault:!0,inheritedFrom:{name:"Popup",module:"dist/Popup.js"}},{name:"after-open",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired after the component is opened. <b>This event does not bubble.</b>",inheritedFrom:{name:"Popup",module:"dist/Popup.js"}},{name:"before-close",_ui5privacy:"public",type:{text:"CustomEvent<PopupBeforeCloseEventDetail>",references:[{name:"PopupBeforeCloseEventDetail",package:"@ui5/webcomponents",module:"dist/Popup.js"}]},description:"Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. <b>This event does not bubble.</b>",_ui5allowPreventDefault:!0,_ui5parameters:[{type:{text:"boolean"},name:"escPressed",_ui5privacy:"public",description:"Indicates that <code>ESC</code> key has triggered the event."}],inheritedFrom:{name:"Popup",module:"dist/Popup.js"}},{name:"after-close",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired after the component is closed. <b>This event does not bubble.</b>",inheritedFrom:{name:"Popup",module:"dist/Popup.js"}}]}],exports:[{kind:"js",name:"default",declaration:{name:"Popover",module:"dist/Popover.js"}},{kind:"custom-element-definition",name:"ui5-popover",declaration:{name:"Popover",module:"dist/Popover.js"}}]},{kind:"javascript-module",path:"dist/Popup.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>
Base class for all popup Web Components.

If you need to create your own popup-like custom UI5 Web Components, it is highly recommended that you extend
at least Popup in order to have consistency with other popups in terms of modal behavior and z-index management.

1. The Popup class handles modality:
 - The "isModal" getter can be overridden by derivatives to provide their own conditions when they are modal or not
 - Derivatives may call the "blockPageScrolling" and "unblockPageScrolling" static methods to temporarily remove scrollbars on the html element
 - Derivatives may call the "open" and "close" methods which handle focus, manage the popup registry and for modal popups, manage the blocking layer

 2. Provides blocking layer (relevant for modal popups only):
  - It is in the static area
  - Controlled by the "open" and "close" methods

3. The Popup class "traps" focus:
 - Derivatives may call the "applyInitialFocus" method (usually when opening, to transfer focus inside the popup)

4. The Popup class automatically assigns "z-index"
 - Each time a popup is opened, it gets a higher than the previously opened popup z-index

5. The template of this component exposes two inline partials you can override in derivatives:
 - beforeContent (upper part of the box, useful for header/title/close button)
 - afterContent (lower part, useful for footer/action buttons)`,name:"Popup",slots:[{name:"default",description:"Defines the content of the Popup.",_ui5propertyName:"content",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"}],members:[{kind:"field",name:"initialFocus",type:{text:"string"},description:"Defines the ID of the HTML Element, which will get the initial focus.",default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"preventFocusRestore",type:{text:"boolean"},description:`Defines if the focus should be returned to the previously focused element,
when the popup closes.`,default:"false",privacy:"public",_ui5since:"1.0.0-rc.8",_ui5validator:"Boolean"},{kind:"field",name:"open",type:{text:"boolean"},description:"Indicates if the element is open",privacy:"public",default:"false",_ui5since:"1.2.0",_ui5validator:"Boolean"},{kind:"field",name:"accessibleName",type:{text:"string | undefined"},description:"Defines the accessible name of the component.",default:"undefined",privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"String"},{kind:"field",name:"accessibleNameRef",type:{text:"string"},description:"Defines the IDs of the elements that label the component.",default:'""',privacy:"public",_ui5since:"1.1.0",_ui5validator:"String"},{kind:"field",name:"accessibleRole",type:{text:"PopupAccessibleRole",references:[{name:"PopupAccessibleRole",package:"@ui5/webcomponents",module:"dist/types/PopupAccessibleRole.js"}]},description:"Allows setting a custom role.",default:'"Dialog"',privacy:"public",_ui5since:"1.10.0",_ui5validator:"PopupAccessibleRole"},{kind:"method",name:"applyFocus",return:{type:{text:"Promise<void>"},description:"Promise that resolves when the focus is applied"},description:`Focuses the element denoted by <code>initialFocus</code>, if provided,
or the first focusable element otherwise.`,privacy:"public"},{kind:"method",name:"isOpen",return:{type:{text:"boolean"}},description:"Tells if the component is opened",privacy:"public"},{kind:"method",name:"close",return:{type:{text:"void"}},description:"Closes the popup.",privacy:"public"}],events:[{name:"before-open",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening. <b>This event does not bubble.</b>",_ui5allowPreventDefault:!0},{name:"after-open",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired after the component is opened. <b>This event does not bubble.</b>"},{name:"before-close",_ui5privacy:"public",type:{text:"CustomEvent<PopupBeforeCloseEventDetail>",references:[{name:"PopupBeforeCloseEventDetail",package:"@ui5/webcomponents",module:"dist/Popup.js"}]},description:"Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. <b>This event does not bubble.</b>",_ui5allowPreventDefault:!0,_ui5parameters:[{type:{text:"boolean"},name:"escPressed",_ui5privacy:"public",description:"Indicates that <code>ESC</code> key has triggered the event."}]},{name:"after-close",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired after the component is closed. <b>This event does not bubble.</b>"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},customElement:!0,_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"Popup",module:"dist/Popup.js"}}]},{kind:"javascript-module",path:"dist/ProgressIndicator.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>
Shows the progress of a process in a graphical way. To indicate the progress,
the inside of the component is filled with a color.

<h3>Responsive Behavior</h3>
You can change the size of the Progress Indicator by changing its <code>width</code> or <code>height</code> CSS properties.

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/ProgressIndicator.js";</code>`,name:"ProgressIndicator",members:[{kind:"field",name:"accessibleName",type:{text:"string"},description:"Defines the accessible ARIA name of the component.",default:'""',privacy:"public",_ui5since:"1.16.0",_ui5validator:"String"},{kind:"field",name:"disabled",type:{text:"boolean"},description:"Defines whether component is in disabled state.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"hideValue",type:{text:"boolean"},description:"Defines whether the component value is shown.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"value",type:{text:"number"},description:`Specifies the numerical value in percent for the length of the component.

<b>Note:</b>
If a value greater than 100 is provided, the percentValue is set to 100. In other cases of invalid value, percentValue is set to its default of 0.`,default:"0",privacy:"public",_ui5validator:"Integer"},{kind:"field",name:"displayValue",type:{text:"string | null | undefined"},description:`Specifies the text value to be displayed in the bar.

<b>Note:</b>
<ul>
<li>If there is no value provided or the value is empty, the default percentage value is shown.</li>
<li>If <code>hideValue</code> property is <code>true</code> both the <code>displayValue</code> and <code>value</code> property values are not shown.</li>
</ul>`,default:"null",privacy:"public",_ui5validator:"String"},{kind:"field",name:"valueState",type:{text:"ValueState",references:[{name:"ValueState",package:"@ui5/webcomponents-base",module:"dist/types/ValueState.js"}]},description:"Defines the value state of the component.",default:'"None"',privacy:"public",_ui5validator:"ValueState"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-progress-indicator",customElement:!0,_ui5since:"1.0.0-rc.8",_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"ProgressIndicator",module:"dist/ProgressIndicator.js"}},{kind:"custom-element-definition",name:"ui5-progress-indicator",declaration:{name:"ProgressIndicator",module:"dist/ProgressIndicator.js"}}]},{kind:"javascript-module",path:"dist/RadioButton.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-radio-button</code> component enables users to select a single option from a set of options.
When a <code>ui5-radio-button</code> is selected by the user, the
<code>change</code> event is fired.
When a <code>ui5-radio-button</code> that is within a group is selected, the one
that was previously selected gets automatically deselected. You can group radio buttons by using the <code>name</code> property.
<br>
<b>Note:</b> If <code>ui5-radio-button</code> is not part of a group, it can be selected once, but can not be deselected back.

<h3>Keyboard Handling</h3>

Once the <code>ui5-radio-button</code> is on focus, it might be selected by pressing the Space and Enter keys.
<br>
The Arrow Down/Arrow Up and Arrow Left/Arrow Right keys can be used to change selection between next/previous radio buttons in one group,
while TAB and SHIFT + TAB can be used to enter or leave the radio button group.
<br>
<b>Note:</b> On entering radio button group, the focus goes to the currently selected radio button.

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/RadioButton";</code>`,name:"RadioButton",members:[{kind:"field",name:"disabled",type:{text:"boolean"},description:`Defines whether the component is disabled.
<br><br>
<b>Note:</b> A disabled component is completely noninteractive.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"readonly",type:{text:"boolean"},description:`Defines whether the component is read-only.
<br><br>
<b>Note:</b> A read-only component is not editable,
but still provides visual feedback upon user interaction.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"required",type:{text:"boolean"},description:"Defines whether the component is required.",default:"false",privacy:"public",_ui5since:"1.9.0",_ui5validator:"Boolean"},{kind:"field",name:"checked",type:{text:"boolean"},description:`Defines whether the component is checked or not.
<br><br>
<b>Note:</b> The property value can be changed with user interaction,
either by clicking/tapping on the component,
or by using the Space or Enter key.`,default:"false",privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"Boolean",_ui5formProperty:!0,_ui5formEvents:"change"},{kind:"field",name:"text",type:{text:"string"},description:"Defines the text of the component.",default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"valueState",type:{text:"ValueState",references:[{name:"ValueState",package:"@ui5/webcomponents-base",module:"dist/types/ValueState.js"}]},description:"Defines the value state of the component.",default:'"None"',privacy:"public",_ui5validator:"ValueState"},{kind:"field",name:"name",type:{text:"string"},description:`Defines the name of the component.
Radio buttons with the same <code>name</code> will form a radio button group.

<br><br>
<b>Note:</b>
The selection can be changed with <code>ARROW_UP/DOWN</code> and <code>ARROW_LEFT/RIGHT</code> keys between radio buttons in same group.

<br><br>
<b>Note:</b>
Only one radio button can be selected per group.

<br><br>
<b>Important:</b> For the <code>name</code> property to have effect when submitting forms, you must add the following import to your project:
<code>import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";</code>

<br><br>
<b>Note:</b> When set, a native <code>input</code> HTML element
will be created inside the component so that it can be submitted as
part of an HTML form.`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"value",type:{text:"string"},description:`Defines the form value of the component.
When a form with a radio button group is submitted, the group's value
will be the value of the currently selected radio button.
<br>
<b>Important:</b> For the <code>value</code> property to have effect, you must add the following import to your project:
<code>import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";</code>`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"wrappingType",type:{text:"WrappingType",references:[{name:"WrappingType",package:"@ui5/webcomponents",module:"dist/types/WrappingType.js"}]},description:`Defines whether the component text wraps when there is not enough space.
<br><b>Note:</b> for option "Normal" the text will wrap and the words will not be broken based on hyphenation.`,default:'"None"',privacy:"public",_ui5validator:"WrappingType"},{kind:"field",name:"accessibleName",type:{text:"string"},description:"Defines the accessible ARIA name of the component.",default:'""',privacy:"public",_ui5since:"1.6.0",_ui5validator:"String"},{kind:"field",name:"accessibleNameRef",type:{text:"string"},description:"Defines the IDs of the elements that label the component.",default:'""',privacy:"public",_ui5since:"1.1.0",_ui5validator:"String"}],events:[{name:"change",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired when the component checked state changes.",_ui5since:"1.0.0-rc.15"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-radio-button",customElement:!0,_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"RadioButton",module:"dist/RadioButton.js"}},{kind:"custom-element-definition",name:"ui5-radio-button",declaration:{name:"RadioButton",module:"dist/RadioButton.js"}}]},{kind:"javascript-module",path:"dist/RadioButtonGroup.js",declarations:[],exports:[{kind:"js",name:"default",declaration:{name:"RadioButtonGroup",module:"dist/RadioButtonGroup.js"}}]},{kind:"javascript-module",path:"dist/RangeSlider.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>
Represents a numerical interval and two handles (grips) to select a sub-range within it.
The purpose of the component to enable visual selection of sub-ranges within a given interval.

<h3>Structure</h3>
The most important properties of the Range Slider are:
<ul>
<li>min - The minimum value of the slider range.</li>
<li>max - The maximum value of the slider range.</li>
<li>value - The current value of the slider.</li>
<li>step - Determines the increments in which the slider will move.</li>
<li>showTooltip - Determines if a tooltip should be displayed above the handle.</li>
<li>showTickmarks - Displays a visual divider between the step values.</li>
<li>labelInterval - Labels some or all of the tickmarks with their values.</li>
</ul>
<h4>Notes:</h4>
<ul>
<li>The right and left handle can be moved individually and their positions could therefore switch.</li>
<li>The entire range can be moved along the interval.</li>
</ul>
<h3>Usage</h3>
The most common use case is to select and move sub-ranges on a continuous numerical scale.

<h3>Responsive Behavior</h3>
You can move the currently selected range by clicking on it and dragging it along the interval.

<h3>Keyboard Handling</h3>

<ul>
<li><code>Left or Down Arrow</code> - Moves a component's handle or the entire selection one step to the left;</li>
<li><code>Right or Up Arrow</code> - Moves a component's handle or the entire selection one step to the right;</li>
<li><code>Left or Down Arrow + Ctrl/Cmd</code> - Moves a component's handle to the left or the entire range with step equal to 1/10th of the entire range;</li>
<li><code>Right or Up Arrow + Ctrl/Cmd</code> - Moves a component's handle to the right or the entire range with step equal to 1/10th of the entire range;</li>
<li><code>Plus</code> - Same as <code>Right or Up Arrow</code>;</li>
<li><code>Minus</code> - Same as <code>Left or Down Arrow</code>;</li>
<li><code>Home</code> - Moves the entire selection or the selected handle to the beginning of the component's range;</li>
<li><code>End</code> - Moves the entire selection or the selected handle to the end of the component's range;</li>
<li><code>Page Up</code> - Same as <code>Right or Up Arrow + Ctrl/Cmd</code>;</li>
<li><code>Page Down</code> - Same as <code>Left or Down Arrow + Ctrl/Cmd</code>;</li>
<li><code>Escape</code> - Resets the <code>startValue</code> and <code>endValue</code> properties to the values prior the component focusing;</li>
</ul>

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/RangeSlider";</code>`,name:"RangeSlider",cssParts:[{description:"Used to style the progress container, the horizontal bar that visually represents the range between the minimum and maximum values, of the <code>ui5-range-slider</code>.",name:"progress-container"},{description:"Used to style the progress bar, which shows the progress of the <code>ui5-range-slider</code>.",name:"progress-bar"},{description:"Used to style the handles of the <code>ui5-range-slider</code>.",name:"handle"}],members:[{kind:"field",name:"startValue",type:{text:"number"},description:`Defines start point of a selection - position of a first handle on the slider.
<br><br>`,default:"0",privacy:"public",_ui5validator:"Float",_ui5formProperty:!0,_ui5formEvents:"change,input"},{kind:"field",name:"endValue",type:{text:"number"},description:`Defines end point of a selection - position of a second handle on the slider.
<br><br>`,default:"100",privacy:"public",_ui5validator:"Float",_ui5formProperty:!0,_ui5formEvents:"change,input"},{kind:"field",name:"min",type:{text:"number"},description:"Defines the minimum value of the slider.",default:"0",privacy:"public",_ui5validator:"Float",inheritedFrom:{name:"SliderBase",module:"dist/SliderBase.js"}},{kind:"field",name:"max",type:{text:"number"},description:"Defines the maximum value of the slider.",default:"100",privacy:"public",_ui5validator:"Float",inheritedFrom:{name:"SliderBase",module:"dist/SliderBase.js"}},{kind:"field",name:"step",type:{text:"number"},description:`Defines the size of the slider's selection intervals (e.g. min = 0, max = 10, step = 5 would result in possible selection of the values 0, 5, 10).
<br><br>
<b>Note:</b> If set to 0 the slider handle movement is disabled. When negative number or value other than a number, the component fallbacks to its default value.`,default:"1",privacy:"public",_ui5validator:"Float",inheritedFrom:{name:"SliderBase",module:"dist/SliderBase.js"}},{kind:"field",name:"labelInterval",type:{text:"number"},description:`Displays a label with a value on every N-th step.
<br><br>
<b>Note:</b> The step and tickmarks properties must be enabled.
Example - if the step value is set to 2 and the label interval is also specified to 2 - then every second
tickmark will be labelled, which means every 4th value number.`,default:"0",privacy:"public",_ui5validator:"Integer",inheritedFrom:{name:"SliderBase",module:"dist/SliderBase.js"}},{kind:"field",name:"showTickmarks",type:{text:"boolean"},description:`Enables tickmarks visualization for each step.
<br><br>
<b>Note:</b> The step must be a positive number.`,default:"false",privacy:"public",_ui5validator:"Boolean",inheritedFrom:{name:"SliderBase",module:"dist/SliderBase.js"}},{kind:"field",name:"showTooltip",type:{text:"boolean"},description:"Enables handle tooltip displaying the current value.",default:"false",privacy:"public",_ui5validator:"Boolean",inheritedFrom:{name:"SliderBase",module:"dist/SliderBase.js"}},{kind:"field",name:"disabled",type:{text:"boolean"},description:"Defines whether the slider is in disabled state.",default:"false",privacy:"public",_ui5validator:"Boolean",inheritedFrom:{name:"SliderBase",module:"dist/SliderBase.js"}},{kind:"field",name:"accessibleName",type:{text:"string"},description:"Defines the accessible ARIA name of the component.",default:'""',privacy:"public",_ui5since:"1.4.0",_ui5validator:"String",inheritedFrom:{name:"SliderBase",module:"dist/SliderBase.js"}}],superclass:{name:"SliderBase",package:"@ui5/webcomponents",module:"dist/SliderBase.js"},tagName:"ui5-range-slider",customElement:!0,_ui5since:"1.0.0-rc.11",_ui5privacy:"public",events:[{name:"change",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired when the value changes and the user has finished interacting with the slider.",inheritedFrom:{name:"SliderBase",module:"dist/SliderBase.js"}},{name:"input",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired when the value changes due to user interaction that is not yet finished - during mouse/touch dragging.",inheritedFrom:{name:"SliderBase",module:"dist/SliderBase.js"}}]}],exports:[{kind:"js",name:"default",declaration:{name:"RangeSlider",module:"dist/RangeSlider.js"}},{kind:"custom-element-definition",name:"ui5-range-slider",declaration:{name:"RangeSlider",module:"dist/RangeSlider.js"}}]},{kind:"javascript-module",path:"dist/RatingIndicator.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>
The Rating Indicator is used to display a specific number of icons that are used to rate an item.
Additionally, it is also used to display the average and overall ratings.

<h3>Usage</h3>
The recommended number of icons is between 5 and 7.

<h3>Responsive Behavior</h3>
You can change the size of the Rating Indicator by changing its <code>font-size</code> CSS property.
<br>
Example: <code>&lt;ui5-rating-indicator style="font-size: 3rem;">&lt;/ui5-rating-indicator></code>

<h3>Keyboard Handling</h3>
When the <code>ui5-rating-indicator</code> is focused, the user can change the rating
with the following keyboard shortcuts:
<br>

<ul>
<li>[RIGHT/UP] - Increases the value of the rating by one step. If the highest value is reached, does nothing</li>
<li>[LEFT/DOWN] - Decreases the value of the rating by one step. If the lowest value is reached, does nothing.</li>
<li>[HOME] - Sets the lowest value.</li>
<li>[END] - Sets the highest value.</li>
<li>[SPACE/ENTER/RETURN] - Increases the value of the rating by one step. If the highest value is reached, sets the rating to the lowest value.</li>
<li>Any number - Changes value to the corresponding number. If typed number is larger than the number of values, sets the highest value.</li>
</ul>

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/RatingIndicator.js";</code>`,name:"RatingIndicator",members:[{kind:"field",name:"value",type:{text:"number"},description:`The indicated value of the rating.
<br><br>
<b>Note:</b> If you set a number which is not round, it would be shown as follows:
<ul>
<li>1.0 - 1.2 -> 1</li>
<li>1.3 - 1.7 -> 1.5</li>
<li>1.8 - 1.9 -> 2</li>
<ul>`,default:"0",privacy:"public",_ui5validator:"Float"},{kind:"field",name:"max",type:{text:"number"},description:"The number of displayed rating symbols.",default:"5",privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"Integer"},{kind:"field",name:"disabled",type:{text:"boolean"},description:`Defines whether the component is disabled.

<br><br>
<b>Note:</b> A disabled component is completely noninteractive.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"readonly",type:{text:"boolean"},description:`Defines whether the component is read-only.
<br><br>
<b>Note:</b> A read-only component is not editable,
but still provides visual feedback upon user interaction.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"accessibleName",type:{text:"string"},description:"Defines the accessible ARIA name of the component.",default:'""',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"String"},{kind:"field",name:"accessibleNameRef",type:{text:"string"},description:"Receives id(or many ids) of the elements that label the component.",default:'""',privacy:"public",_ui5since:"1.15.0",_ui5validator:"String"},{kind:"field",name:"required",type:{text:"boolean"},description:"Defines whether the component is required.",default:"false",privacy:"public",_ui5since:"1.15.0",_ui5validator:"Boolean"},{kind:"field",name:"tooltip",type:{text:"string"},description:"Defines the tooltip of the component.",default:'""',privacy:"public",_ui5since:"1.19.0",_ui5validator:"String"}],events:[{name:"change",_ui5privacy:"public",type:{text:"CustomEvent"},description:"The event is fired when the value changes."}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-rating-indicator",customElement:!0,_ui5since:"1.0.0-rc.8",_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"RatingIndicator",module:"dist/RatingIndicator.js"}},{kind:"custom-element-definition",name:"ui5-rating-indicator",declaration:{name:"RatingIndicator",module:"dist/RatingIndicator.js"}}]},{kind:"javascript-module",path:"dist/ResponsivePopover.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>
The <code>ui5-responsive-popover</code> acts as a Popover on desktop and tablet, while on phone it acts as a Dialog.
The component improves tremendously the user experience on mobile.

<h3>Usage</h3>
Use it when you want to make sure that all the content is visible on any device.`,name:"ResponsivePopover",cssParts:[{description:"Used to style the header of the component",name:"header"},{description:"Used to style the content of the component",name:"content"},{description:"Used to style the footer of the component",name:"footer"}],members:[{kind:"method",name:"showAt",return:{type:{text:"Promise<void>"},description:"Resolves when the responsive popover is open"},parameters:[{name:"opener",type:{text:"HTMLElement"},description:"the element that the popover is shown at",_ui5privacy:"public"},{name:"preventInitialFocus",default:"false",description:"Prevents applying the focus inside the popup",optional:!0,_ui5privacy:"public",type:{text:"boolean"}}],description:"Shows popover on desktop and dialog on mobile.",privacy:"public",inheritedFrom:{name:"Popover",module:"dist/Popover.js"}},{kind:"method",name:"close",return:{type:{text:"void"}},description:"Closes the popover/dialog.",privacy:"public",inheritedFrom:{name:"Popup",module:"dist/Popup.js"}},{kind:"method",name:"isOpen",return:{type:{text:"boolean"}},description:"Tells if the responsive popover is open.",privacy:"public",inheritedFrom:{name:"Popup",module:"dist/Popup.js"}},{kind:"field",name:"headerText",type:{text:"string"},description:`Defines the header text.
<br><br>
<b>Note:</b> If <code>header</code> slot is provided, the <code>headerText</code> is ignored.`,default:'""',privacy:"public",_ui5validator:"String",inheritedFrom:{name:"Popover",module:"dist/Popover.js"}},{kind:"field",name:"placementType",type:{text:"PopoverPlacementType",references:[{name:"PopoverPlacementType",package:"@ui5/webcomponents",module:"dist/types/PopoverPlacementType.js"}]},description:"Determines on which side the component is placed at.",default:'"Right"',privacy:"public",_ui5validator:"PopoverPlacementType",inheritedFrom:{name:"Popover",module:"dist/Popover.js"}},{kind:"field",name:"horizontalAlign",type:{text:"PopoverHorizontalAlign",references:[{name:"PopoverHorizontalAlign",package:"@ui5/webcomponents",module:"dist/types/PopoverHorizontalAlign.js"}]},description:"Determines the horizontal alignment of the component.",default:'"Center"',privacy:"public",_ui5validator:"PopoverHorizontalAlign",inheritedFrom:{name:"Popover",module:"dist/Popover.js"}},{kind:"field",name:"verticalAlign",type:{text:"PopoverVerticalAlign",references:[{name:"PopoverVerticalAlign",package:"@ui5/webcomponents",module:"dist/types/PopoverVerticalAlign.js"}]},description:"Determines the vertical alignment of the component.",default:'"Center"',privacy:"public",_ui5validator:"PopoverVerticalAlign",inheritedFrom:{name:"Popover",module:"dist/Popover.js"}},{kind:"field",name:"modal",type:{text:"boolean"},description:`Defines whether the component should close when
clicking/tapping outside of the popover.
If enabled, it blocks any interaction with the background.`,default:"false",privacy:"public",_ui5validator:"Boolean",inheritedFrom:{name:"Popover",module:"dist/Popover.js"}},{kind:"field",name:"hideBackdrop",type:{text:"boolean"},description:"Defines whether the block layer will be shown if modal property is set to true.",default:"false",privacy:"public",_ui5since:"1.0.0-rc.10",_ui5validator:"Boolean",inheritedFrom:{name:"Popover",module:"dist/Popover.js"}},{kind:"field",name:"hideArrow",type:{text:"boolean"},description:"Determines whether the component arrow is hidden.",default:"false",privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"Boolean",inheritedFrom:{name:"Popover",module:"dist/Popover.js"}},{kind:"field",name:"allowTargetOverlap",type:{text:"boolean"},description:`Determines if there is no enough space, the component can be placed
over the target.`,default:"false",privacy:"public",_ui5validator:"Boolean",inheritedFrom:{name:"Popover",module:"dist/Popover.js"}},{kind:"field",name:"opener",type:{text:"HTMLElement | string | undefined"},description:"Defines the ID or DOM Reference of the element that the popover is shown at",privacy:"public",default:"undefined",_ui5since:"1.2.0",_ui5validator:"DOMReference",inheritedFrom:{name:"Popover",module:"dist/Popover.js"}},{kind:"field",name:"initialFocus",type:{text:"string"},description:"Defines the ID of the HTML Element, which will get the initial focus.",default:'""',privacy:"public",_ui5validator:"String",inheritedFrom:{name:"Popup",module:"dist/Popup.js"}},{kind:"field",name:"preventFocusRestore",type:{text:"boolean"},description:`Defines if the focus should be returned to the previously focused element,
when the popup closes.`,default:"false",privacy:"public",_ui5since:"1.0.0-rc.8",_ui5validator:"Boolean",inheritedFrom:{name:"Popup",module:"dist/Popup.js"}},{kind:"field",name:"open",type:{text:"boolean"},description:"Indicates if the element is open",privacy:"public",default:"false",_ui5since:"1.2.0",_ui5validator:"Boolean",inheritedFrom:{name:"Popup",module:"dist/Popup.js"}},{kind:"field",name:"accessibleName",type:{text:"string | undefined"},description:"Defines the accessible name of the component.",default:"undefined",privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"String",inheritedFrom:{name:"Popup",module:"dist/Popup.js"}},{kind:"field",name:"accessibleNameRef",type:{text:"string"},description:"Defines the IDs of the elements that label the component.",default:'""',privacy:"public",_ui5since:"1.1.0",_ui5validator:"String",inheritedFrom:{name:"Popup",module:"dist/Popup.js"}},{kind:"field",name:"accessibleRole",type:{text:"PopupAccessibleRole",references:[{name:"PopupAccessibleRole",package:"@ui5/webcomponents",module:"dist/types/PopupAccessibleRole.js"}]},description:"Allows setting a custom role.",default:'"Dialog"',privacy:"public",_ui5since:"1.10.0",_ui5validator:"PopupAccessibleRole",inheritedFrom:{name:"Popup",module:"dist/Popup.js"}},{kind:"method",name:"applyFocus",return:{type:{text:"Promise<void>"},description:"Promise that resolves when the focus is applied"},description:`Focuses the element denoted by <code>initialFocus</code>, if provided,
or the first focusable element otherwise.`,privacy:"public",inheritedFrom:{name:"Popup",module:"dist/Popup.js"}}],superclass:{name:"Popover",package:"@ui5/webcomponents",module:"dist/Popover.js"},tagName:"ui5-responsive-popover",customElement:!0,_ui5since:"1.0.0-rc.6",_ui5privacy:"public",events:[{name:"before-open",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening. <b>This event does not bubble.</b>",_ui5allowPreventDefault:!0,inheritedFrom:{name:"Popup",module:"dist/Popup.js"}},{name:"after-open",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired after the component is opened. <b>This event does not bubble.</b>",inheritedFrom:{name:"Popup",module:"dist/Popup.js"}},{name:"before-close",_ui5privacy:"public",type:{text:"CustomEvent<PopupBeforeCloseEventDetail>",references:[{name:"PopupBeforeCloseEventDetail",package:"@ui5/webcomponents",module:"dist/Popup.js"}]},description:"Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. <b>This event does not bubble.</b>",_ui5allowPreventDefault:!0,_ui5parameters:[{type:{text:"boolean"},name:"escPressed",_ui5privacy:"public",description:"Indicates that <code>ESC</code> key has triggered the event."}],inheritedFrom:{name:"Popup",module:"dist/Popup.js"}},{name:"after-close",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired after the component is closed. <b>This event does not bubble.</b>",inheritedFrom:{name:"Popup",module:"dist/Popup.js"}}],slots:[{name:"header",description:"Defines the header HTML Element.",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"},{name:"footer",description:"Defines the footer HTML Element.",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"},{name:"default",description:"Defines the content of the Popup.",_ui5propertyName:"content",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"}]}],exports:[{kind:"js",name:"default",declaration:{name:"ResponsivePopover",module:"dist/ResponsivePopover.js"}},{kind:"custom-element-definition",name:"ui5-responsive-popover",declaration:{name:"ResponsivePopover",module:"dist/ResponsivePopover.js"}}]},{kind:"javascript-module",path:"dist/SegmentedButton.js",declarations:[{kind:"interface",name:"ISegmentedButtonItem",description:"Interface for components that may be slotted inside <code>ui5-segmented-button</code> as items",_ui5privacy:"public"},{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-segmented-button</code> shows a group of items. When the user clicks or taps
one of the items, it stays in a pressed state. It automatically resizes the items
to fit proportionally within the component. When no width is set, the component uses the available width.
<br><br>
<b>Note:</b> There can be just one selected <code>item</code> at a time.

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/SegmentedButton";</code>`,name:"SegmentedButton",slots:[{name:"default",description:`Defines the items of <code>ui5-segmented-button</code>.
<br><br>
<b>Note:</b> Multiple items are allowed.
<br><br>
<b>Note:</b> Use the <code>ui5-segmented-button-item</code> for the intended design.`,_ui5propertyName:"items",_ui5type:{text:"Array<ISegmentedButtonItem>",references:[{name:"ISegmentedButtonItem",package:"@ui5/webcomponents",module:"dist/SegmentedButton.js"}]},_ui5privacy:"public"}],members:[{kind:"field",name:"accessibleName",type:{text:"string | undefined"},description:"Defines the accessible ARIA name of the component.",default:"undefined",privacy:"public",_ui5since:"1.0.3",_ui5validator:"String"},{kind:"field",name:"mode",type:{text:"SegmentedButtonMode",references:[{name:"SegmentedButtonMode",package:"@ui5/webcomponents",module:"dist/types/SegmentedButtonMode.js"}]},description:`Defines the component selection mode.

<br><br>
<b>The available values are:</b>

<ul>
<li><code>SingleSelect</code></li>
<li><code>MultiSelect</code></li>
</ul>`,default:'"SingleSelect"',privacy:"public",_ui5since:"1.14.0",_ui5validator:"SegmentedButtonMode"},{kind:"field",name:"selectedItem",type:{text:"ISegmentedButtonItem | undefined",references:[{name:"ISegmentedButtonItem",package:"@ui5/webcomponents",module:"dist/SegmentedButton.js"}]},description:"Currently selected item.",deprecated:`since 1.14.0. This method will be removed in the next major release.
Please use the <code>selectedItems</code> property instead.`,privacy:"public",default:"undefined",readonly:!0},{kind:"field",name:"selectedItems",type:{text:"Array<ISegmentedButtonItem>",references:[{name:"ISegmentedButtonItem",package:"@ui5/webcomponents",module:"dist/SegmentedButton.js"}]},description:"Returns an array of the currently selected items.",privacy:"public",default:"[]",readonly:!0,_ui5since:"1.14.0"}],events:[{name:"selection-change",_ui5privacy:"public",type:{text:"CustomEvent<SegmentedButtonSelectionChangeEventDetail>",references:[{name:"SegmentedButtonSelectionChangeEventDetail",package:"@ui5/webcomponents",module:"dist/SegmentedButton.js"}]},description:"Fired when the selected item changes.",_ui5parameters:[{type:{text:"ISegmentedButtonItem",references:[{name:"ISegmentedButtonItem",package:"@ui5/webcomponents",module:"dist/SegmentedButton.js"}]},name:"selectedItem",_ui5privacy:"public",description:"the pressed item.",deprecated:"deprecated since 1.14.0 and will be removed in the next major release, use the <code>selectedItems</code> parameter instead."},{type:{text:"Array<ISegmentedButtonItem>",references:[{name:"ISegmentedButtonItem",package:"@ui5/webcomponents",module:"dist/SegmentedButton.js"}]},name:"selectedItems",_ui5privacy:"public",description:"an array of selected items.",_ui5since:"1.14.0"}]}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-segmented-button",customElement:!0,_ui5since:"1.0.0-rc.6",_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"SegmentedButton",module:"dist/SegmentedButton.js"}},{kind:"custom-element-definition",name:"ui5-segmented-button",declaration:{name:"SegmentedButton",module:"dist/SegmentedButton.js"}}]},{kind:"javascript-module",path:"dist/SegmentedButtonItem.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

Users can use the <code>ui5-segmented-button-item</code> as part of a <code>ui5-segmented-button</code>.
<br><br>
Clicking or tapping on a <code>ui5-segmented-button-item</code> changes its state to <code>pressed</code>.
The item returns to its initial state when the user clicks or taps on it again.
By applying additional custom CSS-styling classes, apps can give a different style to any
<code>ui5-segmented-button-item</code>.

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/SegmentedButtonItem";</code>`,name:"SegmentedButtonItem",members:[{kind:"field",name:"design",type:{text:"ButtonDesign",references:[{name:"ButtonDesign",package:"@ui5/webcomponents",module:"dist/types/ButtonDesign.js"}]},description:"<b>Note:</b> The property is inherited and not supported. If set, it won't take any effect.",default:'"Default"',privacy:"public",_ui5validator:"ButtonDesign",inheritedFrom:{name:"Button",module:"dist/Button.js"}},{kind:"field",name:"iconEnd",type:{text:"boolean"},description:"<b>Note:</b> The property is inherited and not supported. If set, it won't take any effect.",default:"false",privacy:"public",_ui5validator:"Boolean",inheritedFrom:{name:"Button",module:"dist/Button.js"}},{kind:"field",name:"submits",type:{text:"boolean"},description:"<b>Note:</b> The property is inherited and not supported. If set, it won't take any effect.",default:"false",privacy:"public",deprecated:'Set the "type" property to "Submit" to achieve the same result. The "submits" property is ignored if "type" is set to any value other than "Button".',_ui5validator:"Boolean",inheritedFrom:{name:"Button",module:"dist/Button.js"}},{kind:"field",name:"pressed",type:{text:"boolean"},description:"Determines whether the component is displayed as pressed.",default:"false",privacy:"public",_ui5validator:"Boolean",inheritedFrom:{name:"ToggleButton",module:"dist/ToggleButton.js"}},{kind:"field",name:"disabled",type:{text:"boolean"},description:`Defines whether the component is disabled.
A disabled component can't be pressed or
focused, and it is not in the tab chain.`,default:"false",privacy:"public",_ui5validator:"Boolean",inheritedFrom:{name:"Button",module:"dist/Button.js"}},{kind:"field",name:"icon",type:{text:"string"},description:`Defines the icon, displayed as graphical element within the component.
The SAP-icons font provides numerous options.
<br><br>
Example:

See all the available icons within the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.`,default:'""',privacy:"public",_ui5validator:"String",inheritedFrom:{name:"Button",module:"dist/Button.js"}},{kind:"field",name:"tooltip",type:{text:"string"},description:`Defines the tooltip of the component.
<br>
<b>Note:</b> A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.`,default:'""',privacy:"public",_ui5since:"1.2.0",_ui5validator:"String",inheritedFrom:{name:"Button",module:"dist/Button.js"}},{kind:"field",name:"accessibleName",type:{text:"string | undefined"},description:"Defines the accessible ARIA name of the component.",default:"undefined",privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"String",inheritedFrom:{name:"Button",module:"dist/Button.js"}},{kind:"field",name:"accessibleNameRef",type:{text:"string"},description:"Receives id(or many ids) of the elements that label the component.",default:'""',privacy:"public",_ui5since:"1.1.0",_ui5validator:"String",inheritedFrom:{name:"Button",module:"dist/Button.js"}},{kind:"field",name:"accessibilityAttributes",type:{text:"AccessibilityAttributes",references:[{name:"AccessibilityAttributes",package:"@ui5/webcomponents",module:"dist/Button.js"}]},description:`An object of strings that defines several additional accessibility attribute values
for customization depending on the use case.

It supports the following fields:

<ul>
		<li><code>expanded</code>: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed. Accepts the following string values:
		<ul>
			<li><code>true</code></li>
			<li><code>false</code></li>
		</ul>
		</li>
		<li><code>hasPopup</code>: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button. Accepts the following string values:
			<ul>
			<li><code>Dialog</code></li>
			<li><code>Grid</code></li>
			<li><code>Listbox</code></li>
			<li><code>Menu</code></li>
			<li><code>Tree</code></li>
			</ul>
		</li>
		<li><code>controls</code>: Identifies the element (or elements) whose contents or presence are controlled by the button element. Accepts a string value.</li>
</ul>`,privacy:"public",default:"{}",_ui5since:"1.2.0",_ui5validator:"Object",inheritedFrom:{name:"Button",module:"dist/Button.js"}},{kind:"field",name:"type",type:{text:"ButtonType",references:[{name:"ButtonType",package:"@ui5/webcomponents",module:"dist/types/ButtonType.js"}]},description:`Defines whether the button has special form-related functionality.

<br><br>
<b>Note:</b> For the <code>type</code> property to have effect, you must add the following import to your project:
<code>import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";</code>`,default:'"Button"',privacy:"public",_ui5since:"1.15.0",_ui5validator:"ButtonType",inheritedFrom:{name:"Button",module:"dist/Button.js"}}],superclass:{name:"ToggleButton",package:"@ui5/webcomponents",module:"dist/ToggleButton.js"},tagName:"ui5-segmented-button-item",customElement:!0,_ui5privacy:"public",_ui5implements:[{name:"ISegmentedButtonItem",package:"@ui5/webcomponents",module:"dist/SegmentedButton.js"}],events:[{name:"click",_ui5privacy:"public",type:{text:"Event"},description:`Fired when the component is activated either with a
mouse/tap or by using the Enter or Space key.
<br><br>
<b>Note:</b> The event will not be fired if the <code>disabled</code>
property is set to <code>true</code>.`,inheritedFrom:{name:"Button",module:"dist/Button.js"}}],slots:[{name:"default",description:`Defines the text of the component.
<br><br>
<b>Note:</b> Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,_ui5propertyName:"text",_ui5type:{text:"Array<Node>"},_ui5privacy:"public"}],cssParts:[{description:"Used to style the native button element",name:"button"}]}],exports:[{kind:"js",name:"default",declaration:{name:"SegmentedButtonItem",module:"dist/SegmentedButtonItem.js"}},{kind:"custom-element-definition",name:"ui5-segmented-button-item",declaration:{name:"SegmentedButtonItem",module:"dist/SegmentedButtonItem.js"}}]},{kind:"javascript-module",path:"dist/Select.js",declarations:[{kind:"interface",name:"IOption",description:"Interface for components that may be slotted inside <code>ui5-select</code> as options",_ui5privacy:"public"},{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-select</code> component is used to create a drop-down list.

<h3>Usage</h3>

There are two main usages of the <code>ui5-select></code>.

1. With Option (<code>ui5-option</code>) web component:
<br>
The available options of the Select are defined by using the Option component.
The Option comes with predefined design and layout, including <code>icon</code>, <code>text</code> and <code>additional-text</code>.
<br><br>

2. With SelectMenu (<code>ui5-select-menu</code>) and SelectMenuOption (<code>ui5-select-menu-option</code>) web components:
<br>
The SelectMenu can be used as alternative to define the Select's dropdown
and can be used via the <code>menu</code> property of the Select to reference SelectMenu by its ID.
The component gives the possibility to customize the Select's dropdown
by slotting entirely custom options (via the SelectMenuOption component) and adding custom styles.

<b>Note:</b> SelectMenu is a popover and placing it top-level in the HTML page is recommended,
because some page styles (for example transitions) can misplace the SelectMenu.

<h3>Keyboard Handling</h3>
The <code>ui5-select</code> provides advanced keyboard handling.
<br>
<ul>
<li>[F4, ALT+UP, ALT+DOWN, SPACE, ENTER] - Opens/closes the drop-down.</li>
<li>[UP, DOWN] - If the drop-down is closed - changes selection to the next or the previous option. If the drop-down is opened - moves focus to the next or the previous option.</li>
<li>[SPACE, ENTER] - If the drop-down is opened - selects the focused option.</li>
<li>[ESC] - Closes the drop-down without changing the selection.</li>
<li>[HOME] - Navigates to first option</li>
<li>[END] - Navigates to the last option</li>
</ul>
<br>

<h3>ES6 Module Import</h3>
<code>import "@ui5/webcomponents/dist/Select";</code>
<br>
<code>import "@ui5/webcomponents/dist/Option";</code> (comes with <code>ui5-select</code>)`,name:"Select",slots:[{name:"default",description:`Defines the component options.

<br><br>
<b>Note:</b> Only one selected option is allowed.
If more than one option is defined as selected, the last one would be considered as the selected one.

<br><br>
<b>Note:</b> Use the <code>ui5-option</code> component to define the desired options.`,_ui5propertyName:"options",_ui5type:{text:"Array<IOption>",references:[{name:"IOption",package:"@ui5/webcomponents",module:"dist/Select.js"}]},_ui5privacy:"public"},{name:"valueStateMessage",description:`Defines the value state message that will be displayed as pop up under the component.
<br><br>

<b>Note:</b> If not specified, a default text (in the respective language) will be displayed.
<br><br>
<b>Note:</b> The <code>valueStateMessage</code> would be displayed,
when the component is in <code>Information</code>, <code>Warning</code> or <code>Error</code> value state.
<br><br>
<b>Note:</b> If the component has <code>suggestionItems</code>,
the <code>valueStateMessage</code> would be displayed as part of the same popover, if used on desktop, or dialog - on phone.`,_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"},{name:"label",description:`Defines the HTML element that will be displayed in the component input part,
representing the selected option.
<br><br>

<b>Note:</b> If not specified and <code>ui5-select-menu-option</code> is used,
either the option's <code>display-text</code> or its textContent will be displayed.
<br><br>

<b>Note:</b> If not specified and <code>ui5-option</code> is used,
the option's textContent will be displayed.`,_ui5since:"1.17.0",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"}],members:[{kind:"field",name:"menu",type:{text:"HTMLElement | string | undefined"},description:`Defines a reference (ID or DOM element) of component's menu of options
as alternative to define the select's dropdown.
<br><br>
<b>Note:</b> Usage of <code>ui5-select-menu</code> is recommended.`,default:"undefined",privacy:"public",_ui5since:"1.17.0",_ui5validator:"DOMReference"},{kind:"field",name:"disabled",type:{text:"boolean"},description:`Defines whether the component is in disabled state.
<br><br>
<b>Note:</b> A disabled component is noninteractive.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"name",type:{text:"string"},description:`Determines the name with which the component will be submitted in an HTML form.
The value of the component will be the value of the currently selected <code>ui5-option</code>.

<br><br>
<b>Important:</b> For the <code>name</code> property to have effect, you must add the following import to your project:
<code>import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";</code>

<br><br>
<b>Note:</b> When set, a native <code>input</code> HTML element
will be created inside the <code>ui5-select</code> so that it can be submitted as
part of an HTML form. Do not use this property unless you need to submit a form.`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"valueState",type:{text:"ValueState",references:[{name:"ValueState",package:"@ui5/webcomponents-base",module:"dist/types/ValueState.js"}]},description:"Defines the value state of the component.",default:'"None"',privacy:"public",_ui5validator:"ValueState"},{kind:"field",name:"required",type:{text:"boolean"},description:"Defines whether the component is required.",default:"false",privacy:"public",_ui5since:"1.0.0-rc.9",_ui5validator:"Boolean"},{kind:"field",name:"readonly",type:{text:"boolean"},description:`Defines whether the component is read-only.
<br><br>
<b>Note:</b> A read-only component is not editable,
but still provides visual feedback upon user interaction.`,default:"false",privacy:"public",_ui5since:"1.21.0",_ui5validator:"Boolean"},{kind:"field",name:"accessibleName",type:{text:"string"},description:"Defines the accessible ARIA name of the component.",privacy:"public",default:'""',_ui5since:"1.0.0-rc.9",_ui5validator:"String"},{kind:"field",name:"accessibleNameRef",type:{text:"string"},description:"Receives id(or many ids) of the elements that label the select.",default:'""',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"String"},{kind:"field",name:"value",description:`Defines the value of the component:
<br>
- when get - returns the value of the component, e.g. the <code>value</code> property of the selected option or its text content.
<br>
- when set - selects the option with matching <code>value</code> property or text content.
<br><br>
<b>Note:</b> If the given value does not match any existing option,
the first option will get selected.`,privacy:"public",default:'""',type:{text:"string"},_ui5since:"1.20.0",_ui5formProperty:!0,_ui5formEvents:"change,liveChange"},{kind:"field",name:"selectedOption",type:{text:"IOption | undefined",references:[{name:"IOption",package:"@ui5/webcomponents",module:"dist/Select.js"}]},description:"Currently selected <code>ui5-option</code> element.",privacy:"public",default:"undefined",readonly:!0}],events:[{name:"change",_ui5privacy:"public",type:{text:"CustomEvent<SelectChangeEventDetail>",references:[{name:"SelectChangeEventDetail",package:"@ui5/webcomponents",module:"dist/Select.js"}]},description:"Fired when the selected option changes.",_ui5allowPreventDefault:!0,_ui5parameters:[{type:{text:"IOption",references:[{name:"IOption",package:"@ui5/webcomponents",module:"dist/Select.js"}]},name:"selectedOption",_ui5privacy:"public",description:"the selected option."}]},{name:"live-change",_ui5privacy:"public",type:{text:"CustomEvent<SelectLiveChangeEventDetail>",references:[{name:"SelectLiveChangeEventDetail",package:"@ui5/webcomponents",module:"dist/Select.js"}]},description:`Fired when the user navigates through the options, but the selection is not finalized,
or when pressing the ESC key to revert the current selection.`,_ui5since:"1.17.0",_ui5parameters:[{type:{text:"IOption",references:[{name:"IOption",package:"@ui5/webcomponents",module:"dist/Select.js"}]},name:"selectedOption",_ui5privacy:"public",description:"the selected option."}]},{name:"open",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired after the component's dropdown menu opens."},{name:"close",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired after the component's dropdown menu closes."}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-select",customElement:!0,_ui5since:"0.8.0",_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"Select",module:"dist/Select.js"}},{kind:"custom-element-definition",name:"ui5-select",declaration:{name:"Select",module:"dist/Select.js"}}]},{kind:"javascript-module",path:"dist/SelectMenu.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-select-menu</code> is meant to be used together with the <code>ui5-select</code> component as alternative
to define the select's dropdown. It acts as a popover on desktop and tablet, and as a Dialog on phone.
</br></br>
The component gives the possibility to the user to customize the <code>ui5-select</code>'s dropdown
by slotting custom options and adding custom styles.

<h3>Usage</h3>

To use <code>ui5-select</code> with a <code>ui5-select-menu</code>,
you need to set the <code>ui5-select</code> <code>menu</code> property to reference <code>ui5-select-menu</code> either by ID or DOM reference.
</br></br>

For the <code>ui5-select-menu</code>
<h3>ES6 Module Import</h3>

<code>import @ui5/webcomponents/dist/SelectMenu.js";</code>`,name:"SelectMenu",slots:[{name:"default",description:"Defines the options of the component.",_ui5propertyName:"options",_ui5type:{text:"Array<IOption>",references:[{name:"IOption",package:"@ui5/webcomponents",module:"dist/Select.js"}]},_ui5privacy:"public"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-select-menu",customElement:!0,_ui5since:"1.17.0",_ui5privacy:"public",members:[]}],exports:[{kind:"js",name:"default",declaration:{name:"SelectMenu",module:"dist/SelectMenu.js"}},{kind:"custom-element-definition",name:"ui5-select-menu",declaration:{name:"SelectMenu",module:"dist/SelectMenu.js"}}]},{kind:"javascript-module",path:"dist/SelectMenuOption.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>
The <code>ui5-select-menu-option</code> component represents an option in the <code>ui5-select-menu</code>.

<h3>Usage</h3>

For the <code>ui5-select-menu-option</code>
<h3>ES6 Module Import</h3>

<code>import @ui5/webcomponents/dist/SelectMenuOption.js";</code>`,name:"SelectMenuOption",slots:[{description:"Defines the content of the component.",name:"default",_ui5privacy:"public",_ui5type:{text:"Array<Node>"}},{name:"deleteButton",description:"<b>Note:</b> The slot is inherited and not supported. If set, it won't take any effect.",deprecated:!0,_ui5type:{text:"Array<IButton>",references:[{name:"IButton",package:"@ui5/webcomponents",module:"dist/Button.js"}]},_ui5privacy:"public"}],members:[{kind:"field",name:"displayText",type:{text:"string"},description:`Defines the text, displayed inside the <code>ui5-select</code> input filed
when the option gets selected.`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"disabled",type:{text:"boolean"},description:`Defines whether the component is in disabled state.
<br><br>
<b>Note:</b> A disabled component is hidden.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"value",type:{text:"string"},description:`Defines the value of the <code>ui5-select</code> inside an HTML Form element when this component is selected.
For more information on HTML Form support, see the <code>name</code> property of <code>ui5-select</code>.`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"type",type:{text:"ListItemType",references:[{name:"ListItemType",package:"@ui5/webcomponents",module:"dist/types/ListItemType.js"}]},description:"<b>Note:</b> The property is inherited and not supported. If set, it won't take any effect.",default:'"Active"',privacy:"public",_ui5validator:"ListItemType",inheritedFrom:{name:"ListItem",module:"dist/ListItem.js"},deprecated:!0},{kind:"field",name:"accessibilityAttributes",type:{text:"AccessibilityAttributes",references:[{name:"AccessibilityAttributes",package:"@ui5/webcomponents",module:"dist/ListItem.js"}]},description:"<b>Note:</b> The property is inherited and not supported. If set, it won't take any effect.",default:"{}",privacy:"public",_ui5validator:"Object",inheritedFrom:{name:"ListItem",module:"dist/ListItem.js"},deprecated:!0},{kind:"field",name:"navigated",type:{text:"boolean"},description:"<b>Note:</b> The property is inherited and not supported. If set, it won't take any effect.",default:"false",privacy:"public",_ui5validator:"Boolean",inheritedFrom:{name:"ListItem",module:"dist/ListItem.js"},deprecated:!0},{kind:"field",name:"accessibleName",type:{text:"string"},description:`Defines the text alternative of the component.
Note: If not provided a default text alternative will be set, if present.`,default:'""',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"String",inheritedFrom:{name:"CustomListItem",module:"dist/CustomListItem.js"}},{kind:"field",name:"selected",type:{text:"boolean"},description:"Defines the selected state of the <code>ListItem</code>.",default:"false",privacy:"public",_ui5validator:"Boolean",inheritedFrom:{name:"ListItemBase",module:"dist/ListItemBase.js"}}],superclass:{name:"CustomListItem",package:"@ui5/webcomponents",module:"dist/CustomListItem.js"},tagName:"ui5-select-menu-option",customElement:!0,_ui5since:"1.17.0",_ui5privacy:"public",_ui5implements:[{name:"IOption",package:"@ui5/webcomponents",module:"dist/Select.js"}],events:[{name:"detail-click",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired when the user clicks on the detail button when type is <code>Detail</code>.",inheritedFrom:{name:"ListItem",module:"dist/ListItem.js"}}],cssParts:[{description:"Used to style the main li tag of the list item",name:"native-li"},{description:"Used to style the content area of the list item",name:"content"},{description:"Used to style the button rendered when the list item is of type detail",name:"detail-button"},{description:"Used to style the button rendered when the list item is in delete mode",name:"delete-button"},{description:"Used to style the radio button rendered when the list item is in single selection mode",name:"radio"},{description:"Used to style the checkbox rendered when the list item is in multiple selection mode",name:"checkbox"}]}],exports:[{kind:"js",name:"default",declaration:{name:"SelectMenuOption",module:"dist/SelectMenuOption.js"}},{kind:"custom-element-definition",name:"ui5-select-menu-option",declaration:{name:"SelectMenuOption",module:"dist/SelectMenuOption.js"}}]},{kind:"javascript-module",path:"dist/Slider.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>
The Slider component represents a numerical range and a handle (grip).
The purpose of the component is to enable visual selection of a value in
a continuous numerical range by moving an adjustable handle.

<h3>Structure</h3>
The most important properties of the Slider are:
<ul>
<li>min - The minimum value of the slider range.</li>
<li>max - The maximum value of the slider range.</li>
<li>value - The current value of the slider range.</li>
<li>step - Determines the increments in which the slider will move.</li>
<li>showTooltip - Determines if a tooltip should be displayed above the handle.</li>
<li>showTickmarks - Displays a visual divider between the step values.</li>
<li>labelInterval - Labels some or all of the tickmarks with their values.</li>
</ul>

<h3>Usage</h3>
The most common use case is to select values on a continuous numerical scale (e.g. temperature, volume, etc. ).

<h3>Responsive Behavior</h3>
The <code>ui5-slider</code> component adjusts to the size of its parent container by recalculating and
resizing the width of the control. You can move the slider handle in several different ways:
<ul>
<li>Drag and drop the handle to the desired value.</li>
<li>Click/tap on the range bar to move the handle to that location.</li>
</ul>

<h3>Keyboard Handling</h3>

<ul>
<li><code>Left or Down Arrow</code> - Moves the handle one step to the left, effectively decreasing the component's value by <code>step</code> amount;</li>
<li><code>Right or Up Arrow</code> - Moves the handle one step to the right, effectively increasing the component's value by <code>step</code> amount;</li>
<li><code>Left or Down Arrow + Ctrl/Cmd</code> - Moves the handle to the left with step equal to 1/10th of the entire range, effectively decreasing the component's value by 1/10th of the range;</li>
<li><code>Right or Up Arrow + Ctrl/Cmd</code> - Moves the handle to the right with step equal to 1/10th of the entire range, effectively increasing the component's value by 1/10th of the range;</li>
<li><code>Plus</code> - Same as <code>Right or Up Arrow</code>;</li>
<li><code>Minus</code> - Same as <code>Left or Down Arrow</code>;</li>
<li><code>Home</code> - Moves the handle to the beginning of the range;</li>
<li><code>End</code> - Moves the handle to the end of the range;</li>
<li><code>Page Up</code> - Same as <code>Right or Up + Ctrl/Cmd</code>;</li>
<li><code>Page Down</code> - Same as <code>Left or Down + Ctrl/Cmd</code>;</li>
<li><code>Escape</code> - Resets the value property after interaction, to the position prior the component's focusing;</li>
</ul>

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/Slider";</code>`,name:"Slider",cssParts:[{description:"Used to style the progress container, the horizontal bar that visually represents the range between the minimum and maximum values, of the <code>ui5-slider</code>.",name:"progress-container"},{description:"Used to style the progress bar, which shows the progress of the <code>ui5-slider</code>.",name:"progress-bar"},{description:"Used to style the handle of the <code>ui5-slider</code>.",name:"handle"}],members:[{kind:"field",name:"value",type:{text:"number"},description:"Current value of the slider",default:"0",privacy:"public",_ui5validator:"Float",_ui5formProperty:!0,_ui5formEvents:"change,input"},{kind:"field",name:"min",type:{text:"number"},description:"Defines the minimum value of the slider.",default:"0",privacy:"public",_ui5validator:"Float",inheritedFrom:{name:"SliderBase",module:"dist/SliderBase.js"}},{kind:"field",name:"max",type:{text:"number"},description:"Defines the maximum value of the slider.",default:"100",privacy:"public",_ui5validator:"Float",inheritedFrom:{name:"SliderBase",module:"dist/SliderBase.js"}},{kind:"field",name:"step",type:{text:"number"},description:`Defines the size of the slider's selection intervals (e.g. min = 0, max = 10, step = 5 would result in possible selection of the values 0, 5, 10).
<br><br>
<b>Note:</b> If set to 0 the slider handle movement is disabled. When negative number or value other than a number, the component fallbacks to its default value.`,default:"1",privacy:"public",_ui5validator:"Float",inheritedFrom:{name:"SliderBase",module:"dist/SliderBase.js"}},{kind:"field",name:"labelInterval",type:{text:"number"},description:`Displays a label with a value on every N-th step.
<br><br>
<b>Note:</b> The step and tickmarks properties must be enabled.
Example - if the step value is set to 2 and the label interval is also specified to 2 - then every second
tickmark will be labelled, which means every 4th value number.`,default:"0",privacy:"public",_ui5validator:"Integer",inheritedFrom:{name:"SliderBase",module:"dist/SliderBase.js"}},{kind:"field",name:"showTickmarks",type:{text:"boolean"},description:`Enables tickmarks visualization for each step.
<br><br>
<b>Note:</b> The step must be a positive number.`,default:"false",privacy:"public",_ui5validator:"Boolean",inheritedFrom:{name:"SliderBase",module:"dist/SliderBase.js"}},{kind:"field",name:"showTooltip",type:{text:"boolean"},description:"Enables handle tooltip displaying the current value.",default:"false",privacy:"public",_ui5validator:"Boolean",inheritedFrom:{name:"SliderBase",module:"dist/SliderBase.js"}},{kind:"field",name:"disabled",type:{text:"boolean"},description:"Defines whether the slider is in disabled state.",default:"false",privacy:"public",_ui5validator:"Boolean",inheritedFrom:{name:"SliderBase",module:"dist/SliderBase.js"}},{kind:"field",name:"accessibleName",type:{text:"string"},description:"Defines the accessible ARIA name of the component.",default:'""',privacy:"public",_ui5since:"1.4.0",_ui5validator:"String",inheritedFrom:{name:"SliderBase",module:"dist/SliderBase.js"}}],superclass:{name:"SliderBase",package:"@ui5/webcomponents",module:"dist/SliderBase.js"},tagName:"ui5-slider",customElement:!0,_ui5since:"1.0.0-rc.11",_ui5privacy:"public",events:[{name:"change",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired when the value changes and the user has finished interacting with the slider.",inheritedFrom:{name:"SliderBase",module:"dist/SliderBase.js"}},{name:"input",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired when the value changes due to user interaction that is not yet finished - during mouse/touch dragging.",inheritedFrom:{name:"SliderBase",module:"dist/SliderBase.js"}}]}],exports:[{kind:"js",name:"default",declaration:{name:"Slider",module:"dist/Slider.js"}},{kind:"custom-element-definition",name:"ui5-slider",declaration:{name:"Slider",module:"dist/Slider.js"}}]},{kind:"javascript-module",path:"dist/SliderBase.js",declarations:[{kind:"class",description:'<h3 class="comment-api-title">Overview</h3>',name:"SliderBase",members:[{kind:"field",name:"min",type:{text:"number"},description:"Defines the minimum value of the slider.",default:"0",privacy:"public",_ui5validator:"Float"},{kind:"field",name:"max",type:{text:"number"},description:"Defines the maximum value of the slider.",default:"100",privacy:"public",_ui5validator:"Float"},{kind:"field",name:"step",type:{text:"number"},description:`Defines the size of the slider's selection intervals (e.g. min = 0, max = 10, step = 5 would result in possible selection of the values 0, 5, 10).
<br><br>
<b>Note:</b> If set to 0 the slider handle movement is disabled. When negative number or value other than a number, the component fallbacks to its default value.`,default:"1",privacy:"public",_ui5validator:"Float"},{kind:"field",name:"labelInterval",type:{text:"number"},description:`Displays a label with a value on every N-th step.
<br><br>
<b>Note:</b> The step and tickmarks properties must be enabled.
Example - if the step value is set to 2 and the label interval is also specified to 2 - then every second
tickmark will be labelled, which means every 4th value number.`,default:"0",privacy:"public",_ui5validator:"Integer"},{kind:"field",name:"showTickmarks",type:{text:"boolean"},description:`Enables tickmarks visualization for each step.
<br><br>
<b>Note:</b> The step must be a positive number.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"showTooltip",type:{text:"boolean"},description:"Enables handle tooltip displaying the current value.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"disabled",type:{text:"boolean"},description:"Defines whether the slider is in disabled state.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"accessibleName",type:{text:"string"},description:"Defines the accessible ARIA name of the component.",default:'""',privacy:"public",_ui5since:"1.4.0",_ui5validator:"String"}],events:[{name:"change",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired when the value changes and the user has finished interacting with the slider."},{name:"input",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired when the value changes due to user interaction that is not yet finished - during mouse/touch dragging."}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},customElement:!0,_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"SliderBase",module:"dist/SliderBase.js"}}]},{kind:"javascript-module",path:"dist/SplitButton.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

<code>ui5-split-button</code> enables users to trigger actions. It is constructed of two separate actions -
default action and arrow action that can be activated by clicking or tapping, or by
pressing certain keyboard keys - <code>Space</code> or <code>Enter</code> for default action,
and <code>Arrow Down</code> or <code>Arrow Up</code> for arrow action.

<h3>Usage</h3>

<code>ui5-split-button</code> consists two separate buttons:
<ul>
<li>for the first one (default action) you can define some <code>text</code> or an <code>icon</code>, or both.
Also, it is possible to define different icon for active state of this button - <code>activeIcon</code>.</li>
<li>the second one (arrow action) contains only <code>slim-arrow-down</code> icon.</li>
</ul>
You can choose a <code>design</code> from a set of predefined types (the same as for ui5-button) that offer
different styling to correspond to the triggered action. Both text and arrow actions have the same design.
<br><br>
You can set the <code>ui5-split-button</code> as enabled or disabled. Both parts of an enabled
<code>ui5-split-button</code> can be pressed by clicking or tapping it, or by certain keys, which changes
the style to provide visual feedback to the user that it is pressed or hovered over with
the mouse cursor. A disabled <code>ui5-split-button</code> appears inactive and any of the two buttons
cannot be pressed.

<h3>Keyboard Handling</h3>
<ul>
<li><code>Space</code> or <code>Enter</code> - triggers the default action</li>
<li><code>Shift</code> or <code>Escape</code> - if <code>Space</code> is pressed, releases the default action button without triggering the click event.</li>
<li><code>Arrow Down</code>, <code>Arrow Up</code>, <code>Alt</code>+<code>Arrow Down</code>, <code>Alt</code>+<code>Arrow Up</code>, or <code>F4</code> - triggers the arrow action</li>
There are separate events that are fired on activating of <code>ui5-split-button</code> parts:
<ul>
<li><code>click</code> for the first button (default action)</li>
<li><code>arrow-click</code> for the second button (arrow action)</li>
</ul>
</ul>

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/SplitButton.js";</code>`,name:"SplitButton",slots:[{name:"default",description:`Defines the text of the component.
<br><br>
<b>Note:</b> Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,_ui5propertyName:"text",_ui5type:{text:"Array<Node>"},_ui5privacy:"public"}],members:[{kind:"field",name:"icon",type:{text:"string"},description:`Defines the icon to be displayed as graphical element within the component.
The SAP-icons font provides numerous options.
<br><br>
Example:

See all the available icons in the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"activeIcon",type:{text:"string"},description:"Defines the icon to be displayed in active state as graphical element within the component.",default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"activeArrowButton",type:{text:"boolean"},description:"Defines whether the arrow button should have the active state styles or not.",default:"false",privacy:"public",_ui5since:"1.21.0",_ui5validator:"Boolean"},{kind:"field",name:"design",type:{text:"ButtonDesign",references:[{name:"ButtonDesign",package:"@ui5/webcomponents",module:"dist/types/ButtonDesign.js"}]},description:"Defines the component design.",default:'"Default"',privacy:"public",_ui5validator:"ButtonDesign"},{kind:"field",name:"disabled",type:{text:"boolean"},description:`Defines whether the component is disabled.
A disabled component can't be pressed or
focused, and it is not in the tab chain.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"accessibleName",type:{text:"string | undefined"},description:"Defines the accessible ARIA name of the component.",default:"undefined",privacy:"public",_ui5validator:"String"}],events:[{name:"click",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired when the user clicks on the default action."},{name:"arrow-click",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired when the user clicks on the arrow action."}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-split-button",customElement:!0,_ui5since:"1.1.0",_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"SplitButton",module:"dist/SplitButton.js"}},{kind:"custom-element-definition",name:"ui5-split-button",declaration:{name:"SplitButton",module:"dist/SplitButton.js"}}]},{kind:"javascript-module",path:"dist/StandardListItem.js",declarations:[{kind:"class",description:`The <code>ui5-li</code> represents the simplest type of item for a <code>ui5-list</code>.

This is a list item,
providing the most common use cases such as <code>text</code>,
<code>image</code> and <code>icon</code>.`,name:"StandardListItem",cssParts:[{description:"Used to style the title of the list item",name:"title"},{description:"Used to style the description of the list item",name:"description"},{description:"Used to style the additionalText of the list item",name:"additional-text"},{description:"Used to style the icon of the list item",name:"icon"},{description:"Used to style the main li tag of the list item",name:"native-li"},{description:"Used to style the content area of the list item",name:"content"},{description:"Used to style the button rendered when the list item is of type detail",name:"detail-button"},{description:"Used to style the button rendered when the list item is in delete mode",name:"delete-button"},{description:"Used to style the radio button rendered when the list item is in single selection mode",name:"radio"},{description:"Used to style the checkbox rendered when the list item is in multiple selection mode",name:"checkbox"}],slots:[{description:`Defines the text of the component.
<br><br>
<b>Note:</b> Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"default",_ui5privacy:"public",_ui5type:{text:"Array<Node>"}},{name:"imageContent",description:`<b>Note:</b> While the slot allows option for setting custom avatar, to match the
design guidelines, please use the <code>ui5-avatar</code> with it\`s default size - S.
<b>Note:</b> If bigger <code>ui5-avatar</code> needs to be used, then the size of the
<code>ui5-li</code> should be customized in order to fit.`,_ui5since:"1.10.0",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"},{name:"deleteButton",description:`Defines the delete button, displayed in "Delete" mode.
<b>Note:</b> While the slot allows custom buttons, to match
design guidelines, please use the <code>ui5-button</code> component.
<b>Note:</b> When the slot is not present, a built-in delete button will be displayed.`,_ui5since:"1.9.0",_ui5type:{text:"Array<IButton>",references:[{name:"IButton",package:"@ui5/webcomponents",module:"dist/Button.js"}]},_ui5privacy:"public"}],members:[{kind:"field",name:"description",type:{text:"string"},description:"Defines the description displayed right under the item text, if such is present.",default:'""',privacy:"public",_ui5since:"0.8.0",_ui5validator:"String"},{kind:"field",name:"icon",type:{text:"string"},description:`Defines the <code>icon</code> source URI.
<br><br>
<b>Note:</b>
SAP-icons font provides numerous built-in icons. To find all the available icons, see the
<ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"iconEnd",type:{text:"boolean"},description:`Defines whether the <code>icon</code> should be displayed in the beginning of the list item or in the end.
<br><br>
<b>Note:</b> If <code>image</code> is set, the <code>icon</code> would be displayed after the <code>image</code>.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"image",type:{text:"string"},description:`Defines the <code>image</code> source URI.
<br><br>
<b>Note:</b> The <code>image</code> would be displayed in the beginning of the list item.`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"additionalText",type:{text:"string"},description:"Defines the <code>additionalText</code>, displayed in the end of the list item.",default:'""',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"String"},{kind:"field",name:"additionalTextState",type:{text:"ValueState",references:[{name:"ValueState",package:"@ui5/webcomponents-base",module:"dist/types/ValueState.js"}]},description:`Defines the state of the <code>additionalText</code>.
<br>
Available options are: <code>"None"</code> (by default), <code>"Success"</code>, <code>"Warning"</code>, <code>"Information"</code> and <code>"Error"</code>.`,default:'"None"',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"ValueState"},{kind:"field",name:"accessibleName",type:{text:"string"},description:`Defines the text alternative of the component.
Note: If not provided a default text alternative will be set, if present.`,default:'""',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"String"},{kind:"field",name:"type",type:{text:"ListItemType",references:[{name:"ListItemType",package:"@ui5/webcomponents",module:"dist/types/ListItemType.js"}]},description:`Defines the visual indication and behavior of the list items.
Available options are <code>Active</code> (by default), <code>Inactive</code>, <code>Detail</code> and <code>Navigation</code>.
<br><br>
<b>Note:</b> When set to <code>Active</code> or <code>Navigation</code>, the item will provide visual response upon press and hover,
while with type <code>Inactive</code> and <code>Detail</code> - will not.`,default:'"Active"',privacy:"public",_ui5validator:"ListItemType",inheritedFrom:{name:"ListItem",module:"dist/ListItem.js"}},{kind:"field",name:"accessibilityAttributes",type:{text:"AccessibilityAttributes",references:[{name:"AccessibilityAttributes",package:"@ui5/webcomponents",module:"dist/ListItem.js"}]},description:`An object of strings that defines several additional accessibility attribute values
for customization depending on the use case.

 It supports the following fields:

<ul>
		<li><code>ariaSetsize</code>: Defines the number of items in the current set of listitems or treeitems when not all items in the set are present in the DOM.
		The value of each <code>aria-setsize</code> is an integer reflecting number of items in the complete set.
		<b>Note: </b> If the size of the entire set is unknown, set <code>aria-setsize="-1"</code>.
		</li>
		<li><code>ariaPosinset</code>: Defines an element's number or position in the current set of listitems or treeitems when not all items are present in the DOM.
		The value of each <code>aria-posinset</code> is an integer greater than or equal to 1, and less than or equal to the size of the set when that size is known.
		</li>
</ul>`,default:"{}",privacy:"public",_ui5since:"1.15.0",_ui5validator:"Object",inheritedFrom:{name:"ListItem",module:"dist/ListItem.js"}},{kind:"field",name:"navigated",type:{text:"boolean"},description:`The navigated state of the list item.
If set to <code>true</code>, a navigation indicator is displayed at the end of the list item.`,default:"false",privacy:"public",_ui5since:"1.10.0",_ui5validator:"Boolean",inheritedFrom:{name:"ListItem",module:"dist/ListItem.js"}},{kind:"field",name:"selected",type:{text:"boolean"},description:"Defines the selected state of the <code>ListItem</code>.",default:"false",privacy:"public",_ui5validator:"Boolean",inheritedFrom:{name:"ListItemBase",module:"dist/ListItemBase.js"}}],superclass:{name:"ListItem",package:"@ui5/webcomponents",module:"dist/ListItem.js"},tagName:"ui5-li",customElement:!0,_ui5privacy:"public",events:[{name:"detail-click",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired when the user clicks on the detail button when type is <code>Detail</code>.",inheritedFrom:{name:"ListItem",module:"dist/ListItem.js"}}]}],exports:[{kind:"js",name:"default",declaration:{name:"StandardListItem",module:"dist/StandardListItem.js"}},{kind:"custom-element-definition",name:"ui5-li",declaration:{name:"StandardListItem",module:"dist/StandardListItem.js"}}]},{kind:"javascript-module",path:"dist/StepInput.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-step-input</code> consists of an input field and buttons with icons to increase/decrease the value
with the predefined step.
<br><br>
The user can change the value of the component by pressing the increase/decrease buttons,
by typing a number directly, by using the keyboard up/down and page up/down,
or by using the mouse scroll wheel. Decimal values are supported.

<h3>Usage</h3>

The default step is 1 but the app developer can set a different one.

App developers can set a maximum and minimum value for the <code>StepInput</code>.
The increase/decrease button and the up/down keyboard navigation become disabled when
the value reaches the max/min or a new value is entered from the input which is greater/less than the max/min.
<br><br>
<h4>When to use:</h4>
<ul>
<li>To adjust amounts, quantities, or other values quickly.</li>
<li>To adjust values for a specific step.</li>
</ul>

<h4>When not to use:</h4>
<ul>
<li>To enter a static number (for example, postal code, phone number, or ID). In this case,
use the regular <code>ui5-input</code> instead.</li>
<li>To display a value that rarely needs to be adjusted and does not pertain to a particular step.
In this case, use the regular <code>ui5-input</code> instead.</li>
<li>To enter dates and times. In this case, use date/time related components instead.</li>
</ul>

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/StepInput.js";</code>`,name:"StepInput",slots:[{name:"valueStateMessage",description:`Defines the value state message that will be displayed as pop up under the component.
<br><br>

<b>Note:</b> If not specified, a default text (in the respective language) will be displayed.
<br>
<b>Note:</b> The <code>valueStateMessage</code> would be displayed,
when the component is in <code>Information</code>, <code>Warning</code> or <code>Error</code> value state.`,_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"}],members:[{kind:"field",name:"value",type:{text:"number"},description:"Defines a value of the component.",default:"0",privacy:"public",_ui5validator:"Float"},{kind:"field",name:"min",type:{text:"number | undefined"},description:"Defines a minimum value of the component.",default:"undefined",privacy:"public",_ui5validator:"Float"},{kind:"field",name:"max",type:{text:"number | undefined"},description:"Defines a maximum value of the component.",default:"undefined",privacy:"public",_ui5validator:"Float"},{kind:"field",name:"step",type:{text:"number"},description:"Defines a step of increasing/decreasing the value of the component.",default:"1",privacy:"public",_ui5validator:"Float"},{kind:"field",name:"valueState",type:{text:"ValueState",references:[{name:"ValueState",package:"@ui5/webcomponents-base",module:"dist/types/ValueState.js"}]},description:"Defines the value state of the component.",default:'"None"',privacy:"public",_ui5validator:"ValueState"},{kind:"field",name:"required",type:{text:"boolean"},description:"Defines whether the component is required.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"disabled",type:{text:"boolean"},description:"Determines whether the component is displayed as disabled.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"readonly",type:{text:"boolean"},description:"Determines whether the component is displayed as read-only.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"placeholder",type:{text:"string | undefined"},description:`Defines a short hint, intended to aid the user with data entry when the
component has no value.

<br><br>
<b>Note:</b> When no placeholder is set, the format pattern is displayed as a placeholder.
Passing an empty string as the value of this property will make the component appear empty - without placeholder or format pattern.`,default:"undefined",privacy:"public",_ui5validator:"String"},{kind:"field",name:"name",type:{text:"string"},description:`Determines the name with which the component will be submitted in an HTML form.

<br><br>
<b>Important:</b> For the <code>name</code> property to have effect, you must add the following import to your project:
<code>import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";</code>

<br><br>
<b>Note:</b> When set, a native <code>input</code> HTML element
will be created inside the component so that it can be submitted as
part of an HTML form. Do not use this property unless you need to submit a form.`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"valuePrecision",type:{text:"number"},description:"Determines the number of digits after the decimal point of the component.",default:"0",privacy:"public",_ui5validator:"Integer"},{kind:"field",name:"accessibleName",type:{text:"string"},description:"Defines the accessible ARIA name of the component.",default:'""',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"String"},{kind:"field",name:"accessibleNameRef",type:{text:"string"},description:"Receives id(or many ids) of the elements that label the component.",default:'""',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"String"}],events:[{name:"change",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired when the input operation has finished by pressing Enter or on focusout."}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-step-input",customElement:!0,_ui5since:"1.0.0-rc.13",_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"StepInput",module:"dist/StepInput.js"}},{kind:"custom-element-definition",name:"ui5-step-input",declaration:{name:"StepInput",module:"dist/StepInput.js"}}]},{kind:"javascript-module",path:"dist/SuggestionGroupItem.js",declarations:[{kind:"class",description:`The <code>ui5-suggestion-group-item</code> is type of suggestion item,
that can be used to split the <code>ui5-input</code> suggestions into groups.`,name:"SuggestionGroupItem",members:[{kind:"field",name:"text",type:{text:"string"},description:"Defines the text of the <code>ui5-suggestion-group-item</code>.",default:'""',privacy:"public",_ui5validator:"String"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-suggestion-group-item",customElement:!0,_ui5since:"1.0.0-rc.15",_ui5privacy:"public",_ui5abstract:!0,_ui5implements:[{name:"IInputSuggestionItem",package:"@ui5/webcomponents",module:"dist/Input.js"}]}],exports:[{kind:"js",name:"default",declaration:{name:"SuggestionGroupItem",module:"dist/SuggestionGroupItem.js"}},{kind:"custom-element-definition",name:"ui5-suggestion-group-item",declaration:{name:"SuggestionGroupItem",module:"dist/SuggestionGroupItem.js"}}]},{kind:"javascript-module",path:"dist/SuggestionItem.js",declarations:[{kind:"class",description:"The <code>ui5-suggestion-item</code> represents the suggestion item of the <code>ui5-input</code>.",name:"SuggestionItem",members:[{kind:"field",name:"text",type:{text:"string"},description:"Defines the text of the component.",default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"type",type:{text:"ListItemType",references:[{name:"ListItemType",package:"@ui5/webcomponents",module:"dist/types/ListItemType.js"}]},description:`Defines the visual indication and behavior of the item.
Available options are <code>Active</code> (by default), <code>Inactive</code> and <code>Detail</code>.
<br><br>
<b>Note:</b> When set to <code>Active</code>, the item will provide visual response upon press and hover,
while when <code>Inactive</code> or <code>Detail</code> - will not.`,default:'"Active"',privacy:"public",_ui5since:"1.0.0-rc.8",_ui5validator:"ListItemType"},{kind:"field",name:"description",type:{text:"string"},description:"Defines the description displayed right under the item text, if such is present.",default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"icon",type:{text:"string"},description:`Defines the <code>icon</code> source URI.
<br><br>
<b>Note:</b>
SAP-icons font provides numerous built-in icons. To find all the available icons, see the
<ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"iconEnd",type:{text:"boolean"},description:`Defines whether the <code>icon</code> should be displayed in the beginning of the item or in the end.
<br><br>
<b>Note:</b> If <code>image</code> is set, the <code>icon</code> would be displayed after the <code>image</code>.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"image",type:{text:"string"},description:`Defines the <code>image</code> source URI.
<br><br>
<b>Note:</b> The <code>image</code> would be displayed in the beginning of the item.`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"additionalText",type:{text:"string"},description:"Defines the <code>additionalText</code>, displayed in the end of the item.",default:'""',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"String"},{kind:"field",name:"additionalTextState",type:{text:"ValueState",references:[{name:"ValueState",package:"@ui5/webcomponents-base",module:"dist/types/ValueState.js"}]},description:"Defines the state of the <code>additionalText</code>.",default:'"None"',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"ValueState"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-suggestion-item",customElement:!0,_ui5privacy:"public",_ui5abstract:!0,_ui5implements:[{name:"IInputSuggestionItem",package:"@ui5/webcomponents",module:"dist/Input.js"}]}],exports:[{kind:"js",name:"default",declaration:{name:"SuggestionItem",module:"dist/SuggestionItem.js"}},{kind:"custom-element-definition",name:"ui5-suggestion-item",declaration:{name:"SuggestionItem",module:"dist/SuggestionItem.js"}}]},{kind:"javascript-module",path:"dist/SuggestionListItem.js",declarations:[],exports:[{kind:"js",name:"default",declaration:{name:"SuggestionListItem",module:"dist/SuggestionListItem.js"}}]},{kind:"javascript-module",path:"dist/Switch.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>
The <code>ui5-switch</code> component is used for changing between binary states.
<br>
The component can display texts, that will be switched, based on the component state, via the <code>textOn</code> and <code>textOff</code> properties,
but texts longer than 3 letters will be cutted off.
<br>
However, users are able to customize the width of <code>ui5-switch</code> with pure CSS (<code>&lt;ui5-switch style="width: 200px"></code>), and set widths, depending on the texts they would use.
<br>
Note: the component would not automatically stretch to fit the whole text width.

<h3>Keyboard Handling</h3>
The state can be changed by pressing the Space and Enter keys.
<br /><br />

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/Switch";</code>`,name:"Switch",cssParts:[{description:"Used to style the track, where the handle is being slid",name:"slider"},{description:"Used to style the <code>textOn</code> property text",name:"text-on"},{description:"Used to style the <code>textOff</code> property text",name:"text-off"},{description:"Used to style the handle of the switch",name:"handle"}],members:[{kind:"field",name:"design",type:{text:"SwitchDesign",references:[{name:"SwitchDesign",package:"@ui5/webcomponents",module:"dist/types/SwitchDesign.js"}]},description:`Defines the component design.
<br><br>
<b>Note:</b> If <code>Graphical</code> type is set,
positive and negative icons will replace the <code>textOn</code> and <code>textOff</code>.`,privacy:"public",default:'"Textual"',_ui5validator:"SwitchDesign"},{kind:"field",name:"checked",type:{text:"boolean"},description:`Defines if the component is checked.
<br><br>
<b>Note:</b> The property can be changed with user interaction,
either by cliking the component, or by pressing the <code>Enter</code> or <code>Space</code> key.`,default:"false",privacy:"public",_ui5validator:"Boolean",_ui5formProperty:!0,_ui5formEvents:"change"},{kind:"field",name:"disabled",type:{text:"boolean"},description:`Defines whether the component is disabled.
<br><br>
<b>Note:</b> A disabled component is noninteractive.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"textOn",type:{text:"string"},description:`Defines the text, displayed when the component is checked.

<br><br>
<b>Note:</b> We recommend using short texts, up to 3 letters (larger texts would be cut off).`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"textOff",type:{text:"string"},description:`Defines the text, displayed when the component is not checked.
<br><br>
<b>Note:</b> We recommend using short texts, up to 3 letters (larger texts would be cut off).`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"accessibleName",type:{text:"string"},description:`Sets the accessible ARIA name of the component.

<b>Note</b>: We recommend that you set an accessibleNameRef pointing to an external label or at least an <code>accessibleName</code>.
Providing an <code>accessibleNameRef</code> or an <code>accessibleName</code> is mandatory in the cases when <code>textOn</code> and <code>textOff</code> properties aren't set.`,default:'""',privacy:"public",_ui5since:"1.2.0",_ui5validator:"String"},{kind:"field",name:"accessibleNameRef",type:{text:"string"},description:`Receives id(or many ids) of the elements that label the component.

<b>Note</b>: We recommend that you set an accessibleNameRef pointing to an external label or at least an <code>accessibleName</code>.
Providing an <code>accessibleNameRef</code> or an <code>accessibleName</code> is mandatory in the cases when <code>textOn</code> and <code>textOff</code> properties aren't set.`,default:'""',privacy:"public",_ui5since:"1.1.0",_ui5validator:"String"},{kind:"field",name:"tooltip",type:{text:"string"},description:`Defines the tooltip of the component.
<br>
<b>Note:</b> If applicable an external label reference should always be the preferred option to provide context to the <code>ui5-switch</code> component over a tooltip.`,default:'""',privacy:"public",_ui5since:"1.9.0",_ui5validator:"String"},{kind:"field",name:"required",type:{text:"boolean"},description:"Defines whether the component is required.",default:"false",privacy:"public",_ui5since:"1.16.0",_ui5validator:"Boolean"},{kind:"field",name:"name",type:{text:"string"},description:`Determines the name with which the component will be submitted in an HTML form.

<br><br>
<b>Important:</b> For the <code>name</code> property to have effect, you must add the following import to your project:
<code>import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";</code>

<br><br>
<b>Note:</b> When set, a native <code>input</code> HTML element
will be created inside the component so that it can be submitted as
part of an HTML form. Do not use this property unless you need to submit a form.`,default:'""',privacy:"public",_ui5since:"1.16.0",_ui5validator:"String"}],events:[{name:"change",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired when the component checked state changes.",_ui5allowPreventDefault:!0}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-switch",customElement:!0,_ui5since:"0.8.0",_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"Switch",module:"dist/Switch.js"}},{kind:"custom-element-definition",name:"ui5-switch",declaration:{name:"Switch",module:"dist/Switch.js"}}]},{kind:"javascript-module",path:"dist/Tab.js",declarations:[{kind:"class",description:`The <code>ui5-tab</code> represents a selectable item inside a <code>ui5-tabcontainer</code>.
It defines both the item in the tab strip (top part of the <code>ui5-tabcontainer</code>) and the
content that is presented to the user once the tab is selected.`,name:"Tab",slots:[{name:"default",description:"Holds the content associated with this tab.",_ui5propertyName:"content",_ui5type:{text:"Array<Node>"},_ui5privacy:"public"},{name:"subTabs",description:`Defines hierarchies with nested sub tabs.
<br><br>
<b>Note:</b> Use <code>ui5-tab</code> and <code>ui5-tab-separator</code> for the intended design.`,_ui5type:{text:"Array<ITab>",references:[{name:"ITab",package:"@ui5/webcomponents",module:"dist/TabContainer.js"}]},_ui5privacy:"public"}],members:[{kind:"field",name:"text",type:{text:"string"},description:"The text to be displayed for the item.",default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"disabled",type:{text:"boolean"},description:"Disabled tabs can't be selected.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"additionalText",type:{text:"string"},description:'Represents the "additionalText" text, which is displayed in the tab. In the cases when in the same time there are tabs with icons and tabs without icons, if a tab has no icon the "additionalText" is displayed larger.',default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"icon",type:{text:"string"},description:`Defines the icon source URI to be displayed as graphical element within the component.
The SAP-icons font provides numerous built-in icons.
See all the available icons in the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"design",type:{text:"SemanticColor",references:[{name:"SemanticColor",package:"@ui5/webcomponents",module:"dist/types/SemanticColor.js"}]},description:`Defines the component's design color.
<br><br>
The design is applied to:
<ul>
<li>the component icon</li>
<li>the <code>text</code> when the component overflows</li>
<li>the tab selection line</li>
</ul>

<br><br>
Available designs are: <code>"Default"</code>, <code>"Neutral"</code>, <code>"Positive"</code>, <code>"Critical"</code> and <code>"Negative"</code>.

<br><br>
<b>Note:</b> The design depends on the current theme.`,default:'"Default"',privacy:"public",_ui5validator:"SemanticColor"},{kind:"field",name:"selected",type:{text:"boolean"},description:"Specifies if the component is selected.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"method",name:"getTabInStripDomRef",return:{type:{text:"ITab | null",references:[{name:"ITab",package:"@ui5/webcomponents",module:"dist/TabContainer.js"}]}},description:`Returns the DOM reference of the tab that is placed in the header.
<b>Note:</b> Tabs, placed in the <code>subTabs</code> slot of other tabs are not shown in the header. Calling this method on such tabs will return <code>null</code>.
<b>Note:</b> If you need a DOM ref to the tab content please use the <code>getDomRef</code> method.`,privacy:"public",_ui5since:"1.0.0-rc.16"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-tab",customElement:!0,_ui5privacy:"public",_ui5abstract:!0,_ui5implements:[{name:"ITab",package:"@ui5/webcomponents",module:"dist/TabContainer.js"}]}],exports:[{kind:"js",name:"default",declaration:{name:"Tab",module:"dist/Tab.js"}},{kind:"custom-element-definition",name:"ui5-tab",declaration:{name:"Tab",module:"dist/Tab.js"}}]},{kind:"javascript-module",path:"dist/TabContainer.js",declarations:[{kind:"interface",name:"ITab",description:"Interface for components that may be slotted inside <code>ui5-tabcontainer</code> as items",_ui5privacy:"public"},{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-tabcontainer</code> represents a collection of tabs with associated content.
Navigation through the tabs changes the content display of the currently active content area.
A tab can be labeled with text only, or icons with text.

<h3>Structure</h3>

The <code>ui5-tabcontainer</code> can hold two types of entities:
<ul>
<li><code>ui5-tab</code> - contains all the information on an item (text and icon)</li>
<li><code>ui5-tab-separator</code> - used to separate tabs with a line</li>
</ul>

<h3>Hierarchies</h3>
Multiple sub tabs could be placed underneath one main tab. Nesting allows deeper hierarchies with indentations
to indicate the level of each nested tab. When a tab has both sub tabs and own content its click area is split
to allow the user to display the content or alternatively to expand / collapse the list of sub tabs.

<h3>Keyboard Handling</h3>

<h4>Fast Navigation</h4>
This component provides a build in fast navigation group which can be used via <code>F6 / Shift + F6</code> or <code> Ctrl + Alt(Option) + Down /  Ctrl + Alt(Option) + Up</code>.
In order to use this functionality, you need to import the following module:
<code>import "@ui5/webcomponents-base/dist/features/F6Navigation.js"</code>
<br><br>

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/TabContainer";</code>
<br>
<code>import "@ui5/webcomponents/dist/Tab";</code> (for <code>ui5-tab</code>)
<br>
<code>import "@ui5/webcomponents/dist/TabSeparator";</code> (for <code>ui5-tab-separator</code>)`,name:"TabContainer",cssParts:[{description:"Used to style the content of the component",name:"content"},{description:"Used to style the tabstrip of the component",name:"tabstrip"}],slots:[{name:"default",description:`Defines the tabs.
<br><br>
<b>Note:</b> Use <code>ui5-tab</code> and <code>ui5-tab-separator</code> for the intended design.`,_ui5propertyName:"items",_ui5type:{text:"Array<ITab>",references:[{name:"ITab",package:"@ui5/webcomponents",module:"dist/TabContainer.js"}]},_ui5privacy:"public"},{name:"overflowButton",description:`Defines the button which will open the overflow menu. If nothing is provided to this slot,
the default button will be used.`,_ui5since:"1.0.0-rc.9",_ui5type:{text:"Array<IButton>",references:[{name:"IButton",package:"@ui5/webcomponents",module:"dist/Button.js"}]},_ui5privacy:"public"},{name:"startOverflowButton",description:`Defines the button which will open the start overflow menu if available. If nothing is provided to this slot,
the default button will be used.`,_ui5since:"1.1.0",_ui5type:{text:"Array<IButton>",references:[{name:"IButton",package:"@ui5/webcomponents",module:"dist/Button.js"}]},_ui5privacy:"public"}],members:[{kind:"field",name:"fixed",type:{text:"boolean"},description:`Defines whether the tabs are in a fixed state that is not
expandable/collapsible by user interaction.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"collapsed",type:{text:"boolean"},description:"Defines whether the tab content is collapsed.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"showOverflow",type:{text:"boolean"},description:`Defines whether the overflow select list is displayed.
<br><br>
The overflow select list represents a list, where all tabs are displayed
so that it's easier for the user to select a specific tab.`,default:"false",privacy:"public",deprecated:`Since the introduction of TabsOverflowMode, overflows will always be visible if there is not enough space for all tabs,
all hidden tabs are moved to a select list in the respective overflows and are accessible via the <code>overflowButton</code> and / or <code>startOverflowButton</code> slots.`,_ui5validator:"Boolean"},{kind:"field",name:"tabLayout",type:{text:"TabLayout",references:[{name:"TabLayout",package:"@ui5/webcomponents",module:"dist/types/TabLayout.js"}]},description:`Defines the alignment of the content and the <code>additionalText</code> of a tab.

<br>
<b>Note:</b>
The content and the <code>additionalText</code> would be displayed vertically by default,
but when set to <code>Inline</code>, they would be displayed horizontally.`,default:'"Standard"',privacy:"public",_ui5validator:"TabLayout"},{kind:"field",name:"tabsOverflowMode",type:{text:"TabsOverflowMode",references:[{name:"TabsOverflowMode",package:"@ui5/webcomponents",module:"dist/types/TabsOverflowMode.js"}]},description:`Defines the overflow mode of the header (the tab strip). If you have a large number of tabs, only the tabs that can fit on screen will be visible.
All other tabs that can 't fit on the screen are available in an overflow tab "More".

<br>
<b>Note:</b>
Only one overflow at the end would be displayed by default,
but when set to <code>StartAndEnd</code>, there will be two overflows on both ends, and tab order will not change on tab selection.`,default:'"End"',privacy:"public",_ui5since:"1.1.0",_ui5validator:"TabsOverflowMode"},{kind:"field",name:"headerBackgroundDesign",type:{text:"TabContainerBackgroundDesign",references:[{name:"TabContainerBackgroundDesign",package:"@ui5/webcomponents",module:"dist/types/TabContainerBackgroundDesign.js"}]},description:"Sets the background color of the Tab Container's header as <code>Solid</code>, <code>Transparent</code>, or <code>Translucent</code>.",default:'"Solid"',privacy:"public",_ui5since:"1.10.0",_ui5validator:"TabContainerBackgroundDesign"},{kind:"field",name:"contentBackgroundDesign",type:{text:"TabContainerBackgroundDesign",references:[{name:"TabContainerBackgroundDesign",package:"@ui5/webcomponents",module:"dist/types/TabContainerBackgroundDesign.js"}]},description:"Sets the background color of the Tab Container's content as <code>Solid</code>, <code>Transparent</code>, or <code>Translucent</code>.",default:'"Solid"',privacy:"public",_ui5since:"1.10.0",_ui5validator:"TabContainerBackgroundDesign"},{kind:"field",name:"allItems",type:{text:"Array<ITab>",references:[{name:"ITab",package:"@ui5/webcomponents",module:"dist/TabContainer.js"}]},description:`Returns all slotted tabs and their subTabs in a flattened array.
The order of tabs is depth-first. For example, given the following slotted elements:
<pre><code>
	&lt;ui5-tabcontainer&gt;
		&lt;ui5-tab id="First" text="First"&gt;
			...
			&lt;ui5-tab slot="subTabs" id="Nested" text="Nested"&gt;...&lt;/ui5-tab&gt;
		&lt;/ui5-tab&gt;
		&lt;ui5-tab id="Second" text="Second"&gt;...&lt;/ui5-tab&gt;
		&lt;ui5-tab-separator id="sep"&gt;&lt;/ui5-tab-separator&gt;
		&lt;ui5-tab id="Third" text="Third"&gt;...&lt;/ui5-tab&gt;
	&lt;/ui5-tabcontainer&gt;
</code></pre>
Calling <code>allItems</code> on this TabContainer will return the instances in the following order:
<code>[ ui5-tab#First, ui5-tab#Nested, ui5-tab#Second, ui5-tab-separator#sep, ui5-tab#Third ]</code>`,privacy:"public",default:"[]",readonly:!0}],events:[{name:"tab-select",_ui5privacy:"public",type:{text:"CustomEvent<TabContainerTabSelectEventDetail>",references:[{name:"TabContainerTabSelectEventDetail",package:"@ui5/webcomponents",module:"dist/TabContainer.js"}]},description:"Fired when a tab is selected.",_ui5allowPreventDefault:!0,_ui5parameters:[{type:{text:"ITab",references:[{name:"ITab",package:"@ui5/webcomponents",module:"dist/TabContainer.js"}]},name:"tab",_ui5privacy:"public",description:"The selected <code>tab</code>."},{type:{text:"Integer",references:[{name:"Integer",package:"@ui5/webcomponents-base",module:"dist/types/Integer.js"}]},name:"tabIndex",_ui5privacy:"public",description:"The selected <code>tab</code> index in the flattened array of all tabs and their subTabs, provided by the <code>allItems</code> getter."}]}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-tabcontainer",customElement:!0,_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"TabContainer",module:"dist/TabContainer.js"}},{kind:"custom-element-definition",name:"ui5-tabcontainer",declaration:{name:"TabContainer",module:"dist/TabContainer.js"}}]},{kind:"javascript-module",path:"dist/TabSeparator.js",declarations:[{kind:"class",description:"The <code>ui5-tab-separator</code> represents a vertical line to separate tabs inside a <code>ui5-tabcontainer</code>.",name:"TabSeparator",members:[{kind:"method",name:"getTabInStripDomRef",return:{type:{text:"ITab | null",references:[{name:"ITab",package:"@ui5/webcomponents",module:"dist/TabContainer.js"}]}},description:`Returns the DOM reference of the separator that is placed in the header.
<b>Note:</b> Tabs and separators, placed in the <code>subTabs</code> slot of other tabs are not shown in the header. Calling this method on such tabs or separators will return <code>null</code>.`,privacy:"public"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-tab-separator",customElement:!0,_ui5privacy:"public",_ui5abstract:!0,_ui5implements:[{name:"ITab",package:"@ui5/webcomponents",module:"dist/TabContainer.js"}]}],exports:[{kind:"js",name:"default",declaration:{name:"TabSeparator",module:"dist/TabSeparator.js"}},{kind:"custom-element-definition",name:"ui5-tab-separator",declaration:{name:"TabSeparator",module:"dist/TabSeparator.js"}}]},{kind:"javascript-module",path:"dist/Table.js",declarations:[{kind:"interface",name:"ITableRow",description:"Interface for components that may be slotted inside a <code>ui5-table</code> as rows",_ui5privacy:"public"},{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-table</code> component provides a set of sophisticated and convenient functions for responsive table design.
It provides a comprehensive set of features for displaying and dealing with vast amounts of data.
<br><br>
To render the <code>Table</code> properly, the order of the <code>columns</code> should match with the
order of the item <code>cells</code> in the <code>rows</code>.
<br><br>
Desktop and tablet devices are supported.
On tablets, special consideration should be given to the number of visible columns
and rows due to the limited performance of some devices.

<h3>Selection</h3>
To benefit from the selection mechanism of <code>ui5-table</code> component, you can use the available selection modes:
<code>SingleSelect</code> and <code>MultiSelect</code>.
<br>
In additition to the used mode, you can also specify the <code>ui5-table-row</code> type choosing between
<code>Active</code> or <code>Inactive</code>.
<br><br>
In <code>SingleSelect</code> mode, you can select both an <code>Active</code> and <code>Inactive</code> row via mouse or
by pressing the <code>Space</code> or <code>Enter</code> keys.
<br>
In <code>MultiSelect</code> mode, you can select both an <code>Active</code> and <code>Inactive</code> row by pressing the
<code>Space</code> key when a row is on focus or via mouse click over the selection checkbox of the row.
In order to select all the available rows at once, you can use the selection checkbox presented in the table's header.
<br><br>
<b>Note:</b> Currently, when a column is shown as a pop-in, the visual indication for selection is not presented over it.

<h3>Keyboard Handling</h3>

<h4>Fast Navigation</h4>
This component provides a build in fast navigation group which can be used via <code>F6 / Shift + F6</code> or <code> Ctrl + Alt(Option) + Down /  Ctrl + Alt(Option) + Up</code>.
In order to use this functionality, you need to import the following module:
<code>import "@ui5/webcomponents-base/dist/features/F6Navigation.js"</code>
<br><br>
Furthermore, you can interact with <code>ui5-table</code> via the following keys.
<br>

<ul>
<li>[F7] - If focus is on an interactive control inside an item, moves focus to the corresponding item.</li>
<li>[CTRL]+[A] - Selects all items, if MultiSelect mode is enabled.</li>
<li>[HOME]/[END] - Focuses the first/last item.</li>
<li>[PAGEUP]/[PAGEDOWN] - Moves focus up/down by page size (20 items by default).</li>
<li>[ALT]+[DOWN]/[UP] - Switches focus between header, last focused item, and More button (if applies) in either direction.</li>
<li>[SHIFT]+[DOWN]/[UP] - Selects the next/previous item in a MultiSelect table, if the current item is selected (Range selection). Otherwise, deselects them (Range deselection).</li>
<li>[SHIFT]+[HOME]/[END] - Range selection to the first/last item of the List.</li>
<li>[CTRL]+[HOME]/[END] - Same behavior as HOME & END.</li>
</ul>

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/Table.js";</code>
<br>
<code>import "@ui5/webcomponents/dist/TableColumn.js";</code> (for <code>ui5-table-column</code>)
<br>
<code>import "@ui5/webcomponents/dist/TableRow.js";</code> (for <code>ui5-table-row</code>)
<br>
<code>import "@ui5/webcomponents/dist/TableCell.js";</code> (for <code>ui5-table-cell</code>)`,name:"Table",slots:[{name:"default",description:`Defines the component rows.
<br><br>
<b>Note:</b> Use <code>ui5-table-row</code> for the intended design.`,_ui5propertyName:"rows",_ui5type:{text:"Array<ITableRow>",references:[{name:"ITableRow",package:"@ui5/webcomponents",module:"dist/Table.js"}]},_ui5privacy:"public"},{name:"columns",description:`Defines the configuration for the columns of the component.
<br><br>
<b>Note:</b> Use <code>ui5-table-column</code> for the intended design.`,_ui5type:{text:"Array<TableColumn>",references:[{name:"TableColumn",package:"@ui5/webcomponents",module:"dist/TableColumn.js"}]},_ui5privacy:"public"}],members:[{kind:"field",name:"noDataText",type:{text:"string"},description:"Defines the text that will be displayed when there is no data and <code>hideNoData</code> is not present.",default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"growingButtonText",type:{text:"string"},description:`Defines the text that will be displayed inside the growing button at the bottom of the table,
meant for loading more rows upon press.

<br><br>
<b>Note:</b> If not specified a built-in text will be displayed.
<br>
<b>Note:</b> This property takes effect if <code>growing</code> is set to <code>Button</code>.`,default:'""',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"String"},{kind:"field",name:"growingButtonSubtext",type:{text:"string"},description:`Defines the subtext that will be displayed under the <code>growingButtonText</code>.

<br><br>
<b>Note:</b> This property takes effect if <code>growing</code> is set to <code>Button</code>.`,default:'""',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"String"},{kind:"field",name:"hideNoData",type:{text:"boolean"},description:"Defines if the value of <code>noDataText</code> will be diplayed when there is no rows present in the table.",default:"false",privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"Boolean"},{kind:"field",name:"growing",type:{text:"TableGrowingMode",references:[{name:"TableGrowingMode",package:"@ui5/webcomponents",module:"dist/types/TableGrowingMode.js"}]},description:`Defines whether the table will have growing capability either by pressing a <code>More</code> button,
or via user scroll. In both cases <code>load-more</code> event is fired.
<br><br>

Available options:
<br><br>
<code>Button</code> - Shows a <code>More</code> button at the bottom of the table, pressing of which triggers the <code>load-more</code> event.
<br>
<code>Scroll</code> - The <code>load-more</code> event is triggered when the user scrolls to the bottom of the table;
<br>
<code>None</code> (default) - The growing is off.
<br><br>

<b>Restrictions:</b> <code>growing="Scroll"</code> is not supported for Internet Explorer,
and the component will fallback to <code>growing="Button"</code>.`,default:'"None"',privacy:"public",_ui5since:"1.0.0-rc.12",_ui5validator:"TableGrowingMode"},{kind:"field",name:"busy",type:{text:"boolean"},description:`Defines if the table is in busy state.
<b>

In this state the component's opacity is reduced
and busy indicator is displayed at the bottom of the table.`,default:"false",privacy:"public",_ui5since:"1.0.0-rc.12",_ui5validator:"Boolean"},{kind:"field",name:"busyDelay",type:{text:"number"},description:"Defines the delay in milliseconds, after which the busy indicator will show up for this component.",default:"1000",privacy:"public",_ui5validator:"Integer"},{kind:"field",name:"stickyColumnHeader",type:{text:"boolean"},description:`Determines whether the column headers remain fixed at the top of the page during
vertical scrolling as long as the Web Component is in the viewport.
<br><br>
<b>Restrictions:</b>
<ul>
<li>Browsers that do not support this feature:
<ul>
<li>Internet Explorer</li>
<li>Microsoft Edge lower than version 41 (EdgeHTML 16)</li>
<li>Mozilla Firefox lower than version 59</li>
</ul>
</li>
<li>Scrolling behavior:
<ul>
<li>If the Web Component is placed in layout containers that have the <code>overflow: hidden</code>
or <code>overflow: auto</code> style definition, this can
prevent the sticky elements of the Web Component from becoming fixed at the top of the viewport.</li>
</ul>
</li>
</ul>`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"mode",type:{text:"TableMode",references:[{name:"TableMode",package:"@ui5/webcomponents",module:"dist/types/TableMode.js"}]},description:"Defines the mode of the component.",default:'"None"',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"TableMode"},{kind:"field",name:"accessibleName",type:{text:"string | undefined"},description:"Defines the accessible ARIA name of the component.",default:"undefined",privacy:"public",_ui5since:"1.3.0",_ui5validator:"String"},{kind:"field",name:"accessibleNameRef",type:{text:"string"},description:"Receives id(or many ids) of the elements that label the component.",default:'""',privacy:"public",_ui5since:"1.3.0",_ui5validator:"String"}],events:[{name:"row-click",_ui5privacy:"public",type:{text:"CustomEvent<TableRowClickEventDetail>",references:[{name:"TableRowClickEventDetail",package:"@ui5/webcomponents",module:"dist/TableRow.js"}]},description:"Fired when a row in <code>Active</code> mode is clicked or <code>Enter</code> key is pressed.",_ui5parameters:[{type:{text:"HTMLElement"},name:"row",_ui5privacy:"public",description:"the activated row."}]},{name:"popin-change",_ui5privacy:"public",type:{text:"CustomEvent<TablePopinChangeEventDetail>",references:[{name:"TablePopinChangeEventDetail",package:"@ui5/webcomponents",module:"dist/Table.js"}]},description:"Fired when <code>ui5-table-column</code> is shown as a pop-in instead of hiding it.",_ui5since:"1.0.0-rc.6",_ui5parameters:[{type:{text:"Array"},name:"poppedColumns",_ui5privacy:"public",description:"popped-in columns."}]},{name:"load-more",_ui5privacy:"public",type:{text:"CustomEvent"},description:`Fired when the user presses the <code>More</code> button or scrolls to the table's end.
<br><br>

<b>Note:</b> The event will be fired if <code>growing</code> is set to <code>Button</code> or <code>Scroll</code>.`,_ui5since:"1.0.0-rc.11"},{name:"selection-change",_ui5privacy:"public",type:{text:"CustomEvent<TableSelectionChangeEventDetail>",references:[{name:"TableSelectionChangeEventDetail",package:"@ui5/webcomponents",module:"dist/Table.js"}]},description:`Fired when selection is changed by user interaction
in <code>SingleSelect</code> and <code>MultiSelect</code> modes.`,_ui5since:"1.0.0-rc.15",_ui5parameters:[{type:{text:"Array"},name:"selectedRows",_ui5privacy:"public",description:"An array of the selected rows."},{type:{text:"Array"},name:"previouslySelectedRows",_ui5privacy:"public",description:"An array of the previously selected rows."}]}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-table",customElement:!0,_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"Table",module:"dist/Table.js"}},{kind:"custom-element-definition",name:"ui5-table",declaration:{name:"Table",module:"dist/Table.js"}}]},{kind:"javascript-module",path:"dist/TableCell.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-table-cell</code> component defines the structure of the data in a single <code>ui5-table</code> cell.`,name:"TableCell",cssParts:[{description:"Used to style the native <code>td</code> element",name:"cell"}],slots:[{name:"default",description:"Specifies the content of the component.",_ui5propertyName:"content",_ui5type:{text:"Array<HTMLElement> | undefined"},_ui5privacy:"public"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-table-cell",customElement:!0,_ui5privacy:"public",members:[]}],exports:[{kind:"js",name:"default",declaration:{name:"TableCell",module:"dist/TableCell.js"}},{kind:"custom-element-definition",name:"ui5-table-cell",declaration:{name:"TableCell",module:"dist/TableCell.js"}}]},{kind:"javascript-module",path:"dist/TableColumn.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-table-column</code> component allows to define column specific properties that are applied
when rendering the <code>ui5-table</code> component.`,name:"TableColumn",cssParts:[{description:"Used to style the native <code>th</code> element",name:"column"}],slots:[{description:"Defines the content of the column header",name:"default",_ui5privacy:"public",_ui5type:{text:"Array<Node>"}}],members:[{kind:"field",name:"minWidth",type:{text:"number"},description:`Defines the minimum table width required to display this column. By default it is always displayed.
<br><br>
The responsive behavior of the <code>ui5-table</code> is determined by this property. As an example, by setting
<code>minWidth</code> property to <code>400</code> sets the minimum width to 400 pixels, and	shows this column on tablet (and desktop) but hides it on mobile.
<br>
For further responsive design options, see <code>demandPopin</code> property.`,default:"Infinity",privacy:"public",_ui5validator:"Integer"},{kind:"field",name:"popinText",type:{text:"string"},description:"The text for the column when it pops in.",default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"demandPopin",type:{text:"boolean"},description:`According to your <code>minWidth</code> settings, the component can be hidden
in different screen sizes.
<br><br>
Setting this property to <code>true</code>, shows this column as pop-in instead of hiding it.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"popinDisplay",type:{text:"TableColumnPopinDisplay",references:[{name:"TableColumnPopinDisplay",package:"@ui5/webcomponents",module:"dist/types/TableColumnPopinDisplay.js"}]},description:`Defines how the popin row is displayed.

<br><br>
<b>The available values are:</b>

<ul>
<li><code>Block</code></li>
<li><code>Inline</code></li>
</ul>`,default:'"Block"',privacy:"public",_ui5validator:"TableColumnPopinDisplay"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-table-column",customElement:!0,_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"TableColumn",module:"dist/TableColumn.js"}},{kind:"custom-element-definition",name:"ui5-table-column",declaration:{name:"TableColumn",module:"dist/TableColumn.js"}}]},{kind:"javascript-module",path:"dist/TableGroupRow.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-table-group-row</code> component represents a group row in the <code>ui5-table</code>.`,name:"TableGroupRow",cssParts:[{description:"Used to style the native <code>tr</code> element",name:"group-row"}],slots:[{description:"Defines the text of the component. <br> <b>Note:</b> Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.",name:"default",_ui5privacy:"public",_ui5type:{text:"Array<Node>"}}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-table-group-row",customElement:!0,_ui5since:"1.0.0-rc.15",_ui5privacy:"public",_ui5implements:[{name:"ITableRow",package:"@ui5/webcomponents",module:"dist/Table.js"}],members:[]}],exports:[{kind:"js",name:"default",declaration:{name:"TableGroupRow",module:"dist/TableGroupRow.js"}},{kind:"custom-element-definition",name:"ui5-table-group-row",declaration:{name:"TableGroupRow",module:"dist/TableGroupRow.js"}}]},{kind:"javascript-module",path:"dist/TableRow.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-table-row</code> component represents a row in the <code>ui5-table</code>.`,name:"TableRow",cssParts:[{description:"Used to style the native <code>tr</code> element",name:"row"},{description:"Used to style the <code>tr</code> element when a row pops in",name:"popin-row"}],slots:[{name:"default",description:`Defines the cells of the component.
<br><br>
<b>Note:</b> Use <code>ui5-table-cell</code> for the intended design.`,_ui5propertyName:"cells",_ui5type:{text:"Array<TableCell>",references:[{name:"TableCell",package:"@ui5/webcomponents",module:"dist/TableCell.js"}]},_ui5privacy:"public"}],members:[{kind:"field",name:"type",type:{text:"TableRowType",references:[{name:"TableRowType",package:"@ui5/webcomponents",module:"dist/types/TableRowType.js"}]},description:`Defines the visual indication and behavior of the component.

<b>Note:</b> When set to <code>Active</code>, the item will provide visual response upon press,
while with type <code>Inactive</code>-will not.`,default:'"Inactive"',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"TableRowType"},{kind:"field",name:"selected",type:{text:"boolean"},description:"Defines the row's selected state.",default:"false",privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"Boolean"},{kind:"field",name:"navigated",type:{text:"boolean"},description:"Indicates if the table row is navigated.",default:"false",privacy:"public",_ui5since:"1.9.0",_ui5validator:"Boolean"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-table-row",customElement:!0,_ui5privacy:"public",_ui5implements:[{name:"ITableRow",package:"@ui5/webcomponents",module:"dist/Table.js"}]}],exports:[{kind:"js",name:"default",declaration:{name:"TableRow",module:"dist/TableRow.js"}},{kind:"custom-element-definition",name:"ui5-table-row",declaration:{name:"TableRow",module:"dist/TableRow.js"}}]},{kind:"javascript-module",path:"dist/TextArea.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-textarea</code> component is used to enter multiple lines of text.
<br><br>
When empty, it can hold a placeholder similar to a <code>ui5-input</code>.
You can define the rows of the <code>ui5-textarea</code> and also determine specific behavior when handling long texts.

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/TextArea";</code>`,name:"TextArea",cssParts:[{description:"Used to style the native textarea",name:"textarea"}],slots:[{name:"valueStateMessage",description:`Defines the value state message that will be displayed as pop up under the component.

<br><br>
<b>Note:</b> If not specified, a default text (in the respective language) will be displayed.

<br><br>
<b>Note:</b> The <code>valueStateMessage</code> would be displayed if the component has
<code>valueState</code> of type <code>Information</code>, <code>Warning</code> or <code>Error</code>.`,_ui5since:"1.0.0-rc.7",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"}],members:[{kind:"field",name:"value",type:{text:"string"},description:"Defines the value of the component.",default:'""',privacy:"public",_ui5validator:"String",_ui5formProperty:!0,_ui5formEvents:"change,input"},{kind:"field",name:"disabled",type:{text:"boolean"},description:`Indicates whether the user can interact with the component or not.
<br><br>
<b>Note:</b> A disabled component is completely noninteractive.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"readonly",type:{text:"boolean"},description:`Defines whether the component is read-only.
<br><br>
<b>Note:</b> A read-only component is not editable,
but still provides visual feedback upon user interaction.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"required",type:{text:"boolean"},description:"Defines whether the component is required.",default:"false",privacy:"public",_ui5since:"1.0.0-rc.3",_ui5validator:"Boolean"},{kind:"field",name:"placeholder",type:{text:"string"},description:"Defines a short hint intended to aid the user with data entry when the component has no value.",default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"valueState",type:{text:"ValueState",references:[{name:"ValueState",package:"@ui5/webcomponents-base",module:"dist/types/ValueState.js"}]},description:`Defines the value state of the component.
<br><br>

<b>Note:</b> If <code>maxlength</code> property is set,
the component turns into "Warning" state once the characters exceeds the limit.
In this case, only the "Error" state is considered and can be applied.`,default:'"None"',privacy:"public",_ui5since:"1.0.0-rc.7",_ui5validator:"ValueState"},{kind:"field",name:"rows",type:{text:"number"},description:`Defines the number of visible text lines for the component.
<br><br>
<b>Notes:</b>
<ul>
<li>If the <code>growing</code> property is enabled, this property defines the minimum rows to be displayed
in the textarea.</li>
<li>The CSS <code>height</code> property wins over the <code>rows</code> property, if both are set.</li>
</ul>`,default:"0",privacy:"public",_ui5validator:"Integer"},{kind:"field",name:"maxlength",type:{text:"number | undefined"},description:"Defines the maximum number of characters that the <code>value</code> can have.",default:"undefined",privacy:"public",_ui5validator:"Integer"},{kind:"field",name:"showExceededText",type:{text:"boolean"},description:`Determines whether the characters exceeding the maximum allowed character count are visible
in the component.
<br><br>
If set to <code>false</code>, the user is not allowed to enter more characters than what is set in the
<code>maxlength</code> property.
If set to <code>true</code> the characters exceeding the <code>maxlength</code> value are selected on
paste and the counter below the component displays their number.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"growing",type:{text:"boolean"},description:`Enables the component to automatically grow and shrink dynamically with its content.
<br><br>`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"growingMaxLines",type:{text:"number"},description:"Defines the maximum number of lines that the component can grow.",default:"0",privacy:"public",_ui5validator:"Integer"},{kind:"field",name:"name",type:{text:"string"},description:`Determines the name with which the component will be submitted in an HTML form.

<br><br>
<b>Important:</b> For the <code>name</code> property to have effect, you must add the following import to your project:
<code>import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";</code>

<br><br>
<b>Note:</b> When set, a native <code>input</code> HTML element
will be created inside the component so that it can be submitted as
part of an HTML form. Do not use this property unless you need to submit a form.`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"accessibleName",type:{text:"string"},description:"Defines the accessible ARIA name of the component.",default:'""',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"String"},{kind:"field",name:"accessibleNameRef",type:{text:"string"},description:"Receives id(or many ids) of the elements that label the textarea.",default:'""',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"String"}],events:[{name:"change",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired when the text has changed and the focus leaves the component."},{name:"input",_ui5privacy:"public",type:{text:"CustomEvent"},description:`Fired when the value of the component changes at each keystroke or when
something is pasted.`,_ui5since:"1.0.0-rc.5"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-textarea",customElement:!0,_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"TextArea",module:"dist/TextArea.js"}},{kind:"custom-element-definition",name:"ui5-textarea",declaration:{name:"TextArea",module:"dist/TextArea.js"}}]},{kind:"javascript-module",path:"dist/TimePicker.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>
The <code>ui5-time-picker</code> component provides an input field with assigned clocks which are opened on user action.
The <code>ui5-time-picker</code> allows users to select a localized time using touch, mouse, or keyboard input.
It consists of two parts: the time input field and the clocks.

<h3>Usage</h3>
The user can enter a time by:
<ul>
<li>Using the clocks that are displayed in a popup</li>
<li>Typing it in directly in the input field</li>
</ul>
<br><br>
When the user makes an entry and chooses the enter key, the clocks show the corresponding time (hours, minutes and seconds separately).
When the user directly triggers the clocks display, the actual time is displayed.
For the <code>ui5-time-picker</code>

<h3>Formatting</h3>

If a time is entered by typing it into
the input field, it must fit to the used time format.
<br><br>
Supported format options are pattern-based on Unicode LDML Date Format notation.
For more information, see <ui5-link target="_blank" href="http://unicode.org/reports/tr35/#Date_Field_Symbol_Table">UTS #35: Unicode Locale Data Markup Language</ui5-link>.
<br><br>
For example, if the <code>format-pattern</code> is "HH:mm:ss",
a valid value string is "11:42:35" and the same is displayed in the input.

<h3>Keyboard handling</h3>
[F4], [ALT]+[UP], [ALT]+[DOWN] Open/Close picker dialog and move focus to it.
<br>
When closed:
<ul>
<li>[PAGEUP] - Increments hours by 1. If 12 am is reached, increment hours to 1 pm and vice versa.</li>
<li>[PAGEDOWN] - Decrements the corresponding field by 1. If 1 pm is reached, decrement hours to 12 am and vice versa.</li>
<li>[SHIFT]+[PAGEUP] - Increments minutes by 1.</li>
<li>[SHIFT]+[PAGEDOWN] - Decrements minutes by 1.</li>
<li>[SHIFT]+[CTRL]+[PAGEUP] - Increments seconds by 1.</li>
<li>[SHIFT]+[CTRL]+[PAGEDOWN] - Decrements seconds by 1.</li>
<li>
</ul>
When opened:
<ul>
<li>[PAGEUP] - Increments hours by 1. If 12 am is reached, increment hours to 1 pm and vice versa.</li>
<li>[PAGEDOWN] - Decrements the corresponding field by 1. If 1 pm is reached, decrement hours to 12 am and vice versa.</li>
<li>[SHIFT]+[PAGEUP] - Increments minutes by 1.</li>
<li>[SHIFT]+[PAGEDOWN] - Decrements minutes by 1.</li>
<li>[SHIFT]+[CTRL]+[PAGEUP] - Increments seconds by 1.</li>
<li>[SHIFT]+[CTRL]+[PAGEDOWN] - Decrements seconds by 1.</li>
<li>[A] or [P] - Selects AM or PM respectively.</li>
<li>[0]-[9] - Allows direct time selecting (hours/minutes/seconds).</li>
<li>[:] - Allows switching between hours/minutes/seconds clocks. If the last clock is displayed and [:] is pressed, the first clock is beind displayed.</li>
</ul>

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/TimePicker.js";</code>`,name:"TimePicker",members:[{kind:"field",name:"placeholder",type:{text:"string | undefined"},description:`Defines a short hint, intended to aid the user with data entry when the
component has no value.

<br><br>
<b>Note:</b> When no placeholder is set, the format pattern is displayed as a placeholder.
Passing an empty string as the value of this property will make the component appear empty - without placeholder or format pattern.`,default:"undefined",privacy:"public",_ui5validator:"String"},{kind:"field",name:"formatPattern",type:{text:"string"},description:`Determines the format, displayed in the input field.

Example:
HH:mm:ss -> 11:42:35
hh:mm:ss a -> 2:23:15 PM
mm:ss -> 12:04 (only minutes and seconds)`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"dateValue",type:{text:"Date | Array<Date> | null"},description:"Currently selected time represented as JavaScript Date instance",privacy:"public",default:"null",readonly:!0},{kind:"field",name:"value",type:{text:"string | undefined"},description:"Defines a formatted time value.",default:"undefined",privacy:"public",_ui5validator:"String",_ui5formProperty:!0,_ui5formEvents:"change,input",inheritedFrom:{name:"TimePickerBase",module:"dist/TimePickerBase.js"}},{kind:"field",name:"valueState",type:{text:"ValueState",references:[{name:"ValueState",package:"@ui5/webcomponents-base",module:"dist/types/ValueState.js"}]},description:`Defines the value state of the <code>ui5-time-picker</code>.
<br><br>
Available options are:
<ul>
<li><code>None</code></li>
<li><code>Error</code></li>
<li><code>Warning</code></li>
<li><code>Success</code></li>
<li><code>Information</code></li>
</ul>`,default:'"None"',privacy:"public",_ui5validator:"ValueState",inheritedFrom:{name:"TimePickerBase",module:"dist/TimePickerBase.js"}},{kind:"field",name:"disabled",type:{text:"boolean"},description:"Determines whether the <code>ui5-time-picker</code> is displayed as disabled.",default:"false",privacy:"public",_ui5validator:"Boolean",inheritedFrom:{name:"TimePickerBase",module:"dist/TimePickerBase.js"}},{kind:"field",name:"readonly",type:{text:"boolean"},description:"Determines whether the <code>ui5-time-picker</code> is displayed as readonly.",default:"false",privacy:"public",_ui5validator:"Boolean",inheritedFrom:{name:"TimePickerBase",module:"dist/TimePickerBase.js"}},{kind:"method",name:"openPicker",return:{type:{text:"Promise<void>"},description:"Resolves when the picker is open"},description:"Opens the picker.",privacy:"public",inheritedFrom:{name:"TimePickerBase",module:"dist/TimePickerBase.js"}},{kind:"method",name:"closePicker",return:{type:{text:"Promise<void>"},description:"Resolves when the picker is closed"},description:"Closes the picker",privacy:"public",inheritedFrom:{name:"TimePickerBase",module:"dist/TimePickerBase.js"}},{kind:"method",name:"isOpen",return:{type:{text:"boolean"}},description:"Checks if the picker is open",privacy:"public",inheritedFrom:{name:"TimePickerBase",module:"dist/TimePickerBase.js"}},{kind:"method",name:"formatValue",return:{type:{text:"string"},description:"formatted value"},parameters:[{name:"date",type:{text:"Date"},description:"A Java Script date object to be formatted as string",_ui5privacy:"public"}],description:`Formats a Java Script date object into a string representing a locale date and time
according to the <code>formatPattern</code> property of the TimePicker instance`,privacy:"public",inheritedFrom:{name:"TimePickerBase",module:"dist/TimePickerBase.js"}},{kind:"method",name:"isValid",return:{type:{text:"boolean"}},parameters:[{name:"value",type:{text:"string | undefined"},description:"The value to be tested against the current date format",_ui5privacy:"public"}],description:`Checks if a value is valid against the current <code>formatPattern</code> value.

<br><br>
<b>Note:</b> an empty string is considered as valid value.`,privacy:"public",inheritedFrom:{name:"TimePickerBase",module:"dist/TimePickerBase.js"}}],superclass:{name:"TimePickerBase",package:"@ui5/webcomponents",module:"dist/TimePickerBase.js"},tagName:"ui5-time-picker",customElement:!0,_ui5since:"1.0.0-rc.6",_ui5privacy:"public",events:[{name:"change",_ui5privacy:"public",type:{text:"CustomEvent<TimePickerBaseChangeEventDetail>",references:[{name:"TimePickerBaseChangeEventDetail",package:"@ui5/webcomponents",module:"dist/TimePickerBase.js"}]},description:`Fired when the input operation has finished by clicking the "OK" button or
when the text in the input field has changed and the focus leaves the input field.`,_ui5parameters:[{type:{text:"string"},name:"value",_ui5privacy:"public",description:"The submitted value."},{type:{text:"boolean"},name:"valid",_ui5privacy:"public",description:"Indicator if the value is in correct format pattern and in valid range."}],inheritedFrom:{name:"TimePickerBase",module:"dist/TimePickerBase.js"}},{name:"input",_ui5privacy:"public",type:{text:"CustomEvent<TimePickerBaseInputEventDetail>",references:[{name:"TimePickerBaseInputEventDetail",package:"@ui5/webcomponents",module:"dist/TimePickerBase.js"}]},description:"Fired when the value of the <code>ui5-time-picker</code> is changed at each key stroke.",_ui5parameters:[{type:{text:"string"},name:"value",_ui5privacy:"public",description:"The current value."},{type:{text:"boolean"},name:"valid",_ui5privacy:"public",description:"Indicator if the value is in correct format pattern and in valid range."}],inheritedFrom:{name:"TimePickerBase",module:"dist/TimePickerBase.js"}}],slots:[{name:"valueStateMessage",description:`Defines the value state message that will be displayed as pop up under the <code>ui5-time-picker</code>.
<br><br>

<b>Note:</b> If not specified, a default text (in the respective language) will be displayed.
<br>
<b>Note:</b> The <code>valueStateMessage</code> would be displayed,
when the <code>ui5-time-picker</code> is in <code>Information</code>, <code>Warning</code> or <code>Error</code> value state.`,_ui5since:"1.0.0-rc.8",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"}]}],exports:[{kind:"js",name:"default",declaration:{name:"TimePicker",module:"dist/TimePicker.js"}},{kind:"custom-element-definition",name:"ui5-time-picker",declaration:{name:"TimePicker",module:"dist/TimePicker.js"}}]},{kind:"javascript-module",path:"dist/TimePickerBase.js",declarations:[{kind:"class",description:"",name:"TimePickerBase",slots:[{name:"valueStateMessage",description:`Defines the value state message that will be displayed as pop up under the <code>ui5-time-picker</code>.
<br><br>

<b>Note:</b> If not specified, a default text (in the respective language) will be displayed.
<br>
<b>Note:</b> The <code>valueStateMessage</code> would be displayed,
when the <code>ui5-time-picker</code> is in <code>Information</code>, <code>Warning</code> or <code>Error</code> value state.`,_ui5since:"1.0.0-rc.8",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"}],members:[{kind:"field",name:"value",type:{text:"string | undefined"},description:"Defines a formatted time value.",default:"undefined",privacy:"public",_ui5validator:"String",_ui5formProperty:!0,_ui5formEvents:"change,input"},{kind:"field",name:"valueState",type:{text:"ValueState",references:[{name:"ValueState",package:"@ui5/webcomponents-base",module:"dist/types/ValueState.js"}]},description:`Defines the value state of the <code>ui5-time-picker</code>.
<br><br>
Available options are:
<ul>
<li><code>None</code></li>
<li><code>Error</code></li>
<li><code>Warning</code></li>
<li><code>Success</code></li>
<li><code>Information</code></li>
</ul>`,default:'"None"',privacy:"public",_ui5validator:"ValueState"},{kind:"field",name:"disabled",type:{text:"boolean"},description:"Determines whether the <code>ui5-time-picker</code> is displayed as disabled.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"readonly",type:{text:"boolean"},description:"Determines whether the <code>ui5-time-picker</code> is displayed as readonly.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"method",name:"openPicker",return:{type:{text:"Promise<void>"},description:"Resolves when the picker is open"},description:"Opens the picker.",privacy:"public"},{kind:"method",name:"closePicker",return:{type:{text:"Promise<void>"},description:"Resolves when the picker is closed"},description:"Closes the picker",privacy:"public"},{kind:"method",name:"isOpen",return:{type:{text:"boolean"}},description:"Checks if the picker is open",privacy:"public"},{kind:"method",name:"formatValue",return:{type:{text:"string"},description:"formatted value"},parameters:[{name:"date",type:{text:"Date"},description:"A Java Script date object to be formatted as string",_ui5privacy:"public"}],description:`Formats a Java Script date object into a string representing a locale date and time
according to the <code>formatPattern</code> property of the TimePicker instance`,privacy:"public"},{kind:"method",name:"isValid",return:{type:{text:"boolean"}},parameters:[{name:"value",type:{text:"string | undefined"},description:"The value to be tested against the current date format",_ui5privacy:"public"}],description:`Checks if a value is valid against the current <code>formatPattern</code> value.

<br><br>
<b>Note:</b> an empty string is considered as valid value.`,privacy:"public"}],events:[{name:"change",_ui5privacy:"public",type:{text:"CustomEvent<TimePickerBaseChangeEventDetail>",references:[{name:"TimePickerBaseChangeEventDetail",package:"@ui5/webcomponents",module:"dist/TimePickerBase.js"}]},description:`Fired when the input operation has finished by clicking the "OK" button or
when the text in the input field has changed and the focus leaves the input field.`,_ui5parameters:[{type:{text:"string"},name:"value",_ui5privacy:"public",description:"The submitted value."},{type:{text:"boolean"},name:"valid",_ui5privacy:"public",description:"Indicator if the value is in correct format pattern and in valid range."}]},{name:"input",_ui5privacy:"public",type:{text:"CustomEvent<TimePickerBaseInputEventDetail>",references:[{name:"TimePickerBaseInputEventDetail",package:"@ui5/webcomponents",module:"dist/TimePickerBase.js"}]},description:"Fired when the value of the <code>ui5-time-picker</code> is changed at each key stroke.",_ui5parameters:[{type:{text:"string"},name:"value",_ui5privacy:"public",description:"The current value."},{type:{text:"boolean"},name:"valid",_ui5privacy:"public",description:"Indicator if the value is in correct format pattern and in valid range."}]}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},customElement:!0,_ui5since:"1.0.0-rc.6",_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"TimePickerBase",module:"dist/TimePickerBase.js"}}]},{kind:"javascript-module",path:"dist/TimePickerClock.js",declarations:[],exports:[{kind:"js",name:"default",declaration:{name:"TimePickerClock",module:"dist/TimePickerClock.js"}}]},{kind:"javascript-module",path:"dist/TimePickerInternals.js",declarations:[],exports:[{kind:"js",name:"default",declaration:{name:"TimePickerInternals",module:"dist/TimePickerInternals.js"}}]},{kind:"javascript-module",path:"dist/TimeSelection.js",declarations:[],exports:[{kind:"js",name:"default",declaration:{name:"TimeSelection",module:"dist/TimeSelection.js"}}]},{kind:"javascript-module",path:"dist/TimeSelectionClocks.js",declarations:[],exports:[{kind:"js",name:"default",declaration:{name:"TimeSelectionClocks",module:"dist/TimeSelectionClocks.js"}}]},{kind:"javascript-module",path:"dist/TimeSelectionInputs.js",declarations:[],exports:[{kind:"js",name:"default",declaration:{name:"TimeSelectionInputs",module:"dist/TimeSelectionInputs.js"}}]},{kind:"javascript-module",path:"dist/Title.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-title</code> component is used to display titles inside a page.
It is a simple, large-sized text with explicit header/title semantics.

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/Title";</code>`,name:"Title",slots:[{description:`Defines the text of the component.
This component supports nesting a <code>Link</code> component inside.
<br><br>
<b>Note:</b> Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"default",_ui5privacy:"public",_ui5type:{text:"Array<Node>"}}],members:[{kind:"field",name:"wrappingType",type:{text:"WrappingType",references:[{name:"WrappingType",package:"@ui5/webcomponents",module:"dist/types/WrappingType.js"}]},description:`Defines how the text of a component will be displayed when there is not enough space.
<br><b>Note:</b> for option "Normal" the text will wrap and the words will not be broken based on hyphenation.`,default:'"None"',privacy:"public",_ui5validator:"WrappingType"},{kind:"field",name:"level",type:{text:"TitleLevel",references:[{name:"TitleLevel",package:"@ui5/webcomponents",module:"dist/types/TitleLevel.js"}]},description:`Defines the component level.
Available options are: <code>"H6"</code> to <code>"H1"</code>.`,default:'"H2"',privacy:"public",_ui5validator:"TitleLevel"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-title",customElement:!0,_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"Title",module:"dist/Title.js"}},{kind:"custom-element-definition",name:"ui5-title",declaration:{name:"Title",module:"dist/Title.js"}}]},{kind:"javascript-module",path:"dist/Toast.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-toast</code> is a small, non-disruptive popup for success or information messages that
disappears automatically after a few seconds.


<h3>Usage</h3>

<h4>When to use:</h4>
<ul>
<li>You want to display a short success or information message.</li>
<li>You do not want to interrupt users while they are performing an action.</li>
<li>You want to confirm a successful action.</li>
</ul>
<h4>When not to use:</h4>
<ul>
<li>You want to display error or warning message.</li>
<li>You want to interrupt users while they are performing an action.</li>
<li>You want to make sure that users read the message before they leave the page.</li>
<li>You want users to be able to copy some part of the message text.</li>
</ul>

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/Toast";</code>`,name:"Toast",slots:[{description:`Defines the text of the component.
<br><br>
<b>Note:</b> Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"default",_ui5privacy:"public",_ui5type:{text:"Array<Node>"}}],members:[{kind:"field",name:"duration",type:{text:"number"},description:`Defines the duration in milliseconds for which component
remains on the screen before it's automatically closed.
<br><br>
<b>Note:</b> The minimum supported value is <code>500</code> ms
and even if a lower value is set, the duration would remain <code>500</code> ms.`,default:"3000",privacy:"public",_ui5validator:"Integer"},{kind:"field",name:"placement",type:{text:"ToastPlacement",references:[{name:"ToastPlacement",package:"@ui5/webcomponents",module:"dist/types/ToastPlacement.js"}]},description:`Defines the placement of the component.
<br><br>`,default:'"BottomCenter"',privacy:"public",_ui5validator:"ToastPlacement"},{kind:"method",name:"show",return:{type:{text:"void"}},description:"Shows the component.",privacy:"public"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-toast",customElement:!0,_ui5since:"1.0.0-rc.6",_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"Toast",module:"dist/Toast.js"}},{kind:"custom-element-definition",name:"ui5-toast",declaration:{name:"Toast",module:"dist/Toast.js"}}]},{kind:"javascript-module",path:"dist/ToggleButton.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-toggle-button</code> component is an enhanced <code>ui5-button</code>
that can be toggled between pressed and normal states.
Users can use the <code>ui5-toggle-button</code> as a switch to turn a setting on or off.
It can also be used to represent an independent choice similar to a check box.
<br><br>
Clicking or tapping on a <code>ui5-toggle-button</code> changes its state to <code>pressed</code>. The button returns to
its initial state when the user clicks or taps on it again.
By applying additional custom CSS-styling classes, apps can give a different style to any <code>ui5-toggle-button</code>.

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/ToggleButton";</code>`,name:"ToggleButton",members:[{kind:"field",name:"pressed",type:{text:"boolean"},description:"Determines whether the component is displayed as pressed.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"design",type:{text:"ButtonDesign",references:[{name:"ButtonDesign",package:"@ui5/webcomponents",module:"dist/types/ButtonDesign.js"}]},description:"Defines the component design.",default:'"Default"',privacy:"public",_ui5validator:"ButtonDesign",inheritedFrom:{name:"Button",module:"dist/Button.js"}},{kind:"field",name:"disabled",type:{text:"boolean"},description:`Defines whether the component is disabled.
A disabled component can't be pressed or
focused, and it is not in the tab chain.`,default:"false",privacy:"public",_ui5validator:"Boolean",inheritedFrom:{name:"Button",module:"dist/Button.js"}},{kind:"field",name:"icon",type:{text:"string"},description:`Defines the icon, displayed as graphical element within the component.
The SAP-icons font provides numerous options.
<br><br>
Example:

See all the available icons within the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.`,default:'""',privacy:"public",_ui5validator:"String",inheritedFrom:{name:"Button",module:"dist/Button.js"}},{kind:"field",name:"iconEnd",type:{text:"boolean"},description:"Defines whether the icon should be displayed after the component text.",default:"false",privacy:"public",_ui5validator:"Boolean",inheritedFrom:{name:"Button",module:"dist/Button.js"}},{kind:"field",name:"submits",type:{text:"boolean"},description:`When set to <code>true</code>, the component will
automatically submit the nearest HTML form element on <code>press</code>.
<br><br>
<b>Note:</b> For the <code>submits</code> property to have effect, you must add the following import to your project:
<code>import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";</code>`,default:"false",privacy:"public",deprecated:'Set the "type" property to "Submit" to achieve the same result. The "submits" property is ignored if "type" is set to any value other than "Button".',_ui5validator:"Boolean",inheritedFrom:{name:"Button",module:"dist/Button.js"}},{kind:"field",name:"tooltip",type:{text:"string"},description:`Defines the tooltip of the component.
<br>
<b>Note:</b> A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.`,default:'""',privacy:"public",_ui5since:"1.2.0",_ui5validator:"String",inheritedFrom:{name:"Button",module:"dist/Button.js"}},{kind:"field",name:"accessibleName",type:{text:"string | undefined"},description:"Defines the accessible ARIA name of the component.",default:"undefined",privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"String",inheritedFrom:{name:"Button",module:"dist/Button.js"}},{kind:"field",name:"accessibleNameRef",type:{text:"string"},description:"Receives id(or many ids) of the elements that label the component.",default:'""',privacy:"public",_ui5since:"1.1.0",_ui5validator:"String",inheritedFrom:{name:"Button",module:"dist/Button.js"}},{kind:"field",name:"accessibilityAttributes",type:{text:"AccessibilityAttributes",references:[{name:"AccessibilityAttributes",package:"@ui5/webcomponents",module:"dist/Button.js"}]},description:`An object of strings that defines several additional accessibility attribute values
for customization depending on the use case.

It supports the following fields:

<ul>
		<li><code>expanded</code>: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed. Accepts the following string values:
		<ul>
			<li><code>true</code></li>
			<li><code>false</code></li>
		</ul>
		</li>
		<li><code>hasPopup</code>: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button. Accepts the following string values:
			<ul>
			<li><code>Dialog</code></li>
			<li><code>Grid</code></li>
			<li><code>Listbox</code></li>
			<li><code>Menu</code></li>
			<li><code>Tree</code></li>
			</ul>
		</li>
		<li><code>controls</code>: Identifies the element (or elements) whose contents or presence are controlled by the button element. Accepts a string value.</li>
</ul>`,privacy:"public",default:"{}",_ui5since:"1.2.0",_ui5validator:"Object",inheritedFrom:{name:"Button",module:"dist/Button.js"}},{kind:"field",name:"type",type:{text:"ButtonType",references:[{name:"ButtonType",package:"@ui5/webcomponents",module:"dist/types/ButtonType.js"}]},description:`Defines whether the button has special form-related functionality.

<br><br>
<b>Note:</b> For the <code>type</code> property to have effect, you must add the following import to your project:
<code>import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";</code>`,default:'"Button"',privacy:"public",_ui5since:"1.15.0",_ui5validator:"ButtonType",inheritedFrom:{name:"Button",module:"dist/Button.js"}}],superclass:{name:"Button",package:"@ui5/webcomponents",module:"dist/Button.js"},tagName:"ui5-toggle-button",customElement:!0,_ui5privacy:"public",events:[{name:"click",_ui5privacy:"public",type:{text:"Event"},description:`Fired when the component is activated either with a
mouse/tap or by using the Enter or Space key.
<br><br>
<b>Note:</b> The event will not be fired if the <code>disabled</code>
property is set to <code>true</code>.`,inheritedFrom:{name:"Button",module:"dist/Button.js"}}],slots:[{name:"default",description:`Defines the text of the component.
<br><br>
<b>Note:</b> Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,_ui5propertyName:"text",_ui5type:{text:"Array<Node>"},_ui5privacy:"public"}],cssParts:[{description:"Used to style the native button element",name:"button"}]}],exports:[{kind:"js",name:"default",declaration:{name:"ToggleButton",module:"dist/ToggleButton.js"}},{kind:"custom-element-definition",name:"ui5-toggle-button",declaration:{name:"ToggleButton",module:"dist/ToggleButton.js"}}]},{kind:"javascript-module",path:"dist/ToggleSpinButton.js",declarations:[],exports:[{kind:"js",name:"default",declaration:{name:"ToggleSpinButton",module:"dist/ToggleSpinButton.js"}}]},{kind:"javascript-module",path:"dist/Token.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

Tokens are small items of information (similar to tags) that mainly serve to visualize previously selected items.

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/Token.js";</code>`,name:"Token",slots:[{name:"closeIcon",description:`Defines the close icon for the token. If nothing is provided to this slot, the default close icon will be used.
Accepts <code>ui5-icon</code>.`,_ui5since:"1.0.0-rc.9",_ui5type:{text:"Array<IIcon>",references:[{name:"IIcon",package:"@ui5/webcomponents",module:"dist/Icon.js"}]},_ui5privacy:"public"}],members:[{kind:"field",name:"text",type:{text:"string"},description:"Defines the text of the token.",default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"readonly",type:{text:"boolean"},description:`Defines whether the component is read-only.
<br><br>
<b>Note:</b> A read-only component can not be deleted or selected,
but still provides visual feedback upon user interaction.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"selected",type:{text:"boolean"},description:"Defines whether the component is selected or not.",default:"false",privacy:"public",_ui5validator:"Boolean"}],events:[{name:"select",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired when the the component is selected by user interaction with mouse or by clicking space."}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-token",customElement:!0,_ui5since:"1.0.0-rc.9",_ui5privacy:"public",_ui5implements:[{name:"IToken",package:"@ui5/webcomponents",module:"dist/MultiInput.js"}]}],exports:[{kind:"js",name:"default",declaration:{name:"Token",module:"dist/Token.js"}},{kind:"custom-element-definition",name:"ui5-token",declaration:{name:"Token",module:"dist/Token.js"}}]},{kind:"javascript-module",path:"dist/Tokenizer.js",declarations:[],exports:[{kind:"js",name:"default",declaration:{name:"Tokenizer",module:"dist/Tokenizer.js"}}]},{kind:"javascript-module",path:"dist/Toolbar.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-toolbar</code> component is used to create a horizontal layout with items.
The items can be overflowing in a popover, when the space is not enough to show all of them.

<h3>Keyboard Handling</h3>
The <code>ui5-toolbar</code> provides advanced keyboard handling.
<br>
<ul>
<li>The control is not interactive, but can contain of interactive elements </li>
<li>[TAB] - iterates through elements</li>
</ul>
<br>

<h3>ES6 Module Import</h3>
<code>import "@ui5/webcomponents/dist/Toolbar";</code>`,name:"Toolbar",slots:[{name:"default",description:`Defines the items of the component.
 
  <b>Note:</b> Currently only <code>ui5-toolbar-button</code>, <code>ui5-toolbar-select</code>, <code>ui5-toolbar-separator</code> and <code>ui5-toolbar-spacer</code> are allowed here.`,_ui5propertyName:"items",_ui5type:{text:"Array<ToolbarItem>",references:[{name:"ToolbarItem",package:"@ui5/webcomponents",module:"dist/ToolbarItem.js"}]},_ui5privacy:"public"}],members:[{kind:"field",name:"alignContent",type:{text:"ToolbarAlign",references:[{name:"ToolbarAlign",package:"@ui5/webcomponents",module:"dist/types/ToolbarAlign.js"}]},description:"Indicated the direction in which the Toolbar items will be aligned.",privacy:"public",default:'"End"',_ui5validator:"ToolbarAlign"},{kind:"field",name:"accessibleName",type:{text:"string"},description:"Defines the accessible ARIA name of the component.",default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"accessibleNameRef",type:{text:"string"},description:"Receives id(or many ids) of the elements that label the input.",default:'""',privacy:"public",_ui5validator:"String"},{kind:"method",name:"isOverflowOpen",return:{type:{text:"Promise<boolean>"}},description:"Returns if the overflow popup is open.",privacy:"public"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-toolbar",customElement:!0,_ui5since:"1.17.0",_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"Toolbar",module:"dist/Toolbar.js"}},{kind:"custom-element-definition",name:"ui5-toolbar",declaration:{name:"Toolbar",module:"dist/Toolbar.js"}}]},{kind:"javascript-module",path:"dist/ToolbarButton.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>
The <code>ui5-toolbar-button</code> represents an abstract action,
used in the <code>ui5-toolbar</code>.

<h3>ES6 Module Import</h3>
<code>import "@ui5/webcomponents/dist/ToolbarButton";</code>`,name:"ToolbarButton",members:[{kind:"field",name:"disabled",type:{text:"boolean"},description:`Defines if the action is disabled.
<br><br>
<b>Note:</b> a disabled action can't be pressed or focused, and it is not in the tab chain.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"design",type:{text:"ButtonDesign",references:[{name:"ButtonDesign",package:"@ui5/webcomponents",module:"dist/types/ButtonDesign.js"}]},description:`Defines the action design.
<b>The available values are:</b>

<ul>
<li><code>Default</code></li>
<li><code>Emphasized</code></li>
<li><code>Positive</code></li>
<li><code>Negative</code></li>
<li><code>Transparent</code></li>
<li><code>Attention</code></li>
</ul>`,default:'"Default"',privacy:"public",_ui5validator:"ButtonDesign"},{kind:"field",name:"icon",type:{text:"string"},description:`Defines the <code>icon</code> source URI.
<br><br>
<b>Note:</b>
SAP-icons font provides numerous buil-in icons. To find all the available icons, see the
<ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"iconEnd",type:{text:"boolean"},description:"Defines whether the icon should be displayed after the component text.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"tooltip",type:{text:"string"},description:`Defines the tooltip of the component.
<br>
<b>Note:</b> A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"accessibleName",type:{text:"string | undefined"},description:"Defines the accessible ARIA name of the component.",default:"undefined",privacy:"public",_ui5validator:"String"},{kind:"field",name:"accessibleNameRef",type:{text:"string"},description:"Receives id(or many ids) of the elements that label the component.",default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"accessibilityAttributes",type:{text:"AccessibilityAttributes",references:[{name:"AccessibilityAttributes",package:"@ui5/webcomponents",module:"dist/ToolbarButton.js"}]},description:`An object of strings that defines several additional accessibility attribute values
for customization depending on the use case.

It supports the following fields:

<ul>
		<li><code>expanded</code>: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed. Accepts the following string values:
		<ul>
			<li><code>true</code></li>
			<li><code>false</code></li>
		</ul>
		</li>
		<li><code>hasPopup</code>: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button. Accepts the following string values:
			<ul>
			<li><code>Dialog</code></li>
			<li><code>Grid</code></li>
			<li><code>Listbox</code></li>
			<li><code>Menu</code></li>
			<li><code>Tree</code></li>
			</ul>
		</li>
		<li><code>controls</code>: Identifies the element (or elements) whose contents or presence are controlled by the button element. Accepts a string value.</li>
</ul>`,default:"{}",privacy:"public",_ui5validator:"Object"},{kind:"field",name:"text",type:{text:"string"},description:"Button text",privacy:"public",default:'""',_ui5validator:"String"},{kind:"field",name:"width",type:{text:"string | undefined"},description:`Defines the width of the button.
<br><br>

<b>Note:</b> all CSS sizes are supported - 'percentage', 'px', 'rem', 'auto', etc.`,default:"undefined",privacy:"public",_ui5validator:"CSSSize"},{kind:"field",name:"overflowPriority",type:{text:"ToolbarItemOverflowBehavior",references:[{name:"ToolbarItemOverflowBehavior",package:"@ui5/webcomponents",module:"dist/types/ToolbarItemOverflowBehavior.js"}]},description:`Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set,
the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.
Available options are:
<ul>
<li><code>NeverOverflow</code></li>
<li><code>AlwaysOverflow</code></li>
<li><code>Default</code></li>
</ul>`,privacy:"public",default:'"Default"',_ui5validator:"ToolbarItemOverflowBehavior",inheritedFrom:{name:"ToolbarItem",module:"dist/ToolbarItem.js"}},{kind:"field",name:"preventOverflowClosing",type:{text:"boolean"},description:`Defines if the toolbar overflow popup should close upon intereaction with the item.
It will close by default.`,default:"false",privacy:"public",_ui5validator:"Boolean",inheritedFrom:{name:"ToolbarItem",module:"dist/ToolbarItem.js"}}],events:[{name:"click",_ui5privacy:"public",type:{text:"CustomEvent"},description:`Fired when the component is activated either with a
mouse/tap or by using the Enter or Space key.
<br><br>
<b>Note:</b> The event will not be fired if the <code>disabled</code>
property is set to <code>true</code>.`}],superclass:{name:"ToolbarItem",package:"@ui5/webcomponents",module:"dist/ToolbarItem.js"},tagName:"ui5-toolbar-button",customElement:!0,_ui5since:"1.17.0",_ui5privacy:"public",_ui5abstract:!0}],exports:[{kind:"js",name:"default",declaration:{name:"ToolbarButton",module:"dist/ToolbarButton.js"}},{kind:"custom-element-definition",name:"ui5-toolbar-button",declaration:{name:"ToolbarButton",module:"dist/ToolbarButton.js"}}]},{kind:"javascript-module",path:"dist/ToolbarItem.js",declarations:[{kind:"class",description:"Represents an abstract class for items, used in the <code>ui5-toolbar</code>.",name:"ToolbarItem",members:[{kind:"field",name:"overflowPriority",type:{text:"ToolbarItemOverflowBehavior",references:[{name:"ToolbarItemOverflowBehavior",package:"@ui5/webcomponents",module:"dist/types/ToolbarItemOverflowBehavior.js"}]},description:`Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set,
the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.
Available options are:
<ul>
<li><code>NeverOverflow</code></li>
<li><code>AlwaysOverflow</code></li>
<li><code>Default</code></li>
</ul>`,privacy:"public",default:'"Default"',_ui5validator:"ToolbarItemOverflowBehavior"},{kind:"field",name:"preventOverflowClosing",type:{text:"boolean"},description:`Defines if the toolbar overflow popup should close upon intereaction with the item.
It will close by default.`,default:"false",privacy:"public",_ui5validator:"Boolean"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},customElement:!0,_ui5since:"1.17.0",_ui5privacy:"public",_ui5abstract:!0}],exports:[{kind:"js",name:"default",declaration:{name:"ToolbarItem",module:"dist/ToolbarItem.js"}}]},{kind:"javascript-module",path:"dist/ToolbarRegistry.js",declarations:[],exports:[]},{kind:"javascript-module",path:"dist/ToolbarSelect.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>
The <code>ui5-toolbar-select</code> component is used to create a toolbar drop-down list.
The items inside the <code>ui5-toolbar-select</code> define the available options by using the <code>ui5-toolbar-select-option</code> component.

<h3>ES6 Module Import</h3>
<code>import "@ui5/webcomponents/dist/ToolbarSelect";</code>
<br>
<code>import "@ui5/webcomponents/dist/ToolbarSelectOption";</code> (comes with <code>ui5-toolbar-select</code>)`,name:"ToolbarSelect",slots:[{name:"default",description:`Defines the component options.

<br><br>
<b>Note:</b> Only one selected option is allowed.
If more than one option is defined as selected, the last one would be considered as the selected one.

<br><br>
<b>Note:</b> Use the <code>ui5-toolbar-select-option</code> component to define the desired options.`,_ui5propertyName:"options",_ui5type:{text:"Array<ToolbarSelectOption>",references:[{name:"ToolbarSelectOption",package:"@ui5/webcomponents",module:"dist/ToolbarSelectOption.js"}]},_ui5privacy:"public"}],members:[{kind:"field",name:"width",type:{text:"string | undefined"},description:`Defines the width of the select.
<br><br>

<b>Note:</b> all CSS sizes are supported - 'percentage', 'px', 'rem', 'auto', etc.`,default:"undefined",privacy:"public",_ui5validator:"CSSSize"},{kind:"field",name:"valueState",type:{text:"ValueState",references:[{name:"ValueState",package:"@ui5/webcomponents-base",module:"dist/types/ValueState.js"}]},description:`Defines the value state of the component.
<br><br>`,default:'"None"',privacy:"public",_ui5validator:"ValueState"},{kind:"field",name:"disabled",type:{text:"boolean"},description:`Defines whether the component is in disabled state.
<br><br>
<b>Note:</b> A disabled component is noninteractive.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"accessibleName",type:{text:"string"},description:"Defines the accessible ARIA name of the component.",privacy:"public",default:'""',_ui5validator:"String"},{kind:"field",name:"accessibleNameRef",type:{text:"string"},description:"Receives id(or many ids) of the elements that label the select.",default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"overflowPriority",type:{text:"ToolbarItemOverflowBehavior",references:[{name:"ToolbarItemOverflowBehavior",package:"@ui5/webcomponents",module:"dist/types/ToolbarItemOverflowBehavior.js"}]},description:`Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set,
the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.
Available options are:
<ul>
<li><code>NeverOverflow</code></li>
<li><code>AlwaysOverflow</code></li>
<li><code>Default</code></li>
</ul>`,privacy:"public",default:'"Default"',_ui5validator:"ToolbarItemOverflowBehavior",inheritedFrom:{name:"ToolbarItem",module:"dist/ToolbarItem.js"}},{kind:"field",name:"preventOverflowClosing",type:{text:"boolean"},description:`Defines if the toolbar overflow popup should close upon intereaction with the item.
It will close by default.`,default:"false",privacy:"public",_ui5validator:"Boolean",inheritedFrom:{name:"ToolbarItem",module:"dist/ToolbarItem.js"}}],events:[{name:"change",_ui5privacy:"public",type:{text:"CustomEvent<ToolbarSelectChangeEventDetail>",references:[{name:"ToolbarSelectChangeEventDetail",package:"@ui5/webcomponents",module:"dist/ToolbarSelect.js"}]},description:"Fired when the selected option changes.",_ui5allowPreventDefault:!0,_ui5parameters:[{type:{text:"HTMLElement"},name:"selectedOption",_ui5privacy:"public",description:"the selected option."}]},{name:"open",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired after the component's dropdown menu opens."},{name:"close",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired after the component's dropdown menu closes."}],superclass:{name:"ToolbarItem",package:"@ui5/webcomponents",module:"dist/ToolbarItem.js"},tagName:"ui5-toolbar-select",customElement:!0,_ui5since:"1.17.0",_ui5privacy:"public",_ui5abstract:!0}],exports:[{kind:"js",name:"default",declaration:{name:"ToolbarSelect",module:"dist/ToolbarSelect.js"}},{kind:"custom-element-definition",name:"ui5-toolbar-select",declaration:{name:"ToolbarSelect",module:"dist/ToolbarSelect.js"}}]},{kind:"javascript-module",path:"dist/ToolbarSelectOption.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>

The <code>ui5-toolbar-select-option</code> component defines the content of an option in the <code>ui5-toolbar-select</code>.`,name:"ToolbarSelectOption",slots:[{name:"default",description:`Defines the text of the component.
<br><br>
<b>Note:</b> Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,_ui5propertyName:"text",_ui5type:{text:"Array<Node>"},_ui5privacy:"public"}],members:[{kind:"field",name:"selected",type:{text:"boolean"},description:"Defines the selected state of the component.",default:"false",privacy:"public",_ui5validator:"Boolean"}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-toolbar-select-option",customElement:!0,_ui5since:"1.17.0",_ui5privacy:"public",_ui5abstract:!0}],exports:[{kind:"js",name:"default",declaration:{name:"ToolbarSelectOption",module:"dist/ToolbarSelectOption.js"}},{kind:"custom-element-definition",name:"ui5-toolbar-select-option",declaration:{name:"ToolbarSelectOption",module:"dist/ToolbarSelectOption.js"}}]},{kind:"javascript-module",path:"dist/ToolbarSeparator.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>
The <code>ui5-toolbar-separator</code> is an element, used for visual separation between two elements.
It takes no space in calculating toolbar items width.`,name:"ToolbarSeparator",superclass:{name:"ToolbarItem",package:"@ui5/webcomponents",module:"dist/ToolbarItem.js"},tagName:"ui5-toolbar-separator",customElement:!0,_ui5since:"1.17.0",_ui5privacy:"public",_ui5abstract:!0,members:[{kind:"field",name:"overflowPriority",type:{text:"ToolbarItemOverflowBehavior",references:[{name:"ToolbarItemOverflowBehavior",package:"@ui5/webcomponents",module:"dist/types/ToolbarItemOverflowBehavior.js"}]},description:`Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set,
the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.
Available options are:
<ul>
<li><code>NeverOverflow</code></li>
<li><code>AlwaysOverflow</code></li>
<li><code>Default</code></li>
</ul>`,privacy:"public",default:'"Default"',_ui5validator:"ToolbarItemOverflowBehavior",inheritedFrom:{name:"ToolbarItem",module:"dist/ToolbarItem.js"}},{kind:"field",name:"preventOverflowClosing",type:{text:"boolean"},description:`Defines if the toolbar overflow popup should close upon intereaction with the item.
It will close by default.`,default:"false",privacy:"public",_ui5validator:"Boolean",inheritedFrom:{name:"ToolbarItem",module:"dist/ToolbarItem.js"}}]}],exports:[{kind:"js",name:"default",declaration:{name:"ToolbarSeparator",module:"dist/ToolbarSeparator.js"}},{kind:"custom-element-definition",name:"ui5-toolbar-separator",declaration:{name:"ToolbarSeparator",module:"dist/ToolbarSeparator.js"}}]},{kind:"javascript-module",path:"dist/ToolbarSpacer.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>
The <code>ui5-toolbar-spacer</code> is an element, used for taking needed space for toolbar items to take 100% width.
It takes no space in calculating toolbar items width.`,name:"ToolbarSpacer",members:[{kind:"field",name:"width",type:{text:"string | undefined"},description:`Defines the width of the spacer.
<br><br>

<b>Note:</b> all CSS sizes are supported - 'percentage', 'px', 'rem', 'auto', etc.`,privacy:"public",default:"undefined",_ui5validator:"CSSSize"},{kind:"field",name:"overflowPriority",type:{text:"ToolbarItemOverflowBehavior",references:[{name:"ToolbarItemOverflowBehavior",package:"@ui5/webcomponents",module:"dist/types/ToolbarItemOverflowBehavior.js"}]},description:`Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set,
the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.
Available options are:
<ul>
<li><code>NeverOverflow</code></li>
<li><code>AlwaysOverflow</code></li>
<li><code>Default</code></li>
</ul>`,privacy:"public",default:'"Default"',_ui5validator:"ToolbarItemOverflowBehavior",inheritedFrom:{name:"ToolbarItem",module:"dist/ToolbarItem.js"}},{kind:"field",name:"preventOverflowClosing",type:{text:"boolean"},description:`Defines if the toolbar overflow popup should close upon intereaction with the item.
It will close by default.`,default:"false",privacy:"public",_ui5validator:"Boolean",inheritedFrom:{name:"ToolbarItem",module:"dist/ToolbarItem.js"}}],superclass:{name:"ToolbarItem",package:"@ui5/webcomponents",module:"dist/ToolbarItem.js"},tagName:"ui5-toolbar-spacer",customElement:!0,_ui5since:"1.17.0",_ui5privacy:"public",_ui5abstract:!0}],exports:[{kind:"js",name:"default",declaration:{name:"ToolbarSpacer",module:"dist/ToolbarSpacer.js"}},{kind:"custom-element-definition",name:"ui5-toolbar-spacer",declaration:{name:"ToolbarSpacer",module:"dist/ToolbarSpacer.js"}}]},{kind:"javascript-module",path:"dist/Tree.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>
The <code>ui5-tree</code> component provides a tree structure for displaying data in a hierarchy.

<h3>Usage</h3>

<h4>When to use:</h4>
<ul>
<li>To display hierarchically structured items.</li>
<li>To select one or more items out of a set of hierarchically structured items.</li>
</ul>

<h4>When not to use:</h4>
<ul>
<li>To display items not hierarchically structured. In this case, use the List component.</li>
<li>To select one item from a very small number of non-hierarchical items. Select or ComboBox might be more appropriate.</li>
<li>The hierarchy turns out to have only two levels. In this case, use List with group items.</li>
</ul>

<h3>Keyboard Handling</h3>

The <code>ui5-tree</code> provides advanced keyboard handling.
The user can use the following keyboard shortcuts in order to navigate trough the tree:
<ul>
<li>[UP/DOWN] - Navigates up and down the tree items that are currently visible.</li>
<li>[RIGHT] - Drills down the tree by expanding the tree nodes.</li>
<li>[LEFT] - Goes up the tree and collapses the tree nodes.</li>
</ul>
<br>

The user can use the following keyboard shortcuts to perform selection,
when the <code>mode</code> property is in use:
<ul>
<li>[SPACE] - Selects the currently focused item upon keyup.</li>
<li>[ENTER]  - Selects the currently focused item upon keydown.</li>
</ul>

<h3>ES6 Module Import</h3>
<code>import "@ui5/webcomponents/dist/Tree.js";</code>
<br>
<code>import "@ui5/webcomponents/dist/TreeItem.js";</code>`,name:"Tree",slots:[{name:"default",description:`Defines the items of the component. Tree items may have other tree items as children.
<br><br>
<b>Note:</b> Use <code>ui5-tree-item</code> for the intended design.`,_ui5propertyName:"items",_ui5type:{text:"Array<TreeItemBase>",references:[{name:"TreeItemBase",package:"@ui5/webcomponents",module:"dist/TreeItemBase.js"}]},_ui5privacy:"public"},{name:"header",description:`Defines the component header.
<br><br>
<b>Note:</b> When the <code>header</code> slot is set, the
<code>headerText</code> property is ignored.`,_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"}],members:[{kind:"field",name:"mode",type:{text:"ListMode",references:[{name:"ListMode",package:"@ui5/webcomponents",module:"dist/types/ListMode.js"}]},description:`Defines the mode of the component. Since the tree uses a <code>ui5-list</code> to display its structure,
the tree modes are exactly the same as the list modes, and are all applicable.`,privacy:"public",default:'"None"',_ui5validator:"ListMode"},{kind:"field",name:"noDataText",type:{text:"string"},description:"Defines the text that is displayed when the component contains no items.",default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"headerText",type:{text:"string"},description:`Defines the component header text.
<br><br>
<b>Note:</b> If the <code>header</code> slot is set, this property is ignored.`,default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"footerText",type:{text:"string"},description:"Defines the component footer text.",default:'""',privacy:"public",_ui5validator:"String"},{kind:"field",name:"accessibleName",type:{text:"string"},description:"Defines the accessible name of the component.",default:'""',privacy:"public",_ui5since:"1.8.0",_ui5validator:"String"},{kind:"field",name:"accessibleNameRef",type:{text:"string"},description:"Defines the IDs of the elements that label the component.",default:'""',privacy:"public",_ui5since:"1.8.0",_ui5validator:"String"},{kind:"method",name:"walk",return:{type:{text:"void"}},parameters:[{name:"callback",type:{text:"WalkCallback",references:[{name:"WalkCallback",package:"@ui5/webcomponents",module:"dist/Tree.js"}]},description:"function to execute on each node of the tree with 3 arguments: the node, the level and the index",_ui5privacy:"public"}],description:"Perform Depth-First-Search walk on the tree and run a callback on each node",privacy:"public"}],events:[{name:"item-toggle",_ui5privacy:"public",type:{text:"CustomEvent<TreeItemToggleEventDetail>",references:[{name:"TreeItemToggleEventDetail",package:"@ui5/webcomponents",module:"dist/Tree.js"}]},description:`Fired when a tree item is expanded or collapsed.
<i>Note:</i> You can call <code>preventDefault()</code> on the event object to suppress the event, if needed.
This may be handy for example if you want to dynamically load tree items upon the user expanding a node.
Even if you prevented the event's default behavior, you can always manually call <code>toggle()</code> on a tree item.`,_ui5allowPreventDefault:!0,_ui5parameters:[{type:{text:"HTMLElement"},name:"item",_ui5privacy:"public",description:"the toggled item."}]},{name:"item-mouseover",_ui5privacy:"public",type:{text:"CustomEvent<TreeItemMouseoverEventDetail>",references:[{name:"TreeItemMouseoverEventDetail",package:"@ui5/webcomponents",module:"dist/Tree.js"}]},description:"Fired when the mouse cursor enters the tree item borders.",_ui5since:"1.0.0-rc.16",_ui5parameters:[{type:{text:"HTMLElement"},name:"item",_ui5privacy:"public",description:"the hovered item."}]},{name:"item-mouseout",_ui5privacy:"public",type:{text:"CustomEvent<TreeItemMouseoutEventDetail>",references:[{name:"TreeItemMouseoutEventDetail",package:"@ui5/webcomponents",module:"dist/Tree.js"}]},description:"Fired when the mouse cursor leaves the tree item borders.",_ui5since:"1.0.0-rc.16",_ui5parameters:[{type:{text:"HTMLElement"},name:"item",_ui5privacy:"public",description:"the hovered item."}]},{name:"item-click",_ui5privacy:"public",type:{text:"CustomEvent<TreeItemClickEventDetail>",references:[{name:"TreeItemClickEventDetail",package:"@ui5/webcomponents",module:"dist/Tree.js"}]},description:"Fired when a tree item is activated.",_ui5allowPreventDefault:!0,_ui5parameters:[{type:{text:"HTMLElement"},name:"item",_ui5privacy:"public",description:"The clicked item."}]},{name:"item-delete",_ui5privacy:"public",type:{text:"CustomEvent<TreeItemDeleteEventDetail>",references:[{name:"TreeItemDeleteEventDetail",package:"@ui5/webcomponents",module:"dist/Tree.js"}]},description:`Fired when the Delete button of any tree item is pressed.
<br><br>
<b>Note:</b> A Delete button is displayed on each item,
when the component <code>mode</code> property is set to <code>Delete</code>.`,_ui5parameters:[{type:{text:"HTMLElement"},name:"item",_ui5privacy:"public",description:"the deleted item."}]},{name:"selection-change",_ui5privacy:"public",type:{text:"CustomEvent<TreeSelectionChangeEventDetail>",references:[{name:"TreeSelectionChangeEventDetail",package:"@ui5/webcomponents",module:"dist/Tree.js"}]},description:`Fired when selection is changed by user interaction
in <code>SingleSelect</code>, <code>SingleSelectBegin</code>, <code>SingleSelectEnd</code> and <code>MultiSelect</code> modes.`,_ui5parameters:[{type:{text:"Array"},name:"selectedItems",_ui5privacy:"public",description:"An array of the selected items."},{type:{text:"Array"},name:"previouslySelectedItems",_ui5privacy:"public",description:"An array of the previously selected items."},{type:{text:"HTMLElement"},name:"targetItem",_ui5privacy:"public",description:"The item triggering the event."}]}],superclass:{name:"UI5Element",package:"@ui5/webcomponents-base",module:"dist/UI5Element.js"},tagName:"ui5-tree",customElement:!0,_ui5since:"1.0.0-rc.8",_ui5privacy:"public"}],exports:[{kind:"js",name:"default",declaration:{name:"Tree",module:"dist/Tree.js"}},{kind:"custom-element-definition",name:"ui5-tree",declaration:{name:"Tree",module:"dist/Tree.js"}}]},{kind:"javascript-module",path:"dist/TreeItem.js",declarations:[{kind:"class",description:`<h3 class="comment-api-title">Overview</h3>
The <code>ui5-tree-item</code> represents a node in a tree structure, shown as a <code>ui5-list</code>.
<br>
This is the item to use inside a <code>ui5-tree</code>.
You can represent an arbitrary tree structure by recursively nesting tree items.

<h3>ES6 Module Import</h3>
<code>import "@ui5/webcomponents/dist/TreeItem.js";</code>`,name:"TreeItem",cssParts:[{description:"Used to style the title of the tree list item",name:"title"},{description:"Used to style the additionalText of the tree list item",name:"additionalText"},{description:"Used to style the icon of the tree list item",name:"icon"}],members:[{kind:"field",name:"text",type:{text:"string"},description:"Defines the text of the tree item.",privacy:"public",default:'""',_ui5validator:"String"},{kind:"field",name:"additionalText",type:{text:"string"},description:"Defines the <code>additionalText</code>, displayed in the end of the tree item.",default:'""',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"String"},{kind:"field",name:"icon",type:{text:"string"},description:"If set, an icon will be displayed before the text of the tree list item.",privacy:"public",default:'""',_ui5validator:"String",inheritedFrom:{name:"TreeItemBase",module:"dist/TreeItemBase.js"}},{kind:"field",name:"expanded",type:{text:"boolean"},description:"Defines whether the tree list item will show a collapse or expand icon inside its toggle button.",default:"false",privacy:"public",_ui5validator:"Boolean",inheritedFrom:{name:"TreeItemBase",module:"dist/TreeItemBase.js"}},{kind:"field",name:"indeterminate",type:{text:"boolean"},description:`Defines whether the selection of a tree node is displayed as partially selected.
<br><br>
<b>Note:</b> The indeterminate state can be set only programmatically and can’t be achieved by user
interaction, meaning that the resulting visual state depends on the values of the <code>indeterminate</code>
and <code>selected</code> properties:
<ul>
<li> If a tree node has both <code>selected</code> and <code>indeterminate</code> set to <code>true</code>, it is displayed as partially selected.
<li> If a tree node has <code>selected</code> set to <code>true</code> and <code>indeterminate</code> set to <code>false</code>, it is displayed as selected.
<li> If a tree node has <code>selected</code> set to <code>false</code>, it is displayed as not selected regardless of the value of the <code>indeterminate</code> property.
</ul>
<br>
<b>Note:</b> This property takes effect only when the <code>ui5-tree</code> is in <code>MultiSelect</code> mode.`,default:"false",privacy:"public",_ui5since:"1.1.0",_ui5validator:"Boolean",inheritedFrom:{name:"TreeItemBase",module:"dist/TreeItemBase.js"}},{kind:"field",name:"hasChildren",type:{text:"boolean"},description:`Defines whether the tree node has children, even if currently no other tree nodes are slotted inside.
<br>
<i>Note:</i> This property is useful for showing big tree structures where not all nodes are initially loaded due to performance reasons.
Set this to <code>true</code> for nodes you intend to load lazily, when the user clicks the expand button.
It is not necessary to set this property otherwise. If a tree item has children, the expand button will be displayed anyway.`,default:"false",privacy:"public",_ui5validator:"Boolean",inheritedFrom:{name:"TreeItemBase",module:"dist/TreeItemBase.js"}},{kind:"field",name:"additionalTextState",type:{text:"ValueState",references:[{name:"ValueState",package:"@ui5/webcomponents-base",module:"dist/types/ValueState.js"}]},description:`Defines the state of the <code>additionalText</code>.
<br>
Available options are: <code>"None"</code> (by default), <code>"Success"</code>, <code>"Warning"</code>, <code>"Information"</code> and <code>"Error"</code>.`,default:'"None"',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"ValueState",inheritedFrom:{name:"TreeItemBase",module:"dist/TreeItemBase.js"}},{kind:"field",name:"accessibleName",type:{text:"string"},description:"Defines the accessible name of the component.",default:'""',privacy:"public",_ui5since:"1.8.0",_ui5validator:"String",inheritedFrom:{name:"TreeItemBase",module:"dist/TreeItemBase.js"}},{kind:"method",name:"toggle",return:{type:{text:"void"}},description:"Call this method to manually switch the <code>expanded</code> state of a tree item.",privacy:"public",inheritedFrom:{name:"TreeItemBase",module:"dist/TreeItemBase.js"}},{kind:"field",name:"type",type:{text:"ListItemType",references:[{name:"ListItemType",package:"@ui5/webcomponents",module:"dist/types/ListItemType.js"}]},description:`Defines the visual indication and behavior of the list items.
Available options are <code>Active</code> (by default), <code>Inactive</code>, <code>Detail</code> and <code>Navigation</code>.
<br><br>
<b>Note:</b> When set to <code>Active</code> or <code>Navigation</code>, the item will provide visual response upon press and hover,
while with type <code>Inactive</code> and <code>Detail</code> - will not.`,default:'"Active"',privacy:"public",_ui5validator:"ListItemType",inheritedFrom:{name:"ListItem",module:"dist/ListItem.js"}},{kind:"field",name:"accessibilityAttributes",type:{text:"AccessibilityAttributes",references:[{name:"AccessibilityAttributes",package:"@ui5/webcomponents",module:"dist/ListItem.js"}]},description:`An object of strings that defines several additional accessibility attribute values
for customization depending on the use case.

 It supports the following fields:

<ul>
		<li><code>ariaSetsize</code>: Defines the number of items in the current set of listitems or treeitems when not all items in the set are present in the DOM.
		The value of each <code>aria-setsize</code> is an integer reflecting number of items in the complete set.
		<b>Note: </b> If the size of the entire set is unknown, set <code>aria-setsize="-1"</code>.
		</li>
		<li><code>ariaPosinset</code>: Defines an element's number or position in the current set of listitems or treeitems when not all items are present in the DOM.
		The value of each <code>aria-posinset</code> is an integer greater than or equal to 1, and less than or equal to the size of the set when that size is known.
		</li>
</ul>`,default:"{}",privacy:"public",_ui5since:"1.15.0",_ui5validator:"Object",inheritedFrom:{name:"ListItem",module:"dist/ListItem.js"}},{kind:"field",name:"navigated",type:{text:"boolean"},description:`The navigated state of the list item.
If set to <code>true</code>, a navigation indicator is displayed at the end of the list item.`,default:"false",privacy:"public",_ui5since:"1.10.0",_ui5validator:"Boolean",inheritedFrom:{name:"ListItem",module:"dist/ListItem.js"}},{kind:"field",name:"selected",type:{text:"boolean"},description:"Defines the selected state of the <code>ListItem</code>.",default:"false",privacy:"public",_ui5validator:"Boolean",inheritedFrom:{name:"ListItemBase",module:"dist/ListItemBase.js"}}],superclass:{name:"TreeItemBase",package:"@ui5/webcomponents",module:"dist/TreeItemBase.js"},tagName:"ui5-tree-item",customElement:!0,_ui5since:"1.0.0-rc.8",_ui5privacy:"public",events:[{name:"detail-click",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired when the user clicks on the detail button when type is <code>Detail</code>.",inheritedFrom:{name:"ListItem",module:"dist/ListItem.js"}}],slots:[{name:"default",description:`Defines the items of the component.
<br />
<br />
<b>Note:</b> Use <code>ui5-tree-item</code> or <code>ui5-tree-item-custom</code>`,_ui5propertyName:"items",_ui5type:{text:"Array<TreeItemBase>",references:[{name:"TreeItemBase",package:"@ui5/webcomponents",module:"dist/TreeItemBase.js"}]},_ui5privacy:"public"},{name:"deleteButton",description:`Defines the delete button, displayed in "Delete" mode.
<b>Note:</b> While the slot allows custom buttons, to match
design guidelines, please use the <code>ui5-button</code> component.
<b>Note:</b> When the slot is not present, a built-in delete button will be displayed.`,_ui5since:"1.9.0",_ui5type:{text:"Array<IButton>",references:[{name:"IButton",package:"@ui5/webcomponents",module:"dist/Button.js"}]},_ui5privacy:"public"}]}],exports:[{kind:"js",name:"default",declaration:{name:"TreeItem",module:"dist/TreeItem.js"}},{kind:"custom-element-definition",name:"ui5-tree-item",declaration:{name:"TreeItem",module:"dist/TreeItem.js"}}]},{kind:"javascript-module",path:"dist/TreeItemBase.js",declarations:[{kind:"class",description:`A class to serve as a foundation
for the <code>TreeItem</code> and <code>TreeItemCustom</code> classes.`,name:"TreeItemBase",slots:[{name:"default",description:`Defines the items of the component.
<br />
<br />
<b>Note:</b> Use <code>ui5-tree-item</code> or <code>ui5-tree-item-custom</code>`,_ui5propertyName:"items",_ui5type:{text:"Array<TreeItemBase>",references:[{name:"TreeItemBase",package:"@ui5/webcomponents",module:"dist/TreeItemBase.js"}]},_ui5privacy:"public"},{name:"deleteButton",description:`Defines the delete button, displayed in "Delete" mode.
<b>Note:</b> While the slot allows custom buttons, to match
design guidelines, please use the <code>ui5-button</code> component.
<b>Note:</b> When the slot is not present, a built-in delete button will be displayed.`,_ui5since:"1.9.0",_ui5type:{text:"Array<IButton>",references:[{name:"IButton",package:"@ui5/webcomponents",module:"dist/Button.js"}]},_ui5privacy:"public"}],members:[{kind:"field",name:"icon",type:{text:"string"},description:"If set, an icon will be displayed before the text of the tree list item.",privacy:"public",default:'""',_ui5validator:"String"},{kind:"field",name:"expanded",type:{text:"boolean"},description:"Defines whether the tree list item will show a collapse or expand icon inside its toggle button.",default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"indeterminate",type:{text:"boolean"},description:`Defines whether the selection of a tree node is displayed as partially selected.
<br><br>
<b>Note:</b> The indeterminate state can be set only programmatically and can’t be achieved by user
interaction, meaning that the resulting visual state depends on the values of the <code>indeterminate</code>
and <code>selected</code> properties:
<ul>
<li> If a tree node has both <code>selected</code> and <code>indeterminate</code> set to <code>true</code>, it is displayed as partially selected.
<li> If a tree node has <code>selected</code> set to <code>true</code> and <code>indeterminate</code> set to <code>false</code>, it is displayed as selected.
<li> If a tree node has <code>selected</code> set to <code>false</code>, it is displayed as not selected regardless of the value of the <code>indeterminate</code> property.
</ul>
<br>
<b>Note:</b> This property takes effect only when the <code>ui5-tree</code> is in <code>MultiSelect</code> mode.`,default:"false",privacy:"public",_ui5since:"1.1.0",_ui5validator:"Boolean"},{kind:"field",name:"hasChildren",type:{text:"boolean"},description:`Defines whether the tree node has children, even if currently no other tree nodes are slotted inside.
<br>
<i>Note:</i> This property is useful for showing big tree structures where not all nodes are initially loaded due to performance reasons.
Set this to <code>true</code> for nodes you intend to load lazily, when the user clicks the expand button.
It is not necessary to set this property otherwise. If a tree item has children, the expand button will be displayed anyway.`,default:"false",privacy:"public",_ui5validator:"Boolean"},{kind:"field",name:"additionalTextState",type:{text:"ValueState",references:[{name:"ValueState",package:"@ui5/webcomponents-base",module:"dist/types/ValueState.js"}]},description:`Defines the state of the <code>additionalText</code>.
<br>
Available options are: <code>"None"</code> (by default), <code>"Success"</code>, <code>"Warning"</code>, <code>"Information"</code> and <code>"Error"</code>.`,default:'"None"',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"ValueState"},{kind:"field",name:"accessibleName",type:{text:"string"},description:"Defines the accessible name of the component.",default:'""',privacy:"public",_ui5since:"1.8.0",_ui5validator:"String"},{kind:"method",name:"toggle",return:{type:{text:"void"}},description:"Call this method to manually switch the <code>expanded</code> state of a tree item.",privacy:"public"},{kind:"field",name:"type",type:{text:"ListItemType",references:[{name:"ListItemType",package:"@ui5/webcomponents",module:"dist/types/ListItemType.js"}]},description:`Defines the visual indication and behavior of the list items.
Available options are <code>Active</code> (by default), <code>Inactive</code>, <code>Detail</code> and <code>Navigation</code>.
<br><br>
<b>Note:</b> When set to <code>Active</code> or <code>Navigation</code>, the item will provide visual response upon press and hover,
while with type <code>Inactive</code> and <code>Detail</code> - will not.`,default:'"Active"',privacy:"public",_ui5validator:"ListItemType",inheritedFrom:{name:"ListItem",module:"dist/ListItem.js"}},{kind:"field",name:"accessibilityAttributes",type:{text:"AccessibilityAttributes",references:[{name:"AccessibilityAttributes",package:"@ui5/webcomponents",module:"dist/ListItem.js"}]},description:`An object of strings that defines several additional accessibility attribute values
for customization depending on the use case.

 It supports the following fields:

<ul>
		<li><code>ariaSetsize</code>: Defines the number of items in the current set of listitems or treeitems when not all items in the set are present in the DOM.
		The value of each <code>aria-setsize</code> is an integer reflecting number of items in the complete set.
		<b>Note: </b> If the size of the entire set is unknown, set <code>aria-setsize="-1"</code>.
		</li>
		<li><code>ariaPosinset</code>: Defines an element's number or position in the current set of listitems or treeitems when not all items are present in the DOM.
		The value of each <code>aria-posinset</code> is an integer greater than or equal to 1, and less than or equal to the size of the set when that size is known.
		</li>
</ul>`,default:"{}",privacy:"public",_ui5since:"1.15.0",_ui5validator:"Object",inheritedFrom:{name:"ListItem",module:"dist/ListItem.js"}},{kind:"field",name:"navigated",type:{text:"boolean"},description:`The navigated state of the list item.
If set to <code>true</code>, a navigation indicator is displayed at the end of the list item.`,default:"false",privacy:"public",_ui5since:"1.10.0",_ui5validator:"Boolean",inheritedFrom:{name:"ListItem",module:"dist/ListItem.js"}},{kind:"field",name:"selected",type:{text:"boolean"},description:"Defines the selected state of the <code>ListItem</code>.",default:"false",privacy:"public",_ui5validator:"Boolean",inheritedFrom:{name:"ListItemBase",module:"dist/ListItemBase.js"}}],superclass:{name:"ListItem",package:"@ui5/webcomponents",module:"dist/ListItem.js"},customElement:!0,_ui5privacy:"public",_ui5abstract:!0,events:[{name:"detail-click",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired when the user clicks on the detail button when type is <code>Detail</code>.",inheritedFrom:{name:"ListItem",module:"dist/ListItem.js"}}]}],exports:[{kind:"js",name:"default",declaration:{name:"TreeItemBase",module:"dist/TreeItemBase.js"}}]},{kind:"javascript-module",path:"dist/TreeItemCustom.js",declarations:[{kind:"class",description:`The <code>ui5-tree-item-custom</code> represents a node in a tree structure, shown as a <code>ui5-list</code>.
<br>
This is the item to use inside a <code>ui5-tree</code>.
You can represent an arbitrary tree structure by recursively nesting tree items.

You can use this item to put any custom content inside the tree item.

<h3>ES6 Module Import</h3>
<code>import "@ui5/webcomponents/dist/TreeItemCustom.js";</code>`,name:"TreeItemCustom",cssParts:[{description:"Used to style the title of the tree list item",name:"title"},{description:"Used to style the additionalText of the tree list item",name:"additionalText"},{description:"Used to style the icon of the tree list item",name:"icon"}],slots:[{name:"content",description:"Defines the content of the <code>ui5-tree-item</code>.",_ui5type:{text:"Array<HTMLElement>"},_ui5privacy:"public"},{name:"default",description:`Defines the items of the component.
<br />
<br />
<b>Note:</b> Use <code>ui5-tree-item</code> or <code>ui5-tree-item-custom</code>`,_ui5propertyName:"items",_ui5type:{text:"Array<TreeItemBase>",references:[{name:"TreeItemBase",package:"@ui5/webcomponents",module:"dist/TreeItemBase.js"}]},_ui5privacy:"public"},{name:"deleteButton",description:`Defines the delete button, displayed in "Delete" mode.
<b>Note:</b> While the slot allows custom buttons, to match
design guidelines, please use the <code>ui5-button</code> component.
<b>Note:</b> When the slot is not present, a built-in delete button will be displayed.`,_ui5since:"1.9.0",_ui5type:{text:"Array<IButton>",references:[{name:"IButton",package:"@ui5/webcomponents",module:"dist/Button.js"}]},_ui5privacy:"public"}],members:[{kind:"field",name:"hideSelectionElement",type:{text:"boolean"},description:"Defines whether the tree list item should display the selection element.",privacy:"public",default:"false",_ui5validator:"Boolean"},{kind:"field",name:"icon",type:{text:"string"},description:"If set, an icon will be displayed before the text of the tree list item.",privacy:"public",default:'""',_ui5validator:"String",inheritedFrom:{name:"TreeItemBase",module:"dist/TreeItemBase.js"}},{kind:"field",name:"expanded",type:{text:"boolean"},description:"Defines whether the tree list item will show a collapse or expand icon inside its toggle button.",default:"false",privacy:"public",_ui5validator:"Boolean",inheritedFrom:{name:"TreeItemBase",module:"dist/TreeItemBase.js"}},{kind:"field",name:"indeterminate",type:{text:"boolean"},description:`Defines whether the selection of a tree node is displayed as partially selected.
<br><br>
<b>Note:</b> The indeterminate state can be set only programmatically and can’t be achieved by user
interaction, meaning that the resulting visual state depends on the values of the <code>indeterminate</code>
and <code>selected</code> properties:
<ul>
<li> If a tree node has both <code>selected</code> and <code>indeterminate</code> set to <code>true</code>, it is displayed as partially selected.
<li> If a tree node has <code>selected</code> set to <code>true</code> and <code>indeterminate</code> set to <code>false</code>, it is displayed as selected.
<li> If a tree node has <code>selected</code> set to <code>false</code>, it is displayed as not selected regardless of the value of the <code>indeterminate</code> property.
</ul>
<br>
<b>Note:</b> This property takes effect only when the <code>ui5-tree</code> is in <code>MultiSelect</code> mode.`,default:"false",privacy:"public",_ui5since:"1.1.0",_ui5validator:"Boolean",inheritedFrom:{name:"TreeItemBase",module:"dist/TreeItemBase.js"}},{kind:"field",name:"hasChildren",type:{text:"boolean"},description:`Defines whether the tree node has children, even if currently no other tree nodes are slotted inside.
<br>
<i>Note:</i> This property is useful for showing big tree structures where not all nodes are initially loaded due to performance reasons.
Set this to <code>true</code> for nodes you intend to load lazily, when the user clicks the expand button.
It is not necessary to set this property otherwise. If a tree item has children, the expand button will be displayed anyway.`,default:"false",privacy:"public",_ui5validator:"Boolean",inheritedFrom:{name:"TreeItemBase",module:"dist/TreeItemBase.js"}},{kind:"field",name:"additionalTextState",type:{text:"ValueState",references:[{name:"ValueState",package:"@ui5/webcomponents-base",module:"dist/types/ValueState.js"}]},description:`Defines the state of the <code>additionalText</code>.
<br>
Available options are: <code>"None"</code> (by default), <code>"Success"</code>, <code>"Warning"</code>, <code>"Information"</code> and <code>"Error"</code>.`,default:'"None"',privacy:"public",_ui5since:"1.0.0-rc.15",_ui5validator:"ValueState",inheritedFrom:{name:"TreeItemBase",module:"dist/TreeItemBase.js"}},{kind:"field",name:"accessibleName",type:{text:"string"},description:"Defines the accessible name of the component.",default:'""',privacy:"public",_ui5since:"1.8.0",_ui5validator:"String",inheritedFrom:{name:"TreeItemBase",module:"dist/TreeItemBase.js"}},{kind:"method",name:"toggle",return:{type:{text:"void"}},description:"Call this method to manually switch the <code>expanded</code> state of a tree item.",privacy:"public",inheritedFrom:{name:"TreeItemBase",module:"dist/TreeItemBase.js"}},{kind:"field",name:"type",type:{text:"ListItemType",references:[{name:"ListItemType",package:"@ui5/webcomponents",module:"dist/types/ListItemType.js"}]},description:`Defines the visual indication and behavior of the list items.
Available options are <code>Active</code> (by default), <code>Inactive</code>, <code>Detail</code> and <code>Navigation</code>.
<br><br>
<b>Note:</b> When set to <code>Active</code> or <code>Navigation</code>, the item will provide visual response upon press and hover,
while with type <code>Inactive</code> and <code>Detail</code> - will not.`,default:'"Active"',privacy:"public",_ui5validator:"ListItemType",inheritedFrom:{name:"ListItem",module:"dist/ListItem.js"}},{kind:"field",name:"accessibilityAttributes",type:{text:"AccessibilityAttributes",references:[{name:"AccessibilityAttributes",package:"@ui5/webcomponents",module:"dist/ListItem.js"}]},description:`An object of strings that defines several additional accessibility attribute values
for customization depending on the use case.

 It supports the following fields:

<ul>
		<li><code>ariaSetsize</code>: Defines the number of items in the current set of listitems or treeitems when not all items in the set are present in the DOM.
		The value of each <code>aria-setsize</code> is an integer reflecting number of items in the complete set.
		<b>Note: </b> If the size of the entire set is unknown, set <code>aria-setsize="-1"</code>.
		</li>
		<li><code>ariaPosinset</code>: Defines an element's number or position in the current set of listitems or treeitems when not all items are present in the DOM.
		The value of each <code>aria-posinset</code> is an integer greater than or equal to 1, and less than or equal to the size of the set when that size is known.
		</li>
</ul>`,default:"{}",privacy:"public",_ui5since:"1.15.0",_ui5validator:"Object",inheritedFrom:{name:"ListItem",module:"dist/ListItem.js"}},{kind:"field",name:"navigated",type:{text:"boolean"},description:`The navigated state of the list item.
If set to <code>true</code>, a navigation indicator is displayed at the end of the list item.`,default:"false",privacy:"public",_ui5since:"1.10.0",_ui5validator:"Boolean",inheritedFrom:{name:"ListItem",module:"dist/ListItem.js"}},{kind:"field",name:"selected",type:{text:"boolean"},description:"Defines the selected state of the <code>ListItem</code>.",default:"false",privacy:"public",_ui5validator:"Boolean",inheritedFrom:{name:"ListItemBase",module:"dist/ListItemBase.js"}}],superclass:{name:"TreeItemBase",package:"@ui5/webcomponents",module:"dist/TreeItemBase.js"},tagName:"ui5-tree-item-custom",customElement:!0,_ui5since:"1.9.2",_ui5privacy:"public",events:[{name:"detail-click",_ui5privacy:"public",type:{text:"CustomEvent"},description:"Fired when the user clicks on the detail button when type is <code>Detail</code>.",inheritedFrom:{name:"ListItem",module:"dist/ListItem.js"}}]}],exports:[{kind:"js",name:"default",declaration:{name:"TreeItemCustom",module:"dist/TreeItemCustom.js"}},{kind:"custom-element-definition",name:"ui5-tree-item-custom",declaration:{name:"TreeItemCustom",module:"dist/TreeItemCustom.js"}}]},{kind:"javascript-module",path:"dist/TreeList.js",declarations:[],exports:[{kind:"js",name:"default",declaration:{name:"TreeList",module:"dist/TreeList.js"}}]},{kind:"javascript-module",path:"dist/WheelSlider.js",declarations:[],exports:[{kind:"js",name:"default",declaration:{name:"WheelSlider",module:"dist/WheelSlider.js"}}]},{kind:"javascript-module",path:"dist/YearPicker.js",declarations:[],exports:[{kind:"js",name:"default",declaration:{name:"YearPicker",module:"dist/YearPicker.js"}}]}],w={schemaVersion:v,readme:g,modules:k},j=!1,B=[{value:"sap_horizon",title:"Morning Horizon (Light)"},{value:"sap_horizon_dark",title:"Evening Horizon (Dark)"},{value:"sap_horizon_hcb",title:"Horizon High Contrast Black"},{value:"sap_horizon_hcw",title:"Horizon High Contrast White"},{value:"sap_fiori_3",title:"Quartz Light"},{value:"sap_fiori_3_dark",title:"Quartz Dark"},{value:"sap_fiori_3_hcb",title:"Quartz High Contrast Black"},{value:"sap_fiori_3_hcw",title:"Quartz High Contrast White"}],E=["className","style"];function x(){var i,n;const e=(n=(i=c.useContext(m).attachedCSFFile)==null?void 0:i.meta)==null?void 0:n.tags;switch(e==null?void 0:e.find(o=>o.startsWith("package:"))){case"package:@ui5/webcomponents":return w;case"package:@ui5/webcomponents-fiori":return y}}const _={ListItemBase:["StandardListItem","CustomListItem","GroupHeaderListItem"],InputSuggestionItem:["SuggestionItem","SuggestionGroupItem"],NotificationListItemBase:["NotificationListItem"],ToolbarItem:["ToolbarSeparatorV2","ToolbarSpacerV2","ToolbarButton","ToolbarSelect","ToolbarSelectOption"],TreeItemBase:["TreeItem","TreeItemCustom"],AvatarGroupItem:["Avatar"]};function T(t,e){const a=new Set,i=n=>{const o=e==null?void 0:e.modules.find(s=>s.path===`dist/${n}.js`);o&&o.declarations.forEach(s=>{(s.slots||[]).forEach(p=>{var r;(((r=p._ui5type)==null?void 0:r.references)||[]).forEach(u=>{const d=u.name.replace(/^I([A-Z])/g,"$1");(_[d]||[d]).forEach(l=>{i(l),a.add(l)})})})})};return i(t),Array.from(a)}function C(t){const e=x();return c.useMemo(()=>T(t,e),[e,t])}export{B as M,x as a,E as e,j as i,C as u};
