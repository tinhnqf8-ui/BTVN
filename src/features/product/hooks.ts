import { getProductList } from "@/services/product";
import type { AppDispatch } from "@/store";
import type { RootState } from "@/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export function useGetProductList() {
  const dispatch = useDispatch<AppDispatch>();
  const product = useSelector((state: RootState) => {
    return state.product.value;
  });
  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);
  return product;
}
