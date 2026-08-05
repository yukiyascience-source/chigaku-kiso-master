// モード別表示設定（Ver.1.4.4 試作）
const MODE_PRESENTATION={
 A:{code:"A",name:"冒険者",displayName:"冒険者モード",icon:"🧭",currentIcon:"🚪",lockedIcon:"🧱",lockedTitle:"？？？",lockedNote:"この先はまだ壁の向こう",clearSymbol:"🗺️",clearTitle:"冒険者モード 完全クリア！",clearMessage:"15ステージを制覇しました。",nextUnlockMessage:"師範モードが解放されました。",accent:"#4f8b7f",accentSoft:"#edf8f4"},
 M:{code:"M",name:"師範",displayName:"師範モード",icon:"🥋",currentIcon:"⛩️",lockedIcon:"🔒",lockedTitle:"封印中",lockedNote:"修練を積むと開きます",clearSymbol:"⚔️",clearTitle:"師範モード 完全クリア！",clearMessage:"15ステージの修練を終えました。",nextUnlockMessage:"神モードが解放されました。",accent:"#8a6545",accentSoft:"#f8f1e9"},
 G:{code:"G",name:"神",displayName:"神モード",icon:"👑",currentIcon:"🚀",lockedIcon:"🌑",lockedTitle:"？？？",lockedNote:"最後の結界に閉ざされています",clearSymbol:"🌍",clearTitle:"神モード 完全クリア！",clearMessage:"全45ステージを制覇しました。",nextUnlockMessage:"地学基礎マスター達成！",accent:"#7059a6",accentSoft:"#f1eefb"}
};
function getModePresentation(code){return MODE_PRESENTATION[code]||MODE_PRESENTATION.A;}
