/* See license.txt for terms of usage */

FBL.ns(function() { with (FBL) {
// ************************************************************************************************

FirebugChrome.injected = 
{
    HTML: '<table id="fbChrome" cellpadding="0" cellspacing="0" border="0"><tbody><tr><td id="fbTop" colspan="2"><div id="fbWindowButtons"><a id="fbWindow_btClose" class="fbSmallButton fbHover" title="Minimize Firebug">&nbsp;</a><a id="fbWindow_btDetach" class="fbSmallButton fbHover" title="Open Firebug in popup window">&nbsp;</a></div><div id="fbToolbar"><div id="fbToolbarContent"><span id="fbToolbarIcon"><a id="fbFirebugButton" class="fbIconButton" class="fbHover" target="_blank">&nbsp;</a></span><span id="fbToolbarButtons"><span id="fbFixedButtons"><a id="fbChrome_btInspect" class="fbButton fbHover" title="Click an element in the page to inspect">Inspect</a></span><span id="fbConsoleButtons" class="fbToolbarButtons"><a id="fbConsole_btClear" class="fbButton fbHover" title="Clear the console">Clear</a></span></span><span id="fbStatusBarBox"><span class="fbToolbarSeparator"></span></span></div></div><div id="fbPanelBarBox"><div id="fbPanelBar1" class="fbPanelBar"><a id="fbConsoleTab" class="fbTab fbHover"><span class="fbTabL"></span><span class="fbTabText">Console</span><span class="fbTabMenuTarget"></span><span class="fbTabR"></span></a><a id="fbHTMLTab" class="fbTab fbHover"><span class="fbTabL"></span><span class="fbTabText">HTML</span><span class="fbTabR"></span></a><a class="fbTab fbHover"><span class="fbTabL"></span><span class="fbTabText">CSS</span><span class="fbTabR"></span></a><a class="fbTab fbHover"><span class="fbTabL"></span><span class="fbTabText">Script</span><span class="fbTabR"></span></a><a class="fbTab fbHover"><span class="fbTabL"></span><span class="fbTabText">DOM</span><span class="fbTabR"></span></a></div><div id="fbPanelBar2Box" class="hide"><div id="fbPanelBar2" class="fbPanelBar"><a class="fbTab fbHover"><span class="fbTabL"></span><span class="fbTabText">Style</span><span class="fbTabR"></span></a><a class="fbTab fbHover"><span class="fbTabL"></span><span class="fbTabText">Layout</span><span class="fbTabR"></span></a><a class="fbTab fbHover"><span class="fbTabL"></span><span class="fbTabText">DOM</span><span class="fbTabR"></span></a></div></div></div><div id="fbHSplitter">&nbsp;</div></td></tr><tr id="fbContent"><td id="fbPanelBox1"><div id="fbPanel1" class="fbFitHeight"><div id="fbConsole" class="fbPanel"></div><div id="fbHTML" class="fbPanel"></div></div></td><td id="fbPanelBox2" class="hide"><div id="fbVSplitter" class="fbVSplitter">&nbsp;</div><div id="fbPanel2" class="fbFitHeight"><div id="fbHTML_Style" class="fbPanel"></div><div id="fbHTML_Layout" class="fbPanel"></div><div id="fbHTML_DOM" class="fbPanel"></div></div><textarea id="fbLargeCommandLine" class="fbFitHeight"></textarea><div id="fbLargeCommandButtons"><a id="fbCommand_btRun" class="fbButton fbHover">Run</a><a id="fbCommand_btClear" class="fbButton fbHover">Clear</a><a id="fbSmallCommandLineIcon" class="fbSmallButton fbHover"></a></div></td></tr><tr id="fbBottom" class="hide"><td id="fbCommand" colspan="2"><div id="fbCommandBox"><div id="fbCommandIcon">&gt;&gt;&gt;</div><input id="fbCommandLine" name="fbCommandLine" type="text"/><a id="fbLargeCommandLineIcon" class="fbSmallButton fbHover"></a></div></td></tr></tbody></table><span id="fbMiniChrome"><span id="fbMiniContent"><span id="fbMiniIcon" title="Open Firebug Lite"></span><span id="fbMiniErrors" class="fbErrors">2 errors</span></span></span>',
    CSS: '.logGroup .logGroupLabel,.hasChildren .memberLabelCell .memberLabel,.hasHeaders .netHrefLabel{background-image:url(http://firebug.local:8740/firebug1.3/skin/xp/tree_open.gif);background-repeat:no-repeat;background-position:2px 2px;}.opened .logGroupLabel,.opened .memberLabelCell .memberLabel{background-image:url(http://firebug.local:8740/firebug1.3/skin/xp/tree_close.gif);}.twisty{background-position:2px 0;}.panelNode-console{overflow-x:hidden;}.objectLink{text-decoration:none;}.objectLink:hover{cursor:pointer;text-decoration:underline;}.logRow{position:relative;margin:0;border-bottom:1px solid #D7D7D7;padding:2px 4px 1px 6px;background-color:#FFFFFF;}.useA11y .logRow:focus{border-bottom:1px solid #000000 !important;outline:none !important;background-color:#FFFFAD !important;}.useA11y .logRow:focus a.objectLink-sourceLink{background-color:#FFFFAD;}.useA11y .a11yFocus:focus,.useA11y .objectBox:focus{outline:2px solid #FF9933;background-color:#FFFFAD;}.useA11y .objectBox-null:focus,.useA11y .objectBox-undefined:focus{background-color:#888888 !important;}.useA11y .logGroup.opened > .logRow{border-bottom:1px solid #ffffff;}.logGroup{background:url(http://firebug.local:8740/firebug1.3/skin/xp/group.gif) repeat-x #FFFFFF;padding:0;border:none;}.logGroupBody{display:none;margin-left:16px;border-left:1px solid #D7D7D7;border-top:1px solid #D7D7D7;background:#FFFFFF;}.logGroup > .logRow{background-color:transparent !important;font-weight:bold;}.logGroup.opened > .logRow{border-bottom:none;}.logGroup.opened > .logGroupBody{display:block;}.logRow-command > .objectBox-text{font-family:Monaco,monospace;color:#0000FF;white-space:pre-wrap;}.logRow-info,.logRow-warn,.logRow-error,.logRow-assert,.logRow-warningMessage,.logRow-errorMessage{padding-left:22px;background-repeat:no-repeat;background-position:4px 2px;}.logRow-assert,.logRow-warningMessage,.logRow-errorMessage{padding-top:0;padding-bottom:0;}.logRow-info,.logRow-info .objectLink-sourceLink{background-color:#FFFFFF;}.logRow-warn,.logRow-warningMessage,.logRow-warn .objectLink-sourceLink,.logRow-warningMessage .objectLink-sourceLink{background-color:cyan;}.logRow-error,.logRow-assert,.logRow-errorMessage,.logRow-error .objectLink-sourceLink,.logRow-errorMessage .objectLink-sourceLink{background-color:LightYellow;}.logRow-error,.logRow-assert,.logRow-errorMessage{color:#FF0000;}.logRow-info{}.logRow-warn,.logRow-warningMessage{}.logRow-error,.logRow-assert,.logRow-errorMessage{}.objectBox-string,.objectBox-text,.objectBox-number,.objectLink-element,.objectLink-textNode,.objectLink-function,.objectBox-stackTrace,.objectLink-profile{font-family:Monaco,monospace;}.objectBox-string,.objectBox-text,.objectLink-textNode{white-space:pre-wrap;}.objectBox-number,.objectLink-styleRule,.objectLink-element,.objectLink-textNode{color:#000088;}.objectBox-string{color:#FF0000;}.objectLink-function,.objectBox-stackTrace,.objectLink-profile{color:DarkGreen;}.objectBox-null,.objectBox-undefined{padding:0 2px;outline:1px solid #666666;background-color:#888888;color:#FFFFFF;}.objectBox-exception{padding:0 2px 0 18px;color:red;}.objectLink-sourceLink{position:absolute;right:4px;top:2px;padding-left:8px;font-family:Lucida Grande,sans-serif;font-weight:bold;color:#0000FF;}.errorTitle{margin-top:0px;margin-bottom:1px;padding-top:2px;padding-bottom:2px;}.errorTrace{margin-left:17px;}.errorSourceBox{margin:2px 0;}.errorSource-none{display:none;}.errorSource-syntax > .errorBreak{visibility:hidden;}.errorSource{cursor:pointer;font-family:Monaco,monospace;color:DarkGreen;}.errorSource:hover{text-decoration:underline;}.errorBreak{cursor:pointer;display:none;margin:0 6px 0 0;width:13px;height:14px;vertical-align:bottom;opacity:0.1;}.hasBreakSwitch .errorBreak{display:inline;}.breakForError .errorBreak{opacity:1;}.assertDescription{margin:0;}.logRow-profile > .logRow > .objectBox-text{font-family:Lucida Grande,Tahoma,sans-serif;color:#000000;}.logRow-profile > .logRow > .objectBox-text:last-child{color:#555555;font-style:italic;}.logRow-profile.opened > .logRow{padding-bottom:4px;}.profilerRunning > .logRow{padding-left:22px !important;}.profileSizer{width:100%;overflow-x:auto;overflow-y:scroll;}.profileTable{border-bottom:1px solid #D7D7D7;padding:0 0 4px 0;}.profileTable tr[odd="1"]{background-color:#F5F5F5;vertical-align:middle;}.profileTable a{vertical-align:middle;}.profileTable td{padding:1px 4px 0 4px;}.headerCell{cursor:pointer;-moz-user-select:none;border-bottom:1px solid #9C9C9C;padding:0 !important;font-weight:bold;}.headerCellBox{padding:2px 4px;border-left:1px solid #D9D9D9;border-right:1px solid #9C9C9C;}.headerCell:hover:active{}.headerSorted{}.headerSorted > .headerCellBox{border-right-color:#6B7C93;}.headerSorted.sortedAscending > .headerCellBox{}.headerSorted:hover:active{}.linkCell{text-align:right;}.linkCell > .objectLink-sourceLink{position:static;}.logRow-stackTrace{padding-top:0;background:#F8F8F8;}.logRow-stackTrace > .objectBox-stackFrame{position:relative;padding-top:2px;}.objectLink-object{font-family:Lucida Grande,sans-serif;font-weight:bold;color:DarkGreen;white-space:pre-wrap;}.objectPropValue{font-weight:normal;font-style:italic;color:#555555;}.selectorTag,.selectorId,.selectorClass{font-family:Monaco,monospace;font-weight:normal;}.selectorTag{color:#0000FF;}.selectorId{color:DarkBlue;}.selectorClass{color:red;}.selectorHidden > .selectorTag{color:#5F82D9;}.selectorHidden > .selectorId{color:#888888;}.selectorHidden > .selectorClass{color:#D86060;}.selectorValue{font-family:Lucida Grande,sans-serif;font-style:italic;color:#555555;}.panelNode.searching .logRow{display:none;}.logRow.matched{display:block !important;}.logRow.matching{position:absolute;left:-1000px;top:-1000px;max-width:0;max-height:0;overflow:hidden;}.arrayLeftBracket,.arrayRightBracket,.arrayComma{font-family:Monaco,monospace;}.arrayLeftBracket,.arrayRightBracket{font-weight:bold;}.arrayLeftBracket{margin-right:4px;}.arrayRightBracket{margin-left:4px;}.logRow-dir{padding:0;}.logRow-errorMessage > .hasTwisty > .errorTitle,.logRow-spy .spyHead .spyTitle,.logGroup > .logRow{cursor:pointer;padding-left:18px;background-repeat:no-repeat;background-position:3px 3px;}.logRow-errorMessage > .hasTwisty > .errorTitle{background-position:2px 3px;}.logRow-errorMessage > .hasTwisty > .errorTitle:hover,.logRow-spy .spyHead .spyTitle:hover,.logGroup > .logRow:hover{text-decoration:underline;}.logRow-spy{padding:0px 0 1px 0;}.logRow-spy,.logRow-spy .objectLink-sourceLink{padding-right:4px;right:0;}.logRow-spy.opened{padding-bottom:4px;border-bottom:none;}.spyTitle{color:#000000;font-weight:bold;-moz-box-sizing:padding-box;overflow:hidden;z-index:100;padding-left:18px;}.spyCol{padding:0;white-space:nowrap;}.spyTitleCol:hover > .objectLink-sourceLink,.spyTitleCol:hover > .spyTime,.spyTitleCol:hover > .spyStatus,.spyTitleCol:hover > .spyTitle{display:none;}.spyFullTitle{display:none;-moz-user-select:none;max-width:100%;background-color:Transparent;}.spyTitleCol:hover > .spyFullTitle{display:block;}.spyStatus{padding-left:10px;color:rgb(128,128,128);}.spyTime{margin-left:4px;margin-right:4px;color:rgb(128,128,128);}.spyIcon{margin-right:4px;margin-left:4px;width:16px;height:16px;vertical-align:middle;background:transparent no-repeat 0 0;}.logRow-spy.loading .spyHead .spyRow .spyIcon{}.logRow-spy.loaded:not(.error) .spyHead .spyRow .spyIcon{width:0;margin:0;}.logRow-spy.error .spyHead .spyRow .spyIcon{background-position:2px 2px;}.logRow-spy .spyHead .netInfoBody{display:none;}.logRow-spy.opened .spyHead .netInfoBody{margin-top:10px;display:block;}.logRow-spy.error .spyTitle,.logRow-spy.error .spyStatus,.logRow-spy.error .spyTime{color:red;}.logRow-spy.loading .spyResponseText{font-style:italic;color:#888888;}.caption{font-family:Lucida Grande,Tahoma,sans-serif;font-weight:bold;color:#444444;}.warning{padding:10px;font-family:Lucida Grande,Tahoma,sans-serif;font-weight:bold;color:#888888;}.panelNode-dom{overflow-x:hidden !important;}.domTable{font-size:1em;width:100%;table-layout:fixed;background:#fff;}.domTableIE{width:auto;}.memberLabelCell{padding:2px 0 2px 0;vertical-align:top;}.memberValueCell{padding:1px 0 1px 5px;display:block;overflow:hidden;}.memberLabel{display:block;cursor:default;-moz-user-select:none;overflow:hidden;padding-left:18px;background-color:#FFFFFF;text-decoration:none;}.memberRow.hasChildren .memberLabelCell .memberLabel:hover{cursor:pointer;color:blue;text-decoration:underline;}.userLabel{color:#000000;font-weight:bold;}.userClassLabel{color:#E90000;font-weight:bold;}.userFunctionLabel{color:#025E2A;font-weight:bold;}.domLabel{color:#000000;}.domFunctionLabel{color:#025E2A;}.ordinalLabel{color:SlateBlue;font-weight:bold;}.scopesRow{padding:2px 18px;background-color:LightYellow;border-bottom:5px solid #BEBEBE;color:#666666;}.scopesLabel{background-color:LightYellow;}.watchEditCell{padding:2px 18px;background-color:LightYellow;border-bottom:1px solid #BEBEBE;color:#666666;}.editor-watchNewRow,.editor-memberRow{font-family:Monaco,monospace !important;}.editor-memberRow{padding:1px 0 !important;}.editor-watchRow{padding-bottom:0 !important;}.watchRow > .memberLabelCell{font-family:Monaco,monospace;padding-top:1px;padding-bottom:1px;}.watchRow > .memberLabelCell > .memberLabel{background-color:transparent;}.watchRow > .memberValueCell{padding-top:2px;padding-bottom:2px;}.watchRow > .memberLabelCell,.watchRow > .memberValueCell{background-color:#F5F5F5;border-bottom:1px solid #BEBEBE;}.watchToolbox{z-index:2147483647;position:absolute;right:0;padding:1px 2px;}#fbCSS{font:1em Monaco,monospace;padding:0 7px;}#fbCSSButtons select,#fbScriptButtons select{font:11px Lucida Grande,Tahoma,sans-serif;margin-top:1px;padding-left:3px;background:#fafafa;border:1px inset #fff;width:220px;}.Selector{margin-top:10px}.CSSText{padding-left:20px;}.CSSProperty{color:#005500; margin-top:10px;}.CSSValue{padding-left:5px; color:#000088;}#fbHTMLStatusBar{display:inline;}.fbToolbarButtons{display:none;}.fbStatusSeparator{display:block;float:left;padding-top:4px;}#fbStatusBarBox{display:none;}#fbToolbarContent{display:block;position:absolute;_position:absolute;top:0;padding-top:4px;height:23px;clip:rect(0,2048px,27px,0);}.fbTabMenuTarget{display:none !important;float:left;width:10px;height:10px;margin-top:6px;background:url(http://firebug.local:8740/firebug1.3/skin/xp/tabMenuTarget.png);}.fbTabMenuTarget:hover{background:url(http://firebug.local:8740/firebug1.3/skin/xp/tabMenuTargetHover.png);}.fbShadow{float:left;background:url(http://firebug.local:8740/firebug1.3/skin/xp/shadowAlpha.png) no-repeat bottom right !important;background:url(http://firebug.local:8740/firebug1.3/skin/xp/shadow2.gif) no-repeat bottom right;margin:10px 0 0 10px !important;margin:10px 0 0 5px;}.fbShadowContent{display:block;position:relative;background-color:#fff;border:1px solid #a9a9a9;top:-6px;left:-6px;}.fbMenu{display:none;position:absolute;font-size:11px;z-index:2147483647;}.fbMenuContent{padding:2px;}.fbMenuSeparator{display:block;position:relative;padding:1px 18px 0;text-decoration:none;color:#000;cursor:default;background:#ACA899;margin:4px 0;}.fbMenuOption{display:block;position:relative;padding:2px 18px;text-decoration:none;color:#000;cursor:default;}.fbMenuOption:hover{color:#fff;background:#316AC5;}.fbMenuGroup{background:transparent url(http://firebug.local:8740/firebug1.3/skin/xp/tabMenuPin.png) no-repeat right 0;}.fbMenuGroup:hover{background:#316AC5 url(http://firebug.local:8740/firebug1.3/skin/xp/tabMenuPin.png) no-repeat right -17px;}.fbMenuGroupSelected{color:#fff;background:#316AC5 url(http://firebug.local:8740/firebug1.3/skin/xp/tabMenuPin.png) no-repeat right -17px;}.fbMenuChecked{background:transparent url(http://firebug.local:8740/firebug1.3/skin/xp/tabMenuCheckbox.png) no-repeat 4px 0;}.fbMenuChecked:hover{background:#316AC5 url(http://firebug.local:8740/firebug1.3/skin/xp/tabMenuCheckbox.png) no-repeat 4px -17px;}.fbMenuRadioSelected{background:transparent url(http://firebug.local:8740/firebug1.3/skin/xp/tabMenuRadio.png) no-repeat 4px 0;}.fbMenuRadioSelected:hover{background:#316AC5 url(http://firebug.local:8740/firebug1.3/skin/xp/tabMenuRadio.png) no-repeat 4px -17px;}.fbMenuShortcut{padding-right:85px;}.fbMenuShortcutKey{position:absolute;right:0;top:2px;width:77px;}#fbFirebugMenu{top:22px;left:0;}.fbMenuDisabled{color:#ACA899 !important;}#fbFirebugSettingsMenu{left:245px;top:99px;}#fbConsoleMenu{top:42px;left:48px;}.fbIconButton{display:block;}.fbIconButton{display:block;}.fbIconButton{display:block;float:left;height:20px;width:20px;color:#000;margin-right:2px;text-decoration:none;cursor:default;}.fbIconButton:hover{position:relative;top:-1px;left:-1px;margin-right:0;_margin-right:1px;color:#333;border:1px solid #fff;border-bottom:1px solid #bbb;border-right:1px solid #bbb;}.fbIconPressed{position:relative;margin-right:0;_margin-right:1px;top:0 !important;left:0 !important;height:19px;color:#333 !important;border:1px solid #bbb !important;border-bottom:1px solid #cfcfcf !important;border-right:1px solid #ddd !important;}#fbErrorPopup{position:absolute;right:0;bottom:0;height:19px;width:75px;background:url(http://firebug.local:8740/firebug1.3/skin/xp/sprite.png) #f1f2ee 0 0;z-index:999;}#fbErrorPopupContent{position:absolute;right:0;top:1px;height:18px;width:75px;_width:74px;border-left:1px solid #aca899;}#fbErrorIndicator{position:absolute;top:2px;right:5px;}.fbBtnInspectActive{background:#aaa;color:#fff !important;}.fbBody{margin:0;padding:0;overflow:hidden;font-family:Lucida Grande,Tahoma,sans-serif;font-size:11px;background:#fff;}.clear{clear:both;}#fbMiniChrome{display:none;right:0;height:27px;background:url(http://firebug.local:8740/firebug1.3/skin/xp/sprite.png) #f1f2ee 0 0;margin-left:1px;}#fbMiniContent{display:block;position:relative;left:-1px;right:0;top:1px;height:25px;border-left:1px solid #aca899;}#fbToolbarSearch{float:right;border:1px solid #ccc;margin:0 5px 0 0;background:#fff url(http://firebug.local:8740/firebug1.3/skin/xp/search.png) no-repeat 4px 2px !important;background:#fff url(http://firebug.local:8740/firebug1.3/skin/xp/search.gif) no-repeat 4px 2px;padding-left:20px;font-size:11px;}#fbToolbarErrors{float:right;margin:1px 4px 0 0;font-size:11px;}#fbLeftToolbarErrors{float:left;margin:7px 0px 0 5px;font-size:11px;}.fbErrors{padding-left:20px;height:14px;background:url(http://firebug.local:8740/firebug1.3/skin/xp/errorIcon.png) no-repeat !important;background:url(http://firebug.local:8740/firebug1.3/skin/xp/errorIcon.gif) no-repeat;color:#f00;font-weight:bold;}#fbMiniErrors{display:inline;display:none;float:right;margin:5px 2px 0 5px;}#fbMiniIcon{float:right;margin:3px 4px 0;height:20px;width:20px;float:right;background:url(http://firebug.local:8740/firebug1.3/skin/xp/sprite.png) 0 -135px;cursor:pointer;}#fbChrome{font-family:Lucida Grande,Tahoma,sans-serif;font-size:11px;position:absolute;top:0;left:0;height:100%;width:100%;border-collapse:collapse;background:#fff;overflow:hidden;}#fbTop{height:49px;}#fbToolbar{background:url(http://firebug.local:8740/firebug1.3/skin/xp/sprite.png) #f1f2ee 0 0;height:27px;font-size:11px;}#fbPanelBarBox{background:url(http://firebug.local:8740/firebug1.3/skin/xp/sprite.png) #dbd9c9 0 -27px;height:22px;}#fbContent{height:100%;vertical-align:top;}#fbBottom{height:18px;background:#fff;}#fbToolbarIcon{float:left;padding:0 5px 0;}#fbToolbarIcon a{background:url(http://firebug.local:8740/firebug1.3/skin/xp/sprite.png) 0 -135px;}#fbToolbarButtons{padding:0 2px 0 5px;}#fbToolbarButtons{padding:0 2px 0 5px;}.fbButton{text-decoration:none;display:block;float:left;color:#000;padding:4px 6px 4px 7px;cursor:default;}.fbButton:hover{color:#333;background:#f5f5ef url(http://firebug.local:8740/firebug1.3/skin/xp/buttonBg.png);padding:3px 5px 3px 6px;border:1px solid #fff;border-bottom:1px solid #bbb;border-right:1px solid #bbb;}.fbBtnPressed{background:#e3e3db url(http://firebug.local:8740/firebug1.3/skin/xp/buttonBgHover.png) !important;padding:3px 4px 2px 6px !important;margin:1px 0 0 1px !important;border:1px solid #ACA899 !important;border-color:#ACA899 #ECEBE3 #ECEBE3 #ACA899 !important;}#fbStatusBarBox{top:4px;cursor:default;}.fbToolbarSeparator{overflow:hidden;border:1px solid;border-color:transparent #fff transparent #777;_border-color:#eee #fff #eee #777;height:7px;margin:6px 3px;float:left;}.fbBtnSelected{font-weight:bold;}.fbStatusBar{color:#aca899;}.fbStatusBar a{text-decoration:none;color:black;}.fbStatusBar a:hover{color:blue;cursor:pointer;}#fbWindowButtons{position:absolute;white-space:nowrap;right:0;top:0;height:17px;width:50px;padding:5px 0 5px 5px;z-index:6;background:url(http://firebug.local:8740/firebug1.3/skin/xp/sprite.png) #f1f2ee 0 0;}#fbPanelBar1{width:1024px; z-index:8;left:0;white-space:nowrap;background:url(http://firebug.local:8740/firebug1.3/skin/xp/sprite.png) #dbd9c9 0 -27px;position:absolute;left:4px;}#fbPanelBar2Box{background:url(http://firebug.local:8740/firebug1.3/skin/xp/sprite.png) #dbd9c9 0 -27px;position:absolute;height:22px;width:300px; z-index:9;right:0;}#fbPanelBar2{position:absolute;width:290px; height:22px;padding-left:4px;}.fbPanel{display:none;}#fbPanelBox1,#fbPanelBox2{max-height:inherit;height:100%;font-size:1em;}#fbPanelBox2{background:#fff;}#fbPanelBox2{width:300px;background:#fff;}#fbPanel2{margin-left:6px;background:#fff;}#fbLargeCommandLine{display:none;position:absolute;z-index:9;top:28px;right:0;width:294px;height:201px;border-width:0;margin:0;padding:2px 0 0 2px;resize:none;outline:none;font-size:11px;overflow:auto;_right:-1px;_border-left:1px solid #fff;}#fbLargeCommandButtons{display:none;background:#ECE9D8;bottom:0;right:0;width:294px;height:21px;padding-top:1px;position:absolute;border-top:1px solid #ACA899;z-index:9;}#fbSmallCommandLineIcon{background:url(http://firebug.local:8740/firebug1.3/skin/xp/down.png) no-repeat;position:absolute;right:2px;bottom:3px;z-index:99;}#fbSmallCommandLineIcon:hover{background:url(http://firebug.local:8740/firebug1.3/skin/xp/downHover.png) no-repeat;}.hide{overflow:hidden !important;position:fixed !important;display:none !important;visibility:hidden !important;}#fbCommand{height:18px;}#fbCommandBox{position:fixed;_position:absolute;width:100%;height:18px;bottom:0;overflow:hidden;z-index:9;background:#fff;border:0;border-top:1px solid #ccc;}#fbCommandIcon{position:absolute;color:#00f;top:2px;left:7px;display:inline;font:11px Monaco,monospace;z-index:10;}#fbCommandLine{position:absolute;width:100%;top:0;left:0;border:0;margin:0;padding:2px 0 2px 32px;font:11px Monaco,monospace;z-index:9;outline:none;}#fbLargeCommandLineIcon{background:url(http://firebug.local:8740/firebug1.3/skin/xp/up.png) no-repeat;position:absolute;right:1px;bottom:1px;z-index:10;}#fbLargeCommandLineIcon:hover{background:url(http://firebug.local:8740/firebug1.3/skin/xp/upHover.png) no-repeat;}div.fbFitHeight{overflow:auto;position:relative;}.fbSmallButton{overflow:hidden;width:16px;height:16px;display:block;text-decoration:none;cursor:default;}#fbWindowButtons .fbSmallButton{float:right;margin-right:4px;}#fbWindow_btClose{background:url(http://firebug.local:8740/firebug1.3/skin/xp/sprite.png) 0 -119px;}#fbWindow_btClose:hover{background:url(http://firebug.local:8740/firebug1.3/skin/xp/sprite.png) -16px -119px;}#fbWindow_btDetach{background:url(http://firebug.local:8740/firebug1.3/skin/xp/sprite.png) -32px -119px;}#fbWindow_btDetach:hover{background:url(http://firebug.local:8740/firebug1.3/skin/xp/sprite.png) -48px -119px;}.fbTab{text-decoration:none;display:none;float:left;width:auto;float:left;cursor:default;font-family:Lucida Grande,Tahoma,sans-serif;font-size:11px;font-weight:bold;height:22px;color:#565656;}.fbPanelBar span{float:left;}.fbPanelBar .fbTabL,.fbPanelBar .fbTabR{height:22px;width:8px;}.fbPanelBar .fbTabText{padding:4px 1px 0;}a.fbTab:hover{background:url(http://firebug.local:8740/firebug1.3/skin/xp/sprite.png) 0 -73px;}a.fbTab:hover .fbTabL{background:url(http://firebug.local:8740/firebug1.3/skin/xp/sprite.png) -16px -96px;}a.fbTab:hover .fbTabR{background:url(http://firebug.local:8740/firebug1.3/skin/xp/sprite.png) -24px -96px;}.fbSelectedTab{background:url(http://firebug.local:8740/firebug1.3/skin/xp/sprite.png) #f1f2ee 0 -50px !important;color:#000;}.fbSelectedTab .fbTabL{background:url(http://firebug.local:8740/firebug1.3/skin/xp/sprite.png) 0 -96px !important;}.fbSelectedTab .fbTabR{background:url(http://firebug.local:8740/firebug1.3/skin/xp/sprite.png) -8px -96px !important;}#fbHSplitter{position:fixed;_position:absolute;left:0;top:0;width:100%;height:5px;overflow:hidden;cursor:n-resize !important;background:url(http://firebug.local:8740/firebug1.3/skin/xp/pixel_transparent.gif);z-index:9;}#fbHSplitter.fbOnMovingHSplitter{height:100%;z-index:100;}.fbVSplitter{background:#ece9d8;color:#000;border:1px solid #716f64;border-width:0 1px;border-left-color:#aca899;width:4px;cursor:e-resize;overflow:hidden;right:294px;text-decoration:none;z-index:10;position:absolute;height:100%;top:27px;}div.lineNo{font:1em Monaco,monospace;position:absolute;top:0;left:0;margin:0;padding:0 5px 0 20px;background:#eee;color:#888;border-right:1px solid #ccc;text-align:right;}.sourceBox{position:absolute;}.sourceCode{font:1em Monaco,monospace;overflow:hidden;white-space:pre;display:inline;}.nodeControl{margin-top:3px;margin-left:-14px;float:left;width:9px;height:9px;overflow:hidden;cursor:default;background:url(http://firebug.local:8740/firebug1.3/skin/xp/tree_open.gif);_float:none;_display:inline;_position:absolute;}div.nodeMaximized{background:url(http://firebug.local:8740/firebug1.3/skin/xp/tree_close.gif);}div.objectBox-element{padding:1px 3px;}.objectBox-selector{cursor:default;}.selectedElement{background:highlight;color:#fff !important;}.selectedElement span{color:#fff !important;}* html .selectedElement{position:relative;}@media screen and (-webkit-min-device-pixel-ratio:0){.selectedElement{background:#316AC5;color:#fff !important;}}.logRow *{font-size:1em;}.logRow-command{font-family:Monaco,monospace;color:blue;}.objectBox-string,.objectBox-text,.objectBox-number,.objectBox-function,.objectLink-element,.objectLink-textNode,.objectLink-function,.objectBox-stackTrace,.objectLink-profile{font-family:Monaco,monospace;}.objectBox-null{padding:0 2px;border:1px solid #666666;background-color:#888888;color:#FFFFFF;}.objectBox-string{color:red;}.objectBox-number{color:#000088;}.objectBox-function{color:DarkGreen;}.objectBox-object{color:DarkGreen;font-weight:bold;font-family:Lucida Grande,sans-serif;}.objectBox-array{color:#000;}.logRow-info,.logRow-error,.logRow-warning{background:#fff no-repeat 2px 2px;padding-left:20px;padding-bottom:3px;}.logRow-info{background-image:url(http://firebug.local:8740/firebug1.3/skin/xp/infoIcon.png) !important;background-image:url(http://firebug.local:8740/firebug1.3/skin/xp/infoIcon.gif);}.logRow-warning{background-color:cyan;background-image:url(http://firebug.local:8740/firebug1.3/skin/xp/warningIcon.png) !important;background-image:url(http://firebug.local:8740/firebug1.3/skin/xp/warningIcon.gif);}.logRow-error{background-color:LightYellow;background-image:url(http://firebug.local:8740/firebug1.3/skin/xp/errorIcon.png) !important;background-image:url(http://firebug.local:8740/firebug1.3/skin/xp/errorIcon.gif);color:#f00;}.errorMessage{vertical-align:top;color:#f00;}.objectBox-sourceLink{position:absolute;right:4px;top:2px;padding-left:8px;font-family:Lucida Grande,sans-serif;font-weight:bold;color:#0000FF;}.selectorTag,.selectorId,.selectorClass{font-family:Monaco,monospace;font-weight:normal;}.selectorTag{color:#0000FF;}.selectorId{color:DarkBlue;}.selectorClass{color:red;}.objectBox-element{font-family:Monaco,monospace;color:#000088;}.nodeChildren{padding-left:26px;}.nodeTag{color:blue;cursor:pointer;}.nodeValue{color:#FF0000;font-weight:normal;}.nodeText,.nodeComment{margin:0 2px;vertical-align:top;}.nodeText{color:#333333;font-family:Monaco,monospace;}.nodeComment{color:DarkGreen;}.nodeHidden,.nodeHidden *{color:#888888;}.nodeHidden .nodeTag{color:#5F82D9;}.nodeHidden .nodeValue{color:#D86060;}.selectedElement .nodeHidden,.selectedElement .nodeHidden *{color:SkyBlue !important;}.log-object{}.property{position:relative;clear:both;height:15px;}.propertyNameCell{vertical-align:top;float:left;width:28%;position:absolute;left:0;z-index:0;}.propertyValueCell{float:right;width:68%;background:#fff;position:absolute;padding-left:5px;display:table-cell;right:0;z-index:1;}.propertyName{font-weight:bold;}.FirebugPopup{height:100% !important;}.FirebugPopup #fbWindowButtons{display:none !important;}.FirebugPopup #fbHSplitter{display:none !important;}'
};

// ************************************************************************************************
}});