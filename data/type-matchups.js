/* ===== Type Data ===== */
const typeInfo = {
  ほのお:  { icon: "🔥", color: "#FF6B35", bg: "#FFF0E8" },
  みず:    { icon: "💧", color: "#4A90D9", bg: "#E8F4FD" },
  くさ:    { icon: "🌿", color: "#5DB85D", bg: "#EDF7ED" },
  でんき:  { icon: "⚡", color: "#F5C542", bg: "#FDF8E8" },
  こおり:  { icon: "❄️", color: "#74C2E1", bg: "#EAF6FB" },
  じめん:  { icon: "🏔️", color: "#B8860B", bg: "#F5F0E0" },
  ひこう:  { icon: "🕊️", color: "#7EC8E3", bg: "#ECF6FB" },
  いわ:    { icon: "🪨", color: "#8B7355", bg: "#F2EDE6" },
  むし:    { icon: "🐛", color: "#8DB600", bg: "#F2F7E0" },
  どく:    { icon: "☠️", color: "#9B59B6", bg: "#F3EAF7" },
  かくとう: { icon: "🥊", color: "#C0392B", bg: "#FAEAE8" },
  エスパー: { icon: "🔮", color: "#E84393", bg: "#FDE8F2" },
  ゴースト: { icon: "👻", color: "#6C5CE7", bg: "#EDEBFA" },
  ドラゴン: { icon: "🐉", color: "#6F42C1", bg: "#EEEBF7" },
  はがね:  { icon: "🛡️", color: "#6D7587", bg: "#EDEEF1" },
  フェアリー: { icon: "🧚", color: "#E685B5", bg: "#FCEEF5" },
  ノーマル: { icon: "⭐", color: "#9E9E9E", bg: "#F2F2F2" },
  あく:    { icon: "🌑", color: "#4A4A4A", bg: "#EDEDEE" },
};

/* winner beats loser (winner is super effective against loser) */
/* 全18タイプ網羅: ほのお,みず,くさ,でんき,こおり,じめん,ひこう,いわ,
   むし,どく,かくとう,エスパー,ゴースト,ドラゴン,はがね,フェアリー,ノーマル,あく */
const typeMatchups = [
  /* ほのお → くさ,こおり,むし,はがね */
  { winner: "ほのお",   loser: "くさ",       hint: "ひで くさが もえちゃう！" },
  { winner: "ほのお",   loser: "こおり",     hint: "ひで こおりが とけちゃう！" },
  { winner: "ほのお",   loser: "むし",       hint: "ひで むしは にげちゃう！" },
  { winner: "ほのお",   loser: "はがね",     hint: "ひで はがねが とけちゃう！" },
  /* みず → ほのお,じめん,いわ */
  { winner: "みず",     loser: "ほのお",     hint: "みずで ひを けすよ！" },
  { winner: "みず",     loser: "じめん",     hint: "みずで つちが ながれるよ！" },
  { winner: "みず",     loser: "いわ",       hint: "みずで いわが けずれるよ！" },
  /* くさ → みず,じめん,いわ */
  { winner: "くさ",     loser: "みず",       hint: "くさが みずを すいとるよ！" },
  { winner: "くさ",     loser: "じめん",     hint: "くさが じめんから はえるよ！" },
  { winner: "くさ",     loser: "いわ",       hint: "くさの ねっこで いわを わるよ！" },
  /* でんき → みず,ひこう */
  { winner: "でんき",   loser: "みず",       hint: "みずに でんきは ビリビリ！" },
  { winner: "でんき",   loser: "ひこう",     hint: "かみなりで そらを こうげき！" },
  /* こおり → くさ,じめん,ひこう,ドラゴン */
  { winner: "こおり",   loser: "くさ",       hint: "さむさで くさが こおるよ！" },
  { winner: "こおり",   loser: "じめん",     hint: "じめんが こおって カチカチ！" },
  { winner: "こおり",   loser: "ひこう",     hint: "つばさが こおって とべない！" },
  { winner: "こおり",   loser: "ドラゴン",   hint: "ドラゴンは さむさに よわい！" },
  /* かくとう → ノーマル,こおり,いわ,あく,はがね */
  { winner: "かくとう", loser: "ノーマル",   hint: "かくとうは ノーマルに つよい！" },
  { winner: "かくとう", loser: "こおり",     hint: "パンチで こおりを わるよ！" },
  { winner: "かくとう", loser: "いわ",       hint: "パンチで いわを くだくよ！" },
  { winner: "かくとう", loser: "あく",       hint: "せいぎの パンチで あくに かつ！" },
  { winner: "かくとう", loser: "はがね",     hint: "きたえた パンチで はがねを こわす！" },
  /* どく → くさ,フェアリー */
  { winner: "どく",     loser: "くさ",       hint: "どくで くさが かれちゃう！" },
  { winner: "どく",     loser: "フェアリー", hint: "どくは フェアリーに つよい！" },
  /* じめん → ほのお,でんき,どく,いわ,はがね */
  { winner: "じめん",   loser: "でんき",     hint: "でんきは じめんに すいこまれる！" },
  { winner: "じめん",   loser: "どく",       hint: "どくを つちに うめちゃえ！" },
  { winner: "じめん",   loser: "いわ",       hint: "じしんで いわが くずれるよ！" },
  { winner: "じめん",   loser: "はがね",     hint: "じめんで はがねが うまるよ！" },
  { winner: "じめん",   loser: "ほのお",     hint: "つちを かけて ひを けすよ！" },
  /* ひこう → くさ,かくとう,むし */
  { winner: "ひこう",   loser: "くさ",       hint: "そらから くさを こうげき！" },
  { winner: "ひこう",   loser: "かくとう",   hint: "そらから パンチは とどかない！" },
  { winner: "ひこう",   loser: "むし",       hint: "とりは むしを たべちゃう！" },
  /* エスパー → かくとう,どく */
  { winner: "エスパー", loser: "かくとう",   hint: "ちからより あたまが かつ！" },
  { winner: "エスパー", loser: "どく",       hint: "ねんりきで どくを たおす！" },
  /* むし → くさ,エスパー,あく */
  { winner: "むし",     loser: "くさ",       hint: "むしが くさを たべちゃう！" },
  { winner: "むし",     loser: "エスパー",   hint: "むしは エスパーが にがて！" },
  { winner: "むし",     loser: "あく",       hint: "むしは あくに つよいよ！" },
  /* いわ → ほのお,こおり,ひこう,むし */
  { winner: "いわ",     loser: "ほのお",     hint: "いわで ひを おさえるよ！" },
  { winner: "いわ",     loser: "こおり",     hint: "いわで こおりを くだくよ！" },
  { winner: "いわ",     loser: "ひこう",     hint: "いわで とりを おとすよ！" },
  { winner: "いわ",     loser: "むし",       hint: "いわで むしを つぶしちゃう！" },
  /* ゴースト → エスパー,ゴースト */
  { winner: "ゴースト", loser: "エスパー",   hint: "おばけに ねんりきは きかない！" },
  { winner: "ゴースト", loser: "ゴースト",   hint: "おばけには おばけ！" },
  /* ドラゴン → ドラゴン */
  { winner: "ドラゴン", loser: "ドラゴン",   hint: "ドラゴンには ドラゴン！" },
  /* あく → エスパー,ゴースト */
  { winner: "あく",     loser: "エスパー",   hint: "あくは ねんりきが きかないよ！" },
  { winner: "あく",     loser: "ゴースト",   hint: "あくは おばけに つよい！" },
  /* はがね → こおり,いわ,フェアリー */
  { winner: "はがね",   loser: "こおり",     hint: "はがねで こおりを くだく！" },
  { winner: "はがね",   loser: "いわ",       hint: "はがねで いわを けずるよ！" },
  { winner: "はがね",   loser: "フェアリー", hint: "はがねは フェアリーに つよい！" },
  /* フェアリー → かくとう,ドラゴン,あく */
  { winner: "フェアリー", loser: "かくとう", hint: "フェアリーに パンチは きかない！" },
  { winner: "フェアリー", loser: "ドラゴン", hint: "フェアリーは ドラゴンに つよい！" },
  { winner: "フェアリー", loser: "あく",     hint: "フェアリーの ひかりで あくに かつ！" },
];
