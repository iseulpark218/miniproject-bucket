import bucketReducer, {
  addBucket,
  modifyBucket,
  removeBucket,
} from "../../provider/modules/bucket";
import { createAction, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { BucketItem } from "../../provider/modules/bucket";
import { call, put, takeEvery, takeLatest } from "@redux-saga/core/effects";
import api, { BucketItemRequest, BucketItemResponse} from "../../api/bucket";
import { AxiosResponse } from "axios";


export interface PageRequest {
  page: number;
  size: number;
}

export const requestAddBucket = createAction<BucketItem>(
  `${bucketReducer.name}/requestAddBucket`
);

export const requestAddBucketNext = createAction<BucketItem>(
  `${bucketReducer.name}/requestAddBucketNext`
);

export const requestFetchBucket = createAction(
  `${bucketReducer.name}/requestFetchBucket`
);

export const requestFetchPagingBucket = createAction<PageRequest>(
  `${bucketReducer.name}/requestFetchPagingBucket`
);

export const requestFetchNextBucket = createAction<PageRequest>(
  `${bucketReducer.name}/requestFetchNextBucket`
);

export const requestFetchBucketItem = createAction<number>(
  `${bucketReducer.name}/requestFetchBucketItem`
);

export const requestRemoveBucket = createAction<number>(
  `${bucketReducer.name}/requestRemoveBucket`
);

export const requestModifyBucket = createAction<BucketItem>(
  `${bucketReducer.name}/requestModifyBucket`
);


//----------------------addData---------------------//
function* addData(action: PayloadAction<BucketItem>) {
  yield console.log("--addData--");
  yield console.log(action);

  try {
    const bucketItemPayload = action.payload;

    const bucketItemRequest: BucketItemRequest = {
  bucket: bucketItemPayload.bucket,
      };

    const result: AxiosResponse<BucketItemResponse> = yield call(
      api.add,
      bucketItemRequest
    );

    const bucketItem: BucketItem = {
      id: result.data.id,
  bucket: result.data.bucket,


    };

    yield put(addBucket(bucketItem));


  } catch (e: any) {

  }
}


//----------------------removeData---------------------//
function* removeData(action: PayloadAction<number>) {
  yield console.log("--removeData--");

  const id = action.payload;

  const result: AxiosResponse<boolean> = yield call(api.remove, id);

  if (result.data) {
    yield put(removeBucket(id));
  }

}

//----------------------modifyData---------------------//
function* modifyData(action: PayloadAction<BucketItem>) {
  yield console.log("--modifyData--");

  const bucketItemPayload = action.payload;

  const bucketItemRequest: BucketItemRequest = {
  bucket: bucketItemPayload.bucket,
  };

  const result: AxiosResponse<BucketItemResponse> = yield call(
    api.modify,
    bucketItemPayload.id,
    bucketItemRequest
  );

  const bucketItem: BucketItem = {
    id: result.data.id,
      bucket: result.data.bucket,
  };

  yield put(modifyBucket(bucketItem));

}

/* ========= saga action을 감지(take)하는 부분 =============== */

export default function* bucketSaga() {
  yield takeEvery(requestAddBucket, addData);
  yield takeEvery(requestRemoveBucket, removeData);
  yield takeEvery(requestModifyBucket, modifyData);
}




