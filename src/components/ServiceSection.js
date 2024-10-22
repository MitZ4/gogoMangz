import React from "react";
import { Link } from "react-router-dom";
import paimonImage from "../image/paimon.png";
import silverwolfImage from "../image/silverwolf.png";
import yangyangImage from "../image/yangyang.png";
import bangbooImage from "../image/bangboo.png";

const ServiceSection = () => {
  return (
    <section style={styles.section}>
      <Link to="/genshin" style={{...styles.serviceCard, ...styles.genshin}} />
      <Link to="/starrail" style={{...styles.serviceCard, ...styles.starrail}} />
      <Link to="/wutheringWaves" style={{...styles.serviceCard, ...styles.wutheringWaves}} />
      <Link to="/zzz" style={{...styles.serviceCard, ...styles.zzz}} />
    </section>
  );
};

const styles = {
  section: {
    display: "flex",
    justifyContent: "space-around",
    // padding: '50px 0',
    flexWrap: "wrap", // 여러 개의 카드가 줄 바꿈될 수 있도록 설정
  },
  serviceCard: {
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "50vw", // 뷰포트 너비의 30%로 설정
    height: "20vw", // 뷰포트 너비의 30%로 높이 설정 (정사각형 유지)
    backgroundColor: "#f1f1f1",
    borderRadius: "8px",
  },
  genshin: { backgroundImage: `url(${paimonImage})` },
  starrail: { backgroundImage: `url(${silverwolfImage})` },
  wutheringWaves: { backgroundImage: `url(${yangyangImage})` },
  zzz: { backgroundImage: `url(${bangbooImage})` },
};

export default ServiceSection;
