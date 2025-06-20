import axios from "axios";
import { API_BASE_URL } from "../constants/api";
import { DoctorVisitingDays } from "../interfaces/DoctorInterface";
import { Notice } from "../interfaces/NoticeInterface";
import { Offer } from "../interfaces/OfferInterface";
import { Product } from "../interfaces/ProductInterface";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiRequests = {
  getAllVisitingDays: async (): Promise<DoctorVisitingDays[]> => {
    const response = await axiosInstance.get(`/doctor-visiting-days`);
    return response.data.data;
  },

  getAllNotices: async (): Promise<{ data: Notice[] }> => {
    const response = await axiosInstance.get(`/notice`);
    return response.data;
  },

  getAllOffers: async (): Promise<{ data: Offer[] }> => {
    const response = await axiosInstance.get(`/offers`);
    return response.data;
  },

  getAllProducts: async (): Promise<Product[]> => {
    const response = await axiosInstance.get(`/products`);
    return response.data.data;
  },
};
