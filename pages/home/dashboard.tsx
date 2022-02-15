import Head from "../../components/head";
import Aside from "../../components/aside";
import styles from "../../styles/Dashboard.module.css";

import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../provider";
import { BucketItem } from "../../provider/modules/bucket";
import { useRef, useState } from "react";

const dashboard = () => {
  const bucket = useSelector((state: RootState) => state.bucket);
  const router = useRouter();
  // const dispatch = useDispatch<AppDispatch>();

  const BucketItem = useSelector((state: RootState) =>
    state.bucket.data.find((item) => item.id === +id)
  );

  const isModifyCompleted = useSelector(
    (state: RootState) => state.bucket.isModifyCompleted
  );

  // delete임시
  // const [bucket, setBucket] = useState<BucketItem[]>([
  //   {
  //     id: 2,
  //     bucket: "Typescript",
  //   },
  //   {
  //     id: 1,
  //     bucket: "Typescript",
  //   },
  // ]);

  // const del = (id: number, index: number) => {
  //   console.log(id);
  //   // immer로 state 배열 직접 조작(index로 삭제)
  //   setBucket(
  //     produce((state) => {
  //       state.splice(index, 1);
  //     })
  //   );
  // };

  return (
    <div>
      <div>
        <Head />
      </div>
      <body className={styles.body}>
        <div className={styles.aside}>
          <Aside />
        </div>
        {/* 임시/백엔드예정 */}
        <div className={styles.content_box}>
          <div className={styles.content_box_0} />
          <div className={styles.content_box_1}>
            <span className={styles.content_box_1_head}>박스1</span>
            <div className={styles.content_box_1_iconBoxList}>
              <div className={styles.content_box_1_iconBox}>
                <span className={styles.content_box_1_iconBox_icon}>🎀</span>
                <span className={styles.content_box_1_iconBox_icon_content}>
                  All
                </span>
              </div>
              <div className={styles.content_box_1_iconBox}>
                <span className={styles.content_box_1_iconBox_icon}>🛫</span>
                <span className={styles.content_box_1_iconBox_icon_content}>
                  Travel
                </span>
              </div>
              <div className={styles.content_box_1_iconBox}>
                <span className={styles.content_box_1_iconBox_icon}>💜</span>
                <span className={styles.content_box_1_iconBox_icon_content}>
                  Fun
                </span>
              </div>
              <div className={styles.content_box_1_iconBox}>
                <span className={styles.content_box_1_iconBox_icon}>💜</span>
                <span className={styles.content_box_1_iconBox_icon_content}>
                  Adventure
                </span>
              </div>
              <div className={styles.content_box_1_iconBox}>
                <span className={styles.content_box_1_iconBox_icon}>💜</span>
                <span className={styles.content_box_1_iconBox_icon_content}>
                  Creative
                </span>
              </div>
              <div className={styles.content_box_1_iconBox}>
                <span className={styles.content_box_1_iconBox_icon}>💜</span>
                <span className={styles.content_box_1_iconBox_icon_content}>
                  Skills
                </span>
              </div>
              <div className={styles.content_box_1_iconBox}>
                <span className={styles.content_box_1_iconBox_icon}>💜</span>
                <span className={styles.content_box_1_iconBox_icon_content}>
                  Education
                </span>
              </div>
              <div className={styles.content_box_1_iconBox}>
                <span className={styles.content_box_1_iconBox_icon}>💜</span>
                <span className={styles.content_box_1_iconBox_icon_content}>
                  Personal
                </span>
              </div>
            </div>
          </div>
          {/* box2 시작 - 백엔드연동 list */}
          <div className={styles.content_box_2}>
            <span className={styles.content_box_2_head}>박스2</span>
            <div className={styles.content_box_2_list}>
              {/* 백엔드 연동중 - 시작 */}
              {bucket.data.map((item, index) => (
                <div className={styles.content_box_2_list_line} key={index}>
                  {/* line-left, check box/content */}
                  <div className={styles.content_box_2_list_line_left}>
                    <input
                      type="checkbox"
                      className={styles.content_box_2_list_line_checkbox}
                    ></input>
                    <p
                      className={styles.content_box_2_list_line_content}
                      defaultValue={BucketItem?.bucket}
                      // ref={bucket}
                    >
                      {item.bucket}
                    </p>
                  </div>
                  {/* line-right, delete button */}
                  {/* 임시 -0216 저장버튼 추가 */}
                  {/* 수정할때만 보이는 */}
                  <div className={styles.content_box_2_list_line_save}>
                    <button
                      type="button"
                      className={styles.content_box_2_list_line_save_btn}
                    >
                      저장
                    </button>
                  </div>
                  {/* 임시 -저장버튼 추가 끝 */}
                  <div className={styles.content_box_2_list_line_delete}>
                    <button
                      className={styles.content_box_2_list_line_deleteBtn}
                      // onClick={() => {
                      //   del(item.id, index);
                      // }}
                    >
                      ❌
                    </button>
                  </div>
                </div>
              ))}
              {/* 백엔드 연동중 - 끝 */}
              {/* 더미데이터 시작 */}
              {/* 더미데이터 시작 */}
              {/* line */}
              <div className={styles.content_box_2_list_line}>
                {/* line-left, check box/content */}
                <div className={styles.content_box_2_list_line_left}>
                  <input
                    type="checkbox"
                    className={styles.content_box_2_list_line_checkbox}
                  ></input>
                  <p className={styles.content_box_2_list_line_content}>
                    11111111111111111111111
                  </p>
                </div>
                {/* line-right, delete button */}
                {/* 임시 -0216 저장버튼 추가 */}
                {/* 수정할때만 보이는 */}
                <div className={styles.content_box_2_list_line_save}>
                  <button
                    type="button"
                    className={styles.content_box_2_list_line_save_btn}
                  >
                    저장
                  </button>
                </div>
                {/* 임시 -저장버튼 추가 끝 */}
                <div className={styles.content_box_2_list_line_delete}>
                  <button className={styles.content_box_2_list_line_deleteBtn}>
                    ❌
                  </button>
                </div>
              </div>
              {/* 임시-line2 */}
              <div className={styles.content_box_2_list_line}>
                {/* line-left, check box/content */}
                <div className={styles.content_box_2_list_line_left}>
                  <input
                    type="checkbox"
                    className={styles.content_box_2_list_line_checkbox}
                  ></input>
                  <p className={styles.content_box_2_list_line_content}>
                    11111111111111111111111
                  </p>
                </div>
                {/* line-right, delete button */}
                <div className={styles.content_box_2_list_line_delete}>
                  <button className={styles.content_box_2_list_line_deleteBtn}>
                    ❌
                  </button>
                </div>
              </div>
              {/* 임시-line3 */}
              <div className={styles.content_box_2_list_line}>
                {/* line-left, check box/content */}
                <div className={styles.content_box_2_list_line_left}>
                  <input
                    type="checkbox"
                    className={styles.content_box_2_list_line_checkbox}
                  ></input>
                  <p className={styles.content_box_2_list_line_content}>
                    11111111111111111111111
                  </p>
                </div>
                {/* line-right, delete button */}
                <div className={styles.content_box_2_list_line_delete}>
                  <button className={styles.content_box_2_list_line_deleteBtn}>
                    ❌
                  </button>
                </div>
              </div>
              {/* 임시-line4 */}
              <div className={styles.content_box_2_list_line}>
                {/* line-left, check box/content */}
                <div className={styles.content_box_2_list_line_left}>
                  <input
                    type="checkbox"
                    className={styles.content_box_2_list_line_checkbox}
                  ></input>
                  <p className={styles.content_box_2_list_line_content}>
                    11111111111111111111111
                  </p>
                </div>
                {/* line-right, delete button */}
                <div className={styles.content_box_2_list_line_delete}>
                  <button className={styles.content_box_2_list_line_deleteBtn}>
                    ❌
                  </button>
                </div>
              </div>
              {/* 더미데이터 끝 */}
              {/* 더미데이터 끝 */}
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default dashboard;
