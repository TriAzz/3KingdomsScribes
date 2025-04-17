export interface Fasticle {
  id: number;
  name: string;
  mainPeople: string[];
  status: {
    text: "Completed" | "In Development" | "To Be Added";
    color: string;
  };
}

export const shuFasticles: Fasticle[] = [
  { id: 1, name: "Biographies of the two Governor Lius", mainPeople: ["Liu Yan", "Liu Zhang"], status: { text: "To Be Added", color: "#9e9e9e" } },
  { id: 2, name: "Biography of the Former Lord", mainPeople: ["Liu Bei"], status: { text: "To Be Added", color: "#9e9e9e" } },
  { id: 3, name: "Biography of the Later Lord", mainPeople: ["Liu Shan"], status: { text: "To Be Added", color: "#9e9e9e" } },
  { id: 4, name: "Biographies of concubines and sons of the two Lords", mainPeople: ["Lady Gan", "Empress Wu", "Empress Zhang (former)", "Empress Zhang (later)", "Liu Yong", "Liu Li", "Liu Xuan"], status: { text: "To Be Added", color: "#9e9e9e" } },
  { id: 5, name: "Biography of Zhuge Liang", mainPeople: ["Zhuge Liang", "Zhuge Qiao", "Zhuge Zhan", "Dong Jue"], status: { text: "To Be Added", color: "#9e9e9e" } },
  { id: 6, name: "Biographies of Guan, Zhang, Ma, Huang, and Zhao", mainPeople: ["Guan Yu", "Zhang Fei", "Ma Chao", "Huang Zhong", "Zhao Yun"], status: { text: "To Be Added", color: "#9e9e9e" } },
  { id: 7, name: "Biographies of Pang Tong and Fa Zheng", mainPeople: ["Pang Tong", "Fa Zheng"], status: { text: "To Be Added", color: "#9e9e9e" } },
  { id: 8, name: "Biographies of Xu, Mi, Sun, Jian, Yi, and Qin", mainPeople: ["Xu Jing", "Mi Zhu", "Mi Fang", "Sun Qian", "Jian Yong", "Yi Ji", "Qin Mi"], status: { text: "To Be Added", color: "#9e9e9e" } },
  { id: 9, name: "Biographies of Dong, Liu, Ma, Chen, Dong, and Lü", mainPeople: ["Dong He", "Liu Ba", "Ma Liang", "Ma Su", "Chen Zhen", "Dong Yun", "Chen Zhi", "Huang Hao", "Lü Yi"], status: { text: "To Be Added", color: "#9e9e9e" } },
  { id: 10, name: "Biographies of Liu, Peng, Liao, Li, Liu, Wei, and Yang", mainPeople: ["Liu Feng", "Peng Yang", "Liao Li", "Li Yan", "Liu Yan", "Wei Yan", "Yang Yi"], status: { text: "To Be Added", color: "#9e9e9e" } },
  { id: 11, name: "Biographies of Huo, Wang, Xiang, Zhang, Yang, and Fei", mainPeople: ["Huo Jun", "Huo Yi", "Wang Lian", "Xiang Lang", "Xiang Chong", "Zhang Yi", "Yang Hong", "Fei Shi"], status: { text: "To Be Added", color: "#9e9e9e" } },
  { id: 12, name: "Biographies of Du, Zhou, Du, Xu, Meng, Lai, Yin, Li, Qiao, and Xi", mainPeople: ["Du Wei", "Zhou Qun", "Zhang Yu", "Du Qiong", "Xu Ci", "Hu Qian", "Meng Guang", "Lai Min", "Yin Mo", "Li Zhuan", "Qiao Zhou", "Xi Zheng"], status: { text: "To Be Added", color: "#9e9e9e" } },
  { id: 13, name: "Biographies of Huang, Li, Lü, Ma, Wang, and Zhang", mainPeople: ["Huang Quan", "Li Hui", "Lü Kai", "Ma Zhong", "Wang Ping", "Zhang Ni"], status: { text: "To Be Added", color: "#9e9e9e" } },
  { id: 14, name: "Biographies of Jiang Wan, Fei Yi, and Jiang Wei", mainPeople: ["Jiang Wan", "Fei Yi", "Jiang Wei"], status: { text: "To Be Added", color: "#9e9e9e" } },
  { id: 15, name: "Biographies of Deng, Zhang, Zong, and Yang", mainPeople: ["Deng Zhi", "Zhang Yi", "Zong Yu", "Liao Hua", "Yang Xi"], status: { text: "To Be Added", color: "#9e9e9e" } },
];
