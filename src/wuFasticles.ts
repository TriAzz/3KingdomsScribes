export interface Fasticle {
  id: number;
  name: string;
  mainPeople: string[];
  status: {
    text: "Completed" | "In Development" | "To Be Added";
    color: string;
  };
}

export const wuFasticles: Fasticle[] = [
  { id: 1, name: "Biographies of Sun Who Destroys Barbarians, and Sun Who Attacks Rebels", mainPeople: ["Sun Jian", "Sun Ce"], status: { text: "To Be Added", color: "#9e9e9e" } },
  { id: 2, name: "Biography of the Lord of Wu", mainPeople: ["Sun Quan"], status: { text: "To Be Added", color: "#9e9e9e" } },
  { id: 3, name: "Biographies of the three heirs", mainPeople: ["Sun Liang", "Sun Xiu", "Sun Hao"], status: { text: "To Be Added", color: "#9e9e9e" } },
  { id: 4, name: "Biographies of Liu Yao, Taishi Ci, and Shi Xie", mainPeople: ["Liu Yao", "Taishi Ci", "Shi Xie", "Ze Rong", "Liu Ji"], status: { text: "To Be Added", color: "#9e9e9e" } },
  { id: 5, name: "Biographies of concubines and ladies", mainPeople: ["Lady Wu", "Wu Jing", "Lady Xie", "Lady Xu", "Bu Lianshi", "Empress Dayi", "Empress Jinghuai", "Empress Pan", "Quan Huijie", "Empress Zhu", "Empress Dowager He", "Teng Fanglan"], status: { text: "To Be Added", color: "#9e9e9e" } },
  { id: 6, name: "Biographies of nobles", mainPeople: ["Sun Jing", "Sun Yu", "Sun Jiao", "Sun Huan", "Sun Ben", "Sun Fu", "Sun Yi", "Sun Kuang", "Sun Shao", "Sun Huan"], status: { text: "To Be Added", color: "#9e9e9e" } },
  { id: 7, name: "Biographies of Zhang, Gu, Zhuge, and Bu", mainPeople: ["Zhang Zhao", "Zhang Cheng", "Zhang Xiu", "Gu Yong", "Gu Shao", "Gu Tan", "Gu Cheng", "Zhuge Jin", "Bu Zhi"], status: { text: "To Be Added", color: "#9e9e9e" } },
  { id: 8, name: "Biographies of Zhang, Yan, Cheng, Kan, and Xue", mainPeople: ["Zhang Hong", "Yan Jun", "Cheng Bing", "Kan Ze", "Xue Zong"], status: { text: "To Be Added", color: "#9e9e9e" } },
  { id: 9, name: "Biographies of Zhou Yu, Lu Su, and Lü Meng", mainPeople: ["Zhou Yu", "Lu Su", "Lü Meng"], status: { text: "To Be Added", color: "#9e9e9e" } },
  { id: 10, name: "Biographies of Cheng, Huang, Han, Jiang, Zhou, Chen, Dong, Gan, Ling, Xu, Pan, and Ding", mainPeople: ["Cheng Pu", "Huang Gai", "Han Dang", "Jiang Qin", "Zhou Tai", "Chen Wu", "Dong Xi", "Gan Ning", "Ling Tong", "Xu Sheng", "Pan Zhang", "Ding Feng"], status: { text: "To Be Added", color: "#9e9e9e" } },
  { id: 11, name: "Biographies of Zhu Zhi, Zhu Ran, Lü Fan, and Zhu Huan", mainPeople: ["Zhu Zhi", "Zhu Ran", "Lü Fan", "Zhu Huan", "Shi Ji", "Zhu Yi"], status: { text: "To Be Added", color: "#9e9e9e" } },
  { id: 12, name: "Biographies of Yu, Lu, Zhang, Luo, Lu, Wu, and Zhu", mainPeople: ["Yu Fan", "Lu Ji", "Zhang Wen", "Luo Tong", "Lu Mao", "Wu Can", "Zhu Ju"], status: { text: "To Be Added", color: "#9e9e9e" } },
  { id: 13, name: "Biography of Lu Xun", mainPeople: ["Lu Xun", "Lu Kang"], status: { text: "To Be Added", color: "#9e9e9e" } },
  { id: 14, name: "Biographies of the five sons of the Lord of Wu", mainPeople: ["Sun Deng", "Sun Lü", "Sun He", "Sun Ba", "Sun Fen"], status: { text: "To Be Added", color: "#9e9e9e" } },
  { id: 15, name: "Biographies of He, Quan, Lü, Zhou, and Zhongli", mainPeople: ["He Qi", "Quan Cong", "Lü Dai", "Zhou Fang", "Zhongli Mu"], status: { text: "To Be Added", color: "#9e9e9e" } },
  { id: 16, name: "Biographies of Pan Jun and Lu Kai", mainPeople: ["Pan Jun", "Lu Kai"], status: { text: "To Be Added", color: "#9e9e9e" } },
  { id: 17, name: "Biographies of Shi Yi and Hu Zong", mainPeople: ["Shi Yi", "Hu Zong"], status: { text: "To Be Added", color: "#9e9e9e" } },
  { id: 18, name: "Biographies of Wu Fan, Liu Dun, and Zhao Da", mainPeople: ["Wu Fan", "Liu Dun", "Zhao Da"], status: { text: "To Be Added", color: "#9e9e9e" } },
  { id: 19, name: "Biographies of Zhuge, Teng, the two Suns, and Puyang", mainPeople: ["Zhuge Ke", "Teng Yin", "Sun Jun", "Sun Chen", "Puyang Xing"], status: { text: "To Be Added", color: "#9e9e9e" } },
  { id: 20, name: "Biographies of Wang, Lou, He, Wei, and Hua", mainPeople: ["Wang Fan", "Lou Xuan", "He Shao", "Wei Zhao", "Hua He"], status: { text: "To Be Added", color: "#9e9e9e" } },
];
