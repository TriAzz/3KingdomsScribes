export interface Fasticle {
  id: number;
  name: string;
  mainPeople: string[];
}

export const weiFasticles: Fasticle[] = [
  { id: 1, name: "Annals of Emperor Wu", mainPeople: ["Cao Cao"] },
  { id: 2, name: "Annals of Emperor Wen", mainPeople: ["Cao Pi"] },
  { id: 3, name: "Annals of Emperor Ming", mainPeople: ["Cao Rui"] },
  { id: 4, name: "Annals of the three young emperors", mainPeople: ["Cao Fang", "Cao Mao", "Cao Huan"] },
  { id: 5, name: "Biographies of empresses and concubines", mainPeople: ["Lady Bian", "Lady Zhen", "Guo Nüwang", "Empress Mao", "Empress Guo"] },
  { id: 6, name: "Biographies of Dong, the two Yuans, and Liu", mainPeople: ["Dong Zhuo", "Yuan Shao", "Yuan Shu", "Liu Biao"] },
  { id: 7, name: "Biographies of Lü Bu and Zang Hong", mainPeople: ["Lü Bu", "Zang Hong", "Zhang Miao", "Chen Deng"] },
  { id: 8, name: "Biographies of the two Gongsuns, Tao, and the four Zhangs", mainPeople: ["Gongsun Zan", "Gongsun Du", "Tao Qian", "Zhang Yang", "Zhang Yan", "Zhang Xiu", "Zhang Lu"] },
  { id: 9, name: "Biographies of the Xiahous and Caos", mainPeople: ["Xiahou Dun", "Xiahou Yuan", "Cao Ren", "Cao Chun", "Cao Hong", "Cao Xiu", "Cao Zhen", "Cao Shuang", "Xiahou Shang", "Xiahou Xuan", "Han Hao"] },
  { id: 10, name: "Biographies of Xun Yu, Xun You, and Jia Xu", mainPeople: ["Xun Yu", "Xun You", "Jia Xu"] },
  { id: 11, name: "Biographies of Yuan, Zhang, Liang, Guo, Tian, Wang, Bing, and Guan", mainPeople: ["Yuan Huan", "Zhang Fan", "Zhang Cheng", "Liang Mao", "Guo Yuan", "Tian Chou", "Wang Xiu", "Bing Yuan", "Guan Ning"] },
  { id: 12, name: "Biographies of Cui, Mao, Xu, He, Xing, and Sima", mainPeople: ["Cui Yan", "Mao Jie", "Xu Yi", "He Kui", "Xing Yong", "Bao Xun", "Sima Zhi"] },
  { id: 13, name: "Biographies of Zhong Yao, Hua Xin, and Wang Lang", mainPeople: ["Zhong Yao", "Hua Xin", "Wang Lang", "Zhong Yu", "Wang Su"] },
  { id: 14, name: "Biographies of Cheng, Dong, Guo, Liu, Jiang, and Liu", mainPeople: ["Cheng Yu", "Cheng Xiao", "Guo Jia", "Dong Zhao", "Liu Ye", "Jiang Ji", "Liu Fang"] },
  { id: 15, name: "Biographies of Liu, Sima, Liang, Zhang, Wen, and Jia", mainPeople: ["Liu Fu", "Liu Jing", "Sima Lang", "Liang Xi", "Zhang Ji (Derong)", "Zhang Ji (Jingzhong)", "Wen Hui", "Jia Kui"] },
  { id: 16, name: "Biographies of Ren, Su, Du, Zheng, and Cang", mainPeople: ["Ren Jun", "Su Ze", "Du Ji", "Zheng Hun", "Cang Ci"] },
  { id: 17, name: "Biographies of Zhang, Yue, Yu, Zhang, and Xu", mainPeople: ["Zhang Liao", "Yue Jin", "Yu Jin", "Zhang He", "Xu Huang"] },
  { id: 18, name: "Biographies of the two Lis, Zang, Wen, Lü, Xu, Dian, the two Pangs, and Yan", mainPeople: ["Li Dian", "Li Tong", "Zang Ba", "Wen Ping", "Lü Qian", "Xu Chu", "Dian Wei", "Pang De", "Pang Yu", "Yan Wen"] },
  { id: 19, name: "Biographies of the princes of Rencheng, Chen, and Xiao", mainPeople: ["Cao Zhang", "Cao Zhi", "Cao Xiong"] },
  { id: 20, name: "Biographies of nobles in Emperors Wu and Wen's time", mainPeople: ["Cao Ang", "Cao Shuo", "Cao Chong", "Cao Ju (Prince of Pengcheng)", "Cao Yu", "Cao Lin (Prince of Pei)", "Cao Gun", "Cao Xuan", "Cao Jun (Prince of Chenliu)", "Cao Ju (Prince of Fanyang)", "Cao Gan", "Cao Zishang", "Cao Biao", "Cao Ziqin", "Cao Zicheng", "Cao Zizheng", "Cao Zijing", "Cao Jun (Duke of Fan)", "Cao Ziji", "Cao Hui", "Cao Mao (Prince of Laoling)", "Cao Xie", "Cao Rui (Prince of Beihai)", "Cao Jian", "Cao Lin (Prince of Donghai)", "Cao Li", "Cao Yong", "Cao Gong", "Cao Yan"] },
  { id: 21, name: "Biographies of Wang, Wei, and the two Lius", mainPeople: ["Wang Can", "Wei Ji", "Liu Yi", "Liu Shao", "Fu Gu"] },
  { id: 22, name: "Biographies of Huan, the two Chens, Xu, Wei, and Lu", mainPeople: ["Huan Jie", "Chen Qun", "Chen Tai", "Chen Jiao", "Xu Xuan", "Wei Zhen", "Lu Yu"] },
  { id: 23, name: "Biographies of He, Chang, Yang, Du, Zhao, and Pei", mainPeople: ["He Qia", "Chang Lin", "Yang Jun", "Du Xi", "Zhao Yan", "Pei Qian"] },
  { id: 24, name: "Biographies of Han, Cui, Gao, Sun, and Wang", mainPeople: ["Han Ji", "Cui Lin", "Gao Rou", "Sun Li", "Wang Guan"] },
  { id: 25, name: "Biographies of Xin Pi, Yang Fu, and Gaotang Long", mainPeople: ["Xin Pi", "Yang Fu", "Gaotang Long"] },
  { id: 26, name: "Biographies of Man, Tian, Qian, and Guo", mainPeople: ["Man Chong", "Tian Yu", "Qian Zhao", "Guo Huai"] },
  { id: 27, name: "Biographies of Xu, Hu, and the two Wangs", mainPeople: ["Xu Miao", "Hu Zhi", "Wang Chang", "Wang Ji"] },
  { id: 28, name: "Biographies of Wang, Guanqiu, Zhuge, Deng and Zhong", mainPeople: ["Wang Ling", "Guanqiu Jian", "Zhuge Dan", "Deng Ai", "Zhong Hui"] },
  { id: 29, name: "Biographies of fangshi and artisans", mainPeople: ["Hua Tuo", "Du Kui", "Zhu Jianping", "Zhou Xuan", "Guan Lu"] },
  { id: 30, name: "Biographies of the Wuhuan, Xianbei, and Dongyi", mainPeople: ["Wuhuan", "Xianbei", "Buyeo", "Goguryeo", "Okjeo", "Yilou", "Yemaek", "Samhan", "Wa (Wajinden)"] },
];
