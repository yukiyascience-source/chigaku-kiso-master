// =====================================================
// 地学基礎マスター Aパック問題データ Ver.1.4.2
// Adventurer／冒険者モード 150問
// ※テーマは既存問題への暫定付与。後日見直し可能。
// =====================================================

const QUESTION_PACK_A = {
  code: "A",
  name: "Adventurer",
  displayName: "冒険者",
  icon: "🧭",
  fields: [
  {
    "id": "plate",
    "icon": "🌋",
    "name": "プレート",
    "subtitle": "地震・火山・地球内部",
    "color": "#ef6b5b",
    "stages": [
      {
        "name": "Stage 1 基礎",
        "questions": [
          {
            "id": "EQ-A1-01",
            "field": "EQ",
            "pack": "A",
            "stage": 1,
            "number": 1,
            "themeNumber": 1,
            "theme": "地球の大きさと形",
            "question": "地球の表面をおおう、かたい岩石の部分を何といいますか。",
            "choices": [
              "プレート",
              "マントル対流",
              "外核",
              "震源"
            ],
            "answer": 0,
            "explanation": "地球表面のかたい岩石部分はプレートと呼ばれます。",
            "keyword": "プレート"
          },
          {
            "id": "EQ-A1-02",
            "field": "EQ",
            "pack": "A",
            "stage": 1,
            "number": 2,
            "themeNumber": 2,
            "theme": "地球の内部構造とモホロビチッチ不連続面",
            "question": "日本付近で海洋プレートが大陸側のプレートの下へ沈み込む場所を何といいますか。",
            "choices": [
              "海溝",
              "海嶺",
              "断層崖",
              "扇状地"
            ],
            "answer": 0,
            "explanation": "海洋プレートが沈み込む細長く深い地形が海溝です。",
            "keyword": "海溝"
          },
          {
            "id": "EQ-A1-03",
            "field": "EQ",
            "pack": "A",
            "stage": 1,
            "number": 3,
            "themeNumber": 3,
            "theme": "リソスフェア・アセノスフェア",
            "question": "地震が地下で最初に発生した場所を何といいますか。",
            "choices": [
              "震源",
              "震央",
              "断層",
              "火口"
            ],
            "answer": 0,
            "explanation": "地下の地震発生地点を震源、その真上の地表地点を震央といいます。",
            "keyword": "震源"
          },
          {
            "id": "EQ-A1-04",
            "field": "EQ",
            "pack": "A",
            "stage": 1,
            "number": 4,
            "themeNumber": 4,
            "theme": "プレートテクトニクス",
            "question": "震源の真上にある地表の地点を何といいますか。",
            "choices": [
              "震央",
              "震源",
              "震度",
              "震域"
            ],
            "answer": 0,
            "explanation": "震源の真上の地表地点が震央です。",
            "keyword": "震央"
          },
          {
            "id": "EQ-A1-05",
            "field": "EQ",
            "pack": "A",
            "stage": 1,
            "number": 5,
            "themeNumber": 5,
            "theme": "ホットスポット",
            "question": "地震の最初の小さな揺れを何といいますか。",
            "choices": [
              "初期微動",
              "主要動",
              "余震",
              "本震"
            ],
            "answer": 0,
            "explanation": "P波による最初の小さな揺れが初期微動です。",
            "keyword": "初期微動"
          },
          {
            "id": "EQ-A1-06",
            "field": "EQ",
            "pack": "A",
            "stage": 1,
            "number": 6,
            "themeNumber": 6,
            "theme": "断層",
            "question": "初期微動を伝える地震波はどれですか。",
            "choices": [
              "P波",
              "S波",
              "表面波",
              "津波"
            ],
            "answer": 0,
            "explanation": "P波は速く伝わり、初期微動を起こします。",
            "keyword": "P波"
          },
          {
            "id": "EQ-A1-07",
            "field": "EQ",
            "pack": "A",
            "stage": 1,
            "number": 7,
            "themeNumber": 7,
            "theme": "地震全般",
            "question": "主要動を起こす地震波は主にどれですか。",
            "choices": [
              "S波",
              "P波",
              "電磁波",
              "音波"
            ],
            "answer": 0,
            "explanation": "S波はP波より遅く到着し、大きな揺れである主要動を起こします。",
            "keyword": "S波"
          },
          {
            "id": "EQ-A1-08",
            "field": "EQ",
            "pack": "A",
            "stage": 1,
            "number": 8,
            "themeNumber": 8,
            "theme": "大森公式",
            "question": "マグマが地表に出たものを何といいますか。",
            "choices": [
              "溶岩",
              "鉱物",
              "火山灰",
              "深成岩"
            ],
            "answer": 0,
            "explanation": "地下のマグマが地表に出たものを溶岩といいます。",
            "keyword": "溶岩"
          },
          {
            "id": "EQ-A1-09",
            "field": "EQ",
            "pack": "A",
            "stage": 1,
            "number": 9,
            "themeNumber": 9,
            "theme": "火成岩と造岩鉱物",
            "question": "火山灰が積もって固まった岩石はどれですか。",
            "choices": [
              "凝灰岩",
              "花こう岩",
              "石灰岩",
              "れき岩"
            ],
            "answer": 0,
            "explanation": "火山灰などの火山噴出物が固まった岩石が凝灰岩です。",
            "keyword": "凝灰岩"
          },
          {
            "id": "EQ-A1-10",
            "field": "EQ",
            "pack": "A",
            "stage": 1,
            "number": 10,
            "themeNumber": 10,
            "theme": "火山",
            "question": "地球内部で最も外側にある層はどれですか。",
            "choices": [
              "地殻",
              "マントル",
              "外核",
              "内核"
            ],
            "answer": 0,
            "explanation": "地球の最外層は地殻です。",
            "keyword": "地殻"
          }
        ]
      },
      {
        "name": "Stage 2 標準",
        "questions": [
          {
            "id": "EQ-A2-01",
            "field": "EQ",
            "pack": "A",
            "stage": 2,
            "number": 1,
            "themeNumber": 1,
            "theme": "地球の大きさと形",
            "question": "海嶺で起こっていることとして正しいものはどれですか。",
            "choices": [
              "新しい海洋プレートがつくられる",
              "海洋プレートが沈み込む",
              "大陸が削られる",
              "地震が起こらない"
            ],
            "answer": 0,
            "explanation": "海嶺ではマグマが上昇し、新しい海洋プレートが生まれます。",
            "keyword": "海嶺"
          },
          {
            "id": "EQ-A2-02",
            "field": "EQ",
            "pack": "A",
            "stage": 2,
            "number": 2,
            "themeNumber": 2,
            "theme": "地球の内部構造とモホロビチッチ不連続面",
            "question": "海溝付近で震源が深くなる向きとして正しいものはどれですか。",
            "choices": [
              "大陸側へ向かうほど深くなる",
              "海側へ向かうほど深くなる",
              "どこでも同じ",
              "震源は地表だけにある"
            ],
            "answer": 0,
            "explanation": "沈み込むプレートに沿って、大陸側ほど震源が深くなります。",
            "keyword": "震源分布"
          },
          {
            "id": "EQ-A2-03",
            "field": "EQ",
            "pack": "A",
            "stage": 2,
            "number": 3,
            "themeNumber": 3,
            "theme": "リソスフェア・アセノスフェア",
            "question": "P波とS波の到着時刻の差が大きいほど、震源までの距離はどうなりますか。",
            "choices": [
              "遠い",
              "近い",
              "変わらない",
              "判断できない"
            ],
            "answer": 0,
            "explanation": "初期微動継続時間が長いほど震源までの距離は遠いと考えられます。",
            "keyword": "初期微動継続時間"
          },
          {
            "id": "EQ-A2-04",
            "field": "EQ",
            "pack": "A",
            "stage": 2,
            "number": 4,
            "themeNumber": 4,
            "theme": "プレートテクトニクス",
            "question": "震度が表すものはどれですか。",
            "choices": [
              "ある場所での揺れの強さ",
              "地震そのものの規模",
              "震源の深さ",
              "断層の長さ"
            ],
            "answer": 0,
            "explanation": "震度は各地点の揺れの強さ、マグニチュードは地震そのものの規模です。",
            "keyword": "震度"
          },
          {
            "id": "EQ-A2-05",
            "field": "EQ",
            "pack": "A",
            "stage": 2,
            "number": 5,
            "themeNumber": 5,
            "theme": "ホットスポット",
            "question": "マグニチュードが表すものはどれですか。",
            "choices": [
              "地震そのものの規模",
              "各地点の揺れ",
              "津波の高さ",
              "震源の位置"
            ],
            "answer": 0,
            "explanation": "マグニチュードは地震が放出したエネルギーの規模を表します。",
            "keyword": "マグニチュード"
          },
          {
            "id": "EQ-A2-06",
            "field": "EQ",
            "pack": "A",
            "stage": 2,
            "number": 6,
            "themeNumber": 6,
            "theme": "断層",
            "question": "粘り気の強いマグマで起こりやすい噴火はどれですか。",
            "choices": [
              "爆発的な噴火",
              "静かな溶岩流",
              "噴火しない",
              "必ず海底噴火"
            ],
            "answer": 0,
            "explanation": "粘り気が強いとガスが抜けにくく、爆発的になりやすいです。",
            "keyword": "爆発的噴火"
          },
          {
            "id": "EQ-A2-07",
            "field": "EQ",
            "pack": "A",
            "stage": 2,
            "number": 7,
            "themeNumber": 7,
            "theme": "地震全般",
            "question": "ねばりけの弱いマグマがつくりやすい火山の形はどれですか。",
            "choices": [
              "傾斜がゆるやかな火山",
              "急で盛り上がった火山",
              "必ずカルデラ",
              "火山にならない"
            ],
            "answer": 0,
            "explanation": "流れやすい溶岩は広がり、傾斜のゆるやかな火山をつくります。",
            "keyword": "火山の形"
          },
          {
            "id": "EQ-A2-08",
            "field": "EQ",
            "pack": "A",
            "stage": 2,
            "number": 8,
            "themeNumber": 8,
            "theme": "大森公式",
            "question": "玄武岩質マグマの一般的な特徴はどれですか。",
            "choices": [
              "ねばりけが弱い",
              "ねばりけが強い",
              "白っぽい",
              "二酸化ケイ素が非常に多い"
            ],
            "answer": 0,
            "explanation": "玄武岩質マグマは比較的低粘性で、黒っぽい岩石をつくります。",
            "keyword": "玄武岩質マグマ"
          },
          {
            "id": "EQ-A2-09",
            "field": "EQ",
            "pack": "A",
            "stage": 2,
            "number": 9,
            "themeNumber": 9,
            "theme": "火成岩と造岩鉱物",
            "question": "日本で火山や地震が多い主な理由はどれですか。",
            "choices": [
              "複数のプレートの境界に位置するため",
              "赤道に近いため",
              "島国だから",
              "雨が多いため"
            ],
            "answer": 0,
            "explanation": "日本列島は複数のプレート境界付近にあります。",
            "keyword": "プレート境界"
          },
          {
            "id": "EQ-A2-10",
            "field": "EQ",
            "pack": "A",
            "stage": 2,
            "number": 10,
            "themeNumber": 10,
            "theme": "火山",
            "question": "地下深くでゆっくり冷えたマグマからできる岩石はどれですか。",
            "choices": [
              "深成岩",
              "火山岩",
              "堆積岩",
              "変成岩だけ"
            ],
            "answer": 0,
            "explanation": "地下深くでゆっくり冷えると結晶の大きな深成岩になります。",
            "keyword": "深成岩"
          }
        ]
      },
      {
        "name": "Stage 3 実践",
        "questions": [
          {
            "id": "EQ-A3-01",
            "field": "EQ",
            "pack": "A",
            "stage": 3,
            "number": 1,
            "themeNumber": 1,
            "theme": "地球の大きさと形",
            "question": "ある地点でP波到着が10時00分00秒、S波到着が10時00分08秒だった。初期微動継続時間は何秒ですか。",
            "choices": [
              "8秒",
              "18秒",
              "2秒",
              "80秒"
            ],
            "answer": 0,
            "explanation": "S波到着時刻からP波到着時刻を引くと8秒です。",
            "keyword": "初期微動継続時間"
          },
          {
            "id": "EQ-A3-02",
            "field": "EQ",
            "pack": "A",
            "stage": 3,
            "number": 2,
            "themeNumber": 2,
            "theme": "地球の内部構造とモホロビチッチ不連続面",
            "question": "同じ地震でA地点の初期微動継続時間が4秒、B地点が10秒だった。震源に近いのはどちらですか。",
            "choices": [
              "A地点",
              "B地点",
              "同じ",
              "判断不能"
            ],
            "answer": 0,
            "explanation": "初期微動継続時間が短いA地点の方が震源に近いです。",
            "keyword": "初期微動継続時間"
          },
          {
            "id": "EQ-A3-03",
            "field": "EQ",
            "pack": "A",
            "stage": 3,
            "number": 3,
            "themeNumber": 3,
            "theme": "リソスフェア・アセノスフェア",
            "question": "海洋プレートが大陸プレートの下へ沈み込む境界で起こりやすい現象の組合せはどれですか。",
            "choices": [
              "海溝・地震・火山活動",
              "海嶺・無地震・砂丘",
              "大河川・氷河・台風",
              "扇状地・三角州・洪水"
            ],
            "answer": 0,
            "explanation": "沈み込み帯では海溝、地震、火山活動が関連して見られます。",
            "keyword": "沈み込み帯"
          },
          {
            "id": "EQ-A3-04",
            "field": "EQ",
            "pack": "A",
            "stage": 3,
            "number": 4,
            "themeNumber": 4,
            "theme": "プレートテクトニクス",
            "question": "火山Aは広くなだらか、火山Bは急な形をしている。より流れやすいマグマをもつ可能性が高いのはどちらですか。",
            "choices": [
              "火山A",
              "火山B",
              "同じ",
              "形からはわからない"
            ],
            "answer": 0,
            "explanation": "流れやすい溶岩は広範囲に広がり、なだらかな火山をつくります。",
            "keyword": "マグマの粘性"
          },
          {
            "id": "EQ-A3-05",
            "field": "EQ",
            "pack": "A",
            "stage": 3,
            "number": 5,
            "themeNumber": 5,
            "theme": "ホットスポット",
            "question": "震央から同じ距離でも震度が異なることがある主な理由として適切なのはどれですか。",
            "choices": [
              "地盤の違い",
              "経度の違いだけ",
              "時刻の違いだけ",
              "方位磁針の違い"
            ],
            "answer": 0,
            "explanation": "地盤の硬さや地形などによって揺れ方は異なります。",
            "keyword": "地盤"
          },
          {
            "id": "EQ-A3-06",
            "field": "EQ",
            "pack": "A",
            "stage": 3,
            "number": 6,
            "themeNumber": 6,
            "theme": "断層",
            "question": "海底で大規模な地震が起こり、海底が急に上下したとき発生する可能性が高いものはどれですか。",
            "choices": [
              "津波",
              "季節風",
              "高潮だけ",
              "海流停止"
            ],
            "answer": 0,
            "explanation": "海底の急激な上下変動で海水が動かされ、津波が発生します。",
            "keyword": "津波"
          },
          {
            "id": "EQ-A3-07",
            "field": "EQ",
            "pack": "A",
            "stage": 3,
            "number": 7,
            "themeNumber": 7,
            "theme": "地震全般",
            "question": "火山灰の層が離れた地域でも同じ時代の地層を比べる手がかりになる理由はどれですか。",
            "choices": [
              "短時間に広い範囲へ降り積もるため",
              "必ず化石を含むため",
              "海底にしか積もらないため",
              "色がすべて同じため"
            ],
            "answer": 0,
            "explanation": "大噴火の火山灰は短時間に広範囲へ堆積し、鍵層になります。",
            "keyword": "鍵層"
          },
          {
            "id": "EQ-A3-08",
            "field": "EQ",
            "pack": "A",
            "stage": 3,
            "number": 8,
            "themeNumber": 8,
            "theme": "大森公式",
            "question": "プレートが互いに横へずれる境界で起こりやすいものはどれですか。",
            "choices": [
              "横ずれ断層型の地震",
              "海嶺での新生だけ",
              "火山活動だけ",
              "地震は起こらない"
            ],
            "answer": 0,
            "explanation": "横ずれ境界では断層に沿う地震が起こりやすいです。",
            "keyword": "横ずれ境界"
          },
          {
            "id": "EQ-A3-09",
            "field": "EQ",
            "pack": "A",
            "stage": 3,
            "number": 9,
            "themeNumber": 9,
            "theme": "火成岩と造岩鉱物",
            "question": "地球内部でS波が通らない層があることから推定できることはどれですか。",
            "choices": [
              "外核は液体である",
              "内核は気体である",
              "マントルは真空である",
              "地殻は液体である"
            ],
            "answer": 0,
            "explanation": "S波は液体中を伝わらないため、外核は液体と考えられます。",
            "keyword": "外核"
          },
          {
            "id": "EQ-A3-10",
            "field": "EQ",
            "pack": "A",
            "stage": 3,
            "number": 10,
            "themeNumber": 10,
            "theme": "火山",
            "question": "地震の備えとして最も適切なものはどれですか。",
            "choices": [
              "家具の固定や避難経路の確認",
              "地震後に初めて避難場所を調べる",
              "窓際に重い物を置く",
              "非常食をすべて1か所に隠す"
            ],
            "answer": 0,
            "explanation": "家具固定、避難経路、備蓄の確認が基本です。",
            "keyword": "防災"
          }
        ]
      }
    ],
    "code": "EQ"
  },
  {
    "id": "atmos",
    "icon": "☁️",
    "name": "大気",
    "subtitle": "天気・海洋・気候",
    "color": "#4ba9e8",
    "stages": [
      {
        "name": "Stage 1 基礎",
        "questions": [
          {
            "id": "AT-A1-01",
            "field": "AT",
            "pack": "A",
            "stage": 1,
            "number": 1,
            "themeNumber": 1,
            "theme": "大気圧",
            "question": "空気中に含まれる水蒸気が冷えて水滴になる変化を何といいますか。",
            "choices": [
              "凝結",
              "蒸発",
              "融解",
              "昇華"
            ],
            "answer": 0,
            "explanation": "水蒸気が水滴になる変化が凝結です。",
            "keyword": "凝結"
          },
          {
            "id": "AT-A1-02",
            "field": "AT",
            "pack": "A",
            "stage": 1,
            "number": 2,
            "themeNumber": 2,
            "theme": "大気の層",
            "question": "雲は主に何からできていますか。",
            "choices": [
              "小さな水滴や氷の粒",
              "水蒸気だけ",
              "酸素だけ",
              "ちりだけ"
            ],
            "answer": 0,
            "explanation": "雲は小さな水滴や氷晶からできています。",
            "keyword": "雲"
          },
          {
            "id": "AT-A1-03",
            "field": "AT",
            "pack": "A",
            "stage": 1,
            "number": 3,
            "themeNumber": 3,
            "theme": "オゾン層",
            "question": "気圧を測る器具はどれですか。",
            "choices": [
              "気圧計",
              "温度計",
              "湿度計",
              "風向計"
            ],
            "answer": 0,
            "explanation": "気圧は気圧計で測ります。",
            "keyword": "気圧計"
          },
          {
            "id": "AT-A1-04",
            "field": "AT",
            "pack": "A",
            "stage": 1,
            "number": 4,
            "themeNumber": 4,
            "theme": "飽和水蒸気量・湿度・露点",
            "question": "等圧線は何が等しい地点を結んだ線ですか。",
            "choices": [
              "気圧",
              "気温",
              "湿度",
              "風速"
            ],
            "answer": 0,
            "explanation": "等圧線は同じ気圧の地点を結びます。",
            "keyword": "等圧線"
          },
          {
            "id": "AT-A1-05",
            "field": "AT",
            "pack": "A",
            "stage": 1,
            "number": 5,
            "themeNumber": 5,
            "theme": "雲と大気の安定・不安定",
            "question": "風は一般にどちらからどちらへ吹きますか。",
            "choices": [
              "高気圧から低気圧へ",
              "低気圧から高気圧へ",
              "海からだけ",
              "山からだけ"
            ],
            "answer": 0,
            "explanation": "気圧差によって高圧側から低圧側へ風が生じます。",
            "keyword": "気圧差"
          },
          {
            "id": "AT-A1-06",
            "field": "AT",
            "pack": "A",
            "stage": 1,
            "number": 6,
            "themeNumber": 6,
            "theme": "温帯低気圧と熱帯低気圧",
            "question": "気温を測るとき、温度計に直射日光を当てない理由はどれですか。",
            "choices": [
              "実際より高く測るおそれがあるため",
              "温度計が軽くなるため",
              "湿度が下がるため",
              "風が止まるため"
            ],
            "answer": 0,
            "explanation": "直射日光で温度計自体が温まり、正しい気温を測れません。",
            "keyword": "気温観測"
          },
          {
            "id": "AT-A1-07",
            "field": "AT",
            "pack": "A",
            "stage": 1,
            "number": 7,
            "themeNumber": 7,
            "theme": "日本の天気",
            "question": "海面付近の暖かい海水が主に風によって運ばれる流れを何といいますか。",
            "choices": [
              "表層海流",
              "深層流",
              "地下水",
              "上昇気流"
            ],
            "answer": 0,
            "explanation": "海面近くの海流は風の影響を強く受けます。",
            "keyword": "表層海流"
          },
          {
            "id": "AT-A1-08",
            "field": "AT",
            "pack": "A",
            "stage": 1,
            "number": 8,
            "themeNumber": 8,
            "theme": "エネルギー循環",
            "question": "太平洋側で冬に乾燥しやすい主な理由はどれですか。",
            "choices": [
              "季節風が山を越える間に水分を失うため",
              "海が凍るため",
              "台風が多いため",
              "赤道に近いため"
            ],
            "answer": 0,
            "explanation": "日本海側で雪を降らせた空気が山越え後に乾燥します。",
            "keyword": "冬の季節風"
          },
          {
            "id": "AT-A1-09",
            "field": "AT",
            "pack": "A",
            "stage": 1,
            "number": 9,
            "themeNumber": 9,
            "theme": "大気循環",
            "question": "湿度100％に近づくと起こりやすいことはどれですか。",
            "choices": [
              "凝結",
              "蒸発だけ",
              "気圧消失",
              "風停止"
            ],
            "answer": 0,
            "explanation": "空気が飽和すると水蒸気が凝結しやすくなります。",
            "keyword": "飽和"
          },
          {
            "id": "AT-A1-10",
            "field": "AT",
            "pack": "A",
            "stage": 1,
            "number": 10,
            "themeNumber": 10,
            "theme": "海洋循環",
            "question": "天気図で低気圧の中心付近に集まりやすいものはどれですか。",
            "choices": [
              "雲や雨",
              "晴天だけ",
              "乾燥した下降気流だけ",
              "無風"
            ],
            "answer": 0,
            "explanation": "低気圧では空気が上昇し、雲や降水が生じやすいです。",
            "keyword": "低気圧"
          }
        ]
      },
      {
        "name": "Stage 2 標準",
        "questions": [
          {
            "id": "AT-A2-01",
            "field": "AT",
            "pack": "A",
            "stage": 2,
            "number": 1,
            "themeNumber": 1,
            "theme": "大気圧",
            "question": "空気が上昇すると一般に温度はどうなりますか。",
            "choices": [
              "下がる",
              "上がる",
              "変わらない",
              "必ず0℃になる"
            ],
            "answer": 0,
            "explanation": "上昇した空気は膨張して温度が下がります。",
            "keyword": "断熱膨張"
          },
          {
            "id": "AT-A2-02",
            "field": "AT",
            "pack": "A",
            "stage": 2,
            "number": 2,
            "themeNumber": 2,
            "theme": "大気の層",
            "question": "空気が下降すると一般に温度はどうなりますか。",
            "choices": [
              "上がる",
              "下がる",
              "変わらない",
              "必ず露点になる"
            ],
            "answer": 0,
            "explanation": "下降する空気は圧縮されて温度が上がります。",
            "keyword": "断熱圧縮"
          },
          {
            "id": "AT-A2-03",
            "field": "AT",
            "pack": "A",
            "stage": 2,
            "number": 3,
            "themeNumber": 3,
            "theme": "オゾン層",
            "question": "前線ができる場所として正しいものはどれですか。",
            "choices": [
              "性質の異なる気団の境界",
              "海底のプレート境界",
              "川の河口",
              "火山の火口"
            ],
            "answer": 0,
            "explanation": "温度や湿度の異なる気団の境界に前線ができます。",
            "keyword": "前線"
          },
          {
            "id": "AT-A2-04",
            "field": "AT",
            "pack": "A",
            "stage": 2,
            "number": 4,
            "themeNumber": 4,
            "theme": "飽和水蒸気量・湿度・露点",
            "question": "寒冷前線の通過時に起こりやすい天気はどれですか。",
            "choices": [
              "短時間の強い雨",
              "長時間の弱い雨だけ",
              "必ず快晴",
              "無風"
            ],
            "answer": 0,
            "explanation": "寒気が暖気を急に押し上げ、積乱雲と強い雨が生じやすいです。",
            "keyword": "寒冷前線"
          },
          {
            "id": "AT-A2-05",
            "field": "AT",
            "pack": "A",
            "stage": 2,
            "number": 5,
            "themeNumber": 5,
            "theme": "雲と大気の安定・不安定",
            "question": "温暖前線の通過前に見られやすい雲の変化はどれですか。",
            "choices": [
              "高い雲から次第に低い雲へ",
              "低い雲から急に消える",
              "積乱雲だけ",
              "雲はできない"
            ],
            "answer": 0,
            "explanation": "温暖前線では広い範囲に層状雲が順に現れます。",
            "keyword": "温暖前線"
          },
          {
            "id": "AT-A2-06",
            "field": "AT",
            "pack": "A",
            "stage": 2,
            "number": 6,
            "themeNumber": 6,
            "theme": "温帯低気圧と熱帯低気圧",
            "question": "日本付近の低気圧は一般にどちらへ進みやすいですか。",
            "choices": [
              "西から東",
              "東から西",
              "南から北だけ",
              "動かない"
            ],
            "answer": 0,
            "explanation": "中緯度の偏西風の影響で西から東へ進みやすいです。",
            "keyword": "偏西風"
          },
          {
            "id": "AT-A2-07",
            "field": "AT",
            "pack": "A",
            "stage": 2,
            "number": 7,
            "themeNumber": 7,
            "theme": "日本の天気",
            "question": "海風が吹きやすいのはいつですか。",
            "choices": [
              "昼",
              "夜",
              "真夜中だけ",
              "季節に無関係で常に同じ"
            ],
            "answer": 0,
            "explanation": "昼は陸が海より温まり、海から陸へ海風が吹きます。",
            "keyword": "海風"
          },
          {
            "id": "AT-A2-08",
            "field": "AT",
            "pack": "A",
            "stage": 2,
            "number": 8,
            "themeNumber": 8,
            "theme": "エネルギー循環",
            "question": "陸風が吹きやすいのはいつですか。",
            "choices": [
              "夜",
              "昼",
              "正午だけ",
              "台風時だけ"
            ],
            "answer": 0,
            "explanation": "夜は陸が海より冷え、陸から海へ風が吹きます。",
            "keyword": "陸風"
          },
          {
            "id": "AT-A2-09",
            "field": "AT",
            "pack": "A",
            "stage": 2,
            "number": 9,
            "themeNumber": 9,
            "theme": "大気循環",
            "question": "黒潮の特徴として正しいものはどれですか。",
            "choices": [
              "暖流",
              "寒流",
              "深層流だけ",
              "日本海を北から南へ流れる"
            ],
            "answer": 0,
            "explanation": "黒潮は日本の南岸を流れる暖流です。",
            "keyword": "黒潮"
          },
          {
            "id": "AT-A2-10",
            "field": "AT",
            "pack": "A",
            "stage": 2,
            "number": 10,
            "themeNumber": 10,
            "theme": "海洋循環",
            "question": "親潮の特徴として正しいものはどれですか。",
            "choices": [
              "寒流",
              "暖流",
              "赤道から来る",
              "塩分が必ず0"
            ],
            "answer": 0,
            "explanation": "親潮は北方から流れる寒流です。",
            "keyword": "親潮"
          }
        ]
      },
      {
        "name": "Stage 3 実践",
        "questions": [
          {
            "id": "AT-A3-01",
            "field": "AT",
            "pack": "A",
            "stage": 3,
            "number": 1,
            "themeNumber": 1,
            "theme": "大気圧",
            "question": "等圧線の間隔が狭い地域では、一般に風はどうなりますか。",
            "choices": [
              "強い",
              "弱い",
              "必ず無風",
              "向きがなくなる"
            ],
            "answer": 0,
            "explanation": "気圧傾度が大きいため風が強くなりやすいです。",
            "keyword": "等圧線"
          },
          {
            "id": "AT-A3-02",
            "field": "AT",
            "pack": "A",
            "stage": 3,
            "number": 2,
            "themeNumber": 2,
            "theme": "大気の層",
            "question": "気温20℃の空気を冷やしていき、15℃で水滴が生じ始めた。この15℃を何といいますか。",
            "choices": [
              "露点",
              "沸点",
              "融点",
              "最高気温"
            ],
            "answer": 0,
            "explanation": "凝結が始まる温度を露点といいます。",
            "keyword": "露点"
          },
          {
            "id": "AT-A3-03",
            "field": "AT",
            "pack": "A",
            "stage": 3,
            "number": 3,
            "themeNumber": 3,
            "theme": "オゾン層",
            "question": "山を越えた風が風下側で高温・乾燥する現象を何といいますか。",
            "choices": [
              "フェーン現象",
              "海風",
              "放射冷却",
              "台風"
            ],
            "answer": 0,
            "explanation": "山越えで水分を失い、下降時に昇温する現象がフェーン現象です。",
            "keyword": "フェーン現象"
          },
          {
            "id": "AT-A3-04",
            "field": "AT",
            "pack": "A",
            "stage": 3,
            "number": 4,
            "themeNumber": 4,
            "theme": "飽和水蒸気量・湿度・露点",
            "question": "台風の中心に近づくほど一般に気圧はどうなりますか。",
            "choices": [
              "低くなる",
              "高くなる",
              "変わらない",
              "0になる"
            ],
            "answer": 0,
            "explanation": "台風は発達した熱帯低気圧です。",
            "keyword": "台風"
          },
          {
            "id": "AT-A3-05",
            "field": "AT",
            "pack": "A",
            "stage": 3,
            "number": 5,
            "themeNumber": 5,
            "theme": "雲と大気の安定・不安定",
            "question": "温暖化によって海面が上昇する要因として適切なのはどれですか。",
            "choices": [
              "海水の熱膨張と陸上氷河の融解",
              "海氷だけの融解",
              "海水の蒸発だけ",
              "潮の満ち引き"
            ],
            "answer": 0,
            "explanation": "主因は海水の熱膨張と陸上の氷の融解です。",
            "keyword": "海面上昇"
          },
          {
            "id": "AT-A3-06",
            "field": "AT",
            "pack": "A",
            "stage": 3,
            "number": 6,
            "themeNumber": 6,
            "theme": "温帯低気圧と熱帯低気圧",
            "question": "エルニーニョ現象が起こる海域は主にどこですか。",
            "choices": [
              "赤道太平洋東部",
              "北極海だけ",
              "日本海だけ",
              "大西洋北部だけ"
            ],
            "answer": 0,
            "explanation": "赤道太平洋東部の海面水温が平年より高くなる現象です。",
            "keyword": "エルニーニョ現象"
          },
          {
            "id": "AT-A3-07",
            "field": "AT",
            "pack": "A",
            "stage": 3,
            "number": 7,
            "themeNumber": 7,
            "theme": "日本の天気",
            "question": "上昇気流が強い場所で雲ができやすい理由はどれですか。",
            "choices": [
              "空気が冷えて水蒸気が凝結するため",
              "空気が必ず乾燥するため",
              "酸素が消えるため",
              "気圧が一定だから"
            ],
            "answer": 0,
            "explanation": "上昇した空気は冷却され、飽和すると凝結します。",
            "keyword": "上昇気流"
          },
          {
            "id": "AT-A3-08",
            "field": "AT",
            "pack": "A",
            "stage": 3,
            "number": 8,
            "themeNumber": 8,
            "theme": "エネルギー循環",
            "question": "都市部で夜間も気温が高くなりやすい現象はどれですか。",
            "choices": [
              "ヒートアイランド",
              "フェーン",
              "エルニーニョ",
              "蜃気楼"
            ],
            "answer": 0,
            "explanation": "人工排熱や地表面の性質により都市部が高温になります。",
            "keyword": "ヒートアイランド"
          },
          {
            "id": "AT-A3-09",
            "field": "AT",
            "pack": "A",
            "stage": 3,
            "number": 9,
            "themeNumber": 9,
            "theme": "大気循環",
            "question": "冬、日本海側で雪が多くなる仕組みとして正しいものはどれですか。",
            "choices": [
              "季節風が日本海から水蒸気を得る",
              "太平洋から暖気が直接入る",
              "偏西風が止まる",
              "黒潮が凍る"
            ],
            "answer": 0,
            "explanation": "冷たい季節風が日本海上で水蒸気を得て雪雲をつくります。",
            "keyword": "冬の季節風"
          },
          {
            "id": "AT-A3-10",
            "field": "AT",
            "pack": "A",
            "stage": 3,
            "number": 10,
            "themeNumber": 10,
            "theme": "海洋循環",
            "question": "天気図で低気圧が近づき、気圧が下がり続けている。今後起こりやすい変化はどれですか。",
            "choices": [
              "雲が増え降水の可能性が高まる",
              "必ず快晴になる",
              "風が完全に止む",
              "湿度が0％になる"
            ],
            "answer": 0,
            "explanation": "低気圧接近時は雲や降水が増えやすいです。",
            "keyword": "低気圧"
          }
        ]
      }
    ],
    "code": "AT"
  },
  {
    "id": "astro",
    "icon": "🌌",
    "name": "天文",
    "subtitle": "太陽・月・惑星・宇宙",
    "color": "#7367dc",
    "stages": [
      {
        "name": "Stage 1 基礎",
        "questions": [
          {
            "id": "AS-A1-01",
            "field": "AS",
            "pack": "A",
            "stage": 1,
            "number": 1,
            "themeNumber": 1,
            "theme": "宇宙の歴史",
            "question": "地球が太陽のまわりを回る運動を何といいますか。",
            "choices": [
              "公転",
              "自転",
              "歳差",
              "日周運動"
            ],
            "answer": 0,
            "explanation": "地球が太陽のまわりを回る運動が公転です。",
            "keyword": "公転"
          },
          {
            "id": "AS-A1-02",
            "field": "AS",
            "pack": "A",
            "stage": 1,
            "number": 2,
            "themeNumber": 2,
            "theme": "恒星の一生",
            "question": "地球が地軸のまわりを回る運動を何といいますか。",
            "choices": [
              "自転",
              "公転",
              "年周運動",
              "満ち欠け"
            ],
            "answer": 0,
            "explanation": "地球が自分自身の軸のまわりを回る運動が自転です。",
            "keyword": "自転"
          },
          {
            "id": "AS-A1-03",
            "field": "AS",
            "pack": "A",
            "stage": 1,
            "number": 3,
            "themeNumber": 3,
            "theme": "太陽の様子",
            "question": "月が光って見える理由はどれですか。",
            "choices": [
              "太陽の光を反射している",
              "月が燃えている",
              "地球の光だけを反射する",
              "星の光を集める"
            ],
            "answer": 0,
            "explanation": "月は太陽光を反射して光って見えます。",
            "keyword": "月の反射光"
          },
          {
            "id": "AS-A1-04",
            "field": "AS",
            "pack": "A",
            "stage": 1,
            "number": 4,
            "themeNumber": 4,
            "theme": "太陽系惑星の様子",
            "question": "満月のときの並びとして正しいものはどれですか。",
            "choices": [
              "太陽―地球―月",
              "太陽―月―地球",
              "地球―太陽―月",
              "月―太陽―地球"
            ],
            "answer": 0,
            "explanation": "満月は月が太陽と反対方向にあるときです。",
            "keyword": "満月"
          },
          {
            "id": "AS-A1-05",
            "field": "AS",
            "pack": "A",
            "stage": 1,
            "number": 5,
            "themeNumber": 5,
            "theme": "太陽系の惑星以外の天体の様子",
            "question": "新月のときの並びとして正しいものはどれですか。",
            "choices": [
              "太陽―月―地球",
              "太陽―地球―月",
              "月―地球―太陽",
              "地球―太陽―月"
            ],
            "answer": 0,
            "explanation": "新月は月が太陽とほぼ同じ方向にあるときです。",
            "keyword": "新月"
          },
          {
            "id": "AS-A1-06",
            "field": "AS",
            "pack": "A",
            "stage": 1,
            "number": 6,
            "themeNumber": 6,
            "theme": "天の川銀河の様子",
            "question": "北極星の方向はほぼどの方角ですか。",
            "choices": [
              "北",
              "南",
              "東",
              "西"
            ],
            "answer": 0,
            "explanation": "北極星は北の空に見えます。",
            "keyword": "北極星"
          },
          {
            "id": "AS-A1-07",
            "field": "AS",
            "pack": "A",
            "stage": 1,
            "number": 7,
            "themeNumber": 7,
            "theme": "宇宙での距離の単位",
            "question": "太陽系で最も大きい惑星はどれですか。",
            "choices": [
              "木星",
              "地球",
              "火星",
              "水星"
            ],
            "answer": 0,
            "explanation": "木星は太陽系最大の惑星です。",
            "keyword": "木星"
          },
          {
            "id": "AS-A1-08",
            "field": "AS",
            "pack": "A",
            "stage": 1,
            "number": 8,
            "themeNumber": 8,
            "theme": "恒星の光",
            "question": "地球に最も近い恒星はどれですか。",
            "choices": [
              "太陽",
              "シリウス",
              "北極星",
              "ベガ"
            ],
            "answer": 0,
            "explanation": "太陽は地球に最も近い恒星です。",
            "keyword": "太陽"
          },
          {
            "id": "AS-A1-09",
            "field": "AS",
            "pack": "A",
            "stage": 1,
            "number": 9,
            "themeNumber": 9,
            "theme": "地上で見られる天体現象",
            "question": "星が東から西へ動いて見える主な理由はどれですか。",
            "choices": [
              "地球が西から東へ自転するため",
              "星が毎日地球を回るため",
              "月が動かすため",
              "季節風のため"
            ],
            "answer": 0,
            "explanation": "地球の自転により天体は東から西へ日周運動して見えます。",
            "keyword": "日周運動"
          },
          {
            "id": "AS-A1-10",
            "field": "AS",
            "pack": "A",
            "stage": 1,
            "number": 10,
            "themeNumber": 10,
            "theme": "宇宙が広がっている証拠",
            "question": "光年は何の単位ですか。",
            "choices": [
              "距離",
              "時間",
              "速さ",
              "質量"
            ],
            "answer": 0,
            "explanation": "光年は光が1年間に進む距離です。",
            "keyword": "光年"
          }
        ]
      },
      {
        "name": "Stage 2 標準",
        "questions": [
          {
            "id": "AS-A2-01",
            "field": "AS",
            "pack": "A",
            "stage": 2,
            "number": 1,
            "themeNumber": 1,
            "theme": "宇宙の歴史",
            "question": "季節によって見える星座が変わる主な理由はどれですか。",
            "choices": [
              "地球が公転するため",
              "星座が消えるため",
              "地球の自転速度が変わるため",
              "月が星を隠すため"
            ],
            "answer": 0,
            "explanation": "地球の公転により夜側が向く宇宙の方向が変わります。",
            "keyword": "地球の公転"
          },
          {
            "id": "AS-A2-02",
            "field": "AS",
            "pack": "A",
            "stage": 2,
            "number": 2,
            "themeNumber": 2,
            "theme": "恒星の一生",
            "question": "北半球で北極星の高度は何とほぼ等しいですか。",
            "choices": [
              "その場所の緯度",
              "経度",
              "標高",
              "気温"
            ],
            "answer": 0,
            "explanation": "北極星高度は観測地点の北緯とほぼ等しいです。",
            "keyword": "北極星高度"
          },
          {
            "id": "AS-A2-03",
            "field": "AS",
            "pack": "A",
            "stage": 2,
            "number": 3,
            "themeNumber": 3,
            "theme": "太陽の様子",
            "question": "月が約1か月で満ち欠けを繰り返す主な理由はどれですか。",
            "choices": [
              "月が地球のまわりを公転するため",
              "月の明るさが変わるため",
              "地球の影が毎日月にかかるため",
              "太陽が月を回るため"
            ],
            "answer": 0,
            "explanation": "月の公転に伴い、照らされた面の見え方が変わります。",
            "keyword": "月の満ち欠け"
          },
          {
            "id": "AS-A2-04",
            "field": "AS",
            "pack": "A",
            "stage": 2,
            "number": 4,
            "themeNumber": 4,
            "theme": "太陽系惑星の様子",
            "question": "日食が起こるときの並びはどれですか。",
            "choices": [
              "太陽―月―地球",
              "太陽―地球―月",
              "月―地球―太陽",
              "地球―太陽―月"
            ],
            "answer": 0,
            "explanation": "月が太陽を隠すため、太陽・月・地球の順です。",
            "keyword": "日食"
          },
          {
            "id": "AS-A2-05",
            "field": "AS",
            "pack": "A",
            "stage": 2,
            "number": 5,
            "themeNumber": 5,
            "theme": "太陽系の惑星以外の天体の様子",
            "question": "月食が起こるときの並びはどれですか。",
            "choices": [
              "太陽―地球―月",
              "太陽―月―地球",
              "地球―月―太陽",
              "月―太陽―地球"
            ],
            "answer": 0,
            "explanation": "地球の影に月が入るため、太陽・地球・月の順です。",
            "keyword": "月食"
          },
          {
            "id": "AS-A2-06",
            "field": "AS",
            "pack": "A",
            "stage": 2,
            "number": 6,
            "themeNumber": 6,
            "theme": "天の川銀河の様子",
            "question": "金星が満ち欠けして見える理由はどれですか。",
            "choices": [
              "太陽・金星・地球の位置関係が変わるため",
              "地球の影が常に金星に映るため",
              "金星が自ら光るため",
              "金星の大気が消えるため"
            ],
            "answer": 0,
            "explanation": "金星は太陽光を反射し、位置関係によって見える面が変わります。",
            "keyword": "金星の満ち欠け"
          },
          {
            "id": "AS-A2-07",
            "field": "AS",
            "pack": "A",
            "stage": 2,
            "number": 7,
            "themeNumber": 7,
            "theme": "宇宙での距離の単位",
            "question": "恒星の明るさの等級について正しいものはどれですか。",
            "choices": [
              "数字が小さいほど明るい",
              "数字が大きいほど明るい",
              "0等級より明るい星はない",
              "温度だけで決まる"
            ],
            "answer": 0,
            "explanation": "等級は数値が小さいほど明るいです。",
            "keyword": "等級"
          },
          {
            "id": "AS-A2-08",
            "field": "AS",
            "pack": "A",
            "stage": 2,
            "number": 8,
            "themeNumber": 8,
            "theme": "恒星の光",
            "question": "太陽の表面で周囲より暗く見える部分はどれですか。",
            "choices": [
              "黒点",
              "コロナ",
              "プロミネンス",
              "光球全体"
            ],
            "answer": 0,
            "explanation": "黒点は周囲より温度が低いため暗く見えます。",
            "keyword": "黒点"
          },
          {
            "id": "AS-A2-09",
            "field": "AS",
            "pack": "A",
            "stage": 2,
            "number": 9,
            "themeNumber": 9,
            "theme": "地上で見られる天体現象",
            "question": "皆既日食で白く広がって見える太陽大気はどれですか。",
            "choices": [
              "コロナ",
              "黒点",
              "地殻",
              "対流圏"
            ],
            "answer": 0,
            "explanation": "コロナは太陽大気の最外層です。",
            "keyword": "日食"
          },
          {
            "id": "AS-A2-10",
            "field": "AS",
            "pack": "A",
            "stage": 2,
            "number": 10,
            "themeNumber": 10,
            "theme": "宇宙が広がっている証拠",
            "question": "天の川銀河の中で太陽系がある場所はどれですか。",
            "choices": [
              "円盤部",
              "銀河中心そのもの",
              "銀河の外",
              "ブラックホール内部"
            ],
            "answer": 0,
            "explanation": "太陽系は天の川銀河の円盤部にあります。",
            "keyword": "天の川銀河"
          }
        ]
      },
      {
        "name": "Stage 3 実践",
        "questions": [
          {
            "id": "AS-A3-01",
            "field": "AS",
            "pack": "A",
            "stage": 3,
            "number": 1,
            "themeNumber": 1,
            "theme": "宇宙の歴史",
            "question": "北緯35°の地点で北極星の高度はおよそ何度ですか。",
            "choices": [
              "35°",
              "55°",
              "90°",
              "0°"
            ],
            "answer": 0,
            "explanation": "北極星高度はその地点の北緯とほぼ等しいです。",
            "keyword": "北極星高度"
          },
          {
            "id": "AS-A3-02",
            "field": "AS",
            "pack": "A",
            "stage": 3,
            "number": 2,
            "themeNumber": 2,
            "theme": "恒星の一生",
            "question": "満月が南中する時刻として最も近いものはどれですか。",
            "choices": [
              "午前0時ごろ",
              "正午ごろ",
              "午前6時ごろ",
              "午後3時ごろ"
            ],
            "answer": 0,
            "explanation": "満月は真夜中ごろ南中します。",
            "keyword": "満月の南中"
          },
          {
            "id": "AS-A3-03",
            "field": "AS",
            "pack": "A",
            "stage": 3,
            "number": 3,
            "themeNumber": 3,
            "theme": "太陽の様子",
            "question": "上弦の月が南中する時刻として最も近いものはどれですか。",
            "choices": [
              "午後6時ごろ",
              "午前0時ごろ",
              "午前6時ごろ",
              "正午より前"
            ],
            "answer": 0,
            "explanation": "上弦の月は夕方ごろ南中します。",
            "keyword": "上弦の月"
          },
          {
            "id": "AS-A3-04",
            "field": "AS",
            "pack": "A",
            "stage": 3,
            "number": 4,
            "themeNumber": 4,
            "theme": "太陽系惑星の様子",
            "question": "夏至の日、北半球の昼の長さはどうなりますか。",
            "choices": [
              "1年で最も長い",
              "1年で最も短い",
              "必ず12時間",
              "場所によらず同じ"
            ],
            "answer": 0,
            "explanation": "北半球では夏至の日に昼が最も長くなります。",
            "keyword": "夏至"
          },
          {
            "id": "AS-A3-05",
            "field": "AS",
            "pack": "A",
            "stage": 3,
            "number": 5,
            "themeNumber": 5,
            "theme": "太陽系の惑星以外の天体の様子",
            "question": "冬至の日、太陽の南中高度はどうなりますか。",
            "choices": [
              "1年で最も低い",
              "1年で最も高い",
              "春分と同じ",
              "必ず90°"
            ],
            "answer": 0,
            "explanation": "北半球では冬至に太陽の南中高度が最も低くなります。",
            "keyword": "冬至"
          },
          {
            "id": "AS-A3-06",
            "field": "AS",
            "pack": "A",
            "stage": 3,
            "number": 6,
            "themeNumber": 6,
            "theme": "天の川銀河の様子",
            "question": "金星が地球に近く、細い形に見えやすいのはどの位置に近いときですか。",
            "choices": [
              "内合",
              "外合",
              "最大離角だけ",
              "満月"
            ],
            "answer": 0,
            "explanation": "内合付近では大きく細く見えます。",
            "keyword": "内合"
          },
          {
            "id": "AS-A3-07",
            "field": "AS",
            "pack": "A",
            "stage": 3,
            "number": 7,
            "themeNumber": 7,
            "theme": "宇宙での距離の単位",
            "question": "ある星が毎日ほぼ同じ時刻に前日より少し西に見える主な理由はどれですか。",
            "choices": [
              "地球の公転",
              "月の満ち欠け",
              "風",
              "地軸が消えるため"
            ],
            "answer": 0,
            "explanation": "公転により星の南中時刻は毎日約4分ずつ早まります。",
            "keyword": "恒星の年周運動"
          },
          {
            "id": "AS-A3-08",
            "field": "AS",
            "pack": "A",
            "stage": 3,
            "number": 8,
            "themeNumber": 8,
            "theme": "恒星の光",
            "question": "赤い恒星と青白い恒星を比べたとき、一般に表面温度が高いのはどちらですか。",
            "choices": [
              "青白い恒星",
              "赤い恒星",
              "同じ",
              "色と温度は無関係"
            ],
            "answer": 0,
            "explanation": "青白い恒星の方が一般に高温です。",
            "keyword": "恒星の表面温度"
          },
          {
            "id": "AS-A3-09",
            "field": "AS",
            "pack": "A",
            "stage": 3,
            "number": 9,
            "themeNumber": 9,
            "theme": "地上で見られる天体現象",
            "question": "太陽系の惑星がほぼ同じ平面上を公転することから考えられる形成過程はどれですか。",
            "choices": [
              "回転する円盤状の物質から形成された",
              "各惑星が別々の銀河でできた",
              "太陽が後から現れた",
              "惑星は恒星の破片だけでできた"
            ],
            "answer": 0,
            "explanation": "太陽系は回転する原始太陽系円盤から形成されたと考えられます。",
            "keyword": "原始太陽系円盤"
          },
          {
            "id": "AS-A3-10",
            "field": "AS",
            "pack": "A",
            "stage": 3,
            "number": 10,
            "themeNumber": 10,
            "theme": "宇宙が広がっている証拠",
            "question": "宇宙が膨張している証拠として用いられる観測はどれですか。",
            "choices": [
              "遠方銀河の赤方偏移",
              "月の満ち欠け",
              "黒点の数",
              "日食の周期"
            ],
            "answer": 0,
            "explanation": "遠方銀河ほど赤方偏移が大きいことは宇宙膨張を示します。",
            "keyword": "赤方偏移"
          }
        ]
      }
    ],
    "code": "AS"
  },
  {
    "id": "fossil",
    "icon": "🦕",
    "name": "化石",
    "subtitle": "地層・地球の歴史",
    "color": "#b7834f",
    "stages": [
      {
        "name": "Stage 1 基礎",
        "questions": [
          {
            "id": "HS-A1-01",
            "field": "HS",
            "pack": "A",
            "stage": 1,
            "number": 1,
            "themeNumber": 1,
            "theme": "冥王代",
            "question": "地層をつくる主な岩石を何といいますか。",
            "choices": [
              "堆積岩",
              "火成岩",
              "変成岩",
              "深成岩だけ"
            ],
            "answer": 0,
            "explanation": "堆積物が固まってできた岩石が堆積岩です。",
            "keyword": "堆積岩"
          },
          {
            "id": "HS-A1-02",
            "field": "HS",
            "pack": "A",
            "stage": 1,
            "number": 2,
            "themeNumber": 2,
            "theme": "始生代",
            "question": "れきが固まってできた岩石はどれですか。",
            "choices": [
              "れき岩",
              "砂岩",
              "泥岩",
              "石灰岩"
            ],
            "answer": 0,
            "explanation": "粒の大きなれきが固まった岩石がれき岩です。",
            "keyword": "れき岩"
          },
          {
            "id": "HS-A1-03",
            "field": "HS",
            "pack": "A",
            "stage": 1,
            "number": 3,
            "themeNumber": 3,
            "theme": "原生代",
            "question": "砂が固まってできた岩石はどれですか。",
            "choices": [
              "砂岩",
              "れき岩",
              "泥岩",
              "チャート"
            ],
            "answer": 0,
            "explanation": "砂粒が固まった岩石が砂岩です。",
            "keyword": "砂岩"
          },
          {
            "id": "HS-A1-04",
            "field": "HS",
            "pack": "A",
            "stage": 1,
            "number": 4,
            "themeNumber": 4,
            "theme": "古生代",
            "question": "泥が固まってできた岩石はどれですか。",
            "choices": [
              "泥岩",
              "砂岩",
              "れき岩",
              "玄武岩"
            ],
            "answer": 0,
            "explanation": "細かな泥が固まった岩石が泥岩です。",
            "keyword": "泥岩"
          },
          {
            "id": "HS-A1-05",
            "field": "HS",
            "pack": "A",
            "stage": 1,
            "number": 5,
            "themeNumber": 5,
            "theme": "中生代",
            "question": "生物のからだや生活の跡が地層中に残ったものを何といいますか。",
            "choices": [
              "化石",
              "鉱物",
              "マグマ",
              "断層"
            ],
            "answer": 0,
            "explanation": "生物の遺骸や生活痕が残ったものが化石です。",
            "keyword": "化石"
          },
          {
            "id": "HS-A1-06",
            "field": "HS",
            "pack": "A",
            "stage": 1,
            "number": 6,
            "themeNumber": 6,
            "theme": "新生代",
            "question": "地層が下から上へ積み重なるとき、普通はどちらが古いですか。",
            "choices": [
              "下の地層",
              "上の地層",
              "同じ",
              "場所によって必ず逆"
            ],
            "answer": 0,
            "explanation": "地層累重の法則では、下ほど古いのが基本です。",
            "keyword": "地層累重の法則"
          },
          {
            "id": "HS-A1-07",
            "field": "HS",
            "pack": "A",
            "stage": 1,
            "number": 7,
            "themeNumber": 7,
            "theme": "地層",
            "question": "地層が切れてずれている構造を何といいますか。",
            "choices": [
              "断層",
              "しゅう曲",
              "不整合",
              "整合"
            ],
            "answer": 0,
            "explanation": "岩盤が割れ、ずれた構造が断層です。",
            "keyword": "断層"
          },
          {
            "id": "HS-A1-08",
            "field": "HS",
            "pack": "A",
            "stage": 1,
            "number": 8,
            "themeNumber": 8,
            "theme": "化石",
            "question": "地層が波のように曲がった構造を何といいますか。",
            "choices": [
              "しゅう曲",
              "断層",
              "柱状節理",
              "火口"
            ],
            "answer": 0,
            "explanation": "圧力で地層が曲がった構造がしゅう曲です。",
            "keyword": "しゅう曲"
          },
          {
            "id": "HS-A1-09",
            "field": "HS",
            "pack": "A",
            "stage": 1,
            "number": 9,
            "themeNumber": 9,
            "theme": "層序",
            "question": "石灰岩をつくる材料になりやすいものはどれですか。",
            "choices": [
              "生物の殻や骨格",
              "火山灰だけ",
              "大きなれきだけ",
              "金属"
            ],
            "answer": 0,
            "explanation": "石灰質の殻や骨格が堆積して石灰岩になることがあります。",
            "keyword": "石灰岩"
          },
          {
            "id": "HS-A1-10",
            "field": "HS",
            "pack": "A",
            "stage": 1,
            "number": 10,
            "themeNumber": 10,
            "theme": "堆積",
            "question": "地層の年代を比べる手がかりとなる化石を何といいますか。",
            "choices": [
              "示準化石",
              "示相化石",
              "生痕化石",
              "現生化石"
            ],
            "answer": 0,
            "explanation": "示準化石は地層の年代を知る手がかりです。",
            "keyword": "示準化石"
          }
        ]
      },
      {
        "name": "Stage 2 標準",
        "questions": [
          {
            "id": "HS-A2-01",
            "field": "HS",
            "pack": "A",
            "stage": 2,
            "number": 1,
            "themeNumber": 1,
            "theme": "冥王代",
            "question": "地層ができた当時の環境を知る手がかりとなる化石を何といいますか。",
            "choices": [
              "示相化石",
              "示準化石",
              "標本化石",
              "鉱物化石"
            ],
            "answer": 0,
            "explanation": "示相化石は当時の環境を示します。",
            "keyword": "示相化石"
          },
          {
            "id": "HS-A2-02",
            "field": "HS",
            "pack": "A",
            "stage": 2,
            "number": 2,
            "themeNumber": 2,
            "theme": "始生代",
            "question": "示準化石に適した生物の特徴はどれですか。",
            "choices": [
              "生存期間が短く広く分布した",
              "生存期間が長く狭い場所だけにいた",
              "大型であるだけ",
              "陸上にしかいない"
            ],
            "answer": 0,
            "explanation": "短期間に広く分布した生物が示準化石に向きます。",
            "keyword": "示準化石"
          },
          {
            "id": "HS-A2-03",
            "field": "HS",
            "pack": "A",
            "stage": 2,
            "number": 3,
            "themeNumber": 3,
            "theme": "原生代",
            "question": "サンゴの化石から推定しやすい環境はどれですか。",
            "choices": [
              "暖かく浅い海",
              "寒い深海だけ",
              "乾燥した砂漠",
              "高山"
            ],
            "answer": 0,
            "explanation": "サンゴは暖かく浅い海の指標になります。",
            "keyword": "サンゴ"
          },
          {
            "id": "HS-A2-04",
            "field": "HS",
            "pack": "A",
            "stage": 2,
            "number": 4,
            "themeNumber": 4,
            "theme": "古生代",
            "question": "石炭のもとになったものは主に何ですか。",
            "choices": [
              "植物",
              "魚",
              "火山灰",
              "海水"
            ],
            "answer": 0,
            "explanation": "古い植物が堆積・変化して石炭になります。",
            "keyword": "石炭"
          },
          {
            "id": "HS-A2-05",
            "field": "HS",
            "pack": "A",
            "stage": 2,
            "number": 5,
            "themeNumber": 5,
            "theme": "中生代",
            "question": "地層の間に大きな時間の空白がある境界を何といいますか。",
            "choices": [
              "不整合",
              "整合",
              "断層だけ",
              "海溝"
            ],
            "answer": 0,
            "explanation": "侵食や堆積の中断をはさんだ境界が不整合です。",
            "keyword": "不整合"
          },
          {
            "id": "HS-A2-06",
            "field": "HS",
            "pack": "A",
            "stage": 2,
            "number": 6,
            "themeNumber": 6,
            "theme": "新生代",
            "question": "火山灰層が地層対比に役立つ理由はどれですか。",
            "choices": [
              "短時間に広い範囲へ積もるため",
              "必ず恐竜化石を含むため",
              "色が変わらないため",
              "海底にしかないため"
            ],
            "answer": 0,
            "explanation": "同じ噴火による火山灰層は鍵層になります。",
            "keyword": "鍵層"
          },
          {
            "id": "HS-A2-07",
            "field": "HS",
            "pack": "A",
            "stage": 2,
            "number": 7,
            "themeNumber": 7,
            "theme": "地層",
            "question": "アンモナイトが示準化石として用いられる主な時代はどれですか。",
            "choices": [
              "中生代",
              "古生代初期だけ",
              "新生代第四紀",
              "先カンブリア時代"
            ],
            "answer": 0,
            "explanation": "アンモナイトは中生代の代表的な示準化石です。",
            "keyword": "アンモナイト"
          },
          {
            "id": "HS-A2-08",
            "field": "HS",
            "pack": "A",
            "stage": 2,
            "number": 8,
            "themeNumber": 8,
            "theme": "化石",
            "question": "三葉虫が代表的な化石として知られる時代はどれですか。",
            "choices": [
              "古生代",
              "中生代",
              "新生代",
              "現代"
            ],
            "answer": 0,
            "explanation": "三葉虫は古生代の代表的な生物です。",
            "keyword": "三葉虫"
          },
          {
            "id": "HS-A2-09",
            "field": "HS",
            "pack": "A",
            "stage": 2,
            "number": 9,
            "themeNumber": 9,
            "theme": "層序",
            "question": "大型恐竜が栄えた時代はどれですか。",
            "choices": [
              "中生代",
              "古生代",
              "新生代",
              "先カンブリア時代"
            ],
            "answer": 0,
            "explanation": "恐竜は中生代に繁栄しました。",
            "keyword": "中生代"
          },
          {
            "id": "HS-A2-10",
            "field": "HS",
            "pack": "A",
            "stage": 2,
            "number": 10,
            "themeNumber": 10,
            "theme": "堆積",
            "question": "人類が現れたのはどの時代ですか。",
            "choices": [
              "新生代",
              "古生代",
              "中生代初期",
              "先カンブリア時代"
            ],
            "answer": 0,
            "explanation": "人類の出現は新生代です。",
            "keyword": "新生代"
          }
        ]
      },
      {
        "name": "Stage 3 実践",
        "questions": [
          {
            "id": "HS-A3-01",
            "field": "HS",
            "pack": "A",
            "stage": 3,
            "number": 1,
            "themeNumber": 1,
            "theme": "冥王代",
            "question": "下から砂岩、火山灰層、泥岩の順に重なる地層がある。最も古いのはどれですか。",
            "choices": [
              "砂岩",
              "火山灰層",
              "泥岩",
              "すべて同じ"
            ],
            "answer": 0,
            "explanation": "地層が逆転していなければ下の砂岩が最も古いです。",
            "keyword": "地層累重の法則"
          },
          {
            "id": "HS-A3-02",
            "field": "HS",
            "pack": "A",
            "stage": 3,
            "number": 2,
            "themeNumber": 2,
            "theme": "始生代",
            "question": "離れた2地点で同じ特徴の火山灰層が見つかった。何が推定できますか。",
            "choices": [
              "その層はほぼ同じ時期に堆積した",
              "岩石の種類がすべて同じ",
              "同じ川でできた",
              "同じ化石だけを含む"
            ],
            "answer": 0,
            "explanation": "同じ噴火による火山灰層なら同時期の鍵層になります。",
            "keyword": "鍵層"
          },
          {
            "id": "HS-A3-03",
            "field": "HS",
            "pack": "A",
            "stage": 3,
            "number": 3,
            "themeNumber": 3,
            "theme": "原生代",
            "question": "地層中に浅い海にすむ生物の化石が多い。堆積環境として最も適切なのはどれですか。",
            "choices": [
              "浅い海",
              "高山",
              "砂漠",
              "氷河"
            ],
            "answer": 0,
            "explanation": "化石の生息環境から堆積環境を推定できます。",
            "keyword": "堆積環境"
          },
          {
            "id": "HS-A3-04",
            "field": "HS",
            "pack": "A",
            "stage": 3,
            "number": 4,
            "themeNumber": 4,
            "theme": "古生代",
            "question": "地層が傾いた後、その上に水平な地層が重なっている。この境界は何を示しますか。",
            "choices": [
              "不整合",
              "整合",
              "海嶺",
              "震源"
            ],
            "answer": 0,
            "explanation": "変形・侵食後に新しい地層が堆積した不整合です。",
            "keyword": "不整合"
          },
          {
            "id": "HS-A3-05",
            "field": "HS",
            "pack": "A",
            "stage": 3,
            "number": 5,
            "themeNumber": 5,
            "theme": "中生代",
            "question": "ある化石が非常に短い期間だけ生存し、世界各地で見つかる。この化石の用途として最も適切なのはどれですか。",
            "choices": [
              "地層の年代対比",
              "気温の直接測定",
              "火山の粘り気測定",
              "地震規模測定"
            ],
            "answer": 0,
            "explanation": "示準化石として年代対比に適します。",
            "keyword": "示準化石"
          },
          {
            "id": "HS-A3-06",
            "field": "HS",
            "pack": "A",
            "stage": 3,
            "number": 6,
            "themeNumber": 6,
            "theme": "新生代",
            "question": "サンゴ化石を含む石灰岩が山地で見つかった。最も合理的な解釈はどれですか。",
            "choices": [
              "かつて海底だった地域が隆起した",
              "サンゴが山にすんでいた",
              "石灰岩は必ず火山でできる",
              "化石は後から人工的に入った"
            ],
            "answer": 0,
            "explanation": "地殻変動によって海底の地層が隆起したと考えられます。",
            "keyword": "隆起"
          },
          {
            "id": "HS-A3-07",
            "field": "HS",
            "pack": "A",
            "stage": 3,
            "number": 7,
            "themeNumber": 7,
            "theme": "地層",
            "question": "れき岩・砂岩・泥岩の順に粒が細かくなる。一般により沖合で堆積しやすいのはどれですか。",
            "choices": [
              "泥岩",
              "れき岩",
              "すべて同じ",
              "火山岩"
            ],
            "answer": 0,
            "explanation": "流れの弱い沖合では細かな泥が堆積しやすいです。",
            "keyword": "堆積環境"
          },
          {
            "id": "HS-A3-08",
            "field": "HS",
            "pack": "A",
            "stage": 3,
            "number": 8,
            "themeNumber": 8,
            "theme": "化石",
            "question": "生物の足あとが地層に残った化石は何に分類されますか。",
            "choices": [
              "生痕化石",
              "示準化石だけ",
              "鉱物",
              "火成岩"
            ],
            "answer": 0,
            "explanation": "足あとや巣穴など生活の跡は生痕化石です。",
            "keyword": "生痕化石"
          },
          {
            "id": "HS-A3-09",
            "field": "HS",
            "pack": "A",
            "stage": 3,
            "number": 9,
            "themeNumber": 9,
            "theme": "層序",
            "question": "大量絶滅の前後で化石の種類が大きく変化することから何がわかりますか。",
            "choices": [
              "生物相が時代とともに変化した",
              "岩石がすべて同じ",
              "地球の自転が止まった",
              "化石は年代と無関係"
            ],
            "answer": 0,
            "explanation": "化石記録は生物の変遷を示します。",
            "keyword": "生物相の変遷"
          },
          {
            "id": "HS-A3-10",
            "field": "HS",
            "pack": "A",
            "stage": 3,
            "number": 10,
            "themeNumber": 10,
            "theme": "堆積",
            "question": "同じ地層から恐竜化石とアンモナイト化石が見つかった。年代として考えやすいのはどれですか。",
            "choices": [
              "中生代",
              "古生代",
              "新生代",
              "現代"
            ],
            "answer": 0,
            "explanation": "恐竜とアンモナイトはいずれも中生代を代表します。",
            "keyword": "アンモナイト"
          }
        ]
      }
    ],
    "code": "HS"
  },
  {
    "id": "env",
    "icon": "🌿",
    "name": "環境",
    "subtitle": "自然災害・資源・地球環境",
    "color": "#50a76b",
    "stages": [
      {
        "name": "Stage 1 基礎",
        "questions": [
          {
            "id": "EN-A1-01",
            "field": "EN",
            "pack": "A",
            "stage": 1,
            "number": 1,
            "themeNumber": 1,
            "theme": "地震災害",
            "question": "地球温暖化の原因として増加が問題となる気体はどれですか。",
            "choices": [
              "二酸化炭素",
              "窒素",
              "酸素",
              "アルゴン"
            ],
            "answer": 0,
            "explanation": "二酸化炭素は主要な温室効果ガスの一つです。",
            "keyword": "二酸化炭素"
          },
          {
            "id": "EN-A1-02",
            "field": "EN",
            "pack": "A",
            "stage": 1,
            "number": 2,
            "themeNumber": 2,
            "theme": "気象災害",
            "question": "温室効果ガスが地表付近を暖める仕組みとして正しいものはどれですか。",
            "choices": [
              "地表からの赤外線を吸収する",
              "太陽光をすべて反射する",
              "酸素をなくす",
              "雲を完全に消す"
            ],
            "answer": 0,
            "explanation": "温室効果ガスは地表から放出される赤外線を吸収します。",
            "keyword": "温室効果"
          },
          {
            "id": "EN-A1-03",
            "field": "EN",
            "pack": "A",
            "stage": 1,
            "number": 3,
            "themeNumber": 3,
            "theme": "火山災害",
            "question": "再生可能エネルギーはどれですか。",
            "choices": [
              "太陽光",
              "石炭",
              "石油",
              "天然ガス"
            ],
            "answer": 0,
            "explanation": "太陽光は繰り返し利用できる再生可能エネルギーです。",
            "keyword": "再生可能エネルギー"
          },
          {
            "id": "EN-A1-04",
            "field": "EN",
            "pack": "A",
            "stage": 1,
            "number": 4,
            "themeNumber": 4,
            "theme": "天然資源",
            "question": "化石燃料に含まれるものはどれですか。",
            "choices": [
              "石炭・石油・天然ガス",
              "太陽光・風力・水力",
              "地熱・潮力だけ",
              "原子力だけ"
            ],
            "answer": 0,
            "explanation": "石炭、石油、天然ガスは化石燃料です。",
            "keyword": "化石燃料"
          },
          {
            "id": "EN-A1-05",
            "field": "EN",
            "pack": "A",
            "stage": 1,
            "number": 5,
            "themeNumber": 5,
            "theme": "防災と減災",
            "question": "生物の種類の豊かさを表す言葉はどれですか。",
            "choices": [
              "生物多様性",
              "風化",
              "侵食",
              "地層累重"
            ],
            "answer": 0,
            "explanation": "生物多様性は遺伝子・種・生態系の多様さを含みます。",
            "keyword": "生物多様性"
          },
          {
            "id": "EN-A1-06",
            "field": "EN",
            "pack": "A",
            "stage": 1,
            "number": 6,
            "themeNumber": 6,
            "theme": "気候変動",
            "question": "ごみを減らす3Rに含まれないものはどれですか。",
            "choices": [
              "Increase",
              "Reduce",
              "Reuse",
              "Recycle"
            ],
            "answer": 0,
            "explanation": "3RはReduce、Reuse、Recycleです。",
            "keyword": "3R"
          },
          {
            "id": "EN-A1-07",
            "field": "EN",
            "pack": "A",
            "stage": 1,
            "number": 7,
            "themeNumber": 7,
            "theme": "地球温暖化",
            "question": "森林が減少すると起こりやすい問題はどれですか。",
            "choices": [
              "土壌流出",
              "地震停止",
              "潮汐消失",
              "昼夜逆転"
            ],
            "answer": 0,
            "explanation": "森林減少は土壌流出や生物多様性低下につながります。",
            "keyword": "森林減少"
          },
          {
            "id": "EN-A1-08",
            "field": "EN",
            "pack": "A",
            "stage": 1,
            "number": 8,
            "themeNumber": 8,
            "theme": "エルニーニョ",
            "question": "オゾン層が多く存在する大気の層はどれですか。",
            "choices": [
              "成層圏",
              "対流圏だけ",
              "中間圏だけ",
              "熱圏だけ"
            ],
            "answer": 0,
            "explanation": "オゾン層は主に成層圏にあります。",
            "keyword": "オゾン層"
          },
          {
            "id": "EN-A1-09",
            "field": "EN",
            "pack": "A",
            "stage": 1,
            "number": 9,
            "themeNumber": 9,
            "theme": "酸性雨",
            "question": "酸性雨の原因となる物質に関係するものはどれですか。",
            "choices": [
              "硫黄酸化物や窒素酸化物",
              "酸素だけ",
              "水蒸気だけ",
              "ヘリウム"
            ],
            "answer": 0,
            "explanation": "硫黄酸化物・窒素酸化物が酸性物質になります。",
            "keyword": "酸性雨"
          },
          {
            "id": "EN-A1-10",
            "field": "EN",
            "pack": "A",
            "stage": 1,
            "number": 10,
            "themeNumber": 10,
            "theme": "オゾン層破壊",
            "question": "自然災害への備えを何といいますか。",
            "choices": [
              "防災",
              "風化",
              "凝結",
              "公転"
            ],
            "answer": 0,
            "explanation": "災害被害を減らす備えが防災です。",
            "keyword": "防災"
          }
        ]
      },
      {
        "name": "Stage 2 標準",
        "questions": [
          {
            "id": "EN-A2-01",
            "field": "EN",
            "pack": "A",
            "stage": 2,
            "number": 1,
            "themeNumber": 1,
            "theme": "地震災害",
            "question": "気候変動の緩和策にあたるものはどれですか。",
            "choices": [
              "温室効果ガス排出を減らす",
              "堤防を高くするだけ",
              "避難経路を確認するだけ",
              "暑さに慣れる"
            ],
            "answer": 0,
            "explanation": "排出削減は気候変動を小さくする緩和策です。",
            "keyword": "気候変動の緩和"
          },
          {
            "id": "EN-A2-02",
            "field": "EN",
            "pack": "A",
            "stage": 2,
            "number": 2,
            "themeNumber": 2,
            "theme": "気象災害",
            "question": "気候変動の適応策にあたるものはどれですか。",
            "choices": [
              "洪水対策や暑熱対策を進める",
              "化石燃料消費を増やす",
              "森林を伐採する",
              "排出量を記録しない"
            ],
            "answer": 0,
            "explanation": "すでに起こる影響に備えるのが適応策です。",
            "keyword": "気候変動への適応"
          },
          {
            "id": "EN-A2-03",
            "field": "EN",
            "pack": "A",
            "stage": 2,
            "number": 3,
            "themeNumber": 3,
            "theme": "火山災害",
            "question": "富栄養化した湖で起こりやすい現象はどれですか。",
            "choices": [
              "藻類の異常増殖",
              "水が完全に透明になる",
              "酸素が必ず増える",
              "魚が必ず増える"
            ],
            "answer": 0,
            "explanation": "栄養塩が増えると藻類が大量発生し、水質悪化につながります。",
            "keyword": "富栄養化"
          },
          {
            "id": "EN-A2-04",
            "field": "EN",
            "pack": "A",
            "stage": 2,
            "number": 4,
            "themeNumber": 4,
            "theme": "天然資源",
            "question": "マイクロプラスチック問題と最も関係が深いものはどれですか。",
            "choices": [
              "海洋汚染",
              "地震波",
              "黒点",
              "プレート運動"
            ],
            "answer": 0,
            "explanation": "細かなプラスチックが海洋生態系へ影響します。",
            "keyword": "マイクロプラスチック"
          },
          {
            "id": "EN-A2-05",
            "field": "EN",
            "pack": "A",
            "stage": 2,
            "number": 5,
            "themeNumber": 5,
            "theme": "防災と減災",
            "question": "外来生物が問題になる理由として適切なのはどれですか。",
            "choices": [
              "在来生物や生態系に影響することがある",
              "必ず人に役立つ",
              "地震を起こす",
              "気圧を下げる"
            ],
            "answer": 0,
            "explanation": "競争や捕食などで在来生態系に影響する場合があります。",
            "keyword": "外来生物"
          },
          {
            "id": "EN-A2-06",
            "field": "EN",
            "pack": "A",
            "stage": 2,
            "number": 6,
            "themeNumber": 6,
            "theme": "気候変動",
            "question": "持続可能な利用とはどのような利用ですか。",
            "choices": [
              "将来世代の利用可能性も損なわない",
              "今だけ最大限使う",
              "資源をすべて使い切る",
              "自然を一切利用しない"
            ],
            "answer": 0,
            "explanation": "将来世代も利用できる範囲で資源を使う考えです。",
            "keyword": "持続可能性"
          },
          {
            "id": "EN-A2-07",
            "field": "EN",
            "pack": "A",
            "stage": 2,
            "number": 7,
            "themeNumber": 7,
            "theme": "地球温暖化",
            "question": "ハザードマップが示すものはどれですか。",
            "choices": [
              "災害リスクが想定される場所",
              "観光地だけ",
              "気温だけ",
              "地球の公転軌道"
            ],
            "answer": 0,
            "explanation": "洪水、土砂災害、津波などの危険区域を示します。",
            "keyword": "ハザードマップ"
          },
          {
            "id": "EN-A2-08",
            "field": "EN",
            "pack": "A",
            "stage": 2,
            "number": 8,
            "themeNumber": 8,
            "theme": "エルニーニョ",
            "question": "都市で豪雨時に浸水しやすくなる要因はどれですか。",
            "choices": [
              "地面が舗装され水がしみ込みにくい",
              "森林が多い",
              "川がない",
              "雨が蒸発する"
            ],
            "answer": 0,
            "explanation": "舗装面の増加で雨水が短時間に流出します。",
            "keyword": "都市型洪水"
          },
          {
            "id": "EN-A2-09",
            "field": "EN",
            "pack": "A",
            "stage": 2,
            "number": 9,
            "themeNumber": 9,
            "theme": "酸性雨",
            "question": "省エネルギーの例として適切なものはどれですか。",
            "choices": [
              "不要な照明を消す",
              "冷暖房をつけたまま窓を開ける",
              "移動をすべて自家用車にする",
              "使い捨てを増やす"
            ],
            "answer": 0,
            "explanation": "エネルギー使用量を減らす行動が省エネです。",
            "keyword": "省エネルギー"
          },
          {
            "id": "EN-A2-10",
            "field": "EN",
            "pack": "A",
            "stage": 2,
            "number": 10,
            "themeNumber": 10,
            "theme": "オゾン層破壊",
            "question": "循環型社会が目指すものはどれですか。",
            "choices": [
              "資源を循環させ廃棄物を減らす",
              "大量生産・大量廃棄",
              "化石燃料だけを使う",
              "自然災害をなくす"
            ],
            "answer": 0,
            "explanation": "資源循環と廃棄物削減を重視します。",
            "keyword": "循環型社会"
          }
        ]
      },
      {
        "name": "Stage 3 実践",
        "questions": [
          {
            "id": "EN-A3-01",
            "field": "EN",
            "pack": "A",
            "stage": 3,
            "number": 1,
            "themeNumber": 1,
            "theme": "地震災害",
            "question": "ある町で洪水リスクが高まっている。適応策として最も適切なのはどれですか。",
            "choices": [
              "避難計画と治水対策を進める",
              "二酸化炭素排出を増やす",
              "川をすべて埋める",
              "情報提供をやめる"
            ],
            "answer": 0,
            "explanation": "洪水への備えは気候変動への適応策です。",
            "keyword": "気候変動への適応"
          },
          {
            "id": "EN-A3-02",
            "field": "EN",
            "pack": "A",
            "stage": 3,
            "number": 2,
            "themeNumber": 2,
            "theme": "気象災害",
            "question": "電力消費量を減らし、再生可能エネルギーを増やす目的として最も適切なのはどれですか。",
            "choices": [
              "温室効果ガス排出を減らす",
              "地震を防ぐ",
              "月食を減らす",
              "海流を止める"
            ],
            "answer": 0,
            "explanation": "化石燃料使用を減らすことで排出削減につながります。",
            "keyword": "再生可能エネルギー"
          },
          {
            "id": "EN-A3-03",
            "field": "EN",
            "pack": "A",
            "stage": 3,
            "number": 3,
            "themeNumber": 3,
            "theme": "火山災害",
            "question": "森林保全が地球環境に役立つ理由として適切なのはどれですか。",
            "choices": [
              "二酸化炭素吸収と生息地保全",
              "酸素をすべて消費する",
              "海面を直接下げるだけ",
              "火山活動を止める"
            ],
            "answer": 0,
            "explanation": "森林は炭素を蓄え、多くの生物の生息地になります。",
            "keyword": "森林保全"
          },
          {
            "id": "EN-A3-04",
            "field": "EN",
            "pack": "A",
            "stage": 3,
            "number": 4,
            "themeNumber": 4,
            "theme": "天然資源",
            "question": "同じ製品を長く使う行動は3Rのどれに最も近いですか。",
            "choices": [
              "Reuse",
              "Recycle",
              "Reduceだけ",
              "Increase"
            ],
            "answer": 0,
            "explanation": "繰り返し使うことはReuseです。",
            "keyword": "Reuse"
          },
          {
            "id": "EN-A3-05",
            "field": "EN",
            "pack": "A",
            "stage": 3,
            "number": 5,
            "themeNumber": 5,
            "theme": "防災と減災",
            "question": "ペットボトルを回収して別の製品の材料にするのは3Rのどれですか。",
            "choices": [
              "Recycle",
              "Reuse",
              "Reduce",
              "Repairだけ"
            ],
            "answer": 0,
            "explanation": "資源として再生利用するのがRecycleです。",
            "keyword": "Recycle"
          },
          {
            "id": "EN-A3-06",
            "field": "EN",
            "pack": "A",
            "stage": 3,
            "number": 6,
            "themeNumber": 6,
            "theme": "気候変動",
            "question": "必要のない包装を断る行動は3Rのどれに最も近いですか。",
            "choices": [
              "Reduce",
              "Reuse",
              "Recycle",
              "Restore"
            ],
            "answer": 0,
            "explanation": "ごみそのものを減らす行動がReduceです。",
            "keyword": "Reduce"
          },
          {
            "id": "EN-A3-07",
            "field": "EN",
            "pack": "A",
            "stage": 3,
            "number": 7,
            "themeNumber": 7,
            "theme": "地球温暖化",
            "question": "大雨の前にハザードマップを確認する主な目的はどれですか。",
            "choices": [
              "危険区域と避難場所を知る",
              "降水量を0にする",
              "川を止める",
              "気圧を上げる"
            ],
            "answer": 0,
            "explanation": "事前に危険性と避難経路を確認できます。",
            "keyword": "ハザードマップ"
          },
          {
            "id": "EN-A3-08",
            "field": "EN",
            "pack": "A",
            "stage": 3,
            "number": 8,
            "themeNumber": 8,
            "theme": "エルニーニョ",
            "question": "生態系保全で、ある1種だけでなく生息地全体を守ることが重要な理由はどれですか。",
            "choices": [
              "生物同士が関係し合っているため",
              "すべての生物が同じ食物を食べるため",
              "環境は生物に影響しないため",
              "1種だけで生態系が成り立つため"
            ],
            "answer": 0,
            "explanation": "食物網や環境条件など、相互関係があるためです。",
            "keyword": "生態系保全"
          },
          {
            "id": "EN-A3-09",
            "field": "EN",
            "pack": "A",
            "stage": 3,
            "number": 9,
            "themeNumber": 9,
            "theme": "酸性雨",
            "question": "海面上昇の影響を受けやすい地域はどれですか。",
            "choices": [
              "低地の沿岸部",
              "高い山頂",
              "内陸の高原だけ",
              "火山の火口内部"
            ],
            "answer": 0,
            "explanation": "標高の低い沿岸地域は浸水や高潮の影響を受けやすいです。",
            "keyword": "海面上昇"
          },
          {
            "id": "EN-A3-10",
            "field": "EN",
            "pack": "A",
            "stage": 3,
            "number": 10,
            "themeNumber": 10,
            "theme": "オゾン層破壊",
            "question": "環境問題の解決で科学的データが重要な理由はどれですか。",
            "choices": [
              "原因や変化を客観的に判断できる",
              "意見を不要にできる",
              "未来を完全に予言できる",
              "すべての価値判断を自動化できる"
            ],
            "answer": 0,
            "explanation": "データは状況把握や対策評価の根拠になります。",
            "keyword": "科学的データ"
          }
        ]
      }
    ],
    "code": "EN"
  }
]
};
