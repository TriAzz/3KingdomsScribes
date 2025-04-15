import React from "react";
import { useParams } from "react-router-dom";

const emperorWuTranslation = `
The Annals of Emperor Wu

Cao Cao, posthumously known as Emperor Wu, was a native of Qiao in Pei State. His surname was Cao, given name Cao, and his courtesy name was Mengde. He was a descendant of Cao Can, who served as Chancellor during the Han dynasty. (According to the Biography of Cao Man: Emperor Wu was also called Jili, with the childhood name Aman. The Wei Book by Wang Shen states that his ancestry traces back to the Yellow Emperor. During the reign of Emperor Gao Yang, one of Luzhong’s sons was named An, from whom the Cao surname originated. When King Wu of Zhou defeated the Shang, he enfeoffed Cao Xia at Zhu. During the Spring and Autumn period, the family participated in alliances, but by the Warring States period, they were destroyed by Chu. The descendants dispersed, some settling in Pei. When Emperor Gaozu of Han rose to power, Cao Can was enfeoffed as Marquis of Pingyang for his merits. The title was passed down through the generations, sometimes interrupted but later restored, and the direct line continued to Rongcheng.)

During the reign of Emperor Huan, Cao Teng (Cao Cao’s adoptive grandfather) served as Chief Attendant at the Yellow Gates and was ennobled as Marquis of Feiting. (According to the Continued Book of Han by Sima Biao: Teng’s father, Jie, styled Yuanwei, was renowned for his kindness. Once, a neighbor lost a pig that resembled Jie’s. The neighbor came to claim it, but Jie did not argue. Later, the lost pig returned home, and the owner, ashamed, brought the wrongly claimed pig back and apologized. Jie accepted it with a smile, earning respect in the community. Jie had three sons: Boxin, Zhongxing, and Shuxing. Teng, styled Jixing, became a palace attendant when young. In the first year of Yongning, Empress Dowager Deng ordered the selection of prudent young men among the palace attendants to serve the Crown Prince, and Teng was chosen. The Crown Prince favored Teng, granting him special rewards. When Emperor Shun ascended the throne, Teng became a minor palace attendant, eventually rising to Chief Attendant at the Yellow Gates. He served in the palace for over thirty years, under four emperors, without ever committing a fault. He promoted many talented individuals, such as Yu Fang of Chenliu, Bian Shao, Yan Gu of Nanyang, Zhang Wen, Zhang Huan of Hongnong, and Tang Xi of Yingchuan, all of whom reached high office. Teng never boasted of his achievements. The Prefect of Shu, while auditing, tried to curry favor with Teng, and the Inspector of Yizhou, Zhong Hao, found a letter to the Prefect and reported Teng for improper conduct. The emperor said, “The letter came from outside; Teng did not send it. He is not at fault.” The accusation was dismissed. Teng was unconcerned and praised Zhong Hao for his uprightness. Later, Zhong Hao became Minister over the Masses and said, “Today I am a minister thanks to Chief Attendant Cao’s favor.” Teng’s conduct was always of this kind. When Emperor Huan ascended, Teng was recognized as a loyal and filial servant of previous emperors and was ennobled as Marquis of Feiting with the special rank of Grand Master. In the third year of Taihe, Teng was posthumously honored as the High Emperor.)

Cao Teng’s adopted son, Cao Song, succeeded him and rose to the position of Grand Commandant. (According to the Continued Book of Han: Song, styled Jugao, was sincere and cautious, known for his loyalty and filial piety. He served as Inspector of the Capital, Minister of Finance, and Minister of Ceremonies, and succeeded Cui Lie as Grand Commandant. In the first year of Huangchu, Song was posthumously honored as Grand Emperor. According to the Biography of Cao Man and the Accounts of the Wei and Jin Dynasties, some say Song was originally of the Xiahou clan, uncle to Xiahou Dun, making Cao Cao and Xiahou Dun paternal cousins.)

Cao Song was the father of Emperor Wu, Cao Cao.`;

export default function WeiFasticleDetail() {
  const { id } = useParams();

  // Only display for first fasticle (Annals of Emperor Wu)
  if (id !== "1") {
    return <div>Fasticle not found or not yet translated.</div>;
  }

  return (
    <div style={{ maxWidth: 700, margin: "2rem auto", padding: "1rem" }}>
      <h1>The Annals of Emperor Wu</h1>
      <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word", fontFamily: "inherit", fontSize: "1.1em" }}>{emperorWuTranslation}</pre>
    </div>
  );
}
