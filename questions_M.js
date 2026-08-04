// =====================================================
// 地学基礎マスター Mパック問題データ Ver.1.4.2
// Master／師範モード 150問
// =====================================================

const QUESTION_PACK_M = {
  code: "M",
  name: "Master",
  displayName: "師範",
  icon: "🥋",
  fields: [
  {
    "id": "plate",
    "icon": "🌋",
    "name": "プレート",
    "subtitle": "地震・火山・地球内部",
    "color": "#ef6b5b",
    "code": "EQ",
    "stages": [
      {
        "name": "Stage 1 基礎",
        "questions": [
          {
            "id": "EQ-M1-01",
            "field": "EQ",
            "pack": "M",
            "stage": 1,
            "number": 1,
            "themeNumber": 1,
            "theme": "地球の大きさと形",
            "question": "地球の形を最も適切に表す語はどれですか。",
            "choices": [
              "回転楕円体",
              "完全な球",
              "円柱",
              "立方体"
            ],
            "answer": 0,
            "explanation": "地球は自転の影響で赤道方向にわずかにふくらんだ回転楕円体に近い形です。",
            "keyword": "回転楕円体"
          },
          {
            "id": "EQ-M1-02",
            "field": "EQ",
            "pack": "M",
            "stage": 1,
            "number": 2,
            "themeNumber": 2,
            "theme": "地球の内部構造とモホロビチッチ不連続面",
            "question": "地殻とマントルの境界を何といいますか。",
            "choices": [
              "モホロビチッチ不連続面",
              "グーテンベルク不連続面",
              "レーマン不連続面",
              "海溝"
            ],
            "answer": 0,
            "explanation": "地殻とマントルの境界はモホロビチッチ不連続面、略してモホ面です。",
            "keyword": "モホロビチッチ不連続面"
          },
          {
            "id": "EQ-M1-03",
            "field": "EQ",
            "pack": "M",
            "stage": 1,
            "number": 3,
            "themeNumber": 3,
            "theme": "リソスフェア・アセノスフェア",
            "question": "地殻と上部マントル最上部を合わせた、かたい層を何といいますか。",
            "choices": [
              "リソスフェア",
              "アセノスフェア",
              "外核",
              "対流圏"
            ],
            "answer": 0,
            "explanation": "プレートとして運動するかたい部分がリソスフェアです。",
            "keyword": "リソスフェア"
          },
          {
            "id": "EQ-M1-04",
            "field": "EQ",
            "pack": "M",
            "stage": 1,
            "number": 4,
            "themeNumber": 4,
            "theme": "プレートテクトニクス",
            "question": "海嶺で主に起こるプレート運動はどれですか。",
            "choices": [
              "プレートが生まれて左右へ広がる",
              "一方が他方の下へ沈み込む",
              "プレートが完全に停止する",
              "大陸だけが消滅する"
            ],
            "answer": 0,
            "explanation": "海嶺ではマグマが上昇して新しい海洋プレートがつくられます。",
            "keyword": "海洋底拡大"
          },
          {
            "id": "EQ-M1-05",
            "field": "EQ",
            "pack": "M",
            "stage": 1,
            "number": 5,
            "themeNumber": 5,
            "theme": "ホットスポット",
            "question": "プレート内部で長期間ほぼ同じ場所にマグマを供給する場所を何といいますか。",
            "choices": [
              "ホットスポット",
              "海溝",
              "前線",
              "モホ面"
            ],
            "answer": 0,
            "explanation": "マントル深部からの上昇流により火山活動が続く場所をホットスポットといいます。",
            "keyword": "ホットスポット"
          },
          {
            "id": "EQ-M1-06",
            "field": "EQ",
            "pack": "M",
            "stage": 1,
            "number": 6,
            "themeNumber": 6,
            "theme": "断層",
            "question": "岩盤に力が加わり、割れて両側がずれた構造を何といいますか。",
            "choices": [
              "断層",
              "しゅう曲",
              "不整合",
              "海嶺"
            ],
            "answer": 0,
            "explanation": "岩石が破断し、その面に沿ってずれた構造が断層です。",
            "keyword": "断層"
          },
          {
            "id": "EQ-M1-07",
            "field": "EQ",
            "pack": "M",
            "stage": 1,
            "number": 7,
            "themeNumber": 7,
            "theme": "地震全般",
            "question": "地震の規模そのものを表す値はどれですか。",
            "choices": [
              "マグニチュード",
              "震度",
              "気圧",
              "標高"
            ],
            "answer": 0,
            "explanation": "マグニチュードは地震が放出したエネルギーの規模を表します。",
            "keyword": "マグニチュード"
          },
          {
            "id": "EQ-M1-08",
            "field": "EQ",
            "pack": "M",
            "stage": 1,
            "number": 8,
            "themeNumber": 8,
            "theme": "大森公式",
            "question": "震源距離Dと初期微動継続時間Tの関係を表す経験式を何といいますか。",
            "choices": [
              "大森公式",
              "ボイルの法則",
              "ケプラーの法則",
              "フックの法則"
            ],
            "answer": 0,
            "explanation": "D=kTの形で震源距離と初期微動継続時間を結ぶ式を大森公式といいます。",
            "keyword": "大森公式"
          },
          {
            "id": "EQ-M1-09",
            "field": "EQ",
            "pack": "M",
            "stage": 1,
            "number": 9,
            "themeNumber": 9,
            "theme": "火成岩と造岩鉱物",
            "question": "マグマが地下深くでゆっくり冷えてできる岩石を何といいますか。",
            "choices": [
              "深成岩",
              "火山岩",
              "堆積岩",
              "変成岩"
            ],
            "answer": 0,
            "explanation": "地下深くでゆっくり冷えると大きな結晶からなる深成岩ができます。",
            "keyword": "深成岩"
          },
          {
            "id": "EQ-M1-10",
            "field": "EQ",
            "pack": "M",
            "stage": 1,
            "number": 10,
            "themeNumber": 10,
            "theme": "火山",
            "question": "マグマが地表へ噴出する現象を何といいますか。",
            "choices": [
              "噴火",
              "風化",
              "堆積",
              "侵食"
            ],
            "answer": 0,
            "explanation": "地下のマグマや火山ガスなどが地表へ放出される現象が噴火です。",
            "keyword": "噴火"
          }
        ]
      },
      {
        "name": "Stage 2 標準",
        "questions": [
          {
            "id": "EQ-M2-01",
            "field": "EQ",
            "pack": "M",
            "stage": 2,
            "number": 1,
            "themeNumber": 1,
            "theme": "地球の大きさと形",
            "question": "地球の赤道半径と極半径の関係として正しいものはどれですか。",
            "choices": [
              "赤道半径の方がわずかに大きい",
              "極半径の方が大きい",
              "両者は完全に等しい",
              "地域によって大小が逆転する"
            ],
            "answer": 0,
            "explanation": "自転による遠心力のため、地球は赤道方向にわずかにふくらんでいます。",
            "keyword": "赤道半径"
          },
          {
            "id": "EQ-M2-02",
            "field": "EQ",
            "pack": "M",
            "stage": 2,
            "number": 2,
            "themeNumber": 2,
            "theme": "地球の内部構造とモホロビチッチ不連続面",
            "question": "地震波がモホ面を通過するとき、一般に起こる変化はどれですか。",
            "choices": [
              "伝わる速さが大きくなる",
              "完全に停止する",
              "必ず液体中に入る",
              "速さが0になる"
            ],
            "answer": 0,
            "explanation": "マントル上部は地殻より地震波速度が大きいため、モホ面で速度が急に増加します。",
            "keyword": "地震波速度"
          },
          {
            "id": "EQ-M2-03",
            "field": "EQ",
            "pack": "M",
            "stage": 2,
            "number": 3,
            "themeNumber": 3,
            "theme": "リソスフェア・アセノスフェア",
            "question": "アセノスフェアの特徴として最も適切なものはどれですか。",
            "choices": [
              "長い時間では流動する性質をもつ",
              "完全な液体である",
              "地殻より上にある",
              "地震波が全く伝わらない"
            ],
            "answer": 0,
            "explanation": "アセノスフェアは固体ですが、高温でやわらかく、長い時間尺度では流動します。",
            "keyword": "アセノスフェア"
          },
          {
            "id": "EQ-M2-04",
            "field": "EQ",
            "pack": "M",
            "stage": 2,
            "number": 4,
            "themeNumber": 4,
            "theme": "プレートテクトニクス",
            "question": "海洋プレートが大陸プレートの下に沈み込む場所で見られやすい組合せはどれですか。",
            "choices": [
              "海溝・深発地震・火山列",
              "海嶺・浅い海・無地震",
              "砂丘・河川・氷河",
              "台風・前線・高潮"
            ],
            "answer": 0,
            "explanation": "沈み込み帯では海溝、傾斜した震源分布、火山列が形成されます。",
            "keyword": "沈み込み帯"
          },
          {
            "id": "EQ-M2-05",
            "field": "EQ",
            "pack": "M",
            "stage": 2,
            "number": 5,
            "themeNumber": 5,
            "theme": "ホットスポット",
            "question": "ハワイ諸島の火山列から推定できることとして適切なのはどれですか。",
            "choices": [
              "太平洋プレートの移動方向",
              "地球の自転速度だけ",
              "月の公転方向",
              "大気循環の向き"
            ],
            "answer": 0,
            "explanation": "ホットスポット上をプレートが移動すると火山列ができ、その並びからプレート移動を推定できます。",
            "keyword": "火山列"
          },
          {
            "id": "EQ-M2-06",
            "field": "EQ",
            "pack": "M",
            "stage": 2,
            "number": 6,
            "themeNumber": 6,
            "theme": "断層",
            "question": "上盤が下盤に対して下がる断層はどれですか。",
            "choices": [
              "正断層",
              "逆断層",
              "横ずれ断層",
              "衝上断層"
            ],
            "answer": 0,
            "explanation": "引っ張る力で上盤が下がる断層を正断層といいます。",
            "keyword": "正断層"
          },
          {
            "id": "EQ-M2-07",
            "field": "EQ",
            "pack": "M",
            "stage": 2,
            "number": 7,
            "themeNumber": 7,
            "theme": "地震全般",
            "question": "同じ地震でも地点によって震度が異なる主な理由はどれですか。",
            "choices": [
              "震源からの距離や地盤が異なるため",
              "マグニチュードが地点ごとに変わるため",
              "地球の半径が変わるため",
              "月齢が異なるため"
            ],
            "answer": 0,
            "explanation": "揺れの強さは震源距離や地盤条件などで変化します。",
            "keyword": "震度"
          },
          {
            "id": "EQ-M2-08",
            "field": "EQ",
            "pack": "M",
            "stage": 2,
            "number": 8,
            "themeNumber": 8,
            "theme": "大森公式",
            "question": "大森公式 D=8T を用いる。初期微動継続時間が5秒のとき震源距離は何kmですか。",
            "choices": [
              "40 km",
              "13 km",
              "8 km",
              "64 km"
            ],
            "answer": 0,
            "explanation": "D=8×5=40 kmです。",
            "keyword": "震源距離"
          },
          {
            "id": "EQ-M2-09",
            "field": "EQ",
            "pack": "M",
            "stage": 2,
            "number": 9,
            "themeNumber": 9,
            "theme": "火成岩と造岩鉱物",
            "question": "有色鉱物に分類されるものはどれですか。",
            "choices": [
              "黒雲母",
              "石英",
              "長石",
              "方解石"
            ],
            "answer": 0,
            "explanation": "黒雲母・角閃石・輝石・かんらん石などは有色鉱物です。",
            "keyword": "有色鉱物"
          },
          {
            "id": "EQ-M2-10",
            "field": "EQ",
            "pack": "M",
            "stage": 2,
            "number": 10,
            "themeNumber": 10,
            "theme": "火山",
            "question": "二酸化ケイ素を多く含むマグマの一般的な特徴はどれですか。",
            "choices": [
              "粘り気が強い",
              "粘り気が弱い",
              "必ず低温でない",
              "必ず黒色になる"
            ],
            "answer": 0,
            "explanation": "二酸化ケイ素が多いほどマグマの粘性は高くなる傾向があります。",
            "keyword": "マグマの粘性"
          }
        ]
      },
      {
        "name": "Stage 3 実践",
        "questions": [
          {
            "id": "EQ-M3-01",
            "field": "EQ",
            "pack": "M",
            "stage": 3,
            "number": 1,
            "themeNumber": 1,
            "theme": "地球の大きさと形",
            "question": "地球を半径6370 kmの球とみなす。地球一周の長さとして最も近いものはどれですか。",
            "choices": [
              "約4.0万km",
              "約6400km",
              "約1.3万km",
              "約40万km"
            ],
            "answer": 0,
            "explanation": "円周は2πrなので、2×3.14×6370≒4.0万kmです。",
            "keyword": "地球の円周"
          },
          {
            "id": "EQ-M3-02",
            "field": "EQ",
            "pack": "M",
            "stage": 3,
            "number": 2,
            "themeNumber": 2,
            "theme": "地球の内部構造とモホロビチッチ不連続面",
            "question": "大陸地域と海洋地域を比べた説明として正しいものはどれですか。",
            "choices": [
              "一般に大陸地殻の方が厚い",
              "海洋地殻の方が必ず厚い",
              "モホ面は地表に露出する",
              "地殻の厚さはどこでも同じ"
            ],
            "answer": 0,
            "explanation": "大陸地殻は一般に数十km、海洋地殻は約5～10kmで、大陸地殻の方が厚い傾向があります。",
            "keyword": "地殻の厚さ"
          },
          {
            "id": "EQ-M3-03",
            "field": "EQ",
            "pack": "M",
            "stage": 3,
            "number": 3,
            "themeNumber": 3,
            "theme": "リソスフェア・アセノスフェア",
            "question": "プレートが移動できる理由を説明したものとして適切なのはどれですか。",
            "choices": [
              "リソスフェアが流動しやすいアセノスフェアの上にあるため",
              "外核が地表に露出しているため",
              "大気がプレートを押すため",
              "海水が地殻を溶かすため"
            ],
            "answer": 0,
            "explanation": "かたいリソスフェアが、長期的に流動するアセノスフェアの上を移動します。",
            "keyword": "プレート運動"
          },
          {
            "id": "EQ-M3-04",
            "field": "EQ",
            "pack": "M",
            "stage": 3,
            "number": 4,
            "themeNumber": 4,
            "theme": "プレートテクトニクス",
            "question": "海洋底の岩石の年代を海嶺からの距離と比べたとき、一般に成り立つ関係はどれですか。",
            "choices": [
              "海嶺から離れるほど古い",
              "海嶺から離れるほど新しい",
              "どこでも同じ年代",
              "海溝に近いほど必ず0歳"
            ],
            "answer": 0,
            "explanation": "海嶺で新しい海洋底が生まれ、移動するため、海嶺から遠いほど古くなります。",
            "keyword": "海洋底年代"
          },
          {
            "id": "EQ-M3-05",
            "field": "EQ",
            "pack": "M",
            "stage": 3,
            "number": 5,
            "themeNumber": 5,
            "theme": "ホットスポット",
            "question": "ある火山列で、南東端の火山が現在活動中で、北西ほど火山の年代が古い。この地域のプレートは主にどちらへ動いたと考えられますか。",
            "choices": [
              "北西方向",
              "南東方向",
              "鉛直上方",
              "移動していない"
            ],
            "answer": 0,
            "explanation": "固定したホットスポット上をプレートが北西へ動いたため、北西ほど古い火山が残ります。",
            "keyword": "プレート移動方向"
          },
          {
            "id": "EQ-M3-06",
            "field": "EQ",
            "pack": "M",
            "stage": 3,
            "number": 6,
            "themeNumber": 6,
            "theme": "断層",
            "question": "東西方向に延びる断層をはさんで、北側の地盤が東へ、南側が西へずれた。断層の種類として最も適切なのはどれですか。",
            "choices": [
              "右横ずれ断層",
              "左横ずれ断層",
              "正断層",
              "逆断層"
            ],
            "answer": 0,
            "explanation": "断層の反対側が右へ動いて見えるため、右横ずれ断層です。",
            "keyword": "右横ずれ断層"
          },
          {
            "id": "EQ-M3-07",
            "field": "EQ",
            "pack": "M",
            "stage": 3,
            "number": 7,
            "themeNumber": 7,
            "theme": "地震全般",
            "question": "ある地震でP波は6 km/s、S波は3 km/sで進む。震源から18 kmの地点で初期微動継続時間は何秒ですか。",
            "choices": [
              "3秒",
              "1秒",
              "6秒",
              "9秒"
            ],
            "answer": 0,
            "explanation": "P波は3秒、S波は6秒で到着するので、その差は3秒です。",
            "keyword": "初期微動継続時間"
          },
          {
            "id": "EQ-M3-08",
            "field": "EQ",
            "pack": "M",
            "stage": 3,
            "number": 8,
            "themeNumber": 8,
            "theme": "大森公式",
            "question": "A地点の初期微動継続時間が4秒、B地点が9秒で、大森公式の比例定数が同じである。震源距離の比A:Bはどれですか。",
            "choices": [
              "4:9",
              "9:4",
              "2:3",
              "1:1"
            ],
            "answer": 0,
            "explanation": "震源距離は初期微動継続時間に比例するため4:9です。",
            "keyword": "比例関係"
          },
          {
            "id": "EQ-M3-09",
            "field": "EQ",
            "pack": "M",
            "stage": 3,
            "number": 9,
            "themeNumber": 9,
            "theme": "火成岩と造岩鉱物",
            "question": "等粒状組織をもち、石英・長石を多く含み、比較的白っぽい深成岩はどれですか。",
            "choices": [
              "花こう岩",
              "はんれい岩",
              "玄武岩",
              "安山岩"
            ],
            "answer": 0,
            "explanation": "花こう岩は石英・長石が多く、地下でゆっくり冷えた深成岩です。",
            "keyword": "花こう岩"
          },
          {
            "id": "EQ-M3-10",
            "field": "EQ",
            "pack": "M",
            "stage": 3,
            "number": 10,
            "themeNumber": 10,
            "theme": "火山",
            "question": "同じ量の火山噴出物でも、粘り気が弱い溶岩がつくりやすい火山地形はどれですか。",
            "choices": [
              "広く傾斜のゆるい火山",
              "急傾斜の溶岩ドームだけ",
              "必ずカルデラ",
              "火砕流台地だけ"
            ],
            "answer": 0,
            "explanation": "流動性の高い溶岩は広く流れ、傾斜のゆるい火山をつくりやすいです。",
            "keyword": "火山地形"
          }
        ]
      }
    ]
  },
  {
    "id": "atmos",
    "icon": "☁️",
    "name": "大気",
    "subtitle": "天気・海洋・気候",
    "color": "#4ba9e8",
    "code": "AT",
    "stages": [
      {
        "name": "Stage 1 基礎",
        "questions": [
          {
            "id": "AT-M1-01",
            "field": "AT",
            "pack": "M",
            "stage": 1,
            "number": 1,
            "themeNumber": 1,
            "theme": "大気圧",
            "question": "大気圧が生じる主な理由はどれですか。",
            "choices": [
              "上にある空気の重さ",
              "地球の磁力だけ",
              "太陽光の圧力だけ",
              "雲の重さだけ"
            ],
            "answer": 0,
            "explanation": "大気圧は、その場所より上にある空気の重さによって生じます。",
            "keyword": "大気圧"
          },
          {
            "id": "AT-M1-02",
            "field": "AT",
            "pack": "M",
            "stage": 1,
            "number": 2,
            "themeNumber": 2,
            "theme": "大気の層",
            "question": "地表に最も近く、天気の変化が起こる層はどれですか。",
            "choices": [
              "対流圏",
              "成層圏",
              "中間圏",
              "熱圏"
            ],
            "answer": 0,
            "explanation": "雲や降水などの天気現象の多くは対流圏で起こります。",
            "keyword": "対流圏"
          },
          {
            "id": "AT-M1-03",
            "field": "AT",
            "pack": "M",
            "stage": 1,
            "number": 3,
            "themeNumber": 3,
            "theme": "オゾン層",
            "question": "オゾン層が多く存在する大気の層はどれですか。",
            "choices": [
              "成層圏",
              "対流圏",
              "中間圏",
              "外気圏"
            ],
            "answer": 0,
            "explanation": "オゾン層は主に成層圏にあります。",
            "keyword": "オゾン層"
          },
          {
            "id": "AT-M1-04",
            "field": "AT",
            "pack": "M",
            "stage": 1,
            "number": 4,
            "themeNumber": 4,
            "theme": "飽和水蒸気量・湿度・露点",
            "question": "ある温度の空気1 m3が含むことのできる水蒸気量の上限を何といいますか。",
            "choices": [
              "飽和水蒸気量",
              "絶対零度",
              "気圧傾度",
              "比熱"
            ],
            "answer": 0,
            "explanation": "飽和水蒸気量は温度によって決まる水蒸気量の上限です。",
            "keyword": "飽和水蒸気量"
          },
          {
            "id": "AT-M1-05",
            "field": "AT",
            "pack": "M",
            "stage": 1,
            "number": 5,
            "themeNumber": 5,
            "theme": "雲と大気の安定・不安定",
            "question": "空気が上昇して膨張すると、一般に温度はどうなりますか。",
            "choices": [
              "下がる",
              "上がる",
              "変化しない",
              "必ず100℃になる"
            ],
            "answer": 0,
            "explanation": "上昇する空気は周囲の気圧低下で膨張し、断熱的に冷却します。",
            "keyword": "断熱膨張"
          },
          {
            "id": "AT-M1-06",
            "field": "AT",
            "pack": "M",
            "stage": 1,
            "number": 6,
            "themeNumber": 6,
            "theme": "温帯低気圧と熱帯低気圧",
            "question": "温帯低気圧に伴ってできるものはどれですか。",
            "choices": [
              "温暖前線と寒冷前線",
              "海溝と海嶺",
              "日食と月食",
              "黒点とコロナ"
            ],
            "answer": 0,
            "explanation": "中緯度の温帯低気圧には温暖前線や寒冷前線が伴います。",
            "keyword": "温帯低気圧"
          },
          {
            "id": "AT-M1-07",
            "field": "AT",
            "pack": "M",
            "stage": 1,
            "number": 7,
            "themeNumber": 7,
            "theme": "日本の天気",
            "question": "冬に日本海側で雪が多くなる主な理由はどれですか。",
            "choices": [
              "季節風が日本海から水蒸気を得るため",
              "太平洋が凍結するため",
              "梅雨前線が停滞するため",
              "黒潮が停止するため"
            ],
            "answer": 0,
            "explanation": "大陸からの冷たい季節風が日本海上で水蒸気を得て雪雲をつくります。",
            "keyword": "冬の季節風"
          },
          {
            "id": "AT-M1-08",
            "field": "AT",
            "pack": "M",
            "stage": 1,
            "number": 8,
            "themeNumber": 8,
            "theme": "エネルギー循環",
            "question": "地球が受け取る太陽放射と地球が宇宙へ出す放射が長期的にほぼ等しい状態を何と考えますか。",
            "choices": [
              "放射平衡",
              "海洋底拡大",
              "静水圧平衡",
              "化学平衡だけ"
            ],
            "answer": 0,
            "explanation": "地球全体では受け取るエネルギーと放出するエネルギーが長期的に釣り合います。",
            "keyword": "放射平衡"
          },
          {
            "id": "AT-M1-09",
            "field": "AT",
            "pack": "M",
            "stage": 1,
            "number": 9,
            "themeNumber": 9,
            "theme": "大気循環",
            "question": "赤道付近で上昇気流が生じる大規模循環を何といいますか。",
            "choices": [
              "ハドレー循環",
              "深層循環",
              "海陸風",
              "偏西風だけ"
            ],
            "answer": 0,
            "explanation": "赤道付近で上昇し、亜熱帯で下降する循環がハドレー循環です。",
            "keyword": "ハドレー循環"
          },
          {
            "id": "AT-M1-10",
            "field": "AT",
            "pack": "M",
            "stage": 1,
            "number": 10,
            "themeNumber": 10,
            "theme": "海洋循環",
            "question": "海面付近を主に風によって流れる海流を何といいますか。",
            "choices": [
              "表層海流",
              "深層流",
              "地下水",
              "ジェット気流"
            ],
            "answer": 0,
            "explanation": "表層海流は主に恒常風の影響を受けます。",
            "keyword": "表層海流"
          }
        ]
      },
      {
        "name": "Stage 2 標準",
        "questions": [
          {
            "id": "AT-M2-01",
            "field": "AT",
            "pack": "M",
            "stage": 2,
            "number": 1,
            "themeNumber": 1,
            "theme": "大気圧",
            "question": "高度が高くなるほど大気圧は一般にどうなりますか。",
            "choices": [
              "低くなる",
              "高くなる",
              "一定である",
              "必ず0になる"
            ],
            "answer": 0,
            "explanation": "上にある空気の量が減るため、高度とともに気圧は低下します。",
            "keyword": "高度と気圧"
          },
          {
            "id": "AT-M2-02",
            "field": "AT",
            "pack": "M",
            "stage": 2,
            "number": 2,
            "themeNumber": 2,
            "theme": "大気の層",
            "question": "成層圏で高度とともに気温が上昇する主な理由はどれですか。",
            "choices": [
              "オゾンが紫外線を吸収するため",
              "地面から近くなるため",
              "雲が多いため",
              "酸素が燃焼するため"
            ],
            "answer": 0,
            "explanation": "オゾンによる紫外線吸収が成層圏を加熱します。",
            "keyword": "成層圏"
          },
          {
            "id": "AT-M2-03",
            "field": "AT",
            "pack": "M",
            "stage": 2,
            "number": 3,
            "themeNumber": 3,
            "theme": "オゾン層",
            "question": "オゾン層が生物にとって重要な理由はどれですか。",
            "choices": [
              "有害な紫外線を吸収するため",
              "二酸化炭素をすべて除くため",
              "雨を直接降らせるため",
              "地震を防ぐため"
            ],
            "answer": 0,
            "explanation": "オゾンは生物に有害な紫外線の多くを吸収します。",
            "keyword": "紫外線吸収"
          },
          {
            "id": "AT-M2-04",
            "field": "AT",
            "pack": "M",
            "stage": 2,
            "number": 4,
            "themeNumber": 4,
            "theme": "飽和水蒸気量・湿度・露点",
            "question": "空気を冷やして水滴が生じ始める温度を何といいますか。",
            "choices": [
              "露点",
              "沸点",
              "融点",
              "乾球温度"
            ],
            "answer": 0,
            "explanation": "空気が飽和し、凝結が始まる温度が露点です。",
            "keyword": "露点"
          },
          {
            "id": "AT-M2-05",
            "field": "AT",
            "pack": "M",
            "stage": 2,
            "number": 5,
            "themeNumber": 5,
            "theme": "雲と大気の安定・不安定",
            "question": "下層の空気が暖かく上層が冷たいとき、大気は一般にどうなりやすいですか。",
            "choices": [
              "不安定になりやすい",
              "安定になりやすい",
              "対流が止まる",
              "必ず無風になる"
            ],
            "answer": 0,
            "explanation": "暖かい空気が上昇しやすく、対流が発達するため不安定になりやすいです。",
            "keyword": "大気の不安定"
          },
          {
            "id": "AT-M2-06",
            "field": "AT",
            "pack": "M",
            "stage": 2,
            "number": 6,
            "themeNumber": 6,
            "theme": "温帯低気圧と熱帯低気圧",
            "question": "熱帯低気圧が発達するために重要な条件はどれですか。",
            "choices": [
              "暖かい海面からの水蒸気供給",
              "冷たい陸面だけ",
              "強い寒冷前線",
              "極夜"
            ],
            "answer": 0,
            "explanation": "暖かい海から供給される水蒸気の凝結熱が発達のエネルギー源です。",
            "keyword": "熱帯低気圧"
          },
          {
            "id": "AT-M2-07",
            "field": "AT",
            "pack": "M",
            "stage": 2,
            "number": 7,
            "themeNumber": 7,
            "theme": "日本の天気",
            "question": "梅雨の時期に日本付近に停滞する前線はどれですか。",
            "choices": [
              "梅雨前線",
              "寒帯前線",
              "赤道前線",
              "海陸風前線"
            ],
            "answer": 0,
            "explanation": "初夏には性質の異なる気団の間に梅雨前線が停滞します。",
            "keyword": "梅雨前線"
          },
          {
            "id": "AT-M2-08",
            "field": "AT",
            "pack": "M",
            "stage": 2,
            "number": 8,
            "themeNumber": 8,
            "theme": "エネルギー循環",
            "question": "赤道付近が極付近より多くの太陽エネルギーを受け取る主な理由はどれですか。",
            "choices": [
              "太陽光がより垂直に近く入射するため",
              "赤道が太陽に常に近いため",
              "極には大気がないため",
              "地球が立方体だから"
            ],
            "answer": 0,
            "explanation": "低緯度では同じ光が狭い面積に集中し、単位面積当たりの受熱量が大きくなります。",
            "keyword": "太陽高度"
          },
          {
            "id": "AT-M2-09",
            "field": "AT",
            "pack": "M",
            "stage": 2,
            "number": 9,
            "themeNumber": 9,
            "theme": "大気循環",
            "question": "中緯度上空で西から東へ吹く風を何といいますか。",
            "choices": [
              "偏西風",
              "貿易風",
              "極東風",
              "海風"
            ],
            "answer": 0,
            "explanation": "中緯度では地球規模の大気循環により偏西風が卓越します。",
            "keyword": "偏西風"
          },
          {
            "id": "AT-M2-10",
            "field": "AT",
            "pack": "M",
            "stage": 2,
            "number": 10,
            "themeNumber": 10,
            "theme": "海洋循環",
            "question": "海水の密度を大きく左右する要素の組合せはどれですか。",
            "choices": [
              "水温と塩分",
              "気圧と月齢",
              "緯度と経度だけ",
              "風向と雲量だけ"
            ],
            "answer": 0,
            "explanation": "低温・高塩分ほど海水の密度は大きくなる傾向があります。",
            "keyword": "海水密度"
          }
        ]
      },
      {
        "name": "Stage 3 実践",
        "questions": [
          {
            "id": "AT-M3-01",
            "field": "AT",
            "pack": "M",
            "stage": 3,
            "number": 1,
            "themeNumber": 1,
            "theme": "大気圧",
            "question": "海面で1000 hPa、山頂で700 hPaであった。山頂の方が気圧が低い理由として適切なのはどれですか。",
            "choices": [
              "山頂より上にある空気の量が少ないため",
              "山頂では重力が完全になくなるため",
              "水蒸気が存在しないため",
              "酸素だけが減るため"
            ],
            "answer": 0,
            "explanation": "高度が高いほど上に積み重なる空気の量が少なくなります。",
            "keyword": "空気柱"
          },
          {
            "id": "AT-M3-02",
            "field": "AT",
            "pack": "M",
            "stage": 3,
            "number": 2,
            "themeNumber": 2,
            "theme": "大気の層",
            "question": "高度約12 kmで気温低下が止まり、その上で気温がほぼ一定または上昇へ転じた。この境界は何ですか。",
            "choices": [
              "対流圏界面",
              "モホ面",
              "海面",
              "温暖前線"
            ],
            "answer": 0,
            "explanation": "対流圏と成層圏の境界を対流圏界面といいます。",
            "keyword": "対流圏界面"
          },
          {
            "id": "AT-M3-03",
            "field": "AT",
            "pack": "M",
            "stage": 3,
            "number": 3,
            "themeNumber": 3,
            "theme": "オゾン層",
            "question": "成層圏のオゾンが減少した場合に増えると考えられるものはどれですか。",
            "choices": [
              "地表に届く紫外線",
              "地表に届く可視光だけ",
              "大気圧",
              "地球の半径"
            ],
            "answer": 0,
            "explanation": "オゾンによる吸収が弱まり、地表に届く紫外線が増加します。",
            "keyword": "紫外線"
          },
          {
            "id": "AT-M3-04",
            "field": "AT",
            "pack": "M",
            "stage": 3,
            "number": 4,
            "themeNumber": 4,
            "theme": "飽和水蒸気量・湿度・露点",
            "question": "気温20℃で飽和水蒸気量が17 g/m3、実際の水蒸気量が8.5 g/m3である。相対湿度は何％ですか。",
            "choices": [
              "50％",
              "25％",
              "100％",
              "200％"
            ],
            "answer": 0,
            "explanation": "相対湿度=8.5÷17×100=50％です。",
            "keyword": "相対湿度"
          },
          {
            "id": "AT-M3-05",
            "field": "AT",
            "pack": "M",
            "stage": 3,
            "number": 5,
            "themeNumber": 5,
            "theme": "雲と大気の安定・不安定",
            "question": "湿った空気が山の斜面を上昇し、雲ができた。雲ができる直接の理由はどれですか。",
            "choices": [
              "空気が冷えて水蒸気が凝結したため",
              "酸素が液体になったため",
              "気圧が上がって蒸発したため",
              "窒素が燃焼したため"
            ],
            "answer": 0,
            "explanation": "上昇した空気は冷え、飽和すると水蒸気が凝結して雲粒ができます。",
            "keyword": "凝結"
          },
          {
            "id": "AT-M3-06",
            "field": "AT",
            "pack": "M",
            "stage": 3,
            "number": 6,
            "themeNumber": 6,
            "theme": "温帯低気圧と熱帯低気圧",
            "question": "温帯低気圧と台風の違いとして適切なものはどれですか。",
            "choices": [
              "温帯低気圧は前線を伴うことが多いが、台風は通常前線を伴わない",
              "台風は必ず寒冷前線を伴う",
              "両者は発生場所も構造も完全に同じ",
              "温帯低気圧は海上で発生しない"
            ],
            "answer": 0,
            "explanation": "台風は暖かい海上で発達する熱帯低気圧で、発達期には通常前線を伴いません。",
            "keyword": "低気圧の構造"
          },
          {
            "id": "AT-M3-07",
            "field": "AT",
            "pack": "M",
            "stage": 3,
            "number": 7,
            "themeNumber": 7,
            "theme": "日本の天気",
            "question": "冬型の気圧配置「西高東低」のとき、太平洋側で晴れて乾燥しやすい理由はどれですか。",
            "choices": [
              "山を越えた空気が下降して乾燥するため",
              "海から水蒸気が大量に供給されるため",
              "台風が接近するため",
              "前線が停滞するため"
            ],
            "answer": 0,
            "explanation": "日本海側で雪を降らせた空気が山を越え、下降しながら昇温・乾燥します。",
            "keyword": "冬型の気圧配置"
          },
          {
            "id": "AT-M3-08",
            "field": "AT",
            "pack": "M",
            "stage": 3,
            "number": 8,
            "themeNumber": 8,
            "theme": "エネルギー循環",
            "question": "低緯度の余剰エネルギーが高緯度へ運ばれる主な仕組みはどれですか。",
            "choices": [
              "大気と海洋の循環",
              "地震波",
              "プレート運動だけ",
              "月の満ち欠け"
            ],
            "answer": 0,
            "explanation": "大気循環と海洋循環が熱を低緯度から高緯度へ輸送します。",
            "keyword": "熱輸送"
          },
          {
            "id": "AT-M3-09",
            "field": "AT",
            "pack": "M",
            "stage": 3,
            "number": 9,
            "themeNumber": 9,
            "theme": "大気循環",
            "question": "北半球の地表付近で、亜熱帯高圧帯から赤道低圧帯へ向かう風はどれですか。",
            "choices": [
              "北東貿易風",
              "南東貿易風",
              "偏西風",
              "季節風だけ"
            ],
            "answer": 0,
            "explanation": "北半球ではコリオリの力で右に曲げられ、北東貿易風となります。",
            "keyword": "北東貿易風"
          },
          {
            "id": "AT-M3-10",
            "field": "AT",
            "pack": "M",
            "stage": 3,
            "number": 10,
            "themeNumber": 10,
            "theme": "海洋循環",
            "question": "北大西洋高緯度で冷たく塩分の高い海水が沈み込むことは、何の一部ですか。",
            "choices": [
              "熱塩循環",
              "海陸風",
              "ハドレー循環",
              "潮汐だけ"
            ],
            "answer": 0,
            "explanation": "水温と塩分による密度差で生じる地球規模の深層循環を熱塩循環といいます。",
            "keyword": "熱塩循環"
          }
        ]
      }
    ]
  },
  {
    "id": "astro",
    "icon": "🌌",
    "name": "天文",
    "subtitle": "太陽・月・惑星・宇宙",
    "color": "#7367dc",
    "code": "AS",
    "stages": [
      {
        "name": "Stage 1 基礎",
        "questions": [
          {
            "id": "AS-M1-01",
            "field": "AS",
            "pack": "M",
            "stage": 1,
            "number": 1,
            "themeNumber": 1,
            "theme": "宇宙の歴史",
            "question": "宇宙の始まりを説明する標準的な理論はどれですか。",
            "choices": [
              "ビッグバン宇宙論",
              "天動説",
              "プレートテクトニクス",
              "定常気象論"
            ],
            "answer": 0,
            "explanation": "現在の標準的な宇宙論では、宇宙は高温高密度の状態から膨張してきたと考えます。",
            "keyword": "ビッグバン"
          },
          {
            "id": "AS-M1-02",
            "field": "AS",
            "pack": "M",
            "stage": 1,
            "number": 2,
            "themeNumber": 2,
            "theme": "恒星の一生",
            "question": "恒星が主系列星として輝く主なエネルギー源はどれですか。",
            "choices": [
              "水素の核融合",
              "石炭の燃焼",
              "重力だけで永遠に発光",
              "放射性崩壊だけ"
            ],
            "answer": 0,
            "explanation": "主系列星では中心部で水素がヘリウムへ変わる核融合が起こります。",
            "keyword": "水素核融合"
          },
          {
            "id": "AS-M1-03",
            "field": "AS",
            "pack": "M",
            "stage": 1,
            "number": 3,
            "themeNumber": 3,
            "theme": "太陽の様子",
            "question": "太陽の可視光で見える表面を何といいますか。",
            "choices": [
              "光球",
              "コロナ",
              "彩層",
              "中心核"
            ],
            "answer": 0,
            "explanation": "太陽の見かけの表面は光球です。",
            "keyword": "光球"
          },
          {
            "id": "AS-M1-04",
            "field": "AS",
            "pack": "M",
            "stage": 1,
            "number": 4,
            "themeNumber": 4,
            "theme": "太陽系惑星の様子",
            "question": "地球型惑星に分類されるものはどれですか。",
            "choices": [
              "火星",
              "木星",
              "土星",
              "海王星"
            ],
            "answer": 0,
            "explanation": "水星・金星・地球・火星は岩石を主体とする地球型惑星です。",
            "keyword": "地球型惑星"
          },
          {
            "id": "AS-M1-05",
            "field": "AS",
            "pack": "M",
            "stage": 1,
            "number": 5,
            "themeNumber": 5,
            "theme": "太陽系の惑星以外の天体の様子",
            "question": "小惑星の多くが分布する場所はどこですか。",
            "choices": [
              "火星と木星の軌道の間",
              "地球と月の間だけ",
              "太陽の内部",
              "海王星の大気中"
            ],
            "answer": 0,
            "explanation": "主要な小惑星帯は火星と木星の軌道の間にあります。",
            "keyword": "小惑星帯"
          },
          {
            "id": "AS-M1-06",
            "field": "AS",
            "pack": "M",
            "stage": 1,
            "number": 6,
            "themeNumber": 6,
            "theme": "天の川銀河の様子",
            "question": "太陽系が属する銀河はどれですか。",
            "choices": [
              "天の川銀河",
              "アンドロメダ銀河",
              "大マゼラン雲",
              "ソンブレロ銀河"
            ],
            "answer": 0,
            "explanation": "太陽系は天の川銀河に属します。",
            "keyword": "天の川銀河"
          },
          {
            "id": "AS-M1-07",
            "field": "AS",
            "pack": "M",
            "stage": 1,
            "number": 7,
            "themeNumber": 7,
            "theme": "宇宙での距離の単位",
            "question": "光年は何の単位ですか。",
            "choices": [
              "距離",
              "時間",
              "質量",
              "温度"
            ],
            "answer": 0,
            "explanation": "1光年は光が真空中を1年間に進む距離です。",
            "keyword": "光年"
          },
          {
            "id": "AS-M1-08",
            "field": "AS",
            "pack": "M",
            "stage": 1,
            "number": 8,
            "themeNumber": 8,
            "theme": "恒星の光",
            "question": "恒星の表面温度が高いほど、一般にどの色に見えますか。",
            "choices": [
              "青白い",
              "赤い",
              "黒い",
              "緑だけ"
            ],
            "answer": 0,
            "explanation": "高温の恒星ほど短波長側の光が強く、青白く見えます。",
            "keyword": "恒星の色"
          },
          {
            "id": "AS-M1-09",
            "field": "AS",
            "pack": "M",
            "stage": 1,
            "number": 9,
            "themeNumber": 9,
            "theme": "地上で見られる天体現象",
            "question": "月が太陽と地球の間に入り、太陽を隠す現象はどれですか。",
            "choices": [
              "日食",
              "月食",
              "オーロラ",
              "流星雨"
            ],
            "answer": 0,
            "explanation": "太陽・月・地球が並び、月が太陽を隠すと日食が起こります。",
            "keyword": "日食"
          },
          {
            "id": "AS-M1-10",
            "field": "AS",
            "pack": "M",
            "stage": 1,
            "number": 10,
            "themeNumber": 10,
            "theme": "宇宙が広がっている証拠",
            "question": "遠方銀河のスペクトル線が長波長側へずれる現象を何といいますか。",
            "choices": [
              "赤方偏移",
              "青方偏移",
              "日周運動",
              "歳差運動"
            ],
            "answer": 0,
            "explanation": "遠ざかる天体の光は長波長側へずれ、赤方偏移として観測されます。",
            "keyword": "赤方偏移"
          }
        ]
      },
      {
        "name": "Stage 2 標準",
        "questions": [
          {
            "id": "AS-M2-01",
            "field": "AS",
            "pack": "M",
            "stage": 2,
            "number": 1,
            "themeNumber": 1,
            "theme": "宇宙の歴史",
            "question": "宇宙誕生後、最初に大量につくられた元素として代表的なものはどれですか。",
            "choices": [
              "水素とヘリウム",
              "鉄と金",
              "ウランと鉛",
              "ケイ素とアルミニウムだけ"
            ],
            "answer": 0,
            "explanation": "初期宇宙の元素合成では主に水素とヘリウムがつくられました。",
            "keyword": "原始元素合成"
          },
          {
            "id": "AS-M2-02",
            "field": "AS",
            "pack": "M",
            "stage": 2,
            "number": 2,
            "themeNumber": 2,
            "theme": "恒星の一生",
            "question": "太陽程度の質量の恒星が主系列星の後に進む段階として適切なのはどれですか。",
            "choices": [
              "赤色巨星",
              "中性子星へ直ちに変化",
              "ブラックホールへ直ちに変化",
              "惑星になる"
            ],
            "answer": 0,
            "explanation": "中心の水素が減ると外層が膨張し、赤色巨星になります。",
            "keyword": "赤色巨星"
          },
          {
            "id": "AS-M2-03",
            "field": "AS",
            "pack": "M",
            "stage": 2,
            "number": 3,
            "themeNumber": 3,
            "theme": "太陽の様子",
            "question": "黒点が周囲より暗く見える主な理由はどれですか。",
            "choices": [
              "周囲より温度が低いため",
              "光を全く出さない穴だから",
              "地球の影だから",
              "月が隠しているため"
            ],
            "answer": 0,
            "explanation": "黒点も発光していますが、周囲の光球より温度が低いため暗く見えます。",
            "keyword": "黒点"
          },
          {
            "id": "AS-M2-04",
            "field": "AS",
            "pack": "M",
            "stage": 2,
            "number": 4,
            "themeNumber": 4,
            "theme": "太陽系惑星の様子",
            "question": "木星型惑星の一般的な特徴はどれですか。",
            "choices": [
              "半径が大きく主に軽い物質からなる",
              "岩石だけからなる小型惑星",
              "衛星をもたない",
              "環を絶対にもたない"
            ],
            "answer": 0,
            "explanation": "木星・土星などは大型で、水素やヘリウムなど軽い物質を多く含みます。",
            "keyword": "木星型惑星"
          },
          {
            "id": "AS-M2-05",
            "field": "AS",
            "pack": "M",
            "stage": 2,
            "number": 5,
            "themeNumber": 5,
            "theme": "太陽系の惑星以外の天体の様子",
            "question": "彗星が太陽に近づくと尾ができる主な理由はどれですか。",
            "choices": [
              "氷が昇華し、ガスやちりが放出されるため",
              "岩石が核融合するため",
              "地球の影に入るため",
              "重力がなくなるため"
            ],
            "answer": 0,
            "explanation": "太陽熱で彗星核の氷が昇華し、ガスとちりが尾を形成します。",
            "keyword": "彗星"
          },
          {
            "id": "AS-M2-06",
            "field": "AS",
            "pack": "M",
            "stage": 2,
            "number": 6,
            "themeNumber": 6,
            "theme": "天の川銀河の様子",
            "question": "天の川銀河の形として最も適切なものはどれですか。",
            "choices": [
              "棒渦巻銀河",
              "完全な球状銀河",
              "不規則銀河だけ",
              "環状星雲"
            ],
            "answer": 0,
            "explanation": "天の川銀河は中心に棒状構造をもつ棒渦巻銀河と考えられています。",
            "keyword": "棒渦巻銀河"
          },
          {
            "id": "AS-M2-07",
            "field": "AS",
            "pack": "M",
            "stage": 2,
            "number": 7,
            "themeNumber": 7,
            "theme": "宇宙での距離の単位",
            "question": "太陽と地球の平均距離を基準にした単位はどれですか。",
            "choices": [
              "天文単位",
              "パーセク",
              "光年",
              "等級"
            ],
            "answer": 0,
            "explanation": "1天文単位は地球と太陽の平均距離、約1.5億kmです。",
            "keyword": "天文単位"
          },
          {
            "id": "AS-M2-08",
            "field": "AS",
            "pack": "M",
            "stage": 2,
            "number": 8,
            "themeNumber": 8,
            "theme": "恒星の光",
            "question": "恒星のスペクトルに暗線が見られる主な理由はどれですか。",
            "choices": [
              "恒星大気中の元素が特定波長を吸収するため",
              "光が完全に消えるため",
              "地球の影が恒星に映るため",
              "真空が色をつけるため"
            ],
            "answer": 0,
            "explanation": "吸収線の位置から恒星大気に含まれる元素を調べられます。",
            "keyword": "吸収スペクトル"
          },
          {
            "id": "AS-M2-09",
            "field": "AS",
            "pack": "M",
            "stage": 2,
            "number": 9,
            "themeNumber": 9,
            "theme": "地上で見られる天体現象",
            "question": "月食が起こるときの並びはどれですか。",
            "choices": [
              "太陽―地球―月",
              "太陽―月―地球",
              "地球―月―太陽",
              "月―太陽―地球"
            ],
            "answer": 0,
            "explanation": "月食では月が地球の影に入るため、太陽―地球―月の順です。",
            "keyword": "月食"
          },
          {
            "id": "AS-M2-10",
            "field": "AS",
            "pack": "M",
            "stage": 2,
            "number": 10,
            "themeNumber": 10,
            "theme": "宇宙が広がっている証拠",
            "question": "ハッブルの法則が示す関係はどれですか。",
            "choices": [
              "遠い銀河ほど速く遠ざかる傾向",
              "遠い銀河ほど近づく",
              "銀河の速度は距離と無関係",
              "すべての銀河は静止する"
            ],
            "answer": 0,
            "explanation": "銀河の後退速度は距離にほぼ比例するという関係です。",
            "keyword": "ハッブルの法則"
          }
        ]
      },
      {
        "name": "Stage 3 実践",
        "questions": [
          {
            "id": "AS-M3-01",
            "field": "AS",
            "pack": "M",
            "stage": 3,
            "number": 1,
            "themeNumber": 1,
            "theme": "宇宙の歴史",
            "question": "宇宙背景放射がほぼあらゆる方向から観測されることは、何を支持する証拠ですか。",
            "choices": [
              "宇宙がかつて高温高密度だったこと",
              "地球が宇宙の中心であること",
              "宇宙が膨張していないこと",
              "太陽が最初の恒星であること"
            ],
            "answer": 0,
            "explanation": "宇宙背景放射は初期宇宙の高温状態の名残と考えられています。",
            "keyword": "宇宙背景放射"
          },
          {
            "id": "AS-M3-02",
            "field": "AS",
            "pack": "M",
            "stage": 3,
            "number": 2,
            "themeNumber": 2,
            "theme": "恒星の一生",
            "question": "大質量星の最期に起こりやすい現象はどれですか。",
            "choices": [
              "超新星爆発",
              "月食",
              "海洋底拡大",
              "オーロラだけ"
            ],
            "answer": 0,
            "explanation": "大質量星は重元素の核融合を経て中心が崩壊し、超新星爆発を起こすことがあります。",
            "keyword": "超新星爆発"
          },
          {
            "id": "AS-M3-03",
            "field": "AS",
            "pack": "M",
            "stage": 3,
            "number": 3,
            "themeNumber": 3,
            "theme": "太陽の様子",
            "question": "太陽活動が活発な時期に増えやすいものはどれですか。",
            "choices": [
              "黒点数とフレア",
              "地球の半径",
              "月の公転周期",
              "海水の塩分"
            ],
            "answer": 0,
            "explanation": "太陽活動が活発になると黒点やフレアの発生が増える傾向があります。",
            "keyword": "太陽活動"
          },
          {
            "id": "AS-M3-04",
            "field": "AS",
            "pack": "M",
            "stage": 3,
            "number": 4,
            "themeNumber": 4,
            "theme": "太陽系惑星の様子",
            "question": "金星の表面温度が非常に高い主な理由はどれですか。",
            "choices": [
              "厚い二酸化炭素大気による強い温室効果",
              "太陽に最も近いからだけ",
              "大気が全くないため",
              "自転が速いため"
            ],
            "answer": 0,
            "explanation": "金星は厚い二酸化炭素大気をもち、強い温室効果が生じています。",
            "keyword": "金星の温室効果"
          },
          {
            "id": "AS-M3-05",
            "field": "AS",
            "pack": "M",
            "stage": 3,
            "number": 5,
            "themeNumber": 5,
            "theme": "太陽系の惑星以外の天体の様子",
            "question": "冥王星が準惑星に分類される理由に関係する条件はどれですか。",
            "choices": [
              "軌道周辺の他天体を一掃していない",
              "太陽を公転しない",
              "ほぼ球形でない",
              "衛星を必ずもたない"
            ],
            "answer": 0,
            "explanation": "冥王星は太陽を公転しほぼ球形ですが、軌道周辺を支配する条件を満たしません。",
            "keyword": "準惑星"
          },
          {
            "id": "AS-M3-06",
            "field": "AS",
            "pack": "M",
            "stage": 3,
            "number": 6,
            "themeNumber": 6,
            "theme": "天の川銀河の様子",
            "question": "太陽系の位置として適切なものはどれですか。",
            "choices": [
              "銀河円盤の中心から離れた場所",
              "銀河中心の超大質量ブラックホール内部",
              "銀河の外側数百万光年",
              "銀河ハローの最外縁のみ"
            ],
            "answer": 0,
            "explanation": "太陽系は天の川銀河の円盤部、中心から約2万数千光年離れた位置にあります。",
            "keyword": "太陽系の位置"
          },
          {
            "id": "AS-M3-07",
            "field": "AS",
            "pack": "M",
            "stage": 3,
            "number": 7,
            "themeNumber": 7,
            "theme": "宇宙での距離の単位",
            "question": "年周視差が1秒角である恒星までの距離は何パーセクですか。",
            "choices": [
              "1パーセク",
              "1光年",
              "10パーセク",
              "206265パーセク"
            ],
            "answer": 0,
            "explanation": "年周視差1秒角に対応する距離を1パーセクと定義します。",
            "keyword": "パーセク"
          },
          {
            "id": "AS-M3-08",
            "field": "AS",
            "pack": "M",
            "stage": 3,
            "number": 8,
            "themeNumber": 8,
            "theme": "恒星の光",
            "question": "見かけの等級が1等級違う2つの恒星では、明るさの比はおよそ何倍ですか。",
            "choices": [
              "約2.5倍",
              "約10倍",
              "約100倍",
              "同じ"
            ],
            "answer": 0,
            "explanation": "等級は5等級で100倍なので、1等級では約2.512倍です。",
            "keyword": "等級"
          },
          {
            "id": "AS-M3-09",
            "field": "AS",
            "pack": "M",
            "stage": 3,
            "number": 9,
            "themeNumber": 9,
            "theme": "地上で見られる天体現象",
            "question": "毎月日食や月食が起こらない主な理由はどれですか。",
            "choices": [
              "月の公転面が地球の公転面に対して傾いているため",
              "月が公転しないため",
              "太陽が動かないため",
              "地球に大気があるため"
            ],
            "answer": 0,
            "explanation": "月の軌道面が黄道面に対して約5度傾いており、毎月一直線には並びません。",
            "keyword": "月の軌道面"
          },
          {
            "id": "AS-M3-10",
            "field": "AS",
            "pack": "M",
            "stage": 3,
            "number": 10,
            "themeNumber": 10,
            "theme": "宇宙が広がっている証拠",
            "question": "銀河Aは銀河Bの2倍遠く、ハッブルの法則が成り立つとする。後退速度はどうなると予想されますか。",
            "choices": [
              "銀河Aは銀河Bの約2倍",
              "銀河Aは銀河Bの半分",
              "両者は同じ",
              "距離からは推定できない"
            ],
            "answer": 0,
            "explanation": "後退速度は距離に比例するため、2倍遠ければ約2倍の速度になります。",
            "keyword": "宇宙膨張"
          }
        ]
      }
    ]
  },
  {
    "id": "fossil",
    "icon": "🦴",
    "name": "化石",
    "subtitle": "地層・地球の歴史",
    "color": "#b88446",
    "code": "HS",
    "stages": [
      {
        "name": "Stage 1 基礎",
        "questions": [
          {
            "id": "HS-M1-01",
            "field": "HS",
            "pack": "M",
            "stage": 1,
            "number": 1,
            "themeNumber": 1,
            "theme": "冥王代",
            "question": "地球が形成された直後の最も古い時代を何といいますか。",
            "choices": [
              "冥王代",
              "古生代",
              "中生代",
              "新生代"
            ],
            "answer": 0,
            "explanation": "地球形成から約40億年前頃までを冥王代と呼びます。",
            "keyword": "冥王代"
          },
          {
            "id": "HS-M1-02",
            "field": "HS",
            "pack": "M",
            "stage": 1,
            "number": 2,
            "themeNumber": 2,
            "theme": "始生代",
            "question": "始生代に存在したと考えられる初期生命として代表的なものはどれですか。",
            "choices": [
              "原核生物",
              "恐竜",
              "哺乳類",
              "被子植物"
            ],
            "answer": 0,
            "explanation": "始生代には原核生物などの初期生命が存在していました。",
            "keyword": "原核生物"
          },
          {
            "id": "HS-M1-03",
            "field": "HS",
            "pack": "M",
            "stage": 1,
            "number": 3,
            "themeNumber": 3,
            "theme": "原生代",
            "question": "原生代に大気中の酸素が増えた主な要因はどれですか。",
            "choices": [
              "光合成生物の活動",
              "火山が酸素を大量放出",
              "隕石が酸素を運搬",
              "海水が消滅"
            ],
            "answer": 0,
            "explanation": "シアノバクテリアなどの光合成によって酸素が蓄積しました。",
            "keyword": "酸素濃度上昇"
          },
          {
            "id": "HS-M1-04",
            "field": "HS",
            "pack": "M",
            "stage": 1,
            "number": 4,
            "themeNumber": 4,
            "theme": "古生代",
            "question": "古生代初期に生物の種類が急増した現象を何といいますか。",
            "choices": [
              "カンブリア爆発",
              "大量絶滅だけ",
              "大酸化イベント",
              "全球凍結"
            ],
            "answer": 0,
            "explanation": "カンブリア紀に多様な動物群が化石記録に急増しました。",
            "keyword": "カンブリア爆発"
          },
          {
            "id": "HS-M1-05",
            "field": "HS",
            "pack": "M",
            "stage": 1,
            "number": 5,
            "themeNumber": 5,
            "theme": "中生代",
            "question": "中生代に繁栄した陸上脊椎動物はどれですか。",
            "choices": [
              "恐竜",
              "三葉虫",
              "フズリナ",
              "ナウマンゾウだけ"
            ],
            "answer": 0,
            "explanation": "恐竜は中生代に繁栄しました。",
            "keyword": "恐竜"
          },
          {
            "id": "HS-M1-06",
            "field": "HS",
            "pack": "M",
            "stage": 1,
            "number": 6,
            "themeNumber": 6,
            "theme": "新生代",
            "question": "新生代に大きく繁栄した動物群はどれですか。",
            "choices": [
              "哺乳類",
              "三葉虫",
              "恐竜だけ",
              "フズリナ"
            ],
            "answer": 0,
            "explanation": "恐竜絶滅後、新生代には哺乳類が多様化しました。",
            "keyword": "哺乳類"
          },
          {
            "id": "HS-M1-07",
            "field": "HS",
            "pack": "M",
            "stage": 1,
            "number": 7,
            "themeNumber": 7,
            "theme": "地層",
            "question": "地層が下から上へ順に堆積した場合、一般に古い地層はどこにありますか。",
            "choices": [
              "下位",
              "上位",
              "中央だけ",
              "場所によらず必ず同じ"
            ],
            "answer": 0,
            "explanation": "地層累重の法則により、変形していなければ下ほど古いです。",
            "keyword": "地層累重の法則"
          },
          {
            "id": "HS-M1-08",
            "field": "HS",
            "pack": "M",
            "stage": 1,
            "number": 8,
            "themeNumber": 8,
            "theme": "化石",
            "question": "生物のからだの一部が保存された化石を何といいますか。",
            "choices": [
              "体化石",
              "生痕化石",
              "示相化石だけ",
              "鍵層"
            ],
            "answer": 0,
            "explanation": "骨・殻・葉など生物体の一部が保存されたものが体化石です。",
            "keyword": "体化石"
          },
          {
            "id": "HS-M1-09",
            "field": "HS",
            "pack": "M",
            "stage": 1,
            "number": 9,
            "themeNumber": 9,
            "theme": "層序",
            "question": "離れた地域の地層を年代的に対応づける作業を何といいますか。",
            "choices": [
              "地層対比",
              "風化",
              "変成作用",
              "核融合"
            ],
            "answer": 0,
            "explanation": "化石や火山灰層などを用いて地層を対応づけます。",
            "keyword": "地層対比"
          },
          {
            "id": "HS-M1-10",
            "field": "HS",
            "pack": "M",
            "stage": 1,
            "number": 10,
            "themeNumber": 10,
            "theme": "堆積",
            "question": "流水によって運ばれた粒子が沈む作用を何といいますか。",
            "choices": [
              "堆積",
              "侵食",
              "風化",
              "変成"
            ],
            "answer": 0,
            "explanation": "運搬された砕屑物が沈み積もることが堆積です。",
            "keyword": "堆積"
          }
        ]
      },
      {
        "name": "Stage 2 標準",
        "questions": [
          {
            "id": "HS-M2-01",
            "field": "HS",
            "pack": "M",
            "stage": 2,
            "number": 1,
            "themeNumber": 1,
            "theme": "冥王代",
            "question": "冥王代の地球で起こったと考えられることはどれですか。",
            "choices": [
              "地球内部の分化と地殻の形成",
              "恐竜の繁栄",
              "被子植物の出現",
              "人類の進化"
            ],
            "answer": 0,
            "explanation": "初期地球では高温状態から核・マントル・地殻への分化が進みました。",
            "keyword": "地球の分化"
          },
          {
            "id": "HS-M2-02",
            "field": "HS",
            "pack": "M",
            "stage": 2,
            "number": 2,
            "themeNumber": 2,
            "theme": "始生代",
            "question": "ストロマトライトの形成に深く関係した生物はどれですか。",
            "choices": [
              "シアノバクテリア",
              "三葉虫",
              "アンモナイト",
              "恐竜"
            ],
            "answer": 0,
            "explanation": "シアノバクテリアの活動によって層状のストロマトライトが形成されました。",
            "keyword": "ストロマトライト"
          },
          {
            "id": "HS-M2-03",
            "field": "HS",
            "pack": "M",
            "stage": 2,
            "number": 3,
            "themeNumber": 3,
            "theme": "原生代",
            "question": "真核生物の特徴として正しいものはどれですか。",
            "choices": [
              "核膜で囲まれた核をもつ",
              "DNAをもたない",
              "必ず多細胞である",
              "光合成だけを行う"
            ],
            "answer": 0,
            "explanation": "真核生物は核膜で囲まれた核や細胞小器官をもちます。",
            "keyword": "真核生物"
          },
          {
            "id": "HS-M2-04",
            "field": "HS",
            "pack": "M",
            "stage": 2,
            "number": 4,
            "themeNumber": 4,
            "theme": "古生代",
            "question": "古生代を代表する示準化石はどれですか。",
            "choices": [
              "三葉虫",
              "アンモナイト",
              "ナウマンゾウ",
              "ビカリア"
            ],
            "answer": 0,
            "explanation": "三葉虫は古生代に広く繁栄し、示準化石として用いられます。",
            "keyword": "三葉虫"
          },
          {
            "id": "HS-M2-05",
            "field": "HS",
            "pack": "M",
            "stage": 2,
            "number": 5,
            "themeNumber": 5,
            "theme": "中生代",
            "question": "中生代の示準化石として代表的なものはどれですか。",
            "choices": [
              "アンモナイト",
              "三葉虫",
              "ビカリア",
              "貨幣石"
            ],
            "answer": 0,
            "explanation": "アンモナイトは中生代に広く分布し、進化が速かったため示準化石になります。",
            "keyword": "アンモナイト"
          },
          {
            "id": "HS-M2-06",
            "field": "HS",
            "pack": "M",
            "stage": 2,
            "number": 6,
            "themeNumber": 6,
            "theme": "新生代",
            "question": "第四紀の特徴として適切なものはどれですか。",
            "choices": [
              "氷期と間氷期が繰り返された",
              "恐竜が初めて出現した",
              "大気中に酸素が初めて生じた",
              "月が形成された"
            ],
            "answer": 0,
            "explanation": "第四紀には寒冷な氷期と比較的温暖な間氷期が繰り返されました。",
            "keyword": "氷期"
          },
          {
            "id": "HS-M2-07",
            "field": "HS",
            "pack": "M",
            "stage": 2,
            "number": 7,
            "themeNumber": 7,
            "theme": "地層",
            "question": "地層が波状に曲がった構造を何といいますか。",
            "choices": [
              "しゅう曲",
              "断層",
              "不整合",
              "級化層理"
            ],
            "answer": 0,
            "explanation": "地層が圧縮などで曲げられた構造がしゅう曲です。",
            "keyword": "しゅう曲"
          },
          {
            "id": "HS-M2-08",
            "field": "HS",
            "pack": "M",
            "stage": 2,
            "number": 8,
            "themeNumber": 8,
            "theme": "化石",
            "question": "生物の足跡や巣穴など、生活の跡が残った化石はどれですか。",
            "choices": [
              "生痕化石",
              "体化石",
              "火山灰",
              "変成岩"
            ],
            "answer": 0,
            "explanation": "足跡、巣穴、ふんなどは生痕化石です。",
            "keyword": "生痕化石"
          },
          {
            "id": "HS-M2-09",
            "field": "HS",
            "pack": "M",
            "stage": 2,
            "number": 9,
            "themeNumber": 9,
            "theme": "層序",
            "question": "短時間に広い範囲へ堆積した火山灰層は、地層対比で何として使われますか。",
            "choices": [
              "鍵層",
              "基盤岩だけ",
              "断層",
              "岩脈"
            ],
            "answer": 0,
            "explanation": "同じ噴火由来の火山灰層は同時面として鍵層になります。",
            "keyword": "鍵層"
          },
          {
            "id": "HS-M2-10",
            "field": "HS",
            "pack": "M",
            "stage": 2,
            "number": 10,
            "themeNumber": 10,
            "theme": "堆積",
            "question": "流水中で粒の大きいものから先に沈みやすい主な理由はどれですか。",
            "choices": [
              "沈降速度が大きいため",
              "密度が必ず0だから",
              "水温が上がるため",
              "粒が浮力を受けないため"
            ],
            "answer": 0,
            "explanation": "一般に粒径が大きいほど沈降速度が大きく、流速低下時に先に堆積します。",
            "keyword": "粒径"
          }
        ]
      },
      {
        "name": "Stage 3 実践",
        "questions": [
          {
            "id": "HS-M3-01",
            "field": "HS",
            "pack": "M",
            "stage": 3,
            "number": 1,
            "themeNumber": 1,
            "theme": "冥王代",
            "question": "月の形成に関する有力な説はどれですか。",
            "choices": [
              "巨大衝突説",
              "海洋底拡大説",
              "自然選択説",
              "定常宇宙説"
            ],
            "answer": 0,
            "explanation": "原始地球への天体衝突で飛び散った物質から月ができたとする巨大衝突説が有力です。",
            "keyword": "巨大衝突説"
          },
          {
            "id": "HS-M3-02",
            "field": "HS",
            "pack": "M",
            "stage": 3,
            "number": 2,
            "themeNumber": 2,
            "theme": "始生代",
            "question": "始生代の海に縞状鉄鉱層が形成されたことは、何と関係しますか。",
            "choices": [
              "光合成で生じた酸素による鉄の酸化",
              "恐竜の絶滅",
              "大陸氷河の融解だけ",
              "月の形成"
            ],
            "answer": 0,
            "explanation": "海中の鉄イオンが、光合成由来の酸素によって酸化・沈殿しました。",
            "keyword": "縞状鉄鉱層"
          },
          {
            "id": "HS-M3-03",
            "field": "HS",
            "pack": "M",
            "stage": 3,
            "number": 3,
            "themeNumber": 3,
            "theme": "原生代",
            "question": "原生代末に見られるエディアカラ生物群の特徴として適切なものはどれですか。",
            "choices": [
              "大型の多細胞生物を含む",
              "恐竜だけからなる",
              "人類の石器を含む",
              "被子植物だけからなる"
            ],
            "answer": 0,
            "explanation": "エディアカラ生物群には柔らかい体をもつ大型多細胞生物が含まれます。",
            "keyword": "エディアカラ生物群"
          },
          {
            "id": "HS-M3-04",
            "field": "HS",
            "pack": "M",
            "stage": 3,
            "number": 4,
            "themeNumber": 4,
            "theme": "古生代",
            "question": "古生代末の大量絶滅が起こった境界はどれですか。",
            "choices": [
              "ペルム紀末",
              "白亜紀末",
              "第四紀末",
              "ジュラ紀初め"
            ],
            "answer": 0,
            "explanation": "ペルム紀末には地球史上最大規模の大量絶滅が起こりました。",
            "keyword": "ペルム紀末大量絶滅"
          },
          {
            "id": "HS-M3-05",
            "field": "HS",
            "pack": "M",
            "stage": 3,
            "number": 5,
            "themeNumber": 5,
            "theme": "中生代",
            "question": "白亜紀末の大量絶滅の原因として有力なものはどれですか。",
            "choices": [
              "巨大隕石衝突",
              "月の消滅",
              "海洋の完全蒸発",
              "地球自転の停止"
            ],
            "answer": 0,
            "explanation": "メキシコのチクシュルーブ衝突などが大量絶滅の主要因と考えられています。",
            "keyword": "白亜紀末大量絶滅"
          },
          {
            "id": "HS-M3-06",
            "field": "HS",
            "pack": "M",
            "stage": 3,
            "number": 6,
            "themeNumber": 6,
            "theme": "新生代",
            "question": "人類の進化が主に進んだ時代はどれですか。",
            "choices": [
              "新生代",
              "冥王代",
              "始生代",
              "古生代初期だけ"
            ],
            "answer": 0,
            "explanation": "人類は新生代後半に出現し進化しました。",
            "keyword": "人類進化"
          },
          {
            "id": "HS-M3-07",
            "field": "HS",
            "pack": "M",
            "stage": 3,
            "number": 7,
            "themeNumber": 7,
            "theme": "地層",
            "question": "傾いた古い地層が侵食され、その上に新しい水平な地層が重なる境界はどれですか。",
            "choices": [
              "傾斜不整合",
              "整合",
              "断層面だけ",
              "海嶺"
            ],
            "answer": 0,
            "explanation": "傾斜した下位層と水平な上位層の間の不整合を傾斜不整合といいます。",
            "keyword": "傾斜不整合"
          },
          {
            "id": "HS-M3-08",
            "field": "HS",
            "pack": "M",
            "stage": 3,
            "number": 8,
            "themeNumber": 8,
            "theme": "化石",
            "question": "示準化石に適した生物の条件はどれですか。",
            "choices": [
              "生存期間が短く分布が広い",
              "生存期間が長く分布が狭い",
              "化石にならない",
              "深海にしかいない"
            ],
            "answer": 0,
            "explanation": "短い地質時代に広く分布した生物は地層の年代決定に適します。",
            "keyword": "示準化石"
          },
          {
            "id": "HS-M3-09",
            "field": "HS",
            "pack": "M",
            "stage": 3,
            "number": 9,
            "themeNumber": 9,
            "theme": "層序",
            "question": "ある地層でアンモナイト化石が見つかった。地層の時代として最も可能性が高いものはどれですか。",
            "choices": [
              "中生代",
              "始生代",
              "冥王代",
              "第四紀だけ"
            ],
            "answer": 0,
            "explanation": "アンモナイトは中生代の代表的な示準化石です。",
            "keyword": "示準化石による年代決定"
          },
          {
            "id": "HS-M3-10",
            "field": "HS",
            "pack": "M",
            "stage": 3,
            "number": 10,
            "themeNumber": 10,
            "theme": "堆積",
            "question": "下から上へ粒が細かくなる級化層理は、どのような変化を示しますか。",
            "choices": [
              "流れが次第に弱くなった",
              "流れが次第に強くなった",
              "堆積が全くなかった",
              "火成作用が起きた"
            ],
            "answer": 0,
            "explanation": "流れが弱まるにつれ、大きな粒から小さな粒へ順に堆積します。",
            "keyword": "級化層理"
          }
        ]
      }
    ]
  },
  {
    "id": "env",
    "icon": "🌿",
    "name": "環境",
    "subtitle": "自然災害・資源・地球環境",
    "color": "#4c9a65",
    "code": "EN",
    "stages": [
      {
        "name": "Stage 1 基礎",
        "questions": [
          {
            "id": "EN-M1-01",
            "field": "EN",
            "pack": "M",
            "stage": 1,
            "number": 1,
            "themeNumber": 1,
            "theme": "地震災害",
            "question": "海底の急激な上下変動によって起こる災害はどれですか。",
            "choices": [
              "津波",
              "酸性雨",
              "干ばつ",
              "オゾンホール"
            ],
            "answer": 0,
            "explanation": "海底地震などで海底が上下すると海水が動かされ、津波が発生します。",
            "keyword": "津波"
          },
          {
            "id": "EN-M1-02",
            "field": "EN",
            "pack": "M",
            "stage": 1,
            "number": 2,
            "themeNumber": 2,
            "theme": "気象災害",
            "question": "台風に伴う海面上昇で沿岸が浸水する災害を何といいますか。",
            "choices": [
              "高潮",
              "津波",
              "酸性雨",
              "液状化"
            ],
            "answer": 0,
            "explanation": "低気圧による吸い上げと強風による吹き寄せで高潮が発生します。",
            "keyword": "高潮"
          },
          {
            "id": "EN-M1-03",
            "field": "EN",
            "pack": "M",
            "stage": 1,
            "number": 3,
            "themeNumber": 3,
            "theme": "火山災害",
            "question": "火砕流の特徴として正しいものはどれですか。",
            "choices": [
              "高温の火山灰や岩片が高速で流れ下る",
              "溶岩だけがゆっくり流れる",
              "海水が山を上る",
              "地震波の一種である"
            ],
            "answer": 0,
            "explanation": "火砕流は高温の火山灰・軽石・火山ガスなどが高速で流下する現象です。",
            "keyword": "火砕流"
          },
          {
            "id": "EN-M1-04",
            "field": "EN",
            "pack": "M",
            "stage": 1,
            "number": 4,
            "themeNumber": 4,
            "theme": "天然資源",
            "question": "石油・石炭・天然ガスをまとめて何といいますか。",
            "choices": [
              "化石燃料",
              "再生可能資源",
              "金属資源",
              "水資源だけ"
            ],
            "answer": 0,
            "explanation": "過去の生物由来の有機物が変化してできた燃料を化石燃料といいます。",
            "keyword": "化石燃料"
          },
          {
            "id": "EN-M1-05",
            "field": "EN",
            "pack": "M",
            "stage": 1,
            "number": 5,
            "themeNumber": 5,
            "theme": "防災と減災",
            "question": "災害による被害を完全に防げないことを前提に、被害を小さくする考え方を何といいますか。",
            "choices": [
              "減災",
              "核融合",
              "風化",
              "適者生存"
            ],
            "answer": 0,
            "explanation": "減災は災害発生を前提として人的・物的被害を減らす考え方です。",
            "keyword": "減災"
          },
          {
            "id": "EN-M1-06",
            "field": "EN",
            "pack": "M",
            "stage": 1,
            "number": 6,
            "themeNumber": 6,
            "theme": "気候変動",
            "question": "気候と天気の違いとして正しいものはどれですか。",
            "choices": [
              "気候は長期間の平均的状態、天気は短期間の状態",
              "気候は1日の状態だけ",
              "天気は30年以上の平均だけ",
              "両者は完全に同じ"
            ],
            "answer": 0,
            "explanation": "気候は長期間の統計的な大気状態を指します。",
            "keyword": "気候"
          },
          {
            "id": "EN-M1-07",
            "field": "EN",
            "pack": "M",
            "stage": 1,
            "number": 7,
            "themeNumber": 7,
            "theme": "地球温暖化",
            "question": "地球の平均気温を高める働きをもつ気体を何といいますか。",
            "choices": [
              "温室効果ガス",
              "希ガスだけ",
              "不活性ガスすべて",
              "火山灰"
            ],
            "answer": 0,
            "explanation": "二酸化炭素やメタンなどは地表からの赤外線を吸収・再放射します。",
            "keyword": "温室効果ガス"
          },
          {
            "id": "EN-M1-08",
            "field": "EN",
            "pack": "M",
            "stage": 1,
            "number": 8,
            "themeNumber": 8,
            "theme": "エルニーニョ",
            "question": "エルニーニョ現象では、赤道太平洋東部の海面水温がどうなりますか。",
            "choices": [
              "平年より高くなる",
              "平年より低くなる",
              "必ず凍結する",
              "変化しない"
            ],
            "answer": 0,
            "explanation": "エルニーニョ時には赤道太平洋東部から中部の海面水温が高くなります。",
            "keyword": "エルニーニョ現象"
          },
          {
            "id": "EN-M1-09",
            "field": "EN",
            "pack": "M",
            "stage": 1,
            "number": 9,
            "themeNumber": 9,
            "theme": "酸性雨",
            "question": "酸性雨の主な原因物質はどれですか。",
            "choices": [
              "硫黄酸化物と窒素酸化物",
              "酸素と窒素",
              "水素とヘリウム",
              "オゾンだけ"
            ],
            "answer": 0,
            "explanation": "化石燃料燃焼などで生じる硫黄酸化物・窒素酸化物が酸をつくります。",
            "keyword": "酸性雨"
          },
          {
            "id": "EN-M1-10",
            "field": "EN",
            "pack": "M",
            "stage": 1,
            "number": 10,
            "themeNumber": 10,
            "theme": "オゾン層破壊",
            "question": "オゾン層破壊に深く関係する物質はどれですか。",
            "choices": [
              "フロン類",
              "酸素",
              "窒素",
              "水蒸気だけ"
            ],
            "answer": 0,
            "explanation": "フロン由来の塩素原子が成層圏でオゾン分解を促進します。",
            "keyword": "フロン"
          }
        ]
      },
      {
        "name": "Stage 2 標準",
        "questions": [
          {
            "id": "EN-M2-01",
            "field": "EN",
            "pack": "M",
            "stage": 2,
            "number": 1,
            "themeNumber": 1,
            "theme": "地震災害",
            "question": "液状化が起こりやすい地盤はどれですか。",
            "choices": [
              "水を多く含むゆるい砂地盤",
              "硬い岩盤",
              "乾燥した花こう岩",
              "凍結した永久凍土だけ"
            ],
            "answer": 0,
            "explanation": "地下水位が高いゆるい砂地盤では、強い揺れで液状化が起こりやすいです。",
            "keyword": "液状化"
          },
          {
            "id": "EN-M2-02",
            "field": "EN",
            "pack": "M",
            "stage": 2,
            "number": 2,
            "themeNumber": 2,
            "theme": "気象災害",
            "question": "短時間の強い雨で都市の排水能力を超えたとき起こりやすいものはどれですか。",
            "choices": [
              "内水氾濫",
              "海洋底拡大",
              "火砕流",
              "地盤隆起"
            ],
            "answer": 0,
            "explanation": "下水道などで排水しきれず、市街地に水があふれる現象が内水氾濫です。",
            "keyword": "内水氾濫"
          },
          {
            "id": "EN-M2-03",
            "field": "EN",
            "pack": "M",
            "stage": 2,
            "number": 3,
            "themeNumber": 3,
            "theme": "火山災害",
            "question": "積雪した火山で噴火が起こると発生しやすい災害はどれですか。",
            "choices": [
              "融雪型火山泥流",
              "酸性雨だけ",
              "高潮",
              "液状化だけ"
            ],
            "answer": 0,
            "explanation": "噴火熱で雪が急速に融け、火山灰や土砂と混じって泥流になることがあります。",
            "keyword": "融雪型火山泥流"
          },
          {
            "id": "EN-M2-04",
            "field": "EN",
            "pack": "M",
            "stage": 2,
            "number": 4,
            "themeNumber": 4,
            "theme": "天然資源",
            "question": "レアメタルの利用に関する課題として適切なものはどれですか。",
            "choices": [
              "産出地域の偏りと供給リスク",
              "どこでも無限に採掘できる",
              "再利用できない法律がある",
              "すべて海水から無料で得られる"
            ],
            "answer": 0,
            "explanation": "産地の偏在や採掘・精錬の環境負荷、供給不安が課題です。",
            "keyword": "レアメタル"
          },
          {
            "id": "EN-M2-05",
            "field": "EN",
            "pack": "M",
            "stage": 2,
            "number": 5,
            "themeNumber": 5,
            "theme": "防災と減災",
            "question": "ハザードマップに通常示されるものはどれですか。",
            "choices": [
              "災害想定区域や避難場所",
              "翌日のテスト範囲",
              "地球の内部構造だけ",
              "惑星の軌道"
            ],
            "answer": 0,
            "explanation": "洪水・津波・土砂災害などの想定区域と避難情報が示されます。",
            "keyword": "ハザードマップ"
          },
          {
            "id": "EN-M2-06",
            "field": "EN",
            "pack": "M",
            "stage": 2,
            "number": 6,
            "themeNumber": 6,
            "theme": "気候変動",
            "question": "気候変動の原因には自然要因と何がありますか。",
            "choices": [
              "人為要因",
              "月齢だけ",
              "経度だけ",
              "磁極だけ"
            ],
            "answer": 0,
            "explanation": "火山活動や太陽活動などの自然要因に加え、温室効果ガス排出などの人為要因があります。",
            "keyword": "人為的気候変動"
          },
          {
            "id": "EN-M2-07",
            "field": "EN",
            "pack": "M",
            "stage": 2,
            "number": 7,
            "themeNumber": 7,
            "theme": "地球温暖化",
            "question": "地球温暖化による海面上昇の主な要因はどれですか。",
            "choices": [
              "海水の熱膨張と陸上氷河の融解",
              "海氷の融解だけ",
              "潮汐だけ",
              "海水の蒸発だけ"
            ],
            "answer": 0,
            "explanation": "海水の温度上昇による膨張と、陸上の氷が海へ流入することが主因です。",
            "keyword": "海面上昇"
          },
          {
            "id": "EN-M2-08",
            "field": "EN",
            "pack": "M",
            "stage": 2,
            "number": 8,
            "themeNumber": 8,
            "theme": "エルニーニョ",
            "question": "エルニーニョ現象の発生時、貿易風は一般にどうなりますか。",
            "choices": [
              "弱まる",
              "極端に強まるだけ",
              "向きが南北になる",
              "完全に無関係"
            ],
            "answer": 0,
            "explanation": "貿易風が弱まり、暖水が東へ広がりやすくなります。",
            "keyword": "貿易風"
          },
          {
            "id": "EN-M2-09",
            "field": "EN",
            "pack": "M",
            "stage": 2,
            "number": 9,
            "themeNumber": 9,
            "theme": "酸性雨",
            "question": "酸性雨による影響として適切なものはどれですか。",
            "choices": [
              "湖沼や土壌の酸性化",
              "地球の自転停止",
              "オゾン層の形成",
              "海面の急低下"
            ],
            "answer": 0,
            "explanation": "酸性化は生態系や森林、建造物などに影響を及ぼします。",
            "keyword": "酸性化"
          },
          {
            "id": "EN-M2-10",
            "field": "EN",
            "pack": "M",
            "stage": 2,
            "number": 10,
            "themeNumber": 10,
            "theme": "オゾン層破壊",
            "question": "オゾンホールが顕著に観測される地域はどこですか。",
            "choices": [
              "南極上空",
              "赤道上空だけ",
              "日本上空だけ",
              "北極海面"
            ],
            "answer": 0,
            "explanation": "南極の春に成層圏の特殊な低温条件のもとでオゾン減少が顕著になります。",
            "keyword": "オゾンホール"
          }
        ]
      },
      {
        "name": "Stage 3 実践",
        "questions": [
          {
            "id": "EN-M3-01",
            "field": "EN",
            "pack": "M",
            "stage": 3,
            "number": 1,
            "themeNumber": 1,
            "theme": "地震災害",
            "question": "長周期地震動で特に大きく揺れやすい建物はどれですか。",
            "choices": [
              "高層建築物",
              "低い石垣だけ",
              "地下の岩盤",
              "平屋だけ"
            ],
            "answer": 0,
            "explanation": "長い周期をもつ高層建築物は長周期地震動と共振しやすい場合があります。",
            "keyword": "長周期地震動"
          },
          {
            "id": "EN-M3-02",
            "field": "EN",
            "pack": "M",
            "stage": 3,
            "number": 2,
            "themeNumber": 2,
            "theme": "気象災害",
            "question": "線状降水帯が形成された場合に警戒すべきことはどれですか。",
            "choices": [
              "同じ地域で大雨が長時間続くこと",
              "必ず晴天になること",
              "地震が発生すること",
              "海水温が0℃になること"
            ],
            "answer": 0,
            "explanation": "発達した積乱雲が列をなし、同じ場所に次々とかかることで大雨が続きます。",
            "keyword": "線状降水帯"
          },
          {
            "id": "EN-M3-03",
            "field": "EN",
            "pack": "M",
            "stage": 3,
            "number": 3,
            "themeNumber": 3,
            "theme": "火山災害",
            "question": "噴火警戒レベルの役割として適切なものはどれですか。",
            "choices": [
              "必要な防災対応や警戒範囲を示す",
              "噴火時刻を秒単位で予言する",
              "火山の高さを示す",
              "マグマの化学式を示す"
            ],
            "answer": 0,
            "explanation": "噴火警戒レベルは火山活動に応じた警戒範囲と防災対応を段階的に示します。",
            "keyword": "噴火警戒レベル"
          },
          {
            "id": "EN-M3-04",
            "field": "EN",
            "pack": "M",
            "stage": 3,
            "number": 4,
            "themeNumber": 4,
            "theme": "天然資源",
            "question": "天然資源を持続的に利用する方法として最も適切なものはどれですか。",
            "choices": [
              "リサイクルと省資源を進める",
              "採掘量を無制限に増やす",
              "廃棄物をすべて埋める",
              "資源価格だけで判断する"
            ],
            "answer": 0,
            "explanation": "循環利用と使用量削減により新規採掘と環境負荷を抑えられます。",
            "keyword": "資源循環"
          },
          {
            "id": "EN-M3-05",
            "field": "EN",
            "pack": "M",
            "stage": 3,
            "number": 5,
            "themeNumber": 5,
            "theme": "防災と減災",
            "question": "防災で「自助・共助・公助」を組み合わせる理由として適切なのはどれですか。",
            "choices": [
              "一つの主体だけでは対応に限界があるため",
              "公助が必ず不要だから",
              "災害は個人だけで防げるため",
              "地域差が全くないため"
            ],
            "answer": 0,
            "explanation": "個人、地域、行政が役割を分担し補い合うことで被害を減らします。",
            "keyword": "自助・共助・公助"
          },
          {
            "id": "EN-M3-06",
            "field": "EN",
            "pack": "M",
            "stage": 3,
            "number": 6,
            "themeNumber": 6,
            "theme": "気候変動",
            "question": "気候変動への適応策にあたるものはどれですか。",
            "choices": [
              "高温に強い作物を導入する",
              "温室効果ガス排出を直接減らすだけ",
              "化石燃料消費を増やす",
              "森林を伐採する"
            ],
            "answer": 0,
            "explanation": "適応は避けられない影響に備える対策で、耐暑性作物などが例です。",
            "keyword": "適応策"
          },
          {
            "id": "EN-M3-07",
            "field": "EN",
            "pack": "M",
            "stage": 3,
            "number": 7,
            "themeNumber": 7,
            "theme": "地球温暖化",
            "question": "温暖化の緩和策にあたるものはどれですか。",
            "choices": [
              "再生可能エネルギーへ転換する",
              "堤防を高くするだけ",
              "熱中症警戒情報を出す",
              "作物の品種を変える"
            ],
            "answer": 0,
            "explanation": "緩和策は温室効果ガス排出削減や吸収源拡大を目指します。",
            "keyword": "緩和策"
          },
          {
            "id": "EN-M3-08",
            "field": "EN",
            "pack": "M",
            "stage": 3,
            "number": 8,
            "themeNumber": 8,
            "theme": "エルニーニョ",
            "question": "エルニーニョ現象が日本の天候に与える影響として一般的にみられやすいものはどれですか。",
            "choices": [
              "冷夏や暖冬の傾向",
              "必ず猛暑・厳冬",
              "毎日台風が上陸",
              "降水が完全になくなる"
            ],
            "answer": 0,
            "explanation": "年や季節で異なりますが、日本では冷夏や暖冬になりやすい傾向があります。",
            "keyword": "日本の天候"
          },
          {
            "id": "EN-M3-09",
            "field": "EN",
            "pack": "M",
            "stage": 3,
            "number": 9,
            "themeNumber": 9,
            "theme": "酸性雨",
            "question": "国境を越えた酸性雨対策が必要な理由はどれですか。",
            "choices": [
              "原因物質が大気中を長距離輸送されるため",
              "雨が国境で止まるため",
              "酸性雨は海中だけで生じるため",
              "原因が地震だけだから"
            ],
            "answer": 0,
            "explanation": "大気汚染物質は風によって遠方へ運ばれ、越境汚染を起こします。",
            "keyword": "越境大気汚染"
          },
          {
            "id": "EN-M3-10",
            "field": "EN",
            "pack": "M",
            "stage": 3,
            "number": 10,
            "themeNumber": 10,
            "theme": "オゾン層破壊",
            "question": "オゾン層保護のための国際的な取り決めはどれですか。",
            "choices": [
              "モントリオール議定書",
              "京都議定書だけ",
              "ラムサール条約",
              "ワシントン条約"
            ],
            "answer": 0,
            "explanation": "モントリオール議定書はオゾン層破壊物質の生産・消費を規制しました。",
            "keyword": "モントリオール議定書"
          }
        ]
      }
    ]
  }
]
};
