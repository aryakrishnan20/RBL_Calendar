import { FunctionComponent } from "react";
import styles from "./DarkThemeCalender.module.css";

const DarkThemeCalender: FunctionComponent = () => {
  return (
    <div className={styles.darkThemeCalender}>
      <header className={styles.month}>
        <div className={styles.march2023}>March 2023</div>
        <div className={styles.wrapperGroup1}>
          <img
            className={styles.wrapperGroup1Child}
            loading="lazy"
            alt=""
            src="/group-1.svg"
          />
        </div>
      </header>
      <section className={styles.daysOfTheWeek}>
        <div className={styles.sunMon}>
          <div className={styles.day}>
            <div className={styles.sun}>Sun</div>
          </div>
          <div className={styles.day1}>
            <div className={styles.mon}>Mon</div>
          </div>
          <div className={styles.day2}>
            <div className={styles.tue}>Tue</div>
          </div>
          <div className={styles.day3}>
            <div className={styles.wed}>Wed</div>
          </div>
          <div className={styles.day4}>
            <div className={styles.thu}>Thu</div>
          </div>
          <div className={styles.day5}>
            <div className={styles.fri}>Fri</div>
          </div>
          <div className={styles.day6}>
            <div className={styles.sat}>Sat</div>
          </div>
        </div>
        <footer className={styles.componentContainer}>
          <div className={styles.component1}>
            <div className={styles.emptySpace}>1</div>
          </div>
          <div className={styles.component3}>
            <div className={styles.div}>2</div>
          </div>
          <div className={styles.component4}>
            <div className={styles.div1}>3</div>
          </div>
          <div className={styles.component5}>
            <div className={styles.div2}>4</div>
          </div>
          <div className={styles.component6}>
            <div className={styles.div3}>5</div>
          </div>
          <div className={styles.component7}>
            <div className={styles.div4}>6</div>
          </div>
          <div className={styles.component8}>
            <div className={styles.div5}>7</div>
          </div>
          <div className={styles.component11}>
            <div className={styles.div6}>8</div>
          </div>
          <div className={styles.component31}>
            <div className={styles.div7}>9</div>
          </div>
          <div className={styles.component41}>
            <div className={styles.div8}>10</div>
          </div>
          <div className={styles.component51}>
            <div className={styles.div9}>11</div>
          </div>
          <div className={styles.component61}>
            <div className={styles.div10}>12</div>
          </div>
          <div className={styles.component71}>
            <div className={styles.div11}>13</div>
          </div>
          <div className={styles.component81}>
            <div className={styles.div12}>14</div>
          </div>
          <div className={styles.component12}>
            <div className={styles.div13}>15</div>
          </div>
          <div className={styles.component32}>
            <div className={styles.div14}>16</div>
          </div>
          <div className={styles.component42}>
            <div className={styles.div15}>17</div>
          </div>
          <div className={styles.component52}>
            <div className={styles.div16}>18</div>
          </div>
          <div className={styles.component62}>
            <div className={styles.div17}>19</div>
          </div>
          <div className={styles.component72}>
            <div className={styles.div18}>20</div>
          </div>
          <div className={styles.component82}>
            <div className={styles.div19}>21</div>
          </div>
          <div className={styles.component13}>
            <div className={styles.div20}>22</div>
          </div>
          <div className={styles.component33}>
            <div className={styles.div21}>23</div>
          </div>
          <div className={styles.component43}>
            <div className={styles.div22}>24</div>
          </div>
          <div className={styles.component53}>
            <div className={styles.div23}>25</div>
          </div>
          <div className={styles.component63}>
            <div className={styles.div24}>26</div>
          </div>
          <div className={styles.component73}>
            <div className={styles.div25}>27</div>
          </div>
          <div className={styles.component83}>
            <div className={styles.div26}>28</div>
          </div>
          <div className={styles.parentFrame}>
            <div className={styles.component14}>
              <div className={styles.nestedFrames}>29</div>
            </div>
            <div className={styles.component34}>
              <div className={styles.div27}>30</div>
            </div>
            <div className={styles.component44}>
              <div className={styles.div28}>31</div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default DarkThemeCalender;
