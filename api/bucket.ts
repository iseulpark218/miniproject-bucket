import axios from "axios";

export interface BucketItemResponse {
  id: number;
  bucket: string;


}
export interface BucketItemRequest {
  bucket: string;

}

const bucketApi = {
  get: (id: number) =>
    axios.get<BucketItemResponse[]>(`http://ec2-3-36-96-181.ap-northeast-2.compute.amazonaws.com:8080/home/bucket/${id}`),


  add: (bucketItem: BucketItemRequest) =>
    axios.post<BucketItemResponse>(
      `http://ec2-3-36-96-181.ap-northeast-2.compute.amazonaws.com:8080/home/bucket`,
      bucketItem
    ),

  remove: (id: number) =>
    axios.delete<boolean>(`http://ec2-3-36-96-181.ap-northeast-2.compute.amazonaws.com:8080/home/bucket/${id}`),


  modify: (id: number, bucketItem: BucketItemRequest) =>
    axios.put<BucketItemResponse>(
      `http://ec2-3-36-96-181.ap-northeast-2.compute.amazonaws.com:8080/home/bucket/${id}`,
      bucketItem
    )
};

export default bucketApi;