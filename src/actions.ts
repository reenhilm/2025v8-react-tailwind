"use server"

import { Receipt } from "./interfaces";

const API_URL = 'https://reenhilm.github.io/Data';

export const fetchReceipts = async () => {
    //const res = await fetch("https://todoapi.com/receipts");
    const res = await fetch(`${API_URL}/receipts.json`);
    //todo: check if data is ok
    const data: Receipt[] = await res.json();
    return data
}

export const fetchReceiptsByCategory = async (categoryname: string) => {
    console.log(categoryname);
    //todo: actually search for categories using backend
    //const res = await fetch(`https://todoapi.com/receipts?categoryname=${categoryname}`);
    const res = await fetch(`${API_URL}/receipts.json`);
    //todo: check if data is ok
    const data: Receipt[] = await res.json();
    return data
}


export const fetchReceipt = async (id: string) => {
    console.log(id);
    //todo: do search for id on backend instead
    //const res = await fetch(`https://todoapi.com/receipt/${id}`);
    const res = await fetch(`${API_URL}/receipts.json`);
    const dataArr: Receipt[] = await res.json();
    
    //todo: check if data is ok
    const data: Receipt | undefined = await dataArr.find(r => r.id === id);
    return data;
}