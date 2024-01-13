import s from "./Home.module.scss";
import Slider from "./components/Slider";

const HomeClientPage = () => {
  return (
    <section className={s.materials}>
      <div className="container">
        <div className={s.materials__headingBlock}>
          <h1 className={s.materials__title}>Полезные материалы</h1>
          <p className={s.materials__descr}>
            Собрали для вас полезные исследования схемы кормления и другие
            материалы, которые пригодятся для лучших результатов на вашем
            хозяйстве
          </p>
        </div>
      </div>
      <Slider />
    </section>
  );
};

export default HomeClientPage;
