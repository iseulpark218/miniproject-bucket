import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BucketItem {
  id: number;
  bucket: string;
  isEdit?: boolean;
}

interface bucketState {
  data: BucketItem[];
  isFetched: boolean;
  isAddCompleted?: boolean;
  isRemoveCompleted?: boolean; 
  isModifyCompleted?: boolean;
 
  isLast?: boolean;
}

const initialState: bucketState = {
  data: [],
  isFetched: false,
  
};

const bucketSlice = createSlice({
  name: "bucket",
  initialState,
  reducers: {
    addBucket: (state, action: PayloadAction<BucketItem>) => {
      const bucket = action.payload;
      console.log("--in reducer function--");
      console.log(bucket);
      state.data.unshift(bucket);
      state.isAddCompleted = true; 
    },

    removeBucket: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.data.splice(
        state.data.findIndex((item) => item.id === id),
        1
      );
      state.isRemoveCompleted = true;
    },
    modifyBucket: (state, action: PayloadAction<BucketItem>) => {
      const modifyItem = action.payload;
      const bucketItem = state.data.find((item) => item.id === modifyItem.id);
      if (bucketItem) {
        bucketItem.bucket = modifyItem.bucket;
       }
           state.isModifyCompleted = true;
    },

  },
});

export const { 
  addBucket, 
  removeBucket, 
  modifyBucket,

} = bucketSlice.actions;


export default bucketSlice.reducer;