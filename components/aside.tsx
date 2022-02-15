import styles from "../styles/Aside.module.css";
import { MutableRefObject } from "react";

import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { AppDispatch, RootState } from "../provider";
import { BucketItem } from "../provider/modules/bucket";

import { requestAddBucket } from "../middleware/modules/bucket";

const Aside = () => {
  const bucket = useRef() as MutableRefObject<HTMLInputElement>;

  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const bucketData = useSelector((state: RootState) => state.bucket.data);

  const handleSaveClick = () => {
    const item: BucketItem = {
      id: bucketData.length > 0 ? bucketData[0].id + 1 : 1,
      bucket: bucket.current?.value,
    };
    dispatch(requestAddBucket(item));
    router.push("/home/dashboard");
  };
  return (
    <div>
      <aside className={styles.aside}>
        <h1>💜💜💜💜</h1>
        {/* box_goals */}
        <div className={styles.box_goals}>
          <div className={styles.box_goals_contents}>
            Total goals in your bucket list.
          </div>
          <div className={styles.box_goals_btn}>
            <button type="button" className={styles.box_goals_btn_1}>
              <div className={styles.box_goals_btn_1_div}>
                <span>Remaining</span>
                <span className={styles.box_goals_btn_1_count}>0</span>
              </div>
            </button>
            <button type="button" className={styles.box_goals_btn_2}>
              <div className={styles.box_goals_btn_2_div}>
                <span>Completed</span>
                <span className={styles.box_goals_btn_2_count}>0</span>
              </div>
            </button>
          </div>
        </div>
        {/* box_addList */}
        <div className={styles.box_addList}>
          What's something you always wanted to do?
          <div>
            <select className={styles.box_addList_select}>
              {" "}
              <option value="">✨SELECT✨</option>
              <option value="">Travel🛫</option>
              <option value="">Fun🎉</option>
              <option value="">Adventure💜</option>
              <option value="">Creative🎨</option>
              <option value="">Skills💜</option>
              <option value="">Education💜</option>
              <option value="">Personal💜</option>
            </select>
          </div>
          <form>
            <input
              className={styles.box_addList_add}
              placeholder="PLEASE WRITE"
              ref={bucket}
            ></input>
          </form>
          <button
            type="button"
            className={styles.box_addList_btn}
            onClick={() => {
              handleSaveClick();
            }}
          >
            Add to my Bucket List
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Aside;
